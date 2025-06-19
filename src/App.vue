<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";

const message = ref("Hello World!");
const ngLink = ref("https://jernemies.newgrounds.com");
</script>

<template>
    <!-- <Navbar /> -->
    <RouterView />
</template>
