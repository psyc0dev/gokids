import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import TryNowButton from './TryNowButton';
import { CategoryData } from '../types';

interface CategoryCardProps {
  category: CategoryData;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const { language } = useLanguage();
  const isEven = index % 2 === 0;

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden my-20 rounded-3xl px-4 sm:px-8 py-14 
        transition-all duration-700 ease-out 
        ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        flex flex-col lg:flex-row items-center gap-10 lg:gap-16
        bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10
        shadow-2xl z-10
      `}
    >
      {/* Перелив на заднем фоне */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-800/10 dark:via-purple-700/10 dark:to-pink-800/10 blur-2xl opacity-60 z-0" />

      {/* Блок с изображением */}
      <div className="relative w-full lg:w-1/2 z-10 group">
        <div className="rounded-2xl overflow-hidden border-4 border-transparent group-hover:border-blue-400 transition duration-700">
          <img
            src={category.imageUrl}
            alt={category.title[language]}
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl group-hover:scale-105 transform transition-transform duration-700"
          />
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl group-hover:opacity-40 transition duration-700 z-[-1]" />
      </div>

      {/* Контент */}
      <div className="w-full lg:w-1/2 z-10 space-y-6 text-center lg:text-left">
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-700 to-blue-600 dark:from-white dark:via-purple-200 dark:to-blue-300 drop-shadow-md">
          {category.title[language]}
        </h3>

        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed drop-shadow">
          {category.description[language]}
        </p>
        <TryNowButton link={category.tryNowLink} />
      </div>
    </div>
  );
};

export default CategoryCard;
