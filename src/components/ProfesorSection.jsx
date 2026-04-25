import React from 'react';
import { BookOpen, GraduationCap, Globe, Award, Mail, Phone } from 'lucide-react';

const credenciales = [
  { icon: GraduationCap, titulo: 'Doctor en Pedagogía: (ULA Táchira)', inst: 'Con énfasis en Didáctica y Educación' },
  { icon: GraduationCap, titulo: 'Maestría en Teología (M.Th.): UENMLK', inst: 'Con énfasis Estudios Bíblicos y Consejería Profesional' },
  { icon: BookOpen, titulo: 'Pedagogo (UPEL)', inst: 'Especialidad en Matemática' },
  { icon: Globe, titulo: 'Docente de Griego del NT y Hebreo del AT', inst: 'Centrado en una didáctica andragógica' },
];

const logros = [
  { n: '20+', label: 'Años enseñando' },
  { n: '50+', label: 'Estudiantes formados' },
  { n: '30+', label: 'Proyectos Realizados' },
  { n: '∞', label: 'Pasión por la Palabra' },
];

export default function ProfesorSection() {
  return (
    <section id="profesor" className="profesor-section">
      <div className="section-container">

        {/* Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'rgba(201,168,76,0.7)', textAlign: 'center' }}>Cuerpo Docente</div>
          <h2 className="section-title" style={{ color: 'var(--parchment)', textAlign: 'center' }}>Acerca del Profesor</h2>
          <div className="section-divider" style={{ margin: '1.25rem auto 0' }} />
        </div>

        {/* Main content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Photo column */}
          <div className="profesor-photo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div className="profesor-photo-frame">
              <img
                src="/williamlozano.svg"
                alt="Dr. William O. Lozano G."
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 'inherit',
                }}
              />
            </div>

            {/* Logros stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1px', background: 'rgba(201,168,76,0.15)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '4px', overflow: 'hidden',
              width: '100%', maxWidth: '340px',
            }}>
              {logros.map((l, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)',
                  padding: '1.25rem', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--gold-light)', lineHeight: 1 }}>
                    {l.n}
                  </div>
                  <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.8rem', color: 'rgba(245,240,232,0.5)', marginTop: '0.35rem' }}>
                    {l.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="profesor-badge">Docente Titular</span>
            </div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--parchment)', lineHeight: 1.1, margin: '0 0 0.5rem' }}>
              Dr. William O. Lozano G.
            </h3>
            <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--gold-light)', marginBottom: '2rem' }}>
              Doctor en Pedagogía
            </div>

            {/* Biography */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, margin: 0 }}>
                El Dr. William O. Lozano G. es un reconocido teólogo y académico con una trayectoria de más de dos décadas dedicadas a la enseñanza de la teología, del hebreo y griego bíblico y la exégesis del Nuevo Testamento.
              </p>
              <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, margin: 0 }}>
                Con una sólida formación en Teología y Lingüística Bíblica, el Dr. Lozano ha desarrollado una metodología pedagógica que hace accesible el estudio de la teología y el griego koiné a estudiantes de todos los niveles. Su enfoque integra el rigor académico con la aplicación práctica a la predicación y la enseñanza bíblica.
              </p>
              <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.1rem', color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, margin: 0 }}>
                Ha formado a pastores, maestros y líderes de iglesia en el manejo del hebreo y del griego del Nuevo Testamento, contribuyendo significativamente al avance de la exégesis bíblica. Su lema es que "La excelencia hace la diferencia".
              </p>
            </div>

            {/* Credentials */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: '1rem' }}>
                Formación Académica y Experiencia
              </div>
              {credenciales.map((cred, i) => {
                const Icon = cred.icon;
                return (
                  <div key={i} className="credential-item">
                    <div style={{
                      width: '34px', height: '34px',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      borderRadius: '4px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={15} color="var(--gold)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, color: 'var(--parchment)', lineHeight: 1.3 }}>
                        {cred.titulo}
                      </div>
                      <div style={{ fontFamily: 'Crimson Pro, serif', fontSize: '0.88rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.4 }}>
                        {cred.inst}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div style={{ marginTop: '2rem' }}>
                <a 
                  href="https://portafoliowilliamlozano.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  Ver Portafolio
                </a>
              </div>
            </div>

            {/* Quote */}
            <div style={{
              borderLeft: '2px solid var(--gold)',
              paddingLeft: '1.5rem',
              marginTop: '2rem',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--gold-light)', lineHeight: 1.5, margin: '0 0 0.5rem' }}>
                "El texto griego del Nuevo Testamento no es una reliquia del pasado: es la Palabra viva de Dios, preservada con fidelidad asombrosa para que cada generación pueda escuchar su voz original."
              </p>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'rgba(245,240,232,0.4)', letterSpacing: '0.1em' }}>
                — Dr. William O. Lozano G.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
