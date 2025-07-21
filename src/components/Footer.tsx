import React from 'react';
import { Instagram, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { formTexts } from '../data/formTexts';
import logo3 from '/img/gokids.jpg';
import logo1 from '/img/gotennis.png';
import logo2 from '/img/gym.png';

const logoItems = [
  // { src: logo1, name: 'GoTennis', link: 'https://www.instagram.com/gotennisclub.uz/' },
  // { src: logo2, name: 'GoSport Club', link: 'https://www.instagram.com/gosportsclub.uz/' },
  { src: logo3, name: 'GoKids', link: 'https://www.instagram.com/gokidsclub.uz/' }
];

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative z-30 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/70 dark:to-transparent border-t border-white/10 dark:border-gray-800 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-12 flex flex-col items-center space-y-12 animate-fade-in-up">
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-12">
          {logoItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110"
            >
              <div className="h-16 w-16 rounded-full overflow-hidden shadow-md group-hover:shadow-glow transition-shadow duration-300">
                <img src={item.src} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-white">{item.name}</span>
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                © {currentYear} {item.name}. {translations.footerRights[language]}.
              </p>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>📞 +998 91 798 18 38</p>
          <p>☎️ +998 90 998 14 25</p>
          <p>{formTexts.location[language]} </p> {/* Replace with specific location if needed */}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/gokidsclub.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-200"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/gokidsclub" // Replace with your actual Telegram link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Send className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
