module.exports = {
  preset: 'react-native',
  transform: {
    '\\.(ts|tsx)$': ['ts-jest', {babelConfig: true}],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/*.test.ts?(x)'],
};
