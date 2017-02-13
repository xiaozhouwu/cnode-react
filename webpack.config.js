var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack=require('webpack');
module.exports = {
	entry: {
		main : './src/root.js'
	},
	output: {
		path: path.join(__dirname,'disk'),
		filename: '[name].bundle.js',
		publicPath: '/disk/',
		chunkFilename: '[name].[chunkhash:5].chunk.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				},
				include: __dirname,
				exclude: /node_modules/
			},{
				test: /\.css$/,
				loaders: ['style','css']
			},{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]!less-loader')
			},{
				test: /\.(woff|svg|eot|ttf)$/, 
				loader: 'url-loader?limit=50000&name=fonts/[name].[hash:5].[ext]'
			},{
				test: /\.(gif|jpg|png)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[hash:5].[ext]'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js'),//智能提取公共部分，以提供我们浏览器的缓存复用，我们需要手动在html上去加载common.js，并且是必须要最先加载。CommonsChunkPlugin是在有多个entry时使用的，即在有多个入口文件时，这些入口文件可能会有一些共同的代码，我们便可以将这些共同的代码抽取出来成独立的文件。
		new ExtractTextPlugin("[name].css")
	],
	resolve: {
        extensions: ['', '.js', '.jsx']
    }
}