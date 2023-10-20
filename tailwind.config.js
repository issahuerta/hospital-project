/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pymo': ['Pymo Font'],
        'pymoo': [ ' Pymo Font 2 ' ]
      }
    },
  },
  plugins: [require("daisyui")],
}

