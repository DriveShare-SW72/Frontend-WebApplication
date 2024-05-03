<script>
export default {
  name: 'v-button'
}
</script>

<template>
  <button type="button">
    <slot />
  </button>
</template>

<style scoped>
button {
  font-family:
    'Rubik',
    system-ui,
    -apple-system,
    sans-serif;
  height: 40px;
  border-radius: 4px;
  padding-inline: 16px;
  background-color: var(--color-primary-500);
  color: var(--color-white);
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
}
</style>
