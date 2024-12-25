<template>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
                v-model="email"
                type="email"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
        </div>
        
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
                v-model="password"
                type="password"
                required
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
        </div>
        
        <div class="flex items-center justify-between">
        <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Sign In
        </button>
        <router-link
            to="/register"
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
            Register
        </router-link>
        </div>
    </form>
</template>

<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    export default {
        setup() {
            const store = useStore()
            const router = useRouter()
            
            const email = ref('')
            const password = ref('')
            
            const handleSubmit = async () => {
                try {
                    await store.dispatch('auth/login', {
                            email: email.value,
                            password: password.value
                        })
                    router.push('/dashboard')
                } catch (error) {
                    console.error('Login failed:', error)
                    // Handle error (show message to user)
                }
            }
            
            return {
                email,
                password,
                handleSubmit
            }
        }
    }
</script>