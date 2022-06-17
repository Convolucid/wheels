const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    plugins: 
    [
        new HtmlWebpackPlugin({
            title: 'Initialization'
        })
    ],
    output: 
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    module: 
    {
        rules: 
        [
            // CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};