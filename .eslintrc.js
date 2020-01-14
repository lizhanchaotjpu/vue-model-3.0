module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'standard'],
  rules: {
    quotes: ['error', 'single'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    indent: ['error', 2, { MemberExpression: 'off' }],
    'arrow-parens': 0,
    'no-loop-func': 2,
    indent: ['error', 2, { SwitchCase: 1 }]
  },
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
