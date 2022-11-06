<template lang="pug">
#cooperation
    .cooperation__titleGroup
      h2.cooperation__title 互動式網頁設計
      h3.cooperation__subTitle  UI、前端接力合作，一同產出完整作品。
    .cooperation__layers
        img.cooperation__layer.cooperation__layer-1(src="@/assets/images/s3-cooperation-layer-1.png")
        img.cooperation__layer.cooperation__layer-2(src="@/assets/images/s3-cooperation-layer-2.png")
        img.cooperation__layer.cooperation__layer-3(src="@/assets/images/s3-cooperation-layer-3.png")
        img.cooperation__layer.cooperation__layer-4(src="@/assets/images/s3-cooperation-layer-4.png")
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "section_2_issue",
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    const s3TL1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#cooperation",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });
    s3TL1.to("#cooperation", {
      background: "#f4b6a7",
      duration: 50,
      delay: 20,
    });
    gsap.set(".cooperation__layer-4", {
      yPercent: "200",
    });
    s3TL1.to(
      ".cooperation__layer-4",
      {
        yPercent: "0",
        duration: 10,
      },
      "<"
    );
    gsap.set(".cooperation__layer-3", {
      yPercent: "200",
    });
    s3TL1.to(
      ".cooperation__layer-3",
      {
        yPercent: "0",
        duration: 25,
      },
      "<"
    );
    gsap.set(".cooperation__layer-2", {
      yPercent: "200",
    });
    s3TL1.to(
      ".cooperation__layer-2",
      {
        yPercent: "0",
        duration: 30,
      },
      "<"
    );
    gsap.set(".cooperation__layer-1", {
      yPercent: "200",
    });
    s3TL1.to(
      ".cooperation__layer-1",
      {
        yPercent: "0",
        duration: 40,
      },
      "<"
    );
    gsap.set(".cooperation__titleGroup", {
      opacity: 0,
      yPercent: "200",
    });
    s3TL1.to(
      ".cooperation__titleGroup",
      {
        opacity: 1,
        yPercent: "-20",
        duration: 30,
        delay: 10,
      },
      "<"
    );
    const s3TL2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".solution__titleGroup",
        start: "top bottom",
        end: "140% bottom",
        scrub: true,
      },
    });
    s3TL2.to(".cooperation__layer-3", {
      yPercent: "45",
      duration: 65,
    });
    s3TL2.to(
      ".cooperation__layer-2",
      {
        yPercent: "60",
        duration: 75,
      },
      "<"
    );
    s3TL2.to(
      ".cooperation__layer-1",
      {
        yPercent: "80",
        duration: 80,
      },
      "<"
    );
    s3TL2.to(
      ".cooperation__titleGroup",
      {
        yPercent: "60",
        duration: 60,
      },
      "<"
    );
    gsap.set(".solution__title-1", {
      opacity: 0,
      scale: "0",
    });
    s3TL2
      .to(
        ".solution__title-1",
        {
          opacity: 1,
          scale: "2",
          duration: 20,
          delay: 100,
        },
        "<"
      )
      .to(".solution__title-1", {
        opacity: 0,
        scale: "4",
        duration: 20,
      });
    gsap.set(".solution__title-2", {
      opacity: 0,
      scale: "0",
    });
    s3TL2
      .to(".solution__title-2", {
        opacity: 1,
        scale: "2",
        duration: 20,
      })
      .to(".solution__title-2", {
        opacity: 0,
        scale: "4",
        duration: 20,
      });
    s3TL2.to("#solution", {
      background: "#b82a06",
      duration: 5,
      delay: 5,
    });
  },
};
</script>

<style lang="scss" scoped>
#cooperation {
  margin-top: -60%;
  @include rect(100vw, 100vh);
  height: calc(var(--vh, 1vh) * 100);
  @include flex(column, flex-start, center);
  overflow: hidden;
  background: $c-bg;
}
.cooperation {
  &__titleGroup {
    @include poa;
    @include flex(column);
  }
  &__title {
    @include font(72px, 1.5, $fw-primary, 5px);
    border: 2px solid $c-text-primary;
    padding: $space-s calc($space-l * 2);
  }
  &__subTitle {
    @include font(24px);
    padding: $space-s;
  }
  &__layers {
    @include rect(100%, 100%);
  }
  &__layer {
    &-1 {
      @include rect(100%, auto);
      @include poa(0, t, 0, 0);
    }
    &-2 {
      @include rect(67.8%, auto);
      @include poa(l, t, 0, 0);
    }
    &-3 {
      @include rect(86.7%, auto);
      @include poa(0, t, r, 0);
    }
    &-4 {
      @include rect(100%, auto);
      @include poa(0, t, 0, 0);
    }
  }
}
</style>
