var path = require("path");
var BundleTracker = require('webpack-bundle-tracker');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
		new BundleTracker({ filename: './webpack-stats.json' }),
		new LiveReloadPlugin({})
	],

	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.scss$/, loaders: ["style", "css", "sass"], },
			{ test: /\.svg$/, loaders: ["svg-inline"] }
		]
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, "./front-end/sass")]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components'],
		extensions: ['', '.js', '.jsx']
	},
}
