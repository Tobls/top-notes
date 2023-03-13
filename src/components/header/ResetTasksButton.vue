<template>
    <button class="text-white hover:text-cream hover:scale-125">
        <v-icon name="md-playlistremove" scale="2"></v-icon>
    </button>
</template>

<script setup>
    import {addIcons} from "oh-vue-icons";
    import {MdPlaylistremove} from "oh-vue-icons/icons";

    addIcons(MdPlaylistremove)
</script>
