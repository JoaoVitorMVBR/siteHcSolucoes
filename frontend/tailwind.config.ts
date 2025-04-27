import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Se estiver usando o /app (Next 13+)
  ],
  theme: {
    extend: {
      // colors: {
      //   primaryblue: 'var(--primaryblue)', // Azul escuro (#160f79)
      //   background: 'var(--background)', // Fundo (#ffffff claro, #0a0a0a escuro)
      //   foreground: 'var(--foreground)', // Texto (#171717 claro, #eded  escuro)
      //   accent: '#cc936b', // Cor de destaque para links e hovers
      //   'mobile-menu': '#641311', // Fundo do menu mobile
      // },
      fontFamily: {
        'roboto-logo': ['roboto-logo', 'sans-serif'], // Fonte para logo
        'roboto-nav': ['roboto-nav-options', 'sans-serif'], // Fonte para menu
        'roboto-standard': ['roboto-standard', 'sans-serif'], // Fonte padrão
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out', // Animação do menu mobile
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config;
