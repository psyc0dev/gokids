import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations, categoriesData } from '../data/translations';
import CategoryCard from '../components/CategoryCard';
import TargetPage from '../components/TargetPage';

const Categories: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      id="categories"
      className="py-16 bg-white dark:bg-gray-800 animate-fade-in-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {translations.categoriesTitle[language]}
        </h2>

        {categoriesData.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
