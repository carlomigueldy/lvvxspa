import axios from 'axios'
import router from '../../router'
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
    async authLogIn({ dispatch }, credentials) {
        try {
            const response = await axios.post(`${url}/api/auth/login`, {
                email: credentials.email,
                password: credentials.password,
            })
            
            const data = response.data
            dispatch('storeToken', data.access_token)
            dispatch('getAuthUser')
            router.push({ name: 'dashboard' })
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
     * Destroys the token saved in 
     * local storage.
     */
    destroyToken({ commit }) {
        const token = localStorage.getItem('access_token')
        if (token !== null) {
            localStorage.removeItem('access_token')
            commit('removeToken')
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
    async authLogOut({ dispatch }) {
        try {
            const response = await axios.post(`${url}/api/auth/logout`, {}, {
                headers: { 'Authorization': `Bearer ${state.token}` }
            })
            dispatch('destroyToken')
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Register a user.
     */
    async authRegister({ commit, dispatch }, form) {
        try {
            const response = await axios.post(`${url}/api/auth/register`, {
                name: form.name,
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation,
            })

            const credentials = {
                email: form.email,
                password: form.password,
            }

            dispatch('authLogIn', credentials)
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Gets the current authenticaed 
     * user in API.
     */
    async getAuthUser({ commit }) {
        try {
            const response = await axios.post(`${url}/api/auth/me`, {}, {
                headers: { 'Authorization': `Bearer ${state.token}` }
            })
            console.log(response.data)
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