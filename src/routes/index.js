import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Homeview.vue"

const routes = [
    {
        path:"/" , component: Home
    },{
    path:"/quiz" , component:()=> import("@/views/Quizview.vue")
},{
    path:"/pass" ,name:'pass', component:()=> import("@/views/Passview.vue")
},{
    path:"/fail" , name:'fail', component:()=> import("@/views/Failview.vue")
},]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;