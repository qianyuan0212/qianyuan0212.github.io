(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{547:function(t,e,l){t.exports=l.p+"img/banner.304dd52.png"},557:function(t,e,l){"use strict";l.r(e);var o={props:{dataTab:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{},mounted:function(){}},n=l(51),r=l(59),c=l.n(r),v=l(119),d=l(454),m=l(194),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{attrs:{src:l(547)}}),t._v(" "),o("v-card",{staticClass:"d-flex",attrs:{tile:""}},[t._l(t.dataTab,(function(e,l){return[o("v-btn",{key:l,class:0===l&&"mr-auto",attrs:{link:"",to:e.link,color:"primary",text:""}},[o("v-icon",{staticClass:"mr-1",attrs:{small:"",color:"light-blue"}},[t._v(" "+t._s(e.icon)+" ")]),t._v("\n        "+t._s(e.val)+"\n      ")],1)]}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VIcon:m.a})},558:function(t,e,l){"use strict";l.r(e);var o={props:{dataArr:{type:Array,default:function(){return[]}},typePorps:{type:String,default:function(){return""}}},data:function(){return{}},methods:{},mounted:function(){}},n=l(51),r=l(59),c=l.n(r),v=l(746),d=l(454),m=l(506),_=l(729),f=l(448),y=l(478),h=l(120),k=l(86),x=l(197),V=l(473),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",{attrs:{flat:""}},[l("v-list-item-group",{attrs:{multiple:""}},[t._l(t.dataArr,(function(e,o){return[e.header?l("v-row",{key:e.val,staticClass:"text-caption",staticStyle:{padding:"0 12px"}},[l("v-col",{attrs:{cols:"8"}},[t._v(t._s(e.header))]),t._v(" "),l("v-col",{staticStyle:{"text-align":"right",color:"#f44336"},attrs:{cols:"4"}},[t._v("未处理"+t._s(e.val)+" ")])],1):t._e(),t._v(" "),e.tip?l("v-alert",{key:e.tip,staticClass:"text-caption",staticStyle:{margin:"0"},attrs:{dense:"",type:"warning","background-color":"transparent",text:""}},[t._v(t._s(e.tip))]):t._e(),t._v(" "),e.fullName?[l("v-list-item",{key:e.title,staticStyle:{"min-height":"auto"},attrs:{href:t.typePorps+"?id="+e.id}},[l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{attrs:{cols:"6"}},[l("v-list-item-content",[l("v-list-item-title",[t._v(t._s(e.fullName)+" "+t._s(e.InPosition))]),t._v(" "),l("v-list-item-subtitle",[t._v(t._s(e.years)+"年/"+t._s(e.education)+"/"+t._s(e.school))])],1)],1),t._v(" "),l("v-col",{attrs:{cols:"3"}},[l("v-list-item-content",{staticClass:"text-right"},[l("v-list-item-subtitle",[-1==e.state?l("div",{staticClass:"blue--text"},[t._v(t._s(e.stateName))]):t._e(),t._v(" "),2==e.state?l("div",{staticClass:"amber--text"},[t._v(t._s(e.stateName))]):t._e(),t._v(" "),1==e.state?l("div",{staticClass:"grey--text"},[t._v(t._s(e.stateName))]):t._e()]),t._v(" "),l("v-list-item-subtitle",[t._v(t._s(e.company))])],1)],1),t._v(" "),l("v-col",{attrs:{cols:"3"}},[l("v-list-item-content",{staticClass:"text-right"},[l("v-list-item-action-text",[t._v(t._s(e.percentage))]),t._v(" "),l("v-list-item-subtitle",[t._v(t._s(e.sort))])],1)],1),t._v(" "),e.tag&&e.tag.length?l("v-col",{staticClass:"mb-2",staticStyle:{"margin-top":"-0.6rem"},attrs:{cols:"12"}},[l("v-chip-group",{attrs:{"active-class":"primary--text",column:""}},t._l(e.tag,(function(e,n){return l("v-chip",{key:o+"-"+n,staticClass:"rounded",staticStyle:{color:"#fff"},attrs:{color:e.color,dense:"",text:"","x-small":"",outlined:""}},[t._v("\n                  "+t._s(e.val)+"\n                ")])})),1)],1):t._e()],1)],1),t._v(" "),l("v-divider",{key:o})]:t._e()]}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:v.a,VCard:d.a,VChip:m.a,VChipGroup:_.a,VCol:f.a,VDivider:y.a,VListItem:h.a,VListItemActionText:k.a,VListItemContent:k.b,VListItemGroup:x.a,VListItemSubtitle:k.c,VListItemTitle:k.d,VRow:V.a})},559:function(t,e,l){"use strict";l.r(e);var o={props:{dataArr:{type:Array,default:function(){return[]}},typePorps:{type:String,default:function(){return""}}},data:function(){return{}},methods:{},mounted:function(){}},n=l(51),r=l(59),c=l.n(r),v=l(478),d=l(157),m=l(120),_=l(199),f=l(86),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._l(t.dataArr,(function(e,o){return[l("v-list-item",{key:o+e.id,attrs:{href:t.typePorps+"?id="+e.id}},[l("v-list-item-avatar",[l("v-img",{attrs:{src:e.avatar}})],1),t._v(" "),l("v-list-item-content",[e.company?l("v-list-item-title",{staticClass:"blue--text text--darken-3"},[t._v(t._s(e.company))]):t._e(),t._v(" "),l("v-list-item-title",{staticClass:"text--secondary"},[t._v(t._s(e.fullName)+" - "+t._s(e.position))]),t._v(" "),l("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1)],1),t._v(" "),l("v-divider",{key:o})]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:v.a,VImg:d.a,VListItem:m.a,VListItemAvatar:_.a,VListItemContent:f.b,VListItemSubtitle:f.c,VListItemTitle:f.d})},560:function(t,e,l){"use strict";l.r(e);var o={props:{FollowUp:{type:Array,default:function(){return[]}},typePorps:{type:String,default:function(){return""}}},data:function(){return{dialogue:[]}},methods:{},mounted:function(){console.log(this.typePorps)}},n=l(51),r=l(59),c=l.n(r),v=l(478),d=l(157),m=l(120),_=l(199),f=l(86),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._l(t.FollowUp,(function(e,o){return[l("v-list-item",{key:o,attrs:{href:t.typePorps+"?id="+e.id}},[l("v-list-item-avatar",[l("v-img",{attrs:{src:e.avatar}})],1),t._v(" "),"/job/dialogue"==t.typePorps?l("v-list-item-content",[e.company?l("v-list-item-title",{staticClass:"blue--text text--darken-3"},[t._v(t._s(e.company))]):t._e(),t._v(" "),l("v-list-item-title",[t._v(t._s(e.fullName)+" - "+t._s(e.position))]),t._v(" "),l("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1):t._e(),t._v(" "),"/recruit/dialogue"===t.typePorps?l("v-list-item-content",[l("v-list-item-title",[t._v(t._s(e.fullName)+" - "+t._s(e.position))]),t._v(" "),l("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1):t._e()],1),t._v(" "),l("v-divider",{key:o+"divider"})]}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:v.a,VImg:d.a,VListItem:m.a,VListItemAvatar:_.a,VListItemContent:f.b,VListItemSubtitle:f.c,VListItemTitle:f.d})},728:function(t,e,l){var content=l(884);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(10).default)("22fca572",content,!0,{sourceMap:!1})},883:function(t,e,l){"use strict";l(728)},884:function(t,e,l){(e=l(9)(!1)).push([t.i,".tabActive{border-bottom:2px solid #ff9421}",""]),t.exports=e},950:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{active:0,tabInfo:[{val:"简历",link:"/job/myResume",icon:"mdi-card-account-details"},{val:"竞价透视",link:"",icon:"mdi-finance"},{val:"竞价设置",link:"",icon:"mdi-cogs"}],tabContxt:[{val:"竞价匹配",id:1},{val:"招聘对话",id:2},{val:"面试跟进",id:3}],BiddingMatching:[{header:"9.19-12:30生成的竞价匹配结果",val:1,tip:"已将您的竞价匹配数按照未处理数的1.5倍调减 ..."},{id:1212,avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",subtitle:'<span class="text--primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',percentage:"17%",sort:"简历排序",stateName:"未处理",state:-1,position:"高级产品经理",company:"发达网络",school:"哈佛大学",education:"本科",fullName:"杨*东",years:"9",InPosition:"产品经理14005",tag:[{color:"blue lighten-1",val:"环境优雅"},{color:"orange accent-1",val:"晋升空间大"},{color:"deep-orange accent-1",val:"年底六薪"},{color:"purple darken-1",val:"节日红包"},{color:"deep-orange darken-1",val:"每年考核加薪"},{color:"yellow darken-3",val:"年度出国旅游"},{color:"cyan darken-1",val:"补充医疗保险"},{color:"green darken-1",val:"免费午餐"},{color:"purple darken-1",val:"通勤专车"}]},{id:1213,avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",subtitle:'<span class="text--primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',percentage:"17%",sort:"简历排序",stateName:"已应聘",state:1,position:"高级产品经理",company:"发达网络",school:"哈佛大学",education:"本科",fullName:"杨*东",years:"9",InPosition:"产品经理14005",tag:[{color:"blue lighten-1",val:"环境优雅"},{color:"orange accent-1",val:"晋升空间大"},{color:"deep-orange accent-1",val:"年底六薪"},{color:"purple darken-1",val:"节日红包"},{color:"deep-orange darken-1",val:"每年考核加薪"},{color:"yellow darken-3",val:"年度出国旅游"},{color:"cyan darken-1",val:"补充医疗保险"},{color:"green darken-1",val:"免费午餐"},{color:"purple darken-1",val:"通勤专车"}]},{id:1214,avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",subtitle:'<span class="text--primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',percentage:"17%",sort:"简历排序",stateName:"已交流",state:2,position:"高级产品经理",company:"发达网络",school:"哈佛大学",education:"本科",fullName:"杨*东",years:"9",InPosition:"产品经理14005",tag:[{color:"blue lighten-1",val:"环境优雅"},{color:"orange accent-1",val:"晋升空间大"},{color:"deep-orange accent-1",val:"年底六薪"},{color:"purple darken-1",val:"节日红包"},{color:"deep-orange darken-1",val:"每年考核加薪"},{color:"yellow darken-3",val:"年度出国旅游"},{color:"cyan darken-1",val:"补充医疗保险"},{color:"green darken-1",val:"免费午餐"},{color:"purple darken-1",val:"通勤专车"}]}],MentDialogue:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",company:"黑马程序",id:666,fullName:"马丽华",position:"HR",subtitle:"高新在像你招手，高新在像你招手，高新在像你招手"},{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",company:"美团集团",id:888,fullName:"杨*东",position:"BD",subtitle:"高新在像你招手，高新在像你招手，高新在像你招手"},{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",company:"杭州乐读科技有限公司",id:10,fullName:"杨*东",position:"高级产品经理",subtitle:"高新在像你招手，高新在像你招手，高新在像你招手"}],FollowUp:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",company:"杭州乐读科技有限公司",id:10,fullName:"杨*东",subtitle:"面试邀请函已接受",position:"BD"},{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",company:"杭州乐读科技有限公司",id:10,fullName:"杨*东",subtitle:"面试邀请函已接受",position:"BD"}]}},methods:{next:function(){var t=parseInt(this.active);this.active=t<2?t+1:0},handle:function(){console.log("test")}}},n=(l(883),l(51)),r=l(59),c=l.n(r),v=l(447),d=l(726),m=l(451),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("RecruitTopInfo",{attrs:{dataTab:t.tabInfo}}),t._v(" "),l("v-tabs",{attrs:{"fixed-tabs":"",color:"#FF9421","slider-color":"transparent","slider-size":"2","background-color":"#fafafa"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.tabContxt,(function(e){return l("v-tab",{key:e.id,attrs:{"active-class":"tabActive"}},[l("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.val))])])})),t._v(" "),l("v-tab-item",{key:"1"},[l("p",{staticClass:"text--disabled text-right text-caption px-4 my-0",staticStyle:{"padding-top":"8px"},attrs:{color:"grey lighten-5 "}},[t._v("下次竞价匹配时间：9.21-12:30\n      ")]),t._v(" "),l("RecruitBiddingMatching",{attrs:{dataArr:t.BiddingMatching,typePorps:"/job/myResume"}})],1),t._v(" "),l("v-tab-item",{key:"2"},[l("div",{staticClass:"v-text-field__details"}),t._v(" "),l("RecruitMentDialogue",{attrs:{dataArr:t.MentDialogue,typePorps:"/job/dialogue"}})],1),t._v(" "),l("v-tab-item",{key:"3"},[l("div",{staticClass:"v-text-field__details"}),t._v(" "),l("recruit-follow-up",{attrs:{FollowUp:t.FollowUp,typePorps:"/job/dialogue"}})],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{RecruitTopInfo:l(557).default,RecruitBiddingMatching:l(558).default,RecruitMentDialogue:l(559).default,RecruitFollowUp:l(560).default}),c()(component,{VTab:v.a,VTabItem:d.a,VTabs:m.a})}}]);