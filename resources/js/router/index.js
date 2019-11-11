import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import login from '../views/login'
import register from '../views/register'
import dashboard from '../views/dashboard'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            name: 'register',
            component: register,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
        },
    ],
})