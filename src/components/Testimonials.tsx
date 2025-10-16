import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Silva",
      role: "Proprietário",
      company: "AutoCenter São Paulo",
      content: "A Click Car revolucionou meu negócio. Em 6 meses aumentei minhas vendas em 40% e reduzi o tempo de negociação pela metade.",
      avatar: "/avatar1.jpg"
    },
    {
      name: "Maria Santos",
      role: "Diretora Comercial", 
      company: "Revenda Premium RJ",
      content: "A plataforma é intuitiva e segura. Conseguimos conectar com compradores qualificados de todo o Brasil de forma muito eficiente.",
      avatar: "/avatar2.jpg"
    },
    {
      name: "João Oliveira",
      role: "Gerente",
      company: "AutoMax Minas",
      content: "As ferramentas de gestão são excepcionais. Posso acompanhar todo o processo de venda e ter controle total do meu estoque.",
      avatar: "/avatar3.jpg"
    }
  ];

  return (
    <section className="section-padding bg-gray">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl moonwalk-text text-dark mb-6">
            Depoimentos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos parceiros dizem sobre a Click Car
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold text-xl mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-dark text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
