
import router from '@/router';
import routes, { Basis } from '@/router/routes';

const state = {

}


const mutations = {

}


const actions = {
    addRoute: async () => {
        const res = await new Promise((resolve, reject) => {
            router.addRoutes(routes)
            setTimeout(() => {
                resolve(true)
            }, 3000)
        })
        return res
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}