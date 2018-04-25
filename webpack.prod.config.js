const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// https://webpack.js.org/guides/production/
// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: {
        app: ['./src/index.js'],
        vendor: ['babel-polyfill', 'pixi', 'p2', 'phaser', 'webfontloader']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'raw-loader'
                }
            },
            {
                test: /\.(xml|fnt)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src/assets'),
                use: {
                    loader: 'xml-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src/assets'),
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /pixi\.js/,
                use: ['expose-loader?PIXI']
            },
            {
                test: /phaser-split\.js$/,
                use: ['expose-loader?Phaser']
            },
            {
                test: /p2\.js/,
                use: ['expose-loader?p2']
            }
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    },
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['vendor', 'app']
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};