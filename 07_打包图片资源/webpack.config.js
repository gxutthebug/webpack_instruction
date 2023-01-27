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
    }
  ]
  }
};

