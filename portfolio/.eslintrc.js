module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      // Customize ESLint rules for your project
    },
  };