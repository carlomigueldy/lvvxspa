<template>
    <v-content>
        <v-card>
            <v-card-title>Products</v-card-title>
            <v-card-text>
                Here is a list of products
                <v-btn @click="$router.push({ path: '/products/1' })">go</v-btn>
            </v-card-text>
        </v-card>
    </v-content>
</template>

<script>
export default {

}
</script>