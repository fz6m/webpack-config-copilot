import { Configuration as WebpackOriginConfig } from 'webpack'
import { Configuration as WebpackDevServerOriginConfig } from 'webpack-dev-server'

export type WebpackConfigAny = {
  [key: string]: any
}

export type WebpackDevServerConfig = WebpackDevServerOriginConfig &
  WebpackConfigAny

export type WebpackConfig = WebpackOriginConfig & {
  devServer: WebpackDevServerConfig
} & WebpackConfigAny

export const defineConfig = (config: WebpackConfig): WebpackConfig => config
