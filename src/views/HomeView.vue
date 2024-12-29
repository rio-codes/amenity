<template>
    <div class="relative overflow-hidden">
        <div class="mx-auto max-w-7xl">
            <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <h1 class="text-4xl font-display font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
                        <span class="block">Find your <span class="text-primary">cozy</span></span>
                    </h1>
                <p class="mt-3 text-base text-text-light sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Track and compare properties, manage your apartment hunting journey, and make informed decisions with Movely.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                    <router-link
                        to="/register"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-hover md:py-4 md:px-10 md:text-lg"
                    >
                        Get started
                    </router-link>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                    <router-link
                        to="/login"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-background-alt px-8 py-3 text-base font-medium text-primary hover:bg-primary-light hover:text-white md:py-4 md:px-10 md:text-lg"
                    >
                        Sign in
                    </router-link>
                    </div>
                </div>
                </div>
            </main>
            </div>
        </div>
    </div>
</template>