/**
 * @Description : config-overrides.js
 * react-app-rewired：https://github.com/timarney/react-app-rewired/blob/master/README_zh.md
 * customize-cra：https://github.com/arackaf/customize-cra/blob/master/api.md
 */

const {
  override,
  addWebpackAlias, // 别名
  fixBabelImports, // antd-mobile
  addLessLoader, // less
  // addDecoratorsLegacy, // 装饰器
  // addPostcssPlugins, // rem
} = require('customize-cra');

const path = require('path');

// 处理路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  webpack: override(
    // 别名设置
    addWebpackAlias({
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      '@component': resolve('src/component'),
      '@locales': resolve('src/locales'),
      '@pages': resolve('src/pages'),
      '@redux': resolve('src/redux'),
      '@router': resolve('src/router'),
    }),

    // antd-mobile
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      // libraryDirectory: 'es',
      style: 'css',
    }),

    // less
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        // modifyVars: { '@primary-color': 'green' },
      },
    })

    // 开启装饰器
    // addDecoratorsLegacy(),

    // rem
    // addPostcssPlugins([require("postcss-px2rem-exclude")({
    //   remUnit: 16,
    //   propList: ['*'],
    //   exclude: ''
    // })]),
  ),

  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.proxy = {
        '/v2ex/': {
          target: 'https://www.v2ex.com',
          changeOrigin: true,
          pathRewrite: { '^/v2ex': '/' },
        },
      };
      return config;
    };
  },
  paths: function (paths, env) {
    // 指向根目录的 test.html
    // paths.appHtml = path.resolve(__dirname, "test.html");
    return paths;
  },
};
