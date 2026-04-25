import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { alfabetoGriego } from '../data/lecciones';

// Uses Web Speech API for text-to-speech pronunciation
function speakGreekLetter(letra) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(letra.silaba);
  utterance.lang = 'es-ES';
  utterance.rate = 0.8;
  utterance.pitch = 1.1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
}

export default function AlfabetoSection() {
  const [playingIdx, setPlayingIdx] = useState(null);
  const [filter, setFilter] = useState('todas'); // 'todas' | 'vocales' | 'consonantes'

  const vocales = ['Α', 'Ε', 'Η', 'Ι', 'Ο', 'Υ', 'Ω'];
  const isVocal = (letra) => vocales.includes(letra.mayuscula);

  const filtered = filter === 'vocales'
    ? alfabetoGriego.filter(isVocal)
    : filter === 'consonantes'
    ? alfabetoGriego.filter((l) => !isVocal(l))
    : alfabetoGriego;

  const handlePlay = (letra, idx) => {
    setPlayingIdx(idx);
    speakGreekLetter(letra);
    setTimeout(() => setPlayingIdx(null), 2000);
  };

  return (
    <section id="alfabeto" className="alfabeto-section">
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-label">Sonido y Aprendizaje</div>
          <h2 className="section-title">El Alfabeto Griego</h2>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(26,18,8,0.65)', maxWidth: '580px' }}>
            Las 24 letras del alfabeto griego koiné. Haz clic en cualquier letra para escuchar su pronunciación y nombre.
          </p>

          {/* Filter buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'todas', label: 'Todas (24)' },
              { id: 'vocales', label: 'Vocales (7)' },
              { id: 'consonantes', label: 'Consonantes (17)' },
            ].map((f) => (
              <button
                key={f.id}
                id={`filter-${f.id}`}
                className={`tab-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Alphabet grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: '0.85rem',
        }}>
          {filtered.map((letra, idx) => (
            <button
              key={letra.nombre}
              id={`letra-${letra.nombre.toLowerCase()}`}
              className={`letra-card ${playingIdx === idx ? 'playing' : ''}`}
              onClick={() => handlePlay(letra, idx)}
              title={`${letra.nombre} - Clic para escuchar`}
            >
              {/* Main letter display */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
                <span className="letra-greek">{letra.mayuscula}</span>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.4rem', fontWeight: 400, color: 'inherit',
                  transition: 'color 0.3s ease',
                }} className="letra-greek">{letra.minuscula}</span>
              </div>

              <span className="letra-name">{letra.nombre}</span>
              <span className="letra-transliteration">{letra.transliteracion}</span>

              {/* Sound indicator */}
              <div className="sound-icon">
                {playingIdx === idx ? (
                  <div className="sound-wave">
                    <span /><span /><span /><span />
                  </div>
                ) : (
                  <Volume2 size={13} />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Diphthongs section */}
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '1rem' }}>
            Diptongos del Griego
          </h3>
          <div className="section-divider" />
          <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1rem', color: 'rgba(26,18,8,0.65)', marginBottom: '1.5rem' }}>
            Los diptongos son combinaciones de dos vocales que forman una sola sílaba.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {[
              { dip: 'αι', pron: 'ai (como en aire)' },
              { dip: 'ει', pron: 'ei (como en ley)' },
              { dip: 'οι', pron: 'oi (como en hoy)' },
              { dip: 'υι', pron: 'ui (como en Luis)' },
              { dip: 'αυ', pron: 'au (como en jaula)' },
              { dip: 'ευ', pron: 'eu (como en Europa)' },
              { dip: 'ου', pron: 'ou (como en tour)' },
              { dip: 'ηυ', pron: 'eu largo' },
            ].map((dip) => (
              <div key={dip.dip} style={{
                background: 'white',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '4px',
                padding: '0.75rem 1rem',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.25rem' }}>
                  {dip.dip}
                </div>
                <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.8rem', color: 'rgba(26,18,8,0.6)', lineHeight: 1.3 }}>
                  {dip.pron}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pronunciation guide */}
        <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))', borderRadius: '8px', padding: '2.5rem' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '1.5rem' }}>
            💡 Guía de Pronunciación
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Sistema Erasmiano', desc: 'Pronunciación académica basada en la distinción clásica de cantidad vocálica. Más común en seminarios.' },
              { title: 'Sistema Moderno', desc: 'Basado en el griego moderno. Más fácil para hablantes que conocen el griego contemporáneo.' },
              { title: 'Sistema Koiné', desc: 'Reconstrucción de la pronunciación del siglo I d.C., basada en papiros y transcripciones antiguas.' },
            ].map((sys) => (
              <div key={sys.title} style={{ borderLeft: '2px solid rgba(201,168,76,0.3)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--parchment)', marginBottom: '0.4rem' }}>
                  {sys.title}
                </div>
                <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.9rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.6 }}>
                  {sys.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
