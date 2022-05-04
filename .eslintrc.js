module.exports = {
  extends: [
    'next',
    'prettier',
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
