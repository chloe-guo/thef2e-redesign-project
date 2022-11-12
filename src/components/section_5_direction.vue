<template lang="pug">
#direction
  ul.direction__lists
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
      .direction__coins
        img.icon__coin-1(src="@/assets/images/coin-1.png")
        img.icon__coin-2(src="@/assets/images/coin-2.png")
        img.icon__coin-3(src="@/assets/images/coin-3.png")
      .direction__targets
        img.icon__wall(src="@/assets/images/wall.png")
        img.icon__bom-1(src="@/assets/images/bom-1.png")
        img.icon__bom-2(src="@/assets/images/bom-2.png")
    li.direction__item.direction__item-3
      h3.direction__title.is-cubeFont UPLOAD!
      p 登陸作品：
      p 10/31(一) 中午 12:00 - 11/28(一) 中午 12:00
      .direction__coins
        img.icon__coin-1(src="@/assets/images/coin-1.png")
        img.icon__coin-2(src="@/assets/images/coin-2.png")
        img.icon__coin-3(src="@/assets/images/coin-3.png")
      .direction__targets
        img.icon__wall(src="@/assets/images/wall.png")
        img.icon__bom-1(src="@/assets/images/bom-1.png")
        img.icon__bom-2(src="@/assets/images/bom-2.png")
    li.direction__item.direction__item-4
      h3.direction__title.is-cubeFont STREAM!
      p 資深開發者到來，直播分享零阻礙！
      p &nbsp;
      p 線上直播：
      p 11/3 - 11/24（每週四）
      .direction__targets
        img.icon__wall(src="@/assets/images/wall.png")
        img.icon__bom-1(src="@/assets/images/bom-1.png")
        img.icon__bom-2(src="@/assets/images/bom-2.png")
      .direction__boxs
        img.icon__box-1(src="@/assets/images/box-1.png")
        img.icon__box-2(src="@/assets/images/box-2.png")
        img.icon__box-3(src="@/assets/images/box-3.png")
    li.direction__bullets
      img(src="@/assets/images/bullet.png")
    li.direction__car
      img.icon__car(src="@/assets/images/car-top.gif")
</template>

