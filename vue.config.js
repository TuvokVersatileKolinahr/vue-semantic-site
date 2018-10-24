const webpack = require('webpack')

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                jQuery: 'jquery',
            }),
        ]
    },

    baseUrl: 'vue-semantic-site/',

}