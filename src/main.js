import Vue from 'vue';
import App from './App.vue';
import OutcomesResearchWrapper from 'shared-code';
import vuetify from './plugins/vuetify'; // path to vuetify export
import mixins from './services/mixins';

Vue.use(OutcomesResearchWrapper);
Vue.mixin(...mixins);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app-entry');
