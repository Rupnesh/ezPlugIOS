(self.webpackChunkeZPlug=self.webpackChunkeZPlug||[]).push([[1855],{1855:(o,e,t)=>{"use strict";t.r(e),t.d(e,{ion_modal:()=>w});var a=t(3150),i=t(7585),s=t(7330),r=t(7053),n=t(1269),d=t(4001),l=t(4086),m=t(7807),c=t(9461),h=t(2377);t(960);const p=(o,e)=>{const t=(0,l.c)().addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a=(0,l.c)().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=(0,l.c)().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(e){const o=window.innerWidth<768,s="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,r=(0,l.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",t=`translateY(${s?"-10px":o}) scale(0.93)`;r.afterStyles({transform:t}).beforeAddWrite(()=>n.style.setProperty("background-color","black")).addElement(e).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:t,borderRadius:"10px 10px 0 0"}]),i.addAnimation(r)}else if(i.addAnimation(t),s){const o=`translateY(-10px) scale(${s?.93:1})`;r.afterStyles({transform:o}).addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:o}]);const t=(0,l.c)().afterStyles({transform:o}).addElement(e.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:o}]);i.addAnimation([r,t])}else a.fromTo("opacity","0","1")}else i.addAnimation(t);return i},f=(o,e,t=500)=>{const a=(0,l.c)().addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=(0,l.c)().addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),s=(0,l.c)().addElement(o).easing("cubic-bezier(0.32,0.72,0,1)").duration(t).addAnimation(i);if(e){const o=window.innerWidth<768,t="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,r=(0,l.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(o=>{1===o&&(e.style.setProperty("overflow",""),Array.from(n.querySelectorAll("ion-modal")).filter(o=>void 0!==o.presentingElement).length<=1&&n.style.setProperty("background-color",""))}),n=document.body;if(o){const o=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",a=`translateY(${t?"-10px":o}) scale(0.93)`;r.addElement(e).keyframes([{offset:0,filter:"contrast(0.85)",transform:a,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),s.addAnimation(r)}else if(s.addAnimation(a),t){const o=`translateY(-10px) scale(${t?.93:1})`;r.addElement(e.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:o},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const a=(0,l.c)().addElement(e.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:o},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);s.addAnimation([r,a])}else i.fromTo("opacity","1","0")}else s.addAnimation(a);return s},b=o=>{const e=(0,l.c)(),t=(0,l.c)(),a=(0,l.c)();return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),e.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([t,a])},x=o=>{const e=(0,l.c)(),t=(0,l.c)(),a=(0,l.c)(),i=o.querySelector(".modal-wrapper");return t.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),e.addElement(o).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([t,a])},w=class{constructor(o){(0,a.r)(this,o),this.didPresent=(0,a.e)(this,"ionModalDidPresent",7),this.willPresent=(0,a.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,a.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,r.B)},this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onLifecycle=o=>{const e=this.usersElement,t=u[o.type];if(e&&t){const a=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:o.detail});e.dispatchEvent(a)}}}swipeToCloseChanged(o){this.gesture?this.gesture.enable(o):o&&this.initSwipeToClose()}connectedCallback(){(0,r.e)(this.el)}async present(){if(this.presented)return;const o=this.el.querySelector(".modal-wrapper");if(!o)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await(0,s.a)(this.delegate,o,this.component,["ion-page"],e),await(0,d.e)(this.usersElement),(0,a.c)(()=>this.el.classList.add("show-modal")),await(0,r.d)(this,"modalEnter",p,b,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==(0,i.b)(this))return;const o=this.leaveAnimation||i.c.get("modalLeave",f),e=this.animation=o(this.el,this.presentingElement);this.gesture=((o,e,t)=>{const a=o.offsetHeight;let i=!1;const s=(0,c.createGesture)({el:o,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:o=>{const e=o.event.target;return null===e||!e.closest||null===e.closest("ion-content, ion-footer")},onStart:()=>{e.progressStart(!0,i?1:0)},onMove:o=>{const t=(0,h.j)(1e-4,o.deltaY/a,.9999);e.progressStep(t)},onEnd:o=>{const r=o.velocityY,n=(0,h.j)(1e-4,o.deltaY/a,.9999),d=(o.deltaY+1e3*r)/a>=.5;let l=d?-.001:.001;d?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=(0,m.g)([0,0],[.32,.72],[0,1],[1,1],n)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=(0,m.g)([0,0],[1,0],[.68,.28],[1,1],n)[0]);const c=((o,e)=>(0,h.j)(400,o/Math.abs(1.1*e),500))(d?n*a:(1-n)*a,r);i=d,s.enable(!1),e.onFinish(()=>{d||s.enable(!0)}).progressEnd(d?1:0,l,c),d&&t()}});return s})(this.el,e,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}async dismiss(o,e){if(this.gestureAnimationDismissing&&"gesture"!==e)return!1;const t=r.h.get(this)||[],a=await(0,r.f)(this,o,e,"modalLeave",f,x,this.presentingElement);return a&&(await(0,s.d)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),t.forEach(o=>o.destroy())),this.animation=void 0,a}onDidDismiss(){return(0,r.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,r.g)(this.el,"ionModalWillDismiss")}render(){const{htmlAttributes:o}=this,e=(0,i.b)(this);return(0,a.h)(a.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===e},(0,n.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,a.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===e&&(0,a.h)("div",{class:"modal-shadow"}),(0,a.h)("div",{tabindex:"0"}),(0,a.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,a.h)("div",{tabindex:"0"}))}get el(){return(0,a.i)(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},u={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};w.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);