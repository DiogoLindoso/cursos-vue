<template>
  <div class="row">
    <div class="col md-3" v-for="c in cursos" :key="c.url">
      <b-card
        :title="c.nome"
        :img-src="`data:image/jpeg;base64,${c.capa}`"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>{{c.url}}</b-card-text>

        <b-button href="#" variant="primary">Ver Detalhes</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PainelCursos",
  data() {
    return {};
  },
  mounted() {
    axios
      .get("http://laravel-vue-novo.com/api/cursos")
      .then(({ data }) => {
        this.$store.commit("definirCursos", data);
      })
      .catch(() => {
        this.$swal({
          icon: "error",
          title: "Ops",
          text: "Erro ao buscar os cursos"
        });
      });
  },
  computed: {
    cursos() {
      return this.$store.state.cursos;
    }
  }
};
</script>