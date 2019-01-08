const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let conf = {
	entry: [
		'@babel/polyfill',
		'./src/js/index.js'
	],

	output: {
		path: path.resolve(__dirname,"./dist"),
		filename: 'assets/js/main.js'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: "babel-loader"
				}
			},
			{
		        test: /\.scss$/,
		        use: [
		        	"style-loader",
			        MiniCssExtractPlugin.loader,
			        "css-loader",
			        "postcss-loader",
			        "sass-loader"
		        ]
		    }

		]
	},
	plugins: [
		new CleanWebpackPlugin('dist', {} ),
	    new MiniCssExtractPlugin({
	      filename: "assets/css/main.css"
	    }),
	    new HtmlWebpackPlugin({
	    	template: "./src/index.html",
	    	filename: "index.html"
	    }),
	    new CopyWebpackPlugin([
	    		{
	    			from: "./src/fonts/",
	    			to: "./assets/fonts"
	    		},
	    		{
	    			from: "./src/image/",
	    			to: "./assets/image"
	    		}
	    	])
	]
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production
					? false
					: 'eval-sourcemap';
	return conf;
};