import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    { 
      q: "Qual a camada mais fina da Terra?", 
      options: ["Manto", "Núcleo", "Crosta (Litosfera)"], 
      ans: 2,
      exp: "Visto na seção 'Anatomia da Terra', a Crosta é a camada externa e fraturada, com espessura de apenas 5 a 70 km."
    },
    { 
      q: "Qual processo interno movimenta as placas tectônicas?", 
      options: ["Rotação da Terra", "Correntes de Convecção", "Atração Lunar"], 
      ans: 1,
      exp: "No 'Motor Silencioso', vimos que a diferença térmica no núcleo faz o material do manto subir e descer, arrastando as placas como uma esteira."
    },
    { 
      q: "O movimento em que duas placas colidem é chamado de:", 
      options: ["Divergente", "Convergente", "Transformante"], 
      ans: 1,
      exp: "Na 'Dinâmica dos Limites', o movimento Convergente é a colisão e subducção que cria grandes cordilheiras e fossas."
    },
    { 
      q: "O que caracteriza um movimento transformante?", 
      options: ["Atrito lateral", "Criação de crosta", "Subducção"], 
      ans: 0,
      exp: "Placas deslizam lateralmente (paralelas) causando atrito e grandes terremotos, sem criar ou destruir crosta."
    },
    { 
      q: "Onde se concentra 90% da atividade sísmica do mundo?", 
      options: ["Oceano Atlântico", "Círculo de Fogo do Pacífico", "Europa Central"], 
      ans: 1,
      exp: "O Círculo de Fogo ao redor da Placa do Pacífico é a maior arena de instabilidade tectônica."
    },
    { 
      q: "O Brasil está localizado em qual placa tectônica?", 
      options: ["Placa de Nazca", "Placa Africana", "Placa Sul-Americana"], 
      ans: 2,
      exp: "O Brasil repousa no centro da massiva Placa Sul-Americana."
    },
    { 
      q: "Por que o Brasil não sofre com grandes terremotos?", 
      options: ["Por estar isolado no centro da placa", "Por causa do clima tropical", "Por estar diretamente sobre o manto"], 
      ans: 0,
      exp: "Na 'Síntese Final', vimos que a distância de segurança das bordas (onde ocorrem as colisões) protege o país."
    },
    { 
      q: "A Cordilheira dos Andes foi formada por qual tipo de movimento?", 
      options: ["Divergente", "Convergente", "Transformante"], 
      ans: 1,
      exp: "O choque Convergente entre a placa de Nazca (que afundou) e a Sul-Americana ergueu as montanhas."
    },
    { 
      q: "O que a teoria de Alfred Wegener propôs em 1912?", 
      options: ["O Motor Silencioso", "A Deriva Continental (Pangeia)", "O fim da atividade vulcânica"], 
      ans: 1,
      exp: "Ele propôs que os continentes eram um quebra-cabeça que se separou, teoria comprovada depois pelas correntes de convecção."
    },
    { 
      q: "A arquitetura geológica da Terra está finalizada?", 
      options: ["Sim, não muda mais", "Apenas os continentes mudam", "Não, a Terra está em constante mutação"], 
      ans: 2,
      exp: "O 'Mapa do Futuro' nos mostra que o motor silencioso nunca para. Os continentes continuarão se movendo."
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if(index === questions[currentQ].ans) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if(currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <section className="section-container" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="text-huge">Teste de Conhecimento</h2>
          <p className="text-body" style={{ color: '#555', marginTop: '1rem' }}>Todas as respostas estão contidas no material acima. Vamos ver se você aprendeu de verdade!</p>
        </div>

        <div style={{ background: 'white', borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: '1px solid var(--color-grid)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', minHeight: '450px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div key="quiz" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#888', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>
                  <span>Pergunta {currentQ + 1} de {questions.length}</span>
                  <span>Pontuação: {score}</span>
                </div>
                
                <h3 className="text-h1" style={{ marginBottom: '2.5rem', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{questions[currentQ].q}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {questions[currentQ].options.map((opt, idx) => {
                    let bg = 'var(--color-bg)';
                    let border = '1px solid var(--color-grid)';
                    let icon = null;

                    if (selectedAnswer !== null) {
                      if (idx === questions[currentQ].ans) {
                        bg = '#e6f4ea';
                        border = '1px solid #34a853';
                        icon = <CheckCircle color="#34a853" />;
                      } else if (idx === selectedAnswer) {
                        bg = '#fce8e6';
                        border = '1px solid #ea4335';
                        icon = <XCircle color="#ea4335" />;
                      }
                    }

                    return (
                      <button 
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={selectedAnswer !== null}
                        style={{
                          padding: '1.25rem 1.5rem',
                          borderRadius: '12px',
                          background: bg,
                          border: border,
                          textAlign: 'left',
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: 'var(--color-text)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all 0.2s',
                          cursor: selectedAnswer !== null ? 'default' : 'pointer'
                        }}
                      >
                        <span style={{ paddingRight: '1rem' }}>{opt}</span>
                        {icon}
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {selectedAnswer !== null && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                      animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }} 
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ 
                        padding: '1.5rem', 
                        background: selectedAnswer === questions[currentQ].ans ? '#e6f4ea' : '#fce8e6', 
                        borderRadius: '12px', 
                        borderLeft: `4px solid ${selectedAnswer === questions[currentQ].ans ? '#34a853' : '#ea4335'}`
                      }}>
                        <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.5 }}>
                          <strong style={{ color: selectedAnswer === questions[currentQ].ans ? '#137333' : '#c5221f' }}>
                            {selectedAnswer === questions[currentQ].ans ? 'Correto! ' : 'Incorreto. '}
                          </strong>
                          {questions[currentQ].exp}
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                        <button 
                          onClick={handleNext}
                          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'var(--color-text)', color: 'white', borderRadius: '30px', fontSize: '1rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                        >
                          {currentQ + 1 < questions.length ? 'Próxima Pergunta' : 'Ver Resultado'} <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h3 className="text-huge" style={{ marginBottom: '1rem' }}>Resultado Final</h3>
                <div style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '1rem', lineHeight: 1 }}>
                  {score}/{questions.length}
                </div>
                <p className="text-body" style={{ color: '#555', marginBottom: '3rem', fontSize: '1.25rem' }}>
                  {score === 10 ? "Perfeito! Você é um especialista em placas tectônicas e comprovou sua leitura!" : 
                   score >= 7 ? "Muito bom! Você absorveu bem o conteúdo da página." : 
                   "Boa tentativa! Que tal reler as seções acima e testar novamente?"}
                </p>
                <button onClick={restartQuiz} style={{ padding: '1rem 3rem', background: 'var(--color-text)', color: 'white', borderRadius: '30px', fontSize: '1.125rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                  Tentar Novamente
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
