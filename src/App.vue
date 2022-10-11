<template lang="pug">
navComponent
router-view
</template>

<script>
import navComponent from "@/components/header_nav.vue";
export default {
  name: "App",
  components: {
    navComponent,
  },
  mounted: function () {
    //-------- webfont --------//
    var WebFont = require("webfontloader");

    WebFont.load({
      google: {
        families: ["Noto Sans TC:300,500,700&display=swap"],
      },
    });

    //-------- 100vh --------//
    function safariHacks() {
      let windowsVH = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", windowsVH + "px");
      window.addEventListener("resize", function () {
        windowsVH = window.innerHeight / 100;
        document.documentElement.style.setProperty("--vh", windowsVH + "px");
      });
    }

    (function () {
      safariHacks();
      // var wf = d.createElement("script"),
      //   s = d.scripts[0];
      // wf.src =
      //   "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
      // wf.async = true;
      // s.parentNode.insertBefore(wf, s);
    })(document);
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Cubic";
  src: url("@/assets/fonts/web/Cubic_11_1.013_R.woff") format("woff"),
    url("@/assets/fonts/web/Cubic_11_1.013_R.woff2") format("woff"),
    url("@/assets/fonts/ttf/Cubic_11_1.013_R.ttf") format("opentype");
}
// reset.scss
html,
body {
  margin: 0px;
  padding: 0px;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
  @include font;
  color: $c-text-primary;
  background: $c-bg;
  .is-cubicFont {
    font-family: "Cubic", sans-serif;
  }
}

html {
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    margin: 0px;
    padding: 0px;
    vertical-align: baseline;
    outline: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    object-fit: contain;
    line-height: 0;
  }

  input {
    caret-color: $c-text-primary;
  }

  a {
    text-decoration: none;
  }

  .is-hidden {
    display: none !important;
  }

  .is-unvisible {
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .is-unclick {
    pointer-events: none !important;
  }
}
</style>
