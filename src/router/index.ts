import path from "path"
import {createRouter,createWebHistory} from "vue-router"
import Home from '@/views/Home.vue'
import Peliculas from "@/views/Peliculas.vue"
import Config from "@/views/Config.vue"

const router = createRouter({
        history:createWebHistory(import.meta.env.BASE_URL),
        routes:[
            /*{
                path: "/",
                name: "raiz",
                component:
            },*/
            {
                path: "/home",
                name: "home",
                component: Home
            },
            {
                path: "/peliculas",
                name: "peliculas",
                component: Peliculas
            },
            {
                path: "/config/:test",
                name: "Config",
                component: Config
            },
        ]
})

export default router