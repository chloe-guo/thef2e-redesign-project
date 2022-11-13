<template lang="pug">
#sponsor
  .sponsor__icon
    img.icon.icon-s.icon-1(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-2(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-3(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-4(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-5(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-6(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-7(src="@/assets/images/diamond.png")
    img.icon.icon-s.icon-8(src="@/assets/images/diamond.png")
    img.icon.icon-m.icon-1(src="@/assets/images/diamond.png")
    img.icon.icon-m.icon-2(src="@/assets/images/diamond.png")
    img.icon.icon-m.icon-3(src="@/assets/images/diamond.png")
    img.icon.icon-m.icon-4(src="@/assets/images/diamond.png")
    img.icon.icon-m.icon-5(src="@/assets/images/diamond.png")
    img.icon.icon-m.icon-6(src="@/assets/images/diamond.png")
  .sponsor__wrap
    h3.sponsor__title 鑽石級
      span 贊助商
    ul.sponsor__lists(ontouchstart)
        cube(link="https://blockstudio.tw/", title="版塊設計", enTitle="blockstudio")
        cube(link="https://titansoft.com/tw", title="鈦坦科技", enTitle="titansoft")
        cube(link="https://www.kdanmobile.com/zh-tw", title="凱鈿科技", enTitle="kdanmobile")
  .sponsor__wrap
    h3.sponsor__title
      span 共同推廣
    ul.sponsor__lists(ontouchstart)
        cube(link="https://titansoft.com/tw/go_jira", title="GO JIRA", enTitle="jira")
        cube(link="https://titansoft.com/tw/get_miro", title="Get Miro", enTitle="miro")
        cube(link="https://www.dottedsign.com/zh-tw/?utm_source_k=PR&utm_campaign_k=PR_Hexschool_SponsorEvent_2022&utm_medium_k=Hexschool", title="點點簽", enTitle="dottedsign")
  svg.sponsor__clip.clip(viewbox="0 0 0 0" xmlns="http://www.w3.org/2000/svg")
    defs
        clippath#clip-top
            polygon#top(points="0 0 96 0 48 48")
        clippath#clip-bottom
            polygon#bottom(points="96 48 0 48 48 0")
        clippath#clip-left
            polygon#left(points="0 0 0 96 48 48")
        clippath#clip-right
            polygon#right(points="48 0 48 96 0 48")
  .sponsor__icon
    img.icon.icon-l.icon-1(src="@/assets/images/diamond.png")
    img.icon.icon-l.icon-2(src="@/assets/images/diamond.png")
    img.icon.icon-l.icon-3(src="@/assets/images/diamond.png")
    img.icon.icon-l.icon-4(src="@/assets/images/diamond.png")
</template>

<script>
import cube from "@/components/section_7_sponsor-cube.vue";
export default {
  name: "section_7_sponsor",
  components: {
    cube,
  },
};
</script>

<style lang="scss" scoped>
#sponsor {
  background: $c-brand1;
  padding: calc($space-m * 5);
  z-index: 2;
}
.sponsor {
  &__wrap {
    & + .sponsor__wrap {
      margin-top: calc($space-m * 5);
      @media (max-width: $sm) {
        margin-top: calc($space-m * 4);
      }
    }
  }
  &__title {
    @include font(72, 1.5, $fw-primary, 5);
    color: $c-brand2;
    text-align: center;
    span {
      color: $c-text-primary;
    }
  }
  &__lists {
    @include flex;
    margin: 0;
    padding: $space-s $space-xl;
    perspective: #{$space-xxl * 31.25};
    * {
      transform-style: preserve-3d;
    }
    @media (max-width: $sm) {
      @include flex(column);
      padding: calc($space-s * 5) $space-xl;
    }
  }
  &__clip {
    @include poa;
    opacity: 0;
    z-index: -100;
  }
  &__icon {
    @include rect(100%, 100%);
    @include poa;
    pointer-events: none;
    .icon {
      &-s {
        @include rect(2.7vw, 2vw);
        @media (max-width: $sm) {
          @include rect(5.4vw, 4vw);
        }
        &.icon {
          animation-name: diamond-s;
          animation-direction: alternate;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
          @keyframes diamond-s {
            0% {
              scale: 1;
              filter: brightness(100%) drop-shadow(0 0 0.4vw rgba(white, 0.8));
            }
            100% {
              scale: 0.85;
              filter: brightness(90%) drop-shadow(0 0 0 rgba(white, 0));
            }
          }
          &-1 {
            @include poa(2%, 15%, r, b);
            animation-delay: -0.3s;
            animation-duration: 1.2s;
          }
          &-2 {
            @include poa(1.5%, t, r, 8%);
            animation-delay: -0.4s;
            animation-duration: 1.5s;
          }
          &-3 {
            @include poa(l, 25%, 4%, b);
            animation-delay: -0.2s;
            animation-duration: 1s;
          }
          &-4 {
            @include poa(l, t, 16%, 4%);
            animation-delay: -0.5s;
            animation-duration: 1.1s;
            @media (max-width: $sm) {
              @include poa(l, 34%, 16%, b);
            }
          }
          &-5 {
            @include poa(l, t, 3%, 24%);
            animation-delay: -0.3s;
            animation-duration: 1.4s;
          }
          &-6 {
            @include poa(l, t, 8%, 34%);
            animation-delay: -0.3s;
            animation-duration: 1.6s;
          }
          &-7 {
            @include poa(l, t, 20%, 54%);
            animation-delay: -0.2s;
            animation-duration: 1.2s;
          }
          &-8 {
            @include poa(28%, t, r, 45%);
            animation-delay: -0.5s;
            animation-duration: 1.2s;
            @media (max-width: $sm) {
              @include poa(18%, t, r, 45%);
            }
          }
        }
      }
      &-m {
        @include rect(4.8vw, 3.7vw);
        @media (max-width: $sm) {
          @include rect(9.6vw, 7.4vw);
        }
        &.icon {
          animation-name: diamond-m;
          animation-direction: alternate;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
          @keyframes diamond-m {
            0% {
              scale: 1;
              filter: brightness(100%) drop-shadow(0 0 0.6vw rgba(white, 0.8));
            }
            100% {
              scale: 0.85;
              filter: brightness(90%) drop-shadow(0 0 0 rgba(white, 0));
            }
          }
          &-1 {
            @include poa(5%, 10%, r, b);
            animation-delay: -0.3s;
            animation-duration: 1.2s;
          }
          &-2 {
            @include poa(5%, t, r, 14%);
            animation-delay: -0.2s;
            animation-duration: 1.3s;
          }
          &-3 {
            @include poa(l, 10%, 7%, b);
            animation-delay: -0.4s;
            animation-duration: 1.6s;
          }
          &-4 {
            @include poa(l, t, 10%, 6%);
            animation-delay: -0.6s;
            animation-duration: 1.3s;
            @media (max-width: $sm) {
              @include poa(5%, 40%, r, b);
            }
          }
          &-5 {
            @include poa(l, t, 24%, 49%);
            animation-delay: -0.3s;
            animation-duration: 1.3s;
            @media (max-width: $sm) {
              @include poa(l, t, 14%, 49%);
            }
          }
          &-6 {
            @include poa(30%, t, r, 2%);
            animation-delay: -0.5s;
            animation-duration: 1.2s;
          }
        }
      }
      &-l {
        @include rect(8.4vw, 6.2vw);
        @media (max-width: $sm) {
          @include rect(16.8vw, 12.4vw);
        }
        animation-name: diamond-l;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
        @keyframes diamond-l {
          0% {
            scale: 1;
            filter: brightness(100%) drop-shadow(0 0 9vw rgba(white, 0.8));
          }
          100% {
            scale: 0.85;
            filter: brightness(90%) drop-shadow(0 0 0 rgba(white, 0));
          }
        }
        &.icon {
          &-1 {
            @include poa(2.5%, t, r, 31%);
            animation-delay: -0.3s;
            animation-duration: 1.8s;
          }
          &-2 {
            @include poa(24%, 12%, r, b);
            animation-delay: -0.3s;
            animation-duration: 1.6s;
            @media (max-width: $sm) {
              @include poa(12%, 28%, r, b);
            }
          }
          &-3 {
            @include poa(l, 4%, 24%, b);
            animation-delay: -0.3s;
            animation-duration: 1.9s;
            @media (max-width: $sm) {
              @include poa(l, 2%, 10%, b);
            }
          }
          &-4 {
            @include poa(l, t, 36%, 5.4%);
            animation-delay: -0.3s;
            animation-duration: 1.5s;
            @media (max-width: $sm) {
              @include poa(l, t, 8%, 5%);
            }
          }
        }
      }
    }
  }
}
</style>
