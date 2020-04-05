<template>
  <div id="app">
    <div v-if="game">
      <p>{{JSON.stringify(game)}}</p>
    </div>
    <div v-else class="welcome">
      <h1>Welcome to Mugloar</h1>
      <h3>Dragon services needed!</h3>
      <p>
        <AppButton @click.native="startGame()">Start new game</AppButton>
      </p>
    </div>
  </div>
</template>

<script>
import AppButton from "./components/AppButton";

export default {
  name: "App",
  components: {
    AppButton
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame");
    }
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  min-height: 100%;
}
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
