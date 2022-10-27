const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  publicPath: "/thef2e-redesign-project/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/scss/_variables.scss";
          @import "~@/assets/scss/_mixin.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },
});
