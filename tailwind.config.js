/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { height: 0 },
          '100%': { height: '224px' },
        }
      },
      animation: {
        'wiggle': 'wiggle 0.5s ease-in-out'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
