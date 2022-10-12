<template lang="pug">
navComponent
router-view
<!-- The custom cursor elements -->
.follow
.cursor
</template>

<script>
import navComponent from "@/components/header_nav.vue";
import $ from "jquery";
import { gsap, TweenMax } from "gsap/all";
// don't forget to register plugins
gsap.registerPlugin(TweenMax);

export default {
  name: "App",
  components: {
    navComponent,
  },
  mounted: function () {
    //-------- webfont --------//
    let WebFont = require("webfontloader");

    WebFont.load({
      google: {
        families: ["Noto Sans TC:300,500,700&display=swap"],
      },
    });

    //-------- 100vh --------//
    let windowsVH = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", windowsVH + "px");
    window.addEventListener("resize", function () {
      windowsVH = window.innerHeight / 100;
      document.documentElement.style.setProperty("--vh", windowsVH + "px");
    });

    //-------- custom cursors --------//
    function customMouse() {
      let cursor = $(".cursor"),
        follower = $(".follow");

      let posX = 0,
        posY = 0;

      let mouseX = 0,
        mouseY = 0;

      TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          TweenMax.set(follower, {
            css: {
              left: posX - 12,
              top: posY - 12,
            },
          });

          TweenMax.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });

      $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });

      $(".is-cursorHover").on("mouseenter", function () {
        cursor.addClass("is-active");
        follower.addClass("is-active");
      });
      $(".is-cursorHover").on("mouseleave", function () {
        cursor.removeClass("is-active");
        follower.removeClass("is-active");
      });
    }
    customMouse();
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
//-------- reset.scss --------//
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
  transform-style: preserve-3d;
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
    transform-style: preserve-3d;
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
//-------- custom cursor --------//
*,
*::before,
*::after {
  cursor: none !important;
}
.cursor {
  @include circle(5px);
  position: absolute;
  background-color: rgba(white, 0.8);
  user-select: none;
  pointer-events: none;
  z-index: 100001;
  transform: translateZ(10000px);
  transition: 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  &.is-active {
    opacity: 0;
  }
}
.follow {
  @include circle(20px);
  position: absolute;
  background-color: rgba(#a88244, 0.5);
  mix-blend-mode: difference;
  user-select: none;
  pointer-events: none;
  z-index: 100000;
  transform: translate(5px, 5px, 10000px);
  transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
    0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  &.is-active {
    opacity: 0.7;
    transform: scale(3) translateZ(10000px);
  }
}
</style>
