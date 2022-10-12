<template lang="pug">
li.sponsor__item
  .sponsor__link
      a.link-top(:href="cubeLink" target="_blank")
      a.link-bottom(:href="cubeLink" target="_blank")
      a.link-left(:href="cubeLink" target="_blank")
      a.link-right(:href="cubeLink" target="_blank")
      .sponsor__cube.cube(:data-type="cubeEnTitle")
          .cube-top
          .cube-bottom
          .cube-left
          .cube-right
          .cube-front
              img(:src="require(`@/assets/images/${cubeEnTitle}_logo.png`)")
          .cube-back {{ cubeTitle }}
</template>

<script>
export default {
  name: "section_7_sponsor_cube",
  props: {
    cubeTitle: String,
    cubeEnTitle: String,
    cubeLink: String,
  },
};
</script>

<style lang="scss" scoped>
$c-blockstudio: #40587c;
$c-titansoft: #3a3a3a;
$c-kdanmobile: #00a89b;
$s-p: 12px;
.sponsor {
  &__lists {
    @include flex;
    margin: 0;
    padding: $s-p;
    perspective: 1000px;
    transform: translateZ(#{$s-p * 8});
  }
  &__item {
    padding: $s-p;
  }
  &__link {
    position: relative;
    width: $s-p * 8;
    height: $s-p * 8;
    a[class^="link-"] {
      transform-origin: $s-p * 4 $s-p * 4 -#{$s-p * 4};
      display: block;
      position: absolute;
      z-index: 1;
      transform: translateZ(#{$s-p * 2});
      width: 100%;
      height: 100%;
      &.link {
        &-top {
          top: 0;
          left: 0;
          height: 50%;
          clip-path: polygon(50% 100%, 0 0, 100% 0);
          @-moz-document url-prefix() {
            clip-path: url(#clip-top);
          }
          &:hover,
          &:focus {
            ~ .cube {
              transform: rotateX(-0.5turn);
              div:nth-child(6) {
                transform: rotateY(180deg) rotateZ(180deg) translateZ($s-p * 8);
              }
            }
          }
        }
        &-bottom {
          top: 0;
          right: 0;
          width: 50%;
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
        &-left {
          bottom: 0;
          right: 0;
          height: 50%;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
          @-moz-document url-prefix() {
            clip-path: url(#clip-bottom);
          }
          &:hover,
          &:focus {
            ~ .cube {
              transform: rotateX(0.5turn);
              div:nth-child(6) {
                transform: rotateY(180deg) rotateZ(180deg) translateZ($s-p * 8);
              }
            }
          }
        }
        &-right {
          bottom: 0;
          left: 0;
          width: 50%;
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
      }
      &:hover,
      &:focus {
        z-index: 2;
        transform: translateZ(#{$s-p * 3});
        width: 100% !important;
        height: 100% !important;
        -webkit-clip-path: none !important;
        clip-path: none !important;
        transition: all 0.3s cubic-bezier(0.37, 0, 0.63, 1) 0.8s;
      }
    }
  }
  &__cube {
    transform-origin: $s-p * 4 $s-p * 4 -#{$s-p * 4};
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
        width: $s-p * 5;
        height: $s-p * 5;
        object-fit: contain;
      }
      &.cube {
        &-top {
          transform-origin: center top;
          transform: rotateX(90deg) translateY(#{- ($s-p * 8)});
        }
        &-bottom {
          transform-origin: center bottom;
          transform: rotateX(-90deg) translateY($s-p * 8);
        }
        &-left {
          transform-origin: left center;
          transform: rotateY(-90deg) translateX(#{- ($s-p * 8)});
        }
        &-right {
          transform-origin: right center;
          transform: rotateY(90deg) translateX($s-p * 8);
        }
        &-front {
          transform-origin: center center;
          transform: rotateX(0);
        }
        &-back {
          transform-origin: center center;
          transform: rotateY(180deg) translateZ($s-p * 8);
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
  }
}
</style>
