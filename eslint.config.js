import { ESLint } from 'eslint';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'] // Add other folders to ignore
  },
  {
    files: ['src/**/*.js'], // Adjust according to your project structure
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-console': 'warn' // Example rule
      // Add other rules or extend with configs
    }
  }
];
