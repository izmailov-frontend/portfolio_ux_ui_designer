<script>
// import AppMobileCnc from "./components/AppMobileCnc.vue";

// import AppMainPage from "./components/AppMainPage.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter },
};
</script>
<template>
  <div id="app">
    <!-- <app-main-page></app-main-page> -->
    <app-header class="header px-[20px]"> </app-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<style scoped lang="scss">
#app {
  max-width: 1920px;
  background: #6e6e6e;
}

.content {
  margin: 0 auto;
  max-width: 1130px;
}
</style>
