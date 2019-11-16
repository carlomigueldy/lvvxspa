<template>
    <div>
        <v-content>
            <v-container
                class="fill-height"
                fluid
            >
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
                            <v-toolbar-title>Register</v-toolbar-title>
                            <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    v-model="form.name"
                                    label="Name"
                                    prepend-icon="mdi-account"
                                    type="text"
                                />

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

                                <v-text-field
                                    v-model="form.password_confirmation"
                                    label="Confirm Password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                />
                            </v-form>

                            <div>
                                Already have an account? Login 
                                <router-link :to="{ name: 'login' }">here</router-link>.
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn 
                                @click="register"
                                color="primary"
                            >
                                Register
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'register',
    data: () => ({
        form: {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        },
    }),
    methods: {
        ...mapActions(['authRegister']),

        register() {
            this.authRegister(this.form)
        },
    }
}
</script>