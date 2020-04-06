<template>
  <AppCard>
    <template slot="title">
      <h3>Game Statistics</h3>
    </template>
    <template>
      <ul class="grid-menu">
        <li>
          Game id
          <strong>{{ game.gameId }}</strong>
        </li>
        <li>
          Level
          <strong>{{ game.level }}</strong>
        </li>
        <li>
          Score
          <strong>{{ game.score }}</strong>
        </li>
        <li>
          High score
          <strong>{{ game.highScore }}</strong>
        </li>
        <li>
          Gold
          <strong>{{ game.gold }}</strong>
        </li>
        <li>
          Lives
          <strong>{{ game.lives }}</strong>
        </li>
      </ul>
    </template>
  </AppCard>
</template>

<script>
import { mapGetters } from "vuex";
import AppCard from "./AppCard";

export default {
  components: {
    AppCard
  },
  computed: {
    ...mapGetters(["game"])
  }
};
</script>

<style lang="scss">
.grid-menu {
  list-style: none;
  text-align: left;
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
