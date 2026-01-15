// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

// 1. Importe os plugins
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignorar pastas globais (correção para 'globalIgnores')
  {
    // Apenas defina o array de strings diretamente
    ignores: ['dist', 'node_modules'], // Adicione node_modules também, é boa prática
  },

  // Configuração principal para JS/JSX
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      // 'plugin:react/recommended' e outros já estão sendo carregados através da importação dos plugins
      // e o ESLint Flat Config prefere que você os configure diretamente via 'plugins' e 'rules'
      // ou use a configuração fornecida pelos próprios plugins se disponível como um export.
      // Para simplicidade e compatibilidade com o que você já tinha, vamos ajustar.
      // A forma mais robusta seria importar as configs diretamente do plugin se ele as exportar.
      // Por enquanto, vamos manter os 'extends' e garantir que os 'plugins' estejam corretos.
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser, // Espalha as variáveis globais do navegador
        // Adicione outras globais se necessário, ex: `process: 'readonly'`
      },
    },
    plugins: {
      // 2. Referencie os plugins importados aqui
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // As regras do 'extends' ainda funcionam, mas se houver conflito ou precisar de customização,
      // você pode sobrescrever aqui.
      ...react.configs.recommended.rules, // Adiciona as regras recomendadas do plugin react
      ...reactHooks.configs.recommended.rules, // Adiciona as regras recomendadas do plugin react-hooks
      ...reactRefresh.configs.recommended.rules, // Adiciona as regras recomendadas do plugin react-refresh

      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }], // Mudei para 'warn' para ser menos intrusivo
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];