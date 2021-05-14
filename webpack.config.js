const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const data = require('./data.json')

module.exports = {
    output: {
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.scss$/,
                loader: 'scss-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.pug',
                templateParameters: data
            }
        )
    ]
}