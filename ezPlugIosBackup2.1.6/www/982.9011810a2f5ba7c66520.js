(self.webpackChunkeZPlug=self.webpackChunkeZPlug||[]).push([[982],{982:(t,n,i)=>{"use strict";i.r(n),i.d(n,{ChargeBlePageModule:()=>P});var e=i(8583),o=i(665),a=i(5298),r=i(7823),s=i(4762),c=i(6738),g=i(5466),l=i(2273),d=i(7716),p=i(4687),h=i(4471),u=i(7906),Z=i(5970),m=i(6773);const f=["refresh"];function _(t,n){1&t&&d._UZ(0,"ion-img",21)}function x(t,n){1&t&&d._UZ(0,"ion-img",22)}let b=(()=>{class t{constructor(t,n,i,e,o,a,r,s,c,g){this.activatedRoute=t,this.router=n,this.callNumber=i,this.loaderService=e,this.dashboardService=o,this.modalController=a,this.alertService=r,this.signalRService=s,this.platform=c,this.renderer2=g,this.stationDetails=[],this.charge=!1,this.loaderMsg="",this.time="00:00:00",this.kwh=0,this.cost=0,this.btnPayment=!0,this.btnUnlock=!0,this.btnUnlockLoader=!1,this.btnPlugged=!0,this.transactionStatus=!1,this.stopRequest=!0,this.userID="",this.price=0,this.interval=1e3}localNotification(t){return(0,s.mG)(this,void 0,void 0,function*(){let n=c(c.now()).add(60*t,"minutes").format();yield l.s.schedule({notifications:[{title:"eZCharge Notification",body:"Estimated time reached",id:1,schedule:{at:c(n,c.defaultFormat).toDate()},attachments:[{id:"face",url:"http://placekitten.com/g/300/20",options:{}}],actionTypeId:"",extra:null}]})})}ngOnInit(){}ionViewWillEnter(){return(0,s.mG)(this,void 0,void 0,function*(){this.stationDetails=yield this.dashboardService.getObject(g.E.STATION_DETAILS_INFO)})}callStation(t){this.callNumber.callNumber(t,!0).then(t=>console.log("Launched dialer!",t)).catch(t=>{this.alertService.presentToast(t)})}ionViewDidEnter(){this.subscription=this.platform.backButton.subscribeWithPriority(9999,()=>{this.router.navigate(["app/station-details"])})}proceed(){}}return t.\u0275fac=function(n){return new(n||t)(d.Y36(a.gz),d.Y36(a.F0),d.Y36(p.X),d.Y36(h.D),d.Y36(u.u),d.Y36(r.IN),d.Y36(Z.c),d.Y36(m.M),d.Y36(r.t4),d.Y36(d.Qsj))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-charge-ble"]],viewQuery:function(t,n){if(1&t&&d.Gf(f,5),2&t){let t;d.iGM(t=d.CRH())&&(n.refresh=t.first)}},decls:60,vars:5,consts:[["color","primary"],["slot","start"],["routerLink","/app/station-details-ble"],[1,"ion-padding"],["size","7"],[2,"margin","0"],["size","5",1,"ion-text-right",3,"click"],[2,"text-decoration","underline","display","flex","float","right"],["name","call","color","primary",2,"margin-right","5px"],["size","12"],["name","pin","color","primary",2,"margin-right","5px"],[2,"min-height","0px"],["id","refresh",2,"position","absolute","top","0","right","0","padding","16px","z-index","99999"],["refresh",""],["color","primary","name","refresh-outline",2,"font-size","20px"],["style","height: 200px;","src","../../../../assets/images/loaders/chargeFinal.svg",4,"ngIf"],["style","height: 200px;","src","../../../../assets/images/loaders/chargeFinalAni.svg",4,"ngIf"],[1,"ion-justify-content-center",2,"padding","15px 7px"],["size","4","size-sm","4","size-md","3","size-lg","3","size-xl","2",1,"ion-text-center","progress"],["size","6"],["expand","full",1,"btn",3,"click"],["src","../../../../assets/images/loaders/chargeFinal.svg",2,"height","200px"],["src","../../../../assets/images/loaders/chargeFinalAni.svg",2,"height","200px"]],template:function(t,n){1&t&&(d.TgZ(0,"ion-header"),d.TgZ(1,"ion-toolbar",0),d.TgZ(2,"ion-buttons",1),d._UZ(3,"ion-back-button",2),d.qZA(),d.TgZ(4,"ion-title"),d._uU(5,"Charging"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(6,"ion-content"),d.TgZ(7,"ion-card"),d.TgZ(8,"ion-row",3),d.TgZ(9,"ion-col",4),d.TgZ(10,"h4",5),d.TgZ(11,"ion-text",0),d._uU(12),d.qZA(),d.qZA(),d.qZA(),d.TgZ(13,"ion-col",6),d.NdJ("click",function(){return n.callStation(n.stationDetails.contact)}),d.TgZ(14,"span",7),d._UZ(15,"ion-icon",8),d.TgZ(16,"ion-text",0),d._uU(17),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"ion-col",9),d._UZ(19,"ion-icon",10),d.TgZ(20,"ion-text",0),d._uU(21),d.qZA(),d.qZA(),d.qZA(),d._UZ(22,"ion-item-divider",11),d.TgZ(23,"ion-card-content"),d.TgZ(24,"ion-row"),d.TgZ(25,"div",12,13),d._UZ(27,"ion-icon",14),d.qZA(),d.TgZ(28,"ion-col",9),d.YNc(29,_,1,0,"ion-img",15),d.YNc(30,x,1,0,"ion-img",16),d.qZA(),d.qZA(),d.TgZ(31,"ion-row",17),d.TgZ(32,"ion-col",18),d.TgZ(33,"p"),d._uU(34,"Time"),d.qZA(),d.TgZ(35,"p"),d._uU(36,"00"),d.qZA(),d.TgZ(37,"span"),d._uU(38,"hour"),d.qZA(),d.qZA(),d.TgZ(39,"ion-col",18),d.TgZ(40,"p"),d._uU(41,"kWh"),d.qZA(),d.TgZ(42,"p"),d._uU(43,"00"),d.qZA(),d.TgZ(44,"span"),d._uU(45,"units"),d.qZA(),d.qZA(),d.TgZ(46,"ion-col",18),d.TgZ(47,"p"),d._uU(48,"Cost"),d.qZA(),d.TgZ(49,"p"),d._uU(50,"00"),d.qZA(),d.TgZ(51,"span"),d._uU(52,"INR"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(53,"ion-row"),d.TgZ(54,"ion-col",19),d.TgZ(55,"ion-button",20),d.NdJ("click",function(){return n.proceed()}),d._uU(56,"Start "),d.qZA(),d.qZA(),d.TgZ(57,"ion-col",19),d.TgZ(58,"ion-button",20),d.NdJ("click",function(){return n.proceed()}),d._uU(59,"Stop "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(12),d.Oqu(n.stationDetails.siteName),d.xp6(5),d.Oqu(n.stationDetails.contact),d.xp6(4),d.Oqu(n.stationDetails.address),d.xp6(8),d.Q6J("ngIf",!n.charge),d.xp6(1),d.Q6J("ngIf",n.charge))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.YI,a.rH,r.wd,r.W2,r.PM,r.Nd,r.wI,r.yW,r.gu,r.rH,r.FN,e.O5,r.YG,r.Xz],styles:["[_nghost-%COMP%]{--page-page-color:var(--ion-color-page-content)}.text-icon-muted[_ngcontent-%COMP%]{color:#21658180!important}.text-muted[_ngcontent-%COMP%]{color:#00000080!important;font-size:14px}.text-muted-icon[_ngcontent-%COMP%]{--color:rgba(#000,0.5)!important}.avatar-circle[_ngcontent-%COMP%]{width:36px;height:36px;text-align:center;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;display:table;margin:0 auto}.initials[_ngcontent-%COMP%]{color:#fff;display:table-cell;vertical-align:middle}ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--page-page-color)}ion-card[_ngcontent-%COMP%], ion-item-divider[_ngcontent-%COMP%]{background-color:#fff!important}.grid[_ngcontent-%COMP%]{position:relative;margin:40px auto}.grid[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]{width:100%;height:100px}.grid-item[_ngcontent-%COMP%]{justify-content:center;align-items:center;flex-direction:row;display:flex}#loading3[_ngcontent-%COMP%]{position:absolute;width:60px;height:30px}#loading3[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:40px;display:inline-block;background-color:#4caf50;animation:strechdelay 1.2s ease-in-out infinite}#loading3[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%]{-webkit-animation-delay:-1.1s}#loading3[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%]{-webkit-animation-delay:-1s}#loading3[_ngcontent-%COMP%]   .line4[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s}#loading3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:4px}#loading4[_ngcontent-%COMP%]{position:absolute;width:60px;height:30px}#loading4[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;display:inline-block;background-color:#4caf50}#loading4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-right:4px}.progress[_ngcontent-%COMP%]{background-color:#216581}.progress[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}p[_ngcontent-%COMP%]{color:#191919}.spin[_ngcontent-%COMP%]{animation-name:spin;animation-duration:1s;animation-iteration-count:1;animation-timing-function:linear}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),t})();var C=i(1188);const O=[{path:"",component:b}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({providers:[u.u,C.V],imports:[[e.ez,o.u5,r.Pc,a.Bz.forChild(O)]]}),t})()}}]);