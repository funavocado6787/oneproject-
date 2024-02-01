<template>
  <v-container layout column>
    <h3>State Management (Vuex)</h3>
    <v-flex>Install vuex via npm.</v-flex>
    <display-code :code="snippets.vuex1" oneLiner="true" />

    <v-flex class="pt-2">Create a Vuex component.</v-flex>
    <display-code :code="snippets.vuex2" />

    <v-flex class="pt-2">
        Register the store with the root main app.js
    </v-flex>
    <display-code :code="snippets.vuex3"  />
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters({'snippets': 'codeSnippet/getVuexSetupSnippets'})
    },
    methods: {
        ...mapActions({'loadSnippets': 'codeSnippet/loadVuexSetupSnippets'})
    },
    head() {
        return {
            title: "Vuex",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "glennpacker.net vue vuex"
                }
            ]
        };
    },
    created () {
        this.loadSnippets();
    },
};
</script>