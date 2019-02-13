const counter = {
    state: {
      count: 0
    },
    mutations: {
      INCREMENT (state) {
        state.count++
      },
      DE_INCREMENT (state) {
        state.count--
      }
    },
    actions: {
      increment: ({ commit }, amount) => commit('INCREMENT', amount),
      deincrement: ({ commit }, amount) => commit('DE_INCREMENT', amount)
    },
    getters:{
      getCounter: state => state.count
    }
  }

  export default counter