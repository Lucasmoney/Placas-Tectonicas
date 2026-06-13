import React from 'react';
import { motion } from 'framer-motion';

const ConvectionCurrents = () => {
  return (
    <section className="section-container" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 className="text-huge">O motor silencioso</h2>
        <p className="text-body" style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'var(--color-text-muted)' }}>
          A força mecânica que desloca montanhas e abre oceanos nasce de uma diferença de densidade térmica no interior do planeta.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 8vw, 4rem)', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Interactive Steps Panel */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { id: 1, text: "O intenso calor do núcleo aquece o manto inferior." },
            { id: 2, text: "O material quente fica menos denso e sobe até a base da litosfera." },
            { id: 3, text: "O movimento lateral da rocha derretida atua como uma esteira, arrastando as placas acima." },
            { id: 4, text: "Ao esfriar, o material afunda de volta, reiniciando o ciclo convectivo." }
          ].map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-grid)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
            >
              <div style={{ 
                width: '40px', height: '40px', flexShrink: 0,
                borderRadius: '50%', border: '2px solid #3b82f6', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, color: '#3b82f6', fontSize: '1.25rem'
              }}>
                {step.id}
              </div>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-text)', lineHeight: 1.5, marginTop: '0.25rem' }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animation Canvas */}
        <div style={{ flex: '1 1 300px', background: 'var(--color-card)', borderRadius: '24px', border: '1px solid var(--color-grid)', padding: 'clamp(1rem, 5vw, 2rem)', display: 'flex', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px', paddingBottom: '100%', background: 'radial-gradient(circle at center, #1e3a8a 0%, #0f172a 100%)', borderRadius: '50%', overflow: 'hidden', border: '1px solid #1e3a8a' }}>
            
            {/* Core */}
            <div style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '60%', background: 'radial-gradient(circle, #60a5fa 0%, #2563eb 50%, transparent 70%)', borderRadius: '50%', zIndex: 1, filter: 'drop-shadow(0 -10px 20px #3b82f6)' }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', fontWeight: 800, color: '#fff', zIndex: 2, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>NÚCLEO</div>

            {/* Crust / Lithosphere */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '20px', background: '#dcdcdc', zIndex: 2, borderBottom: '2px solid #aaa' }} />
            <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 40px', zIndex: 3 }}>
               <motion.div animate={{ x: [-5, -15, -5] }} transition={{ duration: 4, repeat: Infinity }} style={{ width: '60px', height: '20px', background: '#b3b3b3', borderRadius: '4px', borderBottom: '2px solid #888' }} />
               <motion.div animate={{ x: [5, 15, 5] }} transition={{ duration: 4, repeat: Infinity }} style={{ width: '60px', height: '20px', background: '#b3b3b3', borderRadius: '4px', borderBottom: '2px solid #888' }} />
            </div>

            {/* Convection Arrows */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 100 100">
              
              {/* Left Cell */}
              <motion.path 
                d="M 45 80 Q 20 80 15 50 Q 15 20 40 20" 
                fill="none" stroke="#60a5fa" strokeWidth="3" strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ filter: 'drop-shadow(0 0 5px rgba(96,165,250,0.6))' }}
              />
              <motion.path 
                d="M 40 20 Q 25 25 15 50 Q 20 70 45 80" 
                fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />

              {/* Right Cell */}
              <motion.path 
                d="M 55 80 Q 80 80 85 50 Q 85 20 60 20" 
                fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ filter: 'drop-shadow(0 0 5px rgba(216,112,95,0.6))' }}
              />
              <motion.path 
                d="M 60 20 Q 75 25 85 50 Q 80 70 55 80" 
                fill="none" stroke="#888" strokeWidth="1" strokeDasharray="3,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />
            </svg>

            <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', color: '#999', fontWeight: 600, letterSpacing: '0.1em' }}>
              MANTO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvectionCurrents;
