module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: { mockResponse: true },
  plugins: ['prettier', 'jest'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
