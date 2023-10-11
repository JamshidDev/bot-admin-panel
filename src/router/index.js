import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import Layout from '@/Layouts/Layout'
import Login from '@/Layouts/Login'
import HomePage from "../pages/Home/HomePage.vue"
import Bank from "../pages/Bank/Bank.vue"
// import Dashboard from '@/views/Dashboard/Dashboard.vue'
// import Sponser from '@/views/Sponser/Sponser.vue'
// import SponserDetails from '@/views/Sponser-details/SponserDetails.vue'

const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        children:[
            {
                path: "/home",
                name: "home",
                component: HomePage,
            },
            {
                path: "/bank",
                name: "bank",
                component: Bank,
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
]






const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;