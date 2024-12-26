<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <template v-if="!isAuthenticated">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </template>
      <template v-else>
        <router-link to="/dashboard">Dashboard</router-link> |
        <a href="#" @click.prevent="handleLogout">Logout</a>
      </template>
    </nav>
  </header>

  <router-view/>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])

    const handleLogout = async () => {
      await store.dispatch('auth/logout')
      router.push('/login')
    }

    return {
      isAuthenticated,
      handleLogout
    }
  }
}
</script>