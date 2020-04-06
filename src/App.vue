<template>
  <div id="app">
    <div v-if="game">
      <AppNavbar @open-shop="openShop" />
      <ShopView v-if="shop" />
      <GameView :game="game" />
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
import AppNavbar from "./components/AppNavbar";
import GameView from "./containers/GameView";
import ShopView from "./containers/ShopView";

export default {
  name: "App",
  components: {
    AppButton,
    AppNavbar,
    GameView,
    ShopView
  },
  data() {
    return {
      shop: false
    };
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame");
    },
    openShop() {
      this.shop = !this.shop;
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
