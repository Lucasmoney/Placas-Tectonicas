import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hand, RefreshCcw, Maximize2 } from 'lucide-react';

const TectonicPlates = () => {
  const [activePlate, setActivePlate] = useState(null);
  const [isScattered, setIsScattered] = useState(false);
  const constraintsRef = useRef(null);

  const platesData = {
    pacifica: { 
      id: 'pacifica', name: 'Placa do Pacífico', size: '103.3M km²', 
      desc: 'A maior placa do planeta. Seu movimento e atrito constante nas bordas criam o intenso Círculo de Fogo.', 
      color: 'var(--color-card-alt)', borderColor: 'var(--color-accent-dark)', 
      path: "M 60 80 L 320 60 L 380 320 L 260 540 L 40 480 Z", 
      centerX: 200, centerY: 280, 
      scatter: { x: -80, y: -40, rotate: -10 } 
    },
    nazca: { 
      id: 'nazca', name: 'Placa de Nazca', size: '15.6M km²', 
      desc: 'Placa oceânica pesada que afunda (subducção) sob a América do Sul, erguendo a majestosa Cordilheira dos Andes.', 
      color: 'var(--color-card)', borderColor: 'var(--color-accent)', 
      path: "M 350 280 L 470 320 L 440 520 L 300 480 Z", 
      centerX: 390, centerY: 400, 
      scatter: { x: -30, y: 80, rotate: 15 } 
    },
    sul_americana: { 
      id: 'sul_americana', name: 'Placa Sul-Americana', size: '43.6M km²', 
      desc: 'O Brasil repousa de forma segura exatamente no centro deste enorme bloco rochoso, longe do caos das bordas.', 
      color: 'var(--color-bg)', borderColor: 'var(--color-accent-light)', 
      path: "M 440 160 L 660 140 L 740 380 L 600 560 L 450 540 L 480 300 Z", 
      centerX: 580, centerY: 350, 
      scatter: { x: 40, y: -60, rotate: 8 } 
    },
    africana: { 
      id: 'africana', name: 'Placa Africana', size: '61.3M km²', 
      desc: 'Está se afastando da placa Sul-Americana, fazendo com que o Oceano Atlântico cresça alguns centímetros por ano.', 
      color: '#ffffff', borderColor: 'var(--color-accent-neon)', 
      path: "M 700 120 L 960 100 L 960 450 L 800 600 L 640 580 L 760 360 Z", 
      centerX: 820, centerY: 350, 
      scatter: { x: 120, y: 40, rotate: -12 } 
    }
  };

  // Garante que a placa ativa seja renderizada por último (fique no topo do SVG)
  const sortedPlates = Object.keys(platesData).sort((a, b) => {
    if (a === activePlate) return 1;
    if (b === activePlate) return -1;
    return 0;
  });

  return (
    <section className="section-container" style={{ backgroundColor: 'white' }}>
      <div style={{ marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 8vw, 4rem)', alignItems: 'center' }}>
        
        <div style={{ flex: '1 1 300px' }}>
          <h2 className="text-huge" style={{ marginBottom: '2rem' }}>O que são placas<br/>tectônicas?</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)', maxWidth: '500px', marginBottom: '2rem' }}>
            A litosfera terrestre não é uma casca contínua. Ela é um gigantesco quebra-cabeça fracturado em blocos de rocha flutuante.
            <br/><br/>
            Esses blocos se movem independentemente. <strong style={{ color: 'var(--color-accent)' }}>Arraste as peças ao lado</strong> para entender como elas se separam e interagem na prática!
          </p>

          <button 
            onClick={() => setIsScattered(!isScattered)}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem', 
              padding: '1rem 2rem', 
              background: isScattered ? 'var(--color-text)' : 'var(--color-accent)', 
              color: 'white',
              borderRadius: '30px', 
              fontWeight: 600, fontSize: '1rem', 
              transition: 'all 0.3s',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)'
            }}
          >
            {isScattered ? <RefreshCcw size={20} /> : <Maximize2 size={20} />}
            {isScattered ? 'Reconstruir Planeta' : 'Desmontar Quebra-Cabeça'}
          </button>
        </div>

        <div style={{ flex: '1 1 300px', position: 'relative', width: '100%' }}>
          
          <AnimatePresence mode="wait">
            {activePlate ? (
              <motion.div
                key={activePlate}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  position: 'absolute',
                  top: '-1rem',
                  left: 0,
                  right: 0,
                  background: 'var(--color-card)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  border: '1px solid var(--color-grid)',
                  borderLeft: `5px solid ${platesData[activePlate].borderColor}`,
                  zIndex: 20
                }}
              >
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: platesData[activePlate].borderColor, fontWeight: 800 }}>{platesData[activePlate].name}</h4>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Área: {platesData[activePlate].size}</div>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{platesData[activePlate].desc}</p>
              </motion.div>
            ) : (
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                  zIndex: 20,
                  pointerEvents: 'none',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}
              >
                <Hand size={18} color="var(--color-accent)" /> Toque e arraste as placas
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sandbox do Quebra-Cabeça */}
          <div 
            ref={constraintsRef}
            style={{ 
              position: 'relative', 
              width: '100%', 
              paddingBottom: '80%', 
              minHeight: '350px', 
              border: '1px solid var(--color-grid)', 
              borderRadius: '24px', 
              background: 'var(--color-bg)', 
              overflow: 'hidden', 
              touchAction: 'none' /* Previne scroll ao arrastar no mobile */
            }}
          >
             {/* Grid Map Background */}
             <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                <pattern id="grid-map-new" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--color-grid)" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-map-new)" />
             </svg>

             {/* Peças Interativas */}
             <svg viewBox="0 0 1000 700" style={{ position: 'absolute', top: '10%', left: '-5%', width: '110%', height: '110%', overflow: 'visible', zIndex: 10 }}>
                {sortedPlates.map(key => {
                  const plate = platesData[key];
                  return (
                    <motion.g
                      key={key}
                      drag
                      dragConstraints={constraintsRef}
                      dragElastic={0.2}
                      onHoverStart={() => setActivePlate(key)}
                      onHoverEnd={() => setActivePlate(null)}
                      onPointerDown={() => setActivePlate(key)}
                      whileHover={{ scale: 1.02 }}
                      whileDrag={{ scale: 1.05, filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.2))' }}
                      animate={isScattered ? plate.scatter : { x: 0, y: 0, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      style={{ cursor: 'grab' }}
                    >
                      <path 
                        d={plate.path} 
                        fill={activePlate === key ? plate.color : 'white'} 
                        stroke={plate.borderColor} 
                        strokeWidth={activePlate === key ? "6" : "3"} 
                        strokeLinejoin="round"
                        style={{ transition: 'fill 0.3s, stroke-width 0.2s' }}
                      />
                      <text 
                        x={plate.centerX} 
                        y={plate.centerY} 
                        textAnchor="middle" 
                        alignmentBaseline="middle" 
                        fontSize="28" 
                        fontWeight="800"
                        fill={plate.borderColor}
                        pointerEvents="none"
                        style={{ opacity: activePlate === key ? 1 : 0.5, transition: 'opacity 0.3s' }}
                      >
                        {plate.name.replace('Placa ', '')}
                      </text>
                    </motion.g>
                  );
                })}
             </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TectonicPlates;
