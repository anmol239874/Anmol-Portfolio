import { motion } from 'framer-motion';

export default function Achievements({ data }) {
  return (
    <section className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Achievements</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Milestones that matter</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.achievements.map((achievement, index) => (
            <motion.div key={achievement.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-gold/10 to-transparent p-6 text-center backdrop-blur-xl">
              <p className="text-3xl font-semibold text-gold">{achievement.value}</p>
              <h3 className="mt-3 text-lg font-semibold text-cream">{achievement.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{achievement.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
