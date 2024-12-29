<template>
    <div class="relative overflow-hidden bg-background">
        <div class="mx-auto max-w-7xl">
            <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[800px]">
            <!-- Text Content - spans 5 columns -->
            <main class="px-4 sm:px-6 lg:px-8 lg:col-span-5 flex flex-col justify-center">
                <div class="lg:text-left">
                <h1 class="text-4xl font-display font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
                    <span class="block">Find your <span class="text-primary">cozy</span></span>
                </h1>
                <p class="mt-3 text-base text-text-light sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                    Track and compare properties, manage your apartment hunting journey, and make informed decisions with Movely.
                </p>
                <div class="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3">
                    <div class="rounded-md shadow">
                    <router-link
                        to="/register"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-hover md:py-4 md:px-10 md:text-lg"
                    >
                        Get started
                    </router-link>
                    </div>
                    <div>
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

            <!-- Image Section - spans 7 columns -->
            <div class="mt-12 lg:mt-0 lg:col-span-7">
                <div class="relative mx-auto max-w-[821px] px-4 sm:px-6 lg:px-0">
                <!-- Optional decorative background element -->
                    <img
                    class="relative rounded-lg shadow-xl ring-1 ring-black/5 w-full"
                    src="@/assets/woman_reading.jpg"
                    alt="Woman reading by window"
                    />
                </div>
            </div>
            </div>
        </div>
    </div>
</template>