module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-app-vuetify/dist/'
      : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}