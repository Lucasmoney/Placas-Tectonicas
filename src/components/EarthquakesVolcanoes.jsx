import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Activity, Waves } from 'lucide-react';

const EarthquakesVolcanoes = () => {
  const [activePoint, setActivePoint] = useState(null);

  const points = {
    ring: {
      id: 'ring',
      title: 'O Círculo de Fogo',
      icon: <Flame size={24} color="#d8705f" />,
      stats: '40.000 km',
      desc: 'Extensão contínua de atividade geológica extrema ao redor da colossal Placa do Pacífico.'
    },
    volcanoes: {
      id: 'volcanoes',
      title: 'Vulcões Ativos',
      icon: <Activity size={24} color="#d8705f" />,
      stats: '452 vulcões',
      desc: 'Concentrados nesta região em formato de arco, impulsionados pelas zonas de subducção.'
    },
    earthquakes: {
      id: 'earthquakes',
      title: 'Terremotos',
      icon: <Waves size={24} color="#d8705f" />,
      stats: '90%',
      desc: 'Dos terremotos de todo o mundo são registrados neste arco de instabilidade.'
    }
  };

  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="text-huge">O Círculo de Fogo<br/>do Pacífico</h2>
        <p className="text-body" style={{ maxWidth: '600px', margin: '1rem 0 0', color: '#555' }}>
          A maior arena de instabilidade tectônica do planeta. Uma faixa impulsionada pelas zonas de subducção cobrindo territórios de 27 países.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 8vw, 4rem)', alignItems: 'stretch' }}>
        {/* Interactive Map */}
        <div style={{ flex: '1 1 300px', position: 'relative', background: '#fdfdfc', border: '1px solid var(--color-grid)', borderRadius: '24px', overflow: 'hidden', paddingBottom: '70%', minHeight: '300px' }}>
          {/* Base World Map SVG */}
          <svg viewBox="0 0 100 50" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {/* Simple Continents */}
            <path d="M 20 10 Q 30 5 40 15 T 30 40 Q 20 30 20 10 Z" fill="#eee" /> {/* Americas */}
            <path d="M 50 10 Q 80 5 90 25 T 60 40 Q 40 30 50 10 Z" fill="#eee" /> {/* Eurasia/Africa/Aus */}
            
            {/* The Ring of Fire - abstract curved path */}
            <motion.path 
              d="M 25 35 Q 20 20 30 10 Q 50 -5 70 10 Q 85 20 80 40 Q 75 45 60 40"
              fill="none" 
              stroke="var(--color-accent)" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />

            {/* Glowing Nodes for interactivity */}
            <g style={{ cursor: 'pointer' }} onMouseEnter={() => setActivePoint('ring')} onMouseLeave={() => setActivePoint(null)}>
              <circle cx="25" cy="35" r="2" fill="var(--color-accent)" opacity={activePoint === 'ring' ? 1 : 0.5} />
              <motion.circle cx="25" cy="35" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="0.5" animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} />
            </g>

            <g style={{ cursor: 'pointer' }} onMouseEnter={() => setActivePoint('volcanoes')} onMouseLeave={() => setActivePoint(null)}>
              <circle cx="50" cy="5" r="2" fill="var(--color-accent)" opacity={activePoint === 'volcanoes' ? 1 : 0.5} />
              <motion.circle cx="50" cy="5" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="0.5" animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
            </g>

            <g style={{ cursor: 'pointer' }} onMouseEnter={() => setActivePoint('earthquakes')} onMouseLeave={() => setActivePoint(null)}>
              <circle cx="80" cy="40" r="2" fill="var(--color-accent)" opacity={activePoint === 'earthquakes' ? 1 : 0.5} />
              <motion.circle cx="80" cy="40" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="0.5" animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
            </g>
          </svg>
        </div>

        {/* Stats and Info */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 className="text-h2" style={{ marginBottom: '1rem' }}>O impacto em escala</h3>
          
          {Object.keys(points).map((key) => (
            <motion.div
              key={key}
              onMouseEnter={() => setActivePoint(key)}
              onMouseLeave={() => setActivePoint(null)}
              animate={{ 
                scale: activePoint === key ? 1.02 : 1,
                boxShadow: activePoint === key ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                borderColor: activePoint === key ? 'var(--color-accent)' : 'var(--color-grid)'
              }}
              style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid var(--color-grid)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(216, 112, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {points[key].icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}>{points[key].title}</h4>
                </div>
              </div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.5rem', lineHeight: 1 }}>
                {points[key].stats}
              </div>
              <p style={{ color: '#555', lineHeight: 1.5 }}>
                {points[key].desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarthquakesVolcanoes;
