import { usePathname } from 'next/navigation';

export const useWhatsAppMessage = () => {
  const pathname = usePathname();
  
  const getMessage = () => {
    const baseMessage = 'Olá! Gostaria de saber mais sobre';
    
    switch (pathname) {
      case '/':
        return `${baseMessage} os serviços de transformação digital da Simplí Digital.`;
      
      case '/sobre':
        return `${baseMessage} a Simplí Digital e como podemos ajudar sua empresa.`;
      
      case '/servicos':
      case '/servicos/desenvolvimento-web':
        return `${baseMessage} o desenvolvimento web e criação de sites da Simplí Digital.`;
      
      case '/servicos/agentes-ia':
        return `${baseMessage} os agentes de IA e automação da Simplí Digital.`;
      
      case '/servicos/trafego-pago':
        return `${baseMessage} o tráfego pago e marketing digital da Simplí Digital.`;
      
      case '/servicos/consultoria-digital':
        return `${baseMessage} a consultoria digital da Simplí Digital.`;
      
      case '/consultorias':
        return `${baseMessage} as consultorias da Simplí Digital.`;
      
      case '/contato':
        return `${baseMessage} os serviços da Simplí Digital e solicitar um orçamento.`;
      
      default:
        return `${baseMessage} os serviços de transformação digital da Simplí Digital.`;
    }
  };

  return {
    message: getMessage(),
    phoneNumber: '5581991942628',
    whatsappUrl: `https://wa.me/5581991942628?text=${encodeURIComponent(getMessage())}`
  };
};
