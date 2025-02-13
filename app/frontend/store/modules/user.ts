import axios from '../../plugins/axios'
import { ActionContext } from 'vuex'
import { User } from '../../types/types'

// Define the UserState type, include user id
export interface UserState {
    user: User | null
}

// Define the initial state
const state: UserState = {
    user: null
}

// Define the getters
const getters = {
    user: (state: UserState) => state.user
}

// Define the UserContext type
type UserContext = ActionContext<UserState, any>

// Define the actions
const actions = {
    async fetchUser({ commit }: UserContext): Promise<User> {
        try {
            const token = localStorage.getItem('token')
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}` // Ensure token is set in headers
            }
            const response = await axios.get<User>('/auth/user')
            console.log('Fetched user:', response.data) // Add logging here
            commit('SET_USER', response.data)
            return response.data
        } catch (error) {
            console.error('Failed to fetch user:', error)
            throw error
        }
    },

    async updateMoveInDate({ commit, state }: UserContext, moveInDate: string): Promise<void> {
        try {
            const response = await axios.put<User>(`/users/${state.user?.id}/move_in_date`, { move_in_date: moveInDate })
            console.log('Updated move-in date:', response.data) // Add logging here
            commit('SET_USER', response.data)
        } catch (error) {
            console.error('Failed to update move-in date:', error)
            throw error
        }
    }
}

// Define the mutations
const mutations = {
    SET_USER(state: UserState, user: User | null) {
        state.user = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}