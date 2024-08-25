import { BuildOptions } from './types/config';
import { Configuration } from 'webpack-dev-server';

export default function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: true
  }
}
