import { motion } from 'framer-motion';

export default function Experience({ data }) {
  return (
    <section id="experience" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Career Timeline</h2>
        </div>
        <div className="space-y-6">
          {data.experience.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gold">{item.title}</h3>
                  <p className="mt-1 text-cream/70">{item.company}</p>
                </div>
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm text-gold">{item.period}</span>
              </div>
              <p className="mt-4 text-cream/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
