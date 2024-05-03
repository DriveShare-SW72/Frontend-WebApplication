<script>
export default {
  name: 'find-your-park-page'
}
</script>

<script setup>
import ParkingApiService from '@/parkings/services/parkingApi.service'
import VBaseLayout from '@/public/layout/base.layout.vue'
import VGoogleMap from '@/public/components/google-map.component.vue'
import VGoogleAutocomplete from '@/public/components/google-autocomplete.component.vue'
import PvSlider from 'primevue/slider'
import PvButton from 'primevue/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const MAP_DEFAULT_CENTER = { lat: -12.1061161, lng: -77.026921 }
const MAP_DEFAULT_ZOOM = 18

const parkingService = new ParkingApiService()

const priceRange = ref([0, 100])
const locations = ref([])
const router = useRouter()
/** @type {import('vue').Ref<google.maps.Map>} */
const map = ref(null)

parkingService
  .getParkingsLocations()
  .then((data) => (locations.value = data))
  .catch(console.error)

function handleMarkerClick(marker) {
  router.push(`/find-your-park/parking/${marker.id}`)
}

/** @param {google.maps.places.PlaceResult} place */
function handleAutocompletePlaceChanged(place) {
  const { location } = place.geometry
  if (!location) return
  map.value.panTo(location)
  map.value.setZoom(18)
}
</script>
<template>
  <v-base-layout>
    <div class="search-container">
      <form class="search-form" @submit.prevent>
        <v-google-autocomplete
          class="search-input"
          @placeChanged="handleAutocompletePlaceChanged"
        />
        <div class="search-filter-price">
          <span class="search-filter-price-label">Filter by price</span>
          <div class="search-filter-min-max-prices">
            <span class="search-filter-min-price">S/ {{ priceRange[0] }}</span>
            <span class="search-filter-max-price">S/ {{ priceRange[1] }}</span>
          </div>
          <pv-slider range v-model="priceRange" class="search-filter-slider" />
        </div>
        <pv-button label="History" class="search-btn-history" icon="pi pi-history" />
      </form>
    </div>
    <div class="map-container">
      <v-google-map
        :center="MAP_DEFAULT_CENTER"
        :zoom="MAP_DEFAULT_ZOOM"
        :markers="locations"
        @clickMarker="handleMarkerClick"
        v-model:map="map"
      />
    </div>
  </v-base-layout>
</template>

<style scoped>
.search-container {
  margin-bottom: 2.5rem;
}
.search-form {
  display: flex;
  gap: 3rem;
  align-items: center;
}
.search-input {
  width: 100%;
}
.search-filter-price {
  width: 12rem;
}
.search-filter-price-label {
  text-align: center;
  display: block;
  font-size: 1.05rem;
  font-weight: 700;
}
.search-filter-min-max-prices {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.search-filter-min-price {
  transform: translateX(-50%);
}
.search-filter-max-price {
  transform: translateX(50%);
}
.search-btn-history {
  flex-shrink: 0;
}

.map-container {
  width: 100%;
  aspect-ratio: 3 / 1;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}
</style>
