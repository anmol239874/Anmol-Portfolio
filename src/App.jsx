import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from './data/portfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import FunFacts from './components/FunFacts';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setShowScrollTop(window.scrollY > 500);
      setScrollProgress(Math.min(100, Math.max(0, currentScroll)));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialLinks = [
    ...(portfolioData.social.linkedin ? [{ icon: FaLinkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' }] : []),
    ...(portfolioData.social.github ? [{ icon: FaGithub, href: portfolioData.social.github, label: 'GitHub' }] : []),
    ...(portfolioData.social.instagram ? [{ icon: FaInstagram, href: portfolioData.social.instagram, label: 'Instagram' }] : []),
    ...(portfolioData.social.facebook ? [{ icon: FaFacebook, href: portfolioData.social.facebook, label: 'Facebook' }] : []),
    ...(portfolioData.social.twitter ? [{ icon: FaTwitter, href: portfolioData.social.twitter, label: 'Twitter' }] : []),
    { icon: FaEnvelope, href: `mailto:${portfolioData.contact.email}`, label: 'Email' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#1A120B] text-cream">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/10">
        <div className="h-full rounded-r-full bg-gradient-to-r from-gold to-[#ffefb0] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A120B]">
            <div className="text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} className="mx-auto mb-4 h-16 w-16 rounded-full border-4 border-gold border-t-transparent" />
              <p className="text-lg font-semibold tracking-[0.3em] text-gold uppercase">Loading Portfolio</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <section id="projects" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Project Gallery</p>
                <h2 className="text-3xl font-semibold text-cream md:text-4xl">Selected Work</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {['All', 'Full Stack'].map((filter) => (
                  <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter ? 'border-gold bg-gold/20 text-gold' : 'border-white/10 text-cream/70 hover:border-gold/40 hover:text-gold'}`}>
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <Projects projects={filteredProjects} />
          </div>
        </section>
        <Experience data={portfolioData} />
        <Education data={portfolioData} />
        <Certifications data={portfolioData} />
        <Achievements data={portfolioData} />
        <Testimonials data={portfolioData} />
        <FunFacts data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-gold/40 bg-[#1A120B]/80 p-3 text-gold shadow-gold backdrop-blur transition hover:-translate-y-1 hover:bg-gold/20">
            <Icon />
          </a>
        ))}
      </div>

      <AnimatePresence>
        {showScrollTop ? (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-6 z-40 rounded-full bg-gold p-3 text-[#1A120B] shadow-gold">
            <FaArrowUp />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
