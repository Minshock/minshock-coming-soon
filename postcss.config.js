// it is handy to not have those transformation while we are developing
if (process.env.NODE_ENV === 'production') {
	module.exports = {
		plugins: [require('autoprefixer'), require('cssnano')]
	}
}
