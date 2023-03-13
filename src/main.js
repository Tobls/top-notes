import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {OhVueIcon} from "oh-vue-icons";
import {createPinia} from "pinia";
import {loadLocaleMessages, setI18nLanguage, setupI18n} from "@/i18n";

const i18n = setupI18n()
await loadLocaleMessages(i18n, "en")
setI18nLanguage(i18n, "en")

const pinia = createPinia()
const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.use(pinia)
app.use(i18n)
app.mount('#app')