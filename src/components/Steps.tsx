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
      title: "Cadastrar sua loja",
      description: "Registre sua revenda na plataforma com informações completas e documentos necessários.",
      icon: "🏪"
    },
    {
      number: "02", 
      title: "Publicar veículos",
      description: "Adicione seus carros com fotos profissionais e informações detalhadas para atrair compradores.",
      icon: "📸"
    },
    {
      number: "03",
      title: "Vender com segurança",
      description: "Receba propostas qualificadas e feche negócios com garantias e proteção total.",
      icon: "✅"
    }
  ];

  return (
    <section id="vender" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl moonwalk-text text-dark mb-6">
            Como Funciona
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Três passos simples para começar a vender mais e melhor na Click Car
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative z-10 bg-white"
              >
                <div className="text-center">
                  {/* Step number circle */}
                  <div className="w-20 h-20 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-6 shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-5xl mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl moonwalk-text text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl moonwalk-text mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a milhares de revendedores que já confiam na Click Car
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 cursor-pointer">
              Cadastre sua loja agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
