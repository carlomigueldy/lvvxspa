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
    
        <v-list>
            <v-list-item :to="{ name: 'home' }">
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
export default {
    name: 'Sidebar',
}
</script>