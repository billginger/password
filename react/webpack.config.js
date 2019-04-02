const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'js/bundle': './src/App.jsx'
	},
	output: {
		filename: '[name].js?[contenthash]',
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
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [['import', { libraryName: 'antd', style: true }]]
					}
				}
			},
			{
				test: /\.less$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader?javascriptEnabled=1' ]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css?[contenthash]'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: '../views/index.html'
		})
	]
};
