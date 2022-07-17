import keys from './keys.js';
import { en } from 'vuetify/lib/locale/';

export default {
  ...en, // existing vuetify translation entries
  [keys.FOOTER_COPYWRIGHT]:
    'ODOR Questionnaire Copyright Washington University, 2022',
  [keys.INTERPRETATION_MILD]: 'Mild',
  [keys.INTERPRETATION_MODERATE]: 'Moderate',
  [keys.INTERPRETATION_SEVERE]: 'Severe',
  [keys.SCORE_ONLY_IN_ENGLISH]:
    'Score interpretation is temporarily only available in English',
  [keys.HEADER_TITLE]: 'Olfactory Dysfunction Outcomes Rating (ODOR)',
  [keys.HEADER_BODY_1]:
    'Below you will find a list of smell-related tasks and activities. Please tell us how difficult it has been to perform these tasks and activities over the past 30 days. In addition, please tell us how bothered you have been by your sense of smell. There are no right and wrong answers since these are specific to each person.  Please do NOT skip any questions.',
  [keys.HEADER_BULLET_1_LABEL]: 'No difficulty',
  [keys.HEADER_BULLET_2_LABEL]: 'Mild difficulty',
  [keys.HEADER_BULLET_3_LABEL]: 'Moderate difficulty',
  [keys.HEADER_BULLET_4_LABEL]: 'Severe difficulty',
  [keys.HEADER_BULLET_5_LABEL]: 'Complete difficulty',

  [keys.HEADER_BULLET_1_TEXT]:
    'You have no problems carrying out the task over the past 30 days.',
  [keys.HEADER_BULLET_2_TEXT]:
    'You have problems carrying out the task less than 25% of the time, but you can tolerate the difficulty, which has happened rarely over the past 30 days.',
  [keys.HEADER_BULLET_3_TEXT]:
    'You have problems carrying out the task less than 50% of the time, which is interfering in your day to day life and which has happened occasionally over the past 30 days.',
  [keys.HEADER_BULLET_4_TEXT]:
    'You have problems carrying out the task more than 50% of the time, which is partially disrupting your day to day life and which has happened frequently over the past 30 days.',
  [keys.HEADER_BULLET_5_TEXT]:
    'You have problems carrying out the task more than 95% of the time, which is totally disrupting your day to day life and which has happened every day over the past 30 days.',

  [keys.HEADER_BODY_4]: 'Thank you for your participation.',

  [keys.SECTION1_INSTRUCTIONS_1]:
    'Due to your sense of smell, how difficult is it to perform the following tasks or activities?',
  [keys.SECTION1_INSTRUCTIONS_2]: '',
  [keys.SECTION1_INSTRUCTIONS_3]: '',

  [keys.SECTION2_INSTRUCTIONS_1]:
    'Due to your sense of smell, how often are you bothered by the following?',
  [keys.SECTION2_INSTRUCTIONS_2]: '',
  [keys.SECTION2_INSTRUCTIONS_3]: '',

  [keys.SECTION1_OPTION_1]: 'No difficulty',
  [keys.SECTION1_OPTION_2]: 'Mild difficulty',
  [keys.SECTION1_OPTION_3]: 'Moderate difficulty',
  [keys.SECTION1_OPTION_4]: 'Severe difficulty',
  [keys.SECTION1_OPTION_5]: 'Complete difficulty',

  [keys.SECTION2_OPTION_1]: 'Very rarely bothered',
  [keys.SECTION2_OPTION_2]: 'Rarely bothered',
  [keys.SECTION2_OPTION_3]: 'Occasionally bothered',
  [keys.SECTION2_OPTION_4]: 'Frequently bothered',
  [keys.SECTION2_OPTION_5]: 'Very frequently bothered',

  [keys.SECTION1_PROMPT_1]: 'Enjoy food',
  [keys.SECTION1_PROMPT_2]: 'Maintain a steady weight',
  [keys.SECTION1_PROMPT_3]: 'Prepare meals (cooking, etc.)',
  [keys.SECTION1_PROMPT_4]: 'Eat out',
  [keys.SECTION1_PROMPT_5]: 'Detect spoiled or rotten food',
  [keys.SECTION1_PROMPT_6]: 'Detect smoke, fire, or burning objects',
  [keys.SECTION1_PROMPT_7]: 'Detect a gas leak',
  [keys.SECTION1_PROMPT_8]: 'Participate in social gatherings',
  [keys.SECTION1_PROMPT_9]: 'Maintain family relationships',
  [keys.SECTION1_PROMPT_10]: 'Form or maintain relationships with friends',
  [keys.SECTION1_PROMPT_11]: 'Form or maintain intimate relationships',
  [keys.SECTION1_PROMPT_12]: 'Detect body odor',
  [keys.SECTION1_PROMPT_13]: 'Detect bad breath',
  [keys.SECTION1_PROMPT_14]: 'Detect if your clothes smell',
  [keys.SECTION1_PROMPT_15]: 'Detect if your house smells',
  [keys.SECTION1_PROMPT_16]: 'Enjoy the smells of nature',
  [keys.SECTION1_PROMPT_17]: 'Enjoy the scents of your loved ones',
  [keys.SECTION1_PROMPT_18]: 'Keep up with your interests & hobbies',
  [keys.SECTION1_PROMPT_19]: 'Maintain good spirits',

  [keys.SECTION2_PROMPT_1]: 'Changes in your eating habits and diet',
  [keys.SECTION2_PROMPT_2]: 'Changes in your weight',
  [keys.SECTION2_PROMPT_3]: 'Concerns for your environmental safety',
  [keys.SECTION2_PROMPT_4]: 'Changes in your interpersonal relationships',
  [keys.SECTION2_PROMPT_5]: 'Concerns for your hygiene',
  [keys.SECTION2_PROMPT_6]: 'Changes in your mood',
  [keys.SECTION2_PROMPT_7]:
    'Insensitivity of others to your sense of smell problem',
  [keys.SECTION2_PROMPT_8]: 'Smells that no one else seems to notice',
  [keys.SECTION2_PROMPT_9]: 'Scents that smell different from before',
};
