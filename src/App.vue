<template>
  <outcomes-research-wrapper :_title="`NOSE HHT Questionnaire`">
    <v-app>
      <div id="app">
        <Questionnaire />
      </div>
      <v-footer :padless="true">
        <v-card flat tile width="100%" class="grey-lighten-2 text-center">
          <v-card-text>
            NOSE HHT Copyright 2020 Washington University School of Medicine,
            St. Louis, Missouri
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </outcomes-research-wrapper>
</template>

<script>
import Questionnaire from './components/Questionnaire';

export default {
  name: 'App',
  components: {
    Questionnaire,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .v-stepper__label {
  line-height: 1.3;
}

#app .v-text-field__details {
  display: none;
}
</style>
