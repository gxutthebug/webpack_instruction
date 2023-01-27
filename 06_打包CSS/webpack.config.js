// 人物属性
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // webpack入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  /*妈的当时把p写成大写,找了半天bug*/
  plugins:[new HtmlWebpackPlugin({
    template:"./public/index.html"
  })],//每次打包自动在dist添加选中的html文件

  module:{
    rules:[{
      test:/\.css$/i,
      use:["style-loader","css-loader"]
    }]
  }
};

