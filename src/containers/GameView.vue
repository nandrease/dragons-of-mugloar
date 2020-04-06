<template>
  <div>
    <h1 class="title">Message board</h1>
    <div class="card-board">
      <AppCard v-for="ad in ads" :key="ad.adId" :ad="ad" />
    </div>
  </div>
</template>

<script>
import AppCard from "@/components/AppCard";

export default {
  components: {
    AppCard
  },
  computed: {
    ads() {
      return this.$store.getters.ads || [];
    }
  },
  methods: {
    fetchAds() {
      this.$store.dispatch("fetchAds");
    }
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
