import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/hero-bg.jpg')`
      }}
    >
      {/* Fallback background for when image doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-dark"></div>
      
      <div className="relative z-10 container-max text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl moonwalk-text mb-6 leading-tight">
            A forma mais rápida e segura de comprar e vender carros para lojistas
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Conectamos revendedores de confiança em todo o Brasil
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 min-w-[200px]">
              Cadastre sua loja
            </button>
            <button className="btn-secondary text-lg px-8 py-4 min-w-[200px]">
              Saiba mais
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
