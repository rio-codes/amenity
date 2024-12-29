import { ActionContext } from 'vuex'
import axios from '../../plugins/axios'
import { 
    AuthState, 
    LoginCredentials, 
    RegisterCredentials, 
    AuthResponse,
    User 
} from '@/types/auth'

const state = (): AuthState => ({
    user: null,
    token: localStorage.getItem('token')
})

const getters = {
    isAuthenticated: (state: AuthState): boolean => !!state.token,
    user: (state: AuthState): User | null => state.user
}

type AuthContext = ActionContext<AuthState, any>

const actions = {
    async register({ commit }: AuthContext, credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
        const response = await axios.post<AuthResponse>('/api/v1/users', { user: credentials })
        const { token, user } = response.data
        
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        commit('SET_TOKEN', token)
        commit('SET_USER', user)
        
        return response.data
    } catch (error) {
        console.error('Registration failed:', error)
        throw error
    }
    },

    async login({ commit }: AuthContext, credentials: LoginCredentials): Promise<AuthResponse> {
    try {
        const response = await axios.post<AuthResponse>('/api/v1/auth/login', credentials)
        const { token, user } = response.data
        
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        
        commit('SET_TOKEN', token)
        commit('SET_USER', user)
        
        return response.data
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
            const response = await axios.get<User>('/api/v1/auth/auto_login')
            commit('SET_USER', response.data)
        } catch (error) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
            localStorage.removeItem('token')
        }
    }
}

const mutations = {
    SET_TOKEN(state: AuthState, token: string | null): void {
        state.token = token
    },
    SET_USER(state: AuthState, user: User | null): void {
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