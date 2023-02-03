const path = require('path')
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {

   // entry: "./src/main.js",

  output: {
    path: undefined, // 开发模式没有输出，不需要指定输出目录
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    // clean: true, // 开发模式没有输出，不需要清空输出结果
  },

  module:{
    rules: [
        {
          oneOf:[
            {
              // 用来匹配 .css 结尾的文件
              test: /\.css$/,
              // use 数组里面 Loader 执行顺序是从右到左
              use: ["style-loader", // 把JS中的CSS拿出来,然后创建一个style标签,将样式放进去
              "css-loader"], // 将CSS资源编译成CommonJS模块 放到出口JS文件中
            },
      
            {
              test: /\.less$/,
              use: ["style-loader", "css-loader", "less-loader"], // less-loader把less编译成css
            },
      
            {
              test: /\.(png|jpe?g|gif|webp)$/,
              type: "asset",
              parser: {
                dataUrlCondition: {
                  maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                }
              },
              generator: {
                // 将图片文件输出到 static/imgs 目录中
                // 将图片文件命名 [hash:8][ext][query]
                // [hash:8]: hash值取8位
                // [ext]: 使用之前的文件扩展名
                // [query]: 添加之前的query参数
                filename: "static/imgs/[hash:8][ext][query]",
              },
            },
      
            { // 处理字体资源(字体文件其实除了ttf  woff2还有其他类型这里就测试两种)或 其他音视频资源 svg资源等等等等
              //  资源模块处理非图片资源时绝大多数时候只是把资源原封不动的输出到打包文件而已,你只需要用正则匹配你要打包的资源类型即可
              test: /\.(ttf|woff2?|svg|mp4|mp3)$/,
              type: "asset/resource",
              generator: {
                filename: "static/media/[hash:8][ext][query]",
              },
            },
            
             {
              test: /\.html$/i,  
              loader: "html-loader", // 处理html文件里面的url静态资源
            },
          ]
        }
    ],
  },

  plugins:[
    new ESLintWebpackPlugin({
      // 指定eslint检查文件的根目录
      context: path.resolve(__dirname, "../src"),
      exclude:["../src/style","node_modules"], // 排除某检查某文件

      cache: true, // 开启缓存 , 加速二次打包 ,优化性能
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),

     new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      // 注意：这里不会识别处理index.html 里引入的URL(静态资源) , 需要加载html-loader
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],

   // 开发服务器
   devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）
  },

  mode:"development",

  devtool: "cheap-module-source-map",
 
  

}