<script>
export default {
  name: "section_5_direction",
  mounted: function () {
    const s5item1TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".direction__item-1",
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
      },
    });
    gsap.set(".icon__wall", {
      display: "block",
    });
    gsap.set(".direction__bullets", {
      display: "none",
    });
    gsap.set(".icon__box-1", {
      display: "none",
    });
    s5item1TL
      .to(".direction__car", {
        top: "0%",
        duration: 0,
      })
      .to(".direction__car", {
        top: "15.75%",
        duration: 10,
      })
      .to(
        ".direction__bullets",
        {
          top: "15.75%",
          duration: 10,
        },
        "<"
      );
    s5item1TL.to(".direction__bullets", {
      display: "block",
      top: "24.5%",
      duration: 4,
    });
    s5item1TL
      .to(".direction__bullets", {
        display: "none",
        duration: 0,
      })
      .to(".direction__bullets", {
        top: "31.5%",
        duration: 5,
      });
    s5item1TL
      .to(".direction__item-2 .icon__wall", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-2 .icon__bom-1", {
        display: "block",
        duration: 2,
      })
      .to(".direction__item-2 .icon__bom-1", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-2 .icon__bom-2", {
        display: "block",
        duration: 2,
      })
      .to(".direction__item-2 .icon__bom-2", {
        display: "none",
        duration: 1,
      });
    s5item1TL.to(
      ".direction__car",
      {
        top: "31.5%",
        duration: 10,
      },
      "<"
    );
    s5item1TL
      .to(".direction__item-2 .icon__coin-1", {
        display: "block",
        duration: 1,
      })
      .to(".direction__item-2 .icon__coin-1", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-2 .icon__coin-2", {
        display: "block",
        duration: 1,
      });
    s5item1TL.to(
      ".direction__item-2 .direction__coins",
      {
        yPercent: "-100",
        duration: 4,
      },
      "<"
    );
    s5item1TL
      .to(".direction__item-2 .icon__coin-2", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-2 .icon__coin-3", {
        display: "block",
        duration: 1,
      })
      .to(".direction__item-2 .icon__coin-3", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-2 .icon__coin-1", {
        display: "block",
        duration: 1,
      });
    s5item1TL
      .to(
        ".direction__item-2 .direction__coins",
        {
          yPercent: "0",
          duration: 4,
        },
        "<"
      )
      .to(".direction__item-2 .direction__coins", {
        display: "none",
        duration: 1,
      });
    const s5item2TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".direction__item-2",
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
      },
    });
    s5item2TL
      .to(".direction__car", {
        top: "31.5%",
        duration: 0,
      })
      .to(".direction__car", {
        top: "45.85%",
        duration: 10,
      })
      .to(
        ".direction__bullets",
        {
          top: "45.85%",
          duration: 10,
        },
        "<"
      );
    s5item2TL.to(".direction__bullets", {
      display: "block",
      top: "52.7%",
      duration: 4,
    });
    s5item2TL
      .to(".direction__bullets", {
        display: "none",
        duration: 0,
      })
      .to(".direction__bullets", {
        top: "60.2%",
        duration: 5,
      });
    s5item2TL
      .to(".direction__item-3 .icon__wall", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-3 .icon__bom-1", {
        display: "block",
        duration: 2,
      })
      .to(".direction__item-3 .icon__bom-1", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-3 .icon__bom-2", {
        display: "block",
        duration: 2,
      })
      .to(".direction__item-3 .icon__bom-2", {
        display: "none",
        duration: 1,
      });
    s5item2TL.to(
      ".direction__car",
      {
        top: "60.2%",
        duration: 10,
      },
      "<"
    );
    s5item2TL
      .to(".direction__item-3 .icon__coin-1", {
        display: "block",
        duration: 1,
      })
      .to(".direction__item-3 .icon__coin-1", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-3 .icon__coin-2", {
        display: "block",
        duration: 1,
      });
    s5item2TL.to(
      ".direction__item-3 .direction__coins",
      {
        yPercent: "-100",
        duration: 4,
      },
      "<"
    );
    s5item2TL
      .to(".direction__item-3 .icon__coin-2", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-3 .icon__coin-3", {
        display: "block",
        duration: 1,
      })
      .to(".direction__item-3 .icon__coin-3", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-3 .icon__coin-1", {
        display: "block",
        duration: 1,
      });
    s5item2TL
      .to(
        ".direction__item-3 .direction__coins",
        {
          yPercent: "0",
          duration: 4,
        },
        "<"
      )
      .to(".direction__item-3 .direction__coins", {
        display: "none",
        duration: 1,
      });
    const s5item3TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".direction__item-3",
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
      },
    });
    s5item3TL
      .to(".direction__car", {
        top: "60.2%",
        duration: 0,
      })
      .to(".direction__car", {
        top: "71.1%",
        duration: 10,
      })
      .to(
        ".direction__bullets",
        {
          top: "71.1%",
          duration: 10,
        },
        "<"
      );
    s5item3TL.to(".direction__bullets", {
      display: "block",
      top: "81.4%",
      duration: 4,
    });
    s5item3TL
      .to(".direction__bullets", {
        display: "none",
        duration: 0,
      })
      .to(".direction__bullets", {
        top: "68%",
        duration: 5,
      });
    s5item3TL
      .to(".direction__item-4 .icon__wall", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-4 .icon__bom-1", {
        display: "block",
        duration: 2,
      })
      .to(".direction__item-4 .icon__bom-1", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-4 .icon__bom-2", {
        display: "block",
        duration: 2,
      })
      .to(".direction__item-4 .icon__bom-2", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-4 .icon__box-1", {
        display: "block",
        duration: 1,
        delay: 2,
      });
    s5item3TL.to(
      ".direction__car",
      {
        top: "82%",
        duration: 10,
      },
      "<"
    );
    s5item3TL
      .to(".direction__item-4 .icon__box-1", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-4 .icon__box-2", {
        display: "block",
        duration: 3,
      })
      .to(".direction__item-4 .icon__box-2", {
        display: "none",
        duration: 1,
      })
      .to(".direction__item-4 .icon__box-3", {
        display: "block",
        duration: 5,
      });
  },
};
</script>

<style lang="scss" scoped>
#direction {
  margin-top: 100vh;
  margin-top: calc(var(--vh, 1vh) * 100);
  padding-top: calc($space-l * 10);
  @include flex;
  background: $c-bg;
}
.direction {
  &__lists {
    max-width: calc($space-xxl * 13 + $space-l * 5);
  }
  &__item {
    padding-left: calc(7.5rem + $space-xs * 8);
    @include font(24);
    padding-bottom: calc($space-xxl * 10);
    &-4 {
      padding-bottom: 0;
    }
  }
  &__title {
    @include font(72, 1.5, $fw-primary, 5);
    color: $c-brand1-lighter;
  }
  &__car {
    @include poa(0, 0, r, b);
    @include rect(9.5rem, 9.5rem);
    transform: translateX(-11%);
    img {
      @include rect;
      @include poa;
      transform: rotateZ(90deg);
    }
  }
  &__targets,
  &__boxs {
    @include poa(0, 0, r, b);
    @include rect(7.5rem, 7.5rem);
    img {
      @include rect;
      @include poa;
      display: none;
    }
    .icon__box-1 {
      display: block;
    }
  }
  &__coins {
    @include poa(0, 0, r, b);
    @include rect(7.5rem, 7.5rem);
    // transform: translateY(-100%);
    img {
      @include rect(40%, 40%);
      @include poa;
      display: none;
    }
  }
  &__bullets {
    @include poa;
    @include poa(0, 0, r, b);
    @include rect(7.5rem, 3rem);
    transform: translateY(calc(9.5rem - 0.75rem));
    display: none;
    img {
      @include rect;
      @include poa;
    }
  }
}
</style>
