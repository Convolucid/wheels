const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/script.js',
    plugins: 
    [
        new HtmlWebpackPlugin({
            title: 'Training Wheels',
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
            // Babel
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // HTML
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            // CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // Images
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource'
            },
            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
};