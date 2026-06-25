import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function Hero({ data }) {
  const [displayText, setDisplayText] = useState('');
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const roles = ['DSA Enthusiast', 'Java Full-Stack Developer', 'Backend-Focused Builder'];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
      .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');

    let index = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(roles[index].slice(0, charIndex));
      charIndex += 1;
      if (charIndex > roles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          let backIndex = roles[index].length;
          const backInterval = setInterval(() => {
            setDisplayText(roles[index].slice(0, backIndex));
            backIndex -= 1;
            if (backIndex < 0) {
              clearInterval(backInterval);
              index = (index + 1) % roles.length;
              charIndex = 0;
              setTimeout(() => {
                const nextInterval = setInterval(() => {
                  setDisplayText(roles[index].slice(0, charIndex));
                  charIndex += 1;
                  if (charIndex > roles[index].length) {
                    clearInterval(nextInterval);
                  }
                }, 80);
                setTimeout(() => {}, 100);
              }, 600);
            }
          }, 50);
        }, 1000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16 lg:py-32">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Designing elegant digital products</p>
          <h1 ref={titleRef} className="text-5xl font-black leading-tight sm:text-7xl">
            Hi, I’m <span className="text-gold">{data.name}</span>
          </h1>
          <div ref={subtitleRef} className="mt-4 h-12 text-2xl font-semibold text-cream/80 sm:text-3xl">{displayText}<span className="ml-1 animate-pulse text-gold">|</span></div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/70">{data.profileSummary}</p>
          <div ref={buttonsRef} className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-gold px-6 py-3 font-semibold text-[#1A120B] transition hover:scale-105">Contact Me</a>
            <a href="/public/Anmol_Resume.pdf" className="flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-semibold text-gold transition hover:bg-gold/10"><FiDownload /> Download Resume</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-[#fff]/10 blur-3xl" />
          <img src="/Public/Picsart_26-06-25_15-43-27-639.png" alt="Software engineer at work" className="relative h-[520px] w-full rounded-[2rem] border border-white/10 object-cover shadow-gold" />
        </motion.div>
      </div>
    </section>
  );
}
