<script setup>
import SignInComponent from "@/public/components/signin.component.vue";
</script>

<template>
  <header>
    <h1>Sign In</h1>
  </header>
  <main>
    <sign-in-component/>
  </main>
</template>

<style scoped>
body {
  background-color: #D9D9D9;
}

main {
  display: flex;
  justify-content: center;
}
</style>
