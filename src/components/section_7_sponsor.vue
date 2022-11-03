<template lang="pug">
#sponsor
  //- 網頁區塊 7：贊助單位（必做） - 鈦坦科技 - 凱鈿科技 - 版塊設計 //- 使用
      hover效果 - https://css-tricks.com/direction-aware-hover-effects/
  ul.sponsor__lists(ontouchstart)
      cube(link="https://blockstudio.tw/", title="版塊設計", enTitle="blockstudio")
      cube(link="https://titansoft.com/tw", title="鈦坦科技", enTitle="titansoft")
      cube(link="https://www.kdanmobile.com/zh-tw", title="凱鈿科技", enTitle="kdanmobile")
  svg.sponsor__clip.clip(viewbox="0 0 0 0" xmlns="http://www.w3.org/2000/svg")
      defs
          clippath#clip-top
              polygon#top(points="0 0 96 0 48 48")
          clippath#clip-bottom
              polygon#bottom(points="96 48 0 48 48 0")
          clippath#clip-left
              polygon#left(points="0 0 0 96 48 48")
          clippath#clip-right
              polygon#right(points="48 0 48 96 0 48")
</template>

<script>
import cube from "@/components/section_7_sponsor-cube.vue";
export default {
  name: "section_7_sponsor",
  components: {
    cube,
  },
};
</script>

<style lang="scss" scoped>
.sponsor {
  &__lists {
    @include flex;
    margin: 0;
    padding: $m-padding;
    perspective: 1000px;
    transform: translateZ(#{$m-padding * 8});
    transform-style: preserve-3d;
    * {
      transform-style: preserve-3d;
    }
  }
  &__clip {
    @include poa;
    opacity: 0;
    z-index: -100;
  }
}
</style>
