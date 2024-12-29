<template>
  <div class="min-h-screen bg-background">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-3xl font-display font-bold text-primary">movely</router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link 
                to="/" 
                class="inline-flex items-center px-1 pt-1 text-sm font-body font-medium text-text border-b-2"
                :class="[$route.path === '/' ? 'border-primary' : 'border-transparent']"
              >
                Home
              </router-link>
              <template v-if="!isAuthenticated">
                <router-link 
                  to="/login"
                  class="inline-flex items-center px-1 pt-1 text-sm font-body font-medium text-text border-b-2"
                  :class="[$route.path === '/login' ? 'border-blue-500' : 'border-transparent']"
                >
                  Login
                </router-link>
                <router-link 
                  to="/register"
                  class="inline-flex items-center px-1 pt-1 text-sm font-body font-medium text-text border-b-2"
                  :class="[$route.path === '/register' ? 'border-blue-500' : 'border-transparent']"
                >
                  Register
                </router-link>
              </template>
              <template v-else>
                <router-link 
                  to="/dashboard"
                  class="inline-flex items-center px-1 pt-1 text-sm font-body font-medium text-text border-b-2"
                  :class="[$route.path === '/dashboard' ? 'border-blue-500' : 'border-transparent']"
                >
                  Dashboard
                </router-link>
                <button 
                  @click="handleLogout"
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Logout
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 font-body text-text">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  
  setup() {
    const store = useStore()
    const router = useRouter()

    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

    const handleLogout = async (): Promise<void> => {
      await store.dispatch('auth/logout')
      router.push('/login')
    }

    return {
      isAuthenticated,
      handleLogout
    }
  }
})
</script>