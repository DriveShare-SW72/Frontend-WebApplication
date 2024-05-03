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
    <image-logo class="logo" />
  </router-link>
</template>
