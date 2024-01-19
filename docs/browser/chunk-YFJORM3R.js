import{a as U,c as it,d as ot,e as rt,f as lt,g as st,p as ut,q as pt,r as ct,s as mt}from"./chunk-2TN3GFB3.js";import"./chunk-HOB7M6RB.js";import{N as S,O as P,c as tt,d as et,e as at,h as w,m as nt,n as A,s as g,t as m}from"./chunk-O4ERPF4S.js";import{Eb as q,Fb as O,Gb as X,Hb as z,Ib as W,Lb as c,Nb as Y,T as L,Ua as l,Ub as Z,Z as C,a as H,aa as p,b as Q,db as I,ea as J,fa as _,fb as o,ga as b,kb as G,lb as s,mb as u,nb as d,ob as D,pb as K,rb as B,tb as v,ub as f,xb as N,yb as $}from"./chunk-5G2ANPS4.js";var vt=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-alphabet"]],standalone:!0,features:[c],decls:1,vars:0,template:function(a,n){a&1&&d(0,"router-outlet")},dependencies:[nt]});let e=t;return e})();var ft=(()=>{let t=class t{constructor(){this.router=C(A),this.path=m}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-alphabet-home"]],standalone:!0,features:[c],decls:4,vars:3,consts:[[1,"home-layout"],["label","Hiragana",1,"circle-btn",3,"rounded","click"],["label","Katakana","severity","secondary",1,"circle-btn",3,"rounded","click"],["label","Kanji","severity","success",1,"circle-btn",3,"rounded","click"]],template:function(a,n){a&1&&(s(0,"div",0)(1,"p-button",1),v("click",function(){return n.router.navigate([n.path.hiragana_act])}),u(),s(2,"p-button",2),v("click",function(){return n.router.navigate([n.path.katakana_act])}),u(),s(3,"p-button",3),v("click",function(){return n.router.navigate([n.path.kanji_act])}),u()()),a&2&&(l(),o("rounded",!0),l(),o("rounded",!0),l(),o("rounded",!0))},dependencies:[P,S]});let e=t;return e})();var y=function(e){return e.ROMANJI="romanji",e.KATAKANA="katakana",e.HIRAGANA="hiragana",e.KANJI="kanji",e}(y||{});var ht=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac});let e=t;return e})();var yt=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac});let e=t;return e})();function It(e,t){if(e&1){let r=B();D(0),s(1,"div",2)(2,"div",3)(3,"p-button",4),v("click",function(){_(r);let a=f();return b(a.router.navigate([a.activityInput.btnL.path]))}),u(),s(4,"h1"),O(5),u(),s(6,"p-button",4),v("click",function(){_(r);let a=f();return b(a.router.navigate([a.activityInput.btnR.path]))}),u()(),s(7,"div",5)(8,"div")(9,"p-selectButton",6),v("ngModelChange",function(a){_(r);let n=f();return b(n.complexityValue=a)}),u()(),s(10,"div")(11,"p-selectButton",6),v("ngModelChange",function(a){_(r);let n=f();return b(n.typeValue=a)}),u()(),s(12,"div",7)(13,"p-button",4),v("click",function(){_(r);let a=f();return b(a.startActivity())}),u(),s(14,"p-button",8),v("click",function(){_(r);let a=f();return b(a.justLook=!a.justLook)}),u()()(),s(15,"div",9)(16,"p-button",10),v("click",function(){_(r);let a=f();return b(a.router.navigate([a.activityInput.resumePath]))}),u()()(),K()}if(e&2){let r=f();l(3),N("label",r.activityInput.btnL.label),o("rounded",!0),l(2),X(r.activityInput.title),l(),N("label",r.activityInput.btnR.label),o("rounded",!0),l(3),o("options",r.complexityOptions)("ngModel",r.complexityValue)("allowEmpty",!1),l(2),o("options",r.typeOptions)("ngModel",r.typeValue)("allowEmpty",!1),l(2),o("label",r.startBtnLabel)("rounded",!0),l(),$("icon","pi ",r.justLook?"pi-eye":"pi-eye-slash",""),o("rounded",!0),l(2),o("rounded",!0)}}function Ot(e,t){if(e&1){let r=B();s(0,"app-letter-activity-shared",11),v("closeActivityEvent",function(){_(r);let a=f();return b(a.activityStarted=!1)}),u()}if(e&2){let r=f();o("activityLayoutInput",r.activityLayoutValue)("answerQuestionInput",r.answerQuestionValue)}}var M=(()=>{let t=class t{constructor(){this.router=C(A),this.startBtnLabel="Empezar",this.activityStarted=!1,this.activityLayoutValue=new U,this.answerQuestionValue=[],this.justLook=!1,this.typeValue="",this.complexityValue=[],this.typeOptions=[],this.complexityOptions=[]}ngOnChanges(){this.activityInput&&(this.typeOptions=[{label:this.activityInput.title,value:this.activityInput.type},{label:"Romanji",value:y.ROMANJI}],this.typeValue=this.typeOptions[0].value,this.complexityOptions=this.activityInput.options,this.complexityValue=this.complexityOptions[0].value)}startActivity(){if(this.createAnswerQuestionModel(),this.answerQuestionValue.length<1){console.log("Selecciona algun tipo");return}let i=new U;i=Q(H({},i),{justLook:this.justLook}),this.activityLayoutValue=i,this.activityStarted=!0}createAnswerQuestionModel(){this.answerQuestionValue=this.complexityValue.map(i=>({question:this.typeValue===y.ROMANJI?i.translation:i.value,answer:this.typeValue===y.ROMANJI?[i.value]:[i.translation],info:i}))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-activity-page-shared"]],inputs:{activityInput:"activityInput"},standalone:!0,features:[W([ht,yt]),J,c],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["letter",""],[1,"activity-layout"],[1,"activity-header","space-btw"],["severity","secondary",3,"label","rounded","click"],[1,"activity-body"],["optionLabel","label","optionValue","value",3,"options","ngModel","allowEmpty","ngModelChange"],[1,"btn-start"],["severity","secondary",3,"icon","rounded","click"],[1,"activity-footer","one-btn"],["icon","pi pi-bookmark","severity","secondary",3,"rounded","click"],[3,"activityLayoutInput","answerQuestionInput","closeActivityEvent"]],template:function(a,n){if(a&1&&I(0,It,17,16,"ng-container",0)(1,Ot,1,2,"ng-template",null,1,Z),a&2){let k=q(2);o("ngIf",!n.activityStarted)("ngIfElse",k)}},dependencies:[P,S,st,lt,rt,it,ot,w,at,ut]});let e=t;return e})();var T=[{value:"\u3042",translation:"a"},{value:"\u3044",translation:"i"},{value:"\u3046",translation:"u"},{value:"\u3048",translation:"e"},{value:"\u304A",translation:"o"},{value:"\u304B",translation:"ka"},{value:"\u304D",translation:"ki"},{value:"\u304F",translation:"ku"},{value:"\u3051",translation:"ke"},{value:"\u3053",translation:"ko"},{value:"\u3055",translation:"sa"},{value:"\u3057",translation:"shi"},{value:"\u3059",translation:"su"},{value:"\u305B",translation:"se"},{value:"\u305D",translation:"so"},{value:"\u305F",translation:"ta"},{value:"\u3061",translation:"chi"},{value:"\u3064",translation:"tsu"},{value:"\u3066",translation:"te"},{value:"\u3068",translation:"to"},{value:"\u306A",translation:"na"},{value:"\u306B",translation:"ni"},{value:"\u306C",translation:"nu"},{value:"\u306D",translation:"ne"},{value:"\u306E",translation:"no"},{value:"\u306F",translation:"ha"},{value:"\u3072",translation:"hi"},{value:"\u3075",translation:"fu"},{value:"\u3078",translation:"he"},{value:"\u307B",translation:"ho"},{value:"\u307E",translation:"ma"},{value:"\u307F",translation:"mi"},{value:"\u3080",translation:"mu"},{value:"\u3081",translation:"me"},{value:"\u3082",translation:"mo"},{value:"\u3084",translation:"ya"},{value:"",translation:""},{value:"\u3086",translation:"yu"},{value:"",translation:""},{value:"\u3088",translation:"yo"},{value:"\u3089",translation:"ra"},{value:"\u308A",translation:"ri"},{value:"\u308B",translation:"ru"},{value:"\u308C",translation:"re"},{value:"\u308D",translation:"ro"},{value:"\u308F",translation:"wa"},{value:"",translation:""},{value:"",translation:""},{value:"",translation:""},{value:"\u3092",translation:"wo"},{value:"\u3093",translation:"n"}];var R=[{value:"\u304C",translation:"ga"},{value:"\u304E",translation:"gi"},{value:"\u3050",translation:"gu"},{value:"\u3052",translation:"ge"},{value:"\u3054",translation:"go"},{value:"\u3056",translation:"za"},{value:"\u3058",translation:"ji"},{value:"\u305A",translation:"zu"},{value:"\u305C",translation:"ze"},{value:"\u305E",translation:"zo"},{value:"\u3060",translation:"da"},{value:"\u3062",translation:"ji"},{value:"\u3065",translation:"zu"},{value:"\u3067",translation:"de"},{value:"\u3069",translation:"do"},{value:"\u3070",translation:"ba"},{value:"\u3073",translation:"bi"},{value:"\u3076",translation:"bu"},{value:"\u3079",translation:"be"},{value:"\u307C",translation:"bo"},{value:"\u3071",translation:"pa"},{value:"\u3074",translation:"pi"},{value:"\u3077",translation:"pu"},{value:"\u307A",translation:"pe"},{value:"\u307D",translation:"po"}];var E=[{value:"\u304D\u3083",translation:"kya"},{value:"\u304D\u3085",translation:"kyu"},{value:"\u304D\u3087",translation:"kyo"},{value:"\u3057\u3083",translation:"sha"},{value:"\u3057\u3085",translation:"shu"},{value:"\u3057\u3087",translation:"sho"},{value:"\u3061\u3083",translation:"cha"},{value:"\u3061\u3085",translation:"chu"},{value:"\u3061\u3087",translation:"cho"},{value:"\u306B\u3083",translation:"nya"},{value:"\u306B\u3085",translation:"nyu"},{value:"\u306B\u3087",translation:"nyo"},{value:"\u3072\u3083",translation:"hya"},{value:"\u3072\u3085",translation:"hyu"},{value:"\u3072\u3087",translation:"hyo"},{value:"\u307F\u3083",translation:"mya"},{value:"\u307F\u3085",translation:"myu"},{value:"\u307F\u3087",translation:"myo"},{value:"\u308A\u3083",translation:"rya"},{value:"\u308A\u3085",translation:"ryu"},{value:"\u308A\u3087",translation:"ryo"}];var F=[{value:"\u30A2",translation:"a"},{value:"\u30A4",translation:"i"},{value:"\u30A6",translation:"u"},{value:"\u30A8",translation:"e"},{value:"\u30AA",translation:"o"},{value:"\u30AB",translation:"ka"},{value:"\u30AD",translation:"ki"},{value:"\u30AF",translation:"ku"},{value:"\u30B1",translation:"ke"},{value:"\u30B3",translation:"ko"},{value:"\u30B5",translation:"sa"},{value:"\u30B7",translation:"shi"},{value:"\u30B9",translation:"su"},{value:"\u30BB",translation:"se"},{value:"\u30BD",translation:"so"},{value:"\u30BF",translation:"ta"},{value:"\u30C1",translation:"chi"},{value:"\u30C4",translation:"tsu"},{value:"\u30C6",translation:"te"},{value:"\u30C8",translation:"to"},{value:"\u30CA",translation:"na"},{value:"\u30CB",translation:"ni"},{value:"\u30CC",translation:"nu"},{value:"\u30CD",translation:"ne"},{value:"\u30CE",translation:"no"},{value:"\u30CF",translation:"ha"},{value:"\u30D2",translation:"hi"},{value:"\u30D5",translation:"fu"},{value:"\u30D8",translation:"he"},{value:"\u30DB",translation:"ho"},{value:"\u30DE",translation:"ma"},{value:"\u30DF",translation:"mi"},{value:"\u30E0",translation:"mu"},{value:"\u30E1",translation:"me"},{value:"\u30E2",translation:"mo"},{value:"\u30E4",translation:"ya"},{value:"",translation:""},{value:"\u30E6",translation:"yu"},{value:"",translation:""},{value:"\u30E8",translation:"yo"},{value:"\u30E9",translation:"ra"},{value:"\u30EA",translation:"ri"},{value:"\u30EB",translation:"ru"},{value:"\u30EC",translation:"re"},{value:"\u30ED",translation:"ro"},{value:"\u30EF",translation:"wa"},{value:"",translation:""},{value:"",translation:""},{value:"",translation:""},{value:"\u30F2",translation:"wo"},{value:"\u30F3",translation:"n"}];var j=[{value:"\u30AC",translation:"ga"},{value:"\u30AE",translation:"gi"},{value:"\u30B0",translation:"gu"},{value:"\u30B2",translation:"ge"},{value:"\u30B4",translation:"go"},{value:"\u30B6",translation:"za"},{value:"\u30B8",translation:"ji"},{value:"\u30BA",translation:"zu"},{value:"\u30BC",translation:"ze"},{value:"\u30BE",translation:"zo"},{value:"\u30C0",translation:"da"},{value:"\u30C2",translation:"ji"},{value:"\u30C5",translation:"zu"},{value:"\u30C7",translation:"de"},{value:"\u30C9",translation:"do"},{value:"\u30D0",translation:"ba"},{value:"\u30D3",translation:"bi"},{value:"\u30D6",translation:"bu"},{value:"\u30D9",translation:"be"},{value:"\u30DC",translation:"bo"},{value:"\u30D1",translation:"pa"},{value:"\u30D4",translation:"pi"},{value:"\u30D7",translation:"pu"},{value:"\u30DA",translation:"pe"},{value:"\u30DD",translation:"po"}];var V=[{value:"\u30AD\u30E3",translation:"kya"},{value:"\u30AD\u30E5",translation:"kyu"},{value:"\u30AD\u30E7",translation:"kyo"},{value:"\u30B7\u30E3",translation:"sha"},{value:"\u30B7\u30E5",translation:"shu"},{value:"\u30B7\u30E7",translation:"sho"},{value:"\u30C1\u30E3",translation:"cha"},{value:"\u30C1\u30E5",translation:"chu"},{value:"\u30C1\u30E7",translation:"cho"},{value:"\u30CB\u30E3",translation:"nya"},{value:"\u30CB\u30E5",translation:"nyu"},{value:"\u30CB\u30E7",translation:"nyo"},{value:"\u30D2\u30E3",translation:"hya"},{value:"\u30D2\u30E5",translation:"hyu"},{value:"\u30D2\u30E7",translation:"hyo"},{value:"\u30DF\u30E3",translation:"mya"},{value:"\u30DF\u30E5",translation:"myu"},{value:"\u30DF\u30E7",translation:"myo"},{value:"\u30EA\u30E3",translation:"rya"},{value:"\u30EA\u30E5",translation:"ryu"},{value:"\u30EA\u30E7",translation:"ryo"}];var _t=[{label:"B\xE1sico",value:T.concat(R).filter(e=>e.value!=="")},{label:"Complejo",value:E},{label:"Todo",value:T.concat(R,E).filter(e=>e.value!=="")}],bt=[{label:"B\xE1sico",value:F.concat(j).filter(e=>e.value!=="")},{label:"Complejo",value:V},{label:"Todo",value:F.concat(j,V).filter(e=>e.value!=="")}],kt=[{label:"B\xE1sico",value:[1]},{label:"Complejo",value:[2]},{label:"Todo",value:[3]}];var Ct=(()=>{let t=class t{constructor(){this.activityOutput={btnR:{label:"Katakana",path:m.katakana_act},btnL:{label:"Hiragana",path:m.hiragana_act},title:"Kanji",resumePath:m.kanji_resume,type:y.KANJI,options:kt}}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-kanji-activity"]],standalone:!0,features:[c],decls:1,vars:1,consts:[[3,"activityInput"]],template:function(a,n){a&1&&d(0,"app-activity-page-shared",0),a&2&&o("activityInput",n.activityOutput)},dependencies:[M]});let e=t;return e})();var wt=(()=>{let t=class t{constructor(){this.activityOutput={btnR:{label:"Kanji",path:m.kanji_act},btnL:{label:"Katakana",path:m.katakana_act},title:"Hiragana",resumePath:m.hiragana_resume,type:y.HIRAGANA,options:_t}}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-hiragana-activity"]],standalone:!0,features:[c],decls:1,vars:1,consts:[[3,"activityInput"]],template:function(a,n){a&1&&d(0,"app-activity-page-shared",0),a&2&&o("activityInput",n.activityOutput)},dependencies:[M]});let e=t;return e})();var At=(()=>{let t=class t{constructor(){this.activityOutput={btnR:{label:"Kanji",path:m.kanji_act},btnL:{label:"Hiragana",path:m.hiragana_act},title:"Katakana",resumePath:m.katakana_resume,type:y.KATAKANA,options:bt}}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-katakana-activity"]],standalone:!0,features:[c],decls:1,vars:1,consts:[[3,"activityInput"]],template:function(a,n){a&1&&d(0,"app-activity-page-shared",0),a&2&&o("activityInput",n.activityOutput)},dependencies:[M]});let e=t;return e})();var Lt=e=>({"no-shadow":e}),St=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-item-letter-resume-shared"]],inputs:{item:"item"},standalone:!0,features:[c],decls:7,vars:5,consts:[[1,"card-wrapper",3,"ngClass"],[1,"card-title"],[1,"card-body"]],template:function(a,n){a&1&&(s(0,"div",0)(1,"div",1)(2,"p"),O(3),u()(),s(4,"div",2)(5,"p"),O(6),u()()()),a&2&&(o("ngClass",Y(3,Lt,n.item.value==="")),l(3),z(" ",n.item.value," "),l(3),z(" ",n.item.translation," "))},dependencies:[w,tt],styles:[".card-wrapper[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;gap:1rem;align-items:center;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:6px}.card-wrapper[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.card-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}"]});let e=t;return e})();function Dt(e,t){if(e&1&&(D(0),s(1,"div"),d(2,"app-item-letter-resume-shared",11),u(),K()),e&2){let r=t.$implicit,i=f().$implicit;l(),G("item-letter ",i.itemClass,""),l(),o("item",r)}}function Kt(e,t){if(e&1&&(s(0,"p-tabPanel",8)(1,"div",9),I(2,Dt,3,4,"ng-container",10),u()()),e&2){let r=t.$implicit;o("header",r.title),l(2),o("ngForOf",r.content)}}var x=(()=>{let t=class t{constructor(){this.router=C(A),this.paths=m,this.tabs=[],this.previousPath=""}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-resume-page-shared"]],inputs:{tabs:"tabs",previousPath:"previousPath"},standalone:!0,features:[c],decls:9,vars:12,consts:[[1,"resume-page"],[1,"header-close"],["icon","pi pi-times","severity","secondary",3,"size","rounded","click"],[1,"header-nav"],["label","\u3072",3,"size","rounded","outlined","click"],["label","\u30AB",3,"size","rounded","outlined","click"],["label","\u6F22\u5B57",3,"size","rounded","outlined","click"],[3,"header",4,"ngFor","ngForOf"],[3,"header"],[1,"container-resume-letter"],[4,"ngFor","ngForOf"],[3,"item"]],template:function(a,n){a&1&&(s(0,"div",0)(1,"div",1)(2,"p-button",2),v("click",function(){return n.router.navigate([n.previousPath])}),u()(),s(3,"div",3)(4,"p-button",4),v("click",function(){return n.router.navigate([n.paths.hiragana_resume])}),u(),s(5,"p-button",5),v("click",function(){return n.router.navigate([n.paths.katakana_resume])}),u(),s(6,"p-button",6),v("click",function(){return n.router.navigate([n.paths.kanji_resume])}),u()()(),s(7,"p-tabView"),I(8,Kt,3,2,"p-tabPanel",7),u()),a&2&&(l(2),o("size","small")("rounded",!0),l(2),o("size","small")("rounded",!0)("outlined",!n.router.url.includes(n.paths.hiragana_resume)),l(),o("size","small")("rounded",!0)("outlined",!n.router.url.includes(n.paths.katakana_resume)),l(),o("size","small")("rounded",!0)("outlined",!n.router.url.includes(n.paths.kanji_resume)),l(2),o("ngForOf",n.tabs))},dependencies:[w,et,St,mt,ct,pt,P,S],styles:[".container-resume-letter[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.container-resume-letter[_ngcontent-%COMP%]   .item-letter[_ngcontent-%COMP%]{width:fit-content}.resume-page[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:.5rem}.resume-page[_ngcontent-%COMP%] > .header-nav[_ngcontent-%COMP%]{display:flex;gap:.5rem}"]});let e=t;return e})();var Pt=(()=>{let t=class t{constructor(){this.previousPath=m.kanji_act,this.data=[]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-kanji-resume"]],standalone:!0,features:[c],decls:1,vars:2,consts:[[3,"tabs","previousPath"]],template:function(a,n){a&1&&d(0,"app-resume-page-shared",0),a&2&&o("tabs",n.data)("previousPath",n.previousPath)},dependencies:[x]});let e=t;return e})();var Mt=(()=>{let t=class t{constructor(){this.previousPath=m.hiragana_act,this.data=[{title:"B\xE1sico",content:T,itemClass:"fiveItemsPerRow"},{title:"Diacr\xEDtico",content:R,itemClass:"fiveItemsPerRow"},{title:"Diptongos",content:E,itemClass:"threeItemsPerRow"}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-hiragana-resume"]],standalone:!0,features:[c],decls:1,vars:2,consts:[[3,"tabs","previousPath"]],template:function(a,n){a&1&&d(0,"app-resume-page-shared",0),a&2&&o("tabs",n.data)("previousPath",n.previousPath)},dependencies:[x]});let e=t;return e})();var xt=(()=>{let t=class t{constructor(){this.previousPath=m.katakana_act,this.data=[{title:"B\xE1sico",content:F,itemClass:"fiveItemsPerRow"},{title:"Diacr\xEDtico",content:j,itemClass:"fiveItemsPerRow"},{title:"Diptongos",content:V,itemClass:"threeItemsPerRow"}]}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-katakana-resume"]],standalone:!0,features:[c],decls:1,vars:2,consts:[[3,"tabs","previousPath"]],template:function(a,n){a&1&&d(0,"app-resume-page-shared",0),a&2&&o("tabs",n.data)("previousPath",n.previousPath)},dependencies:[x]});let e=t;return e})();var Sa=[{path:"",component:vt,children:[{path:"",pathMatch:"full",redirectTo:""},{path:"",component:ft},{path:g.KANJI,component:Ct},{path:g.KANJI+"/"+g.RESUME,component:Pt},{path:g.HIRAGANA,component:wt},{path:g.HIRAGANA+"/"+g.RESUME,component:Mt},{path:g.KATAKANA,component:At},{path:g.KATAKANA+"/"+g.RESUME,component:xt}]}];export{Sa as alphabet_routes};
