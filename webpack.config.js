const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const packageJson = require('./package.json');

console.log('WEBPACK_ENV: ', process.env.WEBPACK_ENV); // eslint-disable-line no-console

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './[name].js',
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            title: packageJson.title,
            description: packageJson.description,
            favicon: 'assets/favicon.png',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    mode: process.env.WEBPACK_ENV,
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.json', '.js', '.jsx', '.png'],
        alias: {
            assets: path.resolve(__dirname, 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|mp4|eot|woff|woff2)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
