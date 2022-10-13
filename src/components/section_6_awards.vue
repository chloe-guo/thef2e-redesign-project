<template lang="pug">
#awards
  h2.awards__title 區區修煉已經無法滿足了嗎？還有比賽等著你！
  .awards__content
    h6.is-tlt 評審機制：
    ol
      li.is-tlt 初選：將由六角學院前端、UI 評審進行第一波篩選。
      li.is-tlt 決選：由六角學院與贊助廠商討論，進行最後篩選，
      li.is-tlt 並於 12/30(五) 由評審進行直播公布名單！
  .awards__content
    h6.is-tlt 獎項：
    ol
      li.is-tlt 初選佳作 共六十位 數位獎狀
      li.is-tlt 個人企業獎 共六位 NTD 3,000/位
      li.is-tlt 團體企業獎 共三組 NTD 10,000/組
      li.is-tlt 以上皆提供完賽數位獎狀
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

//- 使用 textillate
    - http://textillate.js.org/
</template>

<script>
import $ from "jquery";
import lettering from "lettering.js";
import textillate from "textillate";

export default {
  mounted: function () {
    $(".is-tlt").each(function (i) {
      $(this).textillate({
        minDisplayTime: 2000,
        autoStart: true,
        in: {
          effect: "fadeIn",
          delayScale: 0.4 * i,
          delay: 40,
        },
        out: {
          effect: "hinge",
          delayScale: 0.4 * i,
          delay: 40,
          shuffle: true,
        },
        type: "char",
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
