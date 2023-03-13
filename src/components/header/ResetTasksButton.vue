<template>
    <button>
        <v-icon name="md-playlistremove" scale="2" fill="#ffffff"></v-icon>
    </button>
</template>

<script setup>
    import {addIcons} from "oh-vue-icons";
    import {MdPlaylistremove} from "oh-vue-icons/icons";

    addIcons(MdPlaylistremove)
</script>
