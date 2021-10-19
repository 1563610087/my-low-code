import { createApp } from 'vue'
import App from './App.vue'
// 引入路由对象实例
import router from './router/index.js'
import '@/assets/css/index.css'

const app=createApp(App)

app.use(router)
app.mount('#app')