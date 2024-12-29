<template>
    <div class="dashboard">
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            // text greeting the user should be in text-primary color and text-lg size            
            <p class="text-primary text-lg">Welcome, {{ user?.email }}!</p>
            // add card for move-in date with title and date
            <v-card>
                <v-card-title>Move-in Date</v-card-title>
                <v-card-text>{{ user?.moveInDate }}</v-card-text>
            </v-card>
            // add cards for each apartment with thumbnail, name, and description
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <v-card v-for="apartment in apartments" :key="apartment.id">
                <v-card-title>{{ apartment.name }}</v-card-title>
                <v-card-text>{{ apartment.description }}</v-card-text>
                </v-card>
                // add a button to add a new apartment
                <v-button>Add Apartment</v-button>
            </div>
        </div>
    </main>
    </div>
</template>

<script lang="ts">
// define proper imports
import { mapGetters } from 'vuex'

//use AuthState and User types to determine if user is logged in


// create DashboardView component with user greeting and list of apartments if user is logged in
// check if user is logged in and fetch user and apartments
// add computed properties for user and apartments
// add created hook to fetch user and apartments
// add DashboardView component to export default
// add name property to DashboardView component
// add computed property to DashboardView component


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
        this.$store.dispatch('fetchApartments')
    }
}  
</script>