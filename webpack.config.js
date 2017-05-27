const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            },
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                },
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '/css/bundle.css',
            allChunks: true,
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
};
