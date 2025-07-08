/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00D9FF',
          500: '#00B8E6',
          600: '#0097CC',
        },
        purple: {
          400: '#A855F7',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        pink: {
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      backdropBlur: {
        'cyber': '10px',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 217, 255, 0.3)',
        'cyber-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'purple-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
};