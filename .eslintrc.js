module.exports = {
    'env': {
        'browser': true,
        'amd': true,
        'node': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'warn',
            4,
            { 'SwitchCase': 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        '@typescript-eslint/typedef': [
            'error',
            {
                arrowParameter: false,
                parameter: true,
                propertyDeclaration: true,
                memberVariableDeclaration: true,
                variableDeclarationIgnoreFunction: true
            }
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 0,
        'no-case-declarations': 'off'
    },
    'settings': {
        'react': {
            'version': '16.12.0'
        }
    }
};
