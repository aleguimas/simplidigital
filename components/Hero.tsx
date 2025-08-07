'use client';

import Image from 'next/image';

interface HeroProps {
  onScrollToContact: () => void;
}

const Hero = ({ onScrollToContact }: HeroProps) => {

  const handleScrollToContact = () => {
    onScrollToContact();
  };

  const handleSeeInAction = () => {
    // Scroll suave para a seção de serviços
    const servicesSection = document.querySelector('#servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5FFF0' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-simpli-green/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-simpli-teal/10 to-transparent rounded-full blur-3xl"></div>
      <div className="relative z-10">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto e Botões */}
          <div className="text-center lg:text-left">
                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
               <span className="text-simpli-teal">Simplificando a</span>{' '}
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
                 className="text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                                   style={{
                    background: 'linear-gradient(to right, #7ACC00, #00B8B0)'
                  }}
               >
                 Solicitar Orçamento
               </button>
               
               <button
                 onClick={handleSeeInAction}
                 className="border-2 text-simpli-teal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-simpli-teal hover:text-white transition duration-300 transform hover:scale-105"
                                   style={{
                    borderColor: '#00B8B0',
                    color: '#00B8B0'
                  }}
               >
                 Veja em Ação
               </button>
            </div>
          </div>

                     {/* Marca Simplí */}
           <div className="flex justify-center lg:justify-end">
             <div className="relative w-full max-w-lg">
               <div className="w-full h-80 bg-white rounded-2xl shadow-xl flex items-center justify-center p-12 relative overflow-hidden">
                 {/* Background gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-simpli-green/5 to-simpli-teal/5"></div>
                 
                 {/* Marca Simplí */}
                 <div className="relative z-10">
                   <Image
                     src="/images/marca-simpli.png"
                     alt="Marca Simplí"
                     width={400}
                     height={300}
                     className="w-full h-auto max-w-sm"
                     priority
                   />
                 </div>
                 
                 {/* Decorative elements */}
                 <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-simpli-green/20 to-simpli-teal/20 rounded-full blur-xl"></div>
                 <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-simpli-teal/20 to-simpli-green/20 rounded-full blur-lg"></div>
               </div>
             </div>
           </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
