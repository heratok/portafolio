import React from "react";
import { ArrowDown, Code, BrainCircuit, Github } from "lucide-react";
import { socialLinks } from "../../data/navigation";
import * as LucideIcons from "lucide-react";

const Hero: React.FC = () => {
  // Dynamic icon rendering
  const IconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hola, soy{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Hector Armando Rincon Farelo
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Desarrollador Web Full Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Construyo experiencias digitales excepcionales con las últimas
              tecnologías. Mi pasión es crear soluciones elegantes que resuelvan
              problemas reales.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                Ver mis proyectos
                <Code size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                Contactame
                <BrainCircuit size={20} />
              </a>
            </div>

            <div className="flex space-x-6">
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

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full opacity-80 flex items-center justify-center overflow-hidden">
                <img
                  src="/img/foto_page-0001.jpg"
                  alt="Tu Nombre"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
