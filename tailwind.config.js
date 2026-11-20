/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chalk: {
          DEFAULT: '#F2EFEA',   /* 60% Main website background */
          card: '#FAF8F5',      /* Soft warm card surface */
          surface: '#EAE6DF',   /* Secondary surface / pills */
        },
        slate: {
          DEFAULT: '#2E3440',   /* 25% Headings, body text, important content */
          muted: '#4C566A',     /* Softer slate for body paragraphs */
          dark: '#1F232B',
        },
        terracotta: {
          DEFAULT: '#B9572F',   /* 10% Accent, primary CTA buttons, highlighted words */
          hover: '#9E4623',     /* Slightly darker terracotta for button hover */
          light: '#F8ECE6',     /* Soft accent badges */
          border: 'rgba(185, 87, 47, 0.25)',
        },
        stone: {
          DEFAULT: '#A9A39A',   /* 5% Borders, dividers, subtle outlines */
          light: '#D3CFCA',
          border: '#D8D4CC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
      },
      borderRadius: {
        'btn': '8px',
      },
      boxShadow: {
        'card-soft': '0 8px 24px -6px rgba(46, 52, 64, 0.05), 0 2px 6px -2px rgba(46, 52, 64, 0.02)',
        'id-soft': '0 20px 40px -10px rgba(46, 52, 64, 0.08)',
      }
    },
  },
  plugins: [],
}
