module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.html/,
            loader: 'raw-loader'
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
