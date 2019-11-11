<template>
    <v-navigation-drawer
        dark
        app
        permanent
        overflow
        src="https://i.pinimg.com/originals/92/52/7f/92527f55b320493e49a2ecdb7dbe9336.jpg"
    >
        <v-list-item>
            <v-list-item-content class="text-center">
                <v-list-item-title class="title">
                    Warcraft
                </v-list-item-title>
                <v-list-item-subtitle>
                    Wow is life
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    
        <v-list-item two-line>
            <v-list-item-avatar>
                <img src="https://media.mmo-champion.com/images/news/2018/february/WoWIcon12.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ getUser.name }}</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list>
            <v-list-item :to="{ name: 'dashboard' }">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Sidebar',
    computed: mapGetters(['getUser']),
}
</script>