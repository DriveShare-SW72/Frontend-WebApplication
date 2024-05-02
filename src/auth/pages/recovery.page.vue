<script>
export default {
  name: 'recovery-page',
}
</script>

<script setup>
import RecoveryFormComponent from '../components/recovery-form.component.vue'
</script>

<template>
  <main>
    <recovery-form-component />
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #1e2733;
}
</style>
