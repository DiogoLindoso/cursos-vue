<template>
  <div>
    <form @submit.prevent="salvarForm" method="post">
      <input type="text" v-model="nome">
      <button type="submit">Salvar</button>
      <button type="button" @click="mostrarNome">Mostrar Nome</button>
    </form>
    <h1>Nome: {{nome}}</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      nome: ''
    }
  },
  methods:{
      salvarForm(){
        alert(this.nome)
      },
      mostrarNome(){
        alert(`O nome digitado é ${this.nome}`)
      }
    }
}
</script>

<style>

</style>
