<template>
    <v-app>
        <Sidebar v-if="loggedIn" />
        <Navbar />

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { mapGetters } from 'vuex'

export default {
    components: {
        Sidebar,
        Navbar,
    },
    computed: mapGetters(['loggedIn'])
}
</script>