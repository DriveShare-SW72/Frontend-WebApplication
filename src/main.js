import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import googleApiLoader from './utils/googleApiLoader'

const app = createApp(App)

googleApiLoader.importLibrary('core')

app.use(PrimeVue, { ripple: true }).use(router).mount('#app')
