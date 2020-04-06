<template>
  <div id="app" :class="{ home: isHome }">
    <AppNavbar v-if="!isHome" />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar";

export default {
  name: "App",
  components: {
    AppNavbar
  },
  computed: {
    isHome() {
      return this.$route.path !== "/quest" && this.$route.path !== "/shop";
    }
  }
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 10px;
  align-items: center;
  min-height: 100%;
  padding: 0 20px 20px;
}
</style>
