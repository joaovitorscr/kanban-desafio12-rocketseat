/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7c3aed',
      },
      boxShadow: {
        cardShadow: '0 4px 16px 0px #eae2fd',
      },
    },
  },
  plugins: [],
}
