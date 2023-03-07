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
    import "@/components/editor/editormode"
    import 'codemirror/addon/fold/foldgutter.js';
    import 'codemirror/addon/fold/markdown-fold.js';
    import {onMounted, ref} from "vue";

    const props = defineProps({
        content: String
    })
    const editor = ref(null)

    onMounted(() => {
        const cmEditor = CodeMirror.fromTextArea(editor.value, {
            lineNumbers:  true,
            tabSize: 2,
            lineWrapping: true,
            scrollbarStyle: "null",
            styleActiveLine: { nonEmpty: true },
            theme: "tn",
            foldGutter: true,
            gutters: ["CodeMirror-foldgutter"],
            mode: "tn"
        })

        cmEditor.on("changes", () => {
            onContentChange(cmEditor.getValue())
        })
    })

    function onContentChange(value) {
        const todoItems = (value.match(/\[[x ]]/g) || []).length
        const checkedTodoItems = (value.match(/\[x]/g) || []).length
        const dateReferences = (value.match(/(0[0-9]|[12][0-9]|3[12]).(0[0-9]|1[12]).([12][0-9]{3})/g) || []).length
        console.log(todoItems, checkedTodoItems, dateReferences)
    }

</script>
<style>



</style>