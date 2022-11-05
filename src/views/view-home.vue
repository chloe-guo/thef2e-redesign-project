<template lang="pug">
#view__home
  section_2_issue
  section_3_cooperation
  section_6_awards
  section_7_sponsor
  section_8_share
  section_9_faq
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
</template>

<script>
import section_2_issue from "@/components/section_2_issue.vue";
import section_3_cooperation from "@/components/section_3_cooperation.vue";
import section_6_awards from "@/components/section_6_awards.vue";
import section_7_sponsor from "@/components/section_7_sponsor.vue";
import section_8_share from "@/components/section_8_share.vue";
import section_9_faq from "@/components/section_9_faq.vue";
// import section_4_solution from "@/components/section_4_solution.vue";

export default {
  name: "view_home",
  components: {
    section_2_issue,
    section_3_cooperation,
    section_6_awards,
    section_7_sponsor,
    section_8_share,
    section_9_faq,
    // section_4_solution,
  },
};
</script>
