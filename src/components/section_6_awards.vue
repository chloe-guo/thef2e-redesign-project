<template lang="pug">
#awards
  .awards__kv
    .awards__titleGroup
      .js-typed
        h2.awards__title.has-cursor 區區修煉已經無法滿足了嗎？
      .js-typed
        h3.awards__subTitle.has-cursor 還有比賽等著你！
    .awards__layers
        img.awards__layer.awards__layer-1(src="@/assets/images/s6-awards-layer-1.png")
        img.awards__layer.awards__layer-2(src="@/assets/images/s6-awards-layer-2.png")
        img.awards__layer.awards__layer-3(src="@/assets/images/s6-awards-layer-3.png")
        img.awards__car.awards__car-1(src="@/assets/images/car-1.png")
        img.awards__car.awards__car-2(src="@/assets/images/car-2.png")
        img.awards__car.awards__car-3(src="@/assets/images/car-3.png")
        img.awards__car.awards__car-4(src="@/assets/images/car-4.png")
        img.awards__car.awards__car-5(src="@/assets/images/car-5.png")
        .awards__car.awards__car-main
          img.awards__car.awards__car-gif(src="@/assets/images/car-right.gif")
          img.awards__car.awards__car-img(src="@/assets/images/car-main.png")
        img.awards__layer.awards__layer-4(src="@/assets/images/s6-awards-layer-4.png")
  .awards__content.awards__content-1
    h4.js-awards-fadeText 評審機制
    h6.js-awards-fadeText 初選：
    p.js-awards-fadeText 將由六角學院前端、UI 評審進行第一波篩選，
    p.js-awards-fadeText 並於 12/5（五）公布初選佳作名單！
    h6.js-awards-fadeText 決選：
    p.js-awards-fadeText 由三大企業針對該企業主題進行入圍獎最後篩選，
    p.js-awards-fadeText 並於 12/23（五）公布企業得獎名單！
  .awards__content.awards__content-2
    h4.js-awards-fadeText 獎項
    ul
      li
        div
          h5.js-awards-fadeText 初選佳作 共六十位
          h5.is-heightLight.js-awards-fadeText 數位獎狀
        p.js-awards-fadeText 每週主題個人組十位、團體組十組
      li
        div
          h5.js-awards-fadeText 個人企業獎 共六位
          h5.is-heightLight.js-awards-fadeText NTD 3,000/位
        p.js-awards-fadeText 每週主題各兩名，設計一位、前端一位
      li
        h5.js-awards-fadeText 團體企業獎 共三組
        h5.is-heightLight.js-awards-fadeText NTD 10,000/組
        p.js-awards-fadeText 每週主題各一組
  .awards__btnGroup
    a(href="https://2022.thef2e.com" target="_blank").awards__cta#awards-cta
      .btn__overlay
      .btn__text 立即註冊報名！
</template>

<script>
import $ from "jquery";
import Typed from "typed.js";
import { gsap, ScrollTrigger, EasePack } from "gsap/all";

