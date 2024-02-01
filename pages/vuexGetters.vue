<template>
  <v-container>
    <h3>Vuex - Getters</h3>
    <display-code :code="snippets.vuexGetters1" />

    <p>Mapping Getters on the component</p>
    <display-code :code="snippets.vuexGetters2" />

  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters({'snippets': 'codeSnippet/getVuexGettersSnippets'})
    },
    methods: {
        ...mapActions({'loadSnippets': 'codeSnippet/loadVuexGettersSnippets'})
    },
    head() {
        return {
            meta: [{
                content: "glennpacker.net vue vuex getters",
                hid: "description",
                name: "description"
            }],
            title: "Vuex Getters"
        };
    },
    created() {
        this.loadSnippets();
    }
};
</script>