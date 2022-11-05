<template lang="pug">
#banner
    .banner__logo.js-cursorHover
        img(src="@/assets/images/s1-banner-logo.png")
    ul.banner__menu
        li.banner__item.is-cubeFont.js-cursorHover.is-actived
            a.banner__link(href="javaScript:;" data-action="scrollDown")  1 Scroll Down
        li.banner__item.is-cubeFont.js-cursorHover
            a.banner__link(href="https://2022.thef2e.com/works" target="_blank")  2 Sign Up
    p.banner__info 互動式網頁設計
        span.is-cubeFont Interactive And Responsive Web Design.
    #canvas-wrap
</template>
<script>
import $ from "jquery";
import p5 from "p5";

export default {
  name: "section_1_banner",
  mounted: function () {
    $(".banner__link").mouseenter(function () {
      let el = $(this).parent(".banner__item");
      $(".banner__item").not(el).removeClass("is-actived");
      el.addClass("is-actived");
    });

    let changeing = false;
    let offsettop = 1;
    let scrolling = 0;
    $(window).on("scroll", function () {
      offsettop = $(window).scrollTop();
    });

    document.addEventListener("wheel", (e) => {
      let isScrollingDown = e.wheelDeltaY;
      scrolling += isScrollingDown;
      if (!changeing) {
        if (isScrollingDown < 5) {
          if (
            $("#first-view").hasClass("is-enter") &&
            !$("#first-view").hasClass("is-hidden") &&
            !$("#first-view").hasClass("is-ani")
          ) {
            changeSence2();
          }
        } else if (isScrollingDown > 20) {
          if (
            $("#first-view").hasClass("is-enter") &&
            $("#first-view").hasClass("is-hidden") &&
            !$("#first-view").hasClass("is-ani") &&
            offsettop == 0
          ) {
            changeSence1();
          }
        }
      }
    });

    $('.banner__link[data-action="scrollDown"]').on("click", function () {
      changeSence2();
    });

    const canvas = (cnv) => {
      cnv.setup = () => {
        cnv.createCanvas(0, 0).parent("canvas-wrap");
      };
      cnv.keyPressed = () => {
        if (
          $("#first-view").hasClass("is-enter") &&
          !$("#first-view").hasClass("is-hidden") &&
          $("#first-view").innerWidth() - $("#first-view").width() == 0
        ) {
          switch (cnv.keyCode) {
            case cnv.UP_ARROW: {
              $(".banner__item").each(function () {
                if ($(this).hasClass("is-actived")) {
                  $(this).removeClass("is-actived");
                } else {
                  $(this).addClass("is-actived");
                }
              });
              break;
            }
            case cnv.DOWN_ARROW: {
              $(".banner__item").each(function () {
                if ($(this).hasClass("is-actived")) {
                  $(this).removeClass("is-actived");
                } else {
                  $(this).addClass("is-actived");
                }
              });
              break;
            }
            case cnv.ENTER: {
              if ($(".banner__item.is-actived .banner__link").data("action")) {
                changeSence();
              } else {
                window.open(
                  $(".banner__item.is-actived .banner__link").attr("href")
                );
              }
              break;
            }
          }
        }
      };
    };
    const p5canvas = new p5(canvas);

    function changeSence1() {
      changeing = true;
      $("#transitions").addClass("is-close");
      setTimeout(() => {
        $("#first-view").removeClass("is-hidden");
        $("#transitions").removeClass("is-close");
        $("html, body").animate({ scrollTop: 1 }, 100, "swing");
        setTimeout(() => {
          $("body").addClass("is-fixed");
          changeing = false;
        }, 1200);
      }, 1200);
    }

    function changeSence2() {
      changeing = true;
      $("#transitions").addClass("is-close");
      $("html, body").animate({ scrollTop: 1 }, 100, "swing");
      setTimeout(() => {
        $("#first-view").addClass("is-hidden");
        $("#transitions").removeClass("is-close");
        setTimeout(() => {
          $("body").removeClass("is-fixed");
          changeing = false;
        }, 1200);
      }, 1200);
    }
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
    &.is-actived {
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
