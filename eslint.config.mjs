import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    extends: [
      "next/core-web-vitals",
      "prettier",
      "next/typescript"
    ],
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-this-alias": "off",
      "no-console": [
        "error",
        {
          "allow": [
            "warn",
            "error"
          ]
        }
      ]
    }
  },
];

export default eslintConfig;