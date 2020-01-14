import Vue from 'vue';
import Vuex from 'vuex';
import app from '@/store/modules/app';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		app
	},
	plugins: [createPersistedState({ storage: window.sessionStorage })]
});
