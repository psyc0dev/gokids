import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  const { theme } = useTheme();
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <div className={`absolute inset-0 border-4 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-blue-400' : 'border-blue-600'}`}></div>
        </div>
        <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">Loading</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;