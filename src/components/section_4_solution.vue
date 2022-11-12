<template lang="pug">
#solution
  .solution__titleGroup
    h2.solution__title
      span.solution__title-1 年度最強合作
      span.solution__title-2 三大主題來襲
  .solution__content
    ul.solution__lists
      li.solution__item.solution__item-1
        .solution__info
          .solution__infoSubTitle.is-cubeFont Week1
          .solution__infoTitle The F2E 活動網站設計
          .solution__sponsor 版塊設計
          .solution__tag #視差滾動
        .solution__bottom
          .solution__flag.solution__flag-1
            img.flag-img-1(src="@/assets/images/flag-1.png")
            img.flag-img-2(src="@/assets/images/flag-2.png")
            img.flag-img-3(src="@/assets/images/flag-3.png")
            img.flag-img-4(src="@/assets/images/flag-4.png")
          a.solution__link.js-cursorHover(href="https://2022.thef2e.com/news/week1" target="_blank")
            .link__shadow
            .link__text 查看關卡細節
      li.solution__item.solution__item-2
        .solution__info
          .solution__infoSubTitle.is-cubeFont Week2
          .solution__infoTitle 今晚，我想來點點簽
          .solution__sponsor 凱鈿行動科技
          .solution__tag #canvas
        .solution__bottom
          .solution__flag.solution__flag-2
            img.flag-img-1(src="@/assets/images/flag-1.png")
            img.flag-img-2(src="@/assets/images/flag-2.png")
            img.flag-img-3(src="@/assets/images/flag-3.png")
            img.flag-img-4(src="@/assets/images/flag-4.png")
          a.solution__link.js-cursorHover(href="https://2022.thef2e.com/news/week2" target="_blank")
            .link__shadow
            .link__text 查看關卡細節
      li.solution__item.solution__item-3
        .solution__info
          .solution__infoSubTitle.is-cubeFont Week3
          .solution__infoTitle Scrum 新手村
          .solution__sponsor 鈦坦科技
          .solution__tag #JS draggable
        .solution__bottom
          .solution__flag.solution__flag-3
            img.flag-img-1(src="@/assets/images/flag-1.png")
            img.flag-img-2(src="@/assets/images/flag-2.png")
            img.flag-img-3(src="@/assets/images/flag-3.png")
            img.flag-img-4(src="@/assets/images/flag-4.png")
          a.solution__link.js-cursorHover(href="https://2022.thef2e.com/news/week3" target="_blank")
            .link__shadow
            .link__text 查看關卡細節
    .solution__car
      img(src="@/assets/images/car-right.gif")
</template>

<script>
export default {
  name: "section_4_solution",
  mounted: function () {

    const s4TL1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".solution__titleGroup",
        start: "top top",
        end: "200% top",
        pin: true,
        scrub: true,
      },
    });
    gsap.set(".solution__title-1", {
      scale: "0",
    });
    s4TL1
      .to(".solution__title-1", {
        opacity: 1,
        scale: "2",
        duration: 20,
      })
      .to(".solution__title-1", {
        opacity: 0,
        scale: "4",
        duration: 20,
        delay: 10,
      });
    gsap.set(".solution__title-2", {
      scale: "0",
    });
    s4TL1
      .to(".solution__title-2", {
        opacity: 1,
        scale: "2",
        duration: 20,
      })
      .to(".solution__title-2", {
        opacity: 0,
        scale: "4",
        duration: 20,
        delay: 10,
      })
      .to(".solution__title-2", {
        opacity: 0,
        scale: "4",
        duration: 20,
      });
    const s4TL2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".solution__content",
        start: "top top",
        end: "170% top",
        pin: true,
        scrub: true,
      },
    });
    gsap.set(".solution__content", {
      opacity: 0,
    });
    s4TL2.to(".solution__content", {
      opacity: 1,
      duration: 10,
    });
    s4TL2.to(".solution__flag-1 .flag-img-2", {
      display: "block",
      duration: 3,
      delay: 10,
    });
    s4TL2
      .to(".solution__flag-1 .flag-img-2", {
        display: "none",
        duration: 1,
      })
      .to(".solution__flag-1 .flag-img-3", {
        display: "block",
        duration: 3,
      });
    s4TL2
      .to(".solution__flag-1 .flag-img-3", {
        display: "none",
        duration: 1,
      })
      .to(".solution__flag-1 .flag-img-4", {
        display: "block",
        duration: 3,
      });
    gsap.set(".solution__lists", {
      xPercent: "0",
    });
    s4TL2.to(".solution__lists", {
      xPercent: "-100",
      duration: 50,
      delay: 10,
    });
    s4TL2.to(".solution__flag-2 .flag-img-2", {
      display: "block",
      duration: 3,
    });
    s4TL2
      .to(".solution__flag-2 .flag-img-2", {
        display: "none",
        duration: 1,
      })
      .to(".solution__flag-2 .flag-img-3", {
        display: "block",
        duration: 3,
      });
    s4TL2
      .to(".solution__flag-2 .flag-img-3", {
        display: "none",
        duration: 1,
      })
      .to(".solution__flag-2 .flag-img-4", {
        display: "block",
        duration: 3,
      });
    s4TL2.to(".solution__lists", {
      xPercent: "-200",
      duration: 50,
      delay: 10,
    });
    s4TL2.to(".solution__flag-3 .flag-img-2", {
      display: "block",
      duration: 3,
    });
    s4TL2
      .to(".solution__flag-3 .flag-img-2", {
        display: "none",
        duration: 1,
      })
      .to(".solution__flag-3 .flag-img-3", {
        display: "block",
        duration: 3,
      });
    s4TL2
      .to(".solution__flag-3 .flag-img-3", {
        display: "none",
        duration: 1,
      })
      .to(".solution__flag-3 .flag-img-4", {
        display: "block",
        duration: 1,
      })
      .to(".solution__flag-3 .flag-img-4", {
        display: "block",
        duration: 1,
        delay: 10,
      });
  },
};
</script>

