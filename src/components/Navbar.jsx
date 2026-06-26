import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  doc,
  getDoc,
  updateDoc,
  increment,
} from 'firebase/firestore';


export default function Navbar() {
  const [views, setViews] = useState(0);
  useEffect(() => {
  async function loadViews() {
    const docRef = doc(db, "visitors", "counter");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
  await updateDoc(docRef, {
    views: increment(1),
  });

  setViews(docSnap.data().views + 1);
}
  }

  loadViews();
}, []);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#1A120B]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a href="#hero" className="text-lg font-semibold tracking-[0.25em] text-gold uppercase">Anmol</a>
        <div className="hidden gap-6 text-sm text-cream/80 md:flex">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">{item}</a>
          ))}
        </div>
        <div className="hidden md:block text-sm font-medium text-gold">
  👁 Profile Views: {views}
</div>
        <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">Let’s Talk</motion.a>
      </nav>
    </header>
  );
}
