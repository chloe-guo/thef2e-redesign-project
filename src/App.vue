<template lang="pug">
#layout
  router-view
  <!-- The custom cursor elements -->
  .follow
  .cursor
  #loading
    .loading__text.is-cubeFont
      span L
      span o
      span a
      span d
      span i
      span n
      span g
      span .
      span .
      span .
    .loading__image
      img(src="@/assets/images/car-right.gif")
  #transitions
    .transitions__top
    .transitions__bottom
  #layout-transitions
    .transitions__top
    .transitions__bottom
  footer.footer
    p.footer__text Copyright © 2022
      span &emsp;Frontend -&nbsp;
        a.js-cursorHover(href="https://github.com/chloe-guo" target="_blank") Chloe Guo
      span &emsp;Design -&nbsp;
        a.js-cursorHover(href="https://noarzxcvbnm.github.io/PersonalWebsite/index.html" target="_blank") 小菜
</template>

<script>
export default {
  name: "App",
  mounted: function () {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    imageLoading();

    function imageLoading() {
      let imgN = 0;
      const imgID = document.querySelectorAll("img");
      imgID.forEach((item) => {
        const img = new Image();
        img.src = item.src;
        img.addEventListener("load", () => {
          imgN++;
          if (imgN == imgID.length) {
            $("#layout-transitions").addClass("is-close");
            setTimeout(() => {
              $("body").removeClass("is-fixed");
              $("html, body").animate({ scrollTop: -100 }, 100, "swing");
              setTimeout(() => {
                $("body").addClass("is-fixed");
                $("#loading").addClass("is-hidden");
                $("#layout-transitions").removeClass("is-close");
              }, 800);
              setTimeout(() => {
                $("#first__wrap").removeClass("is-open");
                setTimeout(() => {
                  $("body").removeClass("is-fixed");
                }, 1200);
              }, 1800);
            }, 1200);
          }
        });
      });
    }

    //-------- 100vh --------//
    // let windowsVH = window.innerHeight / 100;
    // document.documentElement.style.setProperty("--vh", windowsVH + "px");
    // window.addEventListener("resize", function () {
    //   windowsVH = window.innerHeight / 100;
    //   document.documentElement.style.setProperty("--vh", windowsVH + "px");
    // });

    //-------- custom cursors --------//
    let cursor = $(".cursor"),
      follower = $(".follow");
    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;
    if (!isMobile) {
      customMouse();
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
    function customMouse() {
      TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 6;
          posY += (mouseY - posY) / 6;

          TweenMax.set(follower, {
            css: {
              left: posX,
              top: posY,
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
    }
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
  button {
    font-family: "fusion-pixel", "PingFang TC", "Microsoft JhengHei", sans-serif;
  }
  @include font;
  color: $c-text-primary;
  -webkit-font-smoothing: antialiased;
  background: $c-bg;
  scroll-behavior: smooth;
  .is-cubeFont {
    font-family: "cube", "PingFang TC", "Microsoft JhengHei", sans-serif;
  }
  font-size: $fz-primary;
  @media (max-width: $xl) {
    font-size: 1vw;
  }
  @media (max-width: $sm) {
    font-size: 2vw;
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

body {
  &.is-fixed {
    @include rect(100vw, 100vh);
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
  }
}

.is-hiddenInMobile {
  @media (max-width: $sm) {
    display: none !important;
  }
}
</style>

<style lang="scss" scoped>
//-------- custom cursor --------//
.cursor {
  @include circle($space-xs);
  position: absolute;
  background-color: rgba(white, 0.8);
  user-select: none;
  pointer-events: none;
  z-index: 99;
  transform: translate(calc($space-xs / -2), calc($space-xs / -2));
  transition: 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  &.is-active {
    opacity: 0;
  }
  @media (max-width: $sm) {
    display: none;
  }
}
.follow {
  @include circle($space-l * 2);
  position: absolute;
  background-color: rgba($c-brand2, 0.3);
  mix-blend-mode: difference;
  user-select: none;
  pointer-events: none;
  z-index: 98;
  transform: translate(calc($space-l * 2 / -2), calc($space-l * 2 / -2));
  transition: 0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
    0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity;
  &.is-active {
    opacity: 0.7;
    transform: translate(calc($space-xxl / -2), calc($space-xxl / -2)) scale(3);
  }
  @media (max-width: $sm) {
    display: none;
  }
}
#loading {
  @include rect(100vw, 100vh);
  height: calc(var(--vh, 1vh) * 100);
  @include flex(column);
  background: $c-bg;
  @include fixed;
  z-index: 100;
  .loading {
    &__image {
      @include img(10.35rem, 4.125rem);
      animation: loading-image 1.2s linear infinite alternate;
      @keyframes loading-image {
        0% {
          transform: translateX(-4%);
        }
        100% {
          transform: translateX(4%);
        }
      }
    }
    &__text {
      @include font(36);
      margin-bottom: $space-l;
      span {
        display: inline-block;
        @for $i from 1 through 10 {
          &:nth-child(#{$i}) {
            animation: loading-text
              2s
              #{(10 - $i) *
              -0.3}s
              linear
              infinite
              alternate;
          }
        }
        @keyframes loading-text {
          0%,
          100% {
            transform: translateY(0);
          }
          45%,
          55% {
            transform: translateY(-20%);
          }
        }
      }
    }
  }
}
#transitions,
#layout-transitions {
  @include rect(100vw, 100vh);
  height: calc(var(--vh, 1vh) * 100);
  @include fixed;
  z-index: 101;
  pointer-events: none;
  .transitions__top,
  .transitions__bottom {
    @include beaf;
    @include rect(100%, 50%);
    background: $c-bg;
  }
  .transitions__top {
    @include poa(0, 0, 0, b);
    transform: translateY(-100%);
  }
  .transitions__bottom {
    @include poa(0, t, 0, 0);
    transform: translateY(100%);
  }
  &.is-close {
    pointer-events: auto;
    .transitions__top {
      transform: translateY(0);
    }
    .transitions__bottom {
      transform: translateY(0);
    }
  }
}
#layout-transitions {
  .transitions__top,
  .transitions__bottom {
    transition: all 1.2s linear;
  }
}

.footer {
  z-index: 10;
  @include poa(0, t, 0, 0);
  background: $c-brand1;
  @include font(18);
  padding: $space-xs $space-m;
  @include flex;
}
</style>
