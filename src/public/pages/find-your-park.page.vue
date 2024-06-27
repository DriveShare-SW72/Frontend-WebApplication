<script>
import VBaseLayout from '@/public/layout/base.layout.vue'
import VGoogleMap from '@/public/components/google-map.component.vue'
import VGoogleAutocomplete from '@/public/components/google-autocomplete.component.vue'
import PvDropdown from 'primevue/dropdown'
import PvButton from 'primevue/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useParkings } from '@/store/parkings'

import { MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM, RATING_OPTIONS, FARE_OPTIONS } from '@/constants'

export default {
  name: 'find-your-park-page',
  components: {
    VBaseLayout,
    VGoogleMap,
    VGoogleAutocomplete,
    PvDropdown,
    PvButton
  },
  setup() {
    const locationsStore = useParkings()
    const router = useRouter()

    /** @type {import('vue').Ref<google.maps.Map>} */
    const map = ref(null)
    const selectedFare = ref('')
    const selectedRating = ref('')

    const handleMarkerClick = function (marker) {
      router.push(`/find-your-park/parking/${marker.parking_id}`)
    }

    /** @param {google.maps.places.PlaceResult} place */
    const handleAutocompletePlaceChanged = function (place) {
      const { location } = place.geometry
      if (!location) return
      map.value.panTo(location)
      map.value.setZoom(18)
    }

    const init = function () {
      locationsStore.loadLocations()
    }

    init()

    return {
      MAP_DEFAULT_CENTER,
      MAP_DEFAULT_ZOOM,
      RATING_OPTIONS,
      FARE_OPTIONS,
      selectedFare,
      selectedRating,
      handleMarkerClick,
      handleAutocompletePlaceChanged,
      map,
      locationsStore
    }
  }
}
</script>

<template>
  <v-base-layout>
    <section class="main-section">
      <header class="section-header">
        <h1 class="section-title">Find your park</h1>
        <p class="section-subtitle">
          Search for a parking lot near you and find the best option for you. You can filter by
          price and see the location of the parking lot on the map.
        </p>
      </header>
      <div class="search-container">
        <form class="search-form" @submit.prevent>
          <v-google-autocomplete
            class="search-input"
            @placeChanged="handleAutocompletePlaceChanged"
          />
          <div class="search-filters">
            <pv-dropdown
              class="search-dropdown"
              placeholder="Filter by fare"
              v-model="selectedFare"
              :options="FARE_OPTIONS"
            />
            <pv-dropdown
              class="search-dropdown"
              placeholder="Filter by rating"
              v-model="selectedRating"
              :options="RATING_OPTIONS"
            />
          </div>

          <pv-button label="Search" class="search-btn" icon="pi pi-search" />
        </form>
      </div>
      <div class="map-container">
        <v-google-map
          :center="MAP_DEFAULT_CENTER"
          :zoom="MAP_DEFAULT_ZOOM"
          :markers="locationsStore.locations"
          @clickMarker="handleMarkerClick"
          v-model:map="map"
        />
      </div>
    </section>
  </v-base-layout>
</template>

<style scoped>
.main-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.section-title {
  font-size: 48px;
  font-family: 'Rubik', sans-serif;
  color: #3c4e67;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-block: 0 12px;
}
.section-subtitle {
  font-size: 18px;
  margin-block: 0;
}
.section-header {
  margin-bottom: 1.25rem;
}
.search-container {
  margin-bottom: 1.25rem;
}
.search-form {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.search-input {
  width: 100%;
  outline-color: #ef6c42;
  font-family: 'Mulish', sans-serif;
}
.search-dropdown {
  outline-color: #ef6c42;
}
.search-filters {
  display: flex;
  gap: 16px;
}
.search-dropdown :deep(.p-dropdown-label) {
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
}
.search-btn {
  flex-shrink: 0;
  background: #3c4e67;
  font-family: 'Mulish', sans-serif;
  transition: all 0.15s ease-in;
  border: 0;
}
.search-btn:hover {
  background: #2e3c4f;
}
.map-container {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}
@media screen and (max-width: 1080px) {
  .map-container {
    aspect-ratio: initial;
    height: 100%;
  }
  .search-form {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
  .section-title {
    font-size: 32px;
    margin-bottom: 8px;
  }
  .section-subtitle {
    font-size: 14px;
  }
  .search-form {
    display: grid;
    grid-template-areas:
      'search-input search-btn'
      'search-filters search-filters';
    grid-template-columns: 1fr auto;
    gap: 8px;
  }
  .search-input {
    grid-area: search-input;
    width: 100%;
    font-size: 12px;
  }
  .search-filters {
    display: flex;
    grid-area: search-filters;
    gap: 8px;
  }
  .search-dropdown {
    font-size: 12px;
    width: 100%;
  }
  .search-dropdown :deep(.p-dropdown-label) {
    font-size: 12px;
  }

  .search-btn {
    grid-area: search-btn;
    font-size: 12px;
  }
}
</style>
