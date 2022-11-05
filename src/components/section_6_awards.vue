<template lang="pug">
#awards
  .awards__kv
    .awards__titleGroup
      .js-typed
        h2.awards__title.has-cursor 區區修煉已經無法滿足了嗎？
      .js-typed
        h3.awards__subTitle.has-cursor 還有比賽等著你！
  .awards__content
    h4.js-fadeText 評審機制
    h6.js-fadeText 初選：
    p.js-fadeText 將由六角學院前端、UI 評審進行第一波篩選，
    p.js-fadeText 並於 12/5（五）公布初選佳作名單！
    h6.js-fadeText 決選：
    p.js-fadeText 由三大企業針對該企業主題進行入圍獎最後篩選，
    p.js-fadeText 並於 12/23（五）公布企業得獎名單！
  .awards__content
    h4.js-fadeText 獎項
    ul
      li
        div
          h5.js-fadeText 初選佳作 共六十位
          h5.is-heightLight.js-fadeText 數位獎狀
        p.js-fadeText 每週主題個人組十位、團體組十組
      li
        div
          h5.js-fadeText 個人企業獎 共六位
          h5.is-heightLight.js-fadeText NTD 3,000/位
        p.js-fadeText 每週主題各兩名，設計一位、前端一位
      li
        h5.js-fadeText 團體企業獎 共三組
        h5.is-heightLight.js-fadeText NTD 10,000/組
        p.js-fadeText 每週主題各一組
  .awards__btnGroup
    a(href="https://2022.thef2e.com" target="_blank").awards__cta 立即註冊報名!
</template>

<script>
import $ from "jquery";
import Typed from "typed.js";

export default {
  mounted: function () {
    let titleStr = [];
    $(".js-typed").each(function () {
      titleStr.push($(this).html());
    });
    $(".awards__titleGroup").html("");
    let typed = new Typed(".awards__titleGroup", {
      strings: titleStr,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1000,
      startDelay: 1000,
      loop: false,
      showCursor: false,
    });
    typed.stop();
    typed.reset();
    setTimeout(() => {
      typed.start();
    }, 1000);
    $(".js-fadeText").each(function () {
      let thisEl = $(this);
      let str = thisEl.text().split("");
      $(this).text("");
      str.forEach((char) => {
        let span = document.createElement("span");
        span.innerText = char;
        thisEl.append(span);
      });
    });

    $(".js-fadeText").each(function (i) {
      $(this)
        .children("span")
        .each(function (j) {
          setTimeout(() => {
            $(this).css("opacity", "1");
          }, (i * 20 + j) * 10);
        });
    });
  },
};
</script>

<style lang="scss">
.awards {
  &__content {
    .js-fadeText {
      span {
        opacity: 0;
        transition: opacity 0.6s linear;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.awards {
  &__kv {
    @include rect(100vw, calc(100vh - $height-navbar));
    height: calc(var(--vh, 1vh) * 100 - $height-navbar);
    @include flex;
    @include font(56px);
  }
  &__titleGroup {
    @include flex(column);
    .has-cursor {
      &::before {
        @include beaf;
        @include rect(calc($space-xs / 2), 62%);
        background: $c-text-primary;
        @include poa(l, 0, calc($space-xs * -1), 0);
        transform: translateY(5%);
      }
    }
  }
  &__title,
  &__subTitle {
    @include font(56px);
  }
  &__content {
    max-width: 635px;
    margin: auto;
    & + .awards__content {
      margin-top: calc($space-xxl * 5);
    }
    h4 {
      @include font(56px);
      color: $c-brand1-lighter;
    }
    h6 {
      margin-top: $space-xl;
      @include font(24px);
    }
    h5 {
      @include font(36px);
      display: inline-block;
      &.is-heightLight {
        color: $c-brand1;
        margin-left: calc($space-xl / 2);
      }
    }
    p {
      @include font(24px);
    }
    ul {
      margin-top: $space-xl;
      margin-left: calc(12px + 20px);
    }
    li {
      & + li {
        margin-top: $space-xl;
      }
      p {
        color: #dcdcdc;
      }
      &::before {
        @include beaf;
        @include rect(12px, 12px);
        @include poa(calc((12px + 20px) * -1), 0, r, 0);
        background: $c-text-primary;
      }
    }
  }
  &__btnGroup {
    @include rect(100%, auto);
    max-width: 1370px;
    @include flex(column);
    margin-top: calc($space-m * 10);
    margin-bottom: calc($space-xl * 5);
    margin-left: auto;
    margin-right: auto;
  }
  &__cta {
    @include rect(100%, auto);
    display: block;
    @include font(72px);
    color: $c-brand1;
    @include flex;
    background: white;
    padding: $space-s;
  }
}
</style>
