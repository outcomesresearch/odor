<template>
  <div class="card-stepper mx-auto page-padding">
    <v-card class="my-12 mt-0">
      <v-card-title>
        Nasal Outcome Score for Epistaxis in Hereditary Hemorrhagic
        Telangiectasia (NOSE HHT)
      </v-card-title>
      <v-card-text style="text-align: left;">
        <p class="has-text-grey">
          Below you will find a list of physical, functional, and emotional
          consequences of your nosebleeds. We would like to know more about
          these problems and would appreciate you answering the following
          questions to the best of your ability. There are no right or wrong
          answers, as your responses are unique to you. Please rate your
          problems as they have been over
          <strong class="underline">the past two weeks</strong>.
        </p>
        <p class="mb-0 has-text-grey">
          Thank you for your participation. Do not hesitate to ask for
          assistance if necessary.
        </p>
      </v-card-text>
    </v-card>
    <v-stepper v-model="e6" vertical @change="handleStepChange">
      <div>
        <v-form ref="form1" v-model="section1.valid" lazy-validation>
          <v-stepper-step
            :complete="e6 > 1"
            step="1"
            editable
            class="step-label"
          >
            How severe are the following problems
            <strong>due to your nosebleeds</strong>?
          </v-stepper-step>
          <v-stepper-content step="1">
            <div class="_table">
              <div
                class="_row"
                v-for="prompt in section1.prompts"
                :key="prompt"
              >
                <div class="prompt">{{ prompt }}</div>
                <v-radio-group
                  :column="isSmallWidth"
                  v-model="section1.values[prompt]"
                  @change="calculateResults"
                  :rules="rules"
                >
                  <v-radio
                    v-for="option in section1.options"
                    :key="option.text + option.value"
                    :label="option.text"
                    :value="option.value"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
          </v-stepper-content>
        </v-form>
        <v-form ref="form2" v-model="section2.valid" lazy-validation>
          <v-stepper-step
            :complete="e6 > 2"
            step="2"
            editable
            class="step-label"
          >
            How difficult is it to perform the following tasks
            <strong>due to your nosebleeds</strong>?
          </v-stepper-step>
          <v-stepper-content step="2" editable>
            <div class="_table">
              <div
                class="_row"
                v-for="prompt in section2.prompts"
                :key="prompt"
              >
                <div class="prompt">{{ prompt }}</div>
                <v-radio-group
                  :column="isSmallWidth"
                  v-model="section2.values[prompt]"
                  @change="calculateResults"
                  :rules="rules"
                >
                  <v-radio
                    v-for="option in section2.options"
                    :key="option.text + option.value"
                    :label="option.text"
                    :value="option.value"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
          </v-stepper-content>
        </v-form>
        <v-form ref="form3" v-model="section3.valid" lazy-validation>
          <v-stepper-step
            :complete="e6 > 3"
            step="3"
            editable
            class="step-label"
          >
            How bothered are you by the following
            <strong>due to your nosebleeds</strong>?
          </v-stepper-step>
          <v-stepper-content step="3">
            <div class="_table">
              <div
                class="_row"
                v-for="prompt in section3.prompts"
                :key="prompt"
              >
                <div class="prompt">{{ prompt }}</div>
                <v-radio-group
                  :column="isSmallWidth"
                  v-model="section3.values[prompt]"
                  @change="calculateResults"
                  :rules="rules"
                >
                  <v-radio
                    v-for="option in section3.options"
                    :key="option.text + option.value"
                    :label="option.text"
                    :value="option.value"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
          </v-stepper-content>
        </v-form>
      </div>
      <v-divider></v-divider>
      <div class="results">
        <h4 class="result-text">
          <span v-if="!allFieldsHaveValues">
            Results will display here when form is complete.</span
          ><span v-else
            ><h3 style="color: black;">Result:</h3>
            <pre>Sum: {{ sum }}</pre>
            <pre>Average: {{ average.toFixed(3) }}</pre>
          </span>
        </h4>
        <v-simple-table class="my-2">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  NOSE-HHT Score Interpretation
                </th>
                <th class="text-center">
                  Based on Sum
                </th>
                <th class="text-center">
                  Based on Average
                </th>
              </tr>
            </thead>
            <tbody
              class="text-center"
              :class="allFieldsHaveValues ? `showOutlines` : ''"
            >
              <tr class="mild">
                <td class="text-left">Mild</td>
                <td>
                  <div :class="sum <= 27 && `outline`">
                    &lt;=27
                  </div>
                </td>
                <td>
                  <div :class="average <= 1 && `outline`">&lt;=1</div>
                </td>
              </tr>
              <tr class="moderate">
                <td class="text-left">Moderate</td>
                <td>
                  <div :class="sum >= 28 && sum <= 54 && `outline`">
                    28 to 54
                  </div>
                </td>
                <td>
                  <div :class="average > 1.01 && average <= 2 && `outline`">
                    1.01 to 2
                  </div>
                </td>
              </tr>
              <tr class="severe">
                <td class="text-left">Severe</td>
                <td>
                  <div :class="sum > 54 && `outline`">
                    &gt;54
                  </div>
                </td>
                <td><div :class="average > 2 && `outline`">&gt;2</div></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <p class="has-text-grey">
          The NOSE HHT can be used to measure the change in physical and
          functional problems, functional imitations, and emotional consequences
          of nosebleeds over time and as a result of treatment. A change of 13
          points in the sum score or 0.46 in the mean score between two times
          should be considered a clinically meaningful difference.
        </p>
      </div>
    </v-stepper>
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
    allFieldsHaveValues() {
      return fetchAllValues(this.allSections).every((e) => e !== null);
    },
    allSections() {
      return [this.section1, this.section2, this.section3];
    },
  },
  methods: {
    calculateResults() {
      // If not all fields are answered yet, return, else update running results
      if (!this.allFieldsHaveValues) return;
      this.sum = this.calculateSum();
      this.average = this.calculateAverage();
    },
    handleStepChange(step) {
      // If we're later than the first step, validate the previous step
      if (parseInt(step) > 1) {
        this.$refs[`form${parseInt(step) - 1}`].validate();
      }
    },
    calculateSum() {
      // for each section, add its values
      return fetchAllValues(this.allSections).reduce((a, i) => a + i, 0);
    },
    calculateAverage() {
      // Get sum, then divide it out by number of questions
      let { length } = fetchAllValues(this.allSections);
      return this.sum / length;
    },
    onResize() {
      this.isSmallWidth = window.innerWidth < 600;
    },
  },
  data() {
    return {
      e6: 1,
      isSmallWidth: window.innerWidth < 600,
      sum: undefined,
      average: undefined,
      rules: [(v) => v !== null],
      section1: {
        valid: false,
        prompts: SECTION1_PROMPTS,
        values: initValues(SECTION1_PROMPTS),
        options: initOptions(SECTION1_OPTIONS),
      },
      section2: {
        valid: false,
        prompts: SECTION2_PROMPTS,
        values: initValues(SECTION2_PROMPTS),
        options: initOptions(SECTION2_OPTIONS),
      },
      section3: {
        valid: false,
        prompts: SECTION3_PROMPTS,
        values: initValues(SECTION3_PROMPTS),
        options: initOptions(SECTION3_OPTIONS),
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style>
.card-stepper {
  text-align: left;
  max-width: 800px;
}

.has-text-grey {
  color: rgba(0, 0, 0, 0.87);
}

tbody tr:hover,
.v-stepper .v-stepper__step--editable:hover {
  background-color: transparent !important;
}

#app .v-card__text p {
  font-size: 15px;
}

#app .v-card__title {
  word-break: keep-all;
}

#app .v-input--radio-group {
  margin-top: 0px;
}

