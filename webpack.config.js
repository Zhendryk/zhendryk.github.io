const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Defines the built-in optimizations to use. See: https://webpack.js.org/configuration/mode/
    entry: './src/index.tsx', // Entry point for the application
    output: { // How and where webpack should output your bundles, assets, etc. See: https://webpack.js.org/configuration/output/
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map', // Enable sourcemaps for debugging webpack's output.
    devServer: { // Behavior configuration of webpack-dev-server. See: https://webpack.js.org/configuration/dev-server/
        port: 8080,
    },
    resolve: { // Module resolution settings. See: https://webpack.js.org/configuration/resolve/
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            Assets: path.resolve(__dirname, 'src/assets/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Themes: path.resolve(__dirname, 'src/themes')
        }
    },
    module: { // Module handling settings. See: https://webpack.js.org/configuration/module/
        rules: [
            {
                // All output '.js' files will have any sourcemaps pre-processed by 'source-map-loader'.
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                // Transpile all .jsx? files using 'babel-loader'. NOTE: .tsx? files will be compiled using the Typescript compiler and then transpiled by Babel afterwards.
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                // Load images with the following extensions with the 'file-loader'.
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'zhendryk.github.io',
            inject: 'body',
            template: 'public/index.html'
        })
    ],
    // Exclude dependencies from the output bundle. Instead, rely on the following
    // dependencies to be present end-user's application environment, which allows
    // browsers to cache those libraries between builds.
    externals: {
        'react': "React",
        'react-dom': "ReactDOM"
    }
};