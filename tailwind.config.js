/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mybrown': '#c48f61',
        'myblack':'#1c2124',
        'mygreen': '#58b958',
        'myred':'#f03d5b'
      }
    },
  },
  plugins: [require("daisyui")],
}

