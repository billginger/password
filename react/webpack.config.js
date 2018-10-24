module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/../static'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', 'react']
					}
				}
			}
		]
	}
}