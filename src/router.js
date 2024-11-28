import { createMemoryHistory, createRouter } from 'vue-router'

import AppMainPage from "./components/AppMainPage.vue";
import AppMobileCnc from './components/AppMobileCnc.vue';


//Опция routes определяет маршруты сопоставляя пути url с компонентами
const routes = [
	{path: '/', component:AppMainPage},
	{path: '/mobile-cnc', component:AppMobileCnc}
]

const router = createRouter({
	history: createMemoryHistory(),
	routes
})

export default router