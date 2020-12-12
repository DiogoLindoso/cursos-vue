<template>
  <b-modal id="modal-1" title="BootstrapVue" v-model="abrirModal">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</template>

<script>
export default {
    name: 'FormCadastro',
    computed:{
        abrirModal:{
            get(){
                return this.$store.state.modalCadastro
            },
            set(v) {
                this.$store.commit('abrirModalCadastro', v)
            }
        }
    }
}
</script>