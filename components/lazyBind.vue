<template>
  <div>
    <h5>Lazy Bind</h5>
    <v-container layout row>
      <v-flex xs6>
        <p>This will only bind the value on lossing focus similar to onChange. This will stop mulitple hits on the api or function after every char is typed.</p>
        <display-code :code="lazyCode" oneLiner="true" />
      </v-flex>
      <v-flex xs6>
        <v-text-field
          label="Try it"
          type="text"
          class="form-control"
          placeholder="try it"
          v-model.lazy="lazyVar"
        />

        <p>
          <strong>output:</strong>
          {{ lazyVar }}
        </p>
      </v-flex>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'lazy-bind',
  data() {
    return {
      lazyVar: null,
      lazyCode: `v-model.lazy="someparam"`
    };
  }
};
</script>
