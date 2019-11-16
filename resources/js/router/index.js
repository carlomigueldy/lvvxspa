import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import login from '../views/auth/login'
import register from '../views/auth/register'
import dashboard from '../views/dashboard'
import products from '../views/products'
import product_show from '../views/products/product_show'

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
        {
            path: '/products',
            name: 'products',
            component: products,
        },
        {
            path: '/products/:id',
            component: product_show,
        }
    ],
})