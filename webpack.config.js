const path = require('path');

module.exports = {
    entry: {
        'index': path.resolve(__dirname, 'src/main/client/index.jsx'),
        'subpage/index': path.resolve(__dirname, 'src/main/client/subpage/index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/react'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src/main/resources'),
        port: 3000,
    },
}