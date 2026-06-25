import { motion } from 'framer-motion';

const skillGroups = [
  { title: 'Frontend', skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'], progress: 88 },
  { title: 'Backend', skills: ['Java', 'Spring Boot', 'Spring Framework', 'Servlets', 'JDBC', 'Spring(Core,Security,MVC)', 'Maven'], progress: 92 },
  { title: 'Database', skills: ['MySQL', 'Oracle', 'MongoDB'], progress: 84 },
  { title: 'Frameworks', skills: ['Hibernate', 'JPA', 'REST APIs', 'JWT'], progress: 90 },
  { title: 'DSA', skills: ['Arrays', 'Strings', 'Linked Lists', 'Stack', 'Queue', 'Trees', 'Graphs','Recursion', 'Sorting & Searching Algorithms', 'Hashing(Hashmap & Hashset)', 'Time & Space Complexity'], progress: 82 },
  { title: 'Tools', skills: ['Git', 'GitHub', 'STS', 'Eclipse', 'VS Code','postman'], progress: 86 },
];

export default function Skills({ data }) {
  return (
    <section id="skills" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Core Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">Technologies I work with</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gold">{group.title}</h3>
                <span className="text-sm text-cream/70">{group.progress}%</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-gold to-[#ffe082] transition-all duration-700" style={{ width: `${group.progress}%` }} />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-sm text-cream/80">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
