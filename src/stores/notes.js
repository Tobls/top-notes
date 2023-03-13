import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useI18n} from "vue-i18n";

export const useNotesStore = defineStore("notesStore", () => {
    const { t } = useI18n()

    const noteInfos = ref({})

    const currentNoteID = ref(-1)
    const currentNoteContent = ref("")
    const currentNoteTasks = ref(0)
    const currentNoteOpenTasks = ref(0)
    const currentNoteTitle = ref(t("newNote"))

    const getCurrentNoteTitle = computed(() => currentNoteTitle.value)

    return {
        currentNoteTitle
    }
})