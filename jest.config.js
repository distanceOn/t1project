const preset = 'ts-jest';
module.exports = {
  preset,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.scss$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<./src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
