const packageJson = require('./package.json')

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
}
