import { getDatacenters,
         createDatacenter } from '../../api/datacenters.js'

const state = {
    datacenters: []
};

const mutations = {
    'SET_DATACENTERS' (state, datacenters) {
        state.datacenters = datacenters;
    }
};

const actions = {
    FETCH_DATACENTER({ commit }) {
        getDatacenters().then(response => {
            commit('SET_DATACENTERS', response.data.data_center);
        }).catch(err => {

        });
    },
    CREATE_DATACENTER({ commit }, datacenter) {
      createDatacenter(datacenter).then(response => {
        console.log(reponse)
      }).catch(err => {

      });
    }
}

const getters = {
    datacenters: state => state.datacenters
}

export default {
    state,
    mutations,
    actions,
    getters
}
