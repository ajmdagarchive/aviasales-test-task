const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
    entry: {
        app: './src/app.tsx',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            favicon: path.resolve(__dirname, 'public/favicon.ico')
        }),
    ],

    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.(png|jp(e?)g|svg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash].[ext]',
                        },
                    },
                ],
            },

            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },

            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },

            {
                test: /\.styl$/,
                exclude: /\.module\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader',
            },

            {
                test: /\.module\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]-[hash:base64:5]',
                            }
                        },
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            import: path.resolve(__dirname, 'src/styles/shared/*.styl'),
                        },
                    },
                ],
            },
        ],
    },

    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 2000,
    },

    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
    },
}
