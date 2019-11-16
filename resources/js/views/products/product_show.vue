<template>
    <v-content>
        <v-card>
            <v-card-title>A single product</v-card-title>
            <v-card-text>
                {{ $route.params }}
            </v-card-text>
        </v-card>
    </v-content>
</template>

<script>
export default {
    created() {
        console.log('Here', this.$route.params)
    }
}
</script>
