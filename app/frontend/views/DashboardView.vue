<template>
    <div class="dashboard">
        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <p class="text-primary text-lg">Welcome, {{ user?.email }}!</p>
                <v-card>
                    <v-card-title>Move-in Date</v-card-title>
                    <v-card-text>{{ user?.moveInDate }}</v-card-text>
                </v-card>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <v-card v-for="apartment in apartments" :key="apartment.id">
                        <v-card-title>{{ apartment.name }}</v-card-title>
                        <v-card-text>{{ apartment.description }}</v-card-text>
                    </v-card>
                    <v-button>Add Apartment</v-button>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
    name: 'DashboardView',
    computed: {
        ...mapGetters({
            user: 'auth/user',
            apartments: 'apartments'
        })
    },
    created() {
        this.$store.dispatch('auth/fetchUser')
            .catch(error => {
                console.error('Failed to fetch user:', error)
            })
        this.$store.dispatch('fetchApartments')
            .catch(error => {
                console.error('Failed to fetch apartments:', error)
            })
    }
}
</script>