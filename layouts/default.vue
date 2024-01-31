<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#1e90ff" dark :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" @click="$router.push('/')" />
      <v-spacer />
      <v-btn icon @click="$router.push('/contact')">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer color="#1e90ff" :fixed="fixed" app dark>
      <v-icon class="pr-3">mdi-phone</v-icon>07568400965
      <v-icon class="pr-3 pl-3">mdi-email</v-icon>GlennPacker@GlennPacker.net
      <v-spacer />
      <a href="//www.linkedin.com/in/glenn-packer-10718622" target="_blank" class="icon-link">
        <v-icon>mdi-linkedin</v-icon>
      </a>
      <a class="icon-link" href="//github.com/GlennPacker" target="_blank">
        <v-icon>mdi-github-circle</v-icon>
      </a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-domain",
          title: "Clients",
          to: "/client"
        },
        {
          icon: "mdi-vuejs",
          title: "Vue Component",
          to: "/vuebasics"
        },
        {
          icon: "mdi-road",
          title: "Routing",
          to: "/routing"
        },
        {
          icon: "mdi-bus",
          title: "Event Bus",
          to: "/eventbus"
        },
        {
          icon: "mdi-check-all",
          title: "Cheat Sheet",
          to: "/cheatsheet"
        },
        {
          icon: "mdi-battery-10",
          title: "Vuex Setup",
          to: "/vuexsetup"
        },
        {
          icon: "mdi-battery-50",
          title: "Vuex Actions",
          to: "/vuexactions"
        },
        {
          icon: "mdi-battery",
          title: "Vuex Getters",
          to: "/vuexgetters"
        },
        {
          icon: "mdi-email",
          title: "Contact",
          to: "/contact"
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "GlennPacker.net"
    };
  }
};
</script>
<style>
.v-toolbar__title {
  cursor: pointer;
}

.icon-link {
  text-decoration: none;
}
</style>



