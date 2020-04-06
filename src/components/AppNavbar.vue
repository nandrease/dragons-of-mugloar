<template>
  <div class="navbar">
    <router-link to="/">
      <AppButton white>Home</AppButton>
    </router-link>

    <ul class="flex-menu">
      <li>
        Level:
        <strong>{{ game.level }}</strong>
      </li>
      <li>
        Lives:
        <strong>{{ game.lives }}</strong>
      </li>
      <li>
        Score:
        <strong>{{ game.score }}</strong>
      </li>
      <li>
        Gold:
        <strong>{{ game.gold }}</strong>
      </li>
      <li>
        Turn:
        <strong>{{ game.turn }}</strong>
      </li>
      <li>
        High score:
        <strong>{{ game.highScore }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from "./AppButton";
export default {
  components: {
    AppButton
  },
  computed: {
    game() {
      return this.$store.getters.game;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/variables";

.navbar {
  background: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
  overflow: hidden;

  .router-link-active {
    flex: 1;
    margin-bottom: 10px;
    color: #fff;
    text-decoration: none;

    button {
      width: 100%;
    }

    &:hover {
      color: #ededed;
    }

    @include breakpoint("phone") {
      flex: 0;
      margin-bottom: 0;
    }
  }

  .flex-menu {
    display: flex;
    justify-content: flex-end;
    list-style: none;

    li {
      margin: 0 10px;
    }
  }
}
</style>
