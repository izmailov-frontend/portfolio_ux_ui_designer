<template>
  <div class="appheader">
    <header class="header flex items-end justify-between">
      <div class="logo w-widthlogo">
        <img :src="linkLogo.src" alt="" />
      </div>
      <div class="links"><app-header-link></app-header-link></div>
    </header>
  </div>
</template>

<script>
import { ref } from "vue";
import AppHeaderLink from "./AppHeaderLink.vue";

export default {
  components: { AppHeaderLink },
  setup() {
    const linkLogo = ref({
      alt: "logo",
      src: require("@/assets/img/image.png"),
    });

    return {
      linkLogo,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  max-width: 1360px;
  margin: 0 auto;
}
</style>
