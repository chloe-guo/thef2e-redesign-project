<template lang="pug">
li.solution__item.is-tilt
    .solution__image-bg.js-cursorHover
        img(:src="require(`@/assets/images/${image_bg}`)")
    .solution__content.js-cursorHover
        .solution__image-object
            img(:src="require(`@/assets/images/${image_object}`)")
        .solution__info
            .solution__title.is-cubeFont {{title}}
            .solution__subTitle {{subTitle}}
            .solution__info-bottom
              .solution__sponsor {{sponsor}}
              .solution__tag {{tag}}
</template>

<script>
import $ from "jquery";
import tilt from "tilt.js";
export default {
  name: "section_4_solution-card",
  props: {
    image_bg: String,
    image_object: String,
    title: String,
    subTitle: String,
    sponsor: String,
    tag: String,
  },
  mounted: function () {
    $(".is-tilt").tilt();
  },
};
</script>

<style lang="scss" scoped>
.solution {
  &__item {
    @include rect(640px, auto);
  }
  &__image {
    &-bg {
      @include img(100%, auto);
    }
    &-object {
      @include img(45%, auto);
      @include poa(10%, 0, r, 0);
    }
  }
  &__content {
    @include poa;
    transform: translateZ(0);
    filter: drop-shadow(0 0 0 rgba(black, 0));
    transition: filter 0.3s cubic-bezier(0.12, 0, 0.39, 0),
      transform 0.3s cubic-bezier(0.12, 0, 0.39, 0);
    &:hover {
      transform: translateZ(20px);
      filter: drop-shadow(0 0 5px rgba(black, 0.5));
    }
  }
  &__info {
    @include poa(l, t, 0, 10%);
    transform: translateX(65%);
    background: white;
    padding: $space-s $space-m;
    @include flex(column);
    &-bottom {
      @include flex(row, space-between);
    }
  }
  &__title {
    @include font(28px);
  }
  &__subTitle {
    @include font(36px);
  }
  &__sponsor {
    @include font(24px);
  }
  &__tag {
    @include font(24px);
  }
}
.is-tilt {
  transform-style: preserve-3d;
}
</style>
