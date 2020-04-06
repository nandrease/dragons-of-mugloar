<template>
  <div v-if="game" class="home-view">
    <AppStats />
    <h3>Start solving quests with your dragon!</h3>
    <div class="d-grid grid-items">
      <template v-if="!game.lives">
        <AppButton @click.native="restart()">Try Again</AppButton>
      </template>
      <template v-else>
        <router-link to="/quest">
          <AppButton>Start</AppButton>
        </router-link>
        <router-link to="/shop">
          <AppButton>Shop</AppButton>
        </router-link>
      </template>
    </div>
  </div>
  <div v-else class="welcome">
    <h1>Welcome to Mugloar</h1>
    <h3>Dragon services needed!</h3>
    <p>
      <AppButton @click.native="startGame()">Enter</AppButton>
    </p>
  </div>
</template>

<script>
import AppButton from "../components/AppButton";
import AppStats from "../components/AppStats";

export default {
  components: {
    AppButton,
    AppStats
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame");
    },
    restart() {
      this.$store.dispatch("restart");
    }
  },
  computed: {
    game() {
      return this.$store.getters.game;
    }
  }
};
</script>

<style lang="scss">
.d-grid {
  display: grid;
  grid-gap: 10px;
  justify-content: center;
}
.grid-items {
  grid-template-columns: auto auto;
}
.welcome,
.home-view {
  align-self: center;
  display: grid;
  justify-content: center;
  text-align: center;
  grid-gap: 10px;
  grid-template-columns: 320px;
}
</style>
