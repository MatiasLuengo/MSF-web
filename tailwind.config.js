/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dropDown': '0px 8px 16px 0px rgba(0, 0, 0, 0.2);',
      },
      animation: {
        'spin-once': 'spinOnce 400ms linear'
      },
      keyframes: {
        spinOnce: {
              '0%': { transform: 'rotate(odeg)' },
              '100%': { transform: 'rotate(360deg)' }
          }
      }
    },
  },
  plugins: [],
}

