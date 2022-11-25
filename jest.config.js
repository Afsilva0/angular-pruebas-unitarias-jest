module.exports = {
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1"
  },
  preset: 'jest-preset-angular',
  "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  coverageDirectory: 'coverage/pruebas-unitarias-jest'
};

