<script setup>
import { ref, watch } from 'vue'

const mapObj = defineModel('map', { type: [Object, null], required: true })
const emits = defineEmits(['clickMarker'])
const props = defineProps({
  center: {
    type: Object,
    default: () => ({ lat: -34.397, lng: 150.644 }),
    required: true
  },
  zoom: {
    type: Number,
    required: true
  },
  markers: {
    type: Array,
    default: () => []
  }
})

const mapRef = ref(null)

async function renderMarkers(map) {
  try {
    /** @type {google.maps.MarkerLibrary} */
    const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker')

    props.markers.forEach((marker) => {
      const advancedMarker = new AdvancedMarkerElement({
        map,
        position: {
          lat: marker.lat,
          lng: marker.lng
        }
      })
      advancedMarker.addListener('click', () => emits('clickMarker', marker))
    })
  } catch (err) {
    console.error(err)
  }
}

async function initMap() {
  try {
    /** @type {google.maps.MapsLibrary} */
    const { Map } = await window.google.maps.importLibrary('maps')

    const map = new Map(mapRef.value, {
      center: props.center,
      zoom: props.zoom,
      mapId: '4504f8b37365c3d0',
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    })
    mapObj.value = map

    renderMarkers(map)
  } catch (err) {
    console.error(err)
  }
}

watch(
  () => props.markers,
  () => {
    if (mapObj.value) renderMarkers(mapObj.value)
  }
)
initMap()
</script>

<template>
  <div class="map" ref="mapRef"></div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
