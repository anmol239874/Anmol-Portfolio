import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1A120B]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a href="#hero" className="text-lg font-semibold tracking-[0.25em] text-gold uppercase">Anmol</a>
        <div className="hidden gap-6 text-sm text-cream/80 md:flex">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">{item}</a>
          ))}
        </div>
        <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">Let’s Talk</motion.a>
      </nav>
    </header>
  );
}
