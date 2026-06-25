import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact({ data }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (honeypot) {
      setStatus({ type: 'error', message: 'Spam detected.' });
      return;
    }

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim()
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.subject || !trimmedData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully. Thank you!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setHoneypot('');
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Let’s build something memorable.</h2>
          <p className="mt-6 text-lg leading-8 text-cream/70">Open to new opportunities, freelance collaborations, and thoughtful product work.</p>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-cream/70">Email</p>
            <a href={`mailto:${data.contact.email}`} className="mt-2 block text-lg text-gold">{data.contact.email}</a>
            <p className="mt-6 text-cream/70">Phone</p>
            <a href={`tel:${data.contact.phone}`} className="mt-2 block text-lg text-gold">{data.contact.phone}</a>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-[#22150f] p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)]" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" name="contact" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <input name="bot-field" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-4 md:grid-cols-2">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none ring-0" required />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none ring-0" required />
          </div>
          <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="mt-4 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none ring-0" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="6" className="mt-4 w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-cream outline-none ring-0" required />
          <button type="submit" disabled={isSubmitting} className="mt-6 rounded-full bg-gold px-6 py-3 font-semibold text-[#1A120B] disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status.message ? <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{status.message}</p> : null}
        </motion.form>
      </div>
    </section>
  );
}
