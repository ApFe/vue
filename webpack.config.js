//webpack配置文件
var webpack = require('webpack');
var ET=require('extract-text-webpack-plugin');
module.exports={
	entry:__dirname + '/src/app.js',
	output:{
		path:__dirname + '/prd/',
		filename:'bundle.js'
	},
	devtool:'source-map',
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test: /\.js$/,
        		loader: 'babel-loader?presets[]=es2015'
			},
			{
				test:/\.scss$/,
				loader:ET.extract('style','css!sass')
			},
			{
				test:/\.html$/,
				loader:'string'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			}
		]
	},
	vue:{
		loader:{
			js:'babel'
		}
	},
	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.min.js'
	    }
  	},
	devServer:{
		contentBase:__dirname + '/prd',
		port:80,
		host:'localhost',
		proxy:{
			'/api':{
				target:'http://localhost:8999',
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')
	]
}