import { motion } from 'framer-motion';

export default function Testimonials({ data }) {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">What collaborators say</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {data.testimonials.map((item, index) => (
            <motion.blockquote key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-lg leading-8 text-cream/80">“{item.quote}”</p>
              <footer className="mt-6 text-gold">{item.name} — {item.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
