<template>
    <div>
        <h1>Welcome, {{ getUser.name }}.</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'dashboard',
    computed: mapGetters(['getUser']),
}
</script>