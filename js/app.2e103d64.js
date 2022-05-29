(function(){var e={883:function(e,t,s){var a={"./apple-touch-icon.png":642,"./favicon-32x32.png":68};function o(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id=883},934:function(e,t,s){"use strict";var a=s(144),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("outcomes-research-wrapper",{attrs:{_title:"NOSE HHT Questionnaire"}},[s("v-app",[s("div",{attrs:{id:"app"}},[s("Stepper",{attrs:{msg:"Welcome to Your Vue.js App"}})],1),s("v-footer",{attrs:{padless:!0}},[s("v-card",{staticClass:"grey-lighten-2 text-center",attrs:{flat:"",tile:"",width:"100%"}},[s("v-card-text",[e._v(" NOSE HHT Copyright 2020 Washington University School of Medicine, St. Louis, Missouri ")])],1)],1)],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-stepper mx-auto pa-3 pa-sm-12 text-left"},[s("v-card",{staticClass:"mb-12"},[s("v-card-title",[e._v(" Nasal Outcome Score for Epistaxis in Hereditary Hemorrhagic Telangiectasia (NOSE HHT) ")]),s("v-card-text",[s("p",{staticClass:"has-text-grey"},[e._v(" Below you will find a list of physical, functional, and emotional consequences of your nosebleeds. We would like to know more about these problems and would appreciate you answering the following questions to the best of your ability. There are no right or wrong answers, as your responses are unique to you. Please rate your problems as they have been over "),s("strong",{staticClass:"text-decoration-underline"},[e._v("the past two weeks")]),e._v(". ")]),s("p",{staticClass:"mb-0 has-text-grey"},[e._v("Thank you for your participation.")])])],1),s("v-card",{staticClass:"mb-12"},[s("div",[s("v-form",{ref:"form1",attrs:{"lazy-validation":""},model:{value:e.section1.valid,callback:function(t){e.$set(e.section1,"valid",t)},expression:"section1.valid"}},[s("v-card-subtitle",{staticClass:"step-label"},[e._v(" How severe are the following problems "),s("strong",[e._v("due to your nosebleeds")]),e._v("? ")]),s("v-card-text",{staticClass:"_table pb-5"},e._l(e.section1.prompts,(function(t,a){return s("div",{key:t,staticClass:"_row"},[s("div",{staticClass:"prompt"},[e._v(e._s(t))]),s("v-radio-group",{staticClass:"mt-0",attrs:{column:e.isSmallWidth,rules:e.rules},on:{change:function(t){return e.calculateResults(t,a,1)}},model:{value:e.section1.values[t],callback:function(s){e.$set(e.section1.values,t,s)},expression:"section1.values[prompt]"}},e._l(e.section1.options,(function(e){return s("v-radio",{key:e.text+e.value,attrs:{label:e.text,value:e.value}})})),1)],1)})),0)],1),s("v-divider",{staticClass:"my-2"}),s("v-form",{ref:"form2",attrs:{"lazy-validation":""},model:{value:e.section2.valid,callback:function(t){e.$set(e.section2,"valid",t)},expression:"section2.valid"}},[s("v-card-subtitle",{staticClass:"step-label"},[e._v(" How difficult is it to perform the following tasks "),s("strong",[e._v("due to your nosebleeds")]),e._v("? ")]),s("v-card-text",{staticClass:"_table pb-5"},e._l(e.section2.prompts,(function(t,a){return s("div",{key:t,staticClass:"_row"},[s("div",{staticClass:"prompt"},[e._v(e._s(t))]),s("v-radio-group",{staticClass:"mt-0",attrs:{column:e.isSmallWidth,rules:e.rules},on:{change:function(t){return e.calculateResults(t,a,2)}},model:{value:e.section2.values[t],callback:function(s){e.$set(e.section2.values,t,s)},expression:"section2.values[prompt]"}},e._l(e.section2.options,(function(e){return s("v-radio",{key:e.text+e.value,attrs:{label:e.text,value:e.value}})})),1)],1)})),0)],1),s("v-divider",{staticClass:"my-2"}),s("v-form",{ref:"form3",attrs:{"lazy-validation":""},model:{value:e.section3.valid,callback:function(t){e.$set(e.section3,"valid",t)},expression:"section3.valid"}},[s("v-card-subtitle",{staticClass:"step-label"},[e._v(" How bothered are you by the following "),s("strong",[e._v("due to your nosebleeds")]),e._v("? ")]),s("v-card-text",{staticClass:"_table pb-5"},e._l(e.section3.prompts,(function(t,a){return s("div",{key:t,staticClass:"_row"},[s("div",{staticClass:"prompt"},[e._v(e._s(t))]),s("v-radio-group",{staticClass:"mt-0",attrs:{column:e.isSmallWidth,rules:e.rules},on:{change:function(t){return e.calculateResults(t,a,3)}},model:{value:e.section3.values[t],callback:function(s){e.$set(e.section3.values,t,s)},expression:"section3.values[prompt]"}},e._l(e.section3.options,(function(e){return s("v-radio",{key:e.text+e.value,attrs:{label:e.text,value:e.value}})})),1)],1)})),0)],1)],1),s("v-divider",{staticClass:"my-2"}),s("v-card-text",{staticClass:"pa-6"},[s("h4",{staticClass:"grey-text font-italic pb-3"},[e.allFieldsHaveValues?s("span",{staticClass:"results"},[s("h3",{staticClass:"black--text"},[e._v("Result:")]),s("pre",[e._v("Sum: "+e._s(e.sum))]),s("pre",[e._v("Average: "+e._s(e.average.toFixed(3)))])]):s("span",[e._v(" Result will display here when form is complete.")])]),s("v-simple-table",{staticClass:"my-2",scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left score-interp-title"},[e._v(" NOSE-HHT Score Interpretation ")]),s("th",{staticClass:"text-center"},[e._v(" Based on Sum ")]),s("th",{staticClass:"text-center"},[e._v(" Based on Average ")])])]),s("tbody",{staticClass:"text-center",class:e.allFieldsHaveValues?"showOutlines":""},[s("tr",{staticClass:"mild"},[s("td",{staticClass:"text-left"},[e._v("Mild")]),s("td",[s("div",{class:e.sum<=27&&"outline"},[e._v(" ≤ 27 ")])]),s("td",[s("div",{class:e.average<=1&&"outline"},[e._v("≤ 1")])])]),s("tr",{staticClass:"moderate"},[s("td",{staticClass:"text-left"},[e._v("Moderate")]),s("td",[s("div",{class:e.sum>=28&&e.sum<=54&&"outline"},[e._v(" 28 to 54 ")])]),s("td",[s("div",{class:e.average>1.01&&e.average<=2&&"outline"},[e._v(" 1.01 to 2 ")])])]),s("tr",{staticClass:"severe"},[s("td",{staticClass:"text-left"},[e._v("Severe")]),s("td",[s("div",{class:e.sum>54&&"outline"},[e._v(" > 54 ")])]),s("td",[s("div",{class:e.average>2&&"outline"},[e._v("> 2")])])])])]},proxy:!0}])})],1)],1),s("v-card",[s("v-card-text",[s("p",{staticClass:"has-text-grey"},[e._v(" When taken multiple times, NOSE HHT scores can be used to measure the change in physical and functional problems, functional limitations, and emotional consequences of nosebleeds over time and as a result of treatment. ")]),s("p",{staticClass:"mb-0 has-text-grey"},[e._v(" A change of 13 points in the sum score, or 0.46 in the mean score between two instances should be considered a clinically meaningful difference. ")])])],1)],1)},r=[];const l=["Blood running down back of your throat","Blocked up, stuffy nose","Nasal crusting","Fatigue","Shortness of breath","Decreased sense of smell or taste"],c=["Blow your nose","Bend over/pick something up off the ground","Breathe through your nose","Exercise","Work at your job (or school)","Stay asleep","Enjoy time with friends or family","Eat certain foods (e.g. spicy)","Have intimacy with spouse or significant other","Travel (e.g. by plane)","Fall asleep","Clean your house/apartment","Go outdoors regardless of the weather or season","Cook or prepare meals"],u=["Fear of nosebleeds in public","Fear of not knowing when next nosebleed","Getting blood on your clothes","Fear of not being able to stop a nosebleed","Embarrassment","Frustration, restlessness, irritability","Reduced concentration","Sadness","The need to buy new clothes"],d=["No problem","Mild problem","Moderate problem","Severe problem","As bad as possible"],v=["No difficulty","Mild difficulty","Moderate difficulty","Severe difficulty","Complete difficulty"],p=["Not bothered","Very rarely bothered","Rarely bothered","Frequently bothered","Very frequently bothered"],f=700,h=e=>e.reduce(((e,t)=>({...e,[t]:null})),{}),m=e=>e.map(((e,t)=>({text:e,value:t}))),b=e=>e.map((({values:e})=>Object.entries(e).map((([,e])=>e)))).flat();var y={computed:{allFieldsHaveValues(){return b(this.allSections).every((e=>null!==e))},allSections(){return[this.section1,this.section2,this.section3]}},methods:{calculateResults(e,t,s){this.allFieldsHaveValues&&(this.sum=this.calculateSum(),this.average=this.calculateAverage()),this.handleStepChange(t,s)},handleStepChange(e,t){parseInt(t)>1&&0===e&&this.$refs["form"+(parseInt(t)-1)].validate()},calculateSum(){return b(this.allSections).reduce(((e,t)=>e+t),0)},calculateAverage(){let{length:e}=b(this.allSections);return this.sum/e},onResize(){this.isSmallWidth=window.innerWidth<f}},data(){return{e6:1,isSmallWidth:window.innerWidth<f,sum:void 0,average:void 0,rules:[e=>null!==e],section1:{valid:!1,prompts:l,values:h(l),options:m(d)},section2:{valid:!1,prompts:c,values:h(c),options:m(v)},section3:{valid:!1,prompts:u,values:h(u),options:m(p)}}},mounted(){this.$nextTick((()=>{window.addEventListener("resize",this.onResize)}))},beforeDestroy(){window.removeEventListener("resize",this.onResize)}},g=y,_=s(1),w=(0,_.Z)(g,i,r,!1,null,null,null),x=w.exports,C={name:"App",components:{Stepper:x}},S=C,k=(0,_.Z)(S,o,n,!1,null,null,null),O=k.exports,H=s(657),E=s(464),T=s.n(E);s(243);a["default"].use(T());const F={theme:{themes:{light:{primary:"#A52714"}}}};var j=new(T())(F);a["default"].use(H.Z),a["default"].config.productionTip=!1,new a["default"]({vuetify:j,render:e=>e(O)}).$mount("#app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,a,o,n){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],n=e[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(r=!1,n<i&&(i=n));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],r=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var u=l(s)}for(t&&t(a);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},a=self["webpackChunknose_hht"]=self["webpackChunknose_hht"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(934)}));a=s.O(a)})();
//# sourceMappingURL=app.2e103d64.js.map