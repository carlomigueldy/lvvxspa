<template>
    <v-navigation-drawer
        dark
        app
        permanent
        overflow
    >
        <v-list-item>
            <v-list-item-content class="text-center">
                <v-list-item-title class="title">
                    App
                </v-list-item-title>
                <v-list-item-subtitle>
                    Subtitle
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    
        <v-list-item two-line>
            <v-list-item-avatar>
                <img src="/img/default/default.png">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ auth.user.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ auth.role.name }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list>
            <v-list-item :to="{ name: 'dashboard' }">
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{ name: 'products' }">
                <v-list-item-icon>
                    <v-icon>mdi-package-variant-closed</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Products</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Sidebar',
    computed: mapGetters(['auth', 'user']),
}
</script>