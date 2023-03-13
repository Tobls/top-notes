<template>
    <button>
        <v-icon name="io-settings-sharp" scale="1.5" fill="#ffffff"></v-icon>
    </button>
</template>

<script setup>
    import {addIcons} from "oh-vue-icons";
    import {IoSettingsSharp} from "oh-vue-icons/icons";

    addIcons(IoSettingsSharp)
</script>