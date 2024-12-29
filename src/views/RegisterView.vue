<template>
    <div class="register">
        <div class="min-h-[calc(100vh-16rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 class="mt-6 text-center text-3xl font-display font-bold tracking-tight text-text">
                    Create your account
                </h2>
                <p class="mt-2 text-center text-sm text-text-light">
                    Already have an account?
                    <router-link to="/login" class="font-medium text-primary hover:text-accent">
                        Sign in
                    </router-link>
                </p>
            </div>
            <RegisterForm />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import RegisterForm from '@/components/RegisterForm.vue'

    export default defineComponent({
        name: 'RegisterView',
        components: {
        RegisterForm
        }
    })
</script>