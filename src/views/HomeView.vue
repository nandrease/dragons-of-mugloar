<template>
  <div v-if="game" class="home-view">
    <AppStats />
    <h3>Start solving quests with your dragon!</h3>
    <div class="d-grid grid-items">
      <router-link to="/quest">
        <AppButton>Start</AppButton>
      </router-link>
      <router-link to="/shop">
        <AppButton>Shop</AppButton>
      </router-link>
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
  grid-template-columns: 1fr 1fr;
}
.welcome,
.home-view {
  align-self: center;
  display: grid;
  justify-content: center;
  text-align: center;
  grid-gap: 10px;
  grid-template-columns: 350px;
}
</style>
