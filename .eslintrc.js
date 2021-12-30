const moduleDependencies = require("./module.dependencies.json");

module.exports = {
  root: true,
  extends: ["airbnb", "prettier", "plugin:import/react", "plugin:jest/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-native",
    "react",
    "prettier",
    "react-hooks",
    "class-prefer-methods",
    "simple-import-sort",
    "boundaries",
    "jest",
  ],
  settings: {
    "boundaries/include": ["src/*", "modules/*"],
    "boundaries/elements": moduleDependencies.modules,
    "import/resolver": {
      "babel-module": {},
      "node": { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
  },
  env: {
    "jest/globals": true,
    "react-native/react-native": true,
  },
  rules: {
    "react/jsx-key": "error",
    "react/jsx-no-bind": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/no-shadow": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".ts"] }],

    // Turn off some rules from used presets
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "import/extensions": "off",
    "import/order": "off",
    "no-shadow": "off",
    "camelcase": "off",

    // typescript-eslint workarounds
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",

    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: moduleDependencies.dependencies,
      },
    ],

    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Ensure imports from "react(-native)" are at the top
          ["^react", "react-native", "^(?!(react)(react-native))"],
          // Base imports
          ["^(~)"],
          // Module imports
          ["^(@modules)"],
          // Relative imports
          ["^[.]"],
        ],
      },
    ],
  },
};
