const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      width: {
        navBar: '210px'
      },
      height: {
        topBar: '60px',
        
      },
      colors: {
        primary: '#0f7173',
        accent: "#c6d8d3",
        secondary: '#de3b57'
        
      }
    },
  },
  plugins: [],
};
