'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentSection: string | null = null;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop;
          if (scrollPos >= offsetTop) currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  setMenuOpen(false);

  setTimeout(() => {
    const id = href.replace('#', '');
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Smooth scroll
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      // Update URL hash after short delay to ensure scroll starts
      setTimeout(() => {
        history.pushState(null, '', href); // This sets the #hash in the URL without jumping
      }, 400); // adjust timing based on scroll duration
    }
  }, 150); // allows menu close animation to finish
};


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'backdrop-blur-lg bg-white/10 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.h1
          className="text-xl md:text-2xl font-extrabold text-white cursor-pointer"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Link href="/">SIDDHARTH MISHRA</Link>
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium tracking-wide">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={clsx(
                'relative group transition-all',
                activeSection === item.href && 'text-cyan-400'
              )}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={handleNavClick(item.href)}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-lg bg-white/ shadow-md px-6 pb-6 text-white"
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-medium pt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 px-4 rounded-md hover:bg-cyan-500/20 transition"
                    onClick={handleNavClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
