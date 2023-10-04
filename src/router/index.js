import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import Layout from '@/Layouts/Layout'
import Login from '@/Layouts/Login'
// import Dashboard from '@/views/Dashboard/Dashboard.vue'
// import Sponser from '@/views/Sponser/Sponser.vue'
// import SponserDetails from '@/views/Sponser-details/SponserDetails.vue'

const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        // children:[
        //     {
        //         path: "/dashboard",
        //         name: "dashboard",
        //         component: Dashboard,
        //     },
        //     {
        //         path: "/sponser",
        //         name: "sponser",
        //         component: Sponser,
        //     },
        //     {
        //         path: "/sponser/:id/:fullname",
        //         name: "sponser-details",
        //         component: SponserDetails,
        //     }
        // ]
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