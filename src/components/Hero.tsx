import React from 'react';
import AnimatedCar from './AnimatedCar';
import HighTechEffects from './HighTechEffects';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat hero-high-tech"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/hero-bg.jpg')`
      }}
    >
      {/* Fallback background for when image doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-dark"></div>
      
      {/* High-Tech Effects */}
      <HighTechEffects />
      
      {/* Animated Cars */}
      <AnimatedCar />
      
      <div className="relative z-10 container-max text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl moonwalk-text mb-6 leading-tight text-white drop-shadow-2xl" style={{
            textShadow: '0 0 20px rgba(255, 105, 6, 0.5), 0 0 40px rgba(255, 105, 6, 0.3), 0 0 60px rgba(255, 105, 6, 0.1)'
          }}>
            A forma mais rápida e segura de comprar e vender carros para lojistas
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Conectamos revendedores de confiança em todo o Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 min-w-[200px] relative overflow-hidden group cursor-pointer">
              <span className="relative z-10">Cadastre sua loja</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button className="btn-secondary text-lg px-8 py-4 min-w-[200px] relative overflow-hidden group cursor-pointer">
              <span className="relative z-10">Saiba mais</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
