import { createStore, Store } from 'vuex'
import auth from './modules/auth'
import type { AuthState } from '@/types/auth'

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

// Default export for consistency
export default store