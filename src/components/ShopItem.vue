<template>
  <div class="card">
    <div class="card-title">
      <p>Id: {{ item.id }} | Cost: {{ item.cost }}</p>
      <p>
        <strong>{{ item.name }}</strong>
      </p>
    </div>
    <div class="card-footer">
      <Button @click="buy()">Buy</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    buy() {
      this.$store.dispatch("buyItem", this.item.id);
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
