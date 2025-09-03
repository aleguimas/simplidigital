'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

const ContactPage = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Regex para validação
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
  const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/;

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Nome é obrigatório';
        } else if (!nameRegex.test(value)) {
          error = 'Nome deve ter entre 2 e 50 caracteres';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email é obrigatório';
        } else if (!emailRegex.test(value)) {
          error = 'Email inválido';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Telefone é obrigatório';
        } else if (!phoneRegex.test(value)) {
          error = 'Telefone deve ter pelo menos 10 dígitos';
        }
        break;
      case 'company':
        if (!value.trim()) {
          error = 'Empresa é obrigatória';
        } else if (value.length < 2) {
          error = 'Nome da empresa deve ter pelo menos 2 caracteres';
        }
        break;
      case 'interest':
        if (!value.trim()) {
          error = 'Área de interesse é obrigatória';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Mensagem é obrigatória';
        } else if (value.length < 10) {
          error = 'Mensagem deve ter pelo menos 10 caracteres';
        }
        break;
    }

    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validação em tempo real
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação completa
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      company: validateField('company', formData.company),
      interest: validateField('interest', formData.interest),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Verifica se há erros
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Envio para Formspree
      const response = await fetch('https://formspree.io/f/xrbagyyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          interest: formData.interest,
          message: formData.message,
          _subject: `Novo contato do site - ${formData.name} (${formData.company}) - ${formData.interest}`
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitError(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          interest: '',
          message: ''
        });
        
        // Reset do sucesso após 5 segundos
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitError(true);
      setSubmitSuccess(false);
      // Reset do erro após 5 segundos
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-simpli text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envie sua Mensagem</h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800">{t('contact.form.success')}</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-800">{t('contact.form.error')}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-simpli-green focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-simpli-green focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/Celular *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-simpli-green focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="(81) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-simpli-green focus:border-transparent transition-colors ${
                      errors.company ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Nome da sua empresa"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                  )}
                </div>

                {/* Área de Interesse */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Área de Interesse *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-simpli-green focus:border-transparent transition-colors ${
                      errors.interest ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Palestra">Palestra</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Treinamento - Atendimento ao Cliente">Treinamento - Atendimento ao Cliente</option>
                    <option value="Treinamento - Técnicas de Vendas">Treinamento - Técnicas de Vendas</option>
                    <option value="Treinamento - Imersão de IA para Negócios">Treinamento - Imersão de IA para Negócios</option>
                    <option value="Treinamento - Visual Merchandising">Treinamento - Visual Merchandising</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-red-600">{errors.interest}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-simpli-green focus:border-transparent transition-colors resize-none ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Botão Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-simpli text-white py-4 px-8 rounded-lg font-semibold hover:opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </div>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-simpli-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                                      <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">digitalsimpli@gmail.com</p>
                    </div>
                </div>



                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-simpli-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600">Recife, PE - Brasil</p>
                  </div>
                </div>

                {/* Horário de Atendimento */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-simpli-teal rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Google */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-600">Visite nossos escritórios ou entre em contato conosco</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1234567890123!2d-34.8812!3d-8.0476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab196a3c0b0b0b%3A0x0!2s0x7ab196a3c0b0b0b%3A0x0!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Simplí Digital - Recife"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
