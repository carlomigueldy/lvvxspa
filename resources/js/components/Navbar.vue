<template>
    <v-app-bar
        app
        dark
        class="black"
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

    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Navbar',
    computed: mapGetters(['loggedIn'])
}
</script>