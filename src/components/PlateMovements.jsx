import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, MoveHorizontal, MoveVertical, MoveDiagonal } from 'lucide-react';

const PlateMovements = () => {
  const [activeTab, setActiveTab] = useState('divergent');
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0); 

  const movements = {
    divergent: {
      id: 'divergent',
      title: 'Movimento Divergente',
      subtitle: 'O afastamento mecânico',
      action: 'A expansão do assoalho oceânico e a criação de nova crosta.',
      signature: 'Riftes (vales largos), cadeias submarinas e vulcanismo contínuo.',
      impact: 'As Placas Sul-Americana e Africana se afastam 3 centímetros por ano, expandindo o Oceano Atlântico.',
      icon: <MoveHorizontal size={20} />
    },
    convergent: {
      id: 'convergent',
      title: 'Movimento Convergente',
      subtitle: 'Colisão e Subducção',
      action: 'Uma placa afunda sob a outra (subducção) ou ambas colidem frontalmente, reciclando a crosta de volta ao manto.',
      signature: 'Fossas oceânicas profundas, dobramentos modernos (cordilheiras) e alta atividade sísmica e vulcânica.',
      impact: 'O choque entre a Placa de Nazca e a Placa Sul-Americana ergueu a Cordilheira dos Andes.',
      icon: <MoveVertical size={20} style={{ transform: 'rotate(90deg)' }} /> // Approaching horizontally
    },
    transformant: {
      id: 'transformant',
      title: 'Movimento Transformante',
      subtitle: 'O atrito lateral',
      action: 'Placas deslizam paralelamente em direções opostas. Nenhuma crosta é criada ou destruída.',
      signature: 'Falhas geológicas superficiais e fraturas oceânicas. A liberação de energia acumulada gera grandes terremotos.',
      impact: 'A famosa Falha de San Andreas, gerada pelo contato entre a Placa do Pacífico e a Norte-Americana.',
      icon: <MoveDiagonal size={20} />
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const restart = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setKey(prev => prev + 1);
      setIsPlaying(true);
    }, 100);
  };

  return (
    <section className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-huge">A dinâmica dos limites</h2>
        <p className="text-body" style={{ maxWidth: '600px', margin: '1.5rem auto 0', color: '#555' }}>
          Todo fenômeno geológico de impacto nasce da interação nas bordas das placas. Existem apenas três movimentos fundamentais ditando a geografia do nosso planeta.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
        {Object.keys(movements).map(type => (
          <button
            key={type}
            onClick={() => { setActiveTab(type); setIsPlaying(false); setKey(prev => prev + 1); }}
            style={{
              padding: '1rem 2rem',
              borderRadius: '30px',
              border: `1px solid ${activeTab === type ? 'var(--color-accent)' : 'var(--color-grid)'}`,
              background: activeTab === type ? 'var(--color-accent)' : 'transparent',
              color: activeTab === type ? 'white' : 'var(--color-text)',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {movements[type].icon}
            {movements[type].title.replace('Movimento ', '')}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 8vw, 4rem)', alignItems: 'center' }}>
        {/* Simulator Info */}
        <div style={{ flex: '1 1 300px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>{movements[activeTab].title}</h3>
              <p style={{ fontSize: '1.25rem', color: '#888', marginBottom: '2.5rem' }}>{movements[activeTab].subtitle}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Ação Principal</div>
                  <div style={{ color: '#555', lineHeight: 1.6 }}>{movements[activeTab].action}</div>
                </div>
                <div style={{ width: '100%', height: '1px', background: 'var(--color-grid)' }} />
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Assinaturas Geológicas</div>
                  <div style={{ color: '#555', lineHeight: 1.6 }}>{movements[activeTab].signature}</div>
                </div>
                <div style={{ width: '100%', height: '1px', background: 'var(--color-grid)' }} />
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Dado de Impacto</div>
                  <div style={{ color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.6 }}>{movements[activeTab].impact}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Visual Simulator */}
        <div style={{ flex: '1 1 300px', background: 'white', borderRadius: '24px', padding: 'clamp(1rem, 5vw, 2rem)', border: '1px solid var(--color-grid)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ flex: 1, position: 'relative', height: '300px', background: 'var(--color-bg)', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} key={key}>
            {/* The Simulation Graphics based on activeTab */}
            {activeTab === 'divergent' && (
              <div style={{ position: 'relative', width: '200px', height: '100px', display: 'flex' }}>
                {/* Mantle Background */}
                <div style={{ position: 'absolute', bottom: -50, left: -50, right: -50, height: '100px', background: 'rgba(37, 99, 235, 0.2)' }} />
                <motion.div 
                  initial={{ x: 0 }}
                  animate={isPlaying ? { x: -40 } : { x: 0 }}
                  transition={{ duration: 3, ease: 'linear' }}
                  style={{ width: '100px', height: '60px', background: '#e5e5e5', borderRight: '2px solid #ccc', borderBottom: '4px solid #b3b3b3', borderRadius: '4px 0 0 4px', zIndex: 2 }} 
                />
                <motion.div 
                  initial={{ x: 0 }}
                  animate={isPlaying ? { x: 40 } : { x: 0 }}
                  transition={{ duration: 3, ease: 'linear' }}
                  style={{ width: '100px', height: '60px', background: '#e5e5e5', borderLeft: '2px solid #ccc', borderBottom: '4px solid #b3b3b3', borderRadius: '0 4px 4px 0', zIndex: 2 }} 
                />
                {/* Magma rising */}
                <motion.div 
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isPlaying ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
                  transition={{ duration: 3, ease: 'easeOut' }}
                  style={{ position: 'absolute', bottom: '40px', left: '90px', width: '20px', height: '60px', background: 'var(--color-accent)', transformOrigin: 'bottom', borderRadius: '10px 10px 0 0', zIndex: 1 }}
                />
              </div>
            )}

            {activeTab === 'convergent' && (
              <div style={{ position: 'relative', width: '240px', height: '100px', display: 'flex' }}>
                 <div style={{ position: 'absolute', bottom: -50, left: -50, right: -50, height: '100px', background: 'rgba(37, 99, 235, 0.2)' }} />
                <motion.div 
                  initial={{ x: -40 }}
                  animate={isPlaying ? { x: 0 } : { x: -40 }}
                  transition={{ duration: 3, ease: 'linear' }}
                  style={{ width: '120px', height: '60px', background: '#e5e5e5', borderBottom: '4px solid #b3b3b3', zIndex: 3, borderRadius: '4px 0 0 4px' }} 
                />
                {/* Subducting Plate */}
                <motion.div 
                  initial={{ x: 40, rotate: 0, y: 0 }}
                  animate={isPlaying ? { x: 0, rotate: -20, y: 20 } : { x: 40, rotate: 0, y: 0 }}
                  transition={{ duration: 3, ease: 'linear' }}
                  style={{ width: '120px', height: '40px', background: '#dcdcdc', zIndex: 1, transformOrigin: 'left bottom', borderBottom: '4px solid #999', borderRadius: '0 4px 4px 0' }} 
                />
                {/* Mountain/Volcano rising */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={isPlaying ? { height: 40, opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                  style={{ position: 'absolute', bottom: '40px', left: '90px', width: '30px', background: '#dcdcdc', borderRadius: '30px 30px 0 0', zIndex: 2 }}
                />
                 {/* Magma chamber (volcanism) */}
                 <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isPlaying ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 2.5 }}
                  style={{ position: 'absolute', bottom: '60px', left: '100px', width: '10px', height: '25px', background: 'var(--color-accent)', borderRadius: '10px 10px 0 0', zIndex: 4 }}
                />
              </div>
            )}

            {activeTab === 'transformant' && (
              <div style={{ position: 'relative', width: '200px', height: '100px', display: 'flex', flexDirection: 'column', perspective: '1000px' }}>
                <motion.div 
                  initial={{ x: -20 }}
                  animate={isPlaying ? { x: 20 } : { x: -20 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  style={{ width: '200px', height: '50px', background: '#e5e5e5', borderBottom: '2px solid var(--color-accent)', boxShadow: '0 5px 10px rgba(0,0,0,0.1)', zIndex: 2 }} 
                />
                <motion.div 
                  initial={{ x: 20 }}
                  animate={isPlaying ? { x: -20 } : { x: 20 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  style={{ width: '200px', height: '50px', background: '#dcdcdc', borderTop: '1px solid #fff' }} 
                />
                {/* Tremor effect */}
                {isPlaying && (
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                    style={{ position: 'absolute', top: '48px', left: '0', width: '100%', height: '4px', background: 'var(--color-accent)', filter: 'blur(2px)', zIndex: 3 }}
                  />
                )}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={togglePlay} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: isPlaying ? 'var(--color-bg)' : 'var(--color-text)', color: isPlaying ? 'var(--color-text)' : 'white', border: '1px solid var(--color-grid)', borderRadius: '12px', fontWeight: 600, transition: 'all 0.3s' }}>
              {isPlaying ? <Pause size={18} /> : <Play size={18} />} {isPlaying ? 'Pausar' : 'Simular Movimento'}
            </button>
            <button onClick={restart} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-grid)', borderRadius: '12px', fontWeight: 600 }}>
              <RotateCcw size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlateMovements;
