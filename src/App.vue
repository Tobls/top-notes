<template>
    <div class="flex flex-col h-full w-full p-2 space-y-2">
        <Header />
        <div class="flex flex-row w-full h-full relative">
            <Sidebar />
            <Editor />
        </div>
    </div>
</template>

<script setup>
    import Editor from "./components/editor/Editor.vue";
    import Header from "./components/header/Header.vue";
    import Sidebar from "./components/sidebar/Sidebar.vue";
</script>