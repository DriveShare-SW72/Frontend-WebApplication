<script>
export default {
  name: 'v-card'
}
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 16px 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 1080px) {
  .card {
    padding: 16px 16px;
  }
}
</style>
