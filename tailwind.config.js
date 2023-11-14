/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js, jsx, ts, tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gap: {
        '1': '1px',
      },
      border: {
        '1': '1px',
      },
      gridTemplateRows: {
        // Simple 10 row grid
        '10': 'repeat(10, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}

