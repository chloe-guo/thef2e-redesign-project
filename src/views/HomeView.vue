<template lang="pug">
.home
  img(src="@/assets/images/logo.png" alt="Vue logo")
  HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @include flex;
  background: $c-content-bg;
}
</style>
