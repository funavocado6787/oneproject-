<template>
  <v-container>
    <h3>Vuex - Actions</h3>
    <display-code :code="snippets.vuexActions1" />

    <p>Calling Actions &amp; Mutations</p>
    <display-code :code="snippets.vuexActions2" />
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({'snippets': 'codeSnippet/getVuexActionsSnippets'})
    },
    methods: {
        ...mapActions({'loadSnippets': 'codeSnippet/loadVuexActionsSnippets'})
    },
    head() {
        return {
            meta: [{
                content: "GlennPacker.net vue vuex actions",
                hid: "description",
                name: "description"
            }],
            title: "Vuex Actions"
        };
    },
    created () {
        this.loadSnippets();
    },
};
</script>