<template lang="pug">
#view__home
  #first__view
    navComponent
    section_1_banner
  section_2_issue
  section_3_cooperation
  section_4_solution
  section_5_direction
  section_6_awards
  section_7_sponsor
  section_8_share
  section_9_faq
</template>

<script>
import navComponent from "@/components/header_nav.vue";
import section_1_banner from "@/components/section_1_banner.vue";
import section_2_issue from "@/components/section_2_issue.vue";
import section_3_cooperation from "@/components/section_3_cooperation.vue";
import section_4_solution from "@/components/section_4_solution.vue";
import section_5_direction from "@/components/section_5_direction.vue";
import section_6_awards from "@/components/section_6_awards.vue";
import section_7_sponsor from "@/components/section_7_sponsor.vue";
import section_8_share from "@/components/section_8_share.vue";
import section_9_faq from "@/components/section_9_faq.vue";

import { gsap, ScrollTrigger } from "gsap/all";

export default {
  name: "view_home",
  components: {
    navComponent,
    section_1_banner,
    section_2_issue,
    section_3_cooperation,
    section_4_solution,
    section_5_direction,
    section_6_awards,
    section_7_sponsor,
    section_8_share,
    section_9_faq,
    // section_4_solution,
  },
  mounted: function () {
    gsap.registerPlugin(ScrollTrigger);
    const s1TL = gsap.timeline({
      scrollTrigger: {
        trigger: "#first__view",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true
      },
    });
    s1TL.to(".transitions__top", {
      yPercent: "100",
      duration: 20,
    });
    s1TL.to(
      ".transitions__bottom",
      {
        yPercent: "-100",
        duration: 20,
      },
      "<"
    );
    s1TL.to("#first__view", {
      opacity: "0",
      duration: 1,
    });
    s1TL.to(".transitions__top", {
      yPercent: "-100",
      duration: 20,
    });
    s1TL.to(
      ".transitions__bottom",
      {
        yPercent: "100",
        duration: 20,
      },
      "<"
    );
  },
};
</script>
<style lang="scss">
.pin-spacer:first-child {
  height: 100vh !important;
  height: calc(var(--vh, 1vh) * 100) !important;
}
</style>