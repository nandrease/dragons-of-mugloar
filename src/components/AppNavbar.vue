<template>
  <div class="statusbar">
    <AppButton @click.native="$emit('open-shop')">Shop</AppButton>
    <ul class="flex-menu">
      <li>
        Lives:
        <strong>{{game.lives}}</strong>
      </li>
      <li>
        Score:
        <strong>{{game.score}}</strong>
      </li>
      <li>
        Gold:
        <strong>{{game.gold}}</strong>
      </li>
      <li>
        Turn:
        <strong>{{game.turn}}</strong>
      </li>
      <li>
        High score:
        <strong>{{game.highScore}}</strong>
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

.statusbar {
  background: #333;
  color: #fff;
  padding: 15px 10px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

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
