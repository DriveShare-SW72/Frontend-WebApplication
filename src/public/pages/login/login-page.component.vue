<script setup>
import CompSignin from "@/public/components/signin.component.vue";
</script>

<template>
  <header>
    <h1>Sign In</h1>
  </header>
  <main>
    <comp-signin/>
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
