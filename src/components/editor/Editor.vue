<template>
    <div class="relative w-full h-full">
        <textarea ref="editor" class="h-full w-full">{{ content }}</textarea>
    </div>
</template>

<script setup>
    import * as CodeMirror from "codemirror";
    import "codemirror/lib/codemirror.css"
    import "@/assets/editortheme.css"
    import "codemirror/addon/selection/active-line.js"
    import "codemirror/mode/gfm/gfm.js"
    import 'codemirror/addon/fold/foldcode.js';
    import 'codemirror/addon/fold/foldgutter.js';
    import 'codemirror/addon/fold/brace-fold.js';
    import 'codemirror/addon/fold/xml-fold.js';
    import 'codemirror/addon/fold/indent-fold.js';
    import 'codemirror/addon/fold/markdown-fold.js';
    import 'codemirror/addon/fold/comment-fold.js';
    import {onMounted, ref} from "vue";

    const props = defineProps({
        content: String
    })
    const editor = ref(null)

    onMounted(() => {
        CodeMirror.fromTextArea(editor.value, {
            lineNumbers:  true,
            tabSize: 2,
            lineWrapping: true,
            scrollbarStyle: "null",
            styleActiveLine: { nonEmpty: true },
            autoCloseBrackets: true,
            theme: "tn",
            foldGutter: true,
            gutters: ["CodeMirror-foldgutter"],
            mode: "gfm"
        })
    })
</script>
<style>



</style>