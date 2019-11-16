<template>
    <v-app>
        <Sidebar v-if="loggedIn && $router.currentRoute.name !== 'home'" />
        <Navbar v-if="!($router.currentRoute.name == 'login' 
            || $router.currentRoute.name == 'register')" 
        />

        <v-container fluid>
            <router-view></router-view>
        </v-container>

        <v-overlay :value="isLoading">
            <v-progress-circular 
                color="primary"
                indeterminate 
                size="64">
            </v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Sidebar,
        Navbar,
    },
    computed: mapGetters(['loggedIn', 'isLoading']),
    methods: mapActions(['checkAuth']),
    created() {
        this.checkAuth()
    },
}
</script>