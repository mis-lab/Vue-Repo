const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
const PUBLIC_PATH = process.env.PUBLIC_PATH;
module.exports = {
    lintOnSave: true,
    publicPath: PUBLIC_PATH,
    css: {
        loaderOptions: {
            less: { javascriptEnabled: true }
        }
    },
    chainWebpack: (config) => {
        config.devtool = 'cheap-module-source-map';
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('consts', resolve('src/consts'))
            .set('views', resolve('src/views'))
            .set('store', resolve('src/store'))
            .set('utils', resolve('src/utils'))
            .set('service', resolve('src/service'))
            .set('container', resolve('src/container'))
            .set('config', resolve('src/config'));
        if (process.env.npm_config_report) {
            config.plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
    }
};
