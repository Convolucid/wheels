const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/script.js',
    plugins:
    [
        new HtmlWebpackPlugin({
            title: 'Training Wheels'
        })
    ],
    output:
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: {
            keep: /.gitkeep/
        }
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
            },

            // Babel for Javascript
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // Markdown
            {
                test: /\.md$/i,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            breaks: true
                        }
                    }
                ]
            },

            // Images (using absence of /raw/ inline query to select for svg as URL)
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                resourceQuery: { not: [/raw/] },
                type: 'asset/resource'
            },

            // SVG inline using /raw/ inline query in imports
            {
                test: /\.svg$/i,
                resourceQuery: /raw/,
                type: 'asset/source'
            },

            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};