import './assets/main.css'
import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import axios from "./plugins/axios.ts"

const app  = createApp(App)

app.use(router)
app.use(axios,{baseUrl:"https://api.coindesk.com/v1/"})
app.mount('#app')
