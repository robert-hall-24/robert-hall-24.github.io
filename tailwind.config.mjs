/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        text: '#08020b',
        background: '#fdfafe',
        hoverprimary: '#491655',
        primary: '#9e37d5',
        secondary: '#e68a8e',
        hoveraccent: '#a32d3e',
        accent: '#dd8b5f',
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret:
          'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        wave: 'waveanimation 3.5s infinite',
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        waveanimation: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
    },
  },
  plugins: [],
}
