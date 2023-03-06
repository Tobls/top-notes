import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import {OhVueIcon} from "oh-vue-icons";
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.use(pinia)
app.mount('#app')