export default {
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    const s6TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".awards__kv",
        start: "20% top",
        end: "bottom top",
        scrub: true,
      },
    });
    s6TL.to(".awards__car-img", {
      display: "none",
      duration: 1,
    });
    s6TL
      .to(".awards__car-main", {
        xPercent: "30",
        duration: 3,
      })
      .to(".awards__car-main", {
        xPercent: "200",
        yPercent: "8",
        rotate: "6",
        duration: 3,
      })
      .to(".awards__car-main", {
        xPercent: "300",
        rotate: "-5",
        duration: 3,
      })
      .to(".awards__car-main", {
        xPercent: "400",
        yPercent: "-4",
        rotate: "-3",
        duration: 6,
      })
      .to(".awards__car-main", {
        xPercent: "800",
        rotate: "0",
        duration: 12,
      });

    let titleStr = [];
    $(".js-typed").each(function () {
      titleStr.push($(this).html());
    });
    $(".awards__titleGroup").html("");
    let typed;
    $(window).on("scroll", function () {
      if (
        $(window).scrollTop() >=
          $(".awards__kv").offset().top - ($(".awards__kv").height() / 3) * 2 &&
        $(window).scrollTop() <=
          $(".awards__kv").offset().top + ($(".awards__kv").height() / 3) * 5
      ) {
        if (!$(".awards__titleGroup").hasClass("js-typed")) {
          $(".awards__titleGroup").addClass("js-typed");
          typed = new Typed(".awards__titleGroup", {
            strings: titleStr,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 1000,
            startDelay: 1000,
            loop: false,
            showCursor: false,
          });
        }
      } else {
        if ($(".awards__titleGroup").hasClass("js-typed")) {
          $(".awards__titleGroup").removeClass("js-typed");
          typed.destroy();
        }
      }
      if (
        $(window).scrollTop() >=
          $(".awards__content-1").offset().top -
            $(".awards__content-1").height() &&
        $(window).scrollTop() <=
          $(".awards__content-2").offset().top +
            $(".awards__content-2").height()
      ) {
        if (!$(".awards__content-1").hasClass("js-typed")) {
          $(".awards__content-1").addClass("js-typed");
          typingText();
        }
      } else {
        if ($(".awards__content-1").hasClass("js-typed")) {
          $(".awards__content-1").removeClass("js-typed");
          typingText();
        }
      }
    });

    $(".js-awards-fadeText").each(function () {
      let thisEl = $(this);
      let str = thisEl.text().split("");
      $(this).text("");
      str.forEach((char) => {
        let span = document.createElement("span");
        span.innerText = char;
        thisEl.append(span);
      });
    });

    function typingText() {
      $(".js-awards-fadeText").each(function (i) {
        $(this)
          .children("span")
          .each(function (j) {
            setTimeout(() => {
              $(this).css("opacity", "1");
            }, (i * 20 + j) * 10);
          });
      });
    }

    //Detect Closest Edge
    function closestEdge(x, y, w, h) {
      let topEdgeDist = distMetric(x, y, w / 2, 0);
      let bottomEdgeDist = distMetric(x, y, w / 2, h);
      let leftEdgeDist = distMetric(x, y, 0, h / 2);
      let rightEdgeDist = distMetric(x, y, w, h / 2);
      let min = Math.min(
        topEdgeDist,
        bottomEdgeDist,
        leftEdgeDist,
        rightEdgeDist
      );
      switch (min) {
        case leftEdgeDist:
          return "left";
        case rightEdgeDist:
          return "right";
        case topEdgeDist:
          return "top";
        case bottomEdgeDist:
          return "bottom";
      }
    }

    //Distance Formula
    function distMetric(x, y, x2, y2) {
      let xDiff = x - x2;
      let yDiff = y - y2;
      return xDiff * xDiff + yDiff * yDiff;
    }

    let box = document.getElementById("awards-cta");

    box.onmouseenter = function (e) {
      let offset = this.getBoundingClientRect();
      let x = e.pageX - offset.left - $(window).scrollLeft();
      let y = e.pageY - offset.top - $(window).scrollTop();
      let edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      let overlay = $(this).find(".btn__overlay");
      switch (edge) {
        case "left":
          overlay.css({
            top: "0%",
            left: "-100%",
          });
          overlay.animate({ left: "0%" }, 600, "linear");
          break;
        case "right":
          overlay.css({
            top: "0%",
            left: "100%",
          });
          overlay.animate({ left: "0%" }, 600, "linear");
          break;
        case "top":
          overlay.css({
            top: "-100%",
            left: "0%",
          });
          overlay.animate({ top: "0%" }, 300, "linear");
          break;
        case "bottom":
          overlay.css({
            top: "100%",
            left: "0%",
          });
          overlay.animate({ top: "0%" }, 300, "linear");
          break;
      }
    };

    box.onmouseleave = function (e) {
      let offset = this.getBoundingClientRect();
      let x = e.pageX - offset.left - $(window).scrollLeft();
      let y = e.pageY - offset.top - $(window).scrollTop();
      let edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      let overlay = $(this).find(".btn__overlay");

      switch (edge) {
        case "left":
          overlay.animate({ left: "-100%" }, 300, "linear");
          break;
        case "right":
          overlay.animate({ left: "100%" }, 300, "linear");
          break;
        case "top":
          overlay.animate({ top: "-100%" }, 300, "linear");
          break;
        case "bottom":
          overlay.animate({ top: "100%" }, 300, "linear");
          break;
      }
    };
  },
};
</script>

