const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'all.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },    
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/static' }
            ]
        })
    ],
};