import Vue from 'vue';
import Vuex from 'vuex';
import datacenters from './modules/datacenters.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        datacenters
    }
});
