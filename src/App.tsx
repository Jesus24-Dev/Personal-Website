'use client';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/Home';
import About from './components/pages/About'; 
import Projects from './components/pages/Projects'; 
// import SkillsSection from './components/pages/Skills'; 
import Navbar from './components/Header/Navbar/Navbar';

export type SectionType = 'Home' | 'About' | 'Projects' | 'Skills';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('Home');
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll suave a secciones
  const scrollToSection = useCallback((id: SectionType) => {
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => {
        setActiveSection(id);
        setIsScrolling(false);
      }, 1000);
    }
  }, []);

  // Detección de sección activa
  useEffect(() => {
    if (isScrolling) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections: SectionType[] = ['Home', 'About', 'Projects', 'Skills'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <div className="relative">
      {/* Navbar fijo */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Contenido principal con secciones */}
      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        <AnimatePresence>
          <Home id="Home" />
          <About id="About" /> 
          <Projects id="Projects" />
          {/*           
          <Skills id="Skills" />  */}
        </AnimatePresence>
      </main>
    </div>
  );
}