<template lang="pug">
#banner
    .banner__logo.js-cursorHover
        img(src="@/assets/images/s1-banner-logo.png")
    ul.banner__menu
        li.banner__item SCROLL DOWN
        li.banner__item SING UP
    p.banner__info 互動式網頁設計
//- 網頁區塊 1 ：Banner
    ## 意境以「互動式網頁設計」為主
    - 主標：The F2E 4th
    - 副標：「互動式網頁設計」

//- 等設計，使用 parallax scroll
    - gasp ScrollTrigger
</template>
