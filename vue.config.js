var Timestamp = new Date().valueOf()
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  productionSourceMap: false,
  assetsDir: "static",
  publicPath: '/VUECLI/',
  outputDir: "VUECLI", 
  lintOnSave:false, 
    // configureWebpack: { //webpack的相关配置在这里
    //     plugins: [
    //         new FileManagerPlugin({ //初始化 filemanager-webpack-plugin 插件实例
    //             onEnd: {
    //                 delete: [ //首先需要删除项目根目录下的dist.zip
    //                     './Channelmana.zip',
    //                 ],
    //                 archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
    //                     {
    //                         source: './Channelmana',
    //                         destination: './Channelmana.zip'
    //                     },
    //                 ]
    //             }
    //         })
    //     ]
    // }
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
            chunkFilename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `static/css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`,
            })
        ],
        performance: {
          hints:'warning',
          //入口起点的最大体积 整数类型（以字节为单位）
          maxEntrypointSize: 50000000,
          //生成文件的最大体积 整数类型（以字节为单位 300k）
          maxAssetSize: 30000000,
          //只给出 js 文件的性能提示
          assetFilter: function(assetFilename) {
              return assetFilename.endsWith('.js');
          }
      }
    },
    // 修改打包后img文件名
    // chainWebpack: config => {
    //     config.module
    //         .rule('images')
    //         .use('url-loader')
    //         .tap(options => {
    //             return {
    //                 limit: 4096,
    //                 fallback: {
    //                     loader: 'file-loader',
    //                     options: {
    //                         name: `static/img/[name].${process.env.VUE_APP_Version}.[ext]`
    //                     }
    //                 }
    //             };
    //         })
    //     }
}
