import { motion } from 'framer-motion';

export default function About({ data }) {
  return (
    <section id="about" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">About Me</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Crafting thoughtful software with intention.</h2>
          <p className="mt-6 text-lg leading-8 text-cream/70">{data.objective}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.strengths.map((strength) => (
              <span key={strength} className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">{strength}</span>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {data.stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <p className="text-3xl font-semibold text-gold">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cream/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
