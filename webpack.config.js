const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV == 'development'
const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    // 这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      // 使得在所有的js环境下都能拿到该环境变量，不同环境下的vue打包的方式不同
      'process.env': isDev ? '"development"' : '"production"'
    }),
    // 生成项目入口文件
    new htmlPlugin()
  ],
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /.jsx$/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(jpg|jpeg|png|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-ll.[ext]'
          }
        }
      ]
    },

    ],

  }
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  // config.module.rules.push({
  //   test: /\.styl/,
  //   use: ['style-loader',
  //     'css-loader',
  //     {
  //       loader: 'postcss-loader',
  //       options: {
  //         sourceMap: true
  //       }
  //     },
  //     'stylus-loader']
  // })
  config.devServer = {
    port: 8000,
    // 这个host设置的好处：可以ip访问
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    hot: true,
    // open: true,
    // historyFallback:{

    // },
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  // 生产上类库文件变化小希望能打包成vendor，业务代码变化大，和类库分开打包。
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  // css在配置webpack4报错：Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead时，应该是插extract-text-webpack-plugin的版本问题
  // config.module.rules.push({
  //   test: /\.styl/,
  //   use: extractTextPlugin.extract({
  //     fallback: 'style-loader',
  //     use: [
  //       'css-loader',
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       },
  //       'stylus-loader']
  //   })
  // }) 
  // config.plugins.push(new extractTextPlugin('styles.[contentHash:8].css'))
  // Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
  // config.plugins.push(
  //   new webpack.optimize.splitChunks({
  //     name: 'vendor',
  //   })
  // )
}

config.module.rules.push({
  test: /\.styl/,
  use: ['style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    'stylus-loader']
})

module.exports = config