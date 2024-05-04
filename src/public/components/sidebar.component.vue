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
  <div class="sidebar-container">
    <div class="profile-container">
      <pv-avatar class="profile-avatar" icon="pi pi-user" size="large" shape="square" />
      <div class="profile-stuff">
        <h2 class="profile-name">Juan Carlos</h2>
        <p class="edit-profile">Edit profile</p>
      </div>
    </div>
    <div class="items-container">
      <div class="sidebar-item">
        <router-link class="nav-link" to="/find-your-park" active-class="nav-link--active">
          <i class="pi pi-home" />
          <span>Find your park</span>
        </router-link>
      </div>
      <div class="sidebar-item">
        <router-link class="nav-link" to="/register-park" active-class="nav-link--active">
          <i class="pi pi-dollar" />
          <span>Rent Parking</span>
        </router-link>
      </div>
      <div class="sidebar-item">
        <router-link class="nav-link" to="/your-garages" active-class="nav-link--active">
          <i class="pi pi-book" />
          <span>Your garages</span>
        </router-link>
      </div>
      <div class="sidebar-item">
        <router-link class="nav-link" to="/history" active-class="nav-link--active">
          <i class="pi pi-history" />
          <span>History</span>
        </router-link>
      </div>
    </div>
    <div class="sign-out-container">
      <div class="sidebar-item">
        <router-link class="nav-link" to="/">
          <i class="pi pi-sign-out" />
          <span>Log Out</span>
        </router-link>
      </div>
    </div>
  </div>
  <pv-sidebar v-model:visible="visible" class="mobile-sidebar-pv">
    <template #container>
      <div class="sidebar-container">
        <div class="profile-container">
          <pv-avatar class="profile-avatar" icon="pi pi-user" size="large" shape="square" />
          <div class="profile-stuff">
            <h2 class="profile-name">Juan Carlos</h2>
            <p class="edit-profile">Edit profile</p>
          </div>
        </div>
        <div class="items-container">
          <div class="sidebar-item">
            <router-link class="nav-link" to="/find-your-park" active-class="nav-link--active">
              <i class="pi pi-home" />
              <span>Find your park</span>
            </router-link>
          </div>
          <div class="sidebar-item">
            <router-link class="nav-link" to="/register-park" active-class="nav-link--active">
              <i class="pi pi-dollar" />
              <span>Rent Parking</span>
            </router-link>
          </div>
          <div class="sidebar-item">
            <router-link class="nav-link" to="/your-garages" active-class="nav-link--active">
              <i class="pi pi-book" />
              <span>Your garages</span>
            </router-link>
          </div>
          <div class="sidebar-item">
            <router-link class="nav-link" to="/history" active-class="nav-link--active">
              <i class="pi pi-history" />
              <span>History</span>
            </router-link>
          </div>
        </div>
        <div class="sign-out-container">
          <div class="sidebar-item">
            <router-link class="nav-link" to="/">
              <i class="pi pi-sign-out" />
              <span>Log Out</span>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </pv-sidebar>
  <div class="sidebar-trigger-container">
    <pv-button class="sidebar-trigger" icon="pi pi-bars" @click="visible = true" />
  </div>
</template>

<style scoped>
.sidebar-container {
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #3c4e67;
  padding-block: 32px;
}
.profile-container {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-inline: 32px;
}
.profile-avatar {
  flex-shrink: 0;
}
.profile-stuff {
  display: flex;
  flex-direction: column;
}
.profile-name {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-block: 0 4px;
}
.edit-profile {
  margin: 0;
  color: #fff;
}
.items-container {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}
.sidebar-item {
  display: flex;
  flex-direction: row;
  color: #fff;
}
.nav-link {
  color: #fff;
  padding-block: 12px;
  width: 100%;
  text-decoration: none;
  display: flex;
  gap: 12px;
  align-items: center;
  padding-inline: 32px;
}
.nav-link:not(.nav-link--active) {
  transition: all 0.15s ease-in;
}
.nav-link:not(.nav-link--active):hover {
  background: #2e3c4f;
}
.nav-link--active {
  background: #ef6c42;
}
.nav-link .pi {
  font-size: 20px;
}
.nav-link span {
  font-size: 18px;
  font-weight: 600;
}
.sign-out-container {
  margin-top: auto;
}
.sidebar-trigger {
  display: none;
}
.sidebar-trigger-container {
  display: none;
}

@media screen and (max-width: 1080px) {
  .sidebar-container {
    display: none;
  }
  .sidebar-trigger-container {
    display: flex;
    align-items: start;
    height: 100%;
    background: #3c4e67;
  }
  .sidebar-trigger {
    display: block;
    background: none;
    border: none;
    margin-top: 12px;
  }
  .mobile-sidebar-pv .sidebar-container {
    display: block;
  }
}
</style>
