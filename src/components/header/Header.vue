<template>
    <div class="w-full h-12 rounded bg-brown-medium flex flex-row">
        <AppIcon />
        <span class="text-4xl text-white">Top-Notes</span>
    </div>
</template>

<script setup>

import AppIcon from "./AppIcon.vue";
</script>

<style scoped>

    span {
        font-family: "Tilt Warp", monospace;
    }

</style>