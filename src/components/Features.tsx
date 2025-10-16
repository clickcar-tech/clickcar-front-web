import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "🚗",
      title: "Negócios rápidos e seguros",
      description: "Processo otimizado para acelerar suas vendas com máxima segurança nas transações."
    },
    {
      icon: "🔒",
      title: "Transações protegidas",
      description: "Sistema de pagamento seguro e garantias que protegem tanto compradores quanto vendedores."
    },
    {
      icon: "💡",
      title: "Soluções inteligentes para lojistas",
      description: "Ferramentas avançadas de gestão e análise para otimizar seu negócio automotivo."
    },
    {
      icon: "🤝",
      title: "Parcerias duradouras",
      description: "Conectamos você com uma rede confiável de revendedores em todo o território nacional."
    }
  ];

  return (
    <section id="lojistas" className="section-padding bg-gray">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl moonwalk-text text-dark mb-6">
            Por que escolher a Click Car?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Somos a plataforma líder em conectividade automotiva, oferecendo soluções completas para revendedores profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-6 text-center group-hover:animate-bounce-subtle">
                {feature.icon}
              </div>
              <h3 className="text-xl moonwalk-text text-dark mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
