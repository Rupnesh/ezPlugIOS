(self.webpackChunkeZPlug=self.webpackChunkeZPlug||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>c,keyboardDidOpen:()=>l,keyboardDidResize:()=>w,resetKeyboardAssist:()=>h,setKeyboardClose:()=>b,setKeyboardOpen:()=>g,startKeyboardAssist:()=>n,trackViewportChanges:()=>y});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},r=!1;const h=()=>{a={},d={},r=!1},n=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),l()||w(e)?g(e):c(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>g(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},g=(e,t)=>{u(e,t),r=!0},b=e=>{f(e),r=!1},l=()=>!r&&a.width===d.width&&(a.height-d.height)*d.scale>150,w=e=>r&&!c(e),c=e=>r&&d.height===e.innerHeight,u=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},f=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},y=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);