import React from 'react';
import { BookOpen, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #8a6e2a, #c9a84c)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={16} color="#0d1b2a" />
              </div>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                Griego NT
              </span>
            </div>
            <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.95rem', color: 'rgba(245,240,232,0.45)', lineHeight: 1.7 }}>
              Instituto Bíblico Teológico Cristiano<br />
              IBTC · 2026<br />
              Griego del Nuevo Testamento para la Exégesis Bíblica
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Navegación
            </div>
            {[
              { label: 'Descripción de la Materia', section: 'materia', sub: 'descripcion' },
              { label: 'Objetivos', section: 'materia', sub: 'objetivos' },
              { label: 'Contenido del Curso', section: 'materia', sub: 'contenido' },
              { label: 'Todas las Lecciones', section: 'lecciones' },
              { label: 'Sonido y Aprendizaje', section: 'alfabeto' },
              { label: 'Acerca del Profesor', section: 'profesor' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => onNavigate(link.section, link.sub)}
                style={{
                  display: 'block', background: 'none', border: 'none',
                  fontFamily: 'Crimson Pro, serif', fontSize: '0.95rem',
                  color: 'rgba(245,240,232,0.5)', cursor: 'pointer',
                  padding: '0.2rem 0', transition: 'color 0.2s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.5)'}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Lecciones quick links */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Lecciones
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.15rem' }}>
              {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => onNavigate('leccion', n)}
                  style={{
                    background: 'none', border: 'none',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
                    color: 'rgba(245,240,232,0.35)', cursor: 'pointer',
                    padding: '0.15rem 0', transition: 'color 0.2s',
                    textAlign: 'left',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(245,240,232,0.35)'}
                >
                  Lec. {String(n).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          {/* Greek verse */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              El Texto Original
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--gold-light)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
              "πᾶσα γραφὴ θεόπνευστος"
            </div>
            <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.85rem', color: 'rgba(245,240,232,0.4)' }}>
              "Toda la Escritura es inspirada por Dios"<br />
              2 Timoteo 3:16
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.85rem', color: 'rgba(245,240,232,0.3)' }}>
            © 2026 IBTC · Dr. William O. Lozano G. · Todos los derechos reservados
          </div>
          <button
            id="footer-scroll-top"
            onClick={scrollTop}
            className="scroll-top-btn"
            title="Volver al inicio"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
