module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.ts'],
      rules: {
        'prefer-const': 'off',
      },
    },
    {
      files: ['test/**/*.ts`', 'test/**/*.tsx'],
      rules: {
        'react/jsx-key': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-inner-declarations': 0,
    'no-useless-escape': 1,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-namespace': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/prop-types': 0,
  },
  ignorePatterns: ['dist/', 'node_modules', 'vendor'],
}
