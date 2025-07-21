import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

import logo3 from '/img/gokids.jpg';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white dark:bg-gray-900 py-2 shadow-md'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between w-full">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a
              href="https://www.instagram.com/gokidsclub.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group relative transform-gpu hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 group-hover:animate-glow bg-pink-300 dark:bg-pink-800 z-0"></div>
                <div className="h-12 w-12 rounded-full overflow-hidden shadow relative z-10">
                  <img src={logo3} alt="GoKids Logo" className="h-full w-full object-cover" />
                </div>
              </div>
              <span className="text-base font-bold text-gray-900 dark:text-white z-10">
                GoKids
              </span>
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex flex-grow justify-center items-center space-x-6 text-sm pl-12">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {translations.navHome[language]}
            </a>
            <a
              href="#categories"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {translations.navAbout[language]}
            </a>
            <a
              href="#footer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {translations.navContact[language]}
            </a>
          </nav>

          {/* Right: Toggles */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3 bg-white dark:bg-gray-900 text-sm">
          <nav className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navHome[language]}
            </a>
            <a
              href="#categories"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navAbout[language]}
            </a>
            <a
              href="#footer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.navContact[language]}
            </a>
          </nav>

          <div className="flex items-center justify-between border-t pt-3 border-gray-200 dark:border-gray-700">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
