<template lang="pug">
//- 網頁區塊 8：各界大神接力分享（選做）
#share
  #CurtainsCanvas
  ul.share__lists
    info(image="blockstudio_logo.jpg", title="網站的動態趨勢", date="11/3（四）20:00 ~ 21:30", author="李明", position="版塊設計創辦人暨設計總監")
    info(image="blockstudio_logo.jpg", title="網站的動態趨勢", date="11/3（四）20:00 ~ 21:30", author="李明", position="版塊設計創辦人暨設計總監")
    info(image="blockstudio_logo.jpg", title="網站的動態趨勢", date="11/3（四）20:00 ~ 21:30", author="李明", position="版塊設計創辦人暨設計總監")
    info(image="blockstudio_logo.jpg", title="網站的動態趨勢", date="11/3（四）20:00 ~ 21:30", author="李明", position="版塊設計創辦人暨設計總監")
//- 使用 parallax hover effect
    - tilt.js
    - https://www.curtainsjs.com/
</template>

<script>
import info from "@/components/section_8_share_info.vue";
export default {
  name: "section_8_share",
  components: {
    info,
  },
};
</script>

<style lang="scss" scoped>
#share {
  z-index: 1;
}
#CurtainsCanvas {
  @include rect(100%, 120vh);
  @include fixed(0, -10vh, 0, b);
  pointer-events: none;
  z-index: -1;
}
.share {
  &__lists {
    @include rect(100%, auto);
    @include flex(row, space-between);
    flex-wrap: wrap;
  }
}
</style>
