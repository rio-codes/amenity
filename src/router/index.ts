import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import { store } from '../store'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: { requiresGuest: true }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: { requiresGuest: true }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated']
    
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login')
    } else if (to.meta.requiresGuest && isAuthenticated) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router