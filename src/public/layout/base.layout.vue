<script>
export default {
  name: 'base-layout'
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
}
</style>
