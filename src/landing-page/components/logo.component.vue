<script>
export default {
  name: 'v-logo'
}
</script>

<script setup>
import imageLogo from '@/assets/svg/logo.svg'
</script>

<template>
  <router-link to="/">
    <img :src="imageLogo" alt="Logo" class="logo" loading="eager" />
  </router-link>
</template>
