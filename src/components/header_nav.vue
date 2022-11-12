<template lang="pug">
header
  nav.navbar
    router-link.navbar__brand.navbar__text(to="/") TheF2E 4th
    p.navbar__info.navbar__text Total - 001238
    btn.navbar__toggler
      span.btn__line
      span.btn__text.navbar__text.is-cubeFont(data-text="menu") close
      span.btn__line
    .navbar__collapse
      ul.navbar__menu
        li.navbar__item
          router-link.navbar__link.btn.js-cursorHover(to="/")
            span.btn__line
            span.btn__text.navbar__text(data-text="關卡資訊") 關卡資訊
            span.btn__line
        li.navbar__item
          a.navbar__link.btn.js-cursorHover(href="https://2022.thef2e.com/works" target="_blank")
            span.btn__line
            span.btn__text.navbar__text(data-text="作品列表") 作品列表
            span.btn__line
        li.navbar__item
          a.navbar__link.btn.js-cursorHover(href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="_blank")
            span.btn__line
            span.btn__text.navbar__text(data-text="攻略資源") 攻略資源
            span.btn__line
        li.navbar__item
          a.navbar__link.btn.js-cursorHover(href="https://2022.thef2e.com" target="_blank")
            span.btn__line
            span.btn__text.navbar__text(data-text="我要報名") 我要報名
            span.btn__line
</template>

<script>
import $ from "jquery";

export default {
  name: "header_nav",
  mounted: function () {
    $(".navbar__toggler").on("click", function () {
      $(".navbar__toggler").toggleClass("is-actived");
      $(".navbar__collapse").toggleClass("is-open");
      $("body").toggleClass("is-fixed");
    });
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @include poa(0, 0, 0, b);
  padding: $space-l calc($space-l * 2);
  @include flex(row, space-between);
  z-index: 1;
  background: $c-bg;
  @media (max-width: $sm) {
    padding: $space-l $space-xl;
  }
  &__brand {
    z-index: 1;
  }
  &__text {
    @include font(30, 1.2);
    color: $c-text-primary;
    &::before,
    &::after {
      @include font(30, 1.2);
      color: $c-text-primary;
      text-align: center;
    }
    @media (max-width: $sm) {
      @include font(48, 1.2);
      &::before,
      &::after {
        @include font(48, 1.2);
      }
    }
  }
  &__info {
    @media (max-width: $sm) {
      display: none;
    }
  }
  &__collapse {
    @media (max-width: $sm) {
      @include rect(100vw, 100vh);
      height: calc(var(--vh, 1vh) * 100);
      @include poa(0, 0, 0, b);
      background: rgba($c-bg, 0.75);
      backdrop-filter: blur(5px);
      opacity: 0;
      pointer-events: none;
      transition: all 0.6s cubic-bezier(0.76, 0, 0.24, 1);
      &.is-open {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
  &__menu {
    @include flex(row, flex-end);
    @media (max-width: $sm) {
      @include rect;
      @include flex(column);
    }
  }
  &__item {
    & + .navbar__item {
      display: block;
      margin-left: $space-l;
      @media (max-width: $sm) {
        margin-left: 0;
        margin-top: calc($space-xxl * 1.125);
      }
    }
  }
  &__link,
  &__toggler {
    @include rect(auto, calc($space-m * 1.25 * 1.2 + $space-xs * 2));
    display: block;
    padding: $space-xs $space-m;
    color: $c-text-primary;
    overflow: hidden;
  }
  &__link {
    @media (max-width: $sm) {
      padding: calc($space-l / 2) $space-xl;
      @include rect(auto, calc($space-xxl * 1.2 + $space-l));
    }
  }
  &__toggler {
    display: none;
    @media (max-width: $sm) {
      display: block;
      z-index: 1;
      padding: calc($space-xs / 2) $space-m;
      @include rect(auto, calc($space-xxl * 1.2 + $space-xs));
    }
  }
  .btn,
  &__toggler {
    &__text {
      display: block;
      @include rect;
      transform: translateY(calc(100% + $space-l * 2));
      transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
      &::after {
        content: attr(data-text);
        display: block;
        @include poa;
        transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
        transform: translateY(calc((100% + $space-l * 2) * -1));
      }
    }
    &__line {
      display: block;
      @include rect($space-xs, 100%);
      transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
      @media (max-width: $sm) {
        @include rect(calc($space-m / 2), 100%);
      }
      &::before,
      &::after {
        @include beaf;
        @include rect(100%, $space-xs);
        @media (max-width: $sm) {
          @include rect(100%, calc($space-m / 2));
        }
      }
      &:first-of-type {
        @include poa(0, 0, r, 0);
        &::before {
          @include poa(0, 0, r, b);
          border-left: solid 2px $c-text-primary;
          border-top: solid 2px $c-text-primary;
        }
        &::after {
          @include poa(0, t, r, 0);
          border-left: solid 2px $c-text-primary;
          border-bottom: solid 2px $c-text-primary;
        }
      }
      &:last-of-type {
        @include poa(l, 0, 0, 0);
        &::before {
          @include poa(l, 0, 0, b);
          border-right: solid 2px $c-text-primary;
          border-top: solid 2px $c-text-primary;
        }
        &::after {
          @include poa(l, t, 0, 0);
          border-right: solid 2px $c-text-primary;
          border-bottom: solid 2px $c-text-primary;
        }
      }
    }
    &:not(.navbar__toggler):hover,
    &.is-actived {
      .btn {
        &__text {
          transform: translateY(0);
          text-shadow: 0 0 calc($space-xs / 2) $c-brand2;
        }
        &__line {
          @include rect(50%, 100%);
        }
      }
    }
  }
}
</style>
