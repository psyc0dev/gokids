import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToCategories = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#request');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-visible bg-black text-white">
      {/* Фон с градиентом и анимацией */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 
        dark:from-gray-900 dark:via-gray-800 dark:to-black 
        bg-[length:400%_400%] animate-backgroundFade z-0" />

      {/* Переливающиеся неоновые круги */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />

      {/* Эффект стекла */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15] pb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-300 drop-shadow-lg">
          {translations.heroTitle[language]}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          {translations.heroSubtitle[language]}
        </p>

        <button
          onClick={scrollToCategories}
          className="relative inline-block px-10 py-4 font-semibold text-white rounded-xl 
            bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg 
            border border-white/10 overflow-hidden group transition-all duration-500"
        >
          <span className="relative z-10">{translations.categoriesTitle[language]}</span>
          <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <span className="absolute inset-0 rounded-xl border border-white/20 group-hover:shadow-glow transition-all" />
        </button>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2 animate-fade-in-up delay-200">Scroll</span>
        <div className="w-1.5 h-10 bg-gray-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;
