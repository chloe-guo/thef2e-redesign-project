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
    a.awards__cta#awards-cta.js-cursorHover(href="https://2022.thef2e.com" target="_blank")
      .btn__shadow
      .btn__text 立即註冊報名！
</template>

<script>
export default {
  mounted: function () {

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
      duration: 0,
    });
    s6TL.to(
      ".awards__car-gif",
      {
        display: "block",
        duration: 0,
      },
      "<"
    );
    s6TL
      .to(".awards__car-main", {
        left: "15vw",
        duration: 3,
      })
      .to(".awards__car-main", {
        left: "40vw",
        bottom: "5.9vw",
        rotate: "6",
        duration: 4,
      })
      .to(".awards__car-main", {
        left: "42vw",
        bottom: "5.3vw",
        rotate: "3",
        duration: 5,
      })
      .to(".awards__car-main", {
        left: "46vw",
        bottom: "4.4vw",
        rotate: "-2",
        duration: 2,
      })
      .to(".awards__car-main", {
        left: "56vw",
        bottom: "4.8vw",
        rotate: "-4",
        duration: 4,
      })
      .to(".awards__car-main", {
        left: "100vw",
        bottom: "6.2vw",
        rotate: "-1",
        duration: 10,
      })
      .to(".awards__car-main", {
        left: "150vw",
        rotate: "3",
        duration: 20,
      });

    let titleStr = [];
    $(".js-typed").each(function () {
      titleStr.push($(this).html());
    });
    $(".awards__titleGroup").html("");
    let typed;
    function scrollfunc() {
      if (
        $(window).scrollTop() >=
          $(".awards__kv").offset().top - ($(".awards__kv").height() / 3) * 2 &&
        $(window).scrollTop() <=
          $(".awards__kv").offset().top + $(".awards__kv").height()
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
          $(".awards__content-1").offset().top - $(window).height() &&
        $(window).scrollTop() <=
          $(".awards__content-2").offset().top +
            $(".awards__content-2").height() +
            $(window).height() / 2
      ) {
        if (!$(".awards__content-1").hasClass("js-typed")) {
          $(".awards__content-1").addClass("js-typed");
          typingText();
        }
      } else {
        if ($(".awards__content-1").hasClass("js-typed")) {
          $(".awards__content-1").removeClass("js-typed");
          $(".awards__content span").css("opacity", "0");
        }
      }
    }
    scrollfunc();
    $(window).on("scroll", function () {
      scrollfunc();
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
            }, (i * 12 + j) * 5);
          });
      });
    }

    //Detect Closest Edge
    function closestEdgeX(x, w) {
      let leftEdgeDist = distMetric(x, 0);
      let rightEdgeDist = distMetric(x, w);
      console.log(leftEdgeDist, rightEdgeDist);
      let min = Math.min(leftEdgeDist, rightEdgeDist);
      switch (min) {
        case leftEdgeDist:
          return "left";
        case rightEdgeDist:
          return "right";
      }
    }
    function closestEdgeY(y, h) {
      let topEdgeDist = distMetric(y, 0);
      let bottomEdgeDist = distMetric(y, h);
      console.log(topEdgeDist, bottomEdgeDist);
      let min = Math.min(topEdgeDist, bottomEdgeDist);
      switch (min) {
        case topEdgeDist:
          return "top";
        case bottomEdgeDist:
          return "bottom";
      }
    }

    //Distance Formula
    function distMetric(v, v2) {
      let diff = v - v2;
      return diff * diff;
    }

    let box = document.getElementById("awards-cta");

    box.onmouseenter = function (e) {
      let offset = this.getBoundingClientRect();
      let x = e.pageX - offset.left - $(window).scrollLeft();
      let y = e.pageY - offset.top - $(window).scrollTop();
      let edgeX = closestEdgeX(x, this.clientWidth);
      let edgeY = closestEdgeY(y, this.clientHeight);
      console.log(edgeX, edgeY);
      let btn = $(this);
      switch (true) {
        case edgeX == "left" && edgeY == "top":
          btn.removeClass("is-tr is-br is-bl").addClass("is-tl");
          break;
        case edgeX == "left" && edgeY == "bottom":
          btn.removeClass("is-tr is-tl is-br").addClass("is-bl");
          break;
        case edgeX == "right" && edgeY == "top":
          btn.removeClass("is-tl is-br is-bl").addClass("is-tr");
          break;
        case edgeX == "right" && edgeY == "bottom":
          btn.removeClass("is-tr is-tl is-bl").addClass("is-br");
          break;
      }
    };
  },
};
</script>

