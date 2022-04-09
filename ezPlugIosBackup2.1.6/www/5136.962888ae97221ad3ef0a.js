(self.webpackChunkeZPlug=self.webpackChunkeZPlug||[]).push([[5136],{5136:(n,t,i)=>{"use strict";i.r(t),i.d(t,{WalkthroughPageModule:()=>p});var e=i(8583),o=i(665),a=i(5298),r=i(7823),l=i(4607),s=i(5466),c=i(4909),g=i(7716),d=i(1188);const h=[{path:"",component:(()=>{class n{constructor(n,t,i){this.menu=n,this.storage=t,this.router=i,this.slidesOptions={zoom:{toggle:!1}},this.isFirstSlide=!0,this.isLastSlide=!1}ngOnInit(){this.menu.enable(!1),c.A_.setBackgroundColor({color:"#216581"})}ngAfterViewInit(){this.slides.isBeginning().then(n=>{this.isFirstSlide=n}),this.slides.isEnd().then(n=>{this.isLastSlide=n}),this.slides.ionSlideWillChange.subscribe(n=>{this.slides.isBeginning().then(n=>{this.isFirstSlide=n}),this.slides.isEnd().then(n=>{this.isLastSlide=n})})}skipWalkthrough(){this.slides.length().then(n=>{this.slides.slideTo(n)})}getStarted(n){this.storage.setItem(s.E.TUTORIAL_COMPLETED,"true").then(t=>{"start"==n&&this.router.navigate(["getting-started"]),"login"==n&&this.router.navigate(["auth/login"])})}}return n.\u0275fac=function(t){return new(t||n)(g.Y36(r._q),g.Y36(d.V),g.Y36(a.F0))},n.\u0275cmp=g.Xpm({type:n,selectors:[["app-walkthrough"]],viewQuery:function(n,t){if(1&n&&g.Gf(r.Hr,7),2&n){let n;g.iGM(n=g.CRH())&&(t.slides=n.first)}},hostVars:4,hostBindings:function(n,t){2&n&&g.ekj("first-slide-active",t.isFirstSlide)("last-slide-active",t.isLastSlide)},decls:74,vars:2,consts:[[1,"ion-no-border"],["slot","end"],["fill","clear",1,"skip-walkthrough-button",3,"click"],[3,"fullscreen"],["pager","true",1,"walkthrough-slides",3,"options"],[1,"first-slide","illustration-and-decoration-slide",2,"background","#fff !important"],[1,"slide-inner-row"],[1,"illustration-col"],["src","assets/images/walkthrough-illustration-1.svg",1,"illustration-image"],[1,"decoration-col"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","height","100px","width","100%","viewBox","0 0 90 20",0,"xml","space","preserve","preserveAspectRatio","none",1,"vector-decoration",2,"enable-background","new 0 0 90 20"],["d","M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z"],[1,"info-col"],[1,"info-wrapper"],[1,"info-title"],[1,"info-paragraph"],[1,"second-slide","illustration-and-decoration-slide",2,"background","#fff !important"],["src","assets/images/walkthrough-illustration-2.svg",1,"illustration-image"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","height","100px","width","100%","viewBox","0 0 64 24",0,"xml","space","preserve","preserveAspectRatio","none",1,"vector-decoration",2,"enable-background","new 0 0 64 24"],["d","M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z"],[1,"third-slide","illustration-and-decoration-slide",2,"background","#fff !important"],["src","assets/images/walkthrough-illustration-3.svg",1,"illustration-image"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","height","100px","width","100%","viewBox","0 0 64 14",0,"xml","space","preserve","preserveAspectRatio","none",1,"vector-decoration",2,"enable-background","new 0 0 64 24"],["d","M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z"],[1,"last-slide","illustration-and-decoration-slide",2,"background","#fff !important"],["src","assets/images/walkthrough-illustration-4.svg",1,"illustration-image"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","height","100px","width","100%","viewBox","0 0 64 18",0,"xml","space","preserve","preserveAspectRatio","none",1,"vector-decoration",2,"enable-background","new 0 0 64 24"],["d","M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z"],[1,"info-outer"],[1,"call-to-actions-wrapper"],["expand","block",1,"get-started-button",3,"click"]],template:function(n,t){1&n&&(g.TgZ(0,"ion-header",0),g.TgZ(1,"ion-toolbar"),g.TgZ(2,"ion-buttons",1),g.TgZ(3,"ion-button",2),g.NdJ("click",function(){return t.skipWalkthrough()}),g._uU(4,"skip"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(5,"ion-content",3),g.TgZ(6,"ion-slides",4),g.TgZ(7,"ion-slide",5),g.TgZ(8,"ion-row",6),g.TgZ(9,"ion-col",7),g._UZ(10,"ion-img",8),g.qZA(),g.TgZ(11,"ion-col",9),g.O4$(),g.TgZ(12,"svg",10),g._UZ(13,"path",11),g.qZA(),g.qZA(),g.kcU(),g.TgZ(14,"ion-col",12),g.TgZ(15,"div",13),g.TgZ(16,"h3",14),g._uU(17,"What's the purpose of App?"),g.qZA(),g.TgZ(18,"p",15),g._uU(19," This app is created by "),g.TgZ(20,"b"),g._uU(21,"Ztric India"),g.qZA(),g._uU(22," team, to help the users of Electric Vehicle. "),g.qZA(),g.TgZ(23,"p",15),g.TgZ(24,"b"),g._uU(25,"User's with this App can easily access the charging station to get charged their vehicles."),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(26,"ion-slide",16),g.TgZ(27,"ion-row",6),g.TgZ(28,"ion-col",7),g._UZ(29,"ion-img",17),g.qZA(),g.TgZ(30,"ion-col",9),g.O4$(),g.TgZ(31,"svg",18),g._UZ(32,"path",19),g.qZA(),g.qZA(),g.kcU(),g.TgZ(33,"ion-col",12),g.TgZ(34,"div",13),g.TgZ(35,"h3",14),g._uU(36,"How to use this App?"),g.qZA(),g.TgZ(37,"p",15),g._uU(38," User with this App can easily find the nearby stations which are active, and using the QR code available on the satation they can connect by scanning the code. "),g.qZA(),g.TgZ(39,"p",15),g._uU(40," User can find the stations within the specific radius from the current location. "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(41,"ion-slide",20),g.TgZ(42,"ion-row",6),g.TgZ(43,"ion-col",7),g._UZ(44,"ion-img",21),g.qZA(),g.TgZ(45,"ion-col",9),g.O4$(),g.TgZ(46,"svg",22),g._UZ(47,"path",23),g.qZA(),g.qZA(),g.kcU(),g.TgZ(48,"ion-col",12),g.TgZ(49,"div",13),g.TgZ(50,"h3",14),g._uU(51,"Plug and Play."),g.qZA(),g.TgZ(52,"p",15),g._uU(53," This app provides the feature to the user that once plug the cable to station, station cares the further that cable might not get into unauthorised user, as station has Locking feature. "),g.qZA(),g.TgZ(54,"p",15),g._uU(55," Once user done with the charging and pay the Bill amount, than the cable is unlocked from the station. "),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(56,"ion-slide",24),g.TgZ(57,"ion-row",6),g.TgZ(58,"ion-col",7),g._UZ(59,"ion-img",25),g.qZA(),g.TgZ(60,"ion-col",9),g.O4$(),g.TgZ(61,"svg",26),g._UZ(62,"path",27),g.qZA(),g.qZA(),g.kcU(),g.TgZ(63,"ion-col",12),g.TgZ(64,"ion-row",28),g.TgZ(65,"ion-col"),g.TgZ(66,"div",13),g.TgZ(67,"h3",14),g._uU(68,"It's time to start"),g.qZA(),g.TgZ(69,"p",15),g._uU(70," Hope you like this tutorial, let's connect with the Station. "),g.qZA(),g.qZA(),g.qZA(),g.TgZ(71,"ion-col",29),g.TgZ(72,"ion-button",30),g.NdJ("click",function(){return t.getStarted("login")}),g._uU(73,"Login here"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(5),g.Q6J("fullscreen",!0),g.xp6(1),g.Q6J("options",t.slidesOptions))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.W2,r.Hr,r.A$,r.Nd,r.wI,r.Xz],styles:["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background);--page-swiper-pagination-space:40px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-first-slide-background:#c1ebff;--page-second-slide-background:#a9ebd2;--page-third-slide-background:#f0cbe5;--page-last-slide-background:#eef3ff;--page-vector-decoration-fill:var(--ion-color-light-shade)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--ion-toolbar-background:#0000}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:var(--ion-color-lightest)}ion-content[_ngcontent-%COMP%]{position:absolute;top:0}.walkthrough-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-dark);--bullet-background-active:var(--ion-color-dark);height:100%}.walkthrough-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-top:var(--app-header-height);border-bottom:var(--page-swiper-pagination-space) solid #0000;background-clip:padding-box;background-color:var(--page-vector-decoration-fill)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;flex-flow:column;justify-content:flex-start;align-items:center}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;min-height:auto;min-height:-moz-fit-content;min-height:fit-content;max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;min-height:12vh;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]   .vector-decoration[_ngcontent-%COMP%]{fill:currentColor;color:var(--page-vector-decoration-fill);background-color:var(--page-background);padding-bottom:4px;transform:translateZ(0);shape-rendering:geometricprecision;height:calc(100% + 1px)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{flex-grow:1;flex-shrink:0;min-height:auto;background-color:var(--page-background);margin-bottom:-1px;transform:translateZ(0)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * -1) var(--page-margin) 0;text-align:left}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin:0;margin-bottom:var(--page-margin);color:var(--ion-color-dark)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]{color:var(--ion-color-medium-shade);font-size:14px;margin:0 0 calc(var(--page-margin) / 2)}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-paragraph[_ngcontent-%COMP%]:last-child{margin-bottom:0}.first-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-first-slide-background)}.second-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-second-slide-background)}.third-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-third-slide-background)}.last-slide[_ngcontent-%COMP%]{--page-vector-decoration-fill:var(--page-last-slide-background)}.last-slide[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{border-width:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]{padding:var(--page-margin)}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]{height:100%;align-items:flex-end;flex-direction:column}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin:calc(var(--page-margin) * -1) 0 0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-outer[_ngcontent-%COMP%]   .call-to-actions-wrapper[_ngcontent-%COMP%]{max-height:-moz-fit-content;max-height:fit-content}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .get-started-button[_ngcontent-%COMP%]{margin:0}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]{padding-top:5px;align-items:center;justify-content:space-evenly}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .cta-leading-text[_ngcontent-%COMP%]{color:var(--ion-color-medium);font-size:16px}.last-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .alt-call-to-action-row[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{--color:var(--ion-color-secondary);margin:0}.first-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}.last-slide-active[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{display:none}.last-slide-active[_nghost-%COMP%]   .skip-walkthrough-button[_ngcontent-%COMP%]{visibility:hidden}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height)) / 2)}[_nghost-%COMP%]     .walkthrough-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}","app-image-shell.illustration-image[_ngcontent-%COMP%]{--image-shell-loading-background:#0000;--image-shell-spinner-color:var(--ion-color-lightest)}","@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:30vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin) / 2);font-size:20px}}@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:32vh;padding:0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin) / 2);font-size:20px}}@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:36vh;padding:2vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:34vh;padding:6vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:12vh}}@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3){.illustration-and-decoration-slide[_ngcontent-%COMP%]   .illustration-col[_ngcontent-%COMP%]{max-width:38vh;padding:4vh 0}.illustration-and-decoration-slide[_ngcontent-%COMP%]   .decoration-col[_ngcontent-%COMP%]{min-height:14vh}}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[[e.ez,o.u5,r.Pc,a.Bz.forChild(h),l.K]]}),n})()}}]);