import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, BookOpen, Sun, Moon } from 'lucide-react';

const leccionesGrupos = [
  {
    label: "Lecciones 1–4",
    items: [
      { id: 1, label: "Lec. 1 · El Mapa General" },
      { id: 2, label: "Lec. 2 · De Alfa a Omega" },
      { id: 3, label: "Lec. 3 · Signos y Divisiones" },
      { id: 4, label: "Lec. 4 · Introducción al Verbo" },
    ],
  },
  {
    label: "Lecciones 5–8",
    items: [
      { id: 5, label: "Lec. 5 · Presente Activo" },
      { id: 6, label: "Lec. 6 · Segunda Declinación" },
      { id: 7, label: "Lec. 7 · Primera Declinación" },
      { id: 8, label: "Lec. 8 · Adjetivos" },
    ],
  },
  {
    label: "Lecciones 9–12",
    items: [
      { id: 9, label: "Lec. 9 · Pronombres Personales" },
      { id: 10, label: "Lec. 10 · Preposiciones" },
      { id: 11, label: "Lec. 11 · Verbo εἰμί" },
      { id: 12, label: "Lec. 12 · Voces Media y Pasiva" },
    ],
  },
  {
    label: "Lecciones 13–16",
    items: [
      { id: 13, label: "Lec. 13 · Imperfecto" },
      { id: 14, label: "Lec. 14 · Futuro" },
      { id: 15, label: "Lec. 15 · Verbos Contractos" },
      { id: 16, label: "Lec. 16 · Demostrativos" },
    ],
  },
];

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null); // 'materia' | 'lecciones'
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const dropdownRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navigate = (section, extra) => {
    onNavigate(section, extra);
    setDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <nav className="navbar" style={{ padding: scrolled ? '0.6rem 0' : '0.85rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => navigate('hero')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <div style={{
              width: '36px', height: '36px',
              background: 'linear-gradient(135deg, #8a6e2a, #c9a84c)',
              borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BookOpen size={18} color="#0d1b2a" strokeWidth={2} />
            </div>
            <div className="navbar-logo">
              <span>Griego NT</span>
              <span style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.75rem', display: 'block', lineHeight: 1, marginTop: '1px', letterSpacing: '0.12em', fontFamily: 'JetBrains Mono, monospace', fontWeight: 300 }}>IBTC · 2026</span>
            </div>
          </button>

          {/* Desktop nav */}
          <div ref={dropdownRef} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
            {/* Sobre la Materia */}
            <div style={{ position: 'relative' }}>
              <button
                id="nav-materia"
                className={`nav-link ${activeSection === 'materia' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                onClick={() => setDropdown(dropdown === 'materia' ? null : 'materia')}
              >
                Sobre la Materia
                <ChevronDown size={14} style={{ transition: 'transform 0.25s', transform: dropdown === 'materia' ? 'rotate(180deg)' : 'none', opacity: 0.7 }} />
              </button>
              {dropdown === 'materia' && (
                <div className="dropdown-menu" style={{ minWidth: '240px' }}>
                  <button className="dropdown-item" id="nav-descripcion" onClick={() => navigate('materia', 'descripcion')}>Descripción de la Materia</button>
                  <button className="dropdown-item" id="nav-objetivos" onClick={() => navigate('materia', 'objetivos')}>Objetivos de la Materia</button>
                  <button className="dropdown-item" id="nav-contenido" onClick={() => navigate('materia', 'contenido')}>Contenido de la Materia</button>
                </div>
              )}
            </div>

            {/* Lecciones */}
            <div style={{ position: 'relative' }}>
              <button
                id="nav-lecciones"
                className={`nav-link ${activeSection === 'lecciones' ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                onClick={() => setDropdown(dropdown === 'lecciones' ? null : 'lecciones')}
              >
                Lecciones
                <ChevronDown size={14} style={{ transition: 'transform 0.25s', transform: dropdown === 'lecciones' ? 'rotate(180deg)' : 'none', opacity: 0.7 }} />
              </button>
              {dropdown === 'lecciones' && (
                <div className="dropdown-menu" style={{ minWidth: '580px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                  {leccionesGrupos.map((grupo) => (
                    <div key={grupo.label}>
                      <div className="dropdown-sub-label">{grupo.label}</div>
                      {grupo.items.map((item) => (
                        <button key={item.id} className="dropdown-item" id={`nav-leccion-${item.id}`} onClick={() => navigate('leccion', item.id)}>
                          {item.label}
                        </button>
                      ))}
                      <div className="dropdown-divider" />
                    </div>
                  ))}
                  <div style={{ gridColumn: '1 / -1', padding: '0.5rem 1rem 0.25rem' }}>
                    <button className="dropdown-item" style={{ color: 'var(--gold)', fontSize: '0.9rem' }} onClick={() => navigate('lecciones')}>
                      → Ver todas las lecciones
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button id="nav-sonido" className={`nav-link ${activeSection === 'alfabeto' ? 'active' : ''}`} style={{ background: 'none', border: 'none' }} onClick={() => navigate('alfabeto')}>
              Sonido y Aprendizaje
            </button>

            <button id="nav-profesor" className={`nav-link ${activeSection === 'profesor' ? 'active' : ''}`} style={{ background: 'none', border: 'none' }} onClick={() => navigate('profesor')}>
              Acerca del Profesor
            </button>
            <button
              onClick={toggleTheme}
              className="nav-link"
              style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', padding: '0.4rem', marginLeft: '0.5rem' }}
              title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} color="var(--gold-light)" />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--parchment)', cursor: 'pointer', padding: '0.5rem' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {/* Sobre la Materia */}
          <div>
            <div className="mobile-nav-item" onClick={() => setMobileExpanded(mobileExpanded === 'materia' ? null : 'materia')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Sobre la Materia
              <ChevronDown size={18} style={{ transform: mobileExpanded === 'materia' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--gold)', opacity: 0.7 }} />
            </div>
            {mobileExpanded === 'materia' && (
              <div className="mobile-nav-subitems">
                <span className="mobile-nav-subitem" onClick={() => navigate('materia', 'descripcion')}>Descripción de la Materia</span>
                <span className="mobile-nav-subitem" onClick={() => navigate('materia', 'objetivos')}>Objetivos de la Materia</span>
                <span className="mobile-nav-subitem" onClick={() => navigate('materia', 'contenido')}>Contenido de la Materia</span>
              </div>
            )}
          </div>

          {/* Lecciones groups */}
          <div>
            <div className="mobile-nav-item" onClick={() => setMobileExpanded(mobileExpanded === 'lecciones' ? null : 'lecciones')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Lecciones
              <ChevronDown size={18} style={{ transform: mobileExpanded === 'lecciones' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--gold)', opacity: 0.7 }} />
            </div>
            {mobileExpanded === 'lecciones' && (
              <div className="mobile-nav-subitems">
                {leccionesGrupos.map((grupo) => (
                  <React.Fragment key={grupo.label}>
                    <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.5rem 0 0.2rem' }}>{grupo.label}</div>
                    {grupo.items.map((item) => (
                      <span key={item.id} className="mobile-nav-subitem" onClick={() => navigate('leccion', item.id)}>{item.label}</span>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-nav-item" onClick={() => navigate('alfabeto')}>Sonido y Aprendizaje</div>
          <div className="mobile-nav-item" onClick={() => navigate('profesor')}>Acerca del Profesor</div>
          <div className="mobile-nav-item" onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} color="var(--gold-light)" />}
            Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
