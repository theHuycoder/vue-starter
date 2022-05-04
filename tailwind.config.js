const colors = require('./src/styles/colors');
const fontFamily = require('./src/styles/fonts');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {
      fontFamily,
    },
  },
  plugins: [],
};
