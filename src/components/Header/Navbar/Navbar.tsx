'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarCard from './NavbarCard';

export type SectionType = 'Home' | 'About' | 'Projects' | 'Skills';

export interface NavItem {
  id: SectionType;
  label: string;
  icon?: React.ReactNode;
}
interface NavbarProps {
  activeSection: SectionType;
  scrollToSection: (id: SectionType) => void;
}

const NAV_ITEMS: { id: SectionType; label: string }[] = [
  { id: 'Home', label: 'Home' },
  { id: 'About', label: 'About' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Skills', label: 'Skills' }
];

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (id: SectionType) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between py-3 fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur-sm px-4 lg:px-8 border-b border-slate-800/50">
      <NavbarCard />
      
      {/* Botón Hamburguesa (Mobile) */}
      <motion.button
        className="lg:hidden p-2 rounded-md text-lime-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>
      
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:items-center`}
          >
            <ul className="flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-1 lg:gap-4 mt-4 lg:mt-0 w-full">
              {NAV_ITEMS.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 block relative font-medium text-sm lg:text-base ${
                      activeSection === item.id 
                        ? 'text-lime-200' 
                        : 'text-white/90 hover:text-lime-100'
                    } transition-colors duration-200`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        layoutId="navIndicator"
                        className="absolute left-4 right-4 bottom-1 h-0.5 bg-lime-200"
                        initial={false}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}