const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'js/bundle': './src/App.jsx'
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
						presets: ['env', 'react'],
						plugins: [['import', { libraryName: 'antd', style: true }]]
					}
				}
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: [ 'css-loader', 'less-loader?javascriptEnabled=1' ]
				})
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
		new ExtractTextPlugin('css/style.css'),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: '../views/index.html',
			hash: true
		})
	],
	mode: 'development'
}
