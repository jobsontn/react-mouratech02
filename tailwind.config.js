/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amarelo: '#ffbf31',
        amareloEscuro: '#efa903',
        azulClaro: '#006ec7',
        azul: '#0033ab',
        azulEscuro: '#00247d',
        preto: '#101010',
        branco: '#fdfdfd',
      },
    },
  },
  plugins: [],
};
