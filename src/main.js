import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import auth from './store/modules/auth'

// Create store
const store = createStore({
    modules: {
        auth
    }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')