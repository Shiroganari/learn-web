import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types/config';

export default function buildPlugins({ template }: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template
        }),
        new webpack.ProgressPlugin(),
    ];
}
