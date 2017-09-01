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
          console.error('Error occured', err);
        });
    },
    CREATE_DATACENTER({ commit }, datacenter) {
      createDatacenter(datacenter).then(response => {
        if (response.status === 201) {
          state.datacenters.push(response.data);
        }
        console.log(response)
      }).catch(err => {
        console.error('Error occured', err);
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
