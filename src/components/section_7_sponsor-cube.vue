<template lang="pug">
li.sponsor__item
  .sponsor__link
      a.link-top.js-cursorHover(:href="link" target="_blank")
      a.link-bottom.js-cursorHover(:href="link" target="_blank")
      a.link-left.js-cursorHover(:href="link" target="_blank")
      a.link-right.js-cursorHover(:href="link" target="_blank")
      .sponsor__cube.cube(:data-type="enTitle")
          .cube-top
          .cube-bottom
          .cube-left
          .cube-right
          .cube-front
              img(:src="require(`@/assets/images/${enTitle}_logo.jpg`)")
          .cube-back {{ title }}
</template>

<script>
export default {
  name: "section_7_sponsor_cube",
  props: {
    title: String,
    enTitle: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
$c-blockstudio: #40587c;
$c-titansoft: #3a3a3a;
$c-kdanmobile: #00a89b;
$c-jira: #2684ff;
$c-miro: #ffd02e;
$c-dottedsign: #586af2;

.sponsor {
  &__item {
    transform-style: preserve-3d;
    padding: #{$space-l * 2};
    @media (max-width: $sm) {
      padding: #{$space-s * 2};
    }
    * {
      transform-style: preserve-3d;
    }
  }
  &__link {
    @include rect($space-xl * 8, $space-xl * 8);
    a[class^="link-"] {
      display: block;
      transform: translateZ(#{$space-xl * 2});
      transform-origin: $space-xl * 4 $space-xl * 4 -#{$space-xl * 4};
      z-index: 1;
      &.link {
        &-top {
          @include rect(100%, 50%);
          @include poa(0, 0, r, b);
          clip-path: polygon(50% 100%, 0 0, 100% 0);
          @-moz-document url-prefix() {
            clip-path: url(#clip-top);
          }
          &:hover,
          &:focus {
            ~ .cube {
              transform: rotateX(-0.5turn);
              .cube-back {
                transform: rotateY(180deg) rotateZ(180deg)
                  translateZ($space-xl * 8);
              }
            }
          }
        }
        &-bottom {
          @include rect(100%, 50%);
          @include poa(l, t, 0, 0);
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
          @-moz-document url-prefix() {
            clip-path: url(#clip-bottom);
          }
          &:hover,
          &:focus {
            ~ .cube {
              transform: rotateX(0.5turn);
              .cube-back {
                transform: rotateZ(180deg);
                transform: rotateY(180deg) rotateZ(180deg)
                  translateZ($space-xl * 8);
              }
            }
          }
        }
        &-left {
          @include rect(50%, 100%);
          @include poa(0, t, r, 0);
          clip-path: polygon(0 100%, 0 0, 100% 50%);
          @-moz-document url-prefix() {
            clip-path: url(#clip-left);
          }
          &:hover,
          &:focus {
            ~ .cube {
              transform: rotateY(0.5turn);
            }
          }
        }
        &-right {
          @include rect(50%, 100%);
          @include poa(l, 0, 0, b);
          clip-path: polygon(100% 100%, 0 50%, 100% 0);
          @-moz-document url-prefix() {
            clip-path: url(#clip-right);
          }
          &:hover,
          &:focus {
            ~ .cube {
              transform: rotateY(-0.5turn);
            }
          }
        }
      }
      &:hover,
      &:focus {
        @include rect(100% !important, 100% !important);
        z-index: 2;
        transform: translateZ(#{$space-xl * 3});
        -webkit-clip-path: none !important;
        clip-path: none !important;
        transition: all 0.2s cubic-bezier(0.37, 0, 0.63, 1) 0.3s;
      }
    }
  }
  &__cube {
    transform-origin: $space-xl * 4 $space-xl * 4 -#{$space-xl * 4};
    position: relative;
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
    [class^="cube-"] {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      // border-radius: 3px;
      img {
        width: $space-xl * 5;
        height: $space-xl * 5;
        object-fit: contain;
      }
      &.cube {
        &-top {
          transform-origin: center top;
          transform: rotateX(90deg) translateY(#{- ($space-xl * 8)});
        }
        &-bottom {
          transform-origin: center bottom;
          transform: rotateX(-90deg) translateY($space-xl * 8);
        }
        &-left {
          transform-origin: left center;
          transform: rotateY(-90deg) translateX(#{- ($space-xl * 8)});
        }
        &-right {
          transform-origin: right center;
          transform: rotateY(90deg) translateX($space-xl * 8);
        }
        &-front {
          transform-origin: center center;
          transform: rotateX(0);
        }
        &-back {
          @include font(42, 1.2, $fw-primary, 5);
          transform-origin: center center;
          transform: rotateY(180deg) translateZ($space-xl * 8);
        }
      }
    }
    &[data-type="blockstudio"] {
      .cube {
        &-top {
          background: lighten($c-blockstudio, 35%);
        }
        &-bottom {
          background: lighten($c-blockstudio, 10%);
        }
        &-left {
          background: lighten($c-blockstudio, 20%);
        }
        &-right {
          background: lighten($c-blockstudio, 20%);
        }
        &-front {
          background: white;
        }
        &-back {
          color: white;
          background: $c-blockstudio;
        }
      }
    }
    &[data-type="titansoft"] {
      .cube {
        &-top {
          background: lighten($c-titansoft, 35%);
        }
        &-bottom {
          background: lighten($c-titansoft, 10%);
        }
        &-left {
          background: lighten($c-titansoft, 20%);
        }
        &-right {
          background: lighten($c-titansoft, 20%);
        }
        &-front {
          background: white;
        }
        &-back {
          color: white;
          background: $c-titansoft;
        }
      }
    }
    &[data-type="kdanmobile"] {
      .cube {
        &-top {
          background: lighten($c-kdanmobile, 35%);
          filter: grayscale(0.5) brightness(0.8);
        }
        &-bottom {
          background: lighten($c-kdanmobile, 10%);
          filter: grayscale(0.5) brightness(0.8);
        }
        &-left {
          background: lighten($c-kdanmobile, 20%);
          filter: grayscale(0.5) brightness(0.8);
        }
        &-right {
          background: lighten($c-kdanmobile, 20%);
          filter: grayscale(0.5) brightness(0.8);
        }
        &-front {
          background: white;
        }
        &-back {
          color: white;
          background: $c-kdanmobile;
        }
      }
    }
    &[data-type="jira"] {
      .cube {
        &-top {
          background: lighten($c-jira, 30%);
          filter: grayscale(0.25);
        }
        &-bottom {
          background: lighten($c-jira, 10%);
          filter: grayscale(0.25);
        }
        &-left {
          background: lighten($c-jira, 15%);
          filter: grayscale(0.25);
        }
        &-right {
          background: lighten($c-jira, 15%);
          filter: grayscale(0.25);
        }
        &-front {
          background: white;
        }
        &-back {
          color: white;
          background: $c-jira;
        }
      }
    }
    &[data-type="miro"] {
      .cube {
        &-top {
          background: lighten($c-miro, 30%);
          filter: grayscale(0.25);
        }
        &-bottom {
          background: lighten($c-miro, 10%);
          filter: grayscale(0.25);
        }
        &-left {
          background: lighten($c-miro, 15%);
          filter: grayscale(0.25);
        }
        &-right {
          background: lighten($c-miro, 15%);
          filter: grayscale(0.25);
        }
        &-front {
          background: white;
        }
        &-back {
          color: white;
          background: $c-miro;
        }
      }
    }
    &[data-type="dottedsign"] {
      .cube {
        &-top {
          background: lighten($c-dottedsign, 25%);
          filter: grayscale(0.25);
        }
        &-bottom {
          background: lighten($c-dottedsign, 5%);
          filter: grayscale(0.25);
        }
        &-left {
          background: lighten($c-dottedsign, 10%);
          filter: grayscale(0.25);
        }
        &-right {
          background: lighten($c-dottedsign, 10%);
          filter: grayscale(0.25);
        }
        &-front {
          background: white;
        }
        &-back {
          color: white;
          background: $c-dottedsign;
        }
      }
    }
  }
}
</style>
