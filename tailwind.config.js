/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Anton"'],
    },
    extend: {
      colors: {
        "main-color": "#0F172A",
      },
    },
  },
  plugins: [],
};
