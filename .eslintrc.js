module.exports = {
  root: true,
  extends: ['@fgs/eslint-config'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  }
}