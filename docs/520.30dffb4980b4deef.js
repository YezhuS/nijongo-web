"use strict";(self.webpackChunknijongo=self.webpackChunknijongo||[]).push([[520],{7520:(q,k,s)=>{s.r(k),s.d(k,{alphabet_routes:()=>U});var p=s(2114),t=s(9212);let T=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-alphabet"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[p.lC]})}return a})();var l=s(6106),v=s(4958);let I=(()=>{class a{constructor(){this.router=(0,t.f3M)(p.F0),this.path=l.W}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-alphabet-home"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"home-layout"],["label","Hiragana","shape","circle","size","big",3,"click"],["label","Katakana","shape","circle","size","big",3,"click"],["label","Kanji","shape","circle","size","big",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"app-button-generic",1),t.NdJ("click",function(){return n.router.navigate([n.path.hiragana_act])}),t.qZA(),t.TgZ(2,"app-button-generic",2),t.NdJ("click",function(){return n.router.navigate([n.path.katakana_act])}),t.qZA(),t.TgZ(3,"app-button-generic",3),t.NdJ("click",function(){return n.router.navigate([n.path.kanji_act])}),t.qZA()())},dependencies:[v.I]})}return a})();var C=s(5151),O=s(95),u=function(a){return a.ROMANJI="romanji",a.KATAKANA="katakana",a.HIRAGANA="hiragana",a.KANJI="kanji",a}(u||{}),c=s(6814);let j=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})(),w=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})();var N=s(1587),J=s(3349);function K(a,A){if(1&a){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"app-button-generic",4),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.router.navigate([n.activityInput.btnL.path]))}),t.qZA(),t.TgZ(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"app-button-generic",4),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.router.navigate([n.activityInput.btnR.path]))}),t.qZA()(),t.TgZ(7,"div",5)(8,"app-button-select",6),t.NdJ("valueOutput",function(n){t.CHM(i);const o=t.oxw();return t.KtG(o.complexityValue=n.value)}),t.qZA(),t.TgZ(9,"app-button-select",6),t.NdJ("valueOutput",function(n){t.CHM(i);const o=t.oxw();return t.KtG(o.typeValue=n.value)}),t.qZA(),t.TgZ(10,"div",7)(11,"app-button-generic",4),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.startActivity())}),t.qZA(),t.TgZ(12,"app-button-generic",8),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.justLook=!n.justLook)}),t.qZA()()(),t.TgZ(13,"div",9)(14,"app-button-generic",10),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.router.navigate([n.activityInput.resumePath]))}),t.qZA()()(),t.BQk()}if(2&a){const i=t.oxw();t.xp6(3),t.s9C("label",i.activityInput.btnL.label),t.xp6(2),t.Oqu(i.activityInput.title),t.xp6(),t.s9C("label",i.activityInput.btnR.label),t.xp6(2),t.Q6J("options",i.complexityOptions),t.xp6(),t.Q6J("options",i.typeOptions),t.xp6(2),t.Q6J("label",i.startBtnLabel),t.xp6(),t.MGl("iconType","pi ",i.justLook?"pi-eye":"pi-eye-slash","")}}function S(a,A){if(1&a){const i=t.EpF();t.TgZ(0,"app-letter-activity-shared",11),t.NdJ("closeActivityEvent",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.activityStarted=!1)}),t.qZA()}if(2&a){const i=t.oxw();t.Q6J("activityLayoutInput",i.activityLayoutValue)("answerQuestionInput",i.answerQuestionValue)}}let m=(()=>{class a{constructor(){this.router=(0,t.f3M)(p.F0),this.startBtnLabel="Empezar",this.activityStarted=!1,this.activityLayoutValue=new C.N1,this.answerQuestionValue=[],this.justLook=!1,this.typeValue="",this.complexityValue=[],this.typeOptions=[],this.complexityOptions=[]}ngOnChanges(){this.activityInput&&(this.typeOptions=[{label:this.activityInput.title,value:this.activityInput.type},{label:"Romanji",value:u.ROMANJI}],this.typeValue=this.typeOptions[0].value,this.complexityOptions=this.activityInput.options,this.complexityValue=this.complexityOptions[0].value)}startActivity(){if(this.createAnswerQuestionModel(),this.answerQuestionValue.length<1)return void console.log("Selecciona algun tipo");let i=new C.N1;i={...i,justLook:this.justLook},this.activityLayoutValue=i,this.activityStarted=!0}createAnswerQuestionModel(){this.answerQuestionValue=this.complexityValue.map(i=>({question:this.typeValue===u.ROMANJI?i.translation:i.value,answer:this.typeValue===u.ROMANJI?[i.value]:[i.translation],info:i}))}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-activity-page-shared"]],inputs:{activityInput:"activityInput"},standalone:!0,features:[t._Bn([j,w]),t.TTD,t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["letter",""],[1,"activity-layout"],[1,"activity-header","space-btw"],["shape","rounded",3,"label","click"],[1,"activity-body"],[3,"options","valueOutput"],[1,"btn-start"],["shape","rounded",3,"iconType","click"],[1,"activity-footer","one-btn"],["iconType","pi pi-bookmark","shape","rounded",3,"click"],[3,"activityLayoutInput","answerQuestionInput","closeActivityEvent"]],template:function(e,n){if(1&e&&t.YNc(0,K,15,7,"ng-container",0)(1,S,1,2,"ng-template",null,1,t.W1O),2&e){const o=t.MAs(2);t.Q6J("ngIf",!n.activityStarted)("ngIfElse",o)}},dependencies:[O.u5,c.ez,c.O5,N.E,v.I,J.f]})}return a})();const h=JSON.parse('[{"value":"\u3042","translation":"a"},{"value":"\u3044","translation":"i"},{"value":"\u3046","translation":"u"},{"value":"\u3048","translation":"e"},{"value":"\u304a","translation":"o"},{"value":"\u304b","translation":"ka"},{"value":"\u304d","translation":"ki"},{"value":"\u304f","translation":"ku"},{"value":"\u3051","translation":"ke"},{"value":"\u3053","translation":"ko"},{"value":"\u3055","translation":"sa"},{"value":"\u3057","translation":"shi"},{"value":"\u3059","translation":"su"},{"value":"\u305b","translation":"se"},{"value":"\u305d","translation":"so"},{"value":"\u305f","translation":"ta"},{"value":"\u3061","translation":"chi"},{"value":"\u3064","translation":"tsu"},{"value":"\u3066","translation":"te"},{"value":"\u3068","translation":"to"},{"value":"\u306a","translation":"na"},{"value":"\u306b","translation":"ni"},{"value":"\u306c","translation":"nu"},{"value":"\u306d","translation":"ne"},{"value":"\u306e","translation":"no"},{"value":"\u306f","translation":"ha"},{"value":"\u3072","translation":"hi"},{"value":"\u3075","translation":"fu"},{"value":"\u3078","translation":"he"},{"value":"\u307b","translation":"ho"},{"value":"\u307e","translation":"ma"},{"value":"\u307f","translation":"mi"},{"value":"\u3080","translation":"mu"},{"value":"\u3081","translation":"me"},{"value":"\u3082","translation":"mo"},{"value":"\u3084","translation":"ya"},{"value":"","translation":""},{"value":"\u3086","translation":"yu"},{"value":"","translation":""},{"value":"\u3088","translation":"yo"},{"value":"\u3089","translation":"ra"},{"value":"\u308a","translation":"ri"},{"value":"\u308b","translation":"ru"},{"value":"\u308c","translation":"re"},{"value":"\u308d","translation":"ro"},{"value":"\u308f","translation":"wa"},{"value":"","translation":""},{"value":"","translation":""},{"value":"","translation":""},{"value":"\u3092","translation":"wo"},{"value":"\u3093","translation":"n"}]'),d=JSON.parse('[{"value":"\u304c","translation":"ga"},{"value":"\u304e","translation":"gi"},{"value":"\u3050","translation":"gu"},{"value":"\u3052","translation":"ge"},{"value":"\u3054","translation":"go"},{"value":"\u3056","translation":"za"},{"value":"\u3058","translation":"ji"},{"value":"\u305a","translation":"zu"},{"value":"\u305c","translation":"ze"},{"value":"\u305e","translation":"zo"},{"value":"\u3060","translation":"da"},{"value":"\u3062","translation":"ji"},{"value":"\u3065","translation":"zu"},{"value":"\u3067","translation":"de"},{"value":"\u3069","translation":"do"},{"value":"\u3070","translation":"ba"},{"value":"\u3073","translation":"bi"},{"value":"\u3076","translation":"bu"},{"value":"\u3079","translation":"be"},{"value":"\u307c","translation":"bo"},{"value":"\u3071","translation":"pa"},{"value":"\u3074","translation":"pi"},{"value":"\u3077","translation":"pu"},{"value":"\u307a","translation":"pe"},{"value":"\u307d","translation":"po"}]'),_=JSON.parse('[{"value":"\u304d\u3083","translation":"kya"},{"value":"\u304d\u3085","translation":"kyu"},{"value":"\u304d\u3087","translation":"kyo"},{"value":"\u3057\u3083","translation":"sha"},{"value":"\u3057\u3085","translation":"shu"},{"value":"\u3057\u3087","translation":"sho"},{"value":"\u3061\u3083","translation":"cha"},{"value":"\u3061\u3085","translation":"chu"},{"value":"\u3061\u3087","translation":"cho"},{"value":"\u306b\u3083","translation":"nya"},{"value":"\u306b\u3085","translation":"nyu"},{"value":"\u306b\u3087","translation":"nyo"},{"value":"\u3072\u3083","translation":"hya"},{"value":"\u3072\u3085","translation":"hyu"},{"value":"\u3072\u3087","translation":"hyo"},{"value":"\u307f\u3083","translation":"mya"},{"value":"\u307f\u3085","translation":"myu"},{"value":"\u307f\u3087","translation":"myo"},{"value":"\u308a\u3083","translation":"rya"},{"value":"\u308a\u3085","translation":"ryu"},{"value":"\u308a\u3087","translation":"ryo"}]'),g=JSON.parse('[{"value":"\u30a2","translation":"a"},{"value":"\u30a4","translation":"i"},{"value":"\u30a6","translation":"u"},{"value":"\u30a8","translation":"e"},{"value":"\u30aa","translation":"o"},{"value":"\u30ab","translation":"ka"},{"value":"\u30ad","translation":"ki"},{"value":"\u30af","translation":"ku"},{"value":"\u30b1","translation":"ke"},{"value":"\u30b3","translation":"ko"},{"value":"\u30b5","translation":"sa"},{"value":"\u30b7","translation":"shi"},{"value":"\u30b9","translation":"su"},{"value":"\u30bb","translation":"se"},{"value":"\u30bd","translation":"so"},{"value":"\u30bf","translation":"ta"},{"value":"\u30c1","translation":"chi"},{"value":"\u30c4","translation":"tsu"},{"value":"\u30c6","translation":"te"},{"value":"\u30c8","translation":"to"},{"value":"\u30ca","translation":"na"},{"value":"\u30cb","translation":"ni"},{"value":"\u30cc","translation":"nu"},{"value":"\u30cd","translation":"ne"},{"value":"\u30ce","translation":"no"},{"value":"\u30cf","translation":"ha"},{"value":"\u30d2","translation":"hi"},{"value":"\u30d5","translation":"fu"},{"value":"\u30d8","translation":"he"},{"value":"\u30db","translation":"ho"},{"value":"\u30de","translation":"ma"},{"value":"\u30df","translation":"mi"},{"value":"\u30e0","translation":"mu"},{"value":"\u30e1","translation":"me"},{"value":"\u30e2","translation":"mo"},{"value":"\u30e4","translation":"ya"},{"value":"","translation":""},{"value":"\u30e6","translation":"yu"},{"value":"","translation":""},{"value":"\u30e8","translation":"yo"},{"value":"\u30e9","translation":"ra"},{"value":"\u30ea","translation":"ri"},{"value":"\u30eb","translation":"ru"},{"value":"\u30ec","translation":"re"},{"value":"\u30ed","translation":"ro"},{"value":"\u30ef","translation":"wa"},{"value":"","translation":""},{"value":"","translation":""},{"value":"","translation":""},{"value":"\u30f2","translation":"wo"},{"value":"\u30f3","translation":"n"}]'),y=JSON.parse('[{"value":"\u30ac","translation":"ga"},{"value":"\u30ae","translation":"gi"},{"value":"\u30b0","translation":"gu"},{"value":"\u30b2","translation":"ge"},{"value":"\u30b4","translation":"go"},{"value":"\u30b6","translation":"za"},{"value":"\u30b8","translation":"ji"},{"value":"\u30ba","translation":"zu"},{"value":"\u30bc","translation":"ze"},{"value":"\u30be","translation":"zo"},{"value":"\u30c0","translation":"da"},{"value":"\u30c2","translation":"ji"},{"value":"\u30c5","translation":"zu"},{"value":"\u30c7","translation":"de"},{"value":"\u30c9","translation":"do"},{"value":"\u30d0","translation":"ba"},{"value":"\u30d3","translation":"bi"},{"value":"\u30d6","translation":"bu"},{"value":"\u30d9","translation":"be"},{"value":"\u30dc","translation":"bo"},{"value":"\u30d1","translation":"pa"},{"value":"\u30d4","translation":"pi"},{"value":"\u30d7","translation":"pu"},{"value":"\u30da","translation":"pe"},{"value":"\u30dd","translation":"po"}]'),b=JSON.parse('[{"value":"\u30ad\u30e3","translation":"kya"},{"value":"\u30ad\u30e5","translation":"kyu"},{"value":"\u30ad\u30e7","translation":"kyo"},{"value":"\u30b7\u30e3","translation":"sha"},{"value":"\u30b7\u30e5","translation":"shu"},{"value":"\u30b7\u30e7","translation":"sho"},{"value":"\u30c1\u30e3","translation":"cha"},{"value":"\u30c1\u30e5","translation":"chu"},{"value":"\u30c1\u30e7","translation":"cho"},{"value":"\u30cb\u30e3","translation":"nya"},{"value":"\u30cb\u30e5","translation":"nyu"},{"value":"\u30cb\u30e7","translation":"nyo"},{"value":"\u30d2\u30e3","translation":"hya"},{"value":"\u30d2\u30e5","translation":"hyu"},{"value":"\u30d2\u30e7","translation":"hyo"},{"value":"\u30df\u30e3","translation":"mya"},{"value":"\u30df\u30e5","translation":"myu"},{"value":"\u30df\u30e7","translation":"myo"},{"value":"\u30ea\u30e3","translation":"rya"},{"value":"\u30ea\u30e5","translation":"ryu"},{"value":"\u30ea\u30e7","translation":"ryo"}]'),Z=[{label:"B\xe1sico",value:h.concat(d).filter(a=>""!==a.value)},{label:"Complejo",value:_},{label:"Todo",value:h.concat(d,_).filter(a=>""!==a.value)}],x=[{label:"B\xe1sico",value:g.concat(y).filter(a=>""!==a.value)},{label:"Complejo",value:b},{label:"Todo",value:g.concat(y,b).filter(a=>""!==a.value)}],R=[{label:"B\xe1sico",value:[1]},{label:"Complejo",value:[2]},{label:"Todo",value:[3]}];let M=(()=>{class a{constructor(){this.activityOutput={btnR:{label:"Katakana",path:l.W.katakana_act},btnL:{label:"Hiragana",path:l.W.hiragana_act},title:"Kanji",resumePath:l.W.kanji_resume,type:u.KANJI,options:R}}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-kanji-activity"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[3,"activityInput"]],template:function(e,n){1&e&&t._UZ(0,"app-activity-page-shared",0),2&e&&t.Q6J("activityInput",n.activityOutput)},dependencies:[m]})}return a})(),z=(()=>{class a{constructor(){this.activityOutput={btnR:{label:"Kanji",path:l.W.kanji_act},btnL:{label:"Katakana",path:l.W.katakana_act},title:"Hiragana",resumePath:l.W.hiragana_resume,type:u.HIRAGANA,options:Z}}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-hiragana-activity"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[3,"activityInput"]],template:function(e,n){1&e&&t._UZ(0,"app-activity-page-shared",0),2&e&&t.Q6J("activityInput",n.activityOutput)},dependencies:[m]})}return a})(),H=(()=>{class a{constructor(){this.activityOutput={btnR:{label:"Kanji",path:l.W.kanji_act},btnL:{label:"Hiragana",path:l.W.hiragana_act},title:"Katakana",resumePath:l.W.katakana_resume,type:u.KATAKANA,options:x}}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-katakana-activity"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[3,"activityInput"]],template:function(e,n){1&e&&t._UZ(0,"app-activity-page-shared",0),2&e&&t.Q6J("activityInput",n.activityOutput)},dependencies:[m]})}return a})();const Q=a=>({"no-shadow":a});let L=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-item-letter-resume-shared"]],inputs:{item:"item"},standalone:!0,features:[t.jDz],decls:7,vars:5,consts:[[1,"card-wrapper",3,"ngClass"],[1,"card-title"],[1,"card-body"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2)(5,"p"),t._uU(6),t.qZA()()()),2&e&&(t.Q6J("ngClass",t.VKq(3,Q,""===n.item.value)),t.xp6(3),t.hij(" ",n.item.value," "),t.xp6(3),t.hij(" ",n.item.translation," "))},dependencies:[c.ez,c.mk],styles:[".card-wrapper[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;gap:1rem;align-items:center;box-shadow:0 2px 1px -1px var(--box-shadow),0 1px 1px 0 var(--box-shadow),0 1px 3px 0 var(--box-shadow);border-radius:6px}.card-wrapper[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}.card-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.no-shadow[_ngcontent-%COMP%]{box-shadow:none}"]})}return a})();var r=function(a){return a.HOME="home",a.VOCABULARY="vocabulary",a.ALPHABET="alphabet",a.PARTICLE="particle",a.KANJI="kanji",a.HIRAGANA="hiragana",a.KATAKANA="katakana",a}(r||{}),F=s(5626);function V(a,A){if(1&a&&(t.ynx(0),t.TgZ(1,"div"),t._UZ(2,"app-item-letter-resume-shared",11),t.qZA(),t.BQk()),2&a){const i=A.$implicit,e=t.oxw();t.xp6(),t.Gre("item-letter ",e.tabSelected.itemClass,""),t.xp6(),t.Q6J("item",i)}}let f=(()=>{class a{constructor(){this.router=(0,t.f3M)(p.F0),this.paths=l.W,this.itemSelected=r.HIRAGANA,this.routesEnum=r,this.tabs=[],this.previousPath="",this.tabSelected={title:"",content:[]}}ngOnInit(){this.tabSelected=this.tabs[0]}ngOnChanges(){this.router.url.includes(r.HIRAGANA)&&(this.itemSelected=r.HIRAGANA),this.router.url.includes(r.KATAKANA)&&(this.itemSelected=r.KATAKANA),this.router.url.includes(r.KANJI)&&(this.itemSelected=r.KANJI)}selectTab(i){this.tabSelected=i}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-resume-page-shared"]],inputs:{tabs:"tabs",previousPath:"previousPath"},standalone:!0,features:[t.TTD,t.jDz],decls:11,vars:6,consts:[[1,"resume-page"],[1,"header-close"],["iconType","pi pi-times","shape","rounded",3,"click"],[1,"header-nav"],["shape","rounded","size","small","label","\u3072",3,"background","click"],["shape","rounded","size","small","label","\u30ab",3,"background","click"],["shape","rounded","size","small","label","\u6f22\u5b57",3,"background","click"],[1,"panel-tab"],[3,"tabs","activeTab","selectedTab"],[1,"container-resume-letter"],[4,"ngFor","ngForOf"],[3,"item"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-button-generic",2),t.NdJ("click",function(){return n.router.navigate([n.previousPath])}),t.qZA()(),t.TgZ(3,"div",3)(4,"app-button-generic",4),t.NdJ("click",function(){return n.router.navigate([n.paths.hiragana_resume])}),t.qZA(),t.TgZ(5,"app-button-generic",5),t.NdJ("click",function(){return n.router.navigate([n.paths.katakana_resume])}),t.qZA(),t.TgZ(6,"app-button-generic",6),t.NdJ("click",function(){return n.router.navigate([n.paths.kanji_resume])}),t.qZA()()(),t.TgZ(7,"div",7)(8,"app-tab",8),t.NdJ("selectedTab",function(W){return n.selectTab(W)}),t.qZA(),t.TgZ(9,"div",9),t.YNc(10,V,3,4,"ng-container",10),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("background",n.itemSelected!==n.routesEnum.HIRAGANA?"outline":void 0),t.xp6(),t.Q6J("background",n.itemSelected!==n.routesEnum.KATAKANA?"outline":void 0),t.xp6(),t.Q6J("background",n.itemSelected!==n.routesEnum.KANJI?"outline":void 0),t.xp6(2),t.Q6J("tabs",n.tabs)("activeTab",n.tabSelected.title),t.xp6(2),t.Q6J("ngForOf",n.tabSelected.content))},dependencies:[c.ez,c.sg,L,v.I,F.i],styles:[".container-resume-letter[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.container-resume-letter[_ngcontent-%COMP%]   .item-letter[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.resume-page[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:.5rem}.resume-page[_ngcontent-%COMP%] > .header-nav[_ngcontent-%COMP%]{display:flex;gap:.5rem;justify-content:center;align-items:center}"]})}return a})();const U=[{path:"",component:T,children:[{path:"",pathMatch:"full",redirectTo:""},{path:"",component:I},{path:l.m.KANJI,component:M},{path:l.m.KANJI+"/"+l.m.RESUME,component:(()=>{class a{constructor(){this.previousPath=l.W.kanji_act,this.data=[{title:"",content:[]}]}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-kanji-resume"]],standalone:!0,features:[t.jDz],decls:1,vars:2,consts:[[3,"tabs","previousPath"]],template:function(e,n){1&e&&t._UZ(0,"app-resume-page-shared",0),2&e&&t.Q6J("tabs",n.data)("previousPath",n.previousPath)},dependencies:[f]})}return a})()},{path:l.m.HIRAGANA,component:z},{path:l.m.HIRAGANA+"/"+l.m.RESUME,component:(()=>{class a{constructor(){this.previousPath=l.W.hiragana_act,this.data=[{title:"B\xe1sico",content:h,itemClass:"fiveItemsPerRow"},{title:"Diacr\xedtico",content:d,itemClass:"fiveItemsPerRow"},{title:"Diptongos",content:_,itemClass:"threeItemsPerRow"}]}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-hiragana-resume"]],standalone:!0,features:[t.jDz],decls:1,vars:2,consts:[[3,"tabs","previousPath"]],template:function(e,n){1&e&&t._UZ(0,"app-resume-page-shared",0),2&e&&t.Q6J("tabs",n.data)("previousPath",n.previousPath)},dependencies:[f]})}return a})()},{path:l.m.KATAKANA,component:H},{path:l.m.KATAKANA+"/"+l.m.RESUME,component:(()=>{class a{constructor(){this.previousPath=l.W.katakana_act,this.data=[{title:"B\xe1sico",content:g,itemClass:"fiveItemsPerRow"},{title:"Diacr\xedtico",content:y,itemClass:"fiveItemsPerRow"},{title:"Diptongos",content:b,itemClass:"threeItemsPerRow"}]}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-katakana-resume"]],standalone:!0,features:[t.jDz],decls:1,vars:2,consts:[[3,"tabs","previousPath"]],template:function(e,n){1&e&&t._UZ(0,"app-resume-page-shared",0),2&e&&t.Q6J("tabs",n.data)("previousPath",n.previousPath)},dependencies:[f]})}return a})()}]}]}}]);