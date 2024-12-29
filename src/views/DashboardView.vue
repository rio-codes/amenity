<template>
    <div class="dashboard">
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <p class="text-lg">Welcome, {{ user?.email }}</p>
        <!-- Add your dashboard content here -->
        </div>
    </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import type { User } from '@/types/auth'

export default defineComponent({
    name: 'DashboardView',
    
    setup() {
    const store = useStore()
    const user = computed((): User | null => store.getters['auth/user'])

    return {
        user
    }
    }
})
</script>