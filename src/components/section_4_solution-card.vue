<template lang="pug">
li.solution__item.is-tilt
    .solution__image-bg.is-cursorHover
        img(:src="image_bg")
    .solution__content.is-cursorHover
        .solution__image-object
            img(:src="require(`@/assets/images/${image_object}`)")
        .solution__info
            .solution__title {{title}}
            .solution__subTitle {{subTitle}}
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
    width: 300px;
  }
  &__image {
    &-bg {
      @include rect(300px, 300px);
      object-fit: contain;
    }
    &-object {
      @include img(200px, 200px);
      @include poa;
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
    @include poa(l, t, 0, 0);
    transform: translateX(60%);
  }
}
.is-tilt {
  transform-style: preserve-3d;
}
</style>
