import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({
    message: '',
    type: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        message: 'Por favor, complete todos los campos requeridos.',
        type: 'error',
      });
      return;
    }
    
    // Simulate form submission
    setStatus({
      message: 'Enviando...',
      type: null,
    });
    
    // Mock API call
    setTimeout(() => {
      setStatus({
        message: '¡Mensaje enviado con éxito! Gracias por contactarme.',
        type: 'success',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contactame</h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente o quieres hablar sobre tecnología? Estoy aquí para ayudarte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 dark:text-blue-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:tu@ejemplo.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      hectorincon0502@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Valledupar, Colombia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 dark:text-blue-400 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Teléfono</h4>
                    <a 
                      href="tel:+525500000000" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +57 3207403002
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-bold mb-4">¡Trabajemos Juntos!</h3>
              <p className="mb-0">
                Estoy disponible para proyectos freelance, oportunidades a tiempo completo y colaboraciones. 
                ¡No dudes en contactarme para discutir cómo puedo ayudarte!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-white resize-none"
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`p-3 rounded-md ${
                    status.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 
                    status.type === 'error' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200' : 
                    'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    Enviar Mensaje
                    <Send size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;