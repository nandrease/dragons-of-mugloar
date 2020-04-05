<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Click here!"
    }
  }
};
</script>

<style lang="scss">
button {
  border: 3px solid;
  padding: 1em 2em;
  text-transform: uppercase;
  background: transparent;
  font-weight: 500;
}
button:hover {
  background: rgba(255, 255, 255, 0.8);
  font-weight: bold;
}
</style>
