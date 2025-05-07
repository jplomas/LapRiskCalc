module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFiles: ['<rootDir>/tests/unit/setup.ts'],
  testMatch: [
    '<rootDir>/tests/unit/**/*.spec.[jt]s?(x)',
    '<rootDir>/tests/unit/**/__tests__/*.[jt]s?(x)'
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ]
}
