<template lang="pug">
#share
  .share__title 各界大神
    span 接力分享
  #CurtainsCanvas
  ul.share__lists
    card(image="speaker-1", title="網站的動態趨勢", date="11/3（四）20:00 ~ 21:30", author="李明", position="版塊設計創辦人暨設計總監")
    card(image="speaker-2", title="jQuery 也可以做到的互動效果", date="11/10（四）20:00 ~ 21:30", author="Leo", position="Angular Taiwan 傳教士")
    card(image="speaker-3", title="做事不能拖拖拉拉，但網頁可以：draggable.js 介紹", date="11/17（四）20:00 ~ 21:30", author="邱繼緯", position="前端工程師")
    card(image="speaker-4", title="互動式網頁設計工程師該具備哪些技能？", date="11/24（四）20:00 ~ 21:30", author="吳哲宇", position="墨雨互動設計 創辦人、生成式藝術家")
</template>

<script>
import card from "@/components/section_8_share-card.vue";
export default {
  name: "section_8_share",
  components: {
    card,
  },
};
</script>

<style lang="scss" scoped>
#share {
  z-index: 1;
  max-width: 1370px;
  margin: calc($space-xl * 3) auto calc($space-xxl * 5) auto;
}
#CurtainsCanvas {
  @include rect(100%, 120vh);
  @include fixed(0, -10vh, 0, b);
  pointer-events: none;
  z-index: -1;
}
.share {
  &__title {
    @include font(72, 1.5, $fw-primary, 5);
    text-align: center;
    margin-bottom: $space-s;
    color: $c-brand2;
    span {
      color: $c-text-primary;
    }
  }
  &__lists {
    @include rect(100%, auto);
    @include flex(row, space-between);
    flex-wrap: wrap;
  }
}
</style>
