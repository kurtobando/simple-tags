const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "source/script/index.js"),
    output: {
        filename: "simple-tags.min.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // The css-loader interprets @import and url() like import/require() and will resolve them.
                    "css-loader",
                    // Loads a Sass/SCSS file and compiles it to CSS.
                    "sass-loader",
                    // Process CSS with PostCSS.
                    "postcss-loader",
                ],
            },
        ],
    },
    plugins: [
        // This plugin extracts CSS into separate files.
        // It creates a CSS file per JS file which contains CSS.
        // It supports On-Demand-Loading of CSS and SourceMaps.
        new MiniCssExtractPlugin({
            filename: "simple-tags.min.css",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
    },
}
