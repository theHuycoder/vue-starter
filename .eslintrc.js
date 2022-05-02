module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
