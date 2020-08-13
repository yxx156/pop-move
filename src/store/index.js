import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxIndex: 1
  },
  mutations: {
    setIndex(state,newIndex){
      state.maxIndex=newIndex
    }
  },
  actions: {
  },
  modules: {
  }
})
