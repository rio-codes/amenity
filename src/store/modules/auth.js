import axios from 'axios'

const state = {
	user: null,
	token: localStorage.getItem('token'),
}

const getters = {
	isAuthenticated: state => !!state.token,
	user: state => state.user,
}

const actions = {
    async register({ commit }, credentials) {
        try {
                const response = await axios.post('/api/v1/users', { user: credentials })
                const { token, user } = response.data
                
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                
                commit('SET_TOKEN', token)
                commit('SET_USER', user)
                
                return response
        } catch (error) {
            throw error
        }
    },

    async login({ commit }, credentials) {
        try {
            const response = await axios.post('/api/v1/auth/login', credentials)
            const { token, user } = response.data
            
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            
            commit('SET_TOKEN', token)
            commit('SET_USER', user)
            
            return response
        } catch (error) {
            throw error
        }
    },

    async logout({ commit }) {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
    },

    async checkAuth({ commit, state }) {
	if (!state.token) return	
        try {
            const response = await axios.get('/api/v1/auth/auto_login')
            commit('SET_USER', response.data)
        } catch (error) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
            localStorage.removeItem('token')
        }
    }
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USER(state, user) {
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