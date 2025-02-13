<template>
    <div v-if="isAuthenticated" class="dashboard">
        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900" style="font-family: 'Cormorant', serif;">Welcome to your Dashboard</h1>
                <div v-if="user?.move_in_date" class="text-right">
                    <p class="text-2xl font-display font-bold text-gray-700">You're moving in {{ user.move_in_date }}</p>
                    <p><a href="#" @click.prevent="showMoveInDateForm = true" class="text-sm text-gray-700 hover:underline">Change date</a></p>
                </div>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div v-if="!user?.move_in_date || showMoveInDateForm">
                    <div class="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 class="text-xl font-bold mb-4">Enter your desired move-in date:</h2>
                        <label for="moveInDate" class="block text-sm font-medium text-gray-700">Move-in Date</label>
                        <Datepicker v-model="moveInDate" :format="customFormatter" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-lg p-2" />
                        <button @click="updateMoveInDate" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                    </div>
                </div>
            </div>
                <div class="mt-8">
                    <h2 class="text-2xl font-bold">Your Apartments</h2>
                    <ul>
                        <li v-for="apartment in apartments" :key="apartment.id" class="mt-4">
                            <h3 class="text-xl">{{ apartment.name }}</h3>
                            <p>{{ apartment.description }}</p>
                        </li>
                    </ul>
                </div>
                <div class="mt-8">
                    <button @click="showAddApartmentForm" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        Add Apartment
                    </button>
                </div>
                <div v-if="showApartmentForm" class="mt-4 bg-white shadow-md rounded-lg p-6">
                    <h2 class="text-xl font-bold mb-4">Add Apartment</h2>
                    <label for="apartmentName" class="block text-sm font-medium text-gray-700">Apartment Name</label>
                    <input type="text" id="apartmentName" v-model="apartmentName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <label for="apartmentDescription" class="block text-sm font-medium text-gray-700 mt-4">Apartment Description</label>
                    <input type="text" id="apartmentDescription" v-model="apartmentDescription" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <!-- Add additional parts of the form here -->
                    <button @click="addApartment" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { useRouter } from 'vue-router'
import Datepicker from 'vue3-datepicker'

export default defineComponent({
    name: 'DashboardView',
    components: {
        Datepicker
    },
    computed: {
        ...mapGetters({
            user: 'user/user', // Adjusted to use the user module
            apartments: 'apartments/apartments', // Adjusted to use the apartments module
            isAuthenticated: 'auth/isAuthenticated' // Add this line to map the isAuthenticated getter
        })
    },
    setup() {
        const moveInDate = ref('')
        const apartmentName = ref('')
        const apartmentDescription = ref('')
        const showApartmentForm = ref(false)
        const showMoveInDateForm = ref(false)
        const store = useStore()
        const router = useRouter()

        const updateMoveInDate = async () => {
            try {
                //change api call to include user id
                await store.dispatch('user/updateMoveInDate', moveInDate.value) // Adjusted to use the user module
                showMoveInDateForm.value = false
            } catch (error) {
                console.error('Failed to update move-in date:', error)
            }
        }

        const showAddApartmentForm = () => {
            showApartmentForm.value = true
        }

        const addApartment = async () => {
            try {
                await store.dispatch('apartments/addApartment', { name: apartmentName.value, description: apartmentDescription.value }) // Adjusted to use the apartments module
                showApartmentForm.value = false
            } catch (error) {
                console.error('Failed to add apartment:', error)
            }
        }

        // Watch for changes in the authentication status and redirect if not authenticated
        watch(() => store.getters['auth/isAuthenticated'], (isAuthenticated) => {
            if (!isAuthenticated) {
                router.push('/login')
            }
        }, { immediate: true })

        // Watch for changes in the user data and log it
        watch(() => store.getters['user/user'], (user) => {
            console.log('User data:', user)
        }, { immediate: true })

        const customFormatter = (date: Date) => {
            const day = date.getDate().toString().padStart(2, '0')
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            const year = date.getFullYear()
            return `${year}-${month}-${day}`
        }

        return {
            moveInDate,
            apartmentName,
            apartmentDescription,
            showApartmentForm,
            showMoveInDateForm,
            updateMoveInDate,
            showAddApartmentForm,
            addApartment,
            customFormatter
        }
    },
    created() {
        this.$store.dispatch('user/fetchUser') // Adjusted to use the user module
            .catch(error => {
                console.error('Failed to fetch user:', error)
            })
        this.$store.dispatch('apartments/fetchApartments') // Adjusted to use the apartments module
            .catch(error => {
                console.error('Failed to fetch apartments:', error)
            })
    }
})
</script>