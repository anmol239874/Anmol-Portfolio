/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chocolate: '#1A120B',
        coffee: '#3C2A21',
        gold: '#D4AF37',
        cream: '#FFF8E7',
      },
      boxShadow: {
        gold: '0 0 40px rgba(212, 175, 55, 0.25)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(212,175,55,0.3), transparent 55%)',
      },
    },
  },
  plugins: [],
};
