import './assets/main.css'
import 'primevue/resources/themes/aura-dark-teal/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, { ripple: true }).use(router).mount('#app')
