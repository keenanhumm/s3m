module.exports = {
  extends: ["airbnb-base"],
  rules: {
    "comma-dangle": 0,
    "no-unused-vars": [
      0,
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ],
    "import/prefer-default-export":0,
    "class-methods-use-this":0
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
