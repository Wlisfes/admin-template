const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    chainWebpack: (config) => {
        //移除prefetch 插件
        config.plugins.delete("prefetch");
        //移除 preload 插件
        config.plugins.delete('preload');
        //压缩代码
        config.optimization.minimize(true);
        //分割代码
        config.optimization.splitChunks({
            chunks: 'all'
        })
        config.resolve.alias
            .set('@', resolve('src'))
    },
    productionSourceMap: false,
    //
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        port: 8800,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:9800',
        //         ws: false,
        //         changeOrigin: true
        //     }
        // }
    }
}