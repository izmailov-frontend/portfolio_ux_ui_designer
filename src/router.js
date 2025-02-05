import { createWebHashHistory, createRouter } from 'vue-router'

import AppMainPage from "./components/AppMainPage.vue";
import AppMobileCnc from './components/AppMobileCnc.vue';


//Опция routes определяет маршруты сопоставляя пути url с компонентами
const routes = [
{path: '/', component: AppMainPage},
{path: '/mobile-cnc', component: AppMobileCnc}
]

const router = createRouter({
history: createWebHashHistory(),
routes,
scrollBehavior() {
// всегда прокручивать до верха
return { top: 0 }
},
})

export default router