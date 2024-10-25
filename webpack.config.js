const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/React/index.js',
    output:{
        path: path.join(__dirname, '/src/FileCabinet/SuiteScripts/React/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Netsuite React App',
            metaDesc: 'Example of how Netsuite can render React App',
            template: './src/React/index.html',
            filename: 'index_react_app.html',
            inject: true
        }),
    ],
    devServer: {
        devMiddleware: {
            index: 'index_react_app.html',
        },
    },
}
