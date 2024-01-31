<template>
  <div id="app">
    <prism-editor
      :class="{ 'my-editor': true, 'one-liner': oneLiner }"
      v-model="code"
      :highlight="highlighter"
    >
    </prism-editor>
  </div>
</template>
<script>
import { PrismEditor } from "vue-prism-editor";
// import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
//import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: 'display-code',
  props: {
    code: String,
    oneLiner: {
        value: Boolean,
        default: false
    }
  },
  components: {
    PrismEditor
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }
  }
};
</script>
<style lang="css">

.my-editor {
    background: #555;
    color: #eee;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 1em;
    line-height: 1.5;
    padding: 5px;
    border: 1px solid black;
    border-radius: 1em;
    margin-top: .8em;
    margin-bottom: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
}

.my-editor.one-liner {
    border-radius: 0;
    width: fit-content;
    padding-left: 1em;
    padding: 0.25em 1em;
}

.prism-editor__textarea:focus {
    outline: none;
}

</style>
