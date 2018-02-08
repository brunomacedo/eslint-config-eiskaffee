module.exports = {
	extends: [
		'./rules/index',
		'./rules/style',
		'./rules/best-practises',
		'./rules/es6',
		'./rules/react',
	].map(require.resolve),
	rules: {},
};
