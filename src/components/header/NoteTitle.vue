<template>
    <input class="grow text-center text-2xl bg-brown-medium text-white outline-none overflow-hidden" v-model="notesStore.currentNoteTitle">
</template>

<script setup>
    import {useNotesStore} from "@/stores/notes";

    const notesStore = useNotesStore()
</script>