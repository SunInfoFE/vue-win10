// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // Common
    // 使用类型安全的 === 和 !==
    'eqeqeq': [1, 'always'],
    'no-unused-vars': [1],

    // 风格约束
    // 缩进为2个空格
    'indent': [1, 2, { 'SwitchCase': 1 }],
    // 键名和冒号之前不能有空格，冒号和键值间至少一个空格
    'key-spacing': [1, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 不允许行末出现空格
    'no-trailing-spaces': [1],
    // 使用单引号
    'quotes': [1, 'single'],
    // 句末需要分号
    'semi': [1, 'always'],
    // // 方法括号前要有空格
    'space-before-function-paren': [1, 'always'],

    // ES6
    // 箭头函数的参数必须使用圆括号
    'arrow-parens': [1, 'always'],
    // 箭头前后必须有空格
    'arrow-spacing': [1],
    // 禁止修改const变量
    'no-const-assign': [2],
    // 禁止使用var
    'no-var': [2],
    'no-console': 0,
    'max-len': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'prefer-template': 0,
    'no-param-reassign': 1,
    'no-lonely-if': 1,
    'no-unused-expressions': 1,
    'no-underscore-dangle': 0,
    "consistent-return": 0,//return 后面是否允许省略
    "no-use-before-define": 2,//未定义前不能使用
    'quote-props': 0,
    'no-plusplus': 0,
    "comma-dangle": [2, "never"], //对象字面量项尾不能有逗号
    "semi": [2, "always"],//语句强制分号结尾
    'space-before-function-paren': 0,
    'no-shadow': 0,
    "import/extensions": [2, { "js": "never", "vue": "never" }], // 引入不需要加js后缀和vue后缀
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
