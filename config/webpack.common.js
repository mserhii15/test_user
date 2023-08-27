const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
   * The point or points to enter the application.
   *
   * See: https://webpack.js.org/configuration/entry-context/
   */
  entry: './src/main.js',

  /**
   * Options affecting the output of the compilation.
   *
   * See: https://webpack.js.org/configuration/output/
   */
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * See: https://webpack.js.org/configuration/output/#output-path
     */
    path: path.join(__dirname, 'dist'),

    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: https://webpack.js.org/configuration/output/#output-filename
     */
    filename: '[name].bundle.js',

    /**
     * This option determines the name of non-entry chunk files.
     *
     * See: https://webpack.js.org/configuration/output/#outputchunkfilename
     */
    chunkFilename: '[name].chunk.js',
  },

  plugins: [
    /**
     * Plugin: MiniCssExtractPlugin.
     * Description: This plugin extracts CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     *
     * See: https://github.com/webpack-contrib/mini-css-extract-plugin/
     */
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[name].chunk.css',
      ignoreOrder: true,
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your index.html
      filename: 'index.html' // Output filename for the generated HTML
    })
  ],

  /*
   * Options affecting the normal modules.
   *
   * See: https://webpack.js.org/configuration/module/
   */
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './assets/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
