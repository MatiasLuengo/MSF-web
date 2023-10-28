/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* borderRadius: {
      '4xl': '36px',
    }, */
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'rubik': ['Rubik', 'ui-sans-serif', 'system-ui'],
      'noto': ['Noto Sans JP', 'ui-sans-serif', 'system-ui'],
    },
    screens: {
      'xs': '550px',
      'sm': '640px',
      'lg': '768px',
      'xlg': '990px',
      'xl': '1024px',
    },
    extend: {
      gridTemplateColumns: {
        'autoCol': 'repeat(auto-fit, minmax(min(150px, 100%), 1fr));',
      },
      boxShadow: {
        'dropDown': '0px 8px 16px 0px rgba(0, 0, 0, 0.2);',
      },
      animation: {
        'spin-once': 'spinOnce 400ms linear'
      },
      keyframes: {
        spinOnce: {
              '0%': { transform: 'rotate(odeg)' },
              '100%': { transform: 'rotate(180deg)' }
          }
      }
    },
  },
  plugins: [],
}

