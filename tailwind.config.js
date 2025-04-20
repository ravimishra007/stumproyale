/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 6s linear infinite reverse',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-in-delayed': 'fadeIn 0.5s ease-in 0.3s forwards',
        'expand': 'expand 0.8s ease-out 0.6s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expand: {
          '0%': { width: '0' },
          '100%': { width: '128px' },
        },
      },
    },
  },
  plugins: [],
} 