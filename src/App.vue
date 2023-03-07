<template>
    <div class="flex flex-col h-full w-full p-2 space-y-2">
        <Header />
        <div class="flex flex-row w-full h-full relative">
            <Sidebar />
            <Editor  :content="content"/>
        </div>
    </div>
</template>

<script setup>
    import Editor from "./components/editor/Editor.vue";
    import Header from "./components/header/Header.vue";
    import Sidebar from "./components/sidebar/Sidebar.vue";

    const content = "# test\n" +
        "## test\n" +
        "### test\n" +
        "#### test\n" +
        "##### test \n" +
        "###### test\n" +
        "_test_\n" +
        "*test*\n" +
        "~test~\n" +
        "\n" +
        "22.02.2000 01.10.4005 1.10.1995 40.1.2003\n" +
        "- [ ] Task\n" +
        "- [x] Done\n" +
        "List:\n" +
        " * numbero uni\n" +
        " * dos\n" +
        " * tres :smile:\n" +
        " * `testesefsefsdfsdfs`"
</script>