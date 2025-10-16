import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
      // Mostrar modal após 2 segundos
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      
      return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = (): void => {
    setShowModal(false);
    // Marcar que o usuário já viu o modal nesta sessão
    sessionStorage.setItem('clickcar-modal-seen', 'true');
  };

  const handleOpenModal = (): void => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;
