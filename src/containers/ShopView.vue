<template>
  <div>
    <h1 class="title">Shop</h1>
    <div class="card-board">
      <ShopItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import ShopItem from "@/components/ShopItem";

export default {
  components: {
    ShopItem
  },
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  created() {
    this.$store.dispatch("fetchShopListings");
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
