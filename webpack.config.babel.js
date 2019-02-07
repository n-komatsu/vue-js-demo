import path from 'path';

const config = {
  //development modeでビルドすることでVue.js 開発環境でdevtoolsが使用できる。
  //webpack ver.4では本番環境でproduction modeにすることでdevtoolでprops等を確認できなくなっている
  mode: 'development',
  entry: {
    index: [
      '@babel/polyfill',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dest/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.vue'],
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: 'dest',
  }
}
console.log(path.resolve(__dirname, 'src/components'));

export default config;