<template>
    <button>
        <v-icon name="fa-save" scale="1.5" fill="#ffffff"></v-icon>
    </button>
</template>

<script setup>
    import {addIcons} from "oh-vue-icons";
    import {FaSave} from "oh-vue-icons/icons";

    addIcons(FaSave)
</script>