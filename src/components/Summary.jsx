import React from 'react';
import { motion } from 'framer-motion';
import { Map, Clock, ShieldCheck } from 'lucide-react';

const Summary = () => {
  return (
    <section className="section-container" style={{ background: 'var(--color-bg)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="text-huge">Síntese Final</h2>
        <p className="text-body" style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--color-text-secondary)' }}>
          De um supercontinente a um cenário em constante mutação.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div 
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)', borderColor: '#3B82F6' }}
          style={{ padding: '2.5rem', border: '1px solid var(--color-card-border)', borderRadius: '16px', background: 'var(--color-card)', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}
        >
          <Clock size={40} color="#60A5FA" style={{ marginBottom: '1.5rem' }} />
          <h3 className="text-h2" style={{ marginBottom: '1rem' }}>Deriva Continental</h3>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>Em 1912, Alfred Wegener propôs que os continentes já formaram a Pangeia. Hoje, graças ao mapeamento das células de convecção, entendemos a força motriz desse gigantesco quebra-cabeça.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)', borderColor: '#3B82F6' }}
          style={{ padding: '2.5rem', border: '1px solid var(--color-card-border)', borderRadius: '16px', background: 'var(--color-card)', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}
        >
          <ShieldCheck size={40} color="#60A5FA" style={{ marginBottom: '1.5rem' }} />
          <h3 className="text-h2" style={{ marginBottom: '1rem' }}>O Cenário Brasileiro</h3>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>O Brasil repousa isolado no centro da Placa Sul-Americana. Por estar distante das bordas tectônicas, não sofremos com grandes terremotos ou vulcanismo severo.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(138, 180, 248, 0.2)', borderColor: '#8ab4f8' }}
          style={{ padding: '2.5rem', border: '1px solid var(--color-card-border)', borderRadius: '16px', background: 'var(--color-card)', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}
        >
          <Map size={40} color="#60A5FA" style={{ marginBottom: '1.5rem' }} />
          <h3 className="text-h2" style={{ marginBottom: '1rem' }}>O Mapa do Futuro</h3>
          <p className="text-body" style={{ color: 'var(--color-text-secondary)' }}>A arquitetura da Terra nunca está finalizada. Em milhões de anos, a atual expansão e subducção forjarão um novo supercontinente e redesenharão os oceanos.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
