import React, { useState } from 'react';
import MoonWalkText from './MoonWalkText';

interface HeaderProps {
  onOpenModal?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Click Car Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden md:flex items-center space-x-3">
              <div className="logo-icon text-primary"></div>
              <MoonWalkText className="text-2xl text-dark tracking-wider">
                CLICK CAR
              </MoonWalkText>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-dark hover:text-primary transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#lojistas" className="text-dark hover:text-primary transition-colors duration-300 font-medium">
              Para Lojistas
            </a>
            <a href="#vender" className="text-dark hover:text-primary transition-colors duration-300 font-medium">
              Vender Carro
            </a>
            <a href="#contato" className="text-dark hover:text-primary transition-colors duration-300 font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
          <button 
            onClick={onOpenModal}
            className="btn-primary cursor-pointer"
          >
            Anuncie Agora
          </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-dark" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-dark hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#lojistas" 
                className="text-dark hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Lojistas
              </a>
              <a 
                href="#vender" 
                className="text-dark hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vender Carro
              </a>
              <a 
                href="#contato" 
                className="text-dark hover:text-primary transition-colors duration-300 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="px-4 pt-4">
                <button 
                  onClick={onOpenModal}
                  className="btn-primary w-full cursor-pointer"
                >
                  Anuncie Agora
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
