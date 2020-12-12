<template>
    <div class="row" >
        <div class="col md-3" v-for="c in cursos" :key="c.url">
            <b-card
                :title="c.nome"
                :img-src="c.capa"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    {{c.url}}
                </b-card-text>

                <b-button href="#" variant="primary">Ver Detalhes</b-button>
            </b-card>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'PainelCursos',
    data(){
        return {
            cursos:[
                {
                    nome: 'Curso PHP',
                    url: 'http://curso.php',
                    capa: 'https://picsum.photos/600/300/?image=25',
                    descricao: 'Curso de PHP'
                },
                {
                    nome: 'Curso Javascript',
                    url: 'http://curso.javascript',
                    capa: 'https://picsum.photos/600/300/?image=25',
                    descricao: 'Curso de Javascript'
                },
            ]
        }
        
    }
}
</script>