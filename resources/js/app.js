import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store'
import router from './router'
import App from './App'

Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    components: { App },
    store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        }
    }),
    router,
})
