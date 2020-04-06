<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/variables.scss";

.card {
  padding: 20px;
  border: 3px solid;
  text-align: center;
  transition: background 0.5s ease-in;
  max-width: calc(100vw - 40px);

  .card p {
    word-break: break-word;
  }

  &:hover {
    background: $hover-bg;
  }
}
</style>
