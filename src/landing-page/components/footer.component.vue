<script>
export default {
  name: 'v-footer'
}
</script>

<script setup>
import LogoIcon from '@/assets/svg/logo-white.svg?component'
import FacebookIcon from '@/assets/svg/facebook.svg?component'
import TwitterIcon from '@/assets/svg/twitter.svg?component'
import InstagramIcon from '@/assets/svg/instagram.svg?component'
</script>

<template>
  <footer class="footer">
    <div class="footer__container--left">
      <logo-icon />
      <span class="copyright"> &copy;2024 EzPark. Todos los derechos reservados </span>
    </div>
    <div class="footer__container--right">
      <a href="#" class="rrss">
        <facebook-icon />
      </a>
      <a href="#" class="rrss">
        <twitter-icon />
      </a>
      <a href="#" class="rrss">
        <instagram-icon />
      </a>
    </div>
  </footer>
</template>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 48px;
  background: var(--color-primary-500);
  height: 120px;
  color: var(--color-white);
}
.footer__container--left {
  display: flex;
  align-items: center;
  gap: 40px;
  font-weight: 600;
  font-size: 16px;
}
.footer__container--right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.rrss {
  width: 36px;
  height: 36px;
}
</style>
