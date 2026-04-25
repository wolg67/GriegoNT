import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SobreMateria from './components/SobreMateria';
import LeccionesSection from './components/LeccionesSection';
import AlfabetoSection from './components/AlfabetoSection';
import ProfesorSection from './components/ProfesorSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [materiaSubSection, setMateriaSubSection] = useState('descripcion');
  const [selectedLeccionId, setSelectedLeccionId] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for each section
  const sectionRefs = {
    hero: useRef(null),
    materia: useRef(null),
    lecciones: useRef(null),
    alfabeto: useRef(null),
    profesor: useRef(null),
  };

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const scrollPos = window.scrollY + 120;
      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const bottom = top + ref.current.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(key);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, offset = 80) => {
    const el = sectionRefs[sectionId]?.current;
    if (el) {
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleNavigate = (section, extra) => {
    if (section === 'leccion') {
      setSelectedLeccionId(extra);
      // If we're navigating to a specific lesson, scroll to lecciones
      setTimeout(() => scrollToSection('lecciones'), 50);
      return;
    }

    if (section === 'materia' && extra) {
      setMateriaSubSection(extra);
    }

    // Reset lesson selection when navigating away
    if (section !== 'lecciones') {
      setSelectedLeccionId(null);
    }

    setTimeout(() => scrollToSection(section), 50);
  };

  const handleSelectLeccion = (id) => {
    setSelectedLeccionId(id);
    if (id !== null) {
      setTimeout(() => scrollToSection('lecciones'), 50);
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Sections */}
      <div ref={sectionRefs.hero}>
        <HeroSection onNavigate={handleNavigate} />
      </div>

      <div ref={sectionRefs.materia}>
        <SobreMateria subSection={materiaSubSection} onNavigateToLeccion={(id) => handleNavigate('leccion', id)} />
      </div>

      <div ref={sectionRefs.lecciones}>
        <LeccionesSection
          selectedLeccionId={selectedLeccionId}
          onSelectLeccion={handleSelectLeccion}
        />
      </div>

      <div ref={sectionRefs.alfabeto}>
        <AlfabetoSection />
      </div>

      <div ref={sectionRefs.profesor}>
        <ProfesorSection />
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
