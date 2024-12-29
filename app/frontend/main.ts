import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cors from "cors"

createApp(App)
    .use(cors)
    .use(router)
    .use(store)
    .mount('#app')