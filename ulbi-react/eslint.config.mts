import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, i18next },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      indent: [2, 2],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'i18next/no-literal-string': "error"
    }
  },
]);
