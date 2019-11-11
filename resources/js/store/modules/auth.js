import axios from 'axios'
import { url } from '../url'

const state = {
    user: {},
    token: null,
}

const getters = {
    loggedIn: state => state.token !== null,
}

const actions = {
    /**
     * Log in user.
     * @return void
     */
    async logIn({ commit }, credentials) {
        const response = await axios.post(`${url}/api/auth/login`)
    },

    /**
     * Log out user.
     * @return void
     */
    async logout({ commit, dispatch }) {
        const response = await axios.post(`${url}/api/auth/login`)
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