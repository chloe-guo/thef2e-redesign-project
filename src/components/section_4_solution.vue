<template lang="pug">
#solution
  .solution__titleGroup
    h2.solution__title 年度最強合作，三大主題來襲
    h3.solution__SubTitle 各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
  .solution__content
    ul.solution__lists
      li.solution__item.solution__item-1
        .solution__info
          .solution__infoSubTitle.is-cubeFont Week1
          .solution__infoTitle The F2E 活動網站設計
          .solution__sponsor 版塊設計
          .solution__tag #視差滾動
        .solution__flag.solution__flag-1
          img.flag-img-1(src="@/assets/images/flag-1.png")
          img.flag-img-2(src="@/assets/images/flag-2.png")
          img.flag-img-3(src="@/assets/images/flag-3.png")
          img.flag-img-4(src="@/assets/images/flag-4.png")
        a.solution__link(href="https://2022.thef2e.com/news/week1" target="_blank")
          .link__shadow
          .link__text 查看關卡細節
      li.solution__item.solution__item-2
        .solution__info
          .solution__infoSubTitle.is-cubeFont Week2
          .solution__infoTitle 今晚，我想來點點簽
          .solution__sponsor 凱鈿行動科技
          .solution__tag #canvas
        .solution__flag.solution__flag-2
          img.flag-img-1(src="@/assets/images/flag-1.png")
          img.flag-img-2(src="@/assets/images/flag-2.png")
          img.flag-img-3(src="@/assets/images/flag-3.png")
          img.flag-img-4(src="@/assets/images/flag-4.png")
        a.solution__link(href="https://2022.thef2e.com/news/week2" target="_blank")
          .link__shadow
          .link__text 查看關卡細節
      li.solution__item.solution__item-3
        .solution__info
          .solution__infoSubTitle.is-cubeFont Week3
          .solution__infoTitle Scrum 新手村
          .solution__sponsor 鈦坦科技
          .solution__tag #JS draggable
        .solution__flag.solution__flag-3
          img.flag-img-1(src="@/assets/images/flag-1.png")
          img.flag-img-2(src="@/assets/images/flag-2.png")
          img.flag-img-3(src="@/assets/images/flag-3.png")
          img.flag-img-4(src="@/assets/images/flag-4.png")
        a.solution__link(href="https://2022.thef2e.com/news/week3" target="_blank")
          .link__shadow
          .link__text 查看關卡細節
    .solution__car
      img(src="@/assets/images/card-right.gif")
</template>

<script>
import { gsap, ScrollTrigger, EasePack } from "gsap/all";

export default {
  name: "section_4_solution",
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    const s4TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".solution__content",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        markers: true,
      },
    });
    gsap.set(".solution__content", {
      opacity: 0,
    });
    s4TL.to(".solution__content", {
      opacity: 1,
      duration: 5,
      ease: "power2.out",
    });
    s4TL.to(".solution__flag-1 .flag-img-2", {
      display: "block",
      duration: 1,
      ease: "power2.out",
    });
    s4TL
      .to(".solution__flag-1 .flag-img-2", {
        display: "none",
        duration: 1,
        ease: "power2.out",
      })
      .to(".solution__flag-1 .flag-img-3", {
        display: "block",
        duration: 1,
        ease: "power2.out",
      });
    s4TL
      .to(".solution__flag-1 .flag-img-3", {
        display: "none",
        duration: 1,
        ease: "power2.out",
      })
      .to(".solution__flag-1 .flag-img-4", {
        display: "block",
        duration: 1,
        ease: "power2.out",
      });
    gsap.set(".solution__lists", {
      xPercent: "0",
    });
    s4TL.to(".solution__lists", {
      xPercent: "-100",
      duration: 50,
      delay: 10,
    });
    s4TL.to(".solution__flag-2 .flag-img-2", {
      display: "block",
      duration: 1,
      ease: "power2.out",
    });
    s4TL
      .to(".solution__flag-2 .flag-img-2", {
        display: "none",
        duration: 1,
        ease: "power2.out",
      })
      .to(".solution__flag-2 .flag-img-3", {
        display: "block",
        duration: 1,
        ease: "power2.out",
      });
    s4TL
      .to(".solution__flag-2 .flag-img-3", {
        display: "none",
        duration: 1,
        ease: "power2.out",
      })
      .to(".solution__flag-2 .flag-img-4", {
        display: "block",
        duration: 1,
        ease: "power2.out",
      });
    s4TL.to(".solution__lists", {
      xPercent: "-200",
      duration: 50,
      delay: 10,
    });
    s4TL.to(".solution__flag-3 .flag-img-2", {
      display: "block",
      duration: 1,
      ease: "power2.out",
    });
    s4TL
      .to(".solution__flag-3 .flag-img-2", {
        display: "none",
        duration: 1,
        ease: "power2.out",
      })
      .to(".solution__flag-3 .flag-img-3", {
        display: "block",
        duration: 1,
        ease: "power2.out",
      });
    s4TL
      .to(".solution__flag-3 .flag-img-3", {
        display: "none",
        duration: 1,
        ease: "power2.out",
      })
      .to(".solution__flag-3 .flag-img-4", {
        display: "block",
        duration: 1,
        ease: "power2.out",
      });
    s4TL.to(".solution__content", {
      opacity: 0,
      duration: 5,
      delay: 10,
      ease: "power2.out",
    });
  },
};
</script>

<style lang="scss" scoped>
.solution {
  &__content {
    @include rect(100vw, 200vh);
    height: calc(var(--vh, 1vh) * 200);
    overflow: hidden;
  }
  &__lists {
    @include rect(100%, calc(100% / 2));
    @include flex(row, flex-start, flex-start);
  }
  &__item {
    flex: 0 0 100vw;
    @include rect(100vw, 100vh);
    height: calc(var(--vh, 1vh) * 100);
    @include flex(column);
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
    @include font(52px, 1.2);
  }
  &__infoTitle {
    @include font(72px, 1.2, $fw-primary, 5px);
    margin-bottom: $space-xl;
  }
  &__sponsor {
    @include font(36px);
  }
  &__tag {
    @include font(36px);
  }
  &__link {
    @include font(36px);
    color: $c-brand1;
    .link {
      &__text {
        background: white;
        padding: $space-xs $space-xl;
        transition: all 0.2s linear;
      }
      &__shadow {
        @include rect;
        @include poa;
        background: $c-brand1-lighter;
        transition: all 0.2s linear;
        &::before {
          @include beaf;
          @include rect(0, 0);
          background: $c-brand1-lighter;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
          @include poa(0, t, r, 0);
          transform: translate(-5%, 90%);
          transition: all 0.2s linear;
        }
        &::after {
          @include beaf;
          @include rect(0, 0);
          background: $c-brand1-lighter;
          clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
          @include poa(l, 0, 0, b);
          transform: translate(90%, -5%);
          transition: all 0.2s linear;
        }
      }
    }
    &:active {
      .link {
        &__text {
          background: $c-brand1-dark;
        }
      }
    }
    &:hover {
      .link {
        &__shadow {
          &::before,
          &::after {
            @include rect(calc($space-xs + 1px), calc($space-xs + 1px));
          }
        }
        &__text {
          transform: translate($space-xs, $space-xs);
        }
      }
    }
  }
  &__car {
    @include img(207px, 83px);
    @include poa(0, t, 0, 127vh);
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
    @include img(140px, 229px);
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
