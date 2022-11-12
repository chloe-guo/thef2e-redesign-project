<template lang="pug">
li.share__item.plane-wrapper
  .share__card.plane-inner
    .share__image.small-plane.js-cursorHover
      img(:src="require(`@/assets/images/${image}.jpg`)" data-sampler="planeTexture")
      p.share__tag.js-cursorHover 免費公開場
    .share__info.js-cursorHover
      .info__shadow
      .info__content
        h6.share__title {{ title }}
        p.share__date {{ date }}
        p.share__author {{ author }}
        p.share__position {{ position }}
</template>

<script>
export default {
  name: "section_8_share-card",
  props: {
    image: String,
    title: String,
    date: String,
    author: String,
    position: String,
  },
  mounted: function () {
    let today = new Date();
    if (today < new Date("2022/11/3 21:30:00")) {
      $(".share__item:nth-child(1)").addClass("is-actived");
    } else if (today < new Date("2022/11/10 21:30:00")) {
      $(".share__item:nth-child(2)").addClass("is-actived");
    } else if (today < new Date("2022/11/17 21:30:00")) {
      $(".share__item:nth-child(3)").addClass("is-actived");
    } else if (today < new Date("2022/11/24 21:30:00")) {
      $(".share__item:nth-child(4)").addClass("is-actived");
    }
  },
};
</script>

<style lang="scss" scoped>
.share {
  &__item {
    flex: 0 0 37.5rem;
    margin-bottom: calc($space-xxl * 3);
    @media (max-width: $sm) {
      width: 84vw;
      flex: 1;
      margin-bottom: calc($space-xl * 5);
    }
    &:nth-child(2n) {
      transform: translateY(calc($space-xxl * 1.5));
      @media (max-width: $sm) {
        transform: translateY(0);
      }
    }
    &.is-actived {
      .share {
        &__tag {
          background: $c-brand2;
        }
        &__info {
          .info {
            &__shadow {
              background: $c-brand2;
              &::before,
              &::after {
                background: $c-brand2;
              }
            }
          }
        }
      }
    }
  }
  &__card {
    @include rect(auto, 19.375rem);
    @media (max-width: $sm) {
      @include img(27.375rem, 100%);
    }
  }
  &__image {
    @include img(20rem, 100%);
    @media (max-width: $sm) {
      @include img(28rem, 100%);
    }
    img {
      display: none;
      @media (max-width: $sm) {
        display: block;
      }
    }
  }
  &__tag {
    background: $c-brand1;
    @include poa(l, calc($space-xl * 1.5), 0, b);
    transform: translateX(25%);
    @include font(18);
    padding: calc($space-xs / 2) $space-s;
    @media (max-width: $sm) {
      @include font(28);
    }
  }
  &__info {
    @include rect(22.5rem, auto);
    color: $c-brand1-dark;
    @include font(16);
    @include poa(l, t, 0, 0);
    transform: translate(-10%, 40%);
    @media (max-width: $sm) {
      @include rect(60vw, auto);
      transform: translate(46%, 45%);
      @include font(24);
    }
    .info {
      &__shadow {
        @include rect;
        @include poa;
        background: $c-brand1-lighter;
        &::after {
          @include beaf;
          @include rect(100%, $space-xs);
          background: $c-brand1-lighter;
          @include poa(0, 0, r, b);
          transform-origin: left top;
          transform: skewX(45deg);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        &::before {
          @include beaf;
          @include rect(100%, $space-xs);
          background: $c-brand1-lighter;
          @include poa(l, t, 0, 0);
          transform-origin: right top;
          transform: translateY(100%) skewX(45deg);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
      }
      &__content {
        background: white;
        @include rect;
        padding: $space-s $space-m;
        transform: translate($space-xs, $space-xs);
        transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
      }
    }
    &:hover {
      .info {
        &__shadow {
          &::before,
          &::after {
            @include rect(100%, 0);
          }
        }
        &__content {
          transform: translate(0, 0);
        }
      }
    }
  }
  &__title {
    @include font(20);
    color: $c-brand1;
    margin-bottom: $space-xs;
    @media (max-width: $sm) {
      @include font(30);
    }
  }
  &__position {
    opacity: 0.7;
    @include font(14);
    @media (max-width: $sm) {
      @include font(20);
    }
  }
}
.plane {
  @include img(20rem, 19.375rem);
}
</style>
