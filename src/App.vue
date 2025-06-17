<script setup>
import { ref } from "vue";

const message = ref("Hello World!");
const ngLink = ref("https://jernemies.newgrounds.com");
</script>

<template>
    <h1 class="text-xl">{{ message }}</h1>
    <a :href="ngLink">Jernemies on NG</a>
</template>
