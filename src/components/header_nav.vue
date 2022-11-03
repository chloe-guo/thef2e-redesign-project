<template lang="pug">
header
  nav.navbar
    router-link.navbar__brand.navbar__text(to="/") TheF2E 4th
    p.navbar__info.navbar__text Total - 001238
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
</template>

<style lang="scss" scoped>
.navbar {
  height: 116px;
  padding: $space-l calc($space-l * 2);
  @include flex(row, space-between);
  &__text {
    @include font(32px);
    color: $c-text-primary;
    &::before,
    &::after {
      @include font(30px, 1.2);
      color: $c-text-primary;
      text-align: center;
    }
  }
  &__menu {
    @include flex(row, flex-end);
  }
  &__item {
    & + .navbar__item {
      display: block;
      margin-left: $space-l;
    }
  }
  &__link {
    @include rect(auto, calc(30px * 1.2 + $space-xs * 2));
    display: block;
    padding: $space-xs $space-m;
    color: $c-text-primary;
  }
  .btn {
    &__text {
      display: block;
      @include rect;
      color: transparent;
      overflow: hidden;
      &::before,
      &::after {
        content: attr(data-text);
        display: block;
        @include poa;
        transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
      }
      &::after {
        transform: translateY(calc(100% + $space-l * 2));
      }
    }
    &__line {
      display: block;
      @include rect($space-xs, 100%);
      transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
      &::before,
      &::after {
        @include beaf;
        @include rect(100%, $space-xs);
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
    &:hover {
      .btn {
        &__text {
          &::before {
            transform: translateY(calc(-100% - 32px * 2));
            text-shadow: 0 0 5px $c-brand2;
          }
          &::after {
            transform: translateY(0);
            text-shadow: 0 0 5px $c-brand2;
          }
        }
        &__line {
          @include rect(50%, 100%);
        }
      }
    }
  }
}
</style>
