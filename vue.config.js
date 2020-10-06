module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "components": "@/components",
        "assets": "@/assets",
        "store": "@/store",
        "views": "@/views",
        "common": "@/common"
      }
    }
  }
}