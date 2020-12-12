import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalCadastro: false
  },
  mutations: {
    abrirModalCadastro (state,value) {
      state.modalCadastro = value
    }
  }
})

  