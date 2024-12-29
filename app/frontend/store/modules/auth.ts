import axios from './axios'
import { ActionContext } from 'vuex'
import { User, RegisterCredentials } from '../../types/types'


// Define the AuthState type
export interface AuthState {
    token: string | null
    user: User | null
    isAuthenticated: boolean
}

// Define the initial state
const state: AuthState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: false
}

// Define the getters
const getters = {
    isAuthenticated: (state: AuthState) => state.isAuthenticated,
    user: (state: AuthState) => state.user
}

// Define the AuthContext type
type AuthContext = ActionContext<AuthState, any>

// Define the actions
const actions = {
    async register({ commit }: AuthContext, credentials: RegisterCredentials): Promise<void> {
        try {
            const response = await axios.post<{ token: string, user: User }>('/api/v1/users', { user: credentials })
            const { token, user } = response.data
            
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            
            commit('SET_TOKEN', token)
            commit('SET_USER', user)
        } catch (error) {
            console.error('Registration failed:', error)
            throw error
        }
    },

    async login({ commit, dispatch }: AuthContext, credentials: { email: string, password: string }): Promise<void> {
        try {
            const response = await axios.post<{ token: string }>('/auth/login', credentials)
            const token = response.data.token

            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            commit('SET_TOKEN', token)
            await dispatch('fetchUser')
        } catch (error) {
            console.error('Login failed:', error)
            throw error
        }
    },

    async logout({ commit }: AuthContext): Promise<void> {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']

        commit('SET_TOKEN', null)
        commit('SET_USER', null)
    },

    async checkAuth({ commit, state }: AuthContext): Promise<void> {
        if (!state.token) return
        try {
            const response = await axios.get<User>('/auth/auto_login')
            commit('SET_USER', response.data)
        } catch (error) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
            localStorage.removeItem('token')
        }
    },

    async fetchUser({ commit }: AuthContext): Promise<User> {
        try {
            const response = await axios.get<User>('/auth/user')
            commit('SET_USER', response.data)
            return response.data
        } catch (error) {
            console.error('Failed to fetch user:', error)
            throw error
        }
    }
}

const mutations = {
    SET_TOKEN(state: AuthState, token: string | null) {
        state.token = token
    },
    SET_USER(state: AuthState, user: User | null) {
        state.user = user
        state.isAuthenticated = !!user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}