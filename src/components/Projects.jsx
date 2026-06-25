import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects({ projects }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article key={project.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#22150f] shadow-[0_0_40px_rgba(0,0,0,0.25)]">
          <img src={project.image} alt={project.name} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-cream">{project.name}</h3>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">{project.category}</span>
            </div>
            <p className="text-sm leading-7 text-cream/70">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-cream/60">{item}</span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold" />{feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={project.github || '#'} target={project.github ? '_blank' : undefined} rel={project.github ? 'noreferrer' : undefined} className="flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-gold hover:bg-gold/10"><FiGithub /> GitHub</a>
              <a href={project.liveDemo || '#'} target={project.liveDemo ? '_blank' : undefined} rel={project.liveDemo ? 'noreferrer' : undefined} className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[#1A120B] hover:scale-105"><FiExternalLink /> Live Demo</a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
