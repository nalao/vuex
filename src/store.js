import Vue from 'vue'
import Vuex from 'vuex'
import counter from './components/test'
Vue.use(Vuex)

 export default new Vuex.Store({
  modules: {
    counter,
  }
})