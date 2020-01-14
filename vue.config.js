const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
	assetsDir: 'static',
	chainWebpack: (config) => {
		//移除prefetch 插件
		config.plugins.delete('prefetch');
		//移除 preload 插件
		config.plugins.delete('preload');
		//压缩代码
		config.optimization.minimize(true);
		//分割代码
		config.optimization.splitChunks({
			chunks: 'all'
		});
		config.resolve.alias.set('@', resolve('src'));
	},
	productionSourceMap: false,
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
			config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
			config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
				'console.log'
			];
		}
	},
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	devServer: {
		port: 3633,
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				ws: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
};
