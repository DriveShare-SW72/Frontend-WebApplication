<script setup>
import SignUpComponent from '@/public/components/signup.component.vue'
</script>

<template>
  <header>
    <h1>Sign Up</h1>
  </header>
  <main>
    <sign-up-component />
  </main>
</template>

<style scoped>
body {
  background-color: #d9d9d9;
}

main {
  display: flex;
  justify-content: center;
}
</style>
