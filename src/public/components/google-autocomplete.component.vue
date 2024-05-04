<script setup>
import { ref } from 'vue'

/** @type {HTMLDivElement} */
const inputRef = ref(null)

const emits = defineEmits(['placeChanged'])

async function initAutocomplete() {
  try {
    /** @type {google.maps.PlacesLibrary} */
    const { Autocomplete } = await window.google.maps.importLibrary('places')

    const autocomplete = new Autocomplete(inputRef.value, {
      componentRestrictions: { country: 'pe' }
      // fields: ['geometry', 'address_components']
    })

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      emits('placeChanged', place)
    })
  } catch (err) {
    console.error(err)
  }
}
initAutocomplete()
</script>

<template>
  <input
    class="p-inputtext"
    autocomplete="off"
    placeholder="Search in a specific address..."
    ref="inputRef"
  />
</template>
