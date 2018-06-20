module.exports = {
  extends: "airbnb-base",
  rules: {
    "comma-dangle": 0,
    "no-unused-vars": [
      0,
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
