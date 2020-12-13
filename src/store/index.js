import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cityName:'深圳'
  },
  mutations: {
    changeCityMutation(state,city){
      state.cityName=city;
      localStorage.city=city;
  	}
  },
  actions: {
  },
  modules: {
  }
})
