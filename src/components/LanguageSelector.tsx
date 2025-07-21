import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../types';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };
  
  return (
    <div className="relative">
      <select
        value={language}
        onChange={handleChange}
        className="appearance-none pl-2 pr-8 py-1 rounded-md border text-sm 
        bg-white text-gray-800 border-gray-300 
        dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 
        focus:outline-none focus:ring-2 focus:ring-blue-500"

        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uz">O'zbek</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;