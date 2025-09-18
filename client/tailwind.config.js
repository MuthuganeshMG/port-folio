/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
   keyframes: {
  drift: {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '50%': { transform: 'translate(15px, -15px)' },
  },
},
animation: {
  drift: 'drift 3s ease-in-out infinite',
},

    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".animation-delay-2000": { "animation-delay": "2s" },
          ".animation-delay-4000": { "animation-delay": "4s" },
        };
        addUtilities(newUtilities);
      },
    ],
  },
};
