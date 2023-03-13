<template>
    <div class="relative w-full h-24 sm:h-12 flex flex-row bg-brown-medium space-x-2 pl-1 pr-2 rounded">
        <div class="w-fit sm:w-96 h-full flex flex-row items-center">
            <AppIcon />
            <span class="text-4xl text-white whitespace-nowrap hidden sm:block">T-Notes</span>
        </div>
        <div class="h-full absolute sm:relative left-2 right-2 sm:w-full top-0 !ml-0 sm:pr-2">
            <div class="w-full max-w-full h-full items-center space-x-1 grid grid-cols-[min-content_min-content_1fr_min-content_min-content] grid-rows-2 sm:grid-rows-1">
                <DeleteButton class="ml-12 sm:ml-0"/>
                <ResetTasksButton />
                <NoteTitle class="col-span-5 row-start-2 sm:row-start-1 sm:col-span-1 sm:col-start-3 !ml-0" />
                <SaveButton class="col-start-4"/>
                <SettingsButton class="col-start-5"/>
            </div>
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