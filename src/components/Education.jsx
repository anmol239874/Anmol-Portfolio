import { motion } from 'framer-motion';

export default function Education({ data }) {
  return (
    <section id="education" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Education</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Academic Path</h2>
        </div>
        <div className="relative border-l border-gold/30 pl-8">
          {data.education.map((item, index) => (
            <motion.div key={item.degree} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="relative mb-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="absolute -left-[2.2rem] top-6 h-4 w-4 rounded-full border-2 border-gold bg-[#1A120B]" />
              <p className="text-sm uppercase tracking-[0.25em] text-gold">{item.year}</p>
              <h3 className="mt-2 text-xl font-semibold text-cream">{item.degree}</h3>
              <p className="mt-1 text-cream/70">{item.college}</p>
              <p className="mt-3 text-sm font-medium text-gold">{item.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
