import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const Steps: React.FC = () => {
  const steps: Step[] = [
    {
      number: "01",
      title: "Cadastre-se grátis",
      description: "Registre sua revenda na plataforma com informações completas e documentos necessários.",
      icon: "🚀"
    },
    {
      number: "02", 
      title: "Escolha e faça sua oferta",
      description: "Navegue pelo catálogo de veículos e faça ofertas inteligentes baseadas em dados de mercado.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Oferta aceita",
      description: "Receba confirmação instantânea quando sua oferta for aceita pelo vendedor.",
      icon: "✅"
    },
    {
      number: "04",
      title: "Negócio concluído",
      description: "Finalize a transação com segurança e retire seu veículo com toda documentação em dia.",
      icon: "🏆"
    }
  ];

  return (
    <section id="vender" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern">
          <svg className="circuit-svg" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="circuit-lines">
              {/* Horizontal lines */}
              <line x1="0" y1="200" x2="1920" y2="200" stroke="#FF6906" strokeWidth="1"/>
              <line x1="0" y1="400" x2="1920" y2="400" stroke="#FF6906" strokeWidth="1"/>
              <line x1="0" y1="600" x2="1920" y2="600" stroke="#FF6906" strokeWidth="1"/>
              <line x1="0" y1="800" x2="1920" y2="800" stroke="#FF6906" strokeWidth="1"/>
              
              {/* Vertical lines */}
              <line x1="300" y1="0" x2="300" y2="1080" stroke="#FF6906" strokeWidth="1"/>
              <line x1="600" y1="0" x2="600" y2="1080" stroke="#FF6906" strokeWidth="1"/>
              <line x1="900" y1="0" x2="900" y2="1080" stroke="#FF6906" strokeWidth="1"/>
              <line x1="1200" y1="0" x2="1200" y2="1080" stroke="#FF6906" strokeWidth="1"/>
              <line x1="1500" y1="0" x2="1500" y2="1080" stroke="#FF6906" strokeWidth="1"/>
            </g>
          </svg>
        </div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl moonwalk-text text-white mb-6">
            Do cadastro à retirada do veículo
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Um processo simples e seguro em apenas 4 passos
          </p>
        </div>

        {/* Steps Section with Automotive High-Tech Background */}
        <div className="relative max-w-6xl mx-auto">
          {/* High-Tech Automotive Background */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-96" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Circuit Board Pattern */}
              <g className="circuit-pattern">
                {/* Horizontal Circuit Lines */}
                <line x1="0" y1="100" x2="1200" y2="100" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="0" y1="200" x2="1200" y2="200" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="0" y1="300" x2="1200" y2="300" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                
                {/* Vertical Circuit Lines */}
                <line x1="200" y1="0" x2="200" y2="400" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="400" y1="0" x2="400" y2="400" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="600" y1="0" x2="600" y2="400" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="800" y1="0" x2="800" y2="400" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="1000" y1="0" x2="1000" y2="400" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
              </g>
              
              {/* Car Silhouettes */}
              <g className="car-silhouettes">
                {/* Car 1 - Left */}
                <path d="M 50 180 L 80 160 L 120 160 L 140 180 L 140 200 L 120 220 L 80 220 L 50 200 Z" fill="#FF6906" opacity="0.1"/>
                <circle cx="70" cy="200" r="8" fill="#FF6906" opacity="0.2"/>
                <circle cx="110" cy="200" r="8" fill="#FF6906" opacity="0.2"/>
                
                {/* Car 2 - Center Left */}
                <path d="M 250 190 L 280 170 L 320 170 L 340 190 L 340 210 L 320 230 L 280 230 L 250 210 Z" fill="#FF6906" opacity="0.1"/>
                <circle cx="270" cy="210" r="8" fill="#FF6906" opacity="0.2"/>
                <circle cx="310" cy="210" r="8" fill="#FF6906" opacity="0.2"/>
                
                {/* Car 3 - Center Right */}
                <path d="M 450 200 L 480 180 L 520 180 L 540 200 L 540 220 L 520 240 L 480 240 L 450 220 Z" fill="#FF6906" opacity="0.1"/>
                <circle cx="470" cy="220" r="8" fill="#FF6906" opacity="0.2"/>
                <circle cx="510" cy="220" r="8" fill="#FF6906" opacity="0.2"/>
                
                {/* Car 4 - Right */}
                <path d="M 650 190 L 680 170 L 720 170 L 740 190 L 740 210 L 720 230 L 680 230 L 650 210 Z" fill="#FF6906" opacity="0.1"/>
                <circle cx="670" cy="210" r="8" fill="#FF6906" opacity="0.2"/>
                <circle cx="710" cy="210" r="8" fill="#FF6906" opacity="0.2"/>
              </g>
              
              {/* Data Flow Lines */}
              <g className="data-flow">
                <path d="M 0 150 Q 300 120 600 150 Q 900 180 1200 150" stroke="#FF6906" strokeWidth="2" fill="none" opacity="0.2" strokeDasharray="10 5"/>
                <path d="M 0 250 Q 300 220 600 250 Q 900 280 1200 250" stroke="#FF6906" strokeWidth="2" fill="none" opacity="0.2" strokeDasharray="10 5"/>
              </g>
              
              {/* Energy Nodes */}
              <g className="energy-nodes">
                <circle cx="150" cy="200" r="3" fill="#FF6906" opacity="0.4" className="energy-node"/>
                <circle cx="350" cy="200" r="3" fill="#FF6906" opacity="0.4" className="energy-node"/>
                <circle cx="550" cy="200" r="3" fill="#FF6906" opacity="0.4" className="energy-node"/>
                <circle cx="750" cy="200" r="3" fill="#FF6906" opacity="0.4" className="energy-node"/>
                <circle cx="950" cy="200" r="3" fill="#FF6906" opacity="0.4" className="energy-node"/>
                <circle cx="1050" cy="200" r="3" fill="#FF6906" opacity="0.4" className="energy-node"/>
              </g>
              
              {/* Speed Lines */}
              <g className="speed-lines">
                <line x1="100" y1="120" x2="150" y2="120" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="100" y1="130" x2="140" y2="130" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="100" y1="140" x2="160" y2="140" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                
                <line x1="300" y1="110" x2="350" y2="110" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="300" y1="120" x2="340" y2="120" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="300" y1="130" x2="360" y2="130" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                
                <line x1="500" y1="100" x2="550" y2="100" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="500" y1="110" x2="540" y2="110" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="500" y1="120" x2="560" y2="120" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                
                <line x1="700" y1="110" x2="750" y2="110" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="700" y1="120" x2="740" y2="120" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
                <line x1="700" y1="130" x2="760" y2="130" stroke="#FF6906" strokeWidth="1" opacity="0.3"/>
              </g>
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 z-20">
                    <div className="text-white font-bold text-2xl">{step.number}</div>
                  </div>
                  {/* Icon Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-3 border-primary z-20">
                    <span className="text-primary text-xl">{step.icon}</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                
                {/* Step Content */}
                <div className="space-y-4 relative z-20">
                  <h3 className="text-xl md:text-2xl moonwalk-text text-white font-semibold leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="circuit-pattern">
                <svg className="circuit-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="circuit-lines">
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#FFFFFF" strokeWidth="1"/>
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#FFFFFF" strokeWidth="1"/>
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#FFFFFF" strokeWidth="1"/>
                    <line x1="100" y1="0" x2="100" y2="200" stroke="#FFFFFF" strokeWidth="1"/>
                    <line x1="200" y1="0" x2="200" y2="200" stroke="#FFFFFF" strokeWidth="1"/>
                    <line x1="300" y1="0" x2="300" y2="200" stroke="#FFFFFF" strokeWidth="1"/>
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl moonwalk-text mb-4">
                Pronto para acelerar suas vendas?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Junte-se a milhares de revendedores que já confiam na Click Car
              </p>
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 cursor-pointer relative overflow-hidden group">
                <span className="relative z-10">Cadastre sua loja agora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
