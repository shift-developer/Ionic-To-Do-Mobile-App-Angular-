(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return a}));const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:i})},notification(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{n.selection()},s=()=>{n.selectionStart()},o=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},c=t=>{n.impact(t)}},"6i10":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(t,e,i)=>{const n=t*e/i-t+"ms",r=2*Math.PI*e/i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,i)=>{const n=e/i,r=t*n-t+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/i-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/i-t+"ms"}})}}},NqGI:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}));const n=async(t,e,i,n,r)=>{if(t)return t.attachViewToDom(e,i,r,n);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i;return n&&n.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("ePDZ"),r=i("ItpF"),s=i("2c9M");const o=(t,e)=>{let i,o;const a=(t,n,r)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,n);s&&e(s)?s!==i&&(l(),c(s,r)):l()},c=(t,e)=>{i=t,o||(o=i);const r=i;Object(n.g)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!i)return;const e=i;Object(n.g)(()=>e.classList.remove("ion-activated")),t&&o!==i&&i.click(),i=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,s.a),onMove:t=>a(t.currentX,t.currentY,s.b),onEnd:()=>{l(!0),Object(s.e)(),o=void 0}})}},VnTo:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("mrSG"),r=i("TEn/"),s=i("fXoL"),o=i("Z16M"),a=i("tyNb"),c=i("ofXK");let l=(()=>{class t{transform(t,e=!0){return t.filter(t=>t.terminada===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Ib({name:"filtroCompletado",type:t,pure:!1}),t})();function u(t,e){if(1&t){const t=s.Nb();s.Mb(0,"ion-item-sliding"),s.Mb(1,"ion-item",2),s.Ub("click",(function(){s.dc(t);const i=e.$implicit;return s.Wb().listaSeleccionada(i)})),s.Mb(2,"ion-label"),s.hc(3),s.Lb(),s.Mb(4,"ion-note",3),s.hc(5),s.Lb(),s.Lb(),s.Mb(6,"ion-item-options",4),s.Mb(7,"ion-item-option",5),s.Ub("click",(function(){s.dc(t);const i=e.$implicit;return s.Wb().borrarLista(i)})),s.Kb(8,"ion-icon",6),s.Lb(),s.Lb(),s.Mb(9,"ion-item-options",7),s.Mb(10,"ion-item-option",8),s.Ub("click",(function(){s.dc(t);const i=e.$implicit;return s.Wb().editarLista(i)})),s.Kb(11,"ion-icon",9),s.Lb(),s.Lb(),s.Lb()}if(2&t){const t=e.$implicit;s.zb(3),s.jc(" ",t.titulo," "),s.zb(2),s.jc("",t.items.length," items")}}let d=(()=>{class t{constructor(t,e,i){this.deseosService=t,this.router=e,this.alertCtrl=i,this.terminada=!0}ngOnInit(){}listaSeleccionada(t){this.router.navigateByUrl(this.terminada?"/tabs/tab2/agregar/"+t.id:"/tabs/tab1/agregar/"+t.id)}borrarLista(t){this.deseosService.borrarLista(t)}editarLista(t){return Object(n.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"Editar lista",inputs:[{name:"titulo",type:"text",value:t.titulo,placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:t=>{this.lista.closeSlidingItems()}},{text:"Actualizar",handler:e=>{0!==e.titulo.lenght&&(t.titulo=e.titulo,this.deseosService.guardarStorage(),this.lista.closeSlidingItems())}}]})).present(),this.deseosService.editarLista(t)}))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(o.a),s.Jb(a.g),s.Jb(r.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-listas"]],viewQuery:function(t,e){var i;1&t&&s.kc(r.s,!0),2&t&&s.cc(i=s.Vb())&&(e.lista=i.first)},inputs:{terminada:"terminada"},decls:3,vars:4,consts:[["color","dark"],[4,"ngFor","ngForOf"],["color","dark","detail","",3,"click"],["slot","end","color","tertiary"],["side","end"],["color","danger",3,"click"],["name","close","slot","icon-only"],["side","start"],["color","tertiary",3,"click"],["name","create","slot","icon-only"]],template:function(t,e){1&t&&(s.Mb(0,"ion-list",0),s.gc(1,u,12,2,"ion-item-sliding",1),s.Xb(2,"filtroCompletado"),s.Lb()),2&t&&(s.zb(1),s.bc("ngForOf",s.Yb(2,1,e.deseosService.listas,e.terminada)))},directives:[r.s,c.h,r.q,r.n,r.r,r.u,r.p,r.o,r.l],pipes:[l],styles:[""]}),t})()},Z16M:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));class n{constructor(t){this.titulo=t,this.creadaEn=new Date,this.terminada=!1,this.items=[],this.id=(new Date).getTime()}}var r=i("fXoL");let s=(()=>{class t{constructor(){this.listas=[],this.cargarStorage()}crearLista(t){const e=new n(t);return this.listas.push(e),this.guardarStorage(),e.id}obtenerLista(t){return t=Number(t),this.listas.find(e=>e.id===t)}guardarStorage(){localStorage.setItem("data",JSON.stringify(this.listas))}cargarStorage(){localStorage.getItem("data")&&(this.listas=JSON.parse(localStorage.getItem("data")))}borrarLista(t){this.listas=this.listas.filter(e=>e.id!==t.id),this.guardarStorage()}editarLista(t){this.listas=this.listas}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hcCc:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return a}));const n=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,i,n)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,i,n)}return!1}},j1ZV:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("ofXK"),r=i("TEn/"),s=i("fXoL");let o=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)}}),t})(),a=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[n.b,r.B,o]]}),t})()}}]);