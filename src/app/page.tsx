'use client';

import { useEffect, useRef } from 'react';
import Contact from './components/Contact-section';
import EducationHero from './components/Education-section';
import Header from './components/Header';
import Hero from './components/Hero-section';
import Projects from './components/Project-section';
import RatingModal from './components/Rating-modal';
import Skills from './components/Skills-section';

export default function Home() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const moveOrb = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      orb.animate(
        {
          transform: `translate(${clientX - 150}px, ${clientY - 150}px)`,
        },
        {
          duration: 400,
          fill: 'forwards',
          easing: 'ease-out',
        }
      );
    };

    document.addEventListener('mousemove', moveOrb);
    return () => document.removeEventListener('mousemove', moveOrb);
  }, []);

  return (
    <div className="portfolio-wrapper relative overflow-hidden">
      {/* 🎨 Vibrant Fluid Cursor Orb */}
      <div
        ref={orbRef}
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-500 via-violet-600 to-cyan-400 opacity-30 blur-3xl mix-blend-screen z-0"
      />


      {/* 🌐 Main Site – Hidden on Mobile */}
      <div className="block relative z-10">
        <Header />
        <Hero />
        <EducationHero />
        <Skills />
        <Projects />
        <Contact />

      <RatingModal />
      </div>
    </div>
  );
}
