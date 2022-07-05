<template>
  <div class="card-stepper mx-auto pa-3 pa-sm-12 text-left">
    <v-card class="mb-12">
      <v-card-title>
        <div class="flow">
          <span class="flow-around ml-3 mb-3"> <TranslationDropdown /> </span
          >{{ t(k.HEADER_TITLE) }}
        </div>
      </v-card-title>
      <v-card-text>
        <p class="has-text-grey">
          {{ t(k.HEADER_BODY_1) }}
          <strong class="text-decoration-underline">
            {{ t(k.HEADER_BODY_2) }}</strong
          >{{ t(k.HEADER_BODY_3) }}
        </p>
        <p class="mb-0 has-text-grey">{{ t(k.HEADER_BODY_4) }}</p>
      </v-card-text>
    </v-card>
    <v-card class="mb-12">
      <div>
        <v-form ref="form1" v-model="section1.valid" lazy-validation>
          <v-card-subtitle class="step-label">
            {{ t(k.SECTION1_INSTRUCTIONS_1) }}
            <strong>{{ t(k.SECTION1_INSTRUCTIONS_2) }}</strong
            >{{ t(k.SECTION1_INSTRUCTIONS_3) }}
          </v-card-subtitle>
          <v-card-text class="_table pb-5">
            <div
              class="_row"
              v-for="(prompt, i) in section1.prompts"
              :key="prompt"
            >
              <div class="prompt">{{ t(k[prompt]) }}</div>
              <v-radio-group
                :column="isSmallWidth"
                v-model="section1.values[prompt]"
                @change="(value) => calculateResults(value, i, 1)"
                :rules="rules"
                class="mt-0"
              >
                <v-radio
                  v-for="option in section1.options"
                  :key="option.text + option.value"
                  :label="t(k[option.text])"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-form>
        <v-divider class="my-2"></v-divider>
        <v-form ref="form2" v-model="section2.valid" lazy-validation>
          <v-card-subtitle class="step-label">
            {{ t(k.SECTION2_INSTRUCTIONS_1) }}
            <strong>{{ t(k.SECTION2_INSTRUCTIONS_2) }}</strong
            >{{ t(k.SECTION2_INSTRUCTIONS_3) }}
          </v-card-subtitle>
          <v-card-text class="_table pb-5">
            <div
              class="_row"
              v-for="(prompt, i) in section2.prompts"
              :key="prompt"
            >
              <div class="prompt">{{ t(k[prompt]) }}</div>
              <v-radio-group
                :column="isSmallWidth"
                v-model="section2.values[prompt]"
                @change="(value) => calculateResults(value, i, 2)"
                :rules="rules"
                class="mt-0"
              >
                <v-radio
                  v-for="option in section2.options"
                  :key="option.text + option.value"
                  :label="t(k[option.text])"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-form>
        <v-divider class="my-2"></v-divider>
        <v-form ref="form3" v-model="section3.valid" lazy-validation>
          <v-card-subtitle class="step-label">
            {{ t(k.SECTION3_INSTRUCTIONS_1) }}
            <strong>{{ t(k.SECTION3_INSTRUCTIONS_2) }}</strong
            >{{ t(k.SECTION3_INSTRUCTIONS_3) }}
          </v-card-subtitle>
          <v-card-text class="_table pb-5">
            <div
              class="_row"
              v-for="(prompt, i) in section3.prompts"
              :key="prompt"
            >
              <div class="prompt">{{ t(k[prompt]) }}</div>
              <v-radio-group
                :column="isSmallWidth"
                v-model="section3.values[prompt]"
                @change="(value) => calculateResults(value, i, 3)"
                :rules="rules"
                class="mt-0"
              >
                <v-radio
                  v-for="option in section3.options"
                  :key="option.text + option.value"
                  :label="t(k[option.text])"
                  :value="option.value"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-form>
      </div>
      <v-divider class="my-2"></v-divider>
      <v-card-text class="pa-6">
        <div>
          <div class="disclaimer pb-2" v-if="$vuetify.lang.current != 'en_us'">
            {{ t(k.SCORE_ONLY_IN_ENGLISH) }}<v-divider></v-divider>
          </div>
          <h4 v-if="!allFieldsHaveValues" class="grey-text font-italic pb-3">
            Result will display here when form is complete.
          </h4>
        </div>
        <div v-if="allFieldsHaveValues" class="results">
          <h3 class="black--text">Result:</h3>
          <pre>Sum: {{ sum }}</pre>
          <pre>Average: {{ average.toFixed(3) }}</pre>
        </div>

        <v-simple-table class="my-2">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left score-interp-title">
                  NOSE-HHT Score Interpretation
                </th>
                <th class="text-center">Based on Sum</th>
                <th class="text-center">Based on Average</th>
              </tr>
            </thead>
            <tbody
              class="text-center"
              :class="allFieldsHaveValues ? `showOutlines` : ''"
            >
              <tr class="mild">
                <td class="text-left">Mild</td>
                <td>
                  <div :class="sum <= 27 && `outline`">&le; 27</div>
                </td>
                <td>
                  <div :class="average <= 1 && `outline`">&le; 1</div>
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
                  <div :class="sum > 54 && `outline`">&gt; 54</div>
                </td>
                <td><div :class="average > 2 && `outline`">&gt; 2</div></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <p class="has-text-grey">
          When taken multiple times, NOSE HHT scores can be used to measure the
          change in physical and functional problems, functional limitations,
          and emotional consequences of nosebleeds over time and as a result of
          treatment.
        </p>
        <p class="mb-0 has-text-grey">
          A change of 13 points in the sum score, or 0.46 in the mean score
          between two instances should be considered a clinically meaningful
          difference.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import TranslationDropdown from './TranslationDropdown';
