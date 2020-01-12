!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ShuffleImages=t():e.ShuffleImages=t()}(window,(function(){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const s=(e,t,i="Node")=>"NodeList"===i?e.querySelectorAll(t):e.querySelector(t),o=(e,t,i)=>{e.addEventListener(t,i)},n=(e,t,i)=>{e.removeEventListener(t,i)},l=(e,t)=>{e.nextElementSibling?(e.nextElementSibling.style.visibility="visible",e.nextElementSibling.style.opacity="1",e.nextElementSibling.style.position="unset",e.nextElementSibling.classList.add("active")):(t.style.visibility="visible",t.style.opacity="1",t.style.position="unset",t.classList.add("active")),e.style.visibility="hidden",e.style.opacity="0",e.style.position="absolute",e.classList.remove("active")};i.d(t,"default",(function(){return r}));class r{constructor(e){this.options=e,this.shuffleImageElements=s(document,this.options.target,"NodeList"),this.isInit=!0,this.distance=null,this.triggerTime=null,this.node=null,this.defaults={type:"imageMouseMove",mouseMoveTrigger:50,hoverTrigger:200,scrollTrigger:100},this.settings={...this.defaults,...this.options},this.imageMouseMoveHandler=this.imageMouseMoveHandler.bind(this),this.imageMouseOverHandler=this.imageMouseOverHandler.bind(this),this.imageMouseOverHandler=this.imageMouseOverHandler.bind(this),this.imageMouseOutHandler=this.imageMouseOutHandler.bind(this),this.documentScrollHandler=this.documentScrollHandler.bind(this)}init(){if(this.isInit)return this.isInit=!1,void(this.shuffleImageElements.length>0&&this.shuffleImageElements.forEach(e=>{this.shuffleHandler(e)}))}destroy(){if(!this.isInit)return this.isInit=!0,void(this.shuffleImageElements.length>0&&this.shuffleImageElements.forEach(e=>{this.destroyShuffleHandler(e)}))}shuffleHandler(e){const t=s(e,e.firstElementChild.localName,"NodeList");switch(this.node=e,e.style.position="relative",e.style.minHeight="1px",e.style.overflow="hidden",t.forEach((e,t)=>{e.style.top="0",e.style.right="0",e.style.bottom="0",e.style.left="0",e.className.includes("active")?(e.style.visibility="visible",e.style.opacity="1",e.style.position="unset"):(e.style.visibility="hidden",e.style.position="absolute",e.style.opacity="0")}),this.settings.type){case"imageMouseMove":o(e,"mousemove",this.imageMouseMoveHandler);break;case"imageHover":o(e,"mouseover",this.imageMouseOverHandler),o(e,"mouseout",this.imageMouseOutHandler);break;case"documentMouseMove":o(document,"mousemove",this.imageMouseMoveHandler);break;case"documentScroll":o(document,"scroll",this.documentScrollHandler)}}destroyShuffleHandler(e){const t=s(e,e.firstElementChild.localName,"NodeList");switch(e.hasAttribute("style")&&e.removeAttribute("style"),t.forEach((e,t)=>{(e.className.includes("active")||e.hasAttribute("style"))&&e.removeAttribute("style")}),this.settings.type){case"imageMouseMove":n(e,"mousemove",this.imageMouseMoveHandler);break;case"imageHover":n(e,"mouseover",this.imageMouseOverHandler),n(e,"mouseout",this.imageMouseOutHandler);break;case"documentMouseMove":n(document,"mousemove",this.imageMouseMoveHandler);break;case"documentScroll":n(document,"scroll",this.documentScrollHandler)}}imageMouseMoveHandler(){let e=s(this.node,".active"),t=Math.round(Math.sqrt(Math.pow(event.clientY,2)+Math.pow(event.clientX,2)));Math.abs(t-this.distance)>this.settings.mouseMoveTrigger&&(l(e,this.node.firstElementChild),this.distance=t)}imageMouseOverHandler(){this.triggerTime=setInterval(()=>{let e=s(this.node,".active");l(e,this.node.firstElementChild)},this.settings.hoverTrigger)}imageMouseOutHandler(){clearInterval(this.triggerTime)}documentScrollHandler(){let e=window.pageYOffset,t=s(this.node,".active");Math.abs(e-this.distance)>this.settings.scrollTrigger&&(l(t,this.node.firstElementChild),this.distance=e)}}}]).default}));