// 人物属性
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // webpack入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename:"images/[contenthash][ext]"/*指定图片资源的存放位置，[contenthash][ext]代表自动生成文件名*/
  },
  mode: 'production' ,// 设置mode
  /*妈的当时把p写成大写,找了半天bug*/
  plugins:[new HtmlWebpackPlugin({
    template:"./public/index.html"
  })],//每次打包自动在dist添加选中的html文件

  module:{
    rules:[{
      test:/\.css$/i,
      use:["style-loader","css-loader"]
    },
    { // 图片文件的配置(仅适用于webpack5版本)
      test: /\.(gif|png|jpg|jpeg)/,
      type: 'asset' // 匹配上面的文件后, webpack会把他们当做静态资源处理打包
      // 如果你设置的是asset模式
      // 以8KB大小区分图片文件
      // 小于8KB的, 把图片文件转base64, 打包进js中
      // 大于8KB的, 直接把图片文件输出到dist下
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      type: 'asset/resource', // 所有的字体图标文件, 都输出到dist下
      generator: { // 生成文件名字 - 定义规则
        filename: 'fonts/[name].[hash:6][ext]' // [name]的意思是保留原文件名部分，然后中间的意思的随意生成6位哈希编码，[ext]会替换成.eot/.woff
      }
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/, // 不去匹配这些文件夹下的文件
      use: {
        loader: 'babel-loader', // 使用这个loader处理js文件
        options: { // 加载器选项
          presets: ['@babel/preset-env'] // 预设: @babel/preset-env 降级规则-按照这里的规则降级我们的js语法
        }
      }
    }

  ]
  }
};

