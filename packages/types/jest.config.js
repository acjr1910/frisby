const packageJson = require('./package.json')

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.config.js',
  ],
}
