import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import googleApiLoader from './utils/googleApiLoader'
import i18n from './i18n'

const app = createApp(App)

googleApiLoader.importLibrary('core')

app.use(createPinia())
app.use(PrimeVue, { ripple: true })
app.use(i18n)
app.use(router)
app.mount('#app')
