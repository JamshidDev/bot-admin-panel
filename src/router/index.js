import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import Layout from '@/Layouts/Layout'
import Login from '@/Layouts/Login'
import HomePage from "../pages/Home/HomePage.vue"
import Bank from "../pages/Bank/Bank.vue"
import Members  from "../pages/Members/Members.vue"
import ComingSoon from "../pages/ComingSoon/ComingSoon"
import Service from "../pages/Service/Service.vue"
import Statistic from "@/pages/Statistic/Statistic.vue";



const authLogin = (to, from, next) => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      next();
    }else {
        sessionStorage.removeItem("access_token");
      next("login");
    }
  };


const routes = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        beforeEnter: authLogin,
        children:[
            {
                path: "/statistic",
                name: "statistic",
                component: Statistic,
            },
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
            {
                path: "/members",
                name: "members",
                component: Members,
            },
            {
                path: "/services",
                name: "services",
                component: Service,
            },
            {
                path: "/coming-soon",
                name: "coming-soon",
                component: ComingSoon,
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