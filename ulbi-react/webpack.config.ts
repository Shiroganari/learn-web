import path from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildOptions, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        template: path.resolve(__dirname, 'public', 'index.html'),
    };

    const mode: BuildMode = env.mode || 'development';
    const PORT: number = env.port || 3000;

    const isDev: boolean = mode === 'development';

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT,
    };

    return buildWebpackConfig(options);
}
