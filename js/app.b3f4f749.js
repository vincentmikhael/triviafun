(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24d3":function(t,e,a){t.exports=a.p+"img/jumbotron.eab2a176.png"},"367e":function(t,e,a){t.exports=a.p+"img/trivia.1f1498ed.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[s("router-link",{attrs:{to:"/"}},[s("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("367e"),transition:"scale-transition",width:"140"}})],1)],1),s("v-spacer")],1),s("v-content",[s("router-view"),s("br")],1),s("Footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{localAttrs:"",padless:""}},[a("v-card",{staticClass:"red lighten-1 text-center",attrs:{flat:"",color:"blue",tile:"",width:"100%"}},[a("v-card-text",{staticClass:"white--text py-0"},[a("Strong",[t._v("Follow")]),a("v-btn",{staticClass:"mx-4",attrs:{icon:"",href:"https://www.facebook.com/vincent.mikhael.3",target:"#"}},[a("v-icon",{attrs:{size:"24px"}},[t._v("fab fa-facebook")])],1),a("v-btn",{staticClass:"mx-4",attrs:{icon:"",href:"https://www.instagram.com/vincent.mikhaell/",target:"#"}},[a("v-icon",{attrs:{size:"24px"}},[t._v("fab fa-instagram")])],1),a("v-btn",{staticClass:"mx-4",attrs:{icon:"",href:"https://github.com/vincentmikhael",target:"#"}},[a("v-icon",{attrs:{size:"24px"}},[t._v("fab fa-github")])],1)],1),a("v-divider"),a("v-card-text",{staticClass:"py-1 white--text blue darken-4"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("By Vincent Mikhael")])])],1)],1)},o=[],c={data:function(){return{icons:["fab fa-facebook","fab fa-instagram","fab fa-github"]}}},l=c,u=a("2877"),d=a("6544"),v=a.n(d),p=a("8336"),m=a("b0af"),h=a("99d9"),f=a("ce7e"),b=a("553a"),g=a("132d"),x=Object(u["a"])(l,i,o,!1,null,null,null),C=x.exports;v()(x,{VBtn:p["a"],VCard:m["a"],VCardText:h["b"],VDivider:f["a"],VFooter:b["a"],VIcon:g["a"]});var _={name:"App",components:{Footer:C},data:function(){return{}}},w=_,S=a("7496"),V=a("40dc"),k=a("a75b"),y=a("adda"),A=a("2fa4"),j=Object(u["a"])(w,n,r,!1,null,null,null),I=j.exports;v()(j,{VApp:S["a"],VAppBar:V["a"],VContent:k["a"],VImg:y["a"],VSpacer:A["a"]});var F=a("8c4f"),O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"pa-2",attrs:{color:"blue",dark:"",outlined:"",tile:""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:""}},[s("div",{staticClass:"ml-12"},[s("h1",[t._v("Trivia Fun")]),s("h5",[t._v("Daripada gabut, mending main trivia aja yuk!")]),s("br"),s("v-btn",{attrs:{to:"/setup",color:"white blue--text font-weight-bold"}},[t._v("Yuk mulai !")])],1)]),s("v-col",{attrs:{cols:"3",md:""}},[s("v-img",{attrs:{src:a("24d3")}})],1)],1)],1),s("div",{staticClass:"blue lighten-5"},[s("v-container",[s("v-card",{attrs:{flat:"",color:"blue lighten-4",light:""}},[s("v-card-title",{staticClass:"d-flex justify-center display-1 primary mb-5 white--text"},[s("v-divider",{staticClass:"white"}),t._v(" TOP HIGH SCORE "),s("v-divider",{staticClass:"white"})],1),s("div",{},[s("center",[s("div",{staticClass:"d-inline-block"},[s("v-avatar",{attrs:{color:"purple",size:"48"}},[s("span",{staticClass:"white--text headline"},[t._v("#2")])]),s("br"),s("b",{staticClass:"headline"},[t._v(t._s(t.Score[1].nama))]),s("br"),t._v(t._s(t.Score[1].score)+" Point"),s("br"),s("v-divider",{staticClass:"mx-6 my-5",attrs:{vertical:""}})],1),s("div",{staticClass:"d-inline-block mx-10"},[s("v-avatar",{attrs:{color:"purple",size:"48"}},[s("span",{staticClass:"white--text headline"},[t._v("#1")])]),s("br"),s("b",{staticClass:"headline orange--text"},[t._v(t._s(t.Score[0].nama))]),s("br"),t._v(t._s(t.Score[0].score)+" Point"),s("br"),s("br"),s("v-divider",{staticClass:"mx-6 my-10",attrs:{vertical:""}})],1),s("div",{staticClass:"d-inline-block"},[s("v-avatar",{attrs:{color:"purple",size:"48"}},[s("span",{staticClass:"white--text headline"},[t._v("#3")])]),s("br"),s("b",{staticClass:"headline"},[t._v(t._s(t.Score[2].nama))]),s("br"),t._v(t._s(t.Score[2].score)+" Point"),s("br"),s("v-divider",{staticClass:"mx-6 ",attrs:{vertical:""}})],1)])],1)],1)],1)],1),s("div",{staticClass:"blue lighten-5"},[s("v-container",{staticClass:"mt-10 blue lighten-5"},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"2"}},[s("center",[s("v-img",{staticStyle:{"max-width":"200px"},attrs:{src:a("cf05")}})],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"9"}},[s("p",{staticClass:"subtitle-1"},[t._v(" This is an interactive website created with a javascript framework called Vue JS. And also the API question is from opentdb.com, and the web interface is made with Vuetify."),s("br"),t._v(" Created by Vincent Mikhael ")])])],1)],1)],1)],1)},$=[],q={computed:{Score:function(){return this.$store.getters.getScore}},mounted:function(){this.$store.dispatch("getScores")}},L=q,M=a("8212"),Q=a("62ad"),T=a("a523"),B=a("0fd9b"),D=Object(u["a"])(L,O,$,!1,null,null,null),E=D.exports;v()(D,{VAvatar:M["a"],VBtn:p["a"],VCard:m["a"],VCardTitle:h["c"],VCol:Q["a"],VContainer:T["a"],VDivider:f["a"],VImg:y["a"],VRow:B["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("Masukkan nama")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v("Generate soal")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"3"}},[t._v("Go!")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"purple accent-2",height:"200px"}},[a("center",[a("v-col",{attrs:{cols:"10"}},[a("v-card",{staticClass:"pa-4",attrs:{elevation:"23"}},[a("h2",{staticClass:"purple--text"},[t._v("TULISKAN NAMA KAMU")]),a("v-text-field",{attrs:{label:"Nama",max:"10",rules:t.rules,autofocus:""},model:{value:t.nama,callback:function(e){t.nama=e},expression:"nama"}})],1)],1)],1)],1),a("v-btn",{attrs:{color:"purple accent-1",disabled:t.nama.length<=3||t.nama.length>=11},on:{click:function(e){t.e1=2}}},[t._v(" Continue ")]),a("v-btn",{attrs:{to:"/",text:""}},[t._v("Cancel")])],1),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"green accent-1"}},[a("center",[a("v-col",{attrs:{cols:"10"}},[a("v-card",{staticClass:"pa-4",attrs:{elevation:"23"}},[a("h2",{staticClass:"green--text"},[t._v("GENERATE QUESTIONS")]),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:t.jmlSoal,value:t.jmlSoal,label:"Jumlah soal",color:"green","append-icon":"fas fa-caret-down",outlined:""},model:{value:t.setup.jmlSoal,callback:function(e){t.$set(t.setup,"jmlSoal",t._n(e))},expression:"setup.jmlSoal"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:t.kategori,"item-text":"name","item-value":"id",label:"Pilih kategori",color:"green","append-icon":"fas fa-caret-down",outlined:""},model:{value:t.setup.isiKategori,callback:function(e){t.$set(t.setup,"isiKategori",t._n(e))},expression:"setup.isiKategori"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:t.level,"item-text":"name","item-value":"id",label:"Pilih kesulitan",color:"green","append-icon":"fas fa-caret-down",outlined:""},model:{value:t.setup.isiLevel,callback:function(e){t.$set(t.setup,"isiLevel",e)},expression:"setup.isiLevel"}})],1)],1)],1)],1)],1)],1),a("v-btn",{attrs:{color:"light-green accent-3",disabled:null===t.setup.isiKategori||null===t.setup.isiLevel||null===t.setup.jmlSoal},on:{click:function(e){t.e1=3}}},[t._v(" Continue ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.e1=1}}},[t._v("Cancel")])],1),a("v-stepper-content",{attrs:{step:"3"}},[a("v-card",{staticClass:"mb-12",attrs:{color:"yellow lighten-3"}},[a("center",[a("v-col",{attrs:{cols:"10"}},[a("v-card",{staticClass:"pa-4",attrs:{elevation:"23"}},[a("h2",{staticClass:"orange--text"},[t._v("MULAI JAWAB KUIS!"),a("br"),a("small",[t._v("Saat ini, soal Quiz hanya tersedia bahasa inggris.")]),a("br"),t._v(" KLIK 'MULAI QUIZ' ")])])],1)],1)],1),a("v-btn",{attrs:{color:"amber lighten-1"},on:{click:t.setQuest}},[t._v(" Mulai Quiz ! ")]),a("v-btn",{attrs:{text:""},on:{click:function(e){t.e1=2}}},[t._v("Cancel")])],1)],1)],1),a("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("V-container",[a("v-col",[a("center",[t._v(" Wait a second...."),a("br"),a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1)],1)],1)],1)},z=[],K={data:function(){return{e1:1,jmlSoal:[10,20,25,30,40,50],kategori:[{name:"Film",id:11},{name:"Music",id:12},{name:"Japanese Anime & Manga",id:31},{name:"Video Game",id:15},{name:"Science & Nature",id:17},{name:"Science: Computers",id:18}],rules:[function(t){return t&&t.length>=4||"Min 4 characters"},function(t){return t&&t.length<=10||"Max 10 characters"}],level:[{id:"easy",name:"Easy"},{id:"medium",name:"Medium"}],nama:"",setup:{isiKategori:null,isiLevel:null,jmlSoal:null},dialog:!1}},methods:{setQuest:function(){var t=this;this.dialog=!0,this.$store.dispatch("getQuest",this.setup).then((function(){setTimeout((function(){t.$router.push({path:"/quiz/".concat(t.nama)})}),5e3)}))}}},N=K,G=a("169a"),J=a("490a"),U=a("b974"),R=a("7e85"),H=a("e516"),W=a("9c54"),Y=a("56a4"),Z=a("8654"),X=Object(u["a"])(N,P,z,!1,null,null,null),tt=X.exports;v()(X,{VBtn:p["a"],VCard:m["a"],VCol:Q["a"],VContainer:T["a"],VDialog:G["a"],VDivider:f["a"],VProgressCircular:J["a"],VRow:B["a"],VSelect:U["a"],VStepper:R["a"],VStepperContent:H["a"],VStepperHeader:W["a"],VStepperItems:W["b"],VStepperStep:Y["a"],VTextField:Z["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blue lighten-5"},[a("v-container",[a("v-card",{staticClass:"py-1",attrs:{flat:"",id:"quest",shaped:""}},[a("center",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-card-title",{},[a("div",{staticClass:"subtitle-2"},[t._v("Question No."+t._s(t.answered+1))])]),a("v-card-text",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("div",{staticClass:"title"},[t._v(t._s(t.convert(t.Question.question)))]),a("div",{staticClass:"border"},[a("v-list",{attrs:{shaped:""}},[a("v-subheader",[t._v("ANSWER")]),a("v-list-item-group",t._l(t.Question.answer,(function(e,s){return a("v-list-item",{key:s,class:t.colorClass(s),attrs:{color:"primary"},on:{click:function(e){return t.selectedAnswer(s)}}},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)})),1)],1)],1),a("div",{staticClass:"mt-3"},[a("v-btn",{staticClass:"success mr-4",attrs:{disabled:null===t.selectedIndex||!0===t.submitted},on:{click:t.submitAnswer}},[t._v("Submit")]),a("v-btn",{class:[t.getIndex+1===t.questionLength?"suber":""],attrs:{color:"blue white--text",disabled:!1===t.submitted},on:{click:t.Next}},[t._v("Next")])],1)])],1)],1)],1),a("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white"}},[a("v-avatar",{staticClass:"green darken-4",attrs:{left:""}},[t._v(" "+t._s(120*t.score)+" ")]),t._v(" Score ")],1),a("v-chip",{staticClass:"ma-2 float-right",attrs:{color:"blue ligthen-2","text-color":"white"}},[t._v(" "+t._s(t.answered)+"/"+t._s(t.questionLength)+" Terjawab ")])],1)],1),a("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card-title",{staticClass:"title grey--text"},[t._v("Horeee!!!! Kamu berhasil menyelesaikan quiz nya :)")]),a("v-divider")],1),a("v-col",[a("v-container",{staticClass:"grey--text"},[a("div",[a("b",[t._v("Soal benar")]),t._v(" : "+t._s(t.score))]),a("div",[a("b",[t._v("Score")]),t._v(" : "+t._s(120*t.score))])])],1),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card-text",{staticClass:"subtitle grey--text"},[t._v("Terima kasih telah bermain. Ingin main lagi ? ")])],1),a("v-col",{attrs:{cols:"12"}},[a("v-card-actions",[a("v-btn",{attrs:{color:"blue lighten-2",dark:"",depressed:"",to:"/setup"},on:{click:function(e){return t.resetState()}}},[t._v("Main lagi")]),a("v-btn",{attrs:{color:"red ligten-3",depressed:"",dark:"",to:"/"},on:{click:function(e){return t.resetState()}}},[t._v("Gamau !")])],1)],1)],1)],1)],1)],1)],1)},at=[],st=(a("ac1f"),a("5319"),{data:function(){return{selectedIndex:null,score:0,answered:0,submitted:!1,dialog:!1}},computed:{Question:function(){return this.$store.getters.getQuest},questionLength:function(){return this.$store.getters.questionLength},getIndex:function(){return this.$store.getters.getIndex}},mounted:function(){null===this.$store.getters.getQuest&&this.$router.push("/setup")},methods:{Next:function(){this.$store.commit("incrementIndex"),this.selectedIndex=null,this.submitted=!1},convert:function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#039;/g,"'").replace(/&quot;/g,'"')},selectedAnswer:function(t){this.selectedIndex=t},resetState:function(){this.$store.commit("resetState")},submitAnswer:function(){if(this.submitted=!0,this.submitted&&this.selectedIndex===this.Question.currentAnswer&&this.score++,this.answered++,this.answered===this.questionLength){this.dialog=!0;var t={id:Math.floor(101*Math.random()),nama:this.$route.params.nama,score:120*this.score};this.$store.dispatch("setScore",t),this.$store.commit("resetState")}},colorClass:function(t){var e="";return this.submitted&&this.Question.currentAnswer===t?e="light-green accent-3":this.submitted&&this.selectedIndex===t&&this.Question.currentAnswer!==t&&(e="red accent-3"),e}}}),nt=st,rt=(a("60fa"),a("cc20")),it=a("8860"),ot=a("da13"),ct=a("5d23"),lt=a("1baa"),ut=a("e0c7"),dt=Object(u["a"])(nt,et,at,!1,null,"99331274",null),vt=dt.exports;v()(dt,{VAvatar:M["a"],VBtn:p["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VChip:rt["a"],VCol:Q["a"],VContainer:T["a"],VDialog:G["a"],VDivider:f["a"],VList:it["a"],VListItem:ot["a"],VListItemContent:ct["a"],VListItemGroup:lt["a"],VListItemTitle:ct["b"],VRow:B["a"],VSubheader:ut["a"]}),s["a"].use(F["a"]);var pt=[{path:"/",name:"Home",component:E},{path:"/setup",name:"setup",component:tt},{path:"/quiz/:nama",name:"quiz",component:vt},{path:"*",name:"undefined",component:E}],mt=new F["a"]({mode:"history",base:"/",routes:pt}),ht=mt,ft=(a("99af"),a("c975"),a("d3b7"),a("2909")),bt=a("2f62"),gt=a("2ef0"),xt=a.n(gt);s["a"].use(bt["a"]);var Ct=new bt["a"].Store({state:{question:[],index:0,score:[]},getters:{getIndex:function(t){return t.index},getScore:function(t){return t.score},questionLength:function(t){return t.question[0]?t.question.length:null},getQuest:function(t){var e=t.question[t.index];if(!e)return null;var a=[].concat(Object(ft["a"])(e.incorrect_answers),[e.correct_answer]),s=xt.a.shuffle(a),n=s.indexOf(e.correct_answer);return{question:e.question,answer:s,currentAnswer:n}}},mutations:{setQuest:function(t,e){t.question=e},incrementIndex:function(t){t.index++},resetState:function(t){t.index=0},setScores:function(t,e){t.score=e}},actions:{getQuest:function(t,e){var a=t.commit;fetch("https://opentdb.com/api.php?amount=".concat(e.jmlSoal,"&category=").concat(e.isiKategori,"&type=multiple")).then((function(t){return t.json()})).then((function(t){a("setQuest",t.results)}))},setScore:function(t,e){t.commit;fetch("https://api.backendless.com/D3CB60BB-F73B-58AE-FF68-FAFC3138ED00/B8431CA4-36D3-44DF-AFA4-6027DFC5594E/data/user",{method:"POST",body:JSON.stringify(e)})},getScores:function(t){var e=t.commit;fetch("https://api.backendless.com/D3CB60BB-F73B-58AE-FF68-FAFC3138ED00/B8431CA4-36D3-44DF-AFA4-6027DFC5594E/data/user?pageSize=3&sortBy=score%20desc").then((function(t){return t.json()})).then((function(t){e("setScores",t)}))}},modules:{}}),_t=a("f309");s["a"].use(_t["a"]);var wt=new _t["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:ht,store:Ct,vuetify:wt,render:function(t){return t(I)}}).$mount("#app")},"60fa":function(t,e,a){"use strict";var s=a("c8d3"),n=a.n(s);n.a},c8d3:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b3f4f749.js.map