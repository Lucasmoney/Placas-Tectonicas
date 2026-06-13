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
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
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
      </main>

      <AnimatePresence>
        {showArrow && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            onClick={scrollDown}
            whileHover={{ scale: 1.1, backgroundColor: '#c55d4c' }}
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
              boxShadow: '0 8px 20px rgba(216, 112, 95, 0.4)'
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
