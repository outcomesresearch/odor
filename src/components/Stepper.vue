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
const SECTION1_PROMPTS = [
  'Blocked up, stuffy nose',
  'Nasal crusting',
  'Blood running down back of your throat',
  'Decreased sense of smell or taste',
  'Shortness of breath',
  'Fatigue',
];

const SECTION2_PROMPTS = [
  'Blow your nose',
  'Breathe through your nose',
  'Work at your job (or school)',
  'Enjoy time with friends or family',
  'Have intimacy with spouse or significant other',
  'Bend over/pick something up off the ground',
  'Fall asleep',
  'Stay asleep',
  'Exercise',
  'Go outdoors regardless of the weather or season',
  'Eat certain foods (i.e. spicy)',
  'Cook or prepare meals',
  'Clean your house/apartment',
  'Travel (i.e. by plane)',
];

const SECTION3_PROMPTS = [
  'Fear of not being able to stop a nosebleed ',
  'Fear of nosebleeds in public',
  'Sadness',
  'Embarrassment',
  'Reduced concentration',
  'Fear about nosebleeds in public',
  'Frustration, restlessness, irritability',
  'Getting blood on your clothes',
  'The need to buy new clothes',
];

const initValues = (arr) => arr.reduce((a, i) => ({ ...a, [i]: null }), {});

const initOptions = (arr) => arr.map((o, i) => ({ text: o, value: i }));

const fetchAllValues = (sections) => {
  return sections
    .map(({ values }) => Object.entries(values).map(([, value]) => value))
    .flat();
};

export default {
  methods: {
    handleStepChange(step) {
      if (step === '4') return this.$refs.form.validate();
    },
    sum() {
      // for each section, add its values
      let sections = [this.section1, this.section2, this.section3];
      return fetchAllValues(sections).reduce((a, i) => a + i, 0);
    },
    average() {
      // Get sum, then divide it out by number of questions
      let sections = [this.section1, this.section2, this.section3];
      let { length } = fetchAllValues(sections);
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
        options: initOptions([
          'No problem',
          'Mild problem',
          'Moderate problem',
          'Severe problem',
          'As bad as possible',
        ]),
      },
      section2: {
        prompts: SECTION2_PROMPTS,
        values: initValues(SECTION2_PROMPTS),
        options: initOptions([
          'No difficulty',
          'Mild difficulty',
          'Moderate difficulty',
          'Severe difficulty',
          'Complete difficulty',
        ]),
      },
      section3: {
        prompts: SECTION3_PROMPTS,
        values: initValues(SECTION3_PROMPTS),
        options: initOptions([
          'Not bothered',
          'Very rarely bothered',
          'Rarely bothered',
          'Frequently bothered',
          'Very frequently bothered',
        ]),
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
