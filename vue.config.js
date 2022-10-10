const { defineConfig } = require("@vue/cli-service");

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
});
