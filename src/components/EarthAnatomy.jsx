import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Thermometer, Ruler, X } from 'lucide-react';

const EarthAnatomy = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = {
    crust: {
      id: 'crust',
      title: 'Crosta (Litosfera)',
      desc: 'A camada externa e fina. Cobre continentes e oceanos. Não é uma casca contínua, sendo dividida em placas.',
      depth: '5 a 70 km',
      temp: 'Até 400°C',
      color: '#e0e0e0',
      activeColor: '#b3b3b3'
    },
    mantle: {
      id: 'mantle',
      title: 'Manto (Astenosfera)',
      desc: 'Representa 67% da massa do planeta. Composto por rocha sólida e parcialmente derretida. É aqui que ocorre o "motor silencioso".',
      depth: '2.896 km',
      temp: '1.000°C a 3.700°C',
      color: 'url(#mantle-grad)',
      activeColor: 'url(#mantle-grad-active)'
    },
    core: {
      id: 'core',
      title: 'Núcleo',
      desc: 'O centro de ferro da Terra. A fonte extrema de calor que alimenta todo o sistema tectônico.',
      depth: '3.486 km de raio',
      temp: '4.300°C a 6.000°C',
      color: 'url(#core-grad)',
      activeColor: 'url(#core-grad-active)'
    }
  };

  return (
    <section className="section-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h2 className="text-huge">A anatomia<br/>da Terra</h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 8vw, 4rem)', alignItems: 'center', position: 'relative' }}>
        {/* SVG Earth Schema */}
        <div style={{ flex: '1 1 300px', maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: 'auto', overflow: 'visible', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))' }}>
            <defs>
              <radialGradient id="mantle-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f4a261" />
                <stop offset="100%" stopColor="#2563EB" />
              </radialGradient>
              <radialGradient id="mantle-grad-active" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f4a261" />
                <stop offset="100%" stopColor="#d84b2a" />
              </radialGradient>
              <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffea00" />
                <stop offset="100%" stopColor="#3B82F6" />
              </radialGradient>
              <radialGradient id="core-grad-active" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffb00" />
                <stop offset="100%" stopColor="#ff2a00" />
              </radialGradient>
            </defs>

            {/* Base Outline */}
            <circle cx="50" cy="50" r="48" fill="#fcfcfc" stroke="var(--color-grid)" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" strokeDasharray="2,2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" strokeDasharray="2,2" />

            {/* Mantle */}
            <motion.path 
              d="M 50 10 A 40 40 0 1 1 10 50 L 50 50 Z" 
              fill={activeLayer === 'mantle' ? layers.mantle.activeColor : layers.mantle.color}
              stroke="white"
              strokeWidth="0.5"
              opacity={activeLayer === 'mantle' ? 1 : 0.6}
              onClick={() => setActiveLayer('mantle')}
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              style={{ cursor: 'pointer', transformOrigin: '50px 50px', transition: 'all 0.3s' }}
            />

            {/* Core */}
            <motion.path 
              d="M 50 30 A 20 20 0 0 1 70 50 A 20 20 0 0 1 50 70 L 50 50 Z" 
              fill={activeLayer === 'core' ? layers.core.activeColor : layers.core.color}
              stroke="white"
              strokeWidth="0.5"
              opacity={activeLayer === 'core' ? 1 : 0.8}
              onClick={() => setActiveLayer('core')}
              whileHover={{ opacity: 1, scale: 1.05 }}
              style={{ cursor: 'pointer', transformOrigin: '50px 50px', transition: 'all 0.3s' }}
            />

            {/* Crust Outline Detail */}
            <motion.path 
              d="M 50 2 A 48 48 0 0 0 2 50" 
              fill="none"
              stroke={activeLayer === 'crust' ? 'var(--color-text)' : '#999'}
              strokeWidth="1.5"
              opacity={activeLayer === 'crust' ? 1 : 0.6}
              onClick={() => setActiveLayer('crust')}
              whileHover={{ opacity: 1, strokeWidth: 3 }}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            />
            
            {/* Labels pointing to pieces if nothing active */}
            {!activeLayer && (
              <g style={{ pointerEvents: 'none', fontSize: '3px', fontFamily: 'var(--font-main)', fill: 'var(--color-text)', opacity: 0.7 }}>
                <text x="5" y="15">Crosta</text>
                <path d="M 17 14 L 30 14 L 45 5" fill="none" stroke="var(--color-text)" strokeWidth="0.2" />
              </g>
            )}
          </svg>
        </div>

        {/* Info Panel */}
        <div style={{ flex: '1 1 300px', minHeight: '300px' }}>
          <AnimatePresence mode="wait">
            {activeLayer ? (
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  background: 'linear-gradient(145deg, #ffffff, #fdfdfc)', 
                  padding: '2.5rem', 
                  borderRadius: '16px',
                  border: '1px solid var(--color-grid)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  borderTop: `4px solid ${activeLayer === 'core' ? '#3B82F6' : activeLayer === 'mantle' ? '#2563EB' : '#1a1a1a'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 className="text-h2" style={{ marginBottom: '1rem' }}>{layers[activeLayer].title}</h3>
                  <button onClick={() => setActiveLayer(null)} style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--color-bg)', cursor: 'pointer' }}>
                    <X size={20} color="var(--color-text)" />
                  </button>
                </div>
                
                <p className="text-body" style={{ marginBottom: '2.5rem', color: '#555' }}>
                  {layers[activeLayer].desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(216, 112, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Ruler size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Espessura</div>
                      <div style={{ fontWeight: 400, fontSize: '1.125rem' }}>{layers[activeLayer].depth}</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(216, 112, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Thermometer size={24} color="var(--color-accent)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Temperatura</div>
                      <div style={{ fontWeight: 400, fontSize: '1.125rem' }}>{layers[activeLayer].temp}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: '#888',
                  padding: '2rem',
                  border: '1px dashed var(--color-grid)',
                  borderRadius: '16px',
                  background: 'var(--color-bg)'
                }}
              >
                <Info size={24} color="var(--color-accent)" />
                <span style={{ fontSize: '1.125rem' }}>Clique nas camadas coloridas do diagrama para explorar suas propriedades mecânicas e térmicas.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EarthAnatomy;
