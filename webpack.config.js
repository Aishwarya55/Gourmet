const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry : './src/app.js',
    output : {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'src')
    },
    module:{
        rules: [
        {
            test:/\.js$/,
            exclude:[/node_modules/],
            loaders:['ng-annotate-loader', 'babel-loader']
        },
        { 
            test: /\.html$/, 
            loader: 'raw-loader' 
        },
        {
            test: /\.css$/,
            loaders: ['style-loader','css-loader']
        },
        {
            test:/\.(ttf|svg|woff|woff2|eot)$/,
            loaders: ['file-loader', 'url-loader']
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            loader: 'file-loader',
            query:{
                outputPath: './assets/',
                name: '[name].[ext]'
            }

            }
    ]
},
    plugins:[
        new HTMLWebpackPlugin({
            template: 'index.html',
            inject:'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
          new CopyWebpackPlugin([ { from: './src/assets', to: 'assets' } ]),
          
    ]

}

