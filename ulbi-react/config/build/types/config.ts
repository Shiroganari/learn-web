export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    output: string;
    template: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
