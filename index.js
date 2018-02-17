/*
 * eslint-config-eiskaffee
 * git+https://github.com/brunomacedo/eslint-config-eiskaffee.git
 * License MIT © Bruno Macedo
 */
module.exports = {
	extends: [
		'./rules/index',
		'./rules/style',
		'./rules/es6',
		'./rules/best-practises',
		'./rules/react',
	].map(require.resolve),
	rules: {},
};
