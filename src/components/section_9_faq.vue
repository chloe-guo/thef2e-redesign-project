<template lang="pug">
#faq
	h3.faq__title 常見問答
	.tab__wrap
		ul.tab__menu
			li.tab__item
				button.tab__link.js-cursorHover.is-actived(data-target="common")
					.link__shadow
					.link__text 一般<span class="is-hiddenInMobile">常見</span>問答
			li.tab__item
				button.tab__link.js-cursorHover(data-target="designer")
					.link__shadow
					.link__text UI 設計師
			li.tab__item
				button.tab__link.js-cursorHover(data-target="frontend")
					.link__shadow
					.link__text 前端工程師
			li.tab__item
				button.tab__link.js-cursorHover(data-target="group")
					.link__shadow
					.link__text 團體組
		.tab__content
			.tab__pane.is-actived(data-target="common")
				ul
					li
						h6.js-faq-fadeText Q：如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？
						p.js-faq-fadeText A：可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
					li
						h6.js-faq-fadeText Q：大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品
						p.js-faq-fadeText A：這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
					li
						h6.js-faq-fadeText Q：我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？
						p.js-faq-fadeText A：主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
					li
						h6.js-faq-fadeText Q：我已經寫到一半了，但時間快來不及，可以先投稿嗎？
						p.js-faq-fadeText A：可以，有投稿表示你還會持續努力在這次活動上。
			.tab__pane(data-target="designer")
				ul
					li
						h6.js-faq-fadeText Q：到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。
						p.js-faq-fadeText A：其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
					li
						h6.js-faq-fadeText Q：投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？
						p.js-faq-fadeText A：會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。
					li
						h6.js-faq-fadeText Q：一定要上傳「線上標示文件」嗎？
						p.js-faq-fadeText A：是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。
					li
						h6.js-faq-fadeText Q：不能使用 PS、Illustrator 設計嗎？
						p.js-faq-fadeText A：只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
					li
						h6.js-faq-fadeText Q：當每週一題目出來後，我有一些設計進度也可以先投稿嗎？
						p.js-faq-fadeText A：可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。
			.tab__pane(data-target="frontend")
				ul
					li
						h6.js-faq-fadeText Q：我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端
						p.js-faq-fadeText A：可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。
					li
						h6.js-faq-fadeText Q：前端介面一定要長得一模一樣嗎？
						p.js-faq-fadeText A：不用，依照自己的想法來開發也可以。
					li
						h6.js-faq-fadeText Q：有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好
						p.js-faq-fadeText A：這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。
					li
						h6.js-faq-fadeText Q：那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎？
						p.js-faq-fadeText A：可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。
			.tab__pane(data-target="group")
				ul
					li
						h6.js-faq-fadeText Q：請問團體組最多幾人？
						p.js-faq-fadeText A：最多 4 人，投稿作品時請派一位組長來投稿即可。
					li
						h6.js-faq-fadeText Q：我對獎項有興趣，可以只做第三道主題就好嗎？
						p.js-faq-fadeText A：可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。
					li
						h6.js-faq-fadeText Q：那團體組第三道主題最晚投稿期限為？
						p.js-faq-fadeText A：團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。
					li
						h6.js-faq-fadeText Q：我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？
						p.js-faq-fadeText A：您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。
					li
						h6.js-faq-fadeText Q：請問除了前端開發、UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？
						p.js-faq-fadeText A：可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。
					li
						h6.js-faq-fadeText Q：團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？
						p.js-faq-fadeText A：不能，預設是不能讓『個人組-前端工程師』採用。
</template>

