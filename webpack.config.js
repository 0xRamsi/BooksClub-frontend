const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: './src',
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	devServer: {
		host: '::',
		port: 8080,
		historyApiFallback: {
			index: '',
		},
	},
}
