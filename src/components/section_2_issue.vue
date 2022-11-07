<template lang="pug">
#issue
    ul.issue__lists
        li.issue__item.issue__item-1
          .issue__content
            .issue__background
                .issue-1-web
                    img(src="@/assets/images/s2-issue-1-web.gif")
                .issue-1-car
                    img(src="@/assets/images/car-right.gif")
                .issue-1-dialog.is-cubeFont
                    .dialog__text
                      span I
                      sapn '
                      span m
                      span &nbsp;
                      span c
                      span o
                      span o
                      span l
                      span !
            h6.issue__text.issue-1-text(data-stroke="羨慕別人的酷酷網頁動畫...") 羨慕別人的酷酷網頁動畫...
        li.issue__item.issue__item-2
          .issue__content
            .issue__background
                .issue-2-soldier
                    img(src="@/assets/images/s2-issue-2-soldier.png")
                .issue-2-dialog.is-cubeFont
                    .dialog__text
            h6.issue__text.issue-2-text(data-stroke="滿足不了同事的許願...") 滿足不了同事的許願...
        li.issue__item.issue__item-3
          .issue__content
            .issue__background
                .issue-3-tree
                    img(src="@/assets/images/s2-issue-3-tree.png")
                .issue-3-soldier
                    img(src="@/assets/images/s2-issue-3-soldier.png")
            h6.issue__text.issue-3-text(data-stroke="動畫技能樹太雜無從下手...") 動畫技能樹太雜無從下手...
</template>

<script>
import { gsap, ScrollTrigger, EasePack } from "gsap/all";

export default {
  name: "section_2_issue",
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    //===== issue__item-1 =====
    const s2issue1TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".issue__item-1",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });
    gsap.set(".issue__item-1 .issue__content", {
      opacity: 0,
      xPercent: "-100",
    });
    s2issue1TL.to(".issue__item-1 .issue__content", {
      opacity: 1,
      xPercent: "0",
      duration: 10,
      ease: "power2.out",
    });
    gsap.set(".issue-1-web", {
      opacity: 0,
      scale: 0,
    });
    s2issue1TL
      .to(
        ".issue-1-web",
        {
          opacity: 1,
          duration: 8,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        ".issue-1-web",
        {
          scale: 1,
          duration: 10,
          ease: "power4.out",
        },
        "<"
      );
    gsap.set(".issue-1-car img", {
      opacity: 0,
      xPercent: "-50",
    });
    s2issue1TL.to(".issue-1-car img", {
      opacity: 1,
      xPercent: "0",
      duration: 15,
      ease: "back.out(0.7)",
    });
    gsap.set(".issue-1-dialog", {
      opacity: 0,
      scale: "0",
    });
    s2issue1TL.to(
      ".issue-1-dialog",
      {
        opacity: 1,
        scale: "1",
        duration: 12,
        delay: 5,
        ease: "back.out(0.7)",
      },
      "<"
    );
    gsap.set(".issue-1-text", {
      opacity: 0,
      xPercent: "-50",
    });
    s2issue1TL
      .to(
        ".issue-1-text",
        {
          xPercent: "0",
          duration: 18,
          delay: 6,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        ".issue-1-text",
        {
          opacity: 1,
          duration: 25,
          delay: 3,
          ease: "power3.out",
        },
        "<"
      );
    s2issue1TL.to(".issue__item-1 .issue__content", {
      opacity: 0,
      yPercent: "-100",
      duration: 20,
      delay: 50,
      ease: "power2.out",
    });

    //===== issue__item-2 =====
    const s2issue2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".issue__item-2",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });
    gsap.set(".issue__item-2 .issue__content", {
      opacity: 0,
      xPercent: "100",
    });
    s2issue2TL.to(".issue__item-2 .issue__content", {
      opacity: 1,
      xPercent: "0",
      duration: 10,
      ease: "power2.out",
    });
    gsap.set(".issue-2-soldier", {
      opacity: 0,
      xPercent: "50",
    });
    s2issue2TL.to(
      ".issue-2-soldier",
      {
        opacity: 1,
        xPercent: "0",
        duration: 25,
        ease: "power3.out",
      },
      "<"
    );
    gsap.set(".issue-2-dialog", {
      opacity: 0,
      scale: 0,
    });
    s2issue2TL.to(".issue-2-dialog", {
      opacity: 1,
      scale: 1,
      duration: 12,
      ease: "power1.out",
    });
    gsap.set(".issue-2-text", {
      opacity: 0,
      xPercent: "50",
    });
    s2issue2TL
      .to(
        ".issue-2-text",
        {
          xPercent: "-50",
          duration: 18,
          delay: 6,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        ".issue-2-text",
        {
          opacity: 1,
          duration: 25,
          delay: 3,
          ease: "power3.out",
        },
        "<"
      );
    s2issue2TL.to(".issue__item-2 .issue__content", {
      opacity: 0,
      yPercent: "-100",
      duration: 20,
      delay: 50,
      ease: "power2.out",
    });

    //===== issue__item-3 =====
    const s2issue3TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".issue__item-3",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });
    gsap.set(".issue__item-3 .issue__content", {
      opacity: 0,
      xPercent: "-100",
    });
    s2issue3TL.to(".issue__item-3 .issue__content", {
      opacity: 1,
      xPercent: "0",
      duration: 10,
      ease: "power2.out",
    });
    gsap.set(".issue-3-tree", {
      opacity: 0,
    });
    s2issue3TL.to(
      ".issue-3-tree",
      {
        opacity: 1,
        duration: 20,
        ease: "power3.out",
      },
      "<"
    );
    gsap.set(".issue-3-text", {
      opacity: 0,
      xPercent: "-50",
    });
    s2issue3TL
      .to(".issue-3-text", {
        xPercent: "0",
        duration: 18,
        delay: 6,
        ease: "power3.out",
      })
      .to(
        ".issue-3-text",
        {
          opacity: 1,
          duration: 25,
          delay: 3,
          ease: "power3.out",
        },
        "<"
      );
    s2issue3TL.to(".issue__item-3 .issue__content", {
      opacity: 0,
      yPercent: "-100",
      duration: 20,
      delay: 50,
      ease: "power2.out",
    });
  },
};
</script>

<style lang="scss" scoped>
#issue {
  z-index: 1;
}
.issue {
  &__list {
    @include rect(100%, auto);
    clear: both;
  }
  &__item {
    @include rect(100%, 100vh);
    height: calc(var(--vh, 1vh) * 100);
    &-1,
    &-3 {
      @include flex(row, flex-start);
      .issue__text {
        @include poa(l, 0, 0, 0);
        transform: translateX(50%);
      }
    }
    &-2 {
      @include flex(row, flex-end);
      .issue__text {
        @include poa(0, 0, r, 0);
        transform: translateX(-50%);
      }
    }
  }
  &__content {
    @include rect(61.25rem, 46.875rem);
    max-height: 68vh;
    max-height: calc(var(--vh, 1vh) * 68);
  }
  &__text {
    display: block;
    @include textstroke(6, $c-brand1-dark, 36, 1.5, $fw-primary, 2);
  }
  &__background {
    @include rect;
    background: $c-brand1;
  }
  &-1 {
    &-web {
      @include img(65%, 75.3%);
      @include poa;
    }
    &-car {
      @include img(34.3%, 23.7%);
      @include poa(35%, t, r, 32%);
      animation: issue-1-car 1.2s linear infinite alternate;
      @keyframes issue-1-car {
        0% {
          transform: translateX(-4%);
        }
        100% {
          transform: translateX(4%);
        }
      }
    }
    &-dialog {
      @include rect(39.9%, 20.5%);
      background: url(@/assets/images/s2-issue-1-dialog.png);
      @include bg;
      @include poa(58%, t, r, 86.5%);
      @include flex;
      transform-origin: 10% bottom;
      .dialog__text {
        color: $c-brand1-dark;
        @include font(32);
        transform: translateY(-38%);
        span {
          display: inline-block;
          @for $i from 1 through 9 {
            &:nth-child(#{$i}) {
              animation: issue-1-dialog-text
                0.6s
                #{(9 - $i) *
                -0.1}s
                linear
                infinite
                alternate;
            }
          }
          @keyframes issue-1-dialog-text {
            0%,
            100% {
              transform: translateY(0);
            }
            45%,
            55% {
              transform: translateY(-6%);
            }
          }
        }
      }
    }
  }
  &-2 {
    &-soldier {
      @include rect(calc(76.25rem / 2), 36.75rem);
      overflow: hidden;
      @include poa(0, t, 0, 0);
      transform: translateX(5%);
      img {
        @include rect(76.25rem, 36.75rem);
        @include poa(0, 0, r, 0);
        animation: issue-2-soldier 1.2s linear infinite;
        @keyframes issue-2-soldier {
          0%,
          49% {
            @include poa(0, 0, r, 0);
          }
          50%,
          100% {
            @include poa(l, 0, 0, 0);
          }
        }
      }
    }
    &-dialog {
      @include rect(34.8%, 34.2%);
      background: url(@/assets/images/s2-issue-2-dialog.png);
      @include bg;
      @include poa(l, t, 72%, 76%);
      @include flex;
      transform-origin: 90% bottom;
      .dialog__text {
        @include flex;
        transform: translateY(-6%);
        &:before {
          content: "!@#$%...";
          color: $c-brand1-dark;
          @include font(32);
          animation: issue-2-dialog-text 1.2s linear infinite;
          @keyframes issue-2-dialog-text {
            0% {
              content: "!@#$%...";
            }
            33% {
              content: "*$%#!...";
            }
            66% {
              content: "*&!@#...";
            }
            100% {
              content: "*#$^&...";
            }
          }
        }
      }
    }
  }
  &-3 {
    &-tree {
      @include img(67.7%, 116.5%);
      @include poa(l, t, 14%, 0);
      overflow: hidden;
      img {
        @include rect(auto, 100%);
        @include poa(0, 0, r, 0);
        animation: issue-3-tree 2s linear infinite;
        @keyframes issue-3-tree {
          0%,
          49% {
            @include poa(0, 0, r, 0);
          }
          50%,
          100% {
            @include poa(l, 0, 0, 0);
          }
        }
      }
    }
    &-soldier {
      @include img(26.2%, 41.4%);
      @include poa(28%, t, r, 0);
    }
  }
}
</style>
