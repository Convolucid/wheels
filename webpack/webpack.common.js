const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/script.js',
    plugins: 
    [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
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
            // HTML
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            // CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};