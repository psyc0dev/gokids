import React from 'react';
import { translations } from '../data/translations';
import { useLanguage } from '../hooks/useLanguage';
interface TryNowButtonProps {
  link: string;
}

const TryNowButton: React.FC<TryNowButtonProps> = ({ link }) => {
  const { language } = useLanguage();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block px-8 py-4 font-semibold text-white rounded-xl 
        bg-gradient-to-r from-blue-600 to-purple-600 
        shadow-xl border border-white/10 
        overflow-hidden group transition-all duration-500"
    >
      {/* Текст кнопки */}
      <span className="relative z-10">{translations.tryNowButton[language]}</span>

      {/* Светящийся фон (glow-outline) */}
      <span className="absolute inset-0 rounded-xl 
        bg-gradient-to-r from-blue-500 to-purple-500 
        opacity-20 blur-xl 
        animate-glow-outline 
        pointer-events-none z-0" />

      {/* Контур на ховере */}
      <span className="absolute inset-0 rounded-xl 
        border border-white/20 
        group-hover:shadow-glow 
        transition-all duration-500 z-10 pointer-events-none" />
    </a>
  );
};

export default TryNowButton;