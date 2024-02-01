<template>
  <v-container v-if="clients">
    <h3 style="padding-bottom: 25px">Clients using Vue JS</h3>

    <v-layout row wrap>
      <panel
        :color="panelColors[8 - (index % 9)]"
        v-for="(client, index) in vueClients"
        :key="index"
      >
        <div slot="header">{{ client.name }}</div>
        <div slot="main">{{ client.summary }}</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <template v-if="hasBackEnd(client)">
              <dt>Back End Technologies</dt>
              <dd>
                <span v-for="beTech in backEndLinks(client)" :key="beTech.text">
                  <a :href="beTech.link">{{ beTech.text }}</a
                  >,
                </span>
                <template v-if="backEndItems(client)">{{
                  backEndItems(client)
                }}</template>
              </dd>
            </template>
            <template v-if="hasFrontEnd(client)">
              <dt>Front End Technologies</dt>
              <dd>
                <span v-for="tech in frontEndLinks(client)" :key="tech.text">
                  <a :href="tech.link">{{ tech.text }}</a
                  >,
                </span>
                <template v-if="frontEndItems(client)">{{
                  frontEndItems(client)
                }}</template>
              </dd>
            </template>
            <template v-if="client.testTech">
              <dt>TDD / Test</dt>
              <dd>{{ client.testTech.join(", ") }}</dd>
            </template>
          </ul>

          <p>{{ client.when }}</p>
        </div>
      </panel>
    </v-layout>

    <h3 style="padding: 25px 0">All Recent Clients</h3>

    <v-layout row wrap>
      <panel
        :color="panelColors[index % 9]"
        v-for="(client, index) in clients"
        :key="index"
      >
        <div slot="header">{{ client.name }}</div>
        <div slot="main">{{ client.summary }}</div>
        <div slot="additional">
          <ul>
            <dt>Agile</dt>
            <template v-if="hasBackEnd(client)">
              <dt>Back End Technologies</dt>
              <dd>
                <span v-for="beTech in backEndLinks(client)" :key="beTech.text">
                  <a :href="beTech.link">{{ beTech.text }}</a
                  >,
                </span>
                <template v-if="backEndItems(client)">{{
                  backEndItems(client)
                }}</template>
              </dd>
            </template>
            <template v-if="hasFrontEnd(client)">
              <dt>Front End Technologies</dt>
              <dd>
                <span v-for="tech in frontEndLinks(client)" :key="tech.text">
                  <a :href="tech.link">{{ tech.text }}</a
                  >,
                </span>
                <template v-if="frontEndItems(client)">{{
                  frontEndItems(client)
                }}</template>
              </dd>
            </template>
            <template v-if="client.testTech">
              <dt>TDD / Test</dt>
              <dd>{{ client.testTech.join(", ") }}</dd>
            </template>
          </ul>

          <p>{{ client.when }}</p>
        </div>
      </panel>
    </v-layout>
  </v-container>
</template>
<script>
import panel from '../components/panel.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    panel,
  },
  head() {
    return {
      title: "GlennPacker.net Clients",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net clients",
        },
      ],
    };
  },
  data() {
    return {
      panelColors: [
        "#ff711e",
        "#ffe11e",
        "#c71eff",
        "#ffe11e",
        "#c71eff",
        "#ff711e",
        "#c71eff",
        "#ff711e",
        "#ffe11e",
      ],
      vs: {
        showC1: false,
        showC2: false,
        other: {
          showC1: false,
          showC2: false,
          showC4: false,
          showC5: false,
          showC6: false,
          showC7: false,
          showC8: false,
          showC9: false,
        },
      },
    };
  },
  computed: {
    ...mapGetters({ clients: 'history/getClients' }),
    vueClients() {
      if (!this.clients) return null;
      return this.clients.filter((client) =>
        client.technologies.some((t) => t.text.toLowerCase().includes("vue"))
      );
    },
  },
  methods: {
    ...mapActions({ loadHistories: 'history/loadHistories' }),
    backEndItems(client) {
      const items = client.technologies.filter((r) => r.isBackEnd && !r.link);
      return items.map((item) => item.text).join(", ");
    },
    backEndLinks(client) {
      return client.technologies.filter((r) => r.isBackEnd && r.link);
    },
    frontEndItems(client) {
      const items = client.technologies.filter((r) => !r.isBackEnd && !r.link);
      return items.map((item) => item.text).join(", ");
    },
    frontEndLinks(client) {
      return client.technologies.filter((r) => !r.isBackEnd && r.link);
    },
    hasBackEnd(client) {
      if (!client) return [];
      return client.technologies.some((r) => r.isBackEnd);
    },
    hasFrontEnd(client) {
      if (!client) return [];
      return client.technologies.some((r) => !r.isBackEnd);
    },
  },
  created() {
    this.loadHistories();
  },
};
</script>
<style scoped>
ul {
  padding: 16px;
  padding-left: 30px;
}
dt {
  font-weight: 600;
}
</style>