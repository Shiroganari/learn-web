import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types/config';

export default function buildPlugins({
  template,
}: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}
