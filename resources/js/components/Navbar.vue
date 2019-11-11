<template>
    <v-app-bar
        fixed
        app
        dark
        class="light-blue darken-4"
    >

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
        <v-btn
            @click="$router.push({ name: 'dashboard' })"
            text
        >
            Dashboard
        </v-btn>
        <v-btn
            @click="logout"
            text
        >
            Logout
        </v-btn>
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