module.exports = {
  root: true,
  extends: ['@react-native', '@feature-sliced'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
