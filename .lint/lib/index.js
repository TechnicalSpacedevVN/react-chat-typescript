module.exports = {
	rules: {
		react: require('./lib/rules/react'),
	},
	configs: {
		recommended: {
			rules: {
				'my-eslint-plugin/react': 'error',
			},
		},
	},
}
