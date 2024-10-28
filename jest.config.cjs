module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/services/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '__tests__'],
  coverageDirectory: '<rootDir>/coverage',
  detectOpenHandles: true,
  testMatch: ['<rootDir>/**/*.(test|spec).{js,jsx,ts,tsx}']
};
