(function(){"use strict";var t={4690:function(t,e,n){var i=n(9242),s=n(3396),a=n(4870),o=n(7139);const r={class:"content"};var c={__name:"NumberBox",props:{count:Number},emits:["update"],setup(t,{emit:e}){const n=t,i=()=>{e("update",n.count+1)},a=()=>{e("update",n.count-1)};return(t,e)=>((0,s.wg)(),(0,s.iD)("span",null,[(0,s._)("span",{class:(0,o.C_)(["number-box",n.count>0?"not-empty":""]),onClick:i},[(0,s._)("span",r,(0,o.zw)(n.count),1)],2),(0,s._)("span",{class:(0,o.C_)(["number-box-minus",0==n.count?"hidden":""]),onClick:a},"-",2)]))}},u=n(89);const l=(0,u.Z)(c,[["__scopeId","data-v-12926d6d"]]);var d=l;const p={singular:"cup",plural:"cups"},g={singular:"teaspoon",plural:"teaspoons",short:"tsp"},m={singular:"tablespoon",plural:"tablespoons",short:"Tbsp"},f={singular:"",plural:""},v={singular:"slice",plural:"slices"};var _={CUPS:p,TEASPOONS:g,TABLESPOONS:m,WHOLE:f,SLICE:v};const h={FLOUR:"flour",BAKING_POWDER:"baking powder",SALT:"salt",WHITE_SUGAR:"white sugar",MILK:"milk",EGG:"egg",BUTTER:"butter",CINNAMON:"cinnamon",BREAD:"bread",CANOLA_OIL:"Canola Oil"};var L=h;const S=[{ingredient:L.FLOUR,quantity:1.5,unit:_.CUPS},{ingredient:L.BAKING_POWDER,quantity:3.5,unit:_.TEASPOONS},{ingredient:L.SALT,quantity:.25,unit:_.TEASPOONS},{ingredient:L.WHITE_SUGAR,quantity:1,unit:_.TABLESPOONS},{ingredient:L.MILK,quantity:1.25,unit:_.CUPS},{ingredient:L.EGG,quantity:1,unit:_.WHOLE},{ingredient:L.BUTTER,quantity:3,unit:_.TABLESPOONS}],O=[{ingredient:L.MILK,quantity:.5,unit:_.CUPS},{ingredient:L.EGG,quantity:3,unit:_.WHOLE},{ingredient:L.CINNAMON,quantity:.5,unit:_.TEASPOONS},{ingredient:L.BREAD,quantity:8,unit:_.SLICE},{ingredient:L.CANOLA_OIL,quantity:1,unit:_.TABLESPOONS},{ingredient:L.BUTTER,quantity:1,unit:_.CUPS}],b=["pancakes","french toast"];var I={getLists(){return b},getPancakesRecipe(){return S},getListForName(t){return"pancakes"===t?S:"french toast"===t?O:void 0}},w=n(65);const C=(0,w.MT)({state:{selectedItem:"pancakes",chosenLists:{pancakes:0,"french toast":0}}});var E={store:C,getSelectedItem(){return C.state.selectedItem},changeSelectedItem(t){C.state.selectedItem=t},getChosenList(t){return C.state.chosenLists[t]},updateChosenList(t,e){console.log(`update ${t} with ${e}`),C.state.chosenLists[t]=e},getChosenLists(){return C.state.chosenLists}};const T=t=>((0,s.dD)("data-v-1b165e6c"),t=t(),(0,s.Cn)(),t),y={class:"master-list"},A=T((()=>(0,s._)("h2",null,"Lists",-1))),N=["onClick"];var U={__name:"MasterList",setup(t){const e=t=>{E.changeSelectedItem(t)};return(t,n)=>((0,s.wg)(),(0,s.iD)("div",y,[A,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,a.SU)(I).getLists(),((t,n)=>((0,s.wg)(),(0,s.iD)("span",{class:(0,o.C_)(["list",(0,a.SU)(E).getSelectedItem()==t?"selected":""]),key:n},[(0,s._)("label",{onClick:n=>e(t)},(0,o.zw)(t),9,N),(0,s.Wm)(d,{count:(0,a.SU)(E).getChosenList(t),onUpdate:e=>(0,a.SU)(E).updateChosenList(t,e)},null,8,["count","onUpdate"])],2)))),128))]))}};const k=(0,u.Z)(U,[["__scopeId","data-v-1b165e6c"]]);var D=k;const P={text:"",decimal:0},R={text:"¼",decimal:.25},q={text:"½",decimal:.5},x={text:"¾",decimal:.75},H={text:"⅓",decimal:.33},B={text:"⅔",decimal:.66},W=(t,e)=>{const n=t.decimal+e.decimal;let i=n/1;const s=n%1;let a;return s<R.decimal?a=R:s<H.decimal?a=H:s<q.decimal?a=q:s<B.decimal?a=B:s<x.decimal?a=x:(a=P,i++),a!==P?[i,a]:[i]},F=t=>{let e=Math.floor(t);const n=t-e;let i;return console.log(`whole number ${e}, fraction ${n}`),0===n?i=P:n<=R.decimal?i=R:n<=H.decimal?i=H:n<=q.decimal?i=q:n<=B.decimal?i=B:n<=x.decimal?i=x:(i=P,e++),i!==P?0==e?i.text:`${e}${i.text}`:e};var G={QUARTER:R,HALF:q,THREE_QUARTERS:x,THIRD:H,TWO_THIRDS:B,addFractions:W,getFractionValue:F};const M={class:"ingredient"};var $={__name:"LeafListItem",props:{item:{}},setup(t){const e=t,n=()=>{const t=e.item.ingredient,n=e.item.quantity;let i=G.getFractionValue(n);const s=e.item.unit.short?e.item.unit.short:e.item.unit.plural;return`${i} ${s} of ${t}`};return(t,e)=>((0,s.wg)(),(0,s.iD)("span",M,(0,o.zw)(n()),1))}};const K=(0,u.Z)($,[["__scopeId","data-v-ddd599c2"]]);var j=K;const z={class:"leaf-list"};var Z={__name:"LeafList",setup(t){const e=()=>I.getListForName(E.getSelectedItem());return(t,n)=>((0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h2",null,(0,o.zw)((0,a.SU)(E).getSelectedItem()),1),(0,s._)("div",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e(),((t,e)=>((0,s.wg)(),(0,s.j4)(j,{key:e,item:t},null,8,["item"])))),128))])]))}};const Y=(0,u.Z)(Z,[["__scopeId","data-v-3280b484"]]);var V=Y;const Q=t=>((0,s.dD)("data-v-436bdb56"),t=t(),(0,s.Cn)(),t),J=Q((()=>(0,s._)("h2",null,"Shopping List",-1))),X={class:"shopping-list"},tt={key:0};var et={__name:"ShoppingList",setup(t){const e=()=>{console.log("SHOPPING LIST");const t=I.getLists(),e=[];for(let n of t){const t=E.getChosenList(n);console.log(`${n} : ${t}`);const i=I.getListForName(n);console.log(i);for(let n of i){const i=n.ingredient;console.log(i);const s=e.find((t=>t.ingredient===i)),a=t*n.quantity;a>0&&(s?s.count=s.count+a:e.push({ingredient:i,count:a,unit:n.unit}))}}return e};return(t,n)=>((0,s.wg)(),(0,s.iD)("div",null,[J,(0,s._)("div",X,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e(),((t,e)=>((0,s.wg)(),(0,s.iD)("span",{key:e,class:"item"},(0,o.zw)(t.ingredient)+" - "+(0,o.zw)((0,a.SU)(G).getFractionValue(t.count))+" "+(0,o.zw)(t.unit.short?t.unit.short:t.unit.plural),1)))),128)),0===e().length?((0,s.wg)(),(0,s.iD)("span",tt,"None, add a list.")):(0,s.kq)("",!0)])]))}};const nt=(0,u.Z)(et,[["__scopeId","data-v-436bdb56"]]);var it=nt;const st=t=>((0,s.dD)("data-v-3cbaccba"),t=t(),(0,s.Cn)(),t),at=st((()=>(0,s._)("h1",null,"A Master List",-1))),ot={class:"container"},rt={class:"right"},ct={class:"left"};var ut={__name:"App",setup(t){return(t,e)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[at,(0,s._)("div",ot,[(0,s._)("div",rt,[(0,s.Wm)(it)]),(0,s._)("div",ct,[(0,s.Wm)(D),(0,s.Wm)(V)])])],64))}};const lt=(0,u.Z)(ut,[["__scopeId","data-v-3cbaccba"]]);var dt=lt;const pt=(0,w.MT)({modules:{ui:E.store}});var gt=pt;(0,i.ri)(dt).use(gt).mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,a){if(!i){var o=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],a=t[l][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(r=!1,a<o&&(o=a));if(r){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[i,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,o=i[0],r=i[1],c=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var l=c(n)}for(e&&e(i);u<o.length;u++)a=o[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},i=self["webpackChunka_mans_shopping_list"]=self["webpackChunka_mans_shopping_list"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4690)}));i=n.O(i)})();
//# sourceMappingURL=app.15731e4a.js.map