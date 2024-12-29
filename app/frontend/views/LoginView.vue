<template>
    <div class="login">
        <div class="min-h-[calc(100vh-16rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 class="mt-6 text-center text-3xl font-display font-bold tracking-tight text-text">
                    Sign in to your account
                </h2>
                <p class="mt-2 text-center text-sm text-text-light">
                    Don't have an account?
                    <router-link to="/register" class="font-medium text-primary hover:text-accent">
                        Register
                    </router-link>
                </p>
            </div>
            <LoginForm />
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import LoginForm from '../components/LoginForm.vue'

    export default defineComponent({
        name: 'LoginView',
        components: {
            LoginForm
        }
    })
</script>