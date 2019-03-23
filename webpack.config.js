const path = require("path");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
	context: __dirname,

	entry: {
		main: './src/index',
	},
	devtool: "source-map",
	output: {
		path: path.resolve('./static/bundles/'),
		filename: "[name].js",
	},
	plugins: [
		new LiveReloadPlugin({}),
		new Visualizer({
			filename:'bundle-statistics.html'
		})
	],
	module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"], },
			{ test: /\.svg$/, loaders: ["svg-inline"] }
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i
			})
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
}
