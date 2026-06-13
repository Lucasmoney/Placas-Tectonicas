import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const sections = Array.from(document.querySelectorAll('.section-container'));
    if (sections.length > 1) {
      sections[1].scrollIntoView();
    } else {
      window.scrollBy(0, window.innerHeight);
    }
  };

  return (
    <section className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Animated Elements */}
      <motion.div 
        className="hero-bg-lines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at center, rgba(216, 112, 95, 0.05) 0%, transparent 70%)',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1 
          className="text-hero"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          A mecânica <br />
          <span style={{ color: 'var(--color-accent)' }}>do nosso planeta</span>
        </motion.h1>

        <motion.p 
          className="text-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ color: 'var(--color-text-muted)', marginTop: '2rem', maxWidth: '600px', fontSize: '1.25rem' }}
        >
          Uma planta baixa da litosfera terrestre: sistemas, motor e impactos geológicos.
        </motion.p>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
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
            borderRadius: '50%',
            border: '1px solid var(--color-grid)',
            backgroundColor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}
        >
          <ArrowDown size={20} color="var(--color-accent)" />
        </motion.span>
        Explorar
      </motion.button>
    </section>
  );
};

export default HeroSection;
