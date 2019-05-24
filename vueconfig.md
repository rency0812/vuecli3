# vue config plan
```
/// 公共代码抽离
config = {
///返回一个对象
  configureWebpack: config => {
    if (isProduction) {
        // 用cdn方式引入
        config.externals = {
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
            'axios': 'axios'
        }
        // 为生产环境修改配置...
        config.plugins.push(
            //生产环境自动删除console
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true,
            })
        );
    } else {
        // 为开发环境修改配置...
    }
   },
   // 返回一个函数
  configureWebpack: () => ({
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor:{
            chunks:"all",
                test: /node_modules/,
                name:"vendor",
                minChunks: 1,
                maxInitialRequests: 5,
                minSize: 0,
                priority:100,
          },
          common: {
            chunks:"all",
            test:/[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority:60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c)ss$/,
            chunks: 'all',
            enforce: true,
          },
          runtimeChunk: {
            name: 'manifest'
          }
        }
      }
    }
  }),
```
# npm install image-webpack-loader --save-dev 图片压缩
```
// 压缩图片
  chainWebpack: config => {
    config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          bypassOnDebug: true
        })
        .end()
  },
```
#css 分离
```
 css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
```
}
// 安装
 npm install uglifyjs-webpack-plugin
 
 # // 在vue.config.js文件中添加配置
 ```
 /*
 configureWebpack: config => {
   if (process.env.NODE_ENV === 'production') {
     // 为生产环境修改配置...
     config.plugins.push(
       //生产环境自动删除console
       new UglifyJsPlugin({
         uglifyOptions: {
           compress: {
             warnings: false,
             drop_debugger: true,
             drop_console: true,
           },
         },
         sourceMap: false,
         parallel: true,
       })
     );
   }
 },
 */
 ```

