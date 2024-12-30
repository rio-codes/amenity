<template>
    <div class="relative bg-background">
        <div class="mx-auto max-w-7xl">
            <!-- Change min-h to be responsive -->
            <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[800px] lg:min-h-[1000px]"> <!-- Increased min-height by 100px -->
                <!-- Text Content - now centered on mobile -->
                <main class="px-4 sm:px-6 lg:px-8 lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
                    <div class="text-center lg:text-left">
                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text">
                            <span class="block">Find your <span class="text-primary">cozy.</span></span>
                        </h1>
                        <p class="mt-3 text-base text-text-light sm:mt-5 sm:text-lg">
                            With <span class="text-primary">amenity</span>, track and compare properties, manage your apartment hunting journey, and make informed decisions to find your new favorite place to be.
                        </p>
                        <div class="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <div class="rounded-md shadow w-full sm:w-auto">
                                <router-link
                                    to="/register"
                                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-hover"
                                >
                                    Get started
                                </router-link>
                            </div>
                            <div class="w-full sm:w-auto">
                                <router-link
                                    to="/login"
                                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-background-alt px-8 py-3 text-base font-medium text-primary hover:bg-primary-light hover:text-white"
                                >
                                    Sign in
                                </router-link>
                            </div>
                        </div>
                    </div>
                </main>

                <div class="mt-16 sm:mt-8 lg:mt-0 lg:col-span-7 relative" style="top: 100px;"> <!-- Adjust the top property here -->
                    <div class="relative mx-auto max-w-[821px] px-4 sm:px-6 lg:px-0">
                        <!-- Simple rectangle with primary color -->
                        <div class="absolute -z-10 -left-8 -top-8 right-8 bottom-8 lg:-left-12 lg:-top-12 lg:right-12 lg:bottom-12">
                            <div class="w-full h-full rounded-xl bg-primary"></div> <!-- Ensure the corners are rounded -->
                        </div>
                        <img
                            class="relative rounded-xl shadow-xl ring-1 ring-black/5 w-full h-auto max-h-full"
                            style="top: 0px;"
                            src="@/assets/woman_reading.jpg"
                            alt="Woman reading by window"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'HomeView'
}
</script>