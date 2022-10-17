// @ts-check
const { defineConfig } = require('eslint-define-config');
const { readGitignoreFiles } = require('eslint-gitignore');

module.exports = defineConfig({
  "extends": "./node_modules/gts/",
  ignorePatterns: [
    ...readGitignoreFiles(),
    '.eslintrc.js', // Skip self linting
  ],
});
