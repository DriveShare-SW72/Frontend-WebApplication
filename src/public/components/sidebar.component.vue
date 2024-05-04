<script>
export default {
  name: 'sidebar-component'
}
</script>

<script setup>
import { ref } from 'vue'
import PvSidebar from 'primevue/sidebar'
import PvButton from 'primevue/button'
import 'primeicons/primeicons.css'
import PvAvatar from 'primevue/avatar'

const visible = ref(false)
</script>

<template>
  <pv-sidebar v-model:visible="visible">
    <template #header>
      <div class="profile-container">
        <pv-avatar icon="pi pi-user" size="large" shape="square" />
        <div class="profile-stuff">
          <h2 style="margin: 0">Juan Carlos</h2>
          <a href=""><h3 style="margin: 0">Edit Profile</h3></a>
        </div>
      </div>
    </template>
    <template #default>
      <div class="items-container">
        <div class="upper-side">
          <div class="sidebar-item">
            <router-link class="router" to="/find-your-park">
              <i class="pi pi-home" />
            </router-link>
            <router-link class="router" to="/find-your-park">Home</router-link>
          </div>
          <div class="sidebar-item">
            <router-link class="router" to="/find-your-park">
              <i class="pi pi-map-marker" />
            </router-link>
            <router-link class="router" to="/find-your-park">Find Parking</router-link>
          </div>
          <div class="sidebar-item">
            <router-link class="router" to="/register-park">
              <i class="pi pi-dollar" />
            </router-link>
            <router-link class="router" to="/register-park">Rent Parking</router-link>
          </div>
        </div>
        <div class="lower-side">
          <div class="sidebar-item">
            <router-link class="router" to="/">
              <i class="pi pi-sign-out" />
            </router-link>
            <router-link class="router" to="/">Log Out</router-link>
          </div>
        </div>
      </div>
    </template>
  </pv-sidebar>
  <pv-button icon="pi pi-bars" @click="visible = true" />
</template>

<style scoped>
.sidebar-item {
  font-family: 'Rubik', 'Inter var', sans-serif;
}

h2,
h3 {
  display: inline-block;
}

a {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #3c4e67;
}

.sidebar-item {
  display: flex;
  flex-direction: row;

  gap: 1.5em;

  margin: 20px 0 0 5px;
}

.router{
  font-size: 1.5em;
}

.profile-container {
  display: inherit;
  gap: 1em;
}

.pi-home,
.pi-map-marker,
.pi-dollar,
.pi-sign-out {
  font-size: 2.2em;
}

.items-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
