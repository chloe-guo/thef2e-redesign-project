<template lang="pug">
#cooperation
    .cooperation__gradient-red
    .cooperation__gradient-black
    .cooperation__titleGroup
      h2.cooperation__title 互動式網頁設計
      h3.cooperation__subTitle  UI、前端接力合作，一同產出完整作品。
    .cooperation__layers
      picture.cooperation__layer.cooperation__layer-1
        source(srcset="@/assets/images/s3-cooperation-layer-1-mobile.png" media="(max-width: 768px)")
        img(src="@/assets/images/s3-cooperation-layer-1.png")
      picture.cooperation__layer.cooperation__layer-2
        source(srcset="@/assets/images/s3-cooperation-layer-2-mobile.png" media="(max-width: 768px)")
        img(src="@/assets/images/s3-cooperation-layer-2.png")
      picture.cooperation__layer.cooperation__layer-3
        source(srcset="@/assets/images/s3-cooperation-layer-3-mobile.png" media="(max-width: 768px)")
        img(src="@/assets/images/s3-cooperation-layer-3.png")
      picture.cooperation__layer.cooperation__layer-4
        source(srcset="@/assets/images/s3-cooperation-layer-4-mobile.png" media="(max-width: 768px)")
        img(src="@/assets/images/s3-cooperation-layer-4.png")
      .cooperation__overlay
</template>

<script>
export default {
  name: "section_2_issue",
  mounted: function () {
    const s3TL = gsap.timeline({
      scrollTrigger: {
        trigger: "#cooperation",
        start: "top top",
        end: "200% top",
        pin: true,
        scrub: true,
      },
    });
    s3TL
      .to(".cooperation__gradient-red", {
        opacity: "1",
        duration: 35,
      })
      .to(
        ".cooperation__gradient-black",
        {
          opacity: "0",
          duration: 35,
        },
        "<"
      )
      .to(
        "#cooperation",
        {
          background: "#d67057",
          duration: 25,
        },
        "<"
      );
    s3TL
      .to(".cooperation__gradient-red", {
        opacity: "0",
        duration: 35,
      })
      .to(
        "#cooperation",
        {
          background: "#f4b6a7",
          duration: 25,
        },
        "<"
      );
    gsap.set(".cooperation__layer-4", {
      yPercent: "200",
    });
    s3TL.to(
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
    s3TL.to(
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
    s3TL.to(
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
    s3TL.to(
      ".cooperation__layer-1",
      {
        yPercent: "10",
        duration: 40,
      },
      "<"
    );
    gsap.set(".cooperation__titleGroup", {
      opacity: 0,
      scale: 0.4,
      yPercent: "200",
    });
    s3TL.to(
      ".cooperation__titleGroup",
      {
        opacity: 1,
        scale: 1,
        yPercent: "-20",
        duration: 30,
        delay: 5,
      },
      "<"
    );
    s3TL.to(".cooperation__layer-4", {
      bottom: "100%",
      duration: 50,
      delay: 10,
    });
    s3TL.to(
      ".cooperation__overlay",
      {
        bottom: "101%",
        duration: 50,
      },
      "<"
    );
    s3TL.to(
      ".cooperation__layer-3",
      {
        bottom: "50%",
        duration: 50,
      },
      "<"
    );
    s3TL.to(
      ".cooperation__layer-2",
      {
        bottom: "60%",
        duration: 55,
      },
      "<"
    );
    s3TL.to(
      ".cooperation__layer-1",
      {
        bottom: "60%",
        duration: 65,
      },
      "<"
    );
    s3TL.to(
      ".cooperation__titleGroup",
      {
        yPercent: "-80",
        duration: 40,
      },
      "<"
    );
  },
};
</script>

<style lang="scss" scoped>
#cooperation {
  @include rect(100vw, 100vh);
  height: calc(var(--vh, 1vh) * 100);
  @include flex(column, flex-start, center);
  background: $c-bg;
  overflow: hidden;
  margin-bottom: 100vh;
  margin-bottom: calc(var(--vh, 1vh) * 100);
  @media (max-width: $sm) {
    margin-bottom: 60vh;
    margin-bottom: calc(var(--vh, 1vh) * 60);
  }
}
.cooperation {
  &__gradient {
    &-red {
      @include rect;
      @include poa;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
      background: -moz-linear-gradient(
        top,
        rgba($c-brand1, 0.65) 0%,
        rgba($c-brand1, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba($c-brand1, 0.65) 0%,
        rgba($c-brand1, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        rgba($c-brand1, 0.65) 0%,
        rgba($c-brand1, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#b82a0600',GradientType=0 ); /* IE6-9 */
      opacity: 0;
    }
    &-black {
      @include rect;
      @include poa;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
      background: -moz-linear-gradient(
        top,
        rgba($c-bg, 0.65) 0%,
        rgba($c-bg, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba($c-bg, 0.65) 0%,
        rgba($c-bg, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        rgba($c-bg, 0.65) 0%,
        rgba($c-bg, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
    }
  }
  &__titleGroup {
    @include poa;
    @include flex(column);
    @media (max-width: $sm) {
      margin-top: 10vh;
      margin-top: calc(var(--vh, 1vh) * 10);
    }
  }
  &__title {
    @include font(72, 1.5, $fw-primary, 5);
    border: 2px solid $c-text-primary;
    padding: $space-s calc($space-l * 2);
  }
  &__subTitle {
    @include font(24);
    padding: $space-s;
    @media (max-width: $sm) {
      @include font(32);
      padding: calc($space-m / 2);
    }
  }
  &__layers {
    @include rect(100%, 100%);
  }
  &__layer {
    img {
      @include rect;
    }
    &-1 {
      @include rect(100%, auto);
      @include poa(0, t, 0, 0);
    }
    &-2 {
      @include rect(67.8%, auto);
      @include poa(l, t, 0, 0);
      @media (max-width: $sm) {
        @include rect(100%, auto);
      }
    }
    &-3 {
      @include rect(86.7%, auto);
      @include poa(0, t, r, 0);
      @media (max-width: $sm) {
        @include rect(100%, auto);
      }
    }
    &-4 {
      @include rect(100%, auto);
      @include poa(0, t, 0, 0);
    }
  }
  &__overlay {
    @include rect(100%, 101vh);
    height: calc(var(--vh, 1vh) * 100);
    @include poa(0, t, 0, 1vh);
    bottom: calc(var(--vh, 1vh) * 1);
    background: $c-bg;
    transform: translateY(100%);
  }
}
</style>
