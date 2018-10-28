const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'js/bundle': './src/index.jsx'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/../static',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: '../views/index.html',
			hash: true
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: '../views/login.html',
			hash: true
		})
	]
}
