(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{489:function(t,e,n){var content=n(521);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("26a5e9b6",content,!0,{sourceMap:!1})},493:function(t,e,n){var content=n(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("11adb928",content,!0,{sourceMap:!1})},494:function(t,e,n){var content=n(538);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("5e68d38f",content,!0,{sourceMap:!1})},501:function(t,e,n){"use strict";n.r(e);n(16);var l={inheritAttrs:!1,props:{label:{type:String,default:""},message:{type:String,default:""},value:{type:[String,Number],default:""},placeholder:{type:String,default:""}}},o=(n(537),n(51)),r=n(59),c=n.n(r),v=n(478),h=n(194),d=n(120),f=n(446),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",t._g(t._b({staticClass:"setup-item text-base px-6 py-5"},"v-list-item",t.$attrs,!1),t.$listeners),[n("div",{staticClass:"setup-title"},[t._v(t._s(t.label))]),t._v(" "),n("v-spacer"),t._v(" "),t._t("default",[t.value?n("div",{staticClass:"setup-value font-light",domProps:{innerHTML:t._s(t.value)}}):n("div",{staticClass:"setup-value font-light opacity-50"},[t._v(t._s(t.placeholder))]),t._v(" "),n("v-icon",{staticClass:"-mr-1",attrs:{color:t.$attrs.disabled?"grey lighten-2":"grey lighten-1"}},[t._v("mdi-chevron-right")])])],2),t._v(" "),t._t("message",[t.message?n("div",{staticClass:"mx-6 -mt-2 mb-5 text-sm grey--text",domProps:{innerHTML:t._s(t.message)}}):t._e()]),t._v(" "),n("v-divider",{staticClass:"mx-6"})],2)}),[],!1,null,"bf47e2c8",null);e.default=component.exports;c()(component,{VDivider:v.a,VIcon:h.a,VListItem:d.a,VSpacer:f.a})},514:function(t,e,n){"use strict";n.r(e);n(62),n(88),n(78),n(44),n(16),n(27);var l={inheritAttrs:!1,props:{value:{type:Array,default:null},items:{type:Array,default:function(){return[]}},itemText:{type:String,default:"text"},itemValue:{type:String,default:"value"},expandMultiple:{type:Boolean,default:!1},level:{type:Number,default:3}},data:function(){return{sheet:!1,expand:void 0}},computed:{selectedItems:function(){var t=this,e=this.value&&this.value.length&&this.items.find((function(e){return e[t.itemValue]===t.value[0]})),n=e&&this.value.length>1&&e.children.find((function(e){return e[t.itemValue]===t.value[1]})),l=n&&this.value.length>2&&n.children.find((function(e){return e[t.itemValue]===t.value[2]}));return e&&n&&l?[e,n,l]:e&&n?[e,n]:[]},text:function(){var t=this;return this.selectedItems.length?this.selectedItems.map((function(e){return e[t.itemText]})).join("/"):""}},watch:{sheet:function(t){t&&this.$refs.activator&&(this.$refs.activator.blur(),this.$refs.activator.resetValidation())}},methods:{select:function(data){var t=this;this.$emit("input",data.map((function(e){return e[t.itemValue]}))),setTimeout(this.reset,150),this.sheet=!1},close:function(){var t=this;setTimeout(this.reset,150),setTimeout((function(){!t.value&&t.$refs.activator&&t.$refs.activator.blur()})),this.sheet=!1},reset:function(){if(this.selectedItems.length){var t=this.items.indexOf(this.selectedItems[0]);this.expand=this.expandMultiple?[t]:t}else this.expand=this.expandMultiple?[]:void 0}},created:function(){this.reset()}},o=(n(520),n(51)),r=n(59),c=n.n(r),v=n(786),h=n(946),d=n(119),f=n(506),m=n(947),x=n(948),_=n(949),y=n(950),w=n(194),k=n(42),V=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[t._t("activator",[n("v-autocomplete",t._g(t._b({ref:"activator",attrs:{value:t.text?0:void 0,items:[0],readonly:"","append-icon":"mdi-chevron-right"},scopedSlots:t._u([{key:"selection",fn:function(){return[n("div",{staticClass:"selection-slot"},[t._v(t._s(t.text))])]},proxy:!0}],null,!0)},"v-autocomplete",Object.assign({},o,t.$attrs),!1),l))],null,{on:l,attrs:o,text:t.text})]}}],null,!0),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),n("v-sheet",{staticClass:"text-center h-full overflow-auto picker-content"},[n("v-toolbar",{attrs:{flat:"",tile:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.close}},[n("v-icon",[t._v("mdi-window-close")])],1)],1),t._v(" "),n("v-expansion-panels",{staticClass:"px-4",attrs:{accordion:"",multiple:t.expandMultiple},model:{value:t.expand,callback:function(e){t.expand=e},expression:"expand"}},t._l(t.items,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticClass:"px-1"},[t._v(t._s(e[t.itemText]))]),t._v(" "),3===t.level?n("v-expansion-panel-content",{staticClass:"px-1"},[t._l(e.children,(function(l,o){return n("div",{key:o,staticClass:"text-left -mx-6"},[n("div",{class:["text-base","font-light","py-1",{"pt-4":o>0}]},[t._v("\n              "+t._s(l[t.itemText])+"\n            ")]),t._v(" "),n("div",t._l(l.children,(function(o,r){return n("v-chip",{key:r,staticClass:"font-light mr-2 mb-2",attrs:{label:"",color:t.value&&t.value.length&&t.value[0]===e[t.itemValue]&&t.value[1]===l[t.itemValue]&&t.value[2]===o[t.itemValue]?"primary":""},on:{click:function(n){return t.select([e,l,o])}}},[t._v("\n                "+t._s(o[t.itemText])+"\n              ")])})),1)])})),t._v(" "),n("div",{staticClass:"pb-4"})],2):2===t.level?n("v-expansion-panel-content",{staticClass:"px-1"},[n("div",{staticClass:"text-left -mx-6"},t._l(e.children,(function(l,o){return n("v-chip",{key:o,staticClass:"font-light mr-2 mb-2",attrs:{label:"",color:t.value&&t.value.length&&t.value[0]===e[t.itemValue]&&t.value[1]===l[t.itemValue]?"primary":""},on:{click:function(n){return t.select([e,l])}}},[t._v("\n              "+t._s(l[t.itemText])+"\n            ")])})),1)]):t._e()],1)})),1)],1)],1)}),[],!1,null,"77466f10",null);e.default=component.exports;c()(component,{VAutocomplete:v.a,VBottomSheet:h.a,VBtn:d.a,VChip:f.a,VExpansionPanel:m.a,VExpansionPanelContent:x.a,VExpansionPanelHeader:_.a,VExpansionPanels:y.a,VIcon:w.a,VSheet:k.a,VToolbar:V.a})},520:function(t,e,n){"use strict";n(489)},521:function(t,e,n){(e=n(9)(!1)).push([t.i,"div[data-v-77466f10] .v-expansion-panel:before{box-shadow:none}div[data-v-77466f10] .picker-content{padding-top:56px}div[data-v-77466f10] .picker-content .v-toolbar{position:fixed;top:0;left:0;width:100%;z-index:10;background:#fff}div[data-v-77466f10] .selection-slot{padding:8px 0;color:rgba(0,0,0,.87)}div[data-v-77466f10] .selection-slot+input{position:absolute;left:0;top:0;right:0;bottom:0;max-height:none}",""]),t.exports=e},535:function(t,e,n){"use strict";n(493)},536:function(t,e,n){(e=n(9)(!1)).push([t.i,"div[data-v-6690f4ca] .v-expansion-panel:before{box-shadow:none}div[data-v-6690f4ca] .picker-content{padding-top:56px}div[data-v-6690f4ca] .picker-content .v-toolbar{position:fixed;top:0;left:0;width:100%;z-index:10;background:#fff}div[data-v-6690f4ca] .selection-slot{padding:8px 0;color:rgba(0,0,0,.87)}div[data-v-6690f4ca] .selection-slot+input{position:absolute;left:0;top:0;right:0;bottom:0;max-height:none}",""]),t.exports=e},537:function(t,e,n){"use strict";n(494)},538:function(t,e,n){(e=n(9)(!1)).push([t.i,".setup-item[data-v-bf47e2c8]{min-height:0;align-items:stretch}.setup-item .setup-title[data-v-bf47e2c8]{white-space:nowrap;padding-right:20px;font-weight:400}.setup-item .setup-value[data-v-bf47e2c8]{text-align:right}.setup-item .setup-value[data-v-bf47e2c8] span{display:inline-block;word-break:keep-all}",""]),t.exports=e},539:function(t,e){},554:function(t,e,n){"use strict";n.r(e);n(19),n(67),n(62),n(24),n(88),n(78),n(44),n(134),n(49),n(27);var l=n(12),o=n(480),r=n.n(o),c={inheritAttrs:!1,props:{value:{type:Array,default:null},items:{type:Array,default:function(){return[]}},itemText:{type:String,default:"text"},itemValue:{type:String,default:"value"},expandMultiple:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},data:function(){return{sheet:!1,step:1,expand:void 0,level1:null,level2:null,level3:[],pickall:!1,items2:["foo","bar","fizz","buzz","fizzbuzz","foobar"],value2:["foo","bar","fizz"]}},computed:{selectedItems:function(){var t=this,e=this.value&&this.value.length&&this.items.find((function(e){return e[t.itemValue]===t.value[0]})),n=e&&this.value.length>1&&e.children.find((function(e){return e[t.itemValue]===t.value[1]})),l=n&&this.value.length>2&&n.children.filter((function(e){return t.multiple?t.value[2].includes(e[t.itemValue]):e[t.itemValue]===t.value[2]}));return e&&n&&l.length?[e,n,l]:[]},text:function(){var t=this;if(this.selectedItems.length){var e=Object(l.a)(this.selectedItems,3),n=e[0],o=e[1],r=e[2];return o.children.length>r.length?"".concat(n[this.itemText],"/").concat(o[this.itemText],"/").concat(r.map((function(e){return e[t.itemText]})).join(",")):"".concat(n[this.itemText],"/").concat(o[this.itemText])}return""},html:function(){var t=this;if(this.selectedItems.length){var e=Object(l.a)(this.selectedItems,3),n=e[0],o=e[1],r=e[2];return o.children.length>r.length?"<span>".concat(n[this.itemText],"</span>/<span>").concat(o[this.itemText],"</span>/").concat(r.map((function(e,i){return"<span>".concat(e[t.itemText]+(i<r.length-1?",":""),"</span>")})).join("")):"".concat(n[this.itemText],"/").concat(o[this.itemText])}return""},level3Values:function(){var t=this;return this.level3.map((function(e){return e[t.itemValue]}))}},watch:{sheet:function(t){t&&this.$refs.activator&&(this.$refs.activator.blur(),this.$refs.activator.resetValidation())},pickall:function(t){t?this.level3=r()(this.level2.children):this.level3.length===this.level2.children.length&&(this.level3=[])},level3:function(t){this.pickall=t.length===this.level2.children.length}},methods:{select:function(t,e){!this.level2||this.level2[this.itemValue]===e[this.itemValue]&&this.level1[this.itemValue]===t[this.itemValue]||(this.level3=[]),this.level1=r()(t),this.level2=r()(e),this.step=2},select3:function(t){var e=this;if(this.multiple){var n=this.level3Values.indexOf(t[this.itemValue]);n>-1?this.level3.splice(n,1):(this.level3.push(r()(t)),this.level3.sort((function(a,b){return a[e.itemValue]-b[e.itemValue]})))}else this.level3=[t],this.confirm()},confirm:function(){var t=this;this.$emit("input",[this.level1[this.itemValue],this.level2[this.itemValue],this.multiple?this.level3.map((function(e){return e[t.itemValue]})):this.level3[0][this.itemValue]]),this.sheet=!1},close:function(){var t=this;setTimeout(this.reset,150),setTimeout((function(){!t.value&&t.$refs.activator&&t.$refs.activator.blur()})),this.sheet=!1},reset:function(){if(this.selectedItems.length){var t=Object(l.a)(this.selectedItems,3),e=t[0],n=t[1],o=t[2];this.level1=r()(e),this.level2=r()(n),this.level3=r()(o),this.step=2;var c=this.items.indexOf(e);this.expand=this.expandMultiple?[c]:c}else this.expand=this.expandMultiple?[]:void 0}},created:function(){this.reset()}},v=(n(535),n(51)),h=n(59),d=n.n(h),f=n(786),m=n(946),x=n(119),_=n(951),y=n(506),w=n(947),k=n(948),V=n(949),C=n(950),j=n(194),O=n(42),S=n(446),$=n(43),T=n(207),P=n(200),D=n(470),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[t._t("activator",[n("v-autocomplete",t._g(t._b({ref:"activator",attrs:{value:t.text?0:void 0,items:[0],readonly:"","append-icon":"mdi-chevron-right"},scopedSlots:t._u([{key:"selection",fn:function(){return[n("div",{staticClass:"selection-slot"},[t._v(t._s(t.text))])]},proxy:!0}],null,!0)},"v-autocomplete",Object.assign({},o,t.$attrs),!1),l))],null,{on:l,attrs:o,text:t.text,html:t.html})]}}],null,!0),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),n("v-sheet",{staticClass:"text-center h-full overflow-auto picker-content"},[n("v-toolbar",{attrs:{flat:"",tile:""}},[1===t.step?[n("v-btn",{attrs:{icon:""},on:{click:t.close}},[n("v-icon",[t._v("mdi-window-close")])],1)]:[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.step=1}}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),n("v-toolbar-title",[n("div",{staticClass:"text-base"},[t._v(t._s(t.level1[t.itemText])+"/"+t._s(t.level2[t.itemText]))])])]],2),t._v(" "),n("v-window",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-window-item",{attrs:{value:1}},[n("v-expansion-panels",{staticClass:"px-4",attrs:{accordion:"",multiple:t.expandMultiple},model:{value:t.expand,callback:function(e){t.expand=e},expression:"expand"}},t._l(t.items,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticClass:"px-1"},[t._v(t._s(e[t.itemText]))]),t._v(" "),n("v-expansion-panel-content",{staticClass:"px-1"},[n("div",{staticClass:"text-left -mx-6"},t._l(e.children,(function(l,o){return n("v-chip",{key:o,staticClass:"font-light mr-2 mb-2",attrs:{label:"",color:t.level2&&t.level2[t.itemValue]===l[t.itemValue]&&t.level1[t.itemValue]===e[t.itemValue]?"primary":""},on:{click:function(n){return t.select(e,l)}}},[t._v("\n                  "+t._s(l[t.itemText])+"\n                ")])})),1)])],1)})),1)],1),t._v(" "),n("v-window-item",{attrs:{value:2}},[t.level2?n("div",{staticClass:"text-left px-6 py-6"},t._l(t.level2.children,(function(e,l){return n("v-chip",{key:l,staticClass:"font-light mr-2 mb-2",attrs:{label:"",color:t.level3Values&&t.level3Values.includes(e[t.itemValue])?"primary":""},on:{click:function(n){return t.select3(e)}}},[t._v("\n            "+t._s(e[t.itemText])+"\n          ")])})),1):t._e()])],1),t._v(" "),2===t.step&&t.multiple?n("v-sheet",{staticClass:"absolute left-0 bottom-0 w-full flex items-center px-6 py-3",attrs:{elevation:"1"}},[n("v-checkbox",{staticClass:"my-0 -ml-1",attrs:{dense:"","hide-details":""},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{staticClass:"-ml-1"},[t._v("全选")])]},proxy:!0}],null,!1,1184903712),model:{value:t.pickall,callback:function(e){t.pickall=e},expression:"pickall"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary",disabled:!this.level3.length},on:{click:t.confirm}},[t._v("确定")])],1):t._e()],1)],1)}),[],!1,null,"6690f4ca",null);e.default=component.exports;d()(component,{VAutocomplete:f.a,VBottomSheet:m.a,VBtn:x.a,VCheckbox:_.a,VChip:y.a,VExpansionPanel:w.a,VExpansionPanelContent:k.a,VExpansionPanelHeader:V.a,VExpansionPanels:C.a,VIcon:j.a,VSheet:O.a,VSpacer:S.a,VToolbar:$.a,VToolbarTitle:T.a,VWindow:P.a,VWindowItem:D.a})},589:function(t,e,n){var content=n(874);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0c4fdb57",content,!0,{sourceMap:!1})},746:function(t,e,n){"use strict";n.r(e);var l=n(8),o=n(1),r=n(480),c=n.n(r);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={inheritAttrs:!1,props:{value:{default:""},type:{type:String,default:"text"},textarea:{type:Boolean,default:!1},description:{type:String,default:""}},data:function(){return{sheet:!1,valid:!0,cloneValue:void 0}},computed:{slotProps:function(){return{attrs:h(h({},this.$attrs),{},{value:this.cloneValue}),on:{input:this.inputHandler}}}},methods:{close:function(){this.sheet=!1},confirm:function(){this.$refs.form.validate()&&(this.$emit("input",this.cloneValue),this.sheet=!1)},inputHandler:function(t){this.cloneValue=t}},watch:{sheet:function(t){t&&("object"===Object(l.a)(this.value)?this.cloneValue=c()(this.value):this.cloneValue=this.value,this.$refs.form&&this.$refs.form.resetValidation())}}},f=n(51),m=n(59),x=n.n(m),_=n(946),y=n(119),w=n(485),k=n(194),V=n(42),C=n(446),j=n(515),O=n(952),S=n(43),$=n(207),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[t._t("activator",[n("v-text-field",t._g(t._b({attrs:{rules:[],value:t.value,readonly:""}},"v-text-field",Object.assign({},o,t.$attrs),!1),l))],null,{on:l,attrs:o,value:t.value})]}}],null,!0),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),n("v-sheet",{staticClass:"h-full overflow-auto"},[n("v-toolbar",{attrs:{flat:"",tile:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.close}},[n("v-icon",[t._v("mdi-window-close")])],1),t._v(" "),n("v-toolbar-title",[n("div",{staticClass:"text-base"},[t._v(t._s(t.$attrs.label))])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"px-0 -mr-2",attrs:{text:"","min-width":56},on:{click:t.confirm}},[t._v("确定")])],1),t._v(" "),n("v-form",{ref:"form",staticClass:"pa-5",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("default",[t.textarea?n("v-textarea",t._b({attrs:{label:""},model:{value:t.cloneValue,callback:function(e){t.cloneValue=e},expression:"cloneValue"}},"v-textarea",t.$attrs,!1)):n("v-text-field",t._b({attrs:{label:"",type:t.type},model:{value:t.cloneValue,callback:function(e){t.cloneValue=e},expression:"cloneValue"}},"v-text-field",t.$attrs,!1))],null,t.slotProps),t._v(" "),t._t("description",[t.description?n("div",{staticClass:"pt-5 text-sm font-light text-gray-800",domProps:{innerHTML:t._s(t.description)}}):t._e()])],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBottomSheet:_.a,VBtn:y.a,VForm:w.a,VIcon:k.a,VSheet:V.a,VSpacer:C.a,VTextField:j.a,VTextarea:O.a,VToolbar:S.a,VToolbarTitle:$.a})},747:function(t,e,n){"use strict";n.r(e);n(27);var l={inheritAttrs:!1,props:["value"],computed:{value1:{get:function(){return this.value[0]},set:function(t){var e=this,n=parseFloat(t);this.$emit("input",[isNaN(n)?0:n,this.value[1]]),setTimeout((function(){!e.$refs.input2.valid&&e.$refs.input2.validate(!0)}))}},value2:{get:function(){return this.value[1]},set:function(t){var e=this,n=parseFloat(t);this.$emit("input",[this.value[0],isNaN(n)?0:n]),setTimeout((function(){!e.$refs.input1.valid&&e.$refs.input1.validate(!0)}))}}}},o=n(51),r=n(59),c=n.n(r),v=n(515),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-stretch"},[n("div",{staticClass:"flex-1"},[n("v-text-field",t._b({ref:"input1",attrs:{type:t.$attrs.type||"number",label:t.$attrs.label&&t.$attrs.label[0],placeholder:t.$attrs.placeholder&&t.$attrs.placeholder[0],rules:t.$attrs.rules?t.$attrs.rules[0]:[function(e){return e<=t.value2||"不能大于最大值"}]},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},"v-text-field",t.$attrs,!1))],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex-1"},[n("v-text-field",t._b({ref:"input2",attrs:{type:t.$attrs.type||"number",label:t.$attrs.label&&t.$attrs.label[1],placeholder:t.$attrs.placeholder&&t.$attrs.placeholder[1],rules:t.$attrs.rules?t.$attrs.rules[1]:[function(e){return e>=t.value1||"不能小于最小值"}]},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},"v-text-field",t.$attrs,!1))],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"mx-4 w-3 border-t border-gray-700",staticStyle:{"margin-top":"30px"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VTextField:v.a})},748:function(t,e,n){"use strict";n.r(e);n(134);var l=n(8),o=n(480),r=n.n(o),c={props:{value:{type:Array,default:function(){return[]}}},data:function(){return{sheet:!1,cloneValue:void 0,addSheet:!1,addValid:!0,company:""}},computed:{},methods:{close:function(){this.sheet=!1},confirm:function(){this.$emit("input",this.cloneValue),this.sheet=!1},remove:function(i){this.cloneValue.splice(i,1)},add:function(){this.company="",this.addSheet=!0,this.$refs.form&&this.$refs.form.resetValidation()},saveItem:function(){this.cloneValue.push(this.company),this.addSheet=!1}},watch:{sheet:function(t){t&&("object"===Object(l.a)(this.value)?this.cloneValue=r()(this.value):this.cloneValue=this.value)}}},v=n(51),h=n(59),d=n.n(h),f=n(195),m=n(946),x=n(119),_=n(448),y=n(478),w=n(485),k=n(194),V=n(196),C=n(120),j=n(86),O=n(474),S=n(42),$=n(446),T=n(515),P=n(43),D=n(207),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-bottom-sheet",{attrs:{fullscreen:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs;return[t._t("activator",[n("setup-item",t._g(t._b({attrs:{label:"竞价屏蔽",placeholder:"未设置"}},"setup-item",o,!1),l),[t.value&&t.value.length?n("div",[n("v-avatar",{attrs:{color:"primary",size:"24"}},[n("span",{staticClass:"text-sm text-white"},[t._v(t._s(t.value.length))])]),t._v(" "),n("v-icon",{staticClass:"-mr-1",attrs:{color:t.$attrs.disabled?"grey lighten-2":"grey lighten-1"}},[t._v("mdi-chevron-right")])],1):t._e()])],null,{on:l,attrs:o,value:t.value})]}}],null,!0),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[t._v(" "),n("v-sheet",{staticClass:"h-full overflow-auto"},[n("v-toolbar",{attrs:{flat:"",tile:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.close}},[n("v-icon",[t._v("mdi-window-close")])],1),t._v(" "),n("v-toolbar-title",[n("div",{staticClass:"text-base"},[t._v("竞价屏蔽")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"px-0 -mr-2",attrs:{text:"","min-width":56},on:{click:t.confirm}},[t._v("确定")])],1),t._v(" "),n("v-list",[t._l(t.cloneValue,(function(e,i){return[n("v-list-item",{key:i,staticClass:"px-6"},[n("v-list-item-content",{staticClass:"py-4"},[n("v-list-item-title",[n("span",{staticClass:"font-light"},[t._v(t._s(e))])])],1),t._v(" "),n("v-btn",{staticClass:"-mr-3",attrs:{icon:""},on:{click:function(e){return t.remove(i)}}},[n("v-icon",{attrs:{size:"20",color:"grey lighten-1"}},[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider",{key:"divider"+i,staticClass:"mx-6"})]})),t._v(" "),n("div",{staticClass:"mt-4 mx-6"},[n("v-btn",{attrs:{block:"",large:"",depressed:"",color:"primary"},on:{click:t.add}},[t._v("添加")])],1)],2)],1)],1),t._v(" "),n("v-bottom-sheet",{model:{value:t.addSheet,callback:function(e){t.addSheet=e},expression:"addSheet"}},[n("v-sheet",{staticClass:"px-6 py-6"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.addValid,callback:function(e){t.addValid=e},expression:"addValid"}},[n("v-text-field",{attrs:{label:"公司名称",required:"",hint:"请输入完整的招聘方名称","persistent-hint":"",rules:[function(){return!!t.company||"请填写"}]},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),t._v(" "),n("v-row",{staticClass:"mt-2"},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{block:"",depressed:"",large:""},on:{click:function(e){t.addSheet=!1}}},[n("span",{staticClass:"text-gray-500"},[t._v("取消")])])],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{block:"",depressed:"",large:"",color:"primary"},on:{click:t.saveItem}},[t._v("确定")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SetupItem:n(501).default}),d()(component,{VAvatar:f.a,VBottomSheet:m.a,VBtn:x.a,VCol:_.a,VDivider:y.a,VForm:w.a,VIcon:k.a,VList:V.a,VListItem:C.a,VListItemContent:j.b,VListItemTitle:j.d,VRow:O.a,VSheet:S.a,VSpacer:$.a,VTextField:T.a,VToolbar:P.a,VToolbarTitle:D.a})},873:function(t,e,n){"use strict";n(589)},874:function(t,e,n){(e=n(9)(!1)).push([t.i,".my-switch[data-v-5a012d16] .v-input--selection-controls__ripple:before{opacity:0}",""]),t.exports=e},875:function(t,e,n){"use strict";var l=n(539),o=n.n(l);e.default=o.a},876:function(t,e,n){var content=n(877);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("beda1088",content,!0,{sourceMap:!1})},877:function(t,e,n){(e=n(9)(!1)).push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),t.exports=e},961:function(t,e,n){"use strict";n.r(e);var l=n(1),o=n(80),r=n(746),c=n(747),v=n(748),h=n(501);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={components:{FormEditor:r.default,FormRangeField:c.default,SetupItem:h.default,SetupBlacklist:v.default},data:function(){return{matchActive:!1,matchDisabled:!1,jobCount:20,jobCountDisabled:!1,jobCountDisabledDialog:!1,jobName:"",jobType:null,workArea:["11","1101",["110101","110102"]],expectSalary:[40,50],blacklist:["中国石油化工集团公司","国家电网公司","中国工商银行股份有限公司","中国移动通信集团公司","中粮集团有限公司"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("options",["jobTypeOptions","areaOptions"])),methods:{jobCountClick:function(){this.jobCountDisabled&&(this.jobCountDisabledDialog=!0)}},watch:{matchActive:function(t){console.log("matchActive",t)},jobCount:function(t){console.log("jobCount",t)},jobName:function(t){console.log("jobName",t)},jobType:function(t){console.log("jobType",t)},workArea:function(t){console.log("workArea",t)},expectSalary:function(t){console.log("expectSalary",t)},blacklist:function(t){console.log("blacklist",t)}}},m=(n(873),n(51)),x=n(875),_=n(59),y=n.n(_),w=n(119),k=n(454),V=n(453),C=n(477),j=n(789),O=n(446),S=(n(209),n(210),n(588),n(876),n(750)),$=n(503),T=n(90),P=n(129),D=n(191),A=n(0);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var B=S.a.extend({name:"v-switch",directives:{Touch:T.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return I(I({},$.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",I(I({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",I({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",I({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(P.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(D.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===A.s.left&&this.isActive||t.keyCode===A.s.right&&!this.isActive)&&this.onChange()}}}),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"px-0 pt-1 pb-5"},[n("setup-item",{attrs:{label:"竞价开关"},scopedSlots:t._u([{key:"message",fn:function(){return[t.matchDisabled?n("div",{staticClass:"mx-6 -mt-2 mb-6 text-sm grey--text"},[t._v("\n        你的简历信息尚不完整，"),n("nuxt-link",{staticClass:"font-normal",attrs:{to:"/employee/resume"}},[t._v("完善简历信息")]),t._v("之后才能打开竞价开关。\n      ")],1):n("div",{staticClass:"ml-6 mr-24 -mt-3 mb-6 text-sm grey--text"},[t._v("竞价匹配开启后, 职位类别和工作地区不可更改")])]},proxy:!0}])},[n("v-switch",{staticClass:"mt-0 mb-0 -mr-3 pa-0 my-switch",attrs:{disabled:t.matchDisabled,inset:"","hide-details":""},model:{value:t.matchActive,callback:function(e){t.matchActive=e},expression:"matchActive"}})],1),t._v(" "),n("form-editor",{attrs:{label:"每日匹配职位数",type:"number",rules:[function(t){return t&&!isNaN(t)||"请输入1-40的数字"},function(t){return t&&t>0||"每日匹配职位数不能少于1个"},function(t){return t&&t<=40||"每日匹配职位数不能超过40个"}],description:"1. 每日竞价匹配职位数默认是20个，用户可以手动调高或调低该数，但不得超过40个。<br /><br />\n        2. 若用户未及时处理竞价匹配结果而有了未处理记录，则系统会自动调低后续竞价匹配执行中该用户简历可匹配的职位数。这种情况下，在下一次竞价匹配执行完成之前，每日匹配职位数 处于锁定状态，不可更改。"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs,r=e.value;return[n("setup-item",t._g(t._b({attrs:{label:"每日匹配职位数",value:r,placeholder:"未设置",disabled:t.jobCountDisabled},nativeOn:{click:function(e){return t.jobCountClick(e)}}},"setup-item",o,!1),l))]}}]),model:{value:t.jobCount,callback:function(e){t.jobCount=e},expression:"jobCount"}}),t._v(" "),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.jobCountDisabledDialog,callback:function(e){t.jobCountDisabledDialog=e},expression:"jobCountDisabledDialog"}},[n("v-card",[n("v-card-title",{staticClass:"pt-6 pb-3"},[n("span",{staticClass:"text-base"},[t._v("每日匹配职位数锁定")])]),t._v(" "),n("v-card-text",[t._v("\n        由于最近的竞价匹配职位里存在未处理记录，你的每日匹配职位数已被按照未处理记录的1.5倍调减，并被锁定。在下一次竞价匹配执行完成之后才能解除锁定。\n      ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.jobCountDisabledDialog=!1}}},[t._v(" 确定 ")])],1)],1)],1),t._v(" "),n("form-editor",{attrs:{label:"期望月薪",description:"薪资上限不低于下限的1.1倍，不高于下限1.5倍。"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs,r=e.value;return[n("setup-item",t._g(t._b({attrs:{label:"期望月薪",value:r[0]+"K - "+r[1]+"K",placeholder:"未设置"}},"setup-item",o,!1),l))]}},{key:"default",fn:function(e){var l=e.on,o=e.attrs;return[n("form-range-field",t._g(t._b({staticStyle:{height:"80px"},attrs:{label:["最小","最大"],suffix:"K",rules:[[],[function(t){return o.value[0]&&t<=1.5*o.value[0]||"薪资上限不高于下限的1.5倍"},function(t){return o.value[0]&&t>=1.1*o.value[0]||"薪资上限不低于下限的1.1倍"}]]}},"form-range-field",o,!1),l))]}}]),model:{value:t.expectSalary,callback:function(e){t.expectSalary=e},expression:"expectSalary"}}),t._v(" "),n("form-editor",{attrs:{label:"意向职位",counter:"20",rules:[function(t){return!!t||"职位不能为空"},function(t){return t&&t.length<=20||"最多20个字符"}]},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs,r=e.value;return[n("setup-item",t._g(t._b({attrs:{label:"意向职位",value:r,placeholder:"未设置"}},"setup-item",o,!1),l))]}}]),model:{value:t.jobName,callback:function(e){t.jobName=e},expression:"jobName"}}),t._v(" "),n("form-category-picker",{attrs:{items:t.jobTypeOptions,level:3},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs,text=e.text;return[n("setup-item",t._g(t._b({attrs:{label:"职位类别",value:text,placeholder:"未设置",disabled:t.matchActive}},"setup-item",o,!1),l))]}}]),model:{value:t.jobType,callback:function(e){t.jobType=e},expression:"jobType"}}),t._v(" "),n("form-area-picker",{attrs:{items:t.areaOptions,"item-text":"name","item-value":"code",multiple:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,o=e.attrs,html=e.html;return[n("setup-item",t._g(t._b({attrs:{label:"工作地区",value:html,placeholder:"未设置",disabled:t.matchActive}},"setup-item",o,!1),l))]}}]),model:{value:t.workArea,callback:function(e){t.workArea=e},expression:"workArea"}}),t._v(" "),n("setup-blacklist",{model:{value:t.blacklist,callback:function(e){t.blacklist=e},expression:"blacklist"}})],1)}),[],!1,null,"5a012d16",null);"function"==typeof x.default&&Object(x.default)(component);e.default=component.exports;y()(component,{SetupItem:n(501).default,FormEditor:n(746).default,FormRangeField:n(747).default,FormCategoryPicker:n(514).default,FormAreaPicker:n(554).default,SetupBlacklist:n(748).default}),y()(component,{VBtn:w.a,VCard:k.a,VCardActions:V.a,VCardText:V.c,VCardTitle:V.d,VContainer:C.a,VDialog:j.a,VSpacer:O.a,VSwitch:B})}}]);