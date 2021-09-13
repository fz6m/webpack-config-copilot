import { defineConfig } from '../src/config/defineConfig'

const config = defineConfig({
  // normal webpack config
  module: {
    rules: [],
  },
  resolve: {},
  // backward compatibility
  xxx: 1,
  devServer: {
    // normal devServer config
    http2: true,
    // backward compatibility
    xxx: '123',
  },
})
