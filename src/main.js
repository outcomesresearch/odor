import Vue from 'vue';
import App from './App.vue';
import OutcomesResearchWrapper from 'shared-code';
import vuetify from './plugins/vuetify'; // path to vuetify export

Vue.use(OutcomesResearchWrapper);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
