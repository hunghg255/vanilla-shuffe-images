!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ShuffleImages=t():e.ShuffleImages=t()}(window,(function(){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const i=(e,t,s="Node")=>"NodeList"===s?e.querySelectorAll(t):e.querySelector(t),o=(e,t,s)=>{e.addEventListener(t,s)},n=(e,t,s)=>{e.removeEventListener(t,s)},l=(e,t)=>{e.nextElementSibling?(e.nextElementSibling.style.visibility="visible",e.nextElementSibling.style.opacity="1",e.nextElementSibling.style.position="static",e.nextElementSibling.classList.add("active")):(t.style.visibility="visible",t.style.opacity="1",t.style.position="static",t.classList.add("active")),e.style.visibility="hidden",e.style.opacity="0",e.style.position="absolute",e.classList.remove("active")};s.d(t,"default",(function(){return r}));class r{constructor(e){this.options=e,this.shuffleImageElements=i(document,this.options.target,"NodeList"),this.isInit=!0,this.distance=null,this.triggerTime=[],this.node=null,this.defaults={type:"imageMouseMove",mouseMoveTrigger:50,hoverTrigger:200,scrollTrigger:100},this.settings={...this.defaults,...this.options},this.funcImageMouseMove=null,this.funcImageMouseOver=null,this.funcImageMouseOut=null,this.funcDocumentScroll=null}init(){this.isInit=!0,this.shuffleImageElements.forEach(e=>{e.removeAttribute("destroy"),e.id=function(e){for(var t="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=s.length,o=0;o<e;o++)t+=s.charAt(Math.floor(Math.random()*i));return t}(8),this.shuffleHandler(e)})}destroy(){this.isInit=!1,this.shuffleImageElements.forEach(e=>{this.destroyShuffleHandler(e)})}shuffleHandler(e){const t=i(e,e.firstElementChild.localName,"NodeList");if(t[1])switch(this.node=e,t[0].classList.add("active"),e.style.position="relative",e.style.minHeight="1px",e.style.overflow="hidden",t.forEach(e=>{e.style.top="0",e.style.right="0",e.style.bottom="0",e.style.left="0","active"===e.className?(e.style.visibility="visible",e.style.opacity="1",e.style.position="unset"):(e.style.visibility="hidden",e.style.position="absolute",e.style.opacity="0")}),this.funcImageMouseMove=this.imageMouseMoveHandler.bind(this,this.node),this.funcImageMouseOver=this.imageMouseOverHandler.bind(this,this.node),this.funcImageMouseOut=this.imageMouseOutHandler.bind(this),this.funcDocumentScroll=this.documentScrollHandler.bind(this,this.node),this.settings.type){case"imageMouseMove":o(e,"mousemove",this.funcImageMouseMove);break;case"imageHover":o(e,"mouseenter",this.funcImageMouseOver),o(e,"mouseleave",this.funcImageMouseOut);break;case"documentMouseMove":o(document,"mousemove",this.funcImageMouseMove);break;case"documentScroll":o(document,"scroll",this.funcDocumentScroll)}}destroyShuffleHandler(e){e.setAttribute("destroy","");const t=i(e,e.firstElementChild.localName,"NodeList");switch(e.hasAttribute("style")&&e.removeAttribute("style"),t.forEach((e,t)=>{(e.className.includes("active")||e.hasAttribute("style"))&&(e.removeAttribute("style"),e.classList.remove("active"))}),this.settings.type){case"imageMouseMove":n(e,"mousemove",this.funcImageMouseMove);break;case"imageHover":n(e,"mouseenter",this.funcImageMouseOver),n(e,"mouseleave",this.funcImageMouseOut);break;case"documentMouseMove":n(document,"mousemove",this.funcImageMouseMove);break;case"documentScroll":n(document,"scroll",this.funcDocumentScroll)}}imageMouseMoveHandler(e){if(e.hasAttribute("destroy"))return;let t,s;if("documentMouseMove"===this.settings.type)t=i(document,`.${e.className}`,"NodeList");else{const o=document.getElementById(e.id);t=i(o,".active"),s=o.firstElementChild}let o=Math.round(Math.sqrt(Math.pow(event.clientY,2)+Math.pow(event.clientX,2)));if(Math.abs(o-this.distance)>this.settings.mouseMoveTrigger){if(t.length)for(let e=0;e<t.length;e++){const s=t[e],o=i(s,".active");l(o,s.firstElementChild)}else l(t,s);this.distance=o}}imageMouseOverHandler(e){if(e.hasAttribute("destroy"))return;const t=document.getElementById(e.id),s=setInterval(()=>{const e=i(t,".active"),s=t.firstElementChild;l(e,s)},this.settings.hoverTrigger);this.triggerTime.push(s)}imageMouseOutHandler(){for(const e of this.triggerTime)clearInterval(e)}documentScrollHandler(e){if(e.hasAttribute("destroy"))return;let t=i(document,`.${e.className}`,"NodeList"),s=window.pageYOffset;if(!(Math.abs(s-this.distance)<this.settings.scrollTrigger))if(t.length>1)Array.from(t).forEach(e=>{const t=i(e,".active");l(t,e.firstElementChild),this.distance=s});else{let e=i(this.node,".active");l(e,this.node.firstElementChild),this.distance=s}}}}]).default}));