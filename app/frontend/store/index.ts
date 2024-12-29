import { createStore, Store } from 'vuex'
import auth from './modules/auth'
import type { AuthState } from './modules/auth'

// Define the root state type
interface RootState {
    auth: AuthState
}

// Create and export the store with proper typing
export const store: Store<RootState> = createStore({
    modules: {
        auth
    }
})

// Dispatch checkAuth action when the store is initialized
store.dispatch('auth/checkAuth')

// Default export for consistency
export default store