const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const port = process.env.PORT || 9000

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    resolve:{
        alias:{
            "react-dom": "@hot-loader/react-dom",
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.(js)$/,
                exclude: '/node_modules',
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 9000,
        historyApiFallback: true,
        open: true
    }
}
