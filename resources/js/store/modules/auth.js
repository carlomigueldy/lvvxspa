import axios from 'axios'
import router from '../../router'
import { url } from '../url'

const state = {
    user: {},
    role: {},
    token: null,
    loading: false,
}

const getters = {
    auth: state => state.user,
    authRole: state => state.role,
    loggedIn: state => state.token !== null,
    isLoading: state => state.loading,
}

const mutations = {
    setToken: (state, token) => state.token = token,
    removeToken: (state) => state.token = null,
    setUser: (state, user) => state.user = user,
    setLoading: (state, boolean) => state.loading = boolean,
    serUserRole: (state, role) => state.role = role,
}

const actions = {
    /**
     * Log in user and retrieves 
     * an access token.
     */
    async authLogIn({ commit, dispatch }, credentials) {
        commit('setLoading', true)
        try {
            const response = await axios.post(`${url}/api/auth/login`, {
                email: credentials.email,
                password: credentials.password,
            })
            
            const data = response.data
            dispatch('storeToken', data.access_token)
            dispatch('getAuthUser')
            commit('setLoading', false)
            router.push({ name: 'dashboard' })
            console.log(response)
        } catch (err) {
            commit('setLoading', false)
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
            router.push({ name: 'login' })
        }
    },

    /**
     * Checks if the user is 
     * currently authenticated.
     * &
     * Checks if access token is
     * stored in a local storage.
     */
    async checkAuth({ commit, dispatch }) {
        const token = localStorage.getItem('access_token')
        if (token !== null) {
            commit('setToken', token)
            dispatch('getAuthUser')
        }
    },

    /**
     * Log out user and destroys
     * the access token.
     */
    async authLogOut({ commit, dispatch }) {
        commit('setLoading', true)
        try {
            const response = await axios.post(`${url}/api/auth/logout`, {}, {
                headers: { 'Authorization': `Bearer ${state.token}` }
            })

            dispatch('destroyToken')
            commit('setLoading', false)
        } catch (err) {
            dispatch('destroyToken')
            commit('setLoading', false)
            console.log(err.response)
        }
    },

    /**
     * Register a user.
     */
    async authRegister({ commit, dispatch }, form) {
        commit('setLoading', true)
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
            
            commit('setLoading', false)
            dispatch('authLogIn', credentials)
        } catch (err) {
            commit('setLoading', false)
            console.log(err.response)
        }
    },

    /**
     * Gets the current authenticaed 
     * user in API.
     */
    async getAuthUser({ commit, dispatch }) {
        commit('setLoading', true)
        try {
            const response = await axios.post(`${url}/api/auth/me`, {}, {
                headers: { 'Authorization': `Bearer ${state.token}` }
            })

            commit('setUser', response.data.user)
            commit('serUserRole', response.data.role)
            commit('setLoading', false)
            console.log(response.data)
        } catch (err) {
            commit('setLoading', false)
            dispatch('destroyToken')
            console.log(err.response)
        }
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}