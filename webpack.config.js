const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|pdf)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: './index.html'
        }),
    ],
    devServer: {
        static: './public',
        port: 3000,
        open: true,
        hot: true
    }
};