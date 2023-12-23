import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import {BuildOptions} from "./types/types";
export function buildDevServer(options:BuildOptions): DevServerConfiguration
{
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true, // it is needed for react-router-dom history api, it works only in dev mode,
        hot: true // hot module replacement - it reloads the code without reloading the browser
    }
}