<style lang="scss">
.awards {
  &__content {
    .js-awards-fadeText {
      span {
        opacity: 0;
        transition: opacity 0.6s cubic-bezier(0.11, 0, 0.5, 0);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.awards {
  &__kv {
    @include rect(100vw, 120vh);
    height: calc(var(--vh, 1vh) * 120);
    @include flex;
    @include font(56);
    overflow: hidden;
  }
  &__titleGroup {
    @include rect(auto, 84px);
    @include flex(column);
    .has-cursor {
      &::before {
        @include beaf;
        @include rect(calc($space-xs / 2), 62%);
        background: $c-text-primary;
        @include poa(l, 0, calc($space-xs * -1), 0);
        transform: translateY(5%);
        animation: typed__cursor 0.5s linear infinite alternate;
        @keyframes typed__cursor {
          0%,
          40% {
            opacity: 0;
          }
          41%,
          100% {
            opacity: 1;
          }
        }
      }
    }
  }
  &__title,
  &__subTitle {
    @include font(56);
  }
  &__content {
    max-width: 635px;
    margin: auto;
    margin-top: calc($space-xxl * 5);
    h4 {
      @include font(56);
      color: $c-brand1-lighter;
    }
    h6 {
      margin-top: $space-xl;
      @include font(24);
    }
    h5 {
      @include font(36);
      display: inline-block;
      &.is-heightLight {
        color: $c-brand1;
        margin-left: calc($space-xl / 2);
      }
    }
    p {
      @include font(24);
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
    @include font(72, 1.5, $fw-primary, 5);
    color: $c-brand1;
    @include flex;
    background: white;
    padding: $space-s;
    overflow: hidden;
    .btn__overlay {
      @include rect;
      @include poa(-100%, 0%, r, b);
      background: $c-brand1-dark;
      animation-fill-mode: forwards;
    }
  }
  &__layers {
    @include rect(100%, auto);
    @include poa(0, t, 0, 0);
  }
  &__layer {
    &-1 {
      @include rect(100%, auto);
      @include poa(0, t, 0, 0);
    }
    &-2 {
      @include rect(76.6%, auto);
      @include poa(l, t, 0, 0);
    }
    &-3 {
      @include rect(72.8%, auto);
      @include poa(0, t, r, 0);
    }
    &-4 {
      @include rect(100%, auto);
      @include poa(0, t, 0, 0);
    }
  }
  &__car {
    &-1 {
      @include rect(15.1vw, auto);
      @include poa(0, t, 12vw, 5vw);
    }
    &-2 {
      @include rect(3.6vw, auto);
      @include poa(0, t, 0, 12.8vw);
    }
    &-3 {
      @include rect(7.7vw, auto);
      @include poa(l, t, 27.5vw, 9.8vw);
    }
    &-4 {
      @include rect(13.5vw, auto);
      @include poa(l, t, 16.2vw, 5.8vw);
    }
    &-5 {
      @include rect(11vw, auto);
      @include poa(l, t, 6vw, 17.3vw);
    }
    &-main {
      @include img(19.3vw, auto);
      @include poa(9.4vw, t, r, 6.3vw);
      transform-origin: left bottom;
      transform: rotate(-2.5deg);
      img {
        animation: awards-car 0.5s linear infinite alternate;
        @keyframes awards-car {
          0%,
          50%,
          70%,
          100% {
            transform: translateY(-1px);
          }
          60% {
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>
