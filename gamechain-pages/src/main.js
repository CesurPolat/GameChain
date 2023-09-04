//import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Divider, Modal, Tooltip, Typography, Upload } from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Divider)
app.use(Tooltip)
app.use(Typography)
app.use(Upload)
app.use(Modal)

app.mount('#app')
