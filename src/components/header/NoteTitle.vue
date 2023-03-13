<template>
    <input class="grow text-center text-2xl bg-brown-medium text-white outline-none overflow-hidden" :value="title">
</template>

<script setup>
    const props = defineProps({
        title: String
    })
</script>