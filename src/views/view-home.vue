<template lang="pug">
#view__home
  section_1_banner
  section_2_issue
  //- 網頁區塊 3：破題
    ## 本屆主題：互動式網頁設計
    以下兩個角色進行攜手合作
    - UI 設計師
    - 前端工程師
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
  //- section_4_solution
  //- 網頁區塊 5： 活動說明（必做加分項目）
    1. 報名時間：10/13~10/30
      - 截止前可修改報名組別
    2. 登錄作品：10/31~11/28
      - 依賽程登錄作品
      - 10/31(一) UI、團體組開賽；11/7(一) 前端組開賽
    3. 額外競賽：主題豐厚獎金等著你
    ## 開賽時間：10/31(一) UI、團體組開賽；11/7(一) 前端組開賽
      活動採用 UI、前端接力合作形式，前端工程師可採用 UI 設計師的設計稿，一同產出完整作品。
  //- 網頁區塊 6：獎項設計（必做）
    ## 主標：區區修煉已經無法滿足了嗎？還有比賽等著你！
    ## 評審機制：
      初選：將由六角學院前端、UI 評審進行第一波篩選。
      決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
    ## 獎項
      1. 初選佳作 共六十位數位獎狀
      2. 個人企業獎 共六位NTD 3,000/位
      3. 團體企業獎 共三組NTD 10,000/組
      4. 以上皆提供完賽數位獎狀
  //- section_6_awards
  //- 網頁區塊 7：贊助單位（必做）
    - 鈦坦科技
    - 凱鈿科技
    - 版塊設計
  //- section_7_sponsor
  //- 網頁區塊 8：各界大神接力分享（選做）
  //- section_8_share(msg="Welcome to Your Vue.js App")
  //- 網頁區塊 9：常見問答（選做）
</template>

<script>
// @ is an alias to /src
import section_1_banner from "@/components/section_1_banner.vue";
import section_2_issue from "@/components/section_2_issue.vue";
// import section_4_solution from "@/components/section_4_solution.vue";
// import section_6_awards from "@/components/section_6_awards.vue";
// import section_7_sponsor from "@/components/section_7_sponsor.vue";
// import section_8_share from "@/components/section_8_share.vue";

export default {
  name: "view_home",
  components: {
    section_1_banner,
    section_2_issue,
    // section_4_solution,
    // section_6_awards,
    // section_7_sponsor,
    // section_8_share,
  },
};
</script>

<!-- <style lang="scss" scoped>
</style> -->
