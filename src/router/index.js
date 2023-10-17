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



const authLogin = (to, from, next) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      next();
    }else {
      localStorage.removeItem("access_token");
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