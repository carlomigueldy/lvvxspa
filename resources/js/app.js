import Vue from 'vue'
import store from './store'
import vuetify from './vuetify'
import router from './router'
import App from './App'

const app = new Vue({
    el: '#app',
    components: { App },
    store,
    vuetify,
    router,
})
