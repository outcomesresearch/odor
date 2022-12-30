(function(){var e={4883:function(e,t,s){var i={"./apple-touch-icon.png":2642,"./favicon-32x32.png":8068};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id=4883},707:function(e,t,s){"use strict";var i=s(144),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("outcomes-research-wrapper",{attrs:{_title:"ODOR Questionnaire"}},[s("v-app",[s("Questionnaire"),s("v-footer",{attrs:{padless:!0}},[s("v-card",{staticClass:"text-center",attrs:{flat:"",tile:"",width:"100%"}},[s("v-card-text",[e._v(e._s(e.t(e.k.FOOTER_COPYWRIGHT)))])],1)],1)],1)],1)},o=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-stepper mx-auto pa-3 pa-sm-12 text-left"},[s("header-card"),s("v-card",{staticClass:"mb-12"},[s("div",[s("v-form",{ref:"form1",attrs:{"lazy-validation":""},model:{value:e.section1.valid,callback:function(t){e.$set(e.section1,"valid",t)},expression:"section1.valid"}},[s("v-card-subtitle",{staticClass:"step-label"},[e._v(" "+e._s(e.t(e.k.SECTION1_INSTRUCTIONS_1))+" "),s("strong",[e._v(e._s(e.t(e.k.SECTION1_INSTRUCTIONS_2)))]),e._v(e._s(e.t(e.k.SECTION1_INSTRUCTIONS_3))+" ")]),s("v-card-text",{staticClass:"question-group pb-5"},e._l(e.section1.prompts,(function(t,i){return s("div",{key:t,staticClass:"question-row"},[s("div",{staticClass:"question-group-header"},[e._v(e._s(e.t(e.k[t])))]),s("v-radio-group",{staticClass:"mt-0",attrs:{column:e.isSmallWidth,rules:e.rules},on:{change:function(t){return e.handleStepChange(i,1)}},model:{value:e.section1.values[t],callback:function(s){e.$set(e.section1.values,t,s)},expression:"section1.values[prompt]"}},e._l(e.section1.options,(function(t){return s("v-radio",{key:t.text+t.value,attrs:{label:e.t(e.k[t.text]),value:t.value}})})),1)],1)})),0)],1),s("v-divider",{staticClass:"my-2"}),s("v-form",{ref:"form2",attrs:{"lazy-validation":""},model:{value:e.section2.valid,callback:function(t){e.$set(e.section2,"valid",t)},expression:"section2.valid"}},[s("v-card-subtitle",{staticClass:"step-label"},[e._v(" "+e._s(e.t(e.k.SECTION2_INSTRUCTIONS_1))+" "),s("strong",[e._v(e._s(e.t(e.k.SECTION2_INSTRUCTIONS_2)))]),e._v(e._s(e.t(e.k.SECTION2_INSTRUCTIONS_3))+" ")]),s("v-card-text",{staticClass:"question-group pb-5"},e._l(e.section2.prompts,(function(t,i){return s("div",{key:t,staticClass:"question-row"},[s("div",{staticClass:"question-group-header"},[e._v(e._s(e.t(e.k[t])))]),s("v-radio-group",{staticClass:"mt-0",attrs:{column:e.isSmallWidth,rules:e.rules},on:{change:function(t){return e.handleStepChange(i,2)}},model:{value:e.section2.values[t],callback:function(s){e.$set(e.section2.values,t,s)},expression:"section2.values[prompt]"}},e._l(e.section2.options,(function(t){return s("v-radio",{key:t.text+t.value,attrs:{label:e.t(e.k[t.text]),value:t.value}})})),1)],1)})),0)],1)],1),s("v-divider",{staticClass:"my-2"}),s("ResultsTable",{attrs:{allSections:[e.section1,e.section2]}})],1),s("v-card",[s("v-card-text",[s("p",{staticClass:"grey--text text--darken-3"},[e._v(" When taken multiple times, ODOR scores can be used to measure the change in physical and functional problems, functional limitations, and emotional consequences of olfactory dysfunfunction over time. ")]),s("p",{staticClass:"mb-0 grey--text text--darken-3"},[e._v(" A change of 15 points in the sum score, or 0.50 in the mean score between two instances should be considered a clinically meaningful difference. ")])])],1)],1)},r=[],l=(s(6699),{FOOTER_COPYWRIGHT:"copywright in footer",INTERPRETATION_MILD:"mild descriptor in interpretation table",INTERPRETATION_MODERATE:"moderate descriptor in interpretation table",INTERPRETATION_SEVERE:"severe descriptor in interpretation table",SCORE_ONLY_IN_ENGLISH:"No translations yet discliamer",HEADER_TITLE:"title of header card",HEADER_BODY_1:"first section of header card body",HEADER_BODY_4:"closing comment in header card",HEADER_BULLET_1_LABEL:"no-difficulty label",HEADER_BULLET_2_LABEL:"mild-difficulty label",HEADER_BULLET_3_LABEL:"moderate-difficulty label",HEADER_BULLET_4_LABEL:"severe-difficulty label",HEADER_BULLET_5_LABEL:"complete-difficulty label",HEADER_BULLET_1_TEXT:"description for no-difficulty",HEADER_BULLET_2_TEXT:"description for mild-difficulty",HEADER_BULLET_3_TEXT:"description for moderate-difficulty",HEADER_BULLET_4_TEXT:"description for severe-difficulty",HEADER_BULLET_5_TEXT:"description for complete-difficulty",SECTION1_INSTRUCTIONS_1:"first part of instructions for section 1",SECTION1_INSTRUCTIONS_2:"bold part of instructions section 1",SECTION1_INSTRUCTIONS_3:"remainder of instructions in section 1",SECTION2_INSTRUCTIONS_1:"first part of instructions for section 2",SECTION2_INSTRUCTIONS_2:"bold part of instructions section 2",SECTION2_INSTRUCTIONS_3:"remainder of instructions in section 2",SECTION1_OPTION_1:"section 1 option 1",SECTION1_OPTION_2:"section 1 option 2",SECTION1_OPTION_3:"section 1 option 3",SECTION1_OPTION_4:"section 1 option 4",SECTION1_OPTION_5:"section 1 option 5",SECTION2_OPTION_1:"section 2 option 1",SECTION2_OPTION_2:"section 2 option 2",SECTION2_OPTION_3:"section 2 option 3",SECTION2_OPTION_4:"section 2 option 4",SECTION2_OPTION_5:"section 2 option 5",SECTION1_PROMPT_1:"section 1 prompt 1",SECTION1_PROMPT_2:"section 1 prompt 2",SECTION1_PROMPT_3:"section 1 prompt 3",SECTION1_PROMPT_4:"section 1 prompt 4",SECTION1_PROMPT_5:"section 1 prompt 5",SECTION1_PROMPT_6:"section 1 prompt 6",SECTION1_PROMPT_7:"section 1 prompt 7",SECTION1_PROMPT_8:"section 1 prompt 8",SECTION1_PROMPT_9:"section 1 prompt 9",SECTION1_PROMPT_10:"section 1 prompt 10",SECTION1_PROMPT_11:"section 1 prompt 11",SECTION1_PROMPT_12:"section 1 prompt 12",SECTION1_PROMPT_13:"section 1 prompt 13",SECTION1_PROMPT_14:"section 1 prompt 14",SECTION1_PROMPT_15:"section 1 prompt 15",SECTION1_PROMPT_16:"section 1 prompt 16",SECTION1_PROMPT_17:"section 1 prompt 17",SECTION1_PROMPT_18:"section 1 prompt 18",SECTION1_PROMPT_19:"section 1 prompt 19",SECTION2_PROMPT_1:"section 2 prompt 1",SECTION2_PROMPT_2:"section 2 prompt 2",SECTION2_PROMPT_3:"section 2 prompt 3",SECTION2_PROMPT_4:"section 2 prompt 4",SECTION2_PROMPT_5:"section 2 prompt 5",SECTION2_PROMPT_6:"section 2 prompt 6",SECTION2_PROMPT_7:"section 2 prompt 7",SECTION2_PROMPT_8:"section 2 prompt 8",SECTION2_PROMPT_9:"section 2 prompt 9"}),_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"mb-12"},[s("v-card-title",[s("div",{staticClass:"flow"},[s("span",{staticClass:"flow-around ml-3 mb-3"},[e.showTranslation?s("TranslationDropdown"):e._e()],1),e._v(e._s(e.t(e.k.HEADER_TITLE))+" ")])]),s("v-card-text",[s("p",{staticClass:"grey--text text--darken-3"},[e._v(" "+e._s(e.t(e.k.HEADER_BODY_1))+" ")]),s("ul",{staticClass:"grey--text text--darken-3 children-spacing"},[s("li",[s("strong",[e._v(" "+e._s(e.t(e.k.HEADER_BULLET_1_LABEL)))]),e._v(": "+e._s(e.t(e.k.HEADER_BULLET_1_TEXT))+" ")]),s("li",[s("strong",[e._v(" "+e._s(e.t(e.k.HEADER_BULLET_2_LABEL)))]),e._v(": "+e._s(e.t(e.k.HEADER_BULLET_2_TEXT))+" ")]),s("li",[s("strong",[e._v(" "+e._s(e.t(e.k.HEADER_BULLET_3_LABEL)))]),e._v(": "+e._s(e.t(e.k.HEADER_BULLET_3_TEXT))+" ")]),s("li",[s("strong",[e._v(" "+e._s(e.t(e.k.HEADER_BULLET_4_LABEL)))]),e._v(": "+e._s(e.t(e.k.HEADER_BULLET_4_TEXT))+" ")]),s("li",[s("strong",[e._v(" "+e._s(e.t(e.k.HEADER_BULLET_5_LABEL)))]),e._v(": "+e._s(e.t(e.k.HEADER_BULLET_5_TEXT))+" ")])]),s("p",{staticClass:"mb-0 grey--text text--darken-3"},[e._v(e._s(e.t(e.k.HEADER_BODY_4)))])])],1)},c=[],u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[s("v-btn",e._g(e._b({attrs:{block:""}},"v-btn",n,!1),i),[null===e.selected?s("v-icon",[e._v("mdi-translate")]):s("span",[s("i",{class:e.getFlagClasses(e.selected.flag)}),s("span",{staticClass:"adjusted"},[e._v(e._s(e.selected.abbr))])])],1)]}}])},[s("v-list",e._l(e.availableCountries,(function(t,i){return s("v-list-item",{key:i,on:{change:function(s){return e.changeLanguage(t)}}},[s("v-list-item-title",[s("i",{class:e.getFlagClasses(t.flag)}),s("span",{staticClass:"adjusted"},[e._v(" "+e._s(t.locale))])])],1)})),1)],1)},T=[];const d=[{name:"en_us",locale:"English",flag:"em-flag-us",abbr:"EN"},{name:"es_us",locale:"Español",flag:"em-flag-us",abbr:"ES"},{name:"es_sp",locale:"Español",flag:"em-flag-es",abbr:"ES"},{name:"nl_nl",locale:"Nederlands",flag:"em-flag-nl",abbr:"NL"},{name:"it_it",locale:"Italiano",flag:"em-flag-it",abbr:"IT"},{name:"fr_ca",locale:"Français",flag:"em-flag-ca",abbr:"FR"}];var E={methods:{changeLanguage(e){this.selected=e,this.$vuetify.lang.current=e.name},getFlagClasses(e){return["mr-2","em",e,"em-svg"]}},computed:{availableCountries(){return d.filter((({name:e})=>null===this.selected?"en_us"!==e:this.selected.name!==e))}},data(){return{selected:null,countries:d}}},O=E,p=s(1001),f=(0,p.Z)(O,u,T,!1,null,null,null),v=f.exports,m={components:{TranslationDropdown:v},data(){return{showTranslation:!1}}},h=m,I=(0,p.Z)(h,_,c,!1,null,"3ce7eec0",null),N=I.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card-text",{staticClass:"pa-6"},[s("div",["en_us"!=e.$vuetify.lang.current?s("div",{staticClass:"disclaimer pb-2"},[e._v(" "+e._s(e.t(e.k.SCORE_ONLY_IN_ENGLISH))),s("v-divider")],1):e._e(),e.allFieldsHaveValues?e._e():s("h4",{staticClass:"font-italic mb-4"},[e._v(" Result will display here when form is complete. ")])]),e.allFieldsHaveValues?s("div",{staticClass:"results mb-4"},[s("h3",{staticClass:"black--text mb-2"},[e._v("Result:")]),s("pre",[e._v("Sum: "+e._s(e.sum))]),s("pre",[e._v("Average: "+e._s(e.average.toFixed(3)))])]):e._e(),s("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left score-interp-title"},[e._v(" ODOR Score Interpretation ")]),s("th",{staticClass:"text-center"},[e._v("Based on Sum")]),s("th",{staticClass:"text-center"},[e._v("Based on Average")])])]),s("tbody",{staticClass:"text-center",class:e.allFieldsHaveValues?"showOutlines":""},[s("tr",{staticClass:"mild"},[s("td",{staticClass:"text-left"},[e._v("Mild")]),s("td",[s("div",{class:e.sum<=20&&"outline"},[e._v("≤ 20")])]),s("td",[s("div",{class:e.average<=.7&&"outline"},[e._v("≤ 0.70")])])]),s("tr",{staticClass:"moderate"},[s("td",{staticClass:"text-left"},[e._v("Moderate")]),s("td",[s("div",{class:e.sum>=21&&e.sum<=40&&"outline"},[e._v("21 to 40")])]),s("td",[s("div",{class:e.average>.7&&e.average<=1.4&&"outline"},[e._v(" 0.70 to 1.4 ")])])]),s("tr",{staticClass:"severe"},[s("td",{staticClass:"text-left"},[e._v("Severe")]),s("td",[s("div",{class:e.sum>40&&"outline"},[e._v("> 40")])]),s("td",[s("div",{class:e.average>1.4&&"outline"},[e._v("> 1.4")])])])])]},proxy:!0}])})],1)},S=[];const P=e=>e.map((({values:e})=>Object.entries(e).map((([,e])=>e)))).flat();var R={props:["allSections"],computed:{allFieldsHaveValues(){return P(this.allSections).every((e=>null!==e))}},methods:{calculateSum(){return P(this.allSections).reduce(((e,t)=>e+t),0)},calculateAverage(){let{length:e}=P(this.allSections);return this.sum/e}},watch:{allSections:{handler(){this.allFieldsHaveValues&&(this.sum=this.calculateSum(),this.average=this.calculateAverage())},deep:!0}},data(){return{sum:void 0,average:void 0}}},y=R,g=(0,p.Z)(y,C,S,!1,null,"bdf94bb0",null),b=g.exports;const L=700,M=e=>e.reduce(((e,t)=>({...e,[t]:null})),{}),A=e=>e.map(((e,t)=>({text:e,value:t}))),D=e=>Object.keys(l).filter((t=>t.includes(e))),k=D("SECTION1_PROMPT"),w=D("SECTION1_OPTION"),B=D("SECTION2_PROMPT"),x=D("SECTION2_OPTION");var H={components:{HeaderCard:N,ResultsTable:b},methods:{handleStepChange(e,t){parseInt(t)>1&&0===e&&this.$refs["form"+(parseInt(t)-1)].validate()},onResize(){this.isSmallWidth=window.innerWidth<L}},data(){return{e6:1,isSmallWidth:window.innerWidth<L,rules:[e=>null!==e],section1:{valid:!1,prompts:k,values:M(k),options:A(w)},section2:{valid:!1,prompts:B,values:M(B),options:A(x)}}},mounted(){this.$nextTick((()=>{window.addEventListener("resize",this.onResize)}))},beforeDestroy(){window.removeEventListener("resize",this.onResize)}},U=H,F=(0,p.Z)(U,a,r,!1,null,"1836d7f9",null),j=F.exports,Y={name:"App",components:{Questionnaire:j}},$=Y,X=(0,p.Z)($,n,o,!1,null,null,null),q=X.exports,W=s(3657),V=s(8209),z=s.n(V),Z=(s(243),s(6407)),G={...Z.Z,[l.FOOTER_COPYWRIGHT]:"ODOR Questionnaire Copyright Washington University, 2022",[l.INTERPRETATION_MILD]:"Mild",[l.INTERPRETATION_MODERATE]:"Moderate",[l.INTERPRETATION_SEVERE]:"Severe",[l.SCORE_ONLY_IN_ENGLISH]:"Score interpretation is temporarily only available in English",[l.HEADER_TITLE]:"Olfactory Dysfunction Outcomes Rating (ODOR)",[l.HEADER_BODY_1]:"Below you will find a list of smell-related tasks and activities. Please tell us how difficult it has been to perform these tasks and activities over the past 30 days. In addition, please tell us how bothered you have been by your sense of smell. There are no right and wrong answers since these are specific to each person.  Please do NOT skip any questions.",[l.HEADER_BULLET_1_LABEL]:"No difficulty",[l.HEADER_BULLET_2_LABEL]:"Mild difficulty",[l.HEADER_BULLET_3_LABEL]:"Moderate difficulty",[l.HEADER_BULLET_4_LABEL]:"Severe difficulty",[l.HEADER_BULLET_5_LABEL]:"Complete difficulty",[l.HEADER_BULLET_1_TEXT]:"You have no problems carrying out the task over the past 30 days.",[l.HEADER_BULLET_2_TEXT]:"You have problems carrying out the task less than 25% of the time, but you can tolerate the difficulty, which has happened rarely over the past 30 days.",[l.HEADER_BULLET_3_TEXT]:"You have problems carrying out the task less than 50% of the time, which is interfering in your day to day life and which has happened occasionally over the past 30 days.",[l.HEADER_BULLET_4_TEXT]:"You have problems carrying out the task more than 50% of the time, which is partially disrupting your day to day life and which has happened frequently over the past 30 days.",[l.HEADER_BULLET_5_TEXT]:"You have problems carrying out the task more than 95% of the time, which is totally disrupting your day to day life and which has happened every day over the past 30 days.",[l.HEADER_BODY_4]:"Thank you for your participation.",[l.SECTION1_INSTRUCTIONS_1]:"Due to your sense of smell, how difficult is it to perform the following tasks or activities?",[l.SECTION1_INSTRUCTIONS_2]:"",[l.SECTION1_INSTRUCTIONS_3]:"",[l.SECTION2_INSTRUCTIONS_1]:"Due to your sense of smell, how often are you bothered by the following?",[l.SECTION2_INSTRUCTIONS_2]:"",[l.SECTION2_INSTRUCTIONS_3]:"",[l.SECTION1_OPTION_1]:"No difficulty",[l.SECTION1_OPTION_2]:"Mild difficulty",[l.SECTION1_OPTION_3]:"Moderate difficulty",[l.SECTION1_OPTION_4]:"Severe difficulty",[l.SECTION1_OPTION_5]:"Complete difficulty",[l.SECTION2_OPTION_1]:"Very rarely bothered",[l.SECTION2_OPTION_2]:"Rarely bothered",[l.SECTION2_OPTION_3]:"Occasionally bothered",[l.SECTION2_OPTION_4]:"Frequently bothered",[l.SECTION2_OPTION_5]:"Very frequently bothered",[l.SECTION1_PROMPT_1]:"Enjoy food",[l.SECTION1_PROMPT_2]:"Maintain a steady weight",[l.SECTION1_PROMPT_3]:"Prepare meals (cooking, etc.)",[l.SECTION1_PROMPT_4]:"Eat out",[l.SECTION1_PROMPT_5]:"Detect spoiled or rotten food",[l.SECTION1_PROMPT_6]:"Detect smoke, fire, or burning objects",[l.SECTION1_PROMPT_7]:"Detect a gas leak",[l.SECTION1_PROMPT_8]:"Participate in social gatherings",[l.SECTION1_PROMPT_9]:"Maintain family relationships",[l.SECTION1_PROMPT_10]:"Form or maintain relationships with friends",[l.SECTION1_PROMPT_11]:"Form or maintain intimate relationships",[l.SECTION1_PROMPT_12]:"Detect body odor",[l.SECTION1_PROMPT_13]:"Detect bad breath",[l.SECTION1_PROMPT_14]:"Detect if your clothes smell",[l.SECTION1_PROMPT_15]:"Detect if your house smells",[l.SECTION1_PROMPT_16]:"Enjoy the smells of nature",[l.SECTION1_PROMPT_17]:"Enjoy the scents of your loved ones",[l.SECTION1_PROMPT_18]:"Keep up with your interests & hobbies",[l.SECTION1_PROMPT_19]:"Maintain good spirits",[l.SECTION2_PROMPT_1]:"Changes in your eating habits and diet",[l.SECTION2_PROMPT_2]:"Changes in your weight",[l.SECTION2_PROMPT_3]:"Concerns for your environmental safety",[l.SECTION2_PROMPT_4]:"Changes in your interpersonal relationships",[l.SECTION2_PROMPT_5]:"Concerns for your hygiene",[l.SECTION2_PROMPT_6]:"Changes in your mood",[l.SECTION2_PROMPT_7]:"Insensitivity of others to your sense of smell problem",[l.SECTION2_PROMPT_8]:"Smells that no one else seems to notice",[l.SECTION2_PROMPT_9]:"Scents that smell different from before"},Q={en_us:G};i["default"].use(z());const K={lang:{locales:Q,current:"en_us"},theme:{themes:{light:{primary:"#A52714"}}}};var J=new(z())(K),ee=[{data:function(){return{k:l}},methods:{t(e){return this.$vuetify.lang.t(`$vuetify.${e}`)}}}];i["default"].use(W.Z),i["default"].mixin(...ee),i["default"].config.productionTip=!1,new i["default"]({vuetify:J,render:e=>e(q)}).$mount("#app-entry")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,o){if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],o=e[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(c--,1);var _=n();void 0!==_&&(t=_)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,a=i[0],r=i[1],l=i[2],_=0;if(a.some((function(t){return 0!==e[t]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(l)var c=l(s)}for(t&&t(i);_<a.length;_++)o=a[_],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},i=self["webpackChunknose_hht"]=self["webpackChunknose_hht"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(707)}));i=s.O(i)})();
//# sourceMappingURL=app.fc934d76.js.map