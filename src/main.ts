import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/index.css'
import '@/assets/css/dashboard.css'
import '@/assets/css/challenge.css'
import '@/assets/css/challenge-solve.css'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import hljs from 'highlight.js'
import router from './router'
import store from './store'

const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(VueMonacoEditorPlugin)
app.use(pinia)
app.use(ElementPlus).use(store).use(router).mount('#app')
