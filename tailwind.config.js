/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cyan-40': '#22d3ee',
      'gray-30': '#273444',
      'gray-20': '#8492a6',
      'gray-10': '#94a3b8',
      'gray-5': "#f8fafc",
      'white-10': "#ffffffcc",
      'white-5': "#ffffff",
    },
    fontSize: {
      'title': '1.5rem',
      'subtitle': '1.2rem',
      'normal': '1rem',
      'tag': '.7rem',
    },
    extend: {
      gridTemplateColumns: {
        'fits' : 'repeat(auto-fit, minmax(240px, 280px))'
      }
    },
  },
  plugins: [],
}

