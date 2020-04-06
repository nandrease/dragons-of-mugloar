<template>
  <div>
    <h1 class="title">Message board</h1>
    <div class="card-board">
      <AppCard v-for="ad in ads" :key="ad.adId">
        <div slot="title">
          <p>Reward: {{ ad.reward }} | Expires in: {{ ad.expiresIn }}</p>
          <p>
            <strong>{{ ad.probability }}</strong>
          </p>
        </div>
        <p>{{ ad.message }}</p>
        <div slot="footer">
          <Button @click="solve(ad.adId)">Solve</Button>
        </div>
      </AppCard>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppCard from "@/components/AppCard";

export default {
  components: {
    AppCard
  },
  computed: {
    ...mapGetters(["ads"])
  },
  methods: {
    ...mapActions(["solve", "fetchAds"])
  },
  created() {
    this.fetchAds();
  }
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

.title {
  text-align: center;
}
.card-board {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  @include breakpoint("phone") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint("tablet") {
    grid-template-columns: repeat(3, 1fr);
  }
  @include breakpoint("desktop") {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
