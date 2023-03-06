import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useAppStateStore = defineStore("appState", () => {
    const sidebarVisible = ref(true)

    const isSidebarVisible = computed(() => sidebarVisible.value)

    function toggleSidebarVisibility() {
        sidebarVisible.value = !sidebarVisible.value
    }

    return {
        isSidebarVisible, toggleSidebarVisibility
    }

})