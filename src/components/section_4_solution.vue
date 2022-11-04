<template lang="pug">
#solution
  h2.solution__title 年度最強合作，三大主題來襲
  h3.solution__subTitle 各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
  ul.solution__lists
      card(image_bg="s4-solution-bg-1.png", image_object="s4-solution-icon-1.png", title="Week1", subTitle="The F2E 活動網站設計", sponsor="版塊設計", tag="#視差滾動")
      card(image_bg="s4-solution-bg-2.png", image_object="s4-solution-icon-2.png", title="Week2", subTitle="今晚，我想來點點簽", sponsor="凱鈿行動科技", tag="#canvas")
      card(image_bg="s4-solution-bg-3.png", image_object="s4-solution-icon-3.png", title="Week3", subTitle="Scrum 新手村", sponsor="鈦坦科技", tag="#JS draggable")
//- 網頁區塊 4：提出解法
    ## 主標：年度最強合作，三大主題來襲
    ## 副標：各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
    1. Week1： The F2E 活動網站設計
        - 標籤：視差滾動
        - 贊助商：版塊設計
    2. Week2： 今晚，我想來點點簽
        - 標籤：Canvas
        - 贊助商：凱鈿行動科技
    3. Week3： Scrum 新手村
        - 標籤：JS *draggable*
        - 贊助商：鈦坦科技

//- 使用 parallax hover effect
    - tilt.js
</template>

<script>
import card from "@/components/section_4_solution-card.vue";
export default {
  name: "section_8_share",
  components: {
    card,
  },
};
</script>

<style lang="scss" scoped>
.solution {
}
</style>
