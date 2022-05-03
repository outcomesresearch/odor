<template>
  <div class="card-stepper mx-auto page-padding">
    <v-card class="my-12 mt-0">
      <v-card-title>
        Nasal Outcome Score for Epistaxis in Hereditary Hemorrhagic
        Telangiectasia (NOSE HHT)
      </v-card-title>
      <v-card-text style="text-align: left;">
        <p>
          Below you will find a list of physical, functional, and emotional
          consequences of your nosebleeds. We would like to know more about
          these problems and would appreciate you answering the following
          questions to the best of your ability. There are no right or wrong
          answers, as your responses are unique to you. Please rate your
          problems as they have been over
          <strong class="underline">the past two weeks</strong>.
        </p>
        <p class="mb-0">
          Thank you for your participation. Do not hesitate to ask for
          assistance if necessary.
        </p>
      </v-card-text>
    </v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-stepper v-model="e6" vertical @change="handleStepChange">
        <v-stepper-step :complete="e6 > 1" step="1" editable class="step-label">
          How severe are the following problems
          <strong>due to your nosebleeds</strong>?
        </v-stepper-step>
        <v-stepper-content step="1">
          <div class="_table">
            <div class="_row" v-for="prompt in section1.prompts" :key="prompt">
              <div class="prompt">{{ prompt }}</div>
              <v-select
                class="options"
                v-model="section1.values[prompt]"
                :items="section1.options"
                item-text="text"
                item-value="value"
                :rules="rules"
                dense
              ></v-select>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2" editable class="step-label">
          How difficult is it to perform the following tasks
          <strong>due to your nosebleeds</strong>?
        </v-stepper-step>
        <v-stepper-content step="2" editable>
          <div class="_table">
            <div class="_row" v-for="prompt in section2.prompts" :key="prompt">
              <div class="prompt">{{ prompt }}</div>
              <v-select
                class="options"
                v-model="section2.values[prompt]"
                :items="section2.options"
                item-text="text"
                item-value="value"
                :rules="rules"
                dense
              ></v-select>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3" editable class="step-label">
          How bothered are you by the following
          <strong>due to your nosebleeds</strong>?
        </v-stepper-step>
        <v-stepper-content step="3">
          <div class="_table">
            <div class="_row" v-for="prompt in section3.prompts" :key="prompt">
              <div class="prompt">{{ prompt }}</div>
              <v-select
                class="options"
                v-model="section3.values[prompt]"
                :items="section3.options"
                item-text="text"
                item-value="value"
                :rules="rules"
                dense
              ></v-select>
            </div>
          </div>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="4" editable>
          Results:
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-btn :disabled="!valid" color="success" class="mr-4">
            Submit
          </v-btn>
          <div v-if="!result">
            <div>
              Sum of all items: <span>{{ sum() }}</span>
            </div>
            <div>
              Average of all items: <span>{{ average().toFixed(3) }}</span>
            </div>
          </div>
        </v-stepper-content>
      </v-stepper></v-form
    >
  </div>
</template>

<script>
import {
  SECTION1_PROMPTS,
  SECTION2_PROMPTS,
  SECTION3_PROMPTS,
} from '../assets/prompts';

import {
  SECTION1_OPTIONS,
  SECTION2_OPTIONS,
  SECTION3_OPTIONS,
} from '../assets/options';

const initValues = (arr) => arr.reduce((a, i) => ({ ...a, [i]: null }), {});

const initOptions = (arr) => arr.map((o, i) => ({ text: o, value: i }));

const fetchAllValues = (sections) => {
  return sections
    .map(({ values }) => Object.entries(values).map(([, value]) => value))
    .flat();
};

export default {
  computed: {
    allSections() {
      return [this.section1, this.section2, this.section3];
    },
  },
  methods: {
    handleStepChange(step) {
      if (step === '4') return this.$refs.form.validate();
    },
    sum() {
      // for each section, add its values
      return fetchAllValues(this.allSections).reduce((a, i) => a + i, 0);
    },
    average() {
      // Get sum, then divide it out by number of questions
      let { length } = fetchAllValues(this.allSections);
      return this.sum() / length;
    },
  },
  data() {
    return {
      e6: 1,
      valid: false,
      result: null,
      rules: [(v) => v !== null || 'Name is required'],
      section1: {
        prompts: SECTION1_PROMPTS,
        values: initValues(SECTION1_PROMPTS),
        options: initOptions(SECTION1_OPTIONS),
      },
      section2: {
        prompts: SECTION2_PROMPTS,
        values: initValues(SECTION2_PROMPTS),
        options: initOptions(SECTION2_OPTIONS),
      },
      section3: {
        prompts: SECTION3_PROMPTS,
        values: initValues(SECTION3_PROMPTS),
        options: initOptions(SECTION3_OPTIONS),
      },
    };
  },
};
</script>

<style>
.card-stepper {
  text-align: left;
  max-width: 800px;
}

#app .v-card__title {
  word-break: keep-all;
}

#app .underline {
  text-decoration: underline;
}

#app .v-stepper__content {
  padding-left: 0px;
}

#app .v-input {
  font-size: 14px;
}

#app .prompt {
  word-wrap: break-word; /* old name */
  overflow-wrap: break-word;
  white-space: wrap;
}

._table {
  display: grid;
  padding-left: 10px;
  grid-gap: 20px;
}

._row {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 150px;
  text-align: left;
  align-items: center;
}

.page-padding {
  padding: 48px;
}

@media only screen and (max-width: 600px) {
  .page-padding {
    padding: 10px;
  }
}
</style>
