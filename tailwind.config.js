/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'xxl': '1350px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'ssm': '420px',
      'lsm': '320px'
    },
    colors: {
      'Primary': '#096BD8',
      'Secondary': '#0A8E26',
      "White": '#F8F8F8',
      'OtherWhite': '#F2F5F2',
      'OtherRed': '#FB6612',
      'OtherBlack': '#010101'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      clashGrotesk: ['ClashGrotesk']
    },
  },
};
export const plugins = []; 