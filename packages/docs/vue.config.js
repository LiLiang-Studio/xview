const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: './',
  productionSourceMap: isDev,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
