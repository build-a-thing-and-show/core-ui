module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        // Add custom rules here
        // Example:
        // "indent": ["error", 2], // Use 2 spaces for indentation
        'eol-last': ['error', 'always'], // Enforces a newline at the end of every file
    },
};
