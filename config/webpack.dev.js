const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const NODE_ENV = process.env.WEBPACK_MODE || 'development';

module.exports = webpackMerge(commonConfig, {
	/**
	 * Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
	 *
	 * See: https://webpack.js.org/configuration/mode/
	 */
	mode: 'development',

	/**
	 * Developer tool to enhance debugging
	 *
	 * See: https://webpack.js.org/configuration/devtool/
	 */
	devtool: 'cheap-module-source-map',

	/**
	 * DevServer
	 *
	 * See: https://webpack.js.org/configuration/dev-server
	 */
	devServer: {
    contentBase: path.join(__dirname, 'dist'),
		https: true,
		port: 8080,
		disableHostCheck: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},

	/*
	 * The stats option lets you precisely control what bundle information gets displayed.
	 *
	 * See: https://webpack.js.org/configuration/stats/
	 */
	stats: {
		colors: true,
		children: false,
		hash: false,
	},

	plugins: [
		/*
		 * Plugin: ProgressPlugin.
		 * Description: The ProgressPlugin provides a way to customize
		 * how progress is reported during a compilation.
		 *
		 * See: https://webpack.js.org/plugins/progress-plugin/
		 */
		new webpack.ProgressPlugin(),

		/**
		 * Plugin: DefinePlugin
		 * Description: Define free variables.
		 * Useful for having development builds with debug logging or adding global constants.
		 *
		 * Environment helpers
		 *
		 * See: https://webpack.js.org/plugins/define-plugin/
		 */
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
		}),
	],
});
