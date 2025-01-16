import React from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            {/* Logo placeholder - replace with actual logo */}
            <div className="text-2xl font-bold">FALRUI</div>
          </div>
          
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={20} />
              <a href="tel:+351262990870">+351 262 990 870</a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={20} />
              <a href="mailto:geral@falrui.pt">geral@falrui.pt</a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} FALRUI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;