<template>
  <v-card-text class="pa-6">
    <div>
      <div class="disclaimer pb-2" v-if="$vuetify.lang.current != 'en_us'">
        {{ t(k.SCORE_ONLY_IN_ENGLISH) }}<v-divider></v-divider>
      </div>
      <h4 v-if="!allFieldsHaveValues" class="font-italic">
        Result will display here when form is complete.
      </h4>
    </div>
    <div v-if="allFieldsHaveValues" class="results">
      <h3 class="black--text mb-2">Result:</h3>
      <pre>Sum: {{ sum }}</pre>
      <pre>Average: {{ average.toFixed(3) }}</pre>
    </div>
  </v-card-text>
</template>

<script>
const fetchAllValues = (sections) => {
  return sections
    .map(({ values }) => Object.entries(values).map(([, value]) => value))
    .flat();
};

export default {
  props: ['allSections'],
  computed: {
    allFieldsHaveValues() {
      return fetchAllValues(this.allSections).every((e) => e !== null);
    },
  },
  methods: {
    calculateSum() {
      // for each section, add its values
      return fetchAllValues(this.allSections).reduce((a, i) => a + i, 0);
    },
    calculateAverage() {
      // Get sum, then divide it out by number of questions
      let { length } = fetchAllValues(this.allSections);
      return this.sum / length;
    },
  },
  watch: {
    allSections: {
      handler() {
        // If all fields have values, calculate results
        if (this.allFieldsHaveValues) {
          this.sum = this.calculateSum();
          this.average = this.calculateAverage();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      sum: undefined,
      average: undefined,
    };
  },
};
</script>

<style scoped lang="scss"></style>
