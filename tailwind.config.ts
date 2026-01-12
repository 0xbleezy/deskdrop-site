import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Chocolate Color Palette
        chocolate: {
          50: '#F5F3F0',
          100: '#E8E0D6',
          200: '#D4C4B0',
          300: '#B89D7A',
          400: '#9A7A5A',
          500: '#5C4033', // Primary chocolate brown
          600: '#3D2817', // Deep chocolate
          700: '#2D1E12',
          800: '#1F150D',
          900: '#120C08',
        },
        gold: {
          50: '#FDF9F0',
          100: '#FAF2D9',
          200: '#F5E4B3',
          300: '#EFD088',
          400: '#E8C55C',
          500: '#C9A961', // Primary gold accent
          600: '#B8954F',
          700: '#9A7A3F',
          800: '#7C5F2F',
          900: '#5E451F',
        },
        burgundy: {
          50: '#F8F4F2',
          100: '#EDE0D6',
          200: '#D9C1AD',
          300: '#C5A284',
          400: '#B1835B',
          500: '#8B4513', // Primary burgundy
          600: '#6B3410',
          700: '#4B240B',
          800: '#2B1406',
          900: '#0B0401',
        },
        cream: {
          50: '#FAF9F6',
          100: '#F5F3F0',
          200: '#EBE7E0',
          300: '#E1DBD0',
          400: '#D7CFC0',
          500: '#CDC3B0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '1.8',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'luxury-lg': '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
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

