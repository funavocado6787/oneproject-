<template>
    <v-flex
        sm4
        pl-2
        pr-2
    >
    <v-toolbar
        class="heading"
        :color="color"
        @click="show = !show"
    >
        <slot name="header"></slot>
        <v-spacer></v-spacer>
        <v-icon dark>
            mdi-menu
        </v-icon>
    </v-toolbar>
    <v-card
        class="pa-3 mb-3"
        :min-height="minHeight"
    >
      <slot name="main"></slot>
      <div v-show="show">
        <slot name="additional"></slot>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    name: 'panel',
    props: {
        color: {
            type: String,
            default: 'rgb(30, 144, 255)',
        },
        minHeight: {
            type: String,
            default: '100',
        },
    },
    data() {
        return {
        show: false,
        };
    },
    computed: {
        cardMinHeight: function () {
            return this.minHeight + 'px';
        },
    },
};
</script>
<style scoped>
.heading {
  font-weight: 300;
  color: white !important;
  font-size: 1.3em;
}
</style>