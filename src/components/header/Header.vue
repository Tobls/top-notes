<template>
    <div class="w-full h-12 flex flex-row bg-brown-medium space-x-2 pl-1 pr-2 rounded">
        <div class="w-fit sm:w-96 h-full flex flex-row items-center">
            <AppIcon />
            <span class="text-4xl text-white whitespace-nowrap hidden sm:block">Top-Notes</span>
        </div>
        <div class="w-full h-full flex flex-row items-center space-x-1">
            <SaveButton />
            <DeleteButton />
            <NoteTitle title="test" />
            <ResetTasksButton />
            <SettingsButton />
        </div>
    </div>
</template>

<script setup>

import AppIcon from "./AppIcon.vue";
import SettingsButton from "@/components/header/SettingsButton.vue";
import ResetTasksButton from "@/components/header/ResetTasksButton.vue";
import NoteTitle from "@/components/header/NoteTitle.vue";
import SaveButton from "@/components/header/SaveButton.vue";
import DeleteButton from "@/components/header/DeleteButton.vue";
</script>

<style scoped>

    span {
        font-family: "Tilt Warp", monospace;
    }

</style>