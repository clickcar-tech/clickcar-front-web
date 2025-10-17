import React, { useState }   from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
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
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: ''
      });
      onClose();
    }
  };

  const isFormValid = (): boolean => {
    return formData.nome.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.telefone.trim() !== '' && 
           formData.empresa.trim() !== '';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-orange-600 p-4 text-white relative">
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors duration-300 disabled:opacity-50 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-2 mb-2">
            <div className="logo-icon text-white"></div>
            <h1 className="font-family-moonwalk text-lg text-white">
              CLICK CAR
            </h1>
          </div>
          
          <h2 className="text-lg font-medium opacity-90">
            Cadastre sua revenda
          </h2>
        </div>

        {/* Form */}
        {!showSuccess ? (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-dark mb-4 moonwalk-text">
                Informações Essenciais
              </h3>
              
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="Nome da sua revenda"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors duration-300 disabled:opacity-50 cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          /* Success Message */
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-dark mb-3 moonwalk-text">
              Cadastro Realizado!
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm">
              Obrigado! Nossa equipe entrará em contato em breve para ativar sua conta.
            </p>
            
            <div className="bg-primary bg-opacity-10 p-3 rounded-lg">
              <p className="text-primary font-medium text-sm">
                🚀 Prepare-se para acelerar suas vendas!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
