/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // Prevents unwanted styling issues
  },
  future: {
    hoverOnlyWhenSupported: true, // Ensures smooth hover effects
  },
  plugins: [],
};
