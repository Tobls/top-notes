<template>
    <div class="h-full bg-brown-medium rounded sm:w-96 sm:relative absolute inset-0 z-10 transition-all" :class="getStyleVisible()">

    </div>
</template>

<script setup>
    import { useAppStateStore } from "@/stores/appState"
    import {computed} from "vue";

    const appState = useAppStateStore()
    const visible = computed(() => appState.isSidebarVisible)

    function getStyleVisible() {
        return visible.value ? "sm:mr-2" : "!w-0"
    }
</script>