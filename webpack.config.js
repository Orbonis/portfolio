const path = require("path");
const { compilerOptions } = require("./tsconfig.json");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const data = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash].js',
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, compilerOptions.baseUrl),
        ],
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                loader: require.resolve("file-loader"),
                options: {
                    name: "static/media/[name].[hash:8].[ext]",
                },
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index-template.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "games", to: "games" },
                { from: "media", to: "media" },
                { from: "src/favicon.ico", to: "favicon.ico" }
            ]
        })
    ]
};

module.exports = data;