import React from 'react';
import { socialLinks } from '../../data/navigation';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Dynamic icon rendering
  const IconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Desarrollador web creativo y apasionado
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label={link.platform}
              >
                {IconComponent(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Política de privacidad
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;