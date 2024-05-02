import axios from 'axios'
import type {App} from 'vue'

interface AxiosOpcions {

    baseUrl?: string
    token?: string

}

export default {
    install: (app:App,options:AxiosOpcions):void => {
        app.config.globalProperties.$axios = axios.create({
            baseURL:options.baseUrl
        })
    }
}