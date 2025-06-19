<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = ref([
    {
        title: "Programming",
        description: "Check out my coding projects and skills",
        route: { name: "coding" },
        icon: "💻",
    },
    {
        title: "Music",
        description: "Listen to my music compositions and productions",
        route: { name: "music" },
        icon: "🎵",
    },
    {
        title: "Games",
        description: "Play and explore games I have created",
        route: { name: "games" },
        icon: "🎮",
    },
]);
</script>

<template>
    <div
        class="bg-gray-200 text-gray-400 p-8 flex flex-col items-center min-h-screen"
    >
        <div class="h-24 flex-none"></div>
        <div class="flex-none my-12">
            <h1 class="text-4xl font-bold">
                ANIMATE THE BOXES. FADE IN FROM BELOW?
            </h1>
        </div>

        <div class="h-24 flex-none"></div>
        <div class="flex flex-col h-max justify-center">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    v-for="category in categories"
                    :key="category.title"
                    class="category-card md:py-28 p-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col items-center cursor-pointer"
                    @click="router.push(category.route)"
                >
                    <div class="text-5xl mb-4">{{ category.icon }}</div>
                    <h2 class="text-2xl text-gray-400 font-bold mb-2">
                        {{ category.title }}
                    </h2>
                    <p class="text-gray-700 text-center">
                        {{ category.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
