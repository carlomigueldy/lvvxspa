<template>
    <v-app-bar
        fixed
        app
        dark
        class="light-blue darken-4"
    >

    <span v-if="$router.currentRoute.name == 'home'">
        App
    </span>

    <v-spacer></v-spacer>

    <span
        v-if="!loggedIn"
    >
        <v-btn 
            :to="{ name: 'login' }"
            text
        >
            Login
        </v-btn>

        <v-btn 
            :to="{ name: 'register' }"
            text
        >
            Register
        </v-btn>
    </span>
    <span v-else>
        <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
                icon
            >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                @click="$router.push({ name: 'dashboard' })"
            >
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item
                @click="logout"
            >
                <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
    </span>

    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Navbar',
    computed: mapGetters(['loggedIn']),
    methods: {
        logout() {
            this.authLogOut()
        },
        
        ...mapActions(['authLogOut']),
    }
}
</script>