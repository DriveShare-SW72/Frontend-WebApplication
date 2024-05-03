import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'

import ToastService from 'primevue/toastservice'
//import Toast from "primevue/toast";

// const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue, { ripple: true }).use(router).use(ToastService).mount('#app')
