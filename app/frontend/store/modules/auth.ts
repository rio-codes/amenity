import axios from '../../plugins/axios'
import { ActionContext } from 'vuex'
import { User, RegisterCredentials } from '../../types/types'

// Define the AuthState type
export interface AuthState {
    token: string | null
    isAuthenticated: boolean
}

// Define the initial state
const state: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token')
}

// Define the getters
const getters = {
    isAuthenticated: (state: AuthState) => state.isAuthenticated
}

// Define the AuthContext type
type AuthContext = ActionContext<AuthState, any>

// Define the actions
const actions = {
    async register({ commit, dispatch }: AuthContext, credentials: RegisterCredentials): Promise<void> {
        try {
            const response = await axios.post<{ token: string }>('/auth/register', credentials)
            const token = response.data.token

            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            commit('SET_TOKEN', token)
            await dispatch('user/fetchUser', null, { root: true }) // Dispatch fetchUser from user module
        } catch (error) {
            console.error('Registration failed:', error)
            if (error.response) {
                console.error('Error response:', error.response.data)
            }
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
            await dispatch('user/fetchUser', null, { root: true }) // Dispatch fetchUser from user module
        } catch (error) {
            console.error('Login failed:', error)
            if (error.response) {
                console.error('Error response:', error.response.data)
            }
            throw error
        }
    },

    async logout({ commit }: AuthContext): Promise<void> {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']

        commit('SET_TOKEN', null)
        commit('user/SET_USER', null, { root: true }) // Commit SET_USER mutation from user module
    },

    async checkAuth({ commit, state, dispatch }: AuthContext): Promise<void> {
        if (!state.token) return
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}` // Ensure token is set in headers
            const response = await axios.get<User>('/auth/auto_login')
            commit('user/SET_USER', response.data, { root: true }) // Commit SET_USER mutation from user module
        } catch (error) {
            commit('SET_TOKEN', null)
            commit('user/SET_USER', null, { root: true }) // Commit SET_USER mutation from user module
            localStorage.removeItem('token')
            console.error('Auto login failed:', error)
            if (error.response) {
                console.error('Error response:', error.response.data)
            }
        }
    }
}

// Define the mutations
const mutations = {
    SET_TOKEN(state: AuthState, token: string | null) {
        state.token = token
        state.isAuthenticated = !!token
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}