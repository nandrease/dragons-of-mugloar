<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

button {
  border: 3px solid;
  padding: 1em 2em;
  text-transform: uppercase;
  background: transparent;
  font-weight: 500;
  width: 100%;

  &:hover {
    background: $hover-bg;
  }
  &[white] {
    color: #fff;
    &:hover {
      color: #ccc;
      background: $hover-dark-bg;
    }
  }
}
</style>
