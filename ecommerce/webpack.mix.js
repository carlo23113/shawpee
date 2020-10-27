const mix = require("laravel-mix");

module.exports = {
    module: {
        rules: [
            {
                test: /\.s(c|a)ss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require("sass"),
                            indentedSyntax: true // optional
                        },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                indentedSyntax: true // optional
                            }
                        }
                    }
                ]
            }
        ]
    }
};

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
