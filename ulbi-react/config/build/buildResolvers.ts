import webpack from 'webpack';;
import path from 'path';
import { BuildOptions } from './types/config';

export default function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@app': path.resolve(options.paths.src, 'app'),
      '@entities': path.resolve(options.paths.src, 'entities'),
      '@features': path.resolve(options.paths.src, 'features'),
      '@pages': path.resolve(options.paths.src, 'pages'),
      '@shared': path.resolve(options.paths.src, 'shared'),
      '@widgets': path.resolve(options.paths.src, 'widgets'),
    },
  };
}
