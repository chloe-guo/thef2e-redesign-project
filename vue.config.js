const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "/first-vue-project/",
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
