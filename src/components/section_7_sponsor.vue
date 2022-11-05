<template lang="pug">
#sponsor
  .sponsor__wrap
    h3.sponsor__title 鑽石級
      span 贊助商
    ul.sponsor__lists(ontouchstart)
        cube(link="https://blockstudio.tw/", title="版塊設計", enTitle="blockstudio")
        cube(link="https://titansoft.com/tw", title="鈦坦科技", enTitle="titansoft")
        cube(link="https://www.kdanmobile.com/zh-tw", title="凱鈿科技", enTitle="kdanmobile")
  .sponsor__wrap
    h3.sponsor__title
      span 共同推廣
    ul.sponsor__lists(ontouchstart)
        cube(link="https://titansoft.com/tw/go_jira", title="GO JIRA", enTitle="jira")
        cube(link="https://titansoft.com/tw/get_miro", title="Get Miro", enTitle="miro")
        cube(link="https://www.dottedsign.com/zh-tw/?utm_source_k=PR&utm_campaign_k=PR_Hexschool_SponsorEvent_2022&utm_medium_k=Hexschool", title="點點簽", enTitle="dottedsign")
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
#sponsor {
  background: $c-brand1;
  padding: calc($space-m * 5);
}
.sponsor {
  &__wrap {
    & + .sponsor__wrap {
      margin-top: calc($space-m * 5);
    }
  }
  &__title {
    @include font(72px, 1.5, $fw-primary, 5px);
    color: $c-brand2;
    text-align: center;
    span {
      color: $c-text-primary;
    }
  }
  &__lists {
    @include flex;
    margin: 0;
    padding: $space-s $space-xl;
    perspective: 1500px;
    transform: translateZ(#{$space-xl * 8});
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
