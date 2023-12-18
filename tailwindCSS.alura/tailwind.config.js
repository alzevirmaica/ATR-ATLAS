/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svg, png}"],
  theme: {
    extend: {
      colors: {
        primary: '#f2dae7',
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0',
        },
      },
      fontFamily: {
        titulo: ['Vast Shadow', 'cursive'],
        inter: ['Inter', 'sans-serif']
      },
      keyframes: {
        sino_kf: {
          '0%, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        }
      },
      animation: {
        sino: 'sino_kf 0.31s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

