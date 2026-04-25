import React, { useState } from 'react';
import { lecciones } from '../data/lecciones';
import { ChevronRight, ArrowLeft, BookOpen } from 'lucide-react';

function LeccionDetail({ leccion, onBack }) {
  return (
    <div id={`leccion-${leccion.id}`} className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <button
        id="leccion-back-btn"
        onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: 'none', border: 'none',
          color: 'var(--gold)', cursor: 'pointer',
          fontFamily: 'Crimson Pro, serif', fontSize: '1rem',
          marginBottom: '2rem', padding: 0,
        }}
      >
        <ArrowLeft size={16} />
        Volver a todas las lecciones
      </button>

      {/* Header */}
      <div className="leccion-detail-header" data-greek={leccion.letraGriega}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          {leccion.numero}
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--parchment)', margin: '0 0 0.5rem' }}>
          {leccion.titulo}
        </h2>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--gold-light)', marginBottom: '1.5rem' }}>
          {leccion.subtitulo}
        </div>
        <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.7, margin: 0, maxWidth: '600px' }}>
          {leccion.descripcion}
        </p>

        {/* Topics list */}
        <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {leccion.temas.map((t) => (
            <span key={t.roman} style={{
              fontFamily: 'Crimson Pro, serif', fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.7)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '2px', padding: '0.3rem 0.75rem',
            }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{t.roman}.</span> {t.tema}
            </span>
          ))}
        </div>
      </div>

      {/* Introduction */}
      {leccion.contenido && (
        <div style={{ background: 'white', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', padding: '2rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <BookOpen size={18} color="var(--gold-dark)" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)' }}>Introducción</span>
          </div>
          <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.15rem', color: 'rgba(26,18,8,0.8)', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>
            {leccion.contenido.introduccion}
          </p>
        </div>
      )}

      {/* Sections */}
      {leccion.contenido?.secciones.map((sec, i) => (
        <div key={i} style={{
          background: 'white',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '4px',
          padding: '2rem',
          marginBottom: '1rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '3px', height: '100%',
            background: `linear-gradient(180deg, var(--gold) ${i * 25}%, var(--gold-dark))`,
          }} />
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600,
            color: 'var(--navy)', margin: '0 0 1rem', paddingLeft: '0.75rem',
          }}>
            {sec.titulo}
          </h3>
          <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.05rem', color: 'rgba(26,18,8,0.8)', lineHeight: 1.8, margin: 0, paddingLeft: '0.75rem' }}>
            {sec.texto}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function LeccionesSection({ selectedLeccionId, onSelectLeccion }) {
  const LECS_PER_PAGE = 16;

  if (selectedLeccionId) {
    const leccion = lecciones.find((l) => l.id === selectedLeccionId);
    if (leccion) {
      return (
        <section id="lecciones" style={{ background: 'var(--cream)', padding: '6rem 0' }}>
          <div className="section-container">
            <LeccionDetail leccion={leccion} onBack={() => onSelectLeccion(null)} />
          </div>
        </section>
      );
    }
  }

  return (
    <section id="lecciones" className="lecciones-section">
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label" style={{ color: 'rgba(201,168,76,0.7)' }}>Plan de Estudios</div>
          <h2 className="section-title" style={{ color: 'var(--parchment)' }}>Las 16 Lecciones</h2>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(245,240,232,0.55)', maxWidth: '600px' }}>
            Un recorrido sistemático por la gramática del griego koiné, desde los fundamentos hasta estructuras avanzadas.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {lecciones.map((lec, i) => (
            <div
              key={lec.id}
              id={`leccion-card-${lec.id}`}
              className="leccion-card"
              onClick={() => onSelectLeccion(lec.id)}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div className="leccion-number">{lec.numero}</div>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem', fontWeight: 300,
                  color: 'rgba(201,168,76,0.25)',
                  lineHeight: 1,
                }}>
                  {lec.letraGriega}
                </div>
              </div>

              <div className="leccion-title">{lec.titulo}</div>
              <div className="leccion-subtitle-text">{lec.subtitulo}</div>

              <div className="leccion-topics">
                {lec.temas.map((t) => (
                  <span key={t.roman}>
                    <span style={{ color: 'rgba(201,168,76,0.6)' }}>{t.roman}.</span> {t.tema}
                    {t !== lec.temas[lec.temas.length - 1] ? ' · ' : ''}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
                <span style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.85rem', color: 'rgba(201,168,76,0.6)' }}>Ver lección</span>
                <ChevronRight size={13} color="rgba(201,168,76,0.6)" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
