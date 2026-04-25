import React, { useState } from 'react';
import { BookOpen, Target, Layout, ChevronDown } from 'lucide-react';
import { contenidoMateria, lecciones } from '../data/lecciones';

const tabs = [
  { id: 'descripcion', label: 'Descripción', icon: BookOpen },
  { id: 'objetivos', label: 'Objetivos', icon: Target },
  { id: 'contenido', label: 'Contenido', icon: Layout },
];

export default function SobreMateria({ subSection, onNavigateToLeccion }) {
  const [activeTab, setActiveTab] = useState(subSection || 'descripcion');

  React.useEffect(() => {
    if (subSection) setActiveTab(subSection);
  }, [subSection]);

  return (
    <section id="materia" style={{ background: 'var(--cream)', padding: '6rem 0' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label">Información Académica</div>
          <h2 className="section-title">Sobre la Materia</h2>
          <div className="section-divider" />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {activeTab === 'descripcion' && (
          <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Main description */}
            <div className="materia-card" style={{ gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="materia-icon"><BookOpen size={22} /></div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>
                  {contenidoMateria.descripcion.titulo}
                </h3>
              </div>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {contenidoMateria.descripcion.texto.map((p, i) => (
                  <p key={i} style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(26,18,8,0.8)', lineHeight: 1.8, margin: 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Info cards */}
            {[
              { title: 'Idioma', value: 'Griego Koiné', desc: 'El griego común del mundo mediterráneo del siglo I' },
              { title: 'Duración', value: '16 Lecciones', desc: 'Curso progresivo con profundización gradual' },
              { title: 'Nivel', value: 'Principiante–Intermedio', desc: 'No se requiere conocimiento previo del griego' },
            ].map((info, i) => (
              <div key={i} className="materia-card">
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '0.5rem' }}>{info.title}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>{info.value}</div>
                <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.95rem', color: 'rgba(26,18,8,0.6)' }}>{info.desc}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'objetivos' && (
          <div className="animate-fade-in">
            <div className="materia-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div className="materia-icon"><Target size={22} /></div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>
                  {contenidoMateria.objetivos.titulo}
                </h3>
              </div>
              <div>
                {contenidoMateria.objetivos.items.map((obj) => (
                  <div key={obj.num} className="objective-item">
                    <div className="objective-number">{obj.num}</div>
                    <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(26,18,8,0.8)', lineHeight: 1.7 }}>
                      {obj.texto}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contenido' && (
          <div className="animate-fade-in" style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="materia-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div className="materia-icon"><Layout size={22} /></div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>
                  {contenidoMateria.contenido.titulo}
                </h3>
              </div>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {contenidoMateria.contenido.unidades.map((unidad, ui) => (
                  <div key={ui} style={{
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))',
                      padding: '1rem 1.5rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                          Unidad {ui + 1}
                        </div>
                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--parchment)' }}>
                          {unidad.titulo}
                        </div>
                        <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.9rem', color: 'rgba(245,240,232,0.55)', marginTop: '0.2rem' }}>
                          {unidad.descripcion}
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '1rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {unidad.lecciones.map((lecId) => {
                        const lec = lecciones.find(l => l.id === lecId);
                        return lec ? (
                          <button
                            key={lecId}
                            id={`contenido-lec-${lecId}`}
                            onClick={() => onNavigateToLeccion(lecId)}
                            style={{
                              fontFamily: 'Crimson Pro, serif',
                              fontSize: '0.9rem',
                              color: 'var(--navy)',
                              background: 'rgba(201,168,76,0.08)',
                              border: '1px solid rgba(201,168,76,0.2)',
                              borderRadius: '2px',
                              padding: '0.3rem 0.75rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => { e.target.style.background = 'var(--navy)'; e.target.style.color = 'var(--gold-light)'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'rgba(201,168,76,0.08)'; e.target.style.color = 'var(--navy)'; }}
                          >
                            Lec. {lecId} · {lec.titulo}
                          </button>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
