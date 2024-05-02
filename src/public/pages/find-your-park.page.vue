<script>
export default {
  name: 'find-your-park-page'
}
</script>

<script setup>
const MAP_DEFAULT_CENTER = { lat: -12.1061161, lng: -77.026921 }
const MAP_DEFAULT_ZOOM = 18

import ParkingApiService from '@/parkings/services/parkingApi.service'
import VBaseLayout from '@/public/layout/base.layout.vue'
import VGoogleMap from '../components/google-map.component.vue'
import VInputText from 'primevue/inputtext'
import VSlider from 'primevue/slider'
import VButton from 'primevue/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const parkingService = new ParkingApiService()

const address = ref('')
const priceRange = ref([0, 100])
const router = useRouter()

const locations = ref([])

parkingService
  .getParkingsLocations()
  .then((data) => (locations.value = data))
  .catch(console.error)

function handleMarkerClick(marker) {
  router.push(`/find-your-park/parking/${marker.id}`)
}
</script>
<template>
  <v-base-layout>
    <div class="search-container">
      <form class="search-form">
        <v-input-text
          v-model:model-value="address"
          class="search-input"
          placeholder="Search in a specific address..."
        />
        <div class="search-filter-price">
          <span class="search-filter-price-label">Filter by price</span>
          <div class="search-filter-min-max-prices">
            <span class="search-filter-min-price">S/ {{ priceRange[0] }}</span>
            <span class="search-filter-max-price">S/ {{ priceRange[1] }}</span>
          </div>
          <v-slider range v-model="priceRange" class="search-filter-slider" />
        </div>
        <v-button label="History" class="search-btn-history" icon="pi pi-history" />
      </form>
    </div>
    <div class="map-container">
      <v-google-map
        :center="MAP_DEFAULT_CENTER"
        :zoom="MAP_DEFAULT_ZOOM"
        :markers="locations"
        @clickMarker="handleMarkerClick"
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
