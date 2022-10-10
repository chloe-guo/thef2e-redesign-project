const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "/my-vue-template/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/scss/_variables.scss";
          @import "~@/assets/scss/_mixin.scss";
          @import "~@/assets/scss/_reset.scss";
        `,
      },
    },
  },
});
