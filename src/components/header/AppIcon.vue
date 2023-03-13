<template>
    <a @click="toggleSidebar" class="relative group h-full mt-1 w-12 cursor-pointer select-none transition-all">
        <div class="absolute inset-0">
            <v-icon name="fa-sticky-note" scale="1.75" fill="#e47b19"/>
        </div>
        <div class="absolute inset-0 left-1 top-1 group-hover:left-1.5 group-hover:top-1.5">
            <v-icon name="fa-sticky-note" scale="1.75" fill="#4fa52b"/>
        </div>
        <div class="absolute inset-0 left-2 top-2 group-hover:left-3 group-hover:top-3">
            <v-icon name="fa-sticky-note" scale="1.75" fill="#e33f3b"/>
        </div>
    </a>
</template>
<script setup>
    import {addIcons} from "oh-vue-icons";
    import {FaStickyNote} from "oh-vue-icons/icons";
    import {useAppStateStore} from "@/stores/appState";

    addIcons(FaStickyNote)
    const appState = useAppStateStore()

    function toggleSidebar() {
        appState.toggleSidebarVisibility()
    }
</script>