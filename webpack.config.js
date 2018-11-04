const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template:path.join(__dirname,'./src/index.html'),
  filename:'index.html'
})
module.exports = {
  mode:'production', //development production
  // webpack4.x 默认入口 src -> index.js
  plugins:[
    htmlWebpackPlugin
  ],
  // webpack默认只能打包.js文件。图片等其他类型文件需要安装第三方loader
  module:{//第三方模块的配置规则
    rules:[
      {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},//必须排除node_modules
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json'], //这几个文件的后缀可以不写,注意顺序！
    alias: { //配置目录指定符
      '@': path.join(__dirname,'./src') // @表示src目录
    }
  }
};
