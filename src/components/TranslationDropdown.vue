<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" block>
        <v-icon v-if="selected === null">mdi-translate</v-icon>
        <span v-else>
          <i :class="['mr-2', 'em', selected.flag]"></i>
          <span class="adjusted">{{ selected.abbr }}</span>
        </span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(c, i) in availableCountries"
        :key="i"
        @change="changeLanguage(c)"
      >
        <v-list-item-title>
          <i :class="['mr-2', 'em', c.flag]" /><span class="adjusted">
            {{ c.locale }}</span
          ></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
const countries = [
  {
    name: 'en_us',
    locale: 'English',
    flag: 'em-flag-us',
    abbr: 'EN',
  },
  {
    name: 'es_us',
    locale: 'Español',
    flag: 'em-flag-us',
    abbr: 'ES',
  },
  {
    name: 'es_sp',
    locale: 'Español',
    flag: 'em-flag-es',
    abbr: 'ES',
  },

  {
    name: 'dt_nl',
    locale: 'Nederlands',
    flag: 'em-flag-nl',
    abbr: 'NL',
  },
  {
    name: 'it_it',
    locale: 'italiano',
    flag: 'em-flag-it',
    abbr: 'IT',
  },
  {
    name: 'fr_ca',
    locale: 'français',
    flag: 'em-flag-ca',
    abbr: 'FR',
  },
];

export default {
  methods: {
    changeLanguage(newLanguage) {
      this.selected = newLanguage;
      this.$vuetify.lang.current = newLanguage.name;
    },
  },
  computed: {
    availableCountries() {
      return countries.filter(({ name }) =>
        this.selected === null ? name !== 'en_us' : this.selected.name !== name,
      );
    },
  },
  data() {
    return {
      selected: null,
      countries,
    };
  },
};
</script>

<style>
#app .v-list-item__title {
  cursor: pointer;
  text-align: left;
}

.adjusted {
  top: 2px;
  position: relative;
}
</style>
