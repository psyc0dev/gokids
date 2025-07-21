import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TargetPage from './components/TargetPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
          <LoadingAnimation isLoading={isLoading} />
          <Header />
          <Hero />
          <Categories />
          <TargetPage />
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
