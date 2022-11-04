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
    (function (d) {
      var config = {
          kitId: "qec1yzt",
          scriptTimeout: 3000,
          async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
          h.className =
            h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
          Typekit.load(config);
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s);
    })(document);

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
          posX += (mouseX - posX) / 6;
          posY += (mouseY - posY) / 6;

          TweenMax.set(follower, {
            css: {
              left: posX - 9,
              top: posY - 9,
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

      $(document).on("mouseenter", ".js-cursorHover", function () {
        cursor.addClass("is-active");
        follower.addClass("is-active");
      });
      $(document).on("mouseleave", ".js-cursorHover", function () {
        cursor.removeClass("is-active");
        follower.removeClass("is-active");
      });
    }
    customMouse();
  },
};
</script>

<style lang="scss">
//-------- reset.scss --------//
@font-face {
  font-family: "fusion-pixel";
  src: url("@/assets/fonts/fusion-pixel.woff2") format("woff"),
    url("@/assets/fonts/fusion-pixel.otf") format("opentype"),
    url("@/assets/fonts/fusion-pixel.ttf") format("opentype");
}
@font-face {
  font-family: "cube";
  src: url("@/assets/fonts/Cubic_11_1.013_R.woff") format("woff"),
    url("@/assets/fonts/Cubic_11_1.013_R.woff2") format("woff"),
    url("@/assets/fonts/Cubic_11_1.013_R.ttf") format("opentype");
}
html,
body {
  margin: 0px;
  padding: 0px;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  font-family: "fusion-pixel", "PingFang TC", "Microsoft JhengHei", sans-serif;
  @include font;
  color: $c-text-primary;
  background: $c-bg;
  .is-cubeFont {
    font-family: "cube", "PingFang TC", "Microsoft JhengHei", sans-serif;
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
    color: inherit;
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
  @include circle(25px);
  position: absolute;
  background-color: rgba($c-brand2, 0.3);
  mix-blend-mode: difference;
  user-select: none;
  pointer-events: none;
  z-index: 100000;
  transform: translate(5px, 5px, 10000px);
  transition: 0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
    0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  &.is-active {
    opacity: 0.7;
    transform: scale(3) translateZ(10000px);
  }
}
</style>
