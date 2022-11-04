<template lang="pug">
#cooperation
    .cooperation__layers
        img.cooperation__layer.cooperation__layer-1(src="@/assets/images/s3-cooperation-layer-1.png")
        img.cooperation__layer.cooperation__layer-2(src="@/assets/images/s3-cooperation-layer-2.png")
        img.cooperation__layer.cooperation__layer-3(src="@/assets/images/s3-cooperation-layer-3.png")
        img.cooperation__layer.cooperation__layer-4(src="@/assets/images/s3-cooperation-layer-4.png")
//- 網頁區塊 3：破題
    ## 本屆主題：互動式網頁設計
    以下兩個角色進行攜手合作
    - UI 設計師
    - 前端工程師

//- 等設計，使用 parallax scroll
    - gasp ScrollTrigger
</template>

<style lang="scss" scoped>
#cooperation {
  @include rect(100vw, 100vh);
  height: calc(var(--vh, 1vh) * 100);
  @include flex(column, flex-start, center);
}
.cooperation {
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
