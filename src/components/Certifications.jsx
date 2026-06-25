import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export default function Certifications({ data }) {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Recognized credentials</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {data.certifications.map((cert, index) => (
            <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-gold">{cert.date}</p>
              <h3 className="mt-3 text-xl font-semibold text-cream">{cert.name}</h3>
              <p className="mt-2 text-cream/70">Issued by {cert.issuer}</p>
              <a href={cert.link || '/Anmol_upadhyay_nayoda_certificat.pdf'} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-gold hover:bg-gold/10"><FiExternalLink /> View Certificate</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
