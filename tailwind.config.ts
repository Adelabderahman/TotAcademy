import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-blue': 'var(--secondary-blue)',
        'primary-green': 'var(--primary-green)',
        'secondary-green': 'var(--secondary-green)',
        'accent-yellow': 'var(--accent-yellow)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        'border-color': 'var(--border-color)',
        'bg-page': 'var(--bg-page)',
        'qz-primary': 'var(--qz-primary)',
      },
      fontFamily: {
        en: ['var(--font-inter)', 'sans-serif'],
        ar: ['var(--font-tajawal)', 'sans-serif'],
      },
      boxShadow: {
        hero: '0 15px 35px rgba(17, 82, 207, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        'card-elevated': '0 15px 30px rgba(17, 82, 207, 0.2)',
      },
      keyframes: {
        scrollMarqueeRTL: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        scrollMarqueeLTR: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'marquee-rtl': 'scrollMarqueeRTL 40s linear infinite',
        'marquee-ltr': 'scrollMarqueeLTR 40s linear infinite',
        fadeIn: 'fadeIn 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;