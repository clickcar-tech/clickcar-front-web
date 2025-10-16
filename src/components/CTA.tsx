import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl moonwalk-text mb-6">
            Pronto para acelerar suas vendas?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Junte-se a mais de 10.000 revendedores que já confiam na Click Car para impulsionar seus negócios
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 min-w-[250px] cursor-pointer">
              Cadastre sua loja agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-primary transition-colors duration-300 min-w-[200px] cursor-pointer">
              Falar com especialista
            </button>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            <p>✓ Cadastro gratuito ✓ Sem taxas ocultas ✓ Suporte 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
