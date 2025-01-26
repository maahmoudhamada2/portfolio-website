const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    mode: 'production',
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        open: true,
        hot: true,
        port: 4000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)/i,
                type: 'asset/resource'
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../dist', 'index.html'),
        favicon: path.resolve(__dirname, '../dist', 'favicon.ico')
    }),
    new ESLintPlugin({
        extensions: ['js', 'jsx'],

    })]
}