import keys from '../assets/locales/keys';

const BREAKPOINT = 700;

const initValues = (arr) => arr.reduce((a, i) => ({ ...a, [i]: null }), {});

const initOptions = (arr) => arr.map((o, i) => ({ text: o, value: i }));

const fetchAllValues = (sections) => {
  return sections
    .map(({ values }) => Object.entries(values).map(([, value]) => value))
    .flat();
};

const getMatchingKeys = (stub) =>
  Object.keys(keys).filter((k) => k.includes(stub));

const SECTION1_PROMPTS = getMatchingKeys('SECTION1_PROMPT');
const SECTION1_OPTIONS = getMatchingKeys('SECTION1_OPTION');
const SECTION2_PROMPTS = getMatchingKeys('SECTION2_PROMPT');
const SECTION2_OPTIONS = getMatchingKeys('SECTION2_OPTION');
const SECTION3_PROMPTS = getMatchingKeys('SECTION3_PROMPT');
const SECTION3_OPTIONS = getMatchingKeys('SECTION3_OPTION');

export default {
  components: { TranslationDropdown },
  computed: {
    allFieldsHaveValues() {
      return fetchAllValues(this.allSections).every((e) => e !== null);
    },
    allSections() {
      return [this.section1, this.section2, this.section3];
    },
  },
  methods: {
    calculateResults(value, indexInSection, section) {
      // If all fields have values, calculate results
      if (this.allFieldsHaveValues) {
        this.sum = this.calculateSum();
        this.average = this.calculateAverage();
      }

      this.handleStepChange(indexInSection, section);
    },
    handleStepChange(indexInSection, section) {
      // On first questions of steps 2 and 3, validate previous section's answers
      if (parseInt(section) > 1 && indexInSection === 0) {
        this.$refs[`form${parseInt(section) - 1}`].validate();
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
      this.isSmallWidth = window.innerWidth < BREAKPOINT;
    },
  },
  data() {
    return {
      e6: 1,
      isSmallWidth: window.innerWidth < BREAKPOINT,
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
.flow-around {
  float: right;
  width: 82px;
}

.v-divider {
  margin: 10px 0px;
}

#app .v-radio:not(:last-child) {
  margin-right: 16px;
}

.card-stepper {
  max-width: 800px;
}

.has-text-grey {
  color: rgba(0, 0, 0, 0.87);
}

tbody tr:hover {
  background-color: transparent !important;
}

#app .v-card__subtitle {
  font-size: 18px;
}

#app .results,
#app .v-card__text p {
  font-size: 15px;
}

#app tr th,
#app .v-input,
#app .v-label {
  font-size: 14px !important;
}

#app .v-card__title {
  word-break: keep-all;
}

#app .v-messages {
  display: none;
}

#app .prompt {
  word-wrap: break-word; /* old name */
  overflow-wrap: break-word;
  white-space: wrap;
  font-size: 16px;
}

._table {
  display: grid;
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
  align-items: center;
}

@media only screen and (max-width: 600px) {
  #app .v-label {
    font-size: 16px !important;
  }
  .score-interp-title {
    width: 100px;
  }
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
  -webkit-box-shadow: 0px 0px 2px #ffec19, inset 0px 0px 2px #ffec19;
  box-shadow: 0px 0px 2px #ffec19, inset 0px 0px 2px #ffec19;
}

.moderate .outline {
  border-color: orange !important;
  -webkit-box-shadow: 0px 0px 2px orange, inset 0px 0px 2px orange;
  box-shadow: 0px 0px 2px orange, inset 0px 0px 2px orange;
}

.severe .outline {
  border-color: #f6412d !important;
  -webkit-box-shadow: 0px 0px 2px #f6412d, inset 0px 0px 2px #f6412d;
  box-shadow: 0px 0px 2px #f6412d, inset 0px 0px 2px #f6412d;
}
</style>
