module.exports = {
  plugins: [
    'cypress'
  ],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
  }
}
