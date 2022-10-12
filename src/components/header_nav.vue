<template lang="pug">
header
  nav.navbar
    router-link.navbar__brand(to="/")
      img(src="@/assets/images/logo.png")
    ul.navbar__menu
      li.navbar__item
        router-link.navbar__link.btn.is-cubicFont.is-cursorHover(to="/")
          span.btn__line
          span.btn__text(data-text="我要報名") 我要報名
          span.btn__line
      li.navbar__item
        router-link.navbar__link.btn.is-cubicFont.is-cursorHover(to="/")
          span.btn__line
          span.btn__text(data-text="關卡資訊") 關卡資訊
          span.btn__line
      li.navbar__item
        router-link.navbar__link.btn.is-cubicFont.is-cursorHover(to="/")
          span.btn__line
          span.btn__text(data-text="求職專區") 求職專區
          span.btn__line
</template>

<style lang="scss" scoped>
.navbar {
  height: 86px;
  padding: 20px 32px;
  @include flex(row, space-between);
  &__brand {
    @include img(auto, 100%);
  }
  &__menu {
    @include flex(row, flex-end);
  }
  &__item {
    & + .navbar__item {
      display: block;
      margin-left: 28px;
    }
  }
  &__link {
    @include rect(auto, 46px);
    display: block;
    padding: 12px 24px;
    @include font(18px, 1.2);
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
        @include font(18px, 1.2);
        color: $c-text-primary;
        transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
      }
      &::after {
        transform: translateY(calc(100% + 32px * 2));
      }
    }
    &__line {
      display: block;
      @include rect(6px, 100%);
      transition: all 0.25s cubic-bezier(0.76, 0, 0.24, 1);
      &::before,
      &::after {
        @include beaf;
        @include rect(100%, 6px);
      }
      &:first-of-type {
        @include poa(0, 0, r, 0);
        &::before {
          @include poa(0, 0, r, b);
          border-left: solid 1px $c-text-primary;
          border-top: solid 1px $c-text-primary;
        }
        &::after {
          @include poa(0, t, r, 0);
          border-left: solid 1px $c-text-primary;
          border-bottom: solid 1px $c-text-primary;
        }
      }
      &:last-of-type {
        @include poa(l, 0, 0, 0);
        &::before {
          @include poa(l, 0, 0, b);
          border-right: solid 1px $c-text-primary;
          border-top: solid 1px $c-text-primary;
        }
        &::after {
          @include poa(l, t, 0, 0);
          border-right: solid 1px $c-text-primary;
          border-bottom: solid 1px $c-text-primary;
        }
      }
    }
    &:hover {
      .btn {
        &__text {
          &::before {
            transform: translateY(calc(-100% - 32px * 2));
          }
          &::after {
            transform: translateY(0);
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
