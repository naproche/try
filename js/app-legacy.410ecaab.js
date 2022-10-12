(function(){"use strict";var e={221:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(9963),a=n(6252);function i(e,t){var n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var o=n(3744);const s={},u=(0,o.Z)(s,[["render",i]]);var c=u,l=n(2119),p=function(e){return(0,a.dD)("data-v-709ee94f"),e=e(),(0,a.Cn)(),e},f={class:"text-wrap"},h={class:"left-flex"},m={id:"naproche-text-wrapper"},d={id:"right-wrapper"},v=p((function(){return(0,a._)("div",{id:"home-screen"},[(0,a._)("h1",null,"Naproche"),(0,a._)("p",null,[(0,a.Uk)(" Naproche (short for 'Natural proof checking') is a proof assistant that accepts controlled natural language as input. It can translate this input to first order logic and check it with an automatic theorem prover. The latest development version can be found on "),(0,a._)("a",{href:"https://github.com/naproche/naproche/"},"Github"),(0,a.Uk)(" and a recent stable version is part of the "),(0,a._)("a",{href:"https://isabelle.in.tum.de/"},"Isabelle 2021-1"),(0,a.Uk)(" distribution. ")]),(0,a._)("p",null," You can directly start writing Naproche texts on the left or load an example from the menu.  For longer-term use, we recomend the Isabelle version (which is also much faster). "),(0,a._)("p",null,"Enjoy!")],-1)})),g=[v],w={class:"naproche-output-wrapper"};function x(e,t,n,i,o,s){var u=(0,a.up)("MenuBar"),c=(0,a.up)("NaprocheOutput"),l=(0,a.up)("SplitPanes");return(0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)(u,{onTranslate:s.translate,onCheck:s.load,showFormatToggle:!0,changeFormat:s.useFormat,onProverChange:s.useProver,onLoadFile:s.loadFile},null,8,["onTranslate","onCheck","changeFormat","onProverChange","onLoadFile"]),(0,a.Wm)(l,{style:{flex:"1"},initRatio:.5,"min-left":.2,"min-right":.1},{left:(0,a.w5)((function(){return[(0,a._)("div",h,[(0,a._)("div",m,[(0,a.wy)((0,a._)("textarea",{id:"naproche-text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.stdin=e})},null,512),[[r.nr,o.stdin]])])])]})),right:(0,a.w5)((function(){return[(0,a._)("div",d,[(0,a.wy)((0,a._)("div",null,g,512),[[r.F8,o.showhome]]),(0,a.wy)((0,a._)("div",null,[(0,a._)("div",w,[(0,a.Wm)(c,{ref:"naproche"},null,512)])],512),[[r.F8,!o.showhome]])])]})),_:1},8,["initRatio","min-left","min-right"])])}var b=n(8534),k=(n(5666),n(1539),n(3577)),F=function(e){return(0,a.dD)("data-v-3de567e4"),e=e(),(0,a.Cn)(),e},_={class:"naprocheOut"},y={key:0},P=F((function(){return(0,a._)("p",null,"parsing ....",-1)})),C=[P],O={key:1};function T(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",_,[i.parsing?((0,a.wg)(),(0,a.iD)("div",y,C)):((0,a.wg)(),(0,a.iD)("div",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.lines,(function(e){return(0,a.wg)(),(0,a.iD)("p",{key:e.id,class:(0,k.C_)([e.type])},(0,k.zw)(e.line),3)})),128))]))])}var D=n(4648),L=(n(1249),n(4916),n(3123),n(2222),n(6755),n(8309),n(3907)),R={fetchLibrary:function(e){return(0,b.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/"+e,t.next=3,fetch(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()}};var M={state:{userFiles:{},libraryFiles:{}},mutations:{addUserFile:function(e,t){e.userFiles[t.name]={exists:!0,content:t.content}},addLibraryFile:function(e,t){e.libraryFiles[t.name]={exists:!0,content:t.content}},noUserFile:function(e,t){e.userFiles[t]={exists:!1,content:""}},noLibraryFile:function(e,t){e.libraryFiles[t]={exists:!1,content:""}},cleanUserFiles:function(e){e.userFiles={}}},getters:{readFile:function(e){return function(t){return e.userFiles[t]&&e.userFiles[t].exists?e.userFiles[t].content:e.libraryFiles[t]?e.libraryFiles[t].content:null}}},actions:{loadFile:function(e,t){return(0,b.Z)(regeneratorRuntime.mark((function n(){var r,a,i,o,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state.userFiles[t.name],a=e.state.libraryFiles[t.name],r){n.next=26;break}return n.next=5,t.fetchUser(t.name);case 5:if(i=n.sent,!i||200!==i.status){n.next=13;break}return n.next=9,i.text();case 9:o=n.sent,e.commit("addUserFile",{name:t.name,content:o}),n.next=26;break;case 13:if(e.commit("noUserFile",t.name),a){n.next=26;break}return n.next=17,t.fetchLibrary(t.name);case 17:if(s=n.sent,!s||200!==s.status){n.next=25;break}return n.next=21,s.text();case 21:u=n.sent,e.commit("addLibraryFile",{name:t.name,content:u}),n.next=26;break;case 25:e.commit("noLibraryFile",t.name);case 26:case"end":return n.stop()}}),n)})))()}}},N=(0,L.MT)({state:{},mutations:{},actions:{},modules:{files:M}}),U={name:"NaprocheOutput",data:function(){return{lines:[],activeProver:void 0,naproche:void 0,parsing:!1,provers:{},proverOut:[],proverErr:[]}},methods:{runNaproche:function(e,t,n){var r=this;void 0!==this.naproche&&this.naproche.terminate(),this.lines=[],this.parsing=!0,this.activeProver=this.provers[n],this.naproche=new Worker("naproche.js");var a=function(e){return r.naproche.postMessage(e)};a(""),this.naproche.onmessage=function(n){if("config"===n.data.Req&&(r.$store.commit("addLibraryFile",{name:"init.opt",content:j}),a({args:e})),"output"===n.data.Req){var i=n.data.Msg.split("\n").map((function(e){return{type:"output",line:e||" "}}));r.lines=r.lines.concat(i),r.parsing=!1}"library"===n.data.Req&&r.$store.dispatch("loadFile",(0,D.Z)({name:n.data.FileName,fetchUser:t},R)).then((function(){var e=r.$store.getters.readFile(n.data.FileName);null===e?r.file="Couldn't load file: "+n.data.FileName:a({fileContent:e})})),"prover"===n.data.Req&&r.activeProver.postMessage({Task:n.data.Task,Args:n.data.Args})},this.activeProver.onmessage=function(e){if("proverOut"===e.data.Req)if(e.data.content){if(e.data.content.startsWith("program exited"))return;if("Calling stub instead of signal()"===e.data.content)return;e.data.Req.error?r.proverErr.push(e.data.content):r.proverOut.push(e.data.content)}else if(e.data.html){var t=(new DOMParser).parseFromString(e.data.html,"text/html"),n=t.querySelector("pre").innerHTML.split("\n");for(var i in n)r.proverOut.push(n[i])}if("proverDone"===e.data.Req){var o=Object.assign({},r.proverOut),s=[];for(var u in o)s.push(o[u]);var c=Object.assign({},r.proverErr),l=[];for(u in c)l.push(c[u]);r.proverOut=[],r.proverErr=[],a({proverOut:s,proverErr:l})}}}},mounted:function(){this.provers["spass"]=new Worker("spass.js"),this.provers["eprover"]=new Worker("eprover.js"),this.provers["vampire"]=new Worker("vampire.js")},beforeUnmount:function(){this.naproche.terminate(),this.provers["spass"].terminate(),this.provers["eprover"].terminate(),this.provers["vampire"].terminate()}},j="\n[checkconsistency off]\n";const q=(0,o.Z)(U,[["render",T],["__scopeId","data-v-3de567e4"]]);var E=q,S=function(e){return(0,a.dD)("data-v-44ef263c"),e=e(),(0,a.Cn)(),e},I=S((function(){return(0,a._)("div",{class:"dividerline"},null,-1)})),W=[I],Z={class:"split-right"};function $(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:"split-wrap",onMouseup:t[1]||(t[1]=function(e){return o.releaseMousePointer()})},[(0,a._)("div",{class:"split-left",style:(0,k.j5)({width:i.ratio})},[(0,a.WI)(e.$slots,"left",{},void 0,!0)],4),(0,a._)("div",{class:"split",onMousedown:t[0]||(t[0]=function(e){return o.bindMousePointer(e)})},W,32),(0,a._)("div",Z,[(0,a.WI)(e.$slots,"right",{},void 0,!0)])],32)}n(9714),n(9653);var B={name:"SplitPanes",data:function(){return{listener:null,target:null,ratio:(100*this.initRatio).toString()+"%"}},props:{minLeft:Number,minRight:Number,initRatio:Number},methods:{bindMousePointer:function(e){var t=this,n=e.target.parentElement;this.target=n;var r=n.getBoundingClientRect(),a=function(e){var n=100*Math.max(t.minLeft,Math.min(e,1-t.minRight));t.ratio=n.toString()+"%"};this.listener=function(e){a((e.clientX-r.x-5)/r.width)},this.target.addEventListener("mousemove",this.listener,!1)},releaseMousePointer:function(){null!==this.target&&this.target.removeEventListener("mousemove",this.listener,!1)}}};const z=(0,o.Z)(B,[["render",$],["__scopeId","data-v-44ef263c"]]);var A=z,H=(n(2526),n(1817),function(e){return(0,a.dD)("data-v-3a48e8f8"),e=e(),(0,a.Cn)(),e}),Y={class:"main-menu pure-menu pure-menu-horizontal"},K=H((function(){return(0,a._)("div",{class:"pure-menu-heading"},"Naproche",-1)})),V={class:"pure-menu-list"},G={class:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},X=H((function(){return(0,a._)("div",{href:"#",id:"menuLink1",class:"pure-menu-link"},"Load",-1)})),J={class:"pure-menu-children"},Q=["onClick"],ee={class:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},te=H((function(){return(0,a._)("div",{id:"menuLink1",class:"pure-menu-link"},"Prover",-1)})),ne={class:"pure-menu-children"},re=["onClick"],ae={key:0,class:"fa-solid fa-circle-check"},ie={key:0,class:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},oe=H((function(){return(0,a._)("div",{id:"menuLink1",class:"pure-menu-link"},"Format",-1)})),se={class:"pure-menu-children"},ue=["onClick"],ce={key:0,class:"fa-solid fa-circle-check"},le={class:"pure-menu-list",style:{float:"right"}},pe={class:"pure-menu-item"},fe={class:"pure-menu-item"};function he(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",Y,[K,(0,a._)("ul",V,[(0,a._)("li",G,[X,(0,a._)("ul",J,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.files,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:"pure-menu-item",key:e.name},[(0,a._)("a",{onClick:function(t){o.loadFile(e)},href:"javascript:void(0);",class:"pure-menu-link"},(0,k.zw)(e.name),9,Q)])})),128))])]),(0,a._)("li",ee,[te,(0,a._)("ul",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.provers,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:"pure-menu-item",key:e.name},[(0,a._)("a",{onClick:function(t){i.activeProver=e.name,n.onProverChange(e.name)},href:"javascript:void(0);",class:"pure-menu-link"},[(0,a.Uk)((0,k.zw)(e.description)+" ",1),e.name==i.activeProver?((0,a.wg)(),(0,a.iD)("i",ae)):(0,a.kq)("",!0)],8,re)])})),128))])]),n.showFormatToggle?((0,a.wg)(),(0,a.iD)("li",ie,[oe,(0,a._)("ul",se,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.formats,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:"pure-menu-item",key:e.name},[(0,a._)("a",{onClick:function(t){i.activeFormat=e.name,n.changeFormat(e.name)},href:"javascript:void(0);",class:"pure-menu-link"},[(0,a.Uk)((0,k.zw)(e.description)+" ",1),e.name==i.activeFormat?((0,a.wg)(),(0,a.iD)("i",ce)):(0,a.kq)("",!0)],8,ue)])})),128))])])):(0,a.kq)("",!0)]),(0,a._)("ul",le,[(0,a._)("li",pe,[(0,a._)("button",{onClick:t[0]||(t[0]=function(e){n.onTranslate()}),class:"pure-button"},"Translate")]),(0,a._)("li",fe,[(0,a._)("button",{onClick:t[1]||(t[1]=function(e){n.onCheck()}),class:"pure-button pure-button-primary"},"Check")])])])}var me={name:"MenuBar",props:{onTranslate:Function,onCheck:Function,changeFormat:Function,onProverChange:Function,showFormatToggle:Boolean,onLoadFile:Function},methods:{loadFile:function(e){this.activeFormat=e.format,this.changeFormat(e.format),this.onLoadFile(e.url)}},data:function(){return{activeProver:"spass",provers:[{name:"spass",description:"SPASS (runs in browser)"},{name:"eprover",description:"Eprover (System On TPTP)"},{name:"vampire",description:"Vampire (System On TPTP)"}],activeFormat:"ftl",formats:[{name:"ftl",description:"Text input (.ftl)"},{name:"tex",description:"LaTeX input (.ftl.tex)"}],files:[{name:"Agatha (tex)",format:"tex",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/agatha.ftl.tex"},{name:"Cantor (ftl)",format:"ftl",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/cantor.ftl"},{name:"Dwarfs (tex)",format:"tex",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/dwarfs.ftl.tex"},{name:"Groups (tex)",format:"tex",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/group.lean.ftl.tex"},{name:"Maximum Modulus (ftl)",format:"ftl",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/maximum_modulus.ftl"},{name:"Newman (ftl)",format:"ftl",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/newman.ftl"},{name:"Prime no square (ftl)",format:"ftl",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/prime_no_square.ftl"},{name:"Tarski (ftl)",format:"ftl",url:"https://raw.githubusercontent.com/naproche/naproche/1d645706c9e44cd8f3f78502132987cde8f1d1c0/examples/tarski.ftl"}]}}};const de=(0,o.Z)(me,[["render",he],["__scopeId","data-v-3a48e8f8"]]);var ve=de,ge=n(4631),we=n.n(ge),xe={name:"TextPane",components:{NaprocheOutput:E,MenuBar:ve,SplitPanes:A},mounted:function(){var e=this,t=document.getElementById("naproche-text");this.editor=we().fromTextArea(t,{lineNumbers:!0,mode:null}),this.editor.display.wrapper.style["flex-grow"]="1",this.editor.on("change",(function(t){e.stdin=t.getValue()}))},computed:{fetchUser:function(){var e=this;return function(t){return"stdin.ftl"===t?new Response(e.stdin,{status:200}):null}},hastex:function(){return this.usetex?"on":"off"}},methods:{useFormat:function(e){this.usetex="ftl"!=e},useProver:function(e){this.prover=e},load:function(){this.showhome=!1,this.$store.commit("addUserFile",{name:"textarea.ftl",content:this.stdin});var e=["--tex="+this.hastex,"--prover="+this.prover,"textarea.ftl"];this.$refs.naproche.runNaproche(e,this.fetchUser,this.prover)},translate:function(){this.showhome=!1,this.$store.commit("addUserFile",{name:"textarea.ftl",content:this.stdin});var e=["-T","--tex="+this.hastex,"--prover="+this.prover,"textarea.ftl"];this.$refs.naproche.runNaproche(e,this.fetchUser,this.prover)},loadFile:function(e){var t=this;return(0,b.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:if(r=n.sent,!r||200!==r.status){n.next=8;break}return n.next=6,r.text();case 6:a=n.sent,t.editor.getDoc().setValue(a);case 8:case"end":return n.stop()}}),n)})))()}},data:function(){return{loaded:!1,usetex:!1,showhome:!0,prover:"spass",editor:{},stdin:""}}};const be=(0,o.Z)(xe,[["render",x],["__scopeId","data-v-709ee94f"]]);var ke=be,Fe=[{path:"/",name:"TextPane",component:ke}],_e=(0,l.p7)({history:(0,l.r5)(),routes:Fe}),ye=_e;(0,r.ri)(c).use(N).use(ye).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],u=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkwebinterface"]=self["webpackChunkwebinterface"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(221)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.410ecaab.js.map