module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '志愿者三下乡'
        return args
      })
  }
}