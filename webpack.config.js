const webpack = require('webpack')
// Webpack uses this to work with directories
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// This is the main configuration object.
// Here you can write different options and tell Webpack what to do
module.exports = {
	// Path to your entry.point. Form this Webpack will begin his work
	entry: './assets/js/index.js',

	// Path and filename of your results bundle.
	// Webpack will bundle all Javascript into this file
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'coming-soon.js'
	},

	//Loaders apply certain transformation to you code
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				// Aplly the rule for Sass Scss or css files
				test: /\.(sa|sc|c)ss$/,

				// Set the loader to transform files
				// Loader are applying from ringht to left
				// The first loader will be applied after others
				use: [
					{
						// After all css loader we use the plugin to do his work
						// It get all transformed css and extracts into  separate single file bundle
						loader: MiniCssExtractPlugin.loader
					},
					{
						// This loader resolves url() and imports inside css
						loader: 'css-loader'
					},
					{
						// Then we apply postCSS fixes like autoprifixer and minifying
						loader: 'postcss-loader'
					},
					{
						// First we transform sass to starndard css
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass')
						}
					}
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'coming-soon.css'
		})
	],

	//Default mode for Webpack is production
	// Depending on the mode webpack will apply different things
	// On the final bundle.
	mode: 'development'
}
