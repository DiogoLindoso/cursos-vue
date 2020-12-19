import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalCadastro: false,
    cursos: []
  },
  mutations: {
    abrirModalCadastro(state, value) {
      state.modalCadastro = value
    },
    definirCursos(state, value) {
      state.cursos = value
    },
    adicionarCurso(state, value) {
      state.cursos.push(value)
    }
  }
})

