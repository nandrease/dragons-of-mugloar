<template>
  <div id="app">
    <h1>Welcome to Mugloar</h1>
    <h3>Dragon services needed!</h3>
    <p>
      <AppButton>Start new game</AppButton>
    </p>
  </div>
</template>

<script>
import AppButton from "./components/AppButton";

export default {
  name: "App",
  components: {
    AppButton
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
}
</style>
