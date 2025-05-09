/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': ['@vue/vue3-jest', {
      cssTransform: true
    }],
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }],
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^ionicons/icons$': '<rootDir>/tests/__mocks__/iconsMock.js'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup.ts'
  ],
  moduleFileExtensions: ['vue', 'js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
}
