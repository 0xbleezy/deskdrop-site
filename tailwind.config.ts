import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
    },
    extend: {
      colors: {
        // Minimalist Neutral Palette - Loro Piana/Aesop Style
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F0',
          200: '#E8E8E3',
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#A3A3A3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#1A1A1A', // Primary text
          950: '#000000', // Pure black
        },
        // Keep cream for subtle backgrounds
        cream: {
          50: '#FAFAFA',
          100: '#F5F5F0',
          200: '#E8E8E3',
        },
        // Custom background
        page: {
          bg: '#f9f8fa',
        },
      },
      fontFamily: {
        sans: ['Sohne', 'system-ui', 'sans-serif'],
        serif: ['FreightDisp Book', 'Georgia', 'serif'],
        display: ['FreightDisp Book', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['clamp(0.75rem, 1.5vw, 2.4rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 1.75vw, 2.8rem)', { lineHeight: '1.5' }],
        'base': ['clamp(1rem, 2vw, 3.2rem)', { lineHeight: '1.5' }],
        'lg': ['clamp(1.125rem, 2.25vw, 3.6rem)', { lineHeight: '1.56' }],
        'xl': ['clamp(1.25rem, 2.5vw, 4rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.5rem, 3vw, 4.8rem)', { lineHeight: '1.33' }],
        '3xl': ['clamp(1.875rem, 3.75vw, 6rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 4.5vw, 7.2rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(3rem, 6vw, 9.6rem)', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '10xl': ['10rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      lineHeight: {
        'relaxed': '1.8',
        'loose': '2.0',
        'editorial': '1.9',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      maxWidth: {
        // editorial removed — now using max-w-7xl (1280px) sitewide via Container
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        counter: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

