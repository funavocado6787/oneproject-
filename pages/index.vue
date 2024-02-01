<template>
  <v-container layout fluid>
    <v-flex md4 hidden-md-and-down pr-5 pl-5 pt-5>
      <img class="image-circle" src="~/assets/GlennPacker.jpg" />
    </v-flex>
    <v-flex md12 pt-5>
      <p>Glenn Packer is a freelance contractor, working as a full-stack developer with experience in many different sectors and technologies including Vue JS.</p>
      <p>Based in Sussex, Glenn is available for any length of contract, anywhere in the UK or Europe.</p>
      <p>Glenn Packer can bring a wealth of knowledge and expertise to a project, either to kickstart a new one or bring new ideas to the environment.</p>
      <p>Happy to work either in an Agile or Waterfall environment.</p>
      <p>This website is a demo of a site using the Nuxt and Vue.js frameworks with material design (Vuetify) and is dedicated to the subject. Glenn first used the Vue Js framework while in contract for Lumesse in April 2017</p>
      <p>
        To see the general website please visit
        <a
          href="//glennpacker.net"
          target="new"
        >GlennPacker.net</a>
      </p>

      <blockquote class="blockquote padding-top-xl">
        <p>"Vue provides an answer to the issue of JavaScript fatigue, and it is a worthy successor to the legacy of jQuery"</p>
        <footer>Peter Jang - Dean of instruction at Actualize</footer>
      </blockquote>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  name: "home"
};
</script>
<style>
.image-circle {
  border-radius: 50%;
  max-width: 390px;
  width: 100%;
}
</style>