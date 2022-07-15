<template>
  <outcomes-research-wrapper :_title="`NOSE HHT Questionnaire`">
    <v-app>
      <Questionnaire />
      <v-footer :padless="true">
        <v-card flat tile width="100%" class="grey-lighten-2 text-center">
          <v-card-text>{{ t(k.FOOTER_COPYWRIGHT) }}</v-card-text>
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
