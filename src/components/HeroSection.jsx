import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
      el.style.opacity = '0';
      el.classList.add('animate-fade-in-up');
    });
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero-section" style={{ paddingTop: '80px' }}>
      {/* Background pattern */}
      <div className="hero-bg-pattern" />

      {/* Geometric decorative lines */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: '1px', height: '200px',
          background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.25), transparent)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '6%',
          width: '120px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
        }} />
        <div style={{
          position: 'absolute', top: '30%', left: '5%',
          width: '60px', height: '60px',
          border: '1px solid rgba(201,168,76,0.1)',
          borderRadius: '2px',
          transform: 'rotate(15deg)',
        }} />
        <div style={{
          position: 'absolute', bottom: '25%', right: '12%',
          width: '40px', height: '40px',
          border: '1px solid rgba(201,168,76,0.12)',
          borderRadius: '2px',
          transform: 'rotate(-10deg)',
        }} />
      </div>

      {/* Greek watermark */}
      <div className="hero-greek-bg">
        <div className="hero-greek-watermark">ΛΟΓΟΣ</div>
      </div>

      {/* Content */}
      <div className="section-container" style={{ width: '100%' }}>
        <div className="hero-content">
          <div data-animate style={{ marginBottom: '1.5rem' }}>
            <span className="hero-label">IBTC · Instituto Bíblico en Teologia y Consejeria Profesional</span>
          </div>

          <h1 data-animate className="hero-title">
            Griego del<br />
            <span>Nuevo Testamento</span><br />
            para la Exégesis Bíblico
          </h1>

          <p data-animate className="hero-subtitle">
            Un viaje lingüístico desde el Alfa hasta el Omega del idioma<br className="hidden-mobile" />
            que preservó la Palabra de Dios para todas las generaciones
          </p>

          {/* Greek quote */}
          <div data-animate style={{ margin: '2rem 0', padding: '1.5rem 2rem', borderLeft: '2px solid rgba(201,168,76,0.4)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
            <div className="hero-greek-quote">
              "Ἐν ἀρχῇ ἦν ὁ Λόγος"
            </div>
            <div className="hero-quote-ref">Juan 1:1 · En el principio era el Verbo</div>
          </div>

          {/* CTA buttons */}
          <div data-animate style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <button id="hero-cta-lecciones" className="btn-primary" onClick={() => onNavigate('lecciones')}>
              Comenzar Lecciones →
            </button>
            <button id="hero-cta-materia" className="btn-outline" onClick={() => onNavigate('materia')}>
              Sobre la Materia
            </button>
          </div>

          {/* Stats */}
          <div data-animate style={{
            display: 'flex', gap: '0', justifyContent: 'center',
            marginTop: '3.5rem', flexWrap: 'wrap',
          }}>
            {[
              { n: '16', label: 'Lecciones' },
              { n: '24', label: 'Letras del Alfabeto' },
              { n: '4', label: 'Grandes Áreas' },
              { n: '∞', label: 'Vida para el Texto' },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '1rem 2rem',
                borderRight: i < 3 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--gold-light)', lineHeight: 1 }}>
                  {stat.n}
                </div>
                <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)', marginTop: '0.35rem', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="hero-scroll-down"
        onClick={() => onNavigate('materia')}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: 'none', color: 'rgba(201,168,76,0.5)',
          cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
        }}
        className="animate-float"
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Explorar</span>
        <ChevronDown size={16} />
      </button>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
