// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        diagonalScroll: 'diagonalScroll 60s linear infinite',
      },
      keyframes: {
        diagonalScroll: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50%, -50%)' },
        },
      },
    },
  },
  plugins: [],
}
