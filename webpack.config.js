const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const port = process.env.PORT || 9000

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: '/node_modules',
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: port,
        open: true,
        contentBase: "./dist"
    }
}
