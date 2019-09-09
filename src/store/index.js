import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import modules from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    state: {},
    mutations: {},
    actions: {},
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
    ]
});
