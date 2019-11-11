import axios from 'axios'
import { url } from '../url'

const state = {
    user: {},
    token: null,
}

const getters = {
    loggedIn: state => state.token !== null,
    getUser: state => state.user,
}

const actions = {
    /**
     * Log in user and retrieves 
     * an access token.
     */
    async authLogIn({ commit, dispatch }, credentials) {
        try {
            const response = await axios.post(`${url}/api/auth/login`, {
                email: credentials.email,
                password: credentials.password,
            })
            
            const data = response.data
            dispatch('storeToken', data.access_token)
            console.log(response)
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Stores the access token in 
     * a local storage.
     */
    storeToken({ commit }, token) {
        if (token !== null) {
            localStorage.setItem('access_token', token)
            commit('setToken', token)
        }
    },

    /**
     * Checks if the user is 
     * currently authenticated.
     * &
     * Checks if access token is
     * stored in a local storage.
     */
    async checkAuth({ commit }) {
        const token = localStorage.getItem('access_token')
        if (token !== null) {
            commit('setToken', token)
        }
    },

    /**
     * Log out user and destroys
     * the access token.
     */
    async authLogOut({ commit, dispatch }) {
        const response = await axios.post(`${url}/api/auth/login`)
    },

    /**
     * Register a user.
     */
    async authRegister({ commit }, form) {
        try {
            const response = await axios.post(`${url}/api/auth/register`, {
                name: form.name,
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation,
            })
            console.log(response)
        } catch (err) {
            console.log(err.response)
        }
    },
}

const mutations = {
    setToken: (state, token) => state.token = token,
    removeToken: (state) => state.token = null,
}

export default {
    state,
    getters,
    actions,
    mutations,
}