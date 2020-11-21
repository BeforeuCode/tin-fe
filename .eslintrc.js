module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 0,
    quotes: 0,
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  },
};
