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
      <logo-icon viewBox="0 0 167 52" class="footer-logo" />
      <span class="copyright"> &copy;2024 EzPark. Todos los derechos reservados </span>
    </div>
    <div class="footer__container--right">
      <a href="#" class="rrss">
        <facebook-icon viewBox="0 0 35 34" />
      </a>
      <a href="#" class="rrss">
        <twitter-icon viewBox="0 0 35 34" />
      </a>
      <a href="#" class="rrss">
        <instagram-icon viewBox="0 0 35 34" />
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
.rrss svg {
  width: inherit;
  height: inherit;
}
@media screen and (max-width: 1080px) {
  .footer {
    height: 80px;
  }
  .footer-logo {
    width: 120px;
  }
  .copyright {
    font-size: 14px;
  }
  .footer__container--right {
    gap: 12px;
  }
  .rrss {
    width: 32px;
    height: 32px;
  }
}
@media screen and (max-width: 768px) {
  .footer {
    padding-inline: 16px;
  }
  .footer__container--left {
    gap: 12px;
  }
  .copyright {
    font-size: 10px;
  }
  .footer__container--right {
    gap: 8px;
  }
  .rrss {
    width: 20px;
    height: 20px;
  }
}
</style>
