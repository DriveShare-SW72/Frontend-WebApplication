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
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  padding-block: 2rem;
  padding-inline: 3.5rem;
}

@media screen and (max-width: 1080px) {
  .view-container {
    padding-block: 2rem;
    padding-inline: 2rem;
  }
}
</style>
