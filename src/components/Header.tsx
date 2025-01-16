import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo placeholder - replace with actual logo */}
            <div className="text-2xl font-bold text-gray-800">FALRUI</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Empresa</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Produtos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Portfólio</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Qualidade</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contactos</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;