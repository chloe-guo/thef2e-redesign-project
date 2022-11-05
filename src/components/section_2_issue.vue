<template lang="pug">
#issue
    ul.issue__lists
        li.issue__item
            .issue__background
                .issue-1-web
                    img(src="@/assets/images/s2-issue-1-web.gif")
                .issue-1-car
                    img(src="@/assets/images/card-right.gif")
                .issue-1-dialog.is-cubeFont
                    .dialog__text I'm cool!
            h6.issue__text.issue-1-text(data-stroke="羨慕別人的酷酷網頁動畫...") 羨慕別人的酷酷網頁動畫...
        li.issue__item
            .issue__background
                .issue-2-soldier
                    img(src="@/assets/images/s2-issue-2-soldier.png")
                .issue-2-dialog.is-cubeFont
                    .dialog__text !@#$%...
            h6.issue__text.issue-2-text(data-stroke="滿足不了同事的許願...") 滿足不了同事的許願...
        li.issue__item
            .issue__background
                .issue-3-tree
                    img(src="@/assets/images/s2-issue-3-tree.png")
                .issue-3-soldier
                    img(src="@/assets/images/s2-issue-3-soldier.png")
            h6.issue__text.issue-3-text(data-stroke="動畫技能樹太雜無從下手...") 動畫技能樹太雜無從下手...
</template>

<script>
import $ from "jquery";
export default {
  name: "section_2_issue",
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
#issue {
  padding: calc($space-m * 8) 0;
}
.issue {
  &__list {
    @include rect(100%, auto);
    clear: both;
  }
  &__item {
    @include rect(980px, 570px);
    background: $c-brand1;
    & + .issue__item {
      margin-top: calc($space-m * 10);
    }
    &:nth-child(2n + 1) {
      float: left;
      .issue__text {
        @include poa(l, 0, 0, 0);
        transform: translateX(50%);
      }
    }
    &:nth-child(2n) {
      float: right;
      .issue__text {
        @include poa(0, 0, r, 0);
        transform: translateX(-50%);
      }
    }
  }
  &__text {
    display: block;
    @include textstroke(5px, $c-brand1-dark, 36px, 1.5, $fw-primary, 2px);
  }
  &__background {
    @include rect;
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
      .dialog__text {
        color: $c-brand1-dark;
        @include font(32px);
        transform: translateY(-38%);
      }
    }
  }
  &-2 {
    &-soldier {
      @include rect(calc(1220px / 2), 588px);
      overflow: hidden;
      @include poa(0, t, 0, 0);
      transform: translateX(5%);
      img {
        @include rect(1220px, 588px);
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
      .dialog__text {
        color: $c-brand1-dark;
        @include font(32px);
        transform: translateY(-6%);
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
