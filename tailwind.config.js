/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
        "font-body": ['"Open Sans"', 'sans-serif'],
        "font-heading": ['"Poppins"', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        'custom-pink': 'hsl(322, 100%, 66%)',
        'custom-very-pale-cyan': 'hsl(193, 100%, 96%)',
        'custom-very-dark-cyan': 'hsl(192, 100%, 9%)',
        'custom-grayish-blue': 'hsl(208, 11%, 55%)',
      },
      backgroundImage: {
        "hero-mobile": "url('../images/bg-hero-mobile.svg')",
        "hero-desktop": "url('../images/bg-hero-desktop.svg')"
      },
      boxShadow: {
        '3xl': '1px 1px 8px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}