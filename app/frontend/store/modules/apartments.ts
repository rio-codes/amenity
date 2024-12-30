import axios from '../../plugins/axios'
import { ActionContext } from 'vuex'
import { Apartment } from '../../types/types'

// Define the ApartmentsState type
export interface ApartmentsState {
    apartments: Apartment[]
}

// Define the initial state
const state: ApartmentsState = {
    apartments: []
}

// Define the getters
const getters = {
    apartments: (state: ApartmentsState) => state.apartments
}

// Define the ApartmentsContext type
type ApartmentsContext = ActionContext<ApartmentsState, any>

// Define the actions
const actions = {
    async fetchApartments({ commit }: ApartmentsContext): Promise<void> {
        try {
            const response = await axios.get<Apartment[]>('/apartments')
            commit('SET_APARTMENTS', response.data)
        } catch (error) {
            console.error('Failed to fetch apartments:', error)
            throw error
        }
    }
}

// Define the mutations
const mutations = {
    SET_APARTMENTS(state: ApartmentsState, apartments: Apartment[]) {
        state.apartments = apartments
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}