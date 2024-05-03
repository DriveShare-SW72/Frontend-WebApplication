<script>
export default {
  name: 'v-base-layout'
}
</script>

<script setup>
import SidebarComponent from '@/public/components/sidebar.component.vue'
</script>

<template>
  <main class="main-layout">
    <div class="sidebar-container">
      <sidebar-component />
    </div>
    <div class="view-container">
      <h1 class="view-container-title">Ez Park</h1>
      <slot />
    </div>
  </main>
</template>

<style scoped>
.main-layout {
  width: 100%;
  height: 100dvh;
  display: flex;
}
.view-container {
  width: 100%;
  padding-block: 1.5rem;
  padding-inline: 3.5rem;
}
.view-container-title {
  font-size: 3.5rem;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
  margin: 0;
  text-align: center;
}
</style>
