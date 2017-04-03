const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
            },
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
    },
};
