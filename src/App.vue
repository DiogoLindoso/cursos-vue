<template>
  <div>
    <Navbar />
    <FormCadastro />
    <div class="container mt-5">
      <PainelCursos />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import FormCadastro from "./components/FormCadastro"
import PainelCursos from "./components/PainelCursos"
export default {
  name: "App",
  components: {
    Navbar,
    FormCadastro,
    PainelCursos
  },
  data() {
    return {
    };
  }
}
</script>

<style>
</style>
