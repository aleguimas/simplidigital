'use client';

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load do componente Lottie
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <div className="text-gray-400">Carregando animação...</div>
    </div>
  ),
});

interface HeroProps {
  onScrollToContact: () => void;
}

const Hero = ({ onScrollToContact }: HeroProps) => {
  const [lottieData, setLottieData] = useState(null);
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);

  // Lazy load do JSON da Lottie
  useEffect(() => {
    const loadLottieData = async () => {
      try {
        // Carrega o arquivo JSON da animação
        const response = await fetch('/animations/digital-transformation.json');
        const lottieData = await response.json();
        
        setLottieData(lottieData);
        setIsLottieLoaded(true);
      } catch (error) {
        console.error('Erro ao carregar animação Lottie:', error);
        // Fallback para uma animação simples caso o arquivo não carregue
        setIsLottieLoaded(true);
      }
    };

    // Carrega a animação após um pequeno delay para lazy loading
    const timer = setTimeout(loadLottieData, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToContact = () => {
    onScrollToContact();
  };

  const handleSeeInAction = () => {
    // Scroll suave para a seção de serviços
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto e Botões */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Simplificando a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-simpli-green to-simpli-teal">
                Transformação Digital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transformamos ideias em soluções digitais inovadoras que impulsionam seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-simpli-green to-simpli-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              
              <button
                onClick={handleSeeInAction}
                className="border-2 border-simpli-green text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-simpli-green hover:text-white transition duration-300 transform hover:scale-105"
              >
                Veja em Ação
              </button>
            </div>
          </div>

          {/* Animação Lottie */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              {isLottieLoaded && lottieData ? (
                <Lottie
                  animationData={lottieData}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-simpli-green/20 to-simpli-teal/20 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-simpli-green mx-auto mb-4"></div>
                    <p>Carregando animação...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
