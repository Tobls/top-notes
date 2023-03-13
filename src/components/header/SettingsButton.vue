<template>
    <button class="text-white hover:text-cream hover:scale-125">
        <v-icon name="io-settings-sharp" scale="1.5"></v-icon>
    </button>
</template>

<script setup>
    import {addIcons} from "oh-vue-icons";
    import {IoSettingsSharp} from "oh-vue-icons/icons";

    addIcons(IoSettingsSharp)
</script>