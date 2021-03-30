const path = require('path');

module.exports = {
  entry: [`${__dirname}/source/main.ts`, `${__dirname}/source/main.scss`],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@components': path.resolve(__dirname, 'source/components'),
      '@sass': path.resolve(__dirname, 'source/sass'),
      '@javascript': path.resolve(__dirname, 'source/javascript'),
    },
  },
};