<style lang="scss">
#awards {
  background: $c-bg;
}
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
        animation: typed__cursor 0.5s cubic-bezier(0.33, 1, 0.68, 1) infinite
          alternate;
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
    max-width: 39.675rem;
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
      margin-left: calc(0.75rem + 1.25rem);
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
        @include rect(0.75rem, 0.75rem);
        @include poa(calc((0.75rem + 1.25rem) * -1), 0, r, 0);
        background: $c-text-primary;
      }
    }
  }
  &__btnGroup {
    @include rect(88vw, auto);
    max-width: 85.625rem;
    @include flex(column);
    margin-top: calc($space-m * 10);
    margin-bottom: calc($space-xl * 5);
    margin-left: auto;
    margin-right: auto;
  }
  &__cta {
    @include rect(100%, auto);
    .btn {
      &__shadow {
        @include rect;
        @include poa;
        background: $c-brand1-lighter;
        transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
        &::after {
          @include beaf;
          @include rect(100%, 0);
          background: $c-brand1-lighter;
          @include poa(0, 0, r, b);
          transition: height 0.6s cubic-bezier(0.33, 1, 0.68, 1);
        }
        &::before {
          @include beaf;
          @include rect(100%, 0);
          background: $c-brand1-lighter;
          @include poa(l, t, 0, 0);
          transition: height 0.6s cubic-bezier(0.33, 1, 0.68, 1);
        }
      }
      &__text {
        @include rect;
        @include flex;
        background: white;
        @include font(72, 1.5, $fw-primary, 5);
        color: $c-brand1;
        padding: $space-s;
        transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
      }
    }
    &:hover {
      .btn__shadow {
        &::before,
        &::after {
          @include rect(100%, $space-s);
        }
      }
    }
    &.is-tl {
      .btn__shadow {
        &::after {
          transform-origin: left top;
          transform: skewX(45deg);
        }
        &::before {
          transform-origin: right top;
          transform: translateY(100%) skewX(45deg);
        }
      }
      &:hover {
        .btn__text {
          transform: translate($space-s, $space-s);
        }
      }
      &:active {
        .btn__text {
          background: $c-brand1-dark;
          transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1),
            background 0.3s 0.2s cubic-bezier(0.33, 1, 0.68, 1);
        }
      }
    }
    &.is-bl {
      .btn__shadow {
        &::after {
          transform-origin: left bottom;
          transform: translateY(-100%) skewX(-45deg);
        }
        &::before {
          transform-origin: right bottom;
          transform: skewX(-45deg);
        }
      }
      &:hover {
        .btn__text {
          transform: translate($space-s, calc($space-s * -1));
        }
      }
    }
    &.is-tr {
      .btn__shadow {
        &::after {
          transform-origin: left top;
          transform: skewX(-45deg);
        }
        &::before {
          transform-origin: right top;
          transform: translateY(100%) skewX(-45deg);
        }
      }
      &:hover {
        .btn__text {
          transform: translate(calc($space-s * -1), $space-s);
        }
      }
    }
    &.is-br {
      .btn__shadow {
        &::after {
          transform-origin: left bottom;
          transform: translateY(-100%) skewX(45deg);
        }
        &::before {
          transform-origin: left bottom;
          transform: skewX(45deg);
        }
      }
      &:hover {
        .btn__text {
          transform: translate(calc($space-s * -1), calc($space-s * -1));
        }
      }
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
      @include img(19.3vw, 6.9vw);
      @include poa(9.4vw, t, r, 6.3vw);
      transform-origin: left bottom;
      transform: rotate(-2.5deg);
      img {
        @include poa;
        animation: awards-car 0.5s cubic-bezier(0.33, 1, 0.68, 1) infinite
          alternate;
        @keyframes awards-car {
          0%,
          50%,
          70%,
          100% {
            transform: translateY(-1.5px);
          }
          60% {
            transform: translateY(0);
          }
        }
      }
    }
    &-gif {
      display: none;
    }
  }
}
</style>