<script>
export default {
  mounted: function () {
    $(".tab__pane").each(function () {
      $(this)
        .find(".js-faq-fadeText")
        .each(function () {
          let thisEl = $(this);
          let str = thisEl.text().split("");
          $(this).text("");
          str.forEach((char) => {
            let span = document.createElement("span");
            span.innerText = char;
            thisEl.append(span);
          });
        });
    });

    changeTab($(".tab__link.is-actived").data("target"));

    $(".tab__link").on("click", function () {
      let target = $(this).data("target");
      changeTab(target);
      $(".tab__link").not($(this)).removeClass("is-actived");
      $(this).addClass("is-actived");
    });

    function changeTab(target) {
      let removeTime = 0;
      $(".tab__pane.is-actived").each(function () {
        $(this).removeClass("is-actived");
        $(this)
          .find(".js-faq-fadeText")
          .each(function (i) {
            $(this)
              .children("span")
              .each(function (j) {
                $(this).css("opacity", "0");
              });
          });
      });
      $(".tab__pane").each(function () {
        if ($(this).data("target") == target) {
          $(this).addClass("is-actived");
          $(this)
            .find(".js-faq-fadeText")
            .each(function (i) {
              $(this)
                .children("span")
                .each(function (j) {
                  setTimeout(() => {
                    $(this).css("opacity", "1");
                  }, (i * 12 + j) * 5 + removeTime / 2);
                });
            });
        }
      });
    }
  },
};
</script>

<style lang="scss">
.tab {
  &__pane {
    .js-faq-fadeText {
      @include flex(row, flex-start, flex-start);
      flex-wrap: wrap;
      span {
        opacity: 0;
        transition: opacity 0.6s cubic-bezier(0.11, 0, 0.5, 0);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
#faq {
  background: $c-bg;
}
.faq {
  &__title {
    @include font(56, 1.5, $fw-primary, 5);
    @include flex;
    background: $c-brand1;
    padding: $space-m;
    @media (max-width: $sm) {
      padding: $space-s;
      @include font(48, 1.5, $fw-primary, 5);
    }
  }
}
.tab {
  &__wrap {
    @include rect(88vw, auto);
    max-width: 85.625rem;
    margin: auto;
    margin-top: calc($space-m * 5);
    @media (max-width: $sm) {
      @include rect(90vw, auto);
      max-width: 90vw;
      margin-top: calc($space-s * 6);
    }
  }
  &__menu {
    @include flex;
    margin-bottom: calc($space-s * 5);
  }
  &__item {
    @include rect(calc((100% - $space-s * 4) / 4), 4.0625rem);
    & + .tab__item {
      margin-left: $space-s;
    }
  }
  &__link {
    display: block;
    @include rect;
    border: none;
    &.is-actived {
      .link {
        &__text {
          background: $c-brand1-dark;
          transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1),
            background 0.3s 0.2s cubic-bezier(0.33, 1, 0.68, 1);
          @media (max-width: $sm) {
            transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
          }
        }
      }
    }
    &:not(.is-actived):hover {
      .link {
        &__shadow {
          &::before,
          &::after {
            @include rect(100%, $space-xs);
          }
        }
        &__text {
          transform: translate($space-xs, $space-xs);
        }
      }
      @media (max-width: $sm) {
        .link {
          &__shadow {
            &::before,
            &::after {
              @include rect(100%, 0);
            }
          }
          &__text {
            transform: translate(0, 0);
          }
        }
      }
    }
    .link {
      &__shadow {
        @include rect;
        @include poa;
        background: $c-brand1-lighter;
        transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        &::after {
          @include beaf;
          @include rect(100%, 0);
          background: $c-brand1-lighter;
          @include poa(0, 0, r, b);
          transform-origin: left top;
          transform: skewX(45deg);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        &::before {
          @include beaf;
          @include rect(100%, 0);
          background: $c-brand1-lighter;
          @include poa(l, t, 0, 0);
          transform-origin: right top;
          transform: translateY(100%) skewX(45deg);
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        @media (max-width: $sm) {
          display: none;
          &::after,
          &::before {
            display: none;
          }
        }
      }
      &__text {
        @include rect;
        @include flex;
        background: white;
        @include font(36);
        color: $c-brand1;
        transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        @media (max-width: $sm) {
          @include font(28);
        }
      }
    }
  }
  &__content {
  }
  &__pane {
    padding-bottom: calc($space-l * 5);
    display: none;
    li {
      @include font(24);
      @media (max-width: $sm) {
        @include font(26);
      }
      & + li {
        margin-top: calc($space-s * 5);
      }
      h6 {
        @include font(24);
        color: $c-brand1-lighter;
        @media (max-width: $sm) {
          @include font(26);
        }
      }
    }
    &.is-actived {
      display: block;
    }
  }
}
</style>
