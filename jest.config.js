module.exports = {
  verbose: true,
  preset: 'ts-jest',
  rootDir: 'src',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'rxjs/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
