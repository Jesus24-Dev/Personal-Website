'use client';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';
import Skills from '../components/pages/Skills';
import Contact from '../components/pages/Contact';
import Navbar from '../components/Header/Navbar/Navbar';

export type SectionType = 'Home' | 'About' | 'Projects' | 'Skills' | 'Contact';

const sections: SectionType[] = [
  'Home',
  'About',
  'Projects',
  'Skills',
  'Contact',
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionType>('Home');

  const scrollToSection = useCallback((id: SectionType) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionType);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="overflow-x-hidden">
        <AnimatePresence>
          <Home id="Home" />
          <About id="About" />
          <Projects id="Projects" />
          <Skills id="Skills" />
          <Contact id="Contact" />
        </AnimatePresence>
      </main>
    </div>
  );
}
