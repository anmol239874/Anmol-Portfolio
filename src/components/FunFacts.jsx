import { motion } from 'framer-motion';

export default function FunFacts({ data }) {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Fun Facts</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">A few personal notes</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {data.funFacts.map((fact, index) => (
            <motion.div key={fact} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.4 }} className="rounded-[1.25rem] border border-gold/20 bg-[#24160f] p-5 text-center text-cream/80">
              {fact}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
