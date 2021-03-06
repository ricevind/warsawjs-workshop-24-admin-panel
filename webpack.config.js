module.exports = {
    entry: './front-end/scripts/main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        contentBase: './front-end',
        compress: true,
        port: 9001
    }
};
