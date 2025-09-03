import Image from 'next/image';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface FacilitatorCardProps {
  name: string;
  title: string;
  description: string;
  imagePath: string;
  expertise: string[];
  socialLinks: SocialLink[];
  gradientColors: string;
}

const FacilitatorCard: React.FC<FacilitatorCardProps> = ({
  name,
  title,
  description,
  imagePath,
  expertise,
  socialLinks,
  gradientColors
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
      <div className={`w-32 h-32 ${gradientColors} rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden`}>
        <Image
          src={imagePath}
          alt={name}
          width={128}
          height={128}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-simpli-teal font-semibold mb-4">{title}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Expertise Principal:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          {expertise.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-simpli-teal rounded-full flex-shrink-0 mt-2 mr-2"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 hover:${social.color} transition-colors duration-200`}
            title={social.platform}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FacilitatorCard;
