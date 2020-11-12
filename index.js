module.exports = {
    extends: [
      './rules/possible-errors',
    ].map(require.resolve),
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {},
  };