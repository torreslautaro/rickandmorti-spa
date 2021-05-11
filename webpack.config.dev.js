const path = require('path')
const { mainModule } = require('process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js'],
        alias: {
            '@pages' : path.resolve(__dirname, './src/pages/'),
            '@styles' : path.resolve(__dirname, './src/styles/'),
            '@routes' : path.resolve(__dirname, './src/routes/'),
            '@templates' : path.resolve(__dirname, './src/templates/'),
            '@utils' : path.resolve(__dirname, './src/utils/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader,
                'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src','styles/styles.css'),
                    to: ''
                }
            ]
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        historyApiFallback:true,
        port: 3006
    }
}