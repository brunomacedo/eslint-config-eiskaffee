module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
			modules: true,
		},
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	extends: [
		'plugin:react/recommended',
	],
};
