/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
        montserrat: ["Montserrat"],
        poppins: ["Poppins"]
      },
      boxShadow: {
        'custom-shadow': '-16px -16px 36px 0 rgba(0, 0, 0, 0.2)',
        'custom-shadow-1': '16px 16px 36px 0 rgba(0, 0, 0, 0.2)',
        'custom-shadow-2': '0 6px 16px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('daisyui')],
}
