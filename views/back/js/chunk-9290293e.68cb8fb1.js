(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9290293e"],{"24eb":function(e,a,t){},b096:function(e,a,t){"use strict";var i=t("24eb"),l=t.n(i);l.a},b40b:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"site-m"},[t("div",{staticClass:"control-panel"},[t("el-menu",{attrs:{"default-active":"1-4-1"}},[t("el-menu-item",{attrs:{index:"0"}},[t("el-button",{attrs:{type:"primary",size:"small"}},[e._v("保存")])],1),t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("风格设置")])]),t("el-submenu",{attrs:{index:"1-1"}},[t("template",{slot:"title"},[e._v("头部样式设置")]),t("el-menu-item",{attrs:{index:"1-1-1"}},[t("span",{staticClass:"label inline",attrs:{title:"站点头部背景颜色"}},[e._v("背景颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.head.back_color,callback:function(a){e.$set(e.previewConfigData.head,"back_color",a)},expression:"previewConfigData.head.back_color"}})],1),t("el-menu-item",{attrs:{index:"1-1-2"}},[t("span",{staticClass:"label inline",attrs:{title:"标题背景颜色"}},[e._v("激活背景颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.head.active_back_color,callback:function(a){e.$set(e.previewConfigData.head,"active_back_color",a)},expression:"previewConfigData.head.active_back_color"}})],1),t("el-menu-item",{attrs:{index:"1-1-3"}},[t("span",{staticClass:"label inline"},[e._v("字体颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.head.color,callback:function(a){e.$set(e.previewConfigData.head,"color",a)},expression:"previewConfigData.head.color"}})],1),t("el-menu-item",{attrs:{index:"1-1-4"}},[t("span",{staticClass:"label inline"},[e._v("激活字体颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.head.active_color,callback:function(a){e.$set(e.previewConfigData.head,"active_color",a)},expression:"previewConfigData.head.active_color"}})],1),t("el-menu-item",{attrs:{index:"1-1-5"}},[t("span",{staticClass:"label inline"},[e._v("显示背景图片")]),t("el-checkbox",{model:{value:e.previewConfigData.head.isShow,callback:function(a){e.$set(e.previewConfigData.head,"isShow",a)},expression:"previewConfigData.head.isShow"}})],1),t("el-menu-item",{staticStyle:{height:"150px"},attrs:{index:"1-1-6"}},[t("span",{staticClass:"label inline"},[e._v("背景图片")]),t("el-upload",{staticClass:"image-upload",attrs:{action:" ",multiple:!1,"list-type":"picture-card","auto-upload":!1,limit:1,accept:"image/png, image/jpeg","on-change":e.headImgChange,"before-remove":e.headImgRemove}},[t("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1)],2),t("el-submenu",{attrs:{index:"1-2"}},[t("template",{slot:"title"},[e._v("侧边栏样式设置")]),t("el-menu-item",{attrs:{index:"1-2-1"}},[t("span",{staticClass:"label inline"},[e._v("背景颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.sidebar.back_color,callback:function(a){e.$set(e.previewConfigData.sidebar,"back_color",a)},expression:"previewConfigData.sidebar.back_color"}})],1),t("el-menu-item",{attrs:{index:"1-2-2"}},[t("span",{staticClass:"label inline"},[e._v("激活背景颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.sidebar.active_back_color,callback:function(a){e.$set(e.previewConfigData.sidebar,"active_back_color",a)},expression:"previewConfigData.sidebar.active_back_color"}})],1),t("el-menu-item",{attrs:{index:"1-2-3"}},[t("span",{staticClass:"label inline"},[e._v("主要字体颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.sidebar.main_color,callback:function(a){e.$set(e.previewConfigData.sidebar,"main_color",a)},expression:"previewConfigData.sidebar.main_color"}})],1),t("el-menu-item",{attrs:{index:"1-2-4"}},[t("span",{staticClass:"label inline"},[e._v("激活主要字体颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.sidebar.active_main_color,callback:function(a){e.$set(e.previewConfigData.sidebar,"active_main_color",a)},expression:"previewConfigData.sidebar.active_main_color"}})],1),t("el-menu-item",{attrs:{index:"1-2-5"}},[t("span",{staticClass:"label inline"},[e._v("次要字体颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.sidebar.minor_color,callback:function(a){e.$set(e.previewConfigData.sidebar,"minor_color",a)},expression:"previewConfigData.sidebar.minor_color"}})],1),t("el-menu-item",{attrs:{index:"1-2-6"}},[t("span",{staticClass:"label inline"},[e._v("激活次要字体颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.sidebar.active_minor_color,callback:function(a){e.$set(e.previewConfigData.sidebar,"active_minor_color",a)},expression:"previewConfigData.sidebar.active_minor_color"}})],1)],2),t("el-submenu",{attrs:{index:"1-3"}},[t("template",{slot:"title"},[e._v("L2D widget")]),t("el-menu-item",{attrs:{index:"1-3-1"}},[t("span",{staticClass:"label inline"},[e._v("显示")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.isRender,callback:function(a){e.$set(e.previewConfigData.L2Dwidget,"isRender",a)},expression:"previewConfigData.L2Dwidget.isRender"}})],1),t("el-menu-item",{attrs:{index:"1-3-2",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label"},[e._v("选择模板")]),t("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择"},model:{value:e.previewConfigData.L2Dwidget.modelName,callback:function(a){e.$set(e.previewConfigData.L2Dwidget,"modelName",a)},expression:"previewConfigData.L2Dwidget.modelName"}},e._l(e.L2DwidgetModel,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-menu-item",{attrs:{index:"1-3-3",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("标签模式")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.tagMode,callback:function(a){e.$set(e.previewConfigData.L2Dwidget,"tagMode",a)},expression:"previewConfigData.L2Dwidget.tagMode"}})],1),t("el-menu-item",{attrs:{index:"1-3-4",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("调试")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.debug,callback:function(a){e.$set(e.previewConfigData.L2Dwidget,"debug",a)},expression:"previewConfigData.L2Dwidget.debug"}})],1),t("el-menu-item",{attrs:{index:"1-3-5",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("日志")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.log,callback:function(a){e.$set(e.previewConfigData.L2Dwidget,"log",a)},expression:"previewConfigData.L2Dwidget.log"}})],1),t("el-menu-item",{attrs:{index:"1-3-6",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label"},[e._v("模型缩放")]),t("el-input",{staticStyle:{width:"140px"},attrs:{min:"0",step:"0.01",type:"number",placeholder:"请输入内容"},model:{value:e.previewConfigData.L2Dwidget.model.scale,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.model,"scale",e._n(a))},expression:"previewConfigData.L2Dwidget.model.scale"}})],1),t("el-menu-item",{attrs:{index:"1-3-7",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label"},[e._v("超级采样")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:""},model:{value:e.previewConfigData.L2Dwidget.display.superSample,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.display,"superSample",e._n(a))},expression:"previewConfigData.L2Dwidget.display.superSample"}})],1),t("el-menu-item",{attrs:{index:"1-3-8",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("位置")]),t("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"请选择"},model:{value:e.previewConfigData.L2Dwidget.display.position,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.display,"position",a)},expression:"previewConfigData.L2Dwidget.display.position"}},[t("el-option",{key:"1",attrs:{label:"left",value:"left"}}),t("el-option",{key:"2",attrs:{label:"right",value:"right"}})],1)],1),t("el-menu-item",{attrs:{index:"1-3-9",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("画布宽")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.previewConfigData.L2Dwidget.display.width,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.display,"width",e._n(a))},expression:"previewConfigData.L2Dwidget.display.width"}})],1),t("el-menu-item",{attrs:{index:"1-3-10",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("画布高")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.previewConfigData.L2Dwidget.display.height,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.display,"height",e._n(a))},expression:"previewConfigData.L2Dwidget.display.height"}})],1),t("el-menu-item",{attrs:{index:"1-3-11",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label"},[e._v("水平偏移")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.previewConfigData.L2Dwidget.display.hOffset,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.display,"hOffset",e._n(a))},expression:"previewConfigData.L2Dwidget.display.hOffset"}})],1),t("el-menu-item",{attrs:{index:"1-3-12",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label"},[e._v("垂直偏移")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:"请输入内容"},model:{value:e.previewConfigData.L2Dwidget.display.vOffset,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.display,"vOffset",e._n(a))},expression:"previewConfigData.L2Dwidget.display.vOffset"}})],1),t("el-menu-item",{attrs:{index:"1-3-13",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("透明度")]),t("el-input",{staticStyle:{width:"140px"},attrs:{step:"0.01",type:"number",min:"0",max:"1",placeholder:"透明度"},model:{value:e.previewConfigData.L2Dwidget.react.opacityDefault,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.react,"opacityDefault",e._n(a))},expression:"\n\t\t\t\t\t\t\t\tpreviewConfigData.L2Dwidget.react.opacityDefault\n\t\t\t\t\t\t\t"}})],1),t("el-menu-item",{attrs:{index:"1-3-14",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label"},[e._v("鼠标悬浮")]),t("el-input",{staticStyle:{width:"140px"},attrs:{step:"0.01",type:"number",min:"0",max:"1",placeholder:"透明度"},model:{value:e.previewConfigData.L2Dwidget.react.opacityOnHover,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.react,"opacityOnHover",e._n(a))},expression:"\n\t\t\t\t\t\t\t\tpreviewConfigData.L2Dwidget.react.opacityOnHover\n\t\t\t\t\t\t\t"}})],1),t("el-menu-item",{attrs:{index:"1-3-15",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("显示边界")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.dev.border,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.dev,"border",a)},expression:"previewConfigData.L2Dwidget.dev.border"}})],1),t("el-menu-item",{attrs:{index:"1-3-16",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("显示对话框")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.dialog.enable,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.dialog,"enable",a)},expression:"previewConfigData.L2Dwidget.dialog.enable"}})],1),t("el-menu-item",{attrs:{index:"1-3-17",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("使用一言API")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.dialog.hitokoto,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.dialog,"hitokoto",a)},expression:"previewConfigData.L2Dwidget.dialog.hitokoto"}})],1),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("移动端")]),t("el-menu-item",{attrs:{index:"1-3-18",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("显示")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.mobile.show,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.mobile,"show",a)},expression:"previewConfigData.L2Dwidget.mobile.show"}})],1),t("el-menu-item",{attrs:{index:"1-3-19",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline"},[e._v("重力感应")]),t("el-checkbox",{model:{value:e.previewConfigData.L2Dwidget.mobile.motion,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.mobile,"motion",a)},expression:"previewConfigData.L2Dwidget.mobile.motion"}})],1),t("el-menu-item",{attrs:{index:"1-3-20",disabled:!e.previewConfigData.L2Dwidget.isRender}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("缩放")]),t("el-input",{staticStyle:{width:"140px"},attrs:{min:"0",step:"0.01",type:"number",placeholder:"请输入内容"},model:{value:e.previewConfigData.L2Dwidget.model.scale,callback:function(a){e.$set(e.previewConfigData.L2Dwidget.model,"scale",e._n(a))},expression:"previewConfigData.L2Dwidget.model.scale"}})],1)],2)],2),t("el-submenu",{attrs:{index:"1-4"}},[t("template",{slot:"title"},[e._v("背景动画")]),t("el-menu-item",{attrs:{index:"1-4-1"}},[t("span",{staticClass:"label inline"},[e._v("显示")]),t("el-checkbox",{model:{value:e.previewConfigData.CanvasNest.isShow,callback:function(a){e.$set(e.previewConfigData.CanvasNest,"isShow",a)},expression:"previewConfigData.CanvasNest.isShow"}})],1),t("el-menu-item",{attrs:{index:"1-4-2",disabled:!e.previewConfigData.CanvasNest.isShow}},[t("span",{staticClass:"label inline"},[e._v("颜色")]),t("el-color-picker",{attrs:{"color-format":"rgb"},model:{value:e.previewConfigData.CanvasNest.color,callback:function(a){e.$set(e.previewConfigData.CanvasNest,"color",a)},expression:"previewConfigData.CanvasNest.color"}})],1),t("el-menu-item",{attrs:{index:"1-4-3",disabled:!e.previewConfigData.CanvasNest.isShow}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("透明度")]),t("el-input",{staticStyle:{width:"140px"},attrs:{step:"0.01",type:"number",min:"0",max:"1",placeholder:"透明度"},model:{value:e.previewConfigData.CanvasNest.opacity,callback:function(a){e.$set(e.previewConfigData.CanvasNest,"opacity",e._n(a))},expression:"previewConfigData.CanvasNest.opacity"}})],1),t("el-menu-item",{attrs:{index:"1-4-4",disabled:!e.previewConfigData.CanvasNest.isShow}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("层叠值")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:"层叠值"},model:{value:e.previewConfigData.CanvasNest.zIndex,callback:function(a){e.$set(e.previewConfigData.CanvasNest,"zIndex",e._n(a))},expression:"previewConfigData.CanvasNest.zIndex"}})],1),t("el-menu-item",{attrs:{index:"1-4-5",disabled:!e.previewConfigData.CanvasNest.isShow}},[t("span",{staticClass:"label inline",staticStyle:{width:"56px"}},[e._v("数量")]),t("el-input",{staticStyle:{width:"140px"},attrs:{type:"number",placeholder:"数量"},model:{value:e.previewConfigData.CanvasNest.count,callback:function(a){e.$set(e.previewConfigData.CanvasNest,"count",e._n(a))},expression:"previewConfigData.CanvasNest.count"}})],1)],2),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("站点背景设置")]),t("el-menu-item",{attrs:{index:"1-5"}},[t("span",{staticClass:"label inline"},[e._v("颜色")]),t("el-color-picker",{model:{value:e.previewConfigData.site.back_color,callback:function(a){e.$set(e.previewConfigData.site,"back_color",a)},expression:"previewConfigData.site.back_color"}})],1),t("el-menu-item",{attrs:{index:"1-6"}},[t("span",{staticClass:"label inline"},[e._v("显示背景图片")]),t("el-checkbox",{model:{value:e.previewConfigData.site.isShow,callback:function(a){e.$set(e.previewConfigData.site,"isShow",a)},expression:"previewConfigData.site.isShow"}})],1),t("el-menu-item",{staticStyle:{height:"150px"},attrs:{index:"1-7"}},[t("span",{staticClass:"label inline"},[e._v("背景图片")]),t("el-upload",{staticClass:"image-upload",attrs:{action:" ",multiple:!1,"list-type":"picture-card","auto-upload":!1,limit:1,accept:"image/png, image/jpeg","on-change":e.siteImgChange,"before-remove":e.siteImgRemove}},[t("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1)],2)],2),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",[e._v("站点设置")])]),t("el-menu-item-group",[t("template",{slot:"title"},[e._v("字体选择")]),t("el-menu-item",{attrs:{index:"1-1"}},[t("el-color-picker",{model:{value:e.previewConfigData.color1,callback:function(a){e.$set(e.previewConfigData,"color1",a)},expression:"previewConfigData.color1"}})],1)],2)],2)],1)],1),t("div",{staticClass:"preview",style:e.previewStyle.previewBox},[t("div",{staticClass:"mode-control"},[t("span",{class:{active:"mobile"==e.watchPattern},on:{click:e.mobile}},[t("i",{staticClass:"fa fa-mobile",attrs:{"aria-hidden":"true"}})]),t("span",{class:{active:"desktop"==e.watchPattern},on:{click:e.desktop}},[t("i",{staticClass:"fa fa-desktop",attrs:{"aria-hidden":"true"}})]),t("span",{class:{active:"fullScreen"==e.watchPattern},on:{click:e.fullScreen}},[t("i",{staticClass:"fa fa-arrows-h",attrs:{"aria-hidden":"true"}})])]),t("iframe",{ref:"previewIframe",style:e.previewStyle.previewWindow,attrs:{src:e.previewURL+"?pattern=preview&time="+e.time,frameborder:"0"},on:{load:e.loaded}})])])},l=[];function n(e){return new Promise((a,t)=>{let i=new Image;i.onload=function(){let e=document.createElement("canvas");e.width=this.naturalWidth,e.height=this.naturalHeight,e.getContext("2d").drawImage(i,0,0);let t=e.toDataURL("image/png");a(t)},i.setAttribute("crossOrigin","Anonymous"),i.src=e,i.onerror=()=>{t(new Error("图片流异常"))}})}var s={name:"SiteM",data(){return{watchPattern:"desktop",previewStyle:{},previewURL:"http://localhost:3000/",time:"",L2DwidgetModel:[{label:"chitose",value:"chitose"},{label:"Epsilon2.1",value:"Epsilon2.1"},{label:"Gantzert_Felixander",value:"Gantzert_Felixander"},{label:"haru01",value:"haru01"},{label:"haru02",value:"haru02"},{label:"haruto",value:"haruto"},{label:"hibiki",value:"hibiki"},{label:"hijiki",value:"hijiki"},{label:"izumi",value:"izumi"},{label:"koharu",value:"koharu"},{label:"miku",value:"miku"},{label:"ni-j",value:"ni-j"},{label:"nico",value:"nico"},{label:"nietzsche",value:"nietzsche"},{label:"nipsilon",value:"nipsilon"},{label:"nito",value:"nito"},{label:"shizuku",value:"shizuku"},{label:"tororo",value:"tororo"},{label:"tsumiki",value:"tsumiki"},{label:"unitychan",value:"unitychan"},{label:"wanko",value:"wanko"},{label:"z16",value:"z16"}],previewConfigData:{head:{back_color:"#fafafa",active_back_color:"#fafafa",isShow:!0,back_img:"",color:"#555",active_color:"#555"},sidebar:{back_color:"#ffffff",active_back_color:"",main_color:"#303133",active_main_color:"#409EFF",minor_color:"",active_minor_color:""},L2Dwidget:{isRender:!0,modelName:"koharu",pluginModelPath:"/live2d-widget-model-koharu/assets/",tagMode:!1,debug:!1,model:{jsonPath:"/live2dw/live2d-widget-model-koharu/assets/koharu.model.json",scale:1},display:{superSample:2,position:"right",width:150,height:300,hOffset:-20,vOffset:-40},react:{opacityDefault:1,opacityOnHover:.5},dev:{border:!1},mobile:{show:!0,scale:.5,motion:!0},log:!0,dialog:{enable:!1,hitokoto:!1}},CanvasNest:{isShow:!0,color:"rgb(0,0,255)",opacity:.7,zIndex:-1,count:99},site:{back_color:"#eeeeee",isShow:!0,back_img:""}}}},methods:{loaded(){this.$refs["previewIframe"].contentWindow.postMessage({type:"previewPatternData",data:this.previewConfigData},"*")},headImgChange(e,a){n(e.url).then(e=>{this.previewConfigData.head.back_img=e})},headImgRemove(e,a){this.previewConfigData.head.back_img=""},siteImgChange(e,a){n(e.url).then(e=>{this.previewConfigData.site.back_img=e})},siteImgRemove(e,a){this.previewConfigData.site.back_img=""},mobile(){this.active_pattern("mobile"),this.previewStyle={previewBox:{position:"relative"},previewWindow:{width:"385px",height:"667px",position:"absolute",left:"50%",transform:"translateX(-50%)"}};const e=this.$refs["previewIframe"].contentWindow;let a={get:function(){return userAgent}};try{Object.defineProperty(window.navigator,"userAgent",a)}catch(t){e.navigator=Object.create(navigator,{userAgent:a})}},desktop(){this.previewStyle={},this.active_pattern("desktop")},fullScreen(){this.active_pattern("fullScreen"),this.previewStyle={previewBox:{position:"fixed",width:"100%",height:" 100vh"},previewWindow:{}}},active_pattern(e){this.watchPattern=e}},watch:{previewConfigData:{handler:function(){this.time=(new Date).getTime().toString()},deep:!0}}},o=s,r=(t("b096"),t("2877")),c=Object(r["a"])(o,i,l,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-9290293e.68cb8fb1.js.map