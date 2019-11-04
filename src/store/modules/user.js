import Vue from 'vue';
import {
    userInfo,
    loginName,
    loginEmail
} from '@api/user';


const state = {
    token: '',


}


const mutations = {
    setToken: (state, token) => {
        Vue.ls.set('Access-Token', token)
        state.token = token
    }
}


const actions = {
    login: async ({ commit, state }, params) => {
        const [err,res] = params.Active ? await loginName({
                userName: params.username,
                password: params.password,
                code: params.code
            }) : await loginEmail({
                Email: params.email,
                password: params.password,
                code: params.code
            })


        if(!err) {
            const { data } = res;
            commit('setToken', data.accessToken)
        }
        return [err, res]
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
