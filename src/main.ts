import { createApp } from 'vue'
import VueWechatTitle from 'vue-wechat-title' // 动态修改网页title
import { createPinia } from 'pinia'
import VConsole from 'vconsole'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import '@/mock' // mock 方式，正式发布时，注释掉该处即可
import '@/utils/report.js'
import 'virtual:svg-icons-register'

if (import.meta.env.MODE !== 'production') {
  console.log('env: ', import.meta.env)
  new VConsole()
}

const app = createApp(App)

app.use(createPinia()).use(router).use(VueWechatTitle).mount('#app')
