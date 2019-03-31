let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /\node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [   
        new HtmlWebpackPlugin({          
            template: 'src/index.html',        
            filename: 'index.html'
        })
    ]
}