<style lang="scss" scoped>
#solution {
  margin-top: -50vh;
  margin-top: calc(var(--vh, 1vh) * -50);
  background: $c-bg;
}
.solution {
  &__titleGroup {
    @include rect(100vw, 100vh);
    height: calc(var(--vh, 1vh) * 100);
    @include flex;
    overflow: hidden;
  }
  &__title {
    @include rect;
    @include font(72, 1.2, $fw-primary, 5);
    @include poa;
    @include flex;
    span {
      @include rect;
      @include poa;
      @include flex;
      text-shadow: 0 0 calc($space-xs / 2) $c-brand2;
    }
  }
  &__content {
    @include rect(100vw, 100vh);
    height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
  }
  &__lists {
    @include rect(100%, calc(100% / 2));
    @include flex(row, flex-start, flex-start);
  }
  &__bottom {
    @include flex(column);
  }
  &__item {
    flex: 0 0 100vw;
    @include rect(100vw, 100vh);
    height: calc(var(--vh, 1vh) * 100);
    @include flex(column, space-between);
    padding: 6rem 0;
    &-1 {
      background: $c-brand1;
      .solution__infoSubTitle {
        color: $c-brand1-lighter;
      }
    }
    &-2 {
      background: #76b9d6;
      .solution__infoSubTitle {
        color: #0061a1;
      }
    }
    &-3 {
      background: #215400;
      .solution__infoSubTitle {
        color: #c7ffa3;
      }
    }
  }
  &__info {
    @include flex(column);
  }
  &__infoSubTitle {
    @include font(52, 1.2);
  }
  &__infoTitle {
    @include font(72, 1.2, $fw-primary, 5);
    margin-bottom: $space-xl;
  }
  &__sponsor {
    @include font(36);
  }
  &__tag {
    @include font(36);
  }
  &__link {
    @include font(36);
    color: $c-brand1;
    .link {
      &__text {
        background: white;
        padding: $space-xs $space-xl;
        transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
      }
      &__shadow {
        @include rect;
        @include poa;
        background: $c-brand1-lighter;
        transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        &::after {
          @include beaf;
          @include rect(100%, 0);
          background: $c-brand1-lighter;
          @include poa(0, 0, r, b);
          transform-origin: left top;
          transform: skewX(45deg);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        &::before {
          @include beaf;
          @include rect(100%, 0);
          background: $c-brand1-lighter;
          @include poa(l, t, 0, 0);
          transform-origin: right top;
          transform: translateY(100%) skewX(45deg);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
      }
    }
    &:active {
      .link {
        &__text {
          background: $c-brand1-dark;
          transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1),
            background 0.3s 0.2s cubic-bezier(0.33, 1, 0.68, 1);
        }
      }
    }
    &:hover {
      .link {
        &__shadow {
          &::before,
          &::after {
            @include rect(100%, $space-xs);
          }
        }
        &__text {
          transform: translate($space-xs, $space-xs);
        }
      }
    }
  }
  &__car {
    @include img(12.9325rem, 5.1875rem);
    @include poa(0, t, 0, calc(6rem + 8rem));
    animation: solution-car 0.5s linear infinite alternate;
    img {
      transform: translateX(18%);
    }
    @keyframes solution-car {
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
  &__flag {
    @include img(8.75rem, 14.3125rem);
    margin-top: $space-xxl;
    margin-bottom: $space-l;
    @include flex(row, flex-end);
    overflow: hidden;
    transform: translateX(-10%);
    img {
      @include poa;
      display: none;
    }
    .flag-img-1 {
      display: block;
    }
  }
}
</style>
