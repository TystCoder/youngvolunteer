module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '茂名职业技术学院青年志愿者官网'
        return args
      })
  }
}