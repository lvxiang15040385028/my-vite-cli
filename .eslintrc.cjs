module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "vue-eslint-parser", //
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser", //
    project: ["./tsconfig.json"], //
    tsconfigRootDir: __dirname, //
    extraFileExtensions: [".vue"], //
  },
  plugins: ["vue"],
  rules: {},
};
