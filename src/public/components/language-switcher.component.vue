<script setup>
import PvSelectButton from 'primevue/selectbutton'

defineOptions({
  name: 'language-switcher'
})

const languages = ['en', 'es']
</script>

<template>
  <pv-select-button
    v-model="$i18n.locale"
    :options="languages"
    aria-labelledby="basic"
    class="language-switcher"
  />
</template>

<style scoped>
.language-switcher :deep(.p-button-label) {
  text-transform: uppercase;
  font-size: 12px;
}
</style>
