import React, { useState }   from 'react';
import MoonWalkText from './MoonWalkText';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cnpj: '',
    cidade: '',
    estado: '',
    tipoNegocio: '',
    experiencia: '',
    interesse: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Fechar modal após 3 segundos
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3000);
  };

  const handleClose = (): void => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-orange-600 p-6 text-white relative">
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-300 disabled:opacity-50 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="logo-icon text-white"></div>
            <MoonWalkText className="text-2xl text-white">
              CLICK CAR
            </MoonWalkText>
          </div>
          
          <h2 className="text-xl font-medium opacity-90">
            Cadastre sua revenda e acelere suas vendas
          </h2>
        </div>

        {/* Form */}
        {!showSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Informações Pessoais */}
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4 moonwalk-text">
                Informações Pessoais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-2">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    value={formData.cidade}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Sua cidade"
                  />
                </div>
              </div>
            </div>

            {/* Informações da Empresa */}
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4 moonwalk-text">
                Informações da Empresa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Nome da sua revenda"
                  />
                </div>
                
                <div>
                  <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">
                    CNPJ *
                  </label>
                  <input
                    type="text"
                    id="cnpj"
                    name="cnpj"
                    required
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                
                <div>
                  <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
                    Estado *
                  </label>
                  <select
                    id="estado"
                    name="estado"
                    required
                    value={formData.estado}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Selecione seu estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="PR">Paraná</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="BA">Bahia</option>
                    <option value="GO">Goiás</option>
                    <option value="PE">Pernambuco</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="tipoNegocio" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Negócio *
                  </label>
                  <select
                    id="tipoNegocio"
                    name="tipoNegocio"
                    required
                    value={formData.tipoNegocio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="revenda">Revenda de Veículos</option>
                    <option value="concessionaria">Concessionária</option>
                    <option value="distribuidora">Distribuidora</option>
                    <option value="leilao">Leilão</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experiência e Interesse */}
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4 moonwalk-text">
                Experiência e Interesse
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-2">
                    Tempo de Experiência no Setor *
                  </label>
                  <select
                    id="experiencia"
                    name="experiencia"
                    required
                    value={formData.experiencia}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Selecione sua experiência</option>
                    <option value="iniciante">Iniciante (até 1 ano)</option>
                    <option value="junior">Júnior (1-3 anos)</option>
                    <option value="pleno">Pleno (3-5 anos)</option>
                    <option value="senior">Sênior (5-10 anos)</option>
                    <option value="expert">Expert (mais de 10 anos)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-2">
                    Principal Interesse na Plataforma
                  </label>
                  <textarea
                    id="interesse"
                    name="interesse"
                    value={formData.interesse}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="Conte-nos sobre seus objetivos e como podemos ajudar..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Cadastrando...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Cadastrar na Plataforma</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors duration-300 disabled:opacity-50 cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          /* Success Message */
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-dark mb-4 moonwalk-text">
              Cadastro Realizado com Sucesso!
            </h3>
            
            <p className="text-gray-600 mb-6">
              Obrigado por se cadastrar na Click Car! Nossa equipe entrará em contato em breve para ativar sua conta e apresentar todas as funcionalidades da plataforma.
            </p>
            
            <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
              <p className="text-primary font-medium">
                🚀 Prepare-se para acelerar suas vendas com a Click Car!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
