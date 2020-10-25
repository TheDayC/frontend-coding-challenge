module.exports = {
    "env": {
        "browser": true,
        'amd': true,
        'node': true,
        'es6': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'indent': [
            'warn',
            4
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
        '@typescript-eslint/explicit-module-boundary-types': ['error', {
            'allowDirectConstAssertionInArrowFunctions': true
        }],
        'react/prop-types': 0
    },
    'settings': {
        'react': {
            'version': '16.12.0'
        }
    }
};
