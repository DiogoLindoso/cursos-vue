<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Cursos Legais</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-nav-item @click="modalCadastro" >Cadastrar novo</b-nav-item>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: "Navbar",
  methods:{
      modalCadastro(){
          this.$store.commit('abrirModalCadastro', true)
      }
  }
};
</script>