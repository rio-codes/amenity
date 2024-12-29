<template>
    <div class="bg-background">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Header with Add Button -->
        <div class="flex justify-between items-center py-6">
            <h1 class="text-2xl font-display font-bold text-text">My Apartments</h1>
            <AddApartmentButton />
        </div>

        <!-- Grid of Apartments -->
        <div v-if="apartments.length > 0" 
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            <ApartmentCard 
            v-for="apartment in apartments" 
            :key="apartment.id" 
            :apartment="apartment"
            />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
            <h3 class="mt-2 text-xl font-display font-semibold text-text">
            No apartments yet
            </h3>
            <p class="mt-1 text-text-light">
            Get started by adding your first apartment.
            </p>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import ApartmentCard from './ApartmentCard.vue'
    import AddApartmentButton from './AddApartmentButton.vue'
    import type { Apartment } from '@/types/apartment'

    export default defineComponent({
    name: 'ApartmentList',

    components: {
        ApartmentCard,
        AddApartmentButton
    },

    setup() {
        const store = useStore()
        const apartments = ref<Apartment[]>([])

        onMounted(async () => {
        try {
            const response = await store.dispatch('apartments/fetchApartments')
            apartments.value = response
        } catch (error) {
            console.error('Failed to fetch apartments:', error)
        }
        })

        return {
        apartments
        }
    }
    })
</script>