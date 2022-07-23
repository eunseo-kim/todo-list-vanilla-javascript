module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-new': 0,
    'no-unused-vars': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 0,
  },
};
