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

// Track user interaction globally
let hasUserInteracted = false;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Skip if user hasn't interacted and at top
      if (!hasUserInteracted && window.scrollY === 0) return;

      hasUserInteracted = true;
      setIsScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        return {
          id: item.href,
          offsetTop: (el as HTMLElement).offsetTop,
          offsetHeight: (el as HTMLElement).offsetHeight,
        };
      }).filter(Boolean) as { id: string; offsetTop: number; offsetHeight: number }[];

      const scrollY = window.scrollY + window.innerHeight / 2;

      let current: string | null = null;
      for (const section of sections) {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    hasUserInteracted = true;

    setTimeout(() => {
      const id = href.replace('#', '');
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });

        setTimeout(() => {
          history.pushState(null, '', href);
        }, 400);
      }
    }, 150);
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
          <Link
            href="/"
            className="relative font-extrabold text-xl md:text-2xl text-white transition duration-300 group"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            <span className="transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#21b4fe] group-hover:via-[#c0a0f7] group-hover:to-[#f77985]">
              SIDDHARTH MISHRA
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>


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
            className="md:hidden backdrop-blur-l shadow-md px-6 pb-6 text-white"
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-medium pt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      'block py-2 px-4 rounded-md hover:bg-cyan-500/20 transition',
                      activeSection === item.href && 'text-cyan-400'
                    )}
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
