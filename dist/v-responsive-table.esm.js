"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e={exports:{}};function t(e,t,n,r,i,o,l,s,a,d){"boolean"!=typeof l&&(a=s,s=l,l=!1);const c="function"==typeof n?n.options:n;let u;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),r&&(c._scopeId=r),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):t&&(u=l?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),u)if(c.functional){const e=c.render;c.render=function(t,n){return u.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,u):[u]}return n}!function(e){function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){s=!0,i=e}finally{try{l||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var r,i,o,l,s=null,a="number"==typeof t?t:(i=(r=n(String(t).split(/(ms|s)/i),2))[0],l=void 0===(o=r[1])?"ms":o,Number(i)*{ms:1,s:1e3}[l]),d=function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=function(){s=null,e.apply(t,r)};clearTimeout(s),(s=setTimeout(o,a))||e.apply(this,r)};return d.cancel=function(){clearTimeout(s),s=null},d}function o(e){return e.map((function(e){return e.toLowerCase()}))}function l(e,t){var n=(e.getNamedItem("debounce-events")||{}).value,r=void 0!==n&&n;return o(r?r.split(","):function(e){return Array.isArray(e)?e:null==e?[]:[e]}(t))}function s(e){return""===e}function a(e,t){return"Enter"===e&&(!t.lock||t.unlock)}function d(e,t,n){return s(e)&&n.fireonempty&&("Enter"===t||" "===t)}function c(e){var t=n(String(e).split("."),1)[0];return Number(t)>=3?"mounted":"bind"}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.lock,o=void 0!==r&&r,u=n.listenTo,f=void 0===u?"keyup":u,p=n.defaultTime,h=void 0===p?"300ms":p,v=n.fireOnEmpty,y=void 0!==v&&v,g=n.cancelOnEmpty,b=void 0!==g&&g,m=n.trim,w=void 0!==m&&m;return t({},c(e),(function(e,t){var n=t.value,r=t.arg,c=void 0===r?h:r,u=t.modifiers,p=Object.assign({lock:o,trim:w,fireonempty:y,cancelonempty:b},u),v=l(e.attributes,f),g=i((function(e){n(e.target.value,e)}),c);function m(e){var t=p.trim?e.target.value.trim():e.target.value;s(t)&&p.cancelonempty?g.cancel():a(e.key,p)||d(t,e.key,p)?(g.cancel(),n(e.target.value,e)):g(e)}v.forEach((function(t){e.addEventListener(t,m)}))}))}u();var f={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive("debounce",u(e.version,t))}};e.debounce=i,e.default=f,e.getDirective=u,Object.defineProperty(e,"__esModule",{value:!0})}(e.exports);const n={props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},strokewidth:{type:[Number,String],default:1},fill:{type:String,default:"currentColor"},secondaryfill:{type:String}},computed:{_secondaryfill(){return this.secondaryfill||this.fill}}};var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",width:e.width,height:e.height}},[n("g",{attrs:{"stroke-width":"1",fill:e._secondaryfill,stroke:e._secondaryfill}},[n("line",{attrs:{x1:"11.5",y1:"6",x2:"0.5",y2:"6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}}),n("polyline",{attrs:{points:"7.5 2 11.5 6 7.5 10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",stroke:e.fill}})])])};r._withStripped=!0;const i=t({render:r,staticRenderFns:[]},undefined,n,undefined,false,undefined,!1,void 0,void 0,void 0);const o={props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},strokewidth:{type:[Number,String],default:1},fill:{type:String,default:"currentColor"},secondaryfill:{type:String}},computed:{_secondaryfill(){return this.secondaryfill||this.fill}}};var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",width:e.width,height:e.height}},[n("g",{attrs:{"stroke-width":"1",fill:e._secondaryfill,stroke:e._secondaryfill}},[n("line",{attrs:{x1:"0.5",y1:"6",x2:"11.5",y2:"6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}}),n("polyline",{attrs:{points:"4.5 10 0.5 6 4.5 2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",stroke:e.fill}})])])};l._withStripped=!0;const s=t({render:l,staticRenderFns:[]},undefined,o,undefined,false,undefined,!1,void 0,void 0,void 0);const a={props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},strokewidth:{type:[Number,String],default:1},fill:{type:String,default:"currentColor"},secondaryfill:{type:String}},computed:{_secondaryfill(){return this.secondaryfill||this.fill}}};var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:e.width,height:e.height}},[n("g",{attrs:{"stroke-width":"1",fill:e._secondaryfill,stroke:e._secondaryfill}},[n("polyline",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"15.5,5.5 8,10.5 0.5,5.5 ",stroke:e.fill}})])])};d._withStripped=!0;const c=t({render:d,staticRenderFns:[]},undefined,a,undefined,false,undefined,!1,void 0,void 0,void 0);const u={name:"VResponsiveTableCell",props:{cell:{type:Object,default:{}}}};var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.cell&&e.cell.onClick?n("button",{staticClass:"responsive-table--button",attrs:{type:"button"},on:{click:e.cell.onClick}},[e._v("\n  "+e._s(e.cell.label)+"\n")]):e.cell&&e.cell.href?n("button",{staticClass:"responsive-table--button",attrs:{type:"button",href:e.cell.href}},[e._v("\n  "+e._s(e.cell.label)+"\n")]):e.cell?n("span",{domProps:{innerHTML:e._s(e.cell.label)}}):e._e()};f._withStripped=!0;const p={name:"VResponsiveTableColumn",components:{VResponsiveTableCell:t({render:f,staticRenderFns:[]},undefined,u,undefined,false,undefined,!1,void 0,void 0,void 0),IconChevron:c},props:{header:{type:String,default:""},col:{type:[Object,Array],default:{}},isFirst:{type:Boolean,default:!1}},computed:{classes(){if(Array.isArray(this.col))for(const e of this.col)if(e.href||e.onClick)return"responsive-table--cta";return this.col.href||this.col.onClick?"responsive-table--cta":""},formattedHeader(){return this.header.length?this.header+":":""}}};var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{class:e.classes,attrs:{"data-th":e.formattedHeader}},[e.isFirst?n("icon-chevron",{staticClass:"responsive-table--collapse-arrow",attrs:{width:16,height:16}}):e._e(),e._v(" "),Array.isArray(e.col)?e._l(e.col,(function(e,t){return n("v-responsive-table-cell",{key:t,attrs:{cell:e}})})):n("v-responsive-table-cell",{attrs:{cell:e.col}})],2)};h._withStripped=!0;const v={name:"VResponsiveTableRow",props:{row:{type:Array,default:()=>[]},header:{type:String,default:""}},components:{VResponsiveTableColumn:t({render:h,staticRenderFns:[]},undefined,p,undefined,false,undefined,!1,void 0,void 0,void 0)}};var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"responsive-table-row"},e._l(e.row,(function(t,r){return n("v-responsive-table-column",{key:r,attrs:{header:e.header,col:t,"is-first":0===r}})})),1)};y._withStripped=!0;const g={name:"VResponsiveTable",components:{IconArrowLeft:s,IconArrowRight:i,VResponsiveTableRow:t({render:y,staticRenderFns:[]},undefined,v,undefined,false,undefined,!1,void 0,void 0,void 0)},props:{headers:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},pages:{type:Number,default:0},noDataText:{type:String,default:"<center>No data yet.</center>"}},data:()=>({collapseTable:!1,currentPage:1}),computed:{classes(){return{"responsive-table":!0,"responsive-table--collapse":this.collapseTable}}},created(){const e=this.onResize();e(),window.addEventListener("resize",e)},destroyed(){window.removeEventListener("resize",this.onResize())},methods:{onResize(){return e.exports.debounce((()=>{this.collapseTable=!1,setTimeout((()=>{this.collapseTable=this.$refs.table.scrollWidth>this.$refs.table.clientWidth}))}),100)},toggleRow(e){if(!this.collapseTable)return;const t=this.$refs.table.querySelectorAll(".responsive-table--open"),n=e.target.closest("tr");n&&n.classList.toggle("responsive-table--open"),t&&t.length&&t.forEach((e=>e.classList.remove("responsive-table--open")))},emitPage(e){e===this.currentPage||e<1||e>this.pages||(this.currentPage=e,this.$emit("page",e))}}};var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"table",class:e.classes},[n("table",[n("thead",[n("tr",e._l(e.headers,(function(t,r){return n("th",{key:r},[e._v("\n          "+e._s(t||" ")+"\n        ")])})),0)]),e._v(" "),e.rows.length?n("tbody",{on:{click:e.toggleRow}},e._l(e.rows,(function(t,r){return n("v-responsive-table-row",{key:r,attrs:{row:t,header:e.headers[r]}})})),1):n("tbody",[n("tr",[n("td",{attrs:{colspan:e.headers.length},domProps:{innerHTML:e._s(e.noDataText)}})])])]),e._v(" "),n("nav",{staticClass:"pagination"},[e.pages>1?n("ul",[e.currentPage>1?n("li",{attrs:{"aria-label":"Previous",role:"button"},on:{click:function(t){return e.emitPage(e.currentPage-1)}}},[n("icon-arrow-left",{attrs:{width:12,height:12}})],1):e._e(),e._v(" "),e._l(e.pages,(function(t){return n("li",{key:t,class:e.currentPage===t?"responsive-table--active":"",on:{click:function(n){return e.emitPage(t)}}},[e._v("\n        "+e._s(t)+"\n      ")])})),e._v(" "),e.currentPage<e.pages?n("li",{attrs:{"aria-label":"Next",role:"button"},on:{click:function(t){return e.emitPage(e.currentPage+1)}}},[n("icon-arrow-right",{attrs:{width:12,height:12}})],1):e._e()],2):e._e()])])};b._withStripped=!0;const m=t({render:b,staticRenderFns:[]},undefined,g,undefined,false,undefined,!1,void 0,void 0,void 0);function w(e){w.installed||(w.installed=!0,e.component("VResponsiveTable",m))}const _={install:w};let k=null;"undefined"!=typeof window?k=window.Vue:"undefined"!=typeof global&&(k=global.Vue),k&&k.use(_);export{m as default,w as install};
