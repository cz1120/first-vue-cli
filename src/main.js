import { createApp } from 'vue'
import App from './App.vue'
import createStore  from './store/index'

const app = createApp(App)
// 使用Vuex的全局状态管理
app.use(createStore)
// 挂载app
app.mount('#app')
