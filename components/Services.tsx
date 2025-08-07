import Link from 'next/link';
import { BiCodeBlock, BiBrain, BiBarChart, BiShowAlt } from 'react-icons/bi';

const Services = () => {
  const services = [
    {
      id: 'desenvolvimento-web',
      slug: 'desenvolvimento-web',
      icon: <BiCodeBlock className="w-8 h-8" />,
      iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      title: 'Desenvolvimento Web',
      description: 'Criamos sites e landing pages modernos e responsivos utilizando as melhores tecnologias, otimizados para SEO e performance.'
    },
    {
      id: 'agentes-ia',
      slug: 'agentes-ia',
      icon: <BiBrain className="w-8 h-8" />,
      iconBg: 'bg-gradient-to-br from-orange-400 to-red-400',
      title: 'Agentes de IA',
      description: 'Desenvolvemos agentes de Inteligência Artificial personalizados para automatizar processos e aumentar a eficiência do seu negócio.'
    },
    {
      id: 'trafego-pago',
      slug: 'trafego-pago',
      icon: <BiBarChart className="w-8 h-8" />,
      iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
      title: 'Tráfego Pago',
      description: 'Gerenciamos campanhas em Google Ads, Facebook Ads e LinkedIn Ads, maximizando ROI e atraindo leads qualificados.'
    },
    {
      id: 'consultoria-digital',
      slug: 'consultoria-digital',
      icon: <BiShowAlt className="w-8 h-8" />,
      iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
      title: 'Consultoria Digital',
      description: 'Assessoramos empresas na transformação digital, desde a estratégia até a implementação de soluções.'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 via-white to-simpli-green/3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2 relative">
          Nossos Serviços
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-simpli rounded-full"></div>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Oferecemos soluções completas para transformação digital
        </p>
        
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/servicos/${service.slug}`}
              className="block"
            >
              <div
                role="region"
                aria-labelledby={`${service.id}-title`}
                className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col h-full"
              >
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 flex-shrink-0 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 
                  id={`${service.id}-title`}
                  className="text-xl font-semibold mb-4 text-gray-800"
                >
                  {service.title}
                </h3>
                
                <p className="text-gray-600 flex-grow">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
