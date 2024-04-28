<script scoped>
import RecoveryFormComponent from '../components/recovery-form.component.vue'

export default {
  name: 'recovery-page',
  components: {
    RecoveryFormComponent
  }
}
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
