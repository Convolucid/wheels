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
        // Clean option deletes /dist folder contents with every build, except for .gitkeep file
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

            // CSS.  The order of the loaders is important.
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },

            // Babel for Javascript.  node_modules folder is excluded from transpiling.
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

            // Markdown.  I believe both html and markdown loader are required because html can be used in Markdown (and is on this site).
            {
                test: /\.md$/i,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            // Setting breaks to 'true' adds a line break on every carriage return - easier to create content
                            breaks: true
                        }
                    }
                ]
            },

            // Images
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                // The absence of ?raw as a query during import will allow svg files to be processed normally, rather than using them as html.
                resourceQuery: { not: [/raw/] },
                type: 'asset/resource'
            },

            // SVG usage as inline html using the ?raw resourceQuery
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