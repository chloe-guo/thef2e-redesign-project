<template lang="pug">
#banner
    .banner__logo.js-cursorHover
        img(src="@/assets/images/s1-banner-logo.png")
    ul.banner__menu
        li.banner__item.is-cubeFont.js-cursorHover.is-active
            router-link.banner__link(to="/" target="_blank")  1 Scroll Down
        li.banner__item.is-cubeFont.js-cursorHover
            a.banner__link(href="https://2022.thef2e.com/works" target="_blank")  2 Sign Up
    p.banner__info 互動式網頁設計
        span.is-cubeFont Interactive And Responsive Web Design.
    #canvas-wrap
//- 網頁區塊 1 ：Banner
    ## 意境以「互動式網頁設計」為主
    - 主標：The F2E 4th
    - 副標：「互動式網頁設計」

//- 等設計，使用 parallax scroll
    - gasp ScrollTrigger
</template>
<script>
import $ from "jquery";
import p5 from "p5";

export default {
  name: "section_1_banner",
  data() {},
  mounted: function () {
    $(".banner__link").mouseenter(function () {
      let el = $(this).parent(".banner__item");
      $(".banner__item").not(el).removeClass("is-active");
      el.addClass("is-active");
    });
    const canvas = (cnv) => {
      cnv.setup = () => {
        cnv.createCanvas(0, 0).parent("canvas-wrap");
      };
      cnv.keyPressed = () => {
        if (cnv.keyCode === cnv.UP_ARROW || cnv.keyCode === cnv.DOWN_ARROW) {
          console.log(1234);
          $(".banner__item").each(function () {
            if ($(this).hasClass("is-active")) {
              $(this).removeClass("is-active");
            } else {
              $(this).addClass("is-active");
            }
          });
        }
      };
    };
    const p5canvas = new p5(canvas);
  },
};
</script>
<style lang="scss" scoped>
#banner {
  @include rect(100vw, calc(100vh - $height-navbar));
  height: calc(var(--vh, 1vh) * 100 - $height-navbar);
  @include flex(column, flex-start, center);
}
.banner {
  &__logo {
    @include img(76.6vw, auto);
    max-width: 1048px;
    margin: 11vh auto;
  }
  &__item {
    @include rect(auto, 53px);
    & + .banner__item {
      margin-top: $space-s;
    }
    &::before {
      @include beaf;
      @include rect(86px, 100%);
      background: url(@/assets/images/car-top.gif);
      @include bg;
      @include poa(calc($space-s * -1), 0, r, 0);
      transform: translate(-100%, 6%);
      display: none;
    }
    &.is-active {
      &::before {
        display: block;
      }
      .banner__link {
        color: $c-brand1;
        text-shadow: 0 0 5px $c-brand1;
      }
    }
  }
  &__link {
    @include font(42px);
    text-transform: uppercase;
  }
  &__info {
    margin-top: 9vh;
    @include font(32px, 1.5, $fw-primary, 3px);
    span {
      margin-left: $space-s;
      text-transform: uppercase;
    }
  }
}

#canvas-wrap {
  display: none;
}
</style>
