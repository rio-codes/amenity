import { createStore, Store } from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import apartments from './modules/apartments'
import type { AuthState } from './modules/auth'
import type { UserState } from './modules/user'
import type { ApartmentsState } from './modules/apartments'

// Define the root state type
interface RootState {
    auth: AuthState
    user: UserState
    apartments: ApartmentsState
}

// Create and export the store with proper typing
export const store: Store<RootState> = createStore({
    modules: {
        auth,
        user,
        apartments
    }
})

// Dispatch checkAuth action when the store is initialized
store.dispatch('auth/checkAuth')

// Default export for consistency
export default store