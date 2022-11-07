<template lang="pug">
#direction
  ul.direction__lists
    li.direction__bullet
      img(src="@/assets/images/bullet.png")
    li.direction__car
      img.icon__car(src="@/assets/images/car-top.gif")
    li.direction__item.direction__item-1
      h3.direction__title.is-cubeFont SIGN UP!
      p 開放報名：
      p 10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59
      p &nbsp;
      p 截止前可修改報名組別。
    li.direction__item.direction__item-2
      h3.direction__title.is-cubeFont START!
      p 各組別開賽：
      p UI組、團體組開賽 10/31、前端組開賽 11/7
      .direction__icons
        img.icon__wall(src="@/assets/images/wall.png")
        img.icon__bom-1(src="@/assets/images/bom-1.png")
        img.icon__bom-2(src="@/assets/images/bom-2.png")
        img.icon__coin-1(src="@/assets/images/coin-1.png")
        img.icon__coin-2(src="@/assets/images/coin-2.png")
        img.icon__coin-3(src="@/assets/images/coin-3.png")
    li.direction__item.direction__item-3
      h3.direction__title.is-cubeFont UPLOAD!
      p 登陸作品：
      p 10/31(一) 中午 12:00 - 11/28(一) 中午 12:00
      .direction__icons
        img.icon__wall(src="@/assets/images/wall.png")
        img.icon__bom-1(src="@/assets/images/bom-1.png")
        img.icon__bom-2(src="@/assets/images/bom-2.png")
        img.icon__coin-1(src="@/assets/images/coin-1.png")
        img.icon__coin-2(src="@/assets/images/coin-2.png")
        img.icon__coin-3(src="@/assets/images/coin-3.png")
    li.direction__item.direction__item-4
      h3.direction__title.is-cubeFont STREAM!
      p 資深開發者到來，直播分享零阻礙！
      p &nbsp;
      p 線上直播：
      p 11/3 - 11/24（每週四）
      .direction__icons
        img.icon__wall(src="@/assets/images/wall.png")
        img.icon__bom-1(src="@/assets/images/bom-1.png")
        img.icon__bom-2(src="@/assets/images/bom-2.png")
        img.icon__box-1(src="@/assets/images/box-1.png")
        img.icon__box-2(src="@/assets/images/box-2.png")
        img.icon__box-3(src="@/assets/images/box-3.png")
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "section_5_direction",
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    const s5item1TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".direction__item-1",
        start: "-50% top",
        end: "bottom center",
        scrub: true,

      },
    });
    s5item1TL.to(".direction__car", {
      top: "25.5%",
      duration: 10,
    });
    s5item1TL
      .to(
        ".direction__bullet",
        {
          display: "block",
          top: "22.5%",
          duration: 2,
        },
        "<"
      )
      .to(
        ".direction__bullet",
        {
          display: "none",
          top: "25%",
          duration: 1,
          delay: 2,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__wall",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__bom-1",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__bom-1",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__bom-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__bom-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__coin-1",
        {
          display: "block",
          duration: 1,
          delay: 2,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__coin-1",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__coin-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__coin-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__coin-3",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__coin-3",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__coin-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item1TL
      .to(
        ".direction__item-2 .icon__coin-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-2 .icon__coin-1",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item1TL.to(
      ".direction__item-2 .icon__coin-1",
      {
        display: "none",
        duration: 1,
      },
      "<"
    );
    s5item1TL.to(".direction__car", {
      top: "25.5%",
      duration: 5,
    });
    const s5item2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".direction__item-2",
        start: "top center",
        end: "bottom center",
        scrub: true,

      },
    });
    s5item2TL.to(".direction__car", {
      top: "51%",
      duration: 10,
    });
    s5item2TL
      .to(
        ".direction__bullet",
        {
          display: "block",
          top: "42.5%",
          duration: 2,
        },
        "<"
      )
      .to(
        ".direction__bullet",
        {
          display: "none",
          top: "50%",
          duration: 1,
          delay: 2,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__wall",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__bom-1",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__bom-1",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__bom-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__bom-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__coin-1",
        {
          display: "block",
          duration: 1,
          delay: 2,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__coin-1",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__coin-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__coin-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__coin-3",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__coin-3",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__coin-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item2TL
      .to(
        ".direction__item-3 .icon__coin-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-3 .icon__coin-1",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item2TL.to(
      ".direction__item-3 .icon__coin-1",
      {
        display: "none",
        duration: 1,
      },
      "<"
    );
    s5item2TL.to(".direction__car", {
      top: "51%",
      duration: 5,
    });
    const s5item3TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".direction__item-3",
        start: "top center",
        end: "bottom center",
        scrub: true,

      },
    });
    s5item3TL.to(".direction__car", {
      top: "75.5%",
      duration: 10,
    });
    s5item3TL
      .to(
        ".direction__bullet",
        {
          display: "block",
          top: "67.5%",
          duration: 2,
        },
        "<"
      )
      .to(
        ".direction__bullet",
        {
          display: "none",
          top: "75%",
          duration: 1,
          delay: 2,
        },
        "<"
      );
    s5item3TL
      .to(
        ".direction__item-4 .icon__wall",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-4 .icon__bom-1",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item3TL
      .to(
        ".direction__item-4 .icon__bom-1",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-4 .icon__bom-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item3TL
      .to(
        ".direction__item-4 .icon__bom-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-4 .icon__box-1",
        {
          display: "block",
          duration: 1,
          delay: 2,
        },
        "<"
      );
    s5item3TL
      .to(
        ".direction__item-4 .icon__box-1",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-4 .icon__box-2",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item3TL
      .to(
        ".direction__item-4 .icon__box-2",
        {
          display: "none",
          duration: 1,
        },
        "<"
      )
      .to(
        ".direction__item-4 .icon__box-3",
        {
          display: "block",
          duration: 1,
          delay: 1,
        },
        "<"
      );
    s5item3TL.to(".direction__car", {
      top: "75.5%",
      duration: 5,
    });
  },
};
</script>

<style lang="scss" scoped>
#direction {
  padding: calc($space-l * 10) 0;
  @include flex;
}
.direction {
  &__lists {
    max-width: calc($space-xxl * 12 + $space-l * 5);
  }
  &__item {
    @include rect(100%, calc(260px + $space-l * 8));
    padding-left: calc($space-l * 5);
    @include font(24);
    padding-bottom: calc($space-l * 8);
  }
  &__title {
    @include font(72, 1.5, $fw-primary, 5);
    color: $c-brand1-lighter;
  }
  &__icons {
    @include poa(0px, 10px, r, b);
    @include rect(80px, 80px);
    img {
      @include rect;
      @include poa;
      display: none;
      &.icon__wall {
        display: block;
      }
    }
  }
  &__bullet {
    @include poa(0, 12px, r, b);
    @include rect(100px, 100px);
    transform: translateX(-10%);
    display: none;
    img {
      @include rect(20%, 20%);
      @include poa(0, t, 0, 0);
    }
  }
  &__car {
    @include poa(0, 12px, r, b);
    @include rect(100px, 100px);
    transform: translateX(-10%);
    img {
      @include rect;
      @include poa;
      transform: rotateZ(90deg);
    }
  }
}
</style>
