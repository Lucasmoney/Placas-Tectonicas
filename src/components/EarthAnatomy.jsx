import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

const EarthAnatomy = () => {
  const [activeLayer, setActiveLayer] = useState('core');

  const layers = {
    crust: {
      id: 'crust',
      name: 'Crosta Terrestre',
      depth: '0 - 70 km',
      desc: 'A fina "casca de ovo" onde vivemos. Ela é rígida, quebradiça e está fragmentada nas famosas placas tectônicas.',
      temp: 'Até 400°C'
    },
    mantle: {
      id: 'mantle',
      name: 'Manto',
      depth: '70 - 2.890 km',
      desc: 'A camada mais espessa. Aqui as rochas sólidas se comportam como um plástico quente, fluindo lentamente e arrastando as placas acima.',
      temp: '1.000°C a 3.700°C'
    },
    core: {
      id: 'core',
      name: 'Núcleo',
      depth: '2.890 - 6.371 km',
      desc: 'O coração pulsante de ferro e níquel. A parte externa é líquida e gera o campo magnético; a parte interna é sólida pela extrema pressão.',
      temp: 'Até 6.000°C'
    }
  };

  return (
    <section className="section-container" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 className="text-huge">Radiografia do Planeta</h2>
        <p className="text-body" style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
          Para entender por que a superfície se move, precisamos olhar para dentro. A Terra é um motor térmico colossal.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        
        {/* Interactive Earth Cross Section */}
        <div style={{ flex: '1 1 300px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', paddingBottom: '100%' }}>
            
            {/* Crust */}
            <motion.div 
              style={{ position: 'absolute', width: '90%', height: '90%', background: 'var(--color-accent-light)', borderRadius: '50%', border: '4px solid #cbd5e1', top: '5%', left: '5%' }}
              animate={{ opacity: activeLayer === 'crust' ? 1 : 0.8, scale: activeLayer === 'crust' ? 1.02 : 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Mantle */}
            <motion.div 
              style={{ position: 'absolute', width: '70%', height: '70%', background: 'var(--color-accent)', borderRadius: '50%', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.2)', top: '15%', left: '15%' }}
              animate={{ opacity: activeLayer === 'mantle' ? 1 : 0.6, scale: activeLayer === 'mantle' ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Core */}
            <motion.div 
              style={{ position: 'absolute', width: '35%', height: '35%', background: 'radial-gradient(circle, var(--color-accent-neon) 0%, var(--color-accent-light) 100%)', borderRadius: '50%', boxShadow: '0 0 40px var(--color-accent-neon)', top: '32.5%', left: '32.5%' }}
              animate={{ opacity: activeLayer === 'core' ? 1 : 0.8, scale: activeLayer === 'core' ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Selection arcs */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
              <motion.path 
                d="M 50 2 A 48 48 0 0 0 2 50" 
                fill="none"
                stroke={activeLayer === 'crust' ? 'var(--color-accent)' : '#cbd5e1'}
                strokeWidth="1.5"
                opacity={activeLayer === 'crust' ? 1 : 0.6}
                style={{ cursor: 'pointer', pointerEvents: 'all' }}
                onClick={() => setActiveLayer('crust')}
              />
              <motion.path 
                d="M 50 15 A 35 35 0 0 0 15 50" 
                fill="none"
                stroke={activeLayer === 'mantle' ? 'var(--color-text)' : '#cbd5e1'}
                strokeWidth="1.5"
                opacity={activeLayer === 'mantle' ? 1 : 0.6}
                style={{ cursor: 'pointer', pointerEvents: 'all' }}
                onClick={() => setActiveLayer('mantle')}
              />
            </svg>
            
          </div>
        </div>

        {/* Info Panel */}
        <div style={{ flex: '1 1 300px' }}>
          <AnimatePresence mode="wait">
            <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  background: 'var(--color-card)', 
                  padding: '2.5rem', 
                  borderRadius: '16px',
                  border: '1px solid var(--color-grid)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  borderTop: `4px solid ${activeLayer === 'core' ? 'var(--color-accent-neon)' : activeLayer === 'mantle' ? 'var(--color-accent)' : 'var(--color-accent-light)'}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 className="text-h2" style={{ marginBottom: '1.5rem' }}>{layers[activeLayer].name}</h3>
                  <button style={{ color: 'var(--color-accent-light)' }}>
                    <Layers size={24} />
                  </button>
                </div>
                
                <p className="text-body" style={{ marginBottom: '2.5rem', color: 'var(--color-text-muted)' }}>
                  {layers[activeLayer].desc}
                </p>

                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Profundidade</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{layers[activeLayer].depth}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Temperatura</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{layers[activeLayer].temp}</div>
                  </div>
                </div>
              </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            {Object.keys(layers).map(id => (
              <button 
                key={id}
                onClick={() => setActiveLayer(id)}
                style={{ 
                  padding: '1rem', 
                  background: activeLayer === id ? 'var(--color-accent)' : 'var(--color-card)', 
                  color: activeLayer === id ? 'white' : 'var(--color-text)', 
                  borderRadius: '12px',
                  border: '1px solid var(--color-grid)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  flex: 1
                }}
              >
                {layers[id].name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthAnatomy;
