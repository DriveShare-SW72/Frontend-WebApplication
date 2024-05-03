<script>
export default {
  name: 'v-header'
}
</script>

<script setup>
import VButton from './button.component.vue'
import VLogo from './logo.component.vue'
const navlinks = [
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
      </div>
      <div class="navbar--right">
        <ul class="navbar--right__navlinks">
          <li v-for="navlink of navlinks" :key="navlink.href">
            <a class="navlink" :href="navlink.href">{{ navlink.title }}</a>
          </li>
        </ul>
        <div class="divider"></div>
        <div class="navbar--right__auth">
          <a href="#" class="navlink register">Registrar</a>
          <v-button>Iniciar Sesión</v-button>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.header {
  padding-inline: 48px;
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
</style>
