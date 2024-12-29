<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div v-if="error" class="mb-4 p-4 rounded-md bg-red-50 border border-red-200">
                <p class="text-sm text-red-600">{{ error }}</p>
            </div>           
            <form class="space-y-6" @submit.prevent="handleSubmit">
                <div>
                    <label for="email" class="block text-sm font-medium text-text">Email address</label>
                    <div class="mt-1">
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            required
                            class="block w-full appearance-none rounded-md border border-background-alt px-3 py-2 placeholder-text-light shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                        >
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-text">Password</label>
                    <div class="mt-1">
                        <input
                            id="password"
                            v-model="password"
                            type="password"
                            required
                            class="block w-full appearance-none rounded-md border border-background-alt px-3 py-2 placeholder-text-light shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                        >
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { RegisterCredentials } from '../types/auth'

export default defineComponent({
    name: 'RegisterForm',
    
    setup() {
    const store = useStore()
    const router = useRouter()
    
    const email = ref('')
    const password = ref('')
    const error = ref('')

    const handleSubmit = async (): Promise<void> => {
        try {
        const credentials: RegisterCredentials = {
            email: email.value,
            password: password.value
        }
        
        await store.dispatch('auth/register', credentials)
        router.push('/dashboard')
            } catch (e: any) {
                if (e.response && e.response.data && e.response.data.error) {
                    error.value = e.response.data.error
                } else {
                    error.value = 'Registration failed: ' + e
                }
                console.error('Registration failed:', e)
            }
    }
    
    return {
        email,
        password,
        error,
        handleSubmit
    }
    }
})
</script>