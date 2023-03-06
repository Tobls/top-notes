<template>
    <textarea ref="editor" class="h-full w-full">{{ content }}</textarea>
</template>

<script setup>
    import * as CodeMirror from "codemirror";
    import "codemirror/lib/codemirror.css"
    import "codemirror/theme/abbott.css"
    import "codemirror/mode/gfm/gfm.js"
    import {onMounted, ref} from "vue";

    const props = defineProps({
        content: String
    })
    const editor = ref(null)

    onMounted(() => {
        CodeMirror.fromTextArea(editor.value, {
            lineNumbers:  true,
            tabSize: 2,
            autoCloseBrackets: true,
            theme: "abbott",
            mode: "gfm"
        })
    })
</script>
<style>

    .CodeMirror {
        @apply rounded h-full w-full !m-0
    }

    .cm-strong { font-size: 140%; }
    .cm-header-1 { font-size: 150%; }
    .cm-header-2 { font-size: 130%; }
    .cm-header-3 { font-size: 120%; }
    .cm-header-4 { font-size: 110%; }
    .cm-header-5 { font-size: 100%; }
    .cm-header-6 { font-size: 90%; }

    .cm-strong, .cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6 {
        color: #aaa;
    }
</style>