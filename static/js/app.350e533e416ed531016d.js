webpackJsonp([1],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),a={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("span",[n._v(n._s(n.hash))]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.nonce,expression:"nonce"}],attrs:{type:"text"},domProps:{value:n.nonce},on:{input:function(t){t.target.composing||(n.nonce=t.target.value)}}}),n._v(" "),e("button",{on:{click:n.calculateHash}})])},staticRenderFns:[]};var c=e("VU/8")({name:"App",data:function(){return{hash:""}},methods:{calculateHash:function(){this.hash=this.$store.state.block.getters.calculateHash}},computed:{nonce:{get:function(){return this.$store.state.block.getters.nonce},set:function(n){this.$store.state.block.dispatch("changeNonce",n)}}}},a,!1,function(n){e("UGzD")},null,null).exports,s=(e("j1ja"),e("NYxO")),u=e("mP1F"),i=e.n(u);o.a.use(s.a);var r={state:{previousHash:null,timestamp:null,nonce:null,data:null},getters:{nonce:function(n){return n.nonce},calculateHash:function(n){return i()(n.previousHash+n.timestamp+n.nonce+n.data).toString()}},mutations:{changeNonce:function(n,t){n.nonce=t}},actions:{changeNonce:function(n,t){(0,n.commit)("changeNonce",t)}}},l=new s.a.Store({modules:{block:r,blockchain:{state:{blocks:[]},mutations:{verify:function(n){},push:function(n,t){n.blocks.push(t)}}}}});o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:c},template:"<App/>",store:l})},UGzD:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.350e533e416ed531016d.js.map