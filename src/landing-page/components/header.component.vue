<script>
export default {
  name: 'v-header'
}
</script>

<script setup>
import VButton from './button.component.vue'
import VLogo from './logo.component.vue'
import VLanguageSwitcher from '@/public/components/language-switcher.component.vue'
const navLinks = [
  {
    title: 'Producto',
    href: '#product'
  },
  {
    title: 'Caracteristicas',
    href: '#features'
  },
  {
    title: 'Testimonios',
    href: '#testimonials'
  },
  {
    title: 'Precios',
    href: '#pricing'
  },
  {
    title: 'Sobre nosotros',
    href: '#about-us'
  }
]
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar--left">
        <v-logo type="normal" />
        <v-language-switcher />
      </div>
      <div class="navbar--right">
        <ul class="navbar--right__navlinks">
          <li v-for="navlink of navLinks" :key="navlink.href">
            <a class="navlink" :href="navlink.href">{{ navlink.title }}</a>
          </li>
        </ul>
        <div class="divider"></div>
        <div class="navbar--right__auth">
          <router-link class="navlink register" to="/signup"> Registrar </router-link>
          <router-link to="/login">
            <v-button>Iniciar Sesión</v-button>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header {
  padding-inline: 48px;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 90;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.divider {
  height: 24px;
  width: 1px;
  background: var(--color-primary-500);
}
.navbar--left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.navbar--right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.navbar--right__navlinks {
  display: flex;
  list-style: none;
  gap: 24px;
}
.navlink {
  font-size: 16px;
  line-height: 24px;
  color: var(--color-title);
  text-decoration: none;
  font-weight: 700;
}
.navbar--right__auth {
  display: flex;
  align-items: center;
  gap: 24px;
}
.register {
  text-decoration: underline;
}

@media screen and (max-width: 1080px) {
  .navbar--right {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding-inline: 16px;
  }
  .navbar {
    height: 64px;
  }
}
</style>
