const path = require('path');
const resolve = function (dir) {
    return path.join(__dirname, dir);
};
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true, // 是否开启eslint保存检测
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    chainWebpack: config => {
        config.resolve.alias
            .set('@r', resolve('src'))
            .set('@v', resolve('src/views'))
            .set('@c', resolve('src/components'))
            .set('@u', resolve('src/utils'))
            .set('@s', resolve('src/service')) /* 别名配置 */
            .set('@assets', resolve('src/assets')) /* 别名配置 */
            .set('@stylus', resolve('src/assets/stylus')); /* 别名配置 */
        config.optimization.runtimeChunk('single');
    },
    devServer: {
        /* 本地ip地址 */
        // host: '10.254.58.201',
        port: '8088',
        hot: true,
        /* 自动打开浏览器 */
        open: false,
        overlay: {
            warning: false,
            error: true
        },
        /* 跨域代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: '10.254.58.201:8088', //
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
