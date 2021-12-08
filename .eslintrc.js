module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'next/core-web-vitals'],
  rules: {
    'linebreak-style': 'off',
    'no-unreachable': 'warn',
    'max-len': ['warn', { code: 165 }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@common', './src/common'],
          ['@constants', './src/constants'],
          ['@context', './src/context'],
          ['@features', './src/features'],
          ['@helpers', './src/helpers'],
          ['@hooks', './src/hooks'],
          ['@mocks', './src/mocks'],
          ['@scripts', './src/scripts'],
          ['@services', './src/services'],
          ['@styles', './src/styles'],
          ['@templates', './src/templates'],
          ['@hoc', './src/hoc']
        ]
      }
    }
  }
};
