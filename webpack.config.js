const webpack = require('webpack');

module.exports = function(env) {
  const entryPath = env == 'production' ? '/src/index.js' : '/test/index.js';
  let uglifyPlugin = []

  if (env == 'production') {
    uglifyPlugin.push(new webpack.optimize.UglifyJsPlugin())
  }


  return {
    context: __dirname,
    entry: __dirname + entryPath,
    output: {
      path: __dirname + '/dist',
      filename: 'index.js',
      library: 'VueLetterAvatar',
      libraryTarget: 'umd'
    },
    devServer: {
      contentBase: __dirname + '/test',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                postcss: [require('postcss-cssnext')()]
              }
            },

            {
              loader: 'eslint-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        }
      ]
    },
    plugins: [
      ...uglifyPlugin,
      //  define the vue enviroment.
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  }
}
