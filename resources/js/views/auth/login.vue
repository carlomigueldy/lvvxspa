<template>
    <v-container fluid>
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                sm="8"
                md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                        flat
                        dark
                        class="light-blue darken-4"
                    >
                        <v-toolbar-title>Login</v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                        <v-text-field
                            v-model="form.email"
                            label="Email Address"
                            prepend-icon="mdi-email"
                            type="email"
                        />

                        <v-text-field
                            v-model="form.password"
                            label="Password"
                            prepend-icon="mdi-lock"
                            type="password"
                        />
                        </v-form>

                        <div>
                            Need an account? Register 
                            <router-link :to="{ name: 'register' }">here</router-link>.
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn 
                            @click="login"
                            color="primary"
                        >
                            Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    data: () => ({
        form: {
            email: null,
            password: null,
        },
    }),
    methods: {
        ...mapActions(['authLogIn']),
        
        login() {
            this.authLogIn(this.form)
        },
    } 
}
</script>