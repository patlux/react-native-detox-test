module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.e2e.{js,ts,tsx}', 'e2e/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      rules: {
        'react-native/no-inline-styles': 0,
      },
    },
  ],
};
