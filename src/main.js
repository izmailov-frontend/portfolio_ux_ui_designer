import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'
import './assets/button-style.css'
import './assets/fontstyle.css'
import './assets/styles-project-component.css'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount('#app')
