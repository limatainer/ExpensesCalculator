module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        micolor: {
          500: '#549127',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
