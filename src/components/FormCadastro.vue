<template>
  <b-modal id="modal-1" title="BootstrapVue" v-model="abrirModal" hide-footer>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome">
        <b-form-input v-model="form.nome" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Url">
        <b-form-input v-model="form.url" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Descricao">
        <b-form-input v-model="form.descricao" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group>
        <input type="file" @change="selecionaCapa" />
      </b-form-group>
      <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import axios from "axios";
const Compress = require("compress.js");

export default {
  name: "FormCadastro",
  data() {
    return {
      compress: new Compress(),
      form: {
        nome: "",
        url: "",
        capa: "",
        descricao: ""
      },
      file: null
    };
  },
  computed: {
    abrirModal: {
      get() {
        return this.$store.state.modalCadastro;
      },
      set(v) {
        this.$store.commit("abrirModalCadastro", v);
      }
    }
  },
  methods: {
    selecionaCapa(evt) {
      const files = [...evt.target.files];
      this.compress
        .compress(files, {
          size: 4,
          quality: 0.75
        })
        .then(data => {
          this.form.capa = data[0].data;
        });
    },
    onSubmit() {
      axios
        .post("http://laravel-vue-novo.com/api/cursos", this.form)
        .then(({ data }) => {
          this.$store.commit("adicionarCurso", data);
          this.$store.commit("abrirModalCadastro", false);
          this.$swal({
            icon: "success",
            title: "Sucesso",
            text: "Curso cadastrado com sucesso"
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Ops",
            text: "Erro ao cadastrar curso"
          });
        });
    }
  }
};
</script>