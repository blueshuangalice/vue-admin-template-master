import mockRequest from '@/utils/requestMock'
const state = {
    list: {}
};
const mutations = {
    GETDATA(state, list) {
        state.list = list;
    }
};
const actions = {
    async getData({ commit }) {
        let result = await mockRequest.get('/home/list');
        console.log(result);

        if (result.code == 20000) {
            commit('GETDATA', result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations, actions,
    getters
}