/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      colors: {
        'primaryBlue': '#0a457d',
        'primaryOrange': '#f26949',
        'primaryGreen': '#01a896',
      },
      gridTemplateColumns: {
        'autoCol': 'repeat(auto-fit, minmax(min(150px, 100%), 1fr));',
        'autoColStaff': 'repeat(auto-fit, minmax(min(250px, 100%), 1fr));',
        'autoColServices': 'repeat(auto-fit, minmax(min(350px, 100%), 1fr));',
      },
      boxShadow: {
        'dropDown': '0px 8px 16px 0px rgba(0, 0, 0, 0.2);',
      },
      animation: {
        'spin-once': 'spinOnce 400ms linear',
        'fadeIn' : 'fade 200ms linear'
      },
      keyframes: {
        spinOnce: {
          '0%': { transform: 'rotate(odeg)' },
          '100%': { transform: 'rotate(180deg)' }
        },
        fade: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}

