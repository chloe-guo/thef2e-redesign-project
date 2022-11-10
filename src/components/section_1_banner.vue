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
</template>
<script>
import $ from "jquery";

export default {
  name: "section_1_banner",
  mounted: function () {
    $(".banner__link").mouseenter(function () {
      let el = $(this).parent(".banner__item");
      $(".banner__item").not(el).removeClass("is-actived");
      el.addClass("is-actived");
    });

    window.addEventListener(
      "keydown",
      function (e) {
        switch (e.code) {
          case "ArrowUp": {
            e.preventDefault();
            $(".banner__item").each(function () {
              if ($(this).hasClass("is-actived")) {
                $(this).removeClass("is-actived");
              } else {
                $(this).addClass("is-actived");
              }
            });
            break;
          }
          case "ArrowDown": {
            e.preventDefault();
            $(".banner__item").each(function () {
              if ($(this).hasClass("is-actived")) {
                $(this).removeClass("is-actived");
              } else {
                $(this).addClass("is-actived");
              }
            });
            break;
          }
          case "Enter": {
            e.preventDefault();
            if ($(".banner__item.is-actived .banner__link").data("action")) {
              $("html, body").animate(
                { scrollTop: $(".issue__item-1").offset().top + 50 },
                1000,
                "swing"
              );
            } else {
              window.open(
                $(".banner__item.is-actived .banner__link").attr("href")
              );
            }
            break;
          }
        }
      },
      false
    );
  },
};
</script>
<style lang="scss" scoped>
#banner {
  @include rect(100vw, 100vh);
  height: calc(var(--vh, 1vh) * 100);
  @include flex(column, flex-start, center);
  background: $c-bg;
}
.banner {
  &__logo {
    @include img(74.9vw, auto);
    max-width: 65.5rem;
    margin: 20vh auto 10vh auto;
  }
  &__item {
    @include rect(auto, 3.3125rem);
    & + .banner__item {
      margin-top: $space-s;
    }
    &::before {
      @include beaf;
      @include rect(5.375rem, 100%);
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
        text-shadow: 0 0 calc($space-xs / 2) $c-brand1;
      }
    }
  }
  &__link {
    @include font(42);
    text-transform: uppercase;
  }
  &__info {
    margin-top: 9vh;
    @include font(32, 1.5, $fw-primary, 3);
    span {
      margin-left: $space-s;
      text-transform: uppercase;
    }
  }
}
</style>
