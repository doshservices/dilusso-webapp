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
      "White": '#FFFFFF',
      'OtherWhite': '#F8F8F8',
      'FooterGray': '#F0F0F0',
      'Black': '#000000'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      clashGrotesk: ['ClashGrotesk']
    },
  },
};
export const plugins = []; 