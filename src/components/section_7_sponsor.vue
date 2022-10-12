<template lang="pug">
//- 網頁區塊 7：贊助單位（必做） - 鈦坦科技 - 凱鈿科技 - 版塊設計 //- 使用
    hover效果 - https://css-tricks.com/direction-aware-hover-effects/
ul.sponsor__lists(ontouchstart)
    cube(cubeLink="https://blockstudio.tw/", cubeTitle="版塊設計", cubeEnTitle="blockstudio")
    cube(cubeLink="https://titansoft.com/tw", cubeTitle="鈦坦科技", cubeEnTitle="titansoft")
    cube(cubeLink="https://www.kdanmobile.com/zh-tw", cubeTitle="凱鈿科技", cubeEnTitle="kdanmobile")
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
  &__clip {
    @include poa;
    opacity: 0;
    z-index: -100;
  }
}
</style>
