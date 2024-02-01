<template>
  <v-container layout column>
    <v-layout row>
      <v-flex xs6>
        <h3>Nuxt Routing</h3>With Nuxt the routing table is automatically built automatically from the pages directory.
        Parameters are done via convetion of directory to be the route name and the parameter as the filename.
      </v-flex>
      <v-flex xs6 class="pl-3">
        <h4>Using Nuxt Routing</h4>
        <display-code :code="snippets.routing1" :oneLiner="true" />
      </v-flex>
    </v-layout>

    <v-layout row class="pt-3">
      <v-flex xs6>
        <h3>Vue JS - Example routing</h3>
        <p>The Basic routing table</p>
        <display-code :code="snippets.routing2" />
      </v-flex>
      <v-flex xs6 class="pl-3">
        <h4>Using the Routing</h4>

        <p>simply use the href or alternatively in the code use:</p>
            <display-code :code="snippets.routing3" :oneLiner="true" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "routing",
  computed: {
      ...mapGetters({ snippets: 'codeSnippet/getRoutingSnippets' }),
  },
  methods: {
      ...mapActions({ loadSnippets: 'codeSnippet/loadRoutingSnippets' })
  },
  head() {
    return {
      title: "Vue Router",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GlennPacker.net vue router and routing"
        }
      ]
    };
  },
  created () {
      this.loadSnippets();
  },
};
</script>


