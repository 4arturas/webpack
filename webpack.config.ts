import path from 'path';
import webpack from 'webpack';
import {buildWepack} from "./config/builder/buildWepack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/builder/types/types";


interface EnvVariables {
    mode: BuildMode;
    port: number;
    analyzer?: boolean;
    platform: BuildPlatform;
}
export default (env: EnvVariables) => {
    console.log(`Mode: ${env.mode}`)
    console.log(`Platform: ${env.platform}`)

    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }
    const config: webpack.Configuration = buildWepack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })
    return config;
};