#app .v-messages.error--text {
  display: none;
}

#app .underline {
  text-decoration: underline;
}

#app .v-stepper__content {
  padding-left: 0px;
}

#app tr th,
#app .v-input {
  font-size: 14px !important;
}

#app .v-label {
  font-size: 14px !important;
}

#app .prompt {
  word-wrap: break-word; /* old name */
  overflow-wrap: break-word;
  white-space: wrap;
}

._table {
  display: grid;
  padding-left: 10px;
  padding-bottom: 20px;
  grid-gap: 20px;
}

#app th:first-child,
#app td:first-child {
  padding-left: 0px !important;
}

#app th:last-child,
#app td:last-child {
  padding-right: 0px !important;
}

._row {
  display: grid;
  grid-gap: 10px;
  grid-template-rows: min-content min-content;
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

  #app .v-label {
    font-size: 16px !important;
  }
}

.results {
  padding: 24px 24px 0px 24px;
}

.result-text {
  font-style: oblique;
  color: grey;
  padding-bottom: 10px;
}

/* Table styles  */
.showOutlines .outline {
  border-radius: 10px;
  border-width: 3px !important;
  border-style: solid;
  margin: 2px;
  padding: 4px;
}

.mild .outline {
  border-color: #ffec19 !important;
}

.moderate .outline {
  border-color: orange !important;
}

.severe .outline {
  border-color: #f6412d !important;
}
</style>
