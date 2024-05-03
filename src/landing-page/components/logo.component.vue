<script>
export default {
  name: 'v-logo'
}
</script>

<script setup>
import ImageLogo from '@/assets/svg/logo.svg?component'
</script>

<template>
  <router-link to="/">
    <image-logo viewBox="0 0 167 52" class="logo" />
  </router-link>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .logo {
    width: 96px;
  }
}
</style>
