<template>
  <div v-if="game" class="d-grid w-100">
    <AppStats />
    <div class="d-grid grid-items">
      <router-link to="/quest">
        <div class="card">
          <div class="card-title">
            <strong>Solve Quest</strong>
          </div>
        </div>
      </router-link>
      <router-link to="/shop">
        <div class="card">
          <div class="card-title">
            <strong>Shop</strong>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div v-else class="welcome">
    <h1>Welcome to Mugloar</h1>
    <h3>Dragon services needed!</h3>
    <p>
      <AppButton @click.native="startGame()">Start New Game</AppButton>
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
}
.w-100 {
  width: 100%;
}
.grid-items {
  grid-template-columns: 1fr 1fr;
}
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
