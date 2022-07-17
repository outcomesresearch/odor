<template>
  <v-card class="mb-12">
    <v-card-title>
      <div class="flow">
        <span class="flow-around ml-3 mb-3"
          ><TranslationDropdown v-if="showTranslation" /></span
        >{{ t(k.HEADER_TITLE) }}
      </div>
    </v-card-title>
    <v-card-text>
      <p class="grey--text text--darken-3">
        {{ t(k.HEADER_BODY_1) }}
      </p>
      <ul class="grey--text text--darken-3 children-spacing">
        <li>
          <strong> {{ t(k.HEADER_BULLET_1_LABEL) }}</strong
          >: {{ t(k.HEADER_BULLET_1_TEXT) }}
        </li>
        <li>
          <strong> {{ t(k.HEADER_BULLET_2_LABEL) }}</strong
          >: {{ t(k.HEADER_BULLET_2_TEXT) }}
        </li>
        <li>
          <strong> {{ t(k.HEADER_BULLET_3_LABEL) }}</strong
          >: {{ t(k.HEADER_BULLET_3_TEXT) }}
        </li>
        <li>
          <strong> {{ t(k.HEADER_BULLET_4_LABEL) }}</strong
          >: {{ t(k.HEADER_BULLET_4_TEXT) }}
        </li>
        <li>
          <strong> {{ t(k.HEADER_BULLET_5_LABEL) }}</strong
          >: {{ t(k.HEADER_BULLET_5_TEXT) }}
        </li>
      </ul>
      <p class="mb-0 grey--text text--darken-3">{{ t(k.HEADER_BODY_4) }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import TranslationDropdown from './TranslationDropdown.vue';

export default {
  components: { TranslationDropdown },
  data() {
    return {
      showTranslation: false,
    };
  },
};
</script>

<style scoped>
.flow-around {
  float: right;
  width: 82px;
}

ul.children-spacing > * {
  margin-bottom: 10px;
}
</style>
