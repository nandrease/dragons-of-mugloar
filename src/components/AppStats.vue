<template>
  <div class="card">
    <div class="card-title">
      <p>
        <strong>Game Statistics</strong>
      </p>
    </div>
    <div class="card-body">
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
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    game() {
      return this.$store.getters.game;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

.card {
  padding: 20px;
  border: 3px solid;
  text-align: center;
  transition: background 0.5s ease-in;

  &:hover {
    background: $hover-bg;
  }

  .grid-menu {
    list-style: none;
    text-align: left;
    li {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
