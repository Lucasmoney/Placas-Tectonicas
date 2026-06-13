import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="section-container" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: '80px', height: '8px', background: 'var(--color-accent)', marginBottom: '2rem', borderRadius: '4px' }}
        />
        
        <motion.h1 
          className="text-hero"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ color: 'var(--color-text)' }}
        >
          A Dinâmica da <br/>
          <span style={{ color: 'var(--color-accent)' }}>Terra</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ marginTop: '2rem', maxWidth: '600px', fontSize: '1.25rem', color: 'var(--color-text-muted)' }}
        >
          Uma planta baixa da litosfera terrestre: sistemas, motor e impactos geológicos.
        </motion.p>
      </div>

      <div style={{ position: 'relative', zIndex: 10, marginTop: '3rem' }}>
        <button 
          onClick={scrollToNext}
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '1rem 2.5rem', background: 'var(--color-accent)', 
            color: 'white', borderRadius: '30px', fontSize: '1.125rem', 
            fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase',
            boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)',
            cursor: 'pointer', border: 'none'
          }}
        >
          Explorar Planeta <ArrowRight size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--color-text)',
          zIndex: 2,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        <motion.span 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '48px', height: '48px',
            border: '2px solid var(--color-grid)',
            borderRadius: '50%'
          }}
        >
          <ArrowDown size={24} color="var(--color-accent)" />
        </motion.span>
        Scroll para descer
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '55%',
          height: '80%',
          zIndex: 1,
          opacity: 0.9,
          backgroundImage: 'url(/hero.png)', /* Certifique-se que hero.png está em /public */
          backgroundSize: 'contain',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(-20px 20px 40px rgba(0,0,0,0.05))'
        }}
      />
    </section>
  );
};

export default HeroSection;
