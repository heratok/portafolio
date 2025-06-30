import React from 'react';
import { Code, Server, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sobre Mí</h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Soy un desarrollador web full stack con más de 2 años de experiencia en la creación 
              de aplicaciones web modernas y eficientes. Mi enfoque se centra en construir productos 
              digitales que ofrezcan experiencias excepcionales y solucionen problemas reales.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Mi viaje en el desarrollo web comenzó por curiosidad y se convirtió en pasión. 
              He trabajado con startups, agencias y empresas establecidas, lo que me ha permitido 
              adquirir un conjunto diverso de habilidades y experiencias.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cuando no estoy codificando, me gusta explorar nuevas tecnologías, contribuir a proyectos 
              de código abierto y compartir conocimientos con la comunidad de desarrolladores.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 dark:text-blue-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Experiencia</h3>
                  <p className="text-gray-600 dark:text-gray-400">+2 años</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Educación</h3>
                  <p className="text-gray-600 dark:text-gray-400">Ingenieria de Sistemas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 dark:text-blue-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Idiomas</h3>
                  <p className="text-gray-600 dark:text-gray-400">Español, Inglés</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-blue-600 dark:text-blue-400">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Certificaciones</h3>
                  <p className="text-gray-600 dark:text-gray-400">AWS, Google Cloud</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Especializado en crear interfaces de usuario atractivas, responsivas y funcionales.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Backend</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Construyo APIs robustas y eficientes que potencian aplicaciones escalables.
              </p>
            </div>
            
            <div className="sm:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-bold mb-2">Mi Filosofía</h3>
              <p className="mb-0">
                "Creo que el mejor código no solo funciona, sino que es legible, mantenible y escalable. 
                La tecnología debe resolver problemas reales y mejorar la vida de las personas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;