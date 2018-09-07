module.exports={
    baseUrl: process.env.NODE_ENV === 'production' ? '/':'/',
    lintOnSave: true,
    css: {
        loaderOptions: {
            sass: {}
        }
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        https: false,
        open: true
    },
    chainWebpack:config => {
        config.module.rule('vue').use('eslint').
        loader('eslint-loader').options({
            fix: true,
            formatter: require('eslint-friendly-formatter')
        })
        config.module.rule('js').use('eslint').
        loader('eslint-loader').options({
            fix: true,
            formatter: require('eslint-friendly-formatter')
        })


    }
}