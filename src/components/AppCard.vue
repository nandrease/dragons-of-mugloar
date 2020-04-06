<template>
  <div class="card">
    <div class="card-title">
      <p>Reward: {{ ad.reward }} | Expires in: {{ ad.expiresIn }}</p>
      <p>
        <strong>{{ ad.probability }}</strong>
      </p>
    </div>
    <div class="card-body">
      <p>{{ ad.message }}</p>
    </div>
    <div class="card-footer">
      <Button @click="solve()">Solve</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ad: {
      type: Object
    }
  },
  methods: {
    solve() {
      this.$store.dispatch("solveAd", this.ad.adId);
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
}
</style>
