"use strict";function A(){}console.log("0987654321"),console.log("你好"),console.log("hello world"),function(){if(!("placeholder"in document.createElement("input"))){var t=function(t){this.input=t,this.label=document.createElement("label"),this.label.innerHTML=t.getAttribute("placeholder"),this.label.style.cssText="position:absolute; text-indent:4px;color:#999999; font-size:12px;",""!=t.value&&(this.label.style.display="none"),this.init()},e=function(t){for(var e=0,n=[],o=t.length;e<o;e++)n[e]=t[e];return n};t.prototype={getxy:function(t){var e,n;if(document.documentElement.getBoundingClientRect){var o=document.documentElement,l=document.body,i=t.getBoundingClientRect(),s=o.scrollTop||l.scrollTop,c=o.scrollLeft||l.scrollLeft,f=o.clientTop||l.clientTop,u=o.clientLeft||l.clientLeft;e=i.left+c-u,n=i.top+s-f}else for(;t;)e+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;return{left:e,top:n}},getwh:function(t){return{w:t.offsetWidth,h:t.offsetHeight}},setStyles:function(t,e){for(var n in e)t.style[n]=e[n]+"px"},init:function(){var t=this.label,e=this.input,n=this.getxy(e),o=this.getwh(e);this.setStyles(t,{width:o.w,height:o.h,lineHeight:20,left:n.left,top:n.top}),document.body.appendChild(t),t.onclick=function(){this.style.display="none",e.focus()},e.onfocus=function(){t.style.display="none"},e.onblur=function(){""==this.value&&(t.style.display="block")}}};for(var n=document.getElementsByTagName("input"),o=document.getElementsByTagName("textarea"),l=e(n),i=e(o),s=l.concat(i),c=0;c<s.length;c++)s[c].getAttribute("placeholder")&&new t(s[c])}}();