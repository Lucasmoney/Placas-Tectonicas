import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import HeroSection from './components/HeroSection';
import EarthAnatomy from './components/EarthAnatomy';
import TectonicPlates from './components/TectonicPlates';
import PlateMovements from './components/PlateMovements';
import EarthquakesVolcanoes from './components/EarthquakesVolcanoes';
import ConvectionCurrents from './components/ConvectionCurrents';
import Summary from './components/Summary';
import Quiz from './components/Quiz';

function App() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Oculta a seta se chegou no fim da página
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    const sections = Array.from(document.querySelectorAll('.section-container'));
    const nextSection = sections.find(section => {
      const rect = section.getBoundingClientRect();
      return rect.top > 10; // Acha a primeira seção que está abaixo do viewport atual
    });

    if (nextSection) {
      nextSection.scrollIntoView(); 
    } else {
      window.scrollBy(0, window.innerHeight);
    }
  };

  return (
    <div className="grid-bg">
      <main>
        <HeroSection />
        <EarthAnatomy />
        <TectonicPlates />
        <PlateMovements />
        <EarthquakesVolcanoes />
        <ConvectionCurrents />
        <Summary />
        <Quiz />
        <footer style={{ padding: '3rem 5%', textAlign: 'center', backgroundColor: 'transparent', marginTop: '2rem' }}>
          <div style={{ padding: '2rem', borderRadius: '16px', background: 'white', border: '1px solid var(--color-grid)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <p style={{ color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Equipe de Desenvolvimento</p>
            <p style={{ color: '#555', fontSize: '1.125rem', fontWeight: 600 }}>
              Beatriz &bull; Eloisa &bull; Maria Vitória &bull; Ana Carolina &bull; Milena &bull; Yasmin &bull; Lucas
            </p>
          </div>
        </footer>
      </main>

      <AnimatePresence>
        {showArrow && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            onClick={scrollDown}
            whileHover={{ scale: 1.1, backgroundColor: '#1d4ed8' }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: 'clamp(1rem, 5vh, 2rem)',
              left: '50%',
              marginLeft: '-28px', // offset para centralizar
              zIndex: 1000,
              background: 'var(--color-accent)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)'
            }}
          >
            <ChevronDown size={32} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
