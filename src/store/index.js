import Vue from 'vue'
import Vuex from 'vuex';
import orders from './orders'
import users from './users'
import shared from './shared'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        orders, 
        users, 
        shared
    }
})