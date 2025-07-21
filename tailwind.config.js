/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        backgroundFade: 'backgroundFade 15s ease infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'glow-outline': 'glowOutline 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        backgroundFade: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 10px rgba(99,102,241,0.5), 0 0 20px rgba(168,85,247,0.3)',
          },
          '100%': {
            boxShadow: '0 0 20px rgba(99,102,241,0.9), 0 0 30px rgba(168,85,247,0.6)',
          },
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        glowOutline: {
          '0%': {
            opacity: '0.6',
            transform: 'scale(1)',
            boxShadow: '0 0 10px rgba(99,102,241,0.6), 0 0 20px rgba(168,85,247,0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
            boxShadow: '0 0 15px rgba(99,102,241,0.9), 0 0 25px rgba(168,85,247,0.5)',
          },
          '100%': {
            opacity: '0.6',
            transform: 'scale(1)',
            boxShadow: '0 0 10px rgba(99,102,241,0.6), 0 0 20px rgba(168,85,247,0.3)',
          },
        },
      },
      boxShadow: {
        glow: '0 0 10px rgba(99,102,241,0.7), 0 0 20px rgba(168,85,247,0.5)',
      },
      transitionProperty: {
        height: 'height',
        'max-height': 'max-height',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Можно кастомизировать отключения здесь при необходимости
  },
};