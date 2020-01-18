import { asyncRoutes, resetRouter } from '@/router';

const state = {
	addRoutes: []
};

const mutations = {
	setRoutes: (state, addRoutes) => {
		state.addRoutes = addRoutes;
	}
};

const actions = {
	addRouter: ({ commit }) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('setRoutes', asyncRoutes);
				resolve(asyncRoutes);
			}, 1000);
		});
	},
	resetRouter: ({ commit }) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('setRoutes', []);
				// resetRouter()
				resolve([]);
			}, 1000);
		});
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
