<template>
  <v-container layout column>
    <h3>Vue JS - Cheat Sheet</h3>
    <p>This is a list of useful functions that are not commonly used but worth remembering.</p>

    <panel minHeight="0px">
        <div slot="header">Modifying Bound Values</div>
        <div slot="main">
            A list of handy input model transformation and modifiers.
            <v-container
                d-flex
                justify-space-between
            >
                <div style="width: 30%">
                    <h5 >Trim</h5>
                    <p>This trims any extra white space from the model.</p>
                    <display-code :code="trimCode" oneLiner="true" />
                </div>

                <div style="width: 30%">
                    <h5 >Number</h5>
                    <p>This attempts to convert the parameter to a number instead of the default string. Will only parse if the first char is a number.</p>
                    <display-code :code="numberCode" oneLiner="true" />
                </div>

                <div style="width: 30%">
                    <h5>Once</h5>
                    <p>
                        A One time binding will give better performance as vue does not have to update its value.
                    </p>
                    <display-code :code="onceCode" oneLiner="true" />
                </div>
            </v-container>
        </div>

        <v-container
            slot="additional"
            d-flex
            justify-space-between
        >
            <div style="width: 30%">
                <v-text-field
                    label="Try it"
                    type="text"
                    class="form-control"
                    placeholder="try it"
                    v-model.trim="trim"
                />
                <p>
                    <strong>output:</strong>
                    ({{ trim }})
                </p>
            </div>
            <div style="width: 30%">
                <v-text-field
                    label="Try it"
                    type="text"
                    class="form-control"
                    placeholder="try it"
                    v-model.number="testNo"
                />

                <p>
                    <strong>output</strong> (input + 1)
                    <strong>:</strong>
                    {{ testNo + 1 }}
                </p>
            </div>

            <div style="width: 30%">

            </div>
        </v-container>
    </panel>
  </v-container>
</template>

<script>
import displayCode from '../components/displayCode.vue';
import LazyBind from '../components/lazyBind.vue';
export default {
  components: { displayCode, LazyBind },
  data() {
    return {
        onceCode: `v-model.lazy="someparam"`,
        modifyingBound: false,
        numberCode: `v-model.number="someparam"`,
        performance: false,
        someVar: "{{someVar}}",
        testNo: null,
        trim: null,
        trimCode: `v-model.trim="someparam"`
    };
  },
  head() {
    return {
      title: "Tips and Tricks",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue tips and tricks"
        }
      ]
    };
  }
};
</script>
