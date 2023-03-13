<template>
    <button>
        <v-icon name="bi-trash-fill" scale="1.5" fill="#ffffff"></v-icon>
    </button>
</template>

<script setup>
    import {addIcons} from "oh-vue-icons";
    import {BiTrashFill} from "oh-vue-icons/icons";

    addIcons(BiTrashFill)
</script>
