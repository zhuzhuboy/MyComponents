const path = require('path');

console.log(path.resolve(__dirname, 'src/components'));
module.exports = {
  // 配置别名
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
        // views: path.resolve(__dirname, 'src/views'),
        // common: path.resolve(__dirname, 'src/common'),
        // network: path.resolve(__dirname, 'src/network'),
        // assets: path.resolve(__dirname, 'src/assets'),
      },
    },
  },

};
