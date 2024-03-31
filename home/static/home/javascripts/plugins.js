if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
/*
 * jQuery JavaScript Library v1.9.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-1-14
 */
(function(a2,aF){var w,ai,l=a2.document,aL=a2.location,bi=a2.jQuery,H=a2.$,aa={},a6=[],s="1.9.0",aH=a6.concat,ao=a6.push,a4=a6.slice,aM=a6.indexOf,z=aa.toString,V=aa.hasOwnProperty,aQ=s.trim,bI=function(e,b1){return new bI.fn.init(e,b1,w)},bz=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ac=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bp=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bh=/^[\],:{}\s]*$/,bk=/(?:^|:|,)(?:\s*\[)+/g,bF=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,aZ=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,bR=/^-ms-/,aV=/-([\da-z])/gi,M=function(e,b1){return b1.toUpperCase()},aI=function(){if(l.addEventListener){l.removeEventListener("DOMContentLoaded",aI,false);bI.ready()}else{if(l.readyState==="complete"){l.detachEvent("onreadystatechange",aI);bI.ready()}}};bI.fn=bI.prototype={jquery:s,constructor:bI,init:function(e,b3,b2){var b1,b4;if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b1=[null,e,null]}else{b1=bp.exec(e)}if(b1&&(b1[1]||!b3)){if(b1[1]){b3=b3 instanceof bI?b3[0]:b3;bI.merge(this,bI.parseHTML(b1[1],b3&&b3.nodeType?b3.ownerDocument||b3:l,true));if(a.test(b1[1])&&bI.isPlainObject(b3)){for(b1 in b3){if(bI.isFunction(this[b1])){this[b1](b3[b1])}else{this.attr(b1,b3[b1])}}}return this}else{b4=l.getElementById(b1[2]);if(b4&&b4.parentNode){if(b4.id!==b1[2]){return b2.find(e)}this.length=1;this[0]=b4}this.context=l;this.selector=e;return this}}else{if(!b3||b3.jquery){return(b3||b2).find(e)}else{return this.constructor(b3).find(e)}}}else{if(e.nodeType){this.context=this[0]=e;this.length=1;return this}else{if(bI.isFunction(e)){return b2.ready(e)}}}if(e.selector!==aF){this.selector=e.selector;this.context=e.context}return bI.makeArray(e,this)},selector:"",length:0,size:function(){return this.length},toArray:function(){return a4.call(this)},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])},pushStack:function(e){var b1=bI.merge(this.constructor(),e);b1.prevObject=this;b1.context=this.context;return b1},each:function(b1,e){return bI.each(this,b1,e)},ready:function(e){bI.ready.promise().done(e);return this},slice:function(){return this.pushStack(a4.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(b2){var e=this.length,b1=+b2+(b2<0?e:0);return this.pushStack(b1>=0&&b1<e?[this[b1]]:[])},map:function(e){return this.pushStack(bI.map(this,function(b2,b1){return e.call(b2,b1,b2)}))},end:function(){return this.prevObject||this.constructor(null)},push:ao,sort:[].sort,splice:[].splice};bI.fn.init.prototype=bI.fn;bI.extend=bI.fn.extend=function(){var b9,b2,e,b1,b6,b7,b5=arguments[0]||{},b4=1,b3=arguments.length,b8=false;if(typeof b5==="boolean"){b8=b5;b5=arguments[1]||{};b4=2}if(typeof b5!=="object"&&!bI.isFunction(b5)){b5={}}if(b3===b4){b5=this;--b4}for(;b4<b3;b4++){if((b9=arguments[b4])!=null){for(b2 in b9){e=b5[b2];b1=b9[b2];if(b5===b1){continue}if(b8&&b1&&(bI.isPlainObject(b1)||(b6=bI.isArray(b1)))){if(b6){b6=false;b7=e&&bI.isArray(e)?e:[]}else{b7=e&&bI.isPlainObject(e)?e:{}}b5[b2]=bI.extend(b8,b7,b1)}else{if(b1!==aF){b5[b2]=b1}}}}}return b5};bI.extend({noConflict:function(e){if(a2.$===bI){a2.$=H}if(e&&a2.jQuery===bI){a2.jQuery=bi}return bI},isReady:false,readyWait:1,holdReady:function(e){if(e){bI.readyWait++}else{bI.ready(true)}},ready:function(e){if(e===true?--bI.readyWait:bI.isReady){return}if(!l.body){return setTimeout(bI.ready)}bI.isReady=true;if(e!==true&&--bI.readyWait>0){return}ai.resolveWith(l,[bI]);if(bI.fn.trigger){bI(l).trigger("ready").off("ready")}},isFunction:function(e){return bI.type(e)==="function"},isArray:Array.isArray||function(e){return bI.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)},type:function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?aa[z.call(e)]||"object":typeof e},isPlainObject:function(b3){if(!b3||bI.type(b3)!=="object"||b3.nodeType||bI.isWindow(b3)){return false}try{if(b3.constructor&&!V.call(b3,"constructor")&&!V.call(b3.constructor.prototype,"isPrototypeOf")){return false}}catch(b2){return false}var b1;for(b1 in b3){}return b1===aF||V.call(b3,b1)},isEmptyObject:function(b1){var e;for(e in b1){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(b4,b2,b3){if(!b4||typeof b4!=="string"){return null}if(typeof b2==="boolean"){b3=b2;b2=false}b2=b2||l;var b1=a.exec(b4),e=!b3&&[];if(b1){return[b2.createElement(b1[1])]}b1=bI.buildFragment([b4],b2,e);if(e){bI(e).remove()}return bI.merge([],b1.childNodes)},parseJSON:function(e){if(a2.JSON&&a2.JSON.parse){return a2.JSON.parse(e)}if(e===null){return e}if(typeof e==="string"){e=bI.trim(e);if(e){if(bh.test(e.replace(bF,"@").replace(aZ,"]").replace(bk,""))){return(new Function("return "+e))()}}}bI.error("Invalid JSON: "+e)},parseXML:function(b3){var b1,b2;if(!b3||typeof b3!=="string"){return null}try{if(a2.DOMParser){b2=new DOMParser();b1=b2.parseFromString(b3,"text/xml")}else{b1=new ActiveXObject("Microsoft.XMLDOM");b1.async="false";b1.loadXML(b3)}}catch(b4){b1=aF}if(!b1||!b1.documentElement||b1.getElementsByTagName("parsererror").length){bI.error("Invalid XML: "+b3)}return b1},noop:function(){},globalEval:function(e){if(e&&bI.trim(e)){(a2.execScript||function(b1){a2["eval"].call(a2,b1)})(e)}},camelCase:function(e){return e.replace(bR,"ms-").replace(aV,M)},nodeName:function(b1,e){return b1.nodeName&&b1.nodeName.toLowerCase()===e.toLowerCase()},each:function(b5,b6,b1){var b4,b2=0,b3=b5.length,e=ab(b5);if(b1){if(e){for(;b2<b3;b2++){b4=b6.apply(b5[b2],b1);if(b4===false){break}}}else{for(b2 in b5){b4=b6.apply(b5[b2],b1);if(b4===false){break}}}}else{if(e){for(;b2<b3;b2++){b4=b6.call(b5[b2],b2,b5[b2]);if(b4===false){break}}}else{for(b2 in b5){b4=b6.call(b5[b2],b2,b5[b2]);if(b4===false){break}}}}return b5},trim:aQ&&!aQ.call("\uFEFF\xA0")?function(e){return e==null?"":aQ.call(e)}:function(e){return e==null?"":(e+"").replace(C,"")},makeArray:function(e,b2){var b1=b2||[];if(e!=null){if(ab(Object(e))){bI.merge(b1,typeof e==="string"?[e]:e)}else{ao.call(b1,e)}}return b1},inArray:function(b3,b1,b2){var e;if(b1){if(aM){return aM.call(b1,b3,b2)}e=b1.length;b2=b2?b2<0?Math.max(0,e+b2):b2:0;for(;b2<e;b2++){if(b2 in b1&&b1[b2]===b3){return b2}}}return -1},merge:function(b4,b2){var e=b2.length,b3=b4.length,b1=0;if(typeof e==="number"){for(;b1<e;b1++){b4[b3++]=b2[b1]}}else{while(b2[b1]!==aF){b4[b3++]=b2[b1++]}}b4.length=b3;return b4},grep:function(b1,b6,e){var b5,b2=[],b3=0,b4=b1.length;e=!!e;for(;b3<b4;b3++){b5=!!b6(b1[b3],b3);if(e!==b5){b2.push(b1[b3])}}return b2},map:function(b2,b7,e){var b6,b4=0,b5=b2.length,b1=ab(b2),b3=[];if(b1){for(;b4<b5;b4++){b6=b7(b2[b4],b4,e);if(b6!=null){b3[b3.length]=b6}}}else{for(b4 in b2){b6=b7(b2[b4],b4,e);if(b6!=null){b3[b3.length]=b6}}}return aH.apply([],b3)},guid:1,proxy:function(b4,b3){var b2,e,b1;if(typeof b3==="string"){b2=b4[b3];b3=b4;b4=b2}if(!bI.isFunction(b4)){return aF}e=a4.call(arguments,2);b1=function(){return b4.apply(b3||this,e.concat(a4.call(arguments)))};b1.guid=b4.guid=b4.guid||bI.guid++;return b1},access:function(e,b5,b7,b6,b3,b9,b8){var b2=0,b1=e.length,b4=b7==null;if(bI.type(b7)==="object"){b3=true;for(b2 in b7){bI.access(e,b5,b2,b7[b2],true,b9,b8)}}else{if(b6!==aF){b3=true;if(!bI.isFunction(b6)){b8=true}if(b4){if(b8){b5.call(e,b6);b5=null}else{b4=b5;b5=function(cb,ca,cc){return b4.call(bI(cb),cc)}}}if(b5){for(;b2<b1;b2++){b5(e[b2],b7,b8?b6:b6.call(e[b2],b2,b5(e[b2],b7)))}}}}return b3?e:b4?b5.call(e):b1?b5(e[0],b7):b9},now:function(){return(new Date()).getTime()}});bI.ready.promise=function(b4){if(!ai){ai=bI.Deferred();if(l.readyState==="complete"){setTimeout(bI.ready)}else{if(l.addEventListener){l.addEventListener("DOMContentLoaded",aI,false);a2.addEventListener("load",bI.ready,false)}else{l.attachEvent("onreadystatechange",aI);a2.attachEvent("onload",bI.ready);var b3=false;try{b3=a2.frameElement==null&&l.documentElement}catch(b2){}if(b3&&b3.doScroll){(function b1(){if(!bI.isReady){try{b3.doScroll("left")}catch(b5){return setTimeout(b1,50)}bI.ready()}})()}}}}return ai.promise(b4)};bI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b1,e){aa["[object "+e+"]"]=e.toLowerCase()});function ab(b2){var b1=b2.length,e=bI.type(b2);if(bI.isWindow(b2)){return false}if(b2.nodeType===1&&b1){return true}return e==="array"||e!=="function"&&(b1===0||typeof b1==="number"&&b1>0&&(b1-1) in b2)}w=bI(l);var bW={};function ae(b1){var e=bW[b1]={};bI.each(b1.match(ac)||[],function(b3,b2){e[b2]=true});return e}bI.Callbacks=function(ca){ca=typeof ca==="string"?(bW[ca]||ae(ca)):bI.extend({},ca);var b3,e,b4,b2,b5,b6,b7=[],b8=!ca.once&&[],b1=function(cb){b3=ca.memory&&cb;e=true;b6=b2||0;b2=0;b5=b7.length;b4=true;for(;b7&&b6<b5;b6++){if(b7[b6].apply(cb[0],cb[1])===false&&ca.stopOnFalse){b3=false;break}}b4=false;if(b7){if(b8){if(b8.length){b1(b8.shift())}}else{if(b3){b7=[]}else{b9.disable()}}}},b9={add:function(){if(b7){var cc=b7.length;(function cb(cd){bI.each(cd,function(cf,ce){var cg=bI.type(ce);if(cg==="function"){if(!ca.unique||!b9.has(ce)){b7.push(ce)}}else{if(ce&&ce.length&&cg!=="string"){cb(ce)}}})})(arguments);if(b4){b5=b7.length}else{if(b3){b2=cc;b1(b3)}}}return this},remove:function(){if(b7){bI.each(arguments,function(cd,cb){var cc;while((cc=bI.inArray(cb,b7,cc))>-1){b7.splice(cc,1);if(b4){if(cc<=b5){b5--}if(cc<=b6){b6--}}}})}return this},has:function(cb){return bI.inArray(cb,b7)>-1},empty:function(){b7=[];return this},disable:function(){b7=b8=b3=aF;return this},disabled:function(){return !b7},lock:function(){b8=aF;if(!b3){b9.disable()}return this},locked:function(){return !b8},fireWith:function(cc,cb){cb=cb||[];cb=[cc,cb.slice?cb.slice():cb];if(b7&&(!e||b8)){if(b4){b8.push(cb)}else{b1(cb)}}return this},fire:function(){b9.fireWith(this,arguments);return this},fired:function(){return !!e}};return b9};bI.extend({Deferred:function(b2){var b1=[["resolve","done",bI.Callbacks("once memory"),"resolved"],["reject","fail",bI.Callbacks("once memory"),"rejected"],["notify","progress",bI.Callbacks("memory")]],b3="pending",b4={state:function(){return b3},always:function(){e.done(arguments).fail(arguments);return this},then:function(){var b5=arguments;return bI.Deferred(function(b6){bI.each(b1,function(b8,b7){var ca=b7[0],b9=bI.isFunction(b5[b8])&&b5[b8];e[b7[1]](function(){var cb=b9&&b9.apply(this,arguments);if(cb&&bI.isFunction(cb.promise)){cb.promise().done(b6.resolve).fail(b6.reject).progress(b6.notify)}else{b6[ca+"With"](this===b4?b6.promise():this,b9?[cb]:arguments)}})});b5=null}).promise()},promise:function(b5){return b5!=null?bI.extend(b5,b4):b4}},e={};b4.pipe=b4.then;bI.each(b1,function(b6,b5){var b8=b5[2],b7=b5[3];b4[b5[1]]=b8.add;if(b7){b8.add(function(){b3=b7},b1[b6^1][2].disable,b1[2][2].lock)}e[b5[0]]=function(){e[b5[0]+"With"](this===e?b4:this,arguments);return this};e[b5[0]+"With"]=b8.fireWith});b4.promise(e);if(b2){b2.call(e,e)}return e},when:function(b4){var b2=0,b6=a4.call(arguments),e=b6.length,b1=e!==1||(b4&&bI.isFunction(b4.promise))?e:0,b9=b1===1?b4:bI.Deferred(),b3=function(cb,cc,ca){return function(cd){cc[cb]=this;ca[cb]=arguments.length>1?a4.call(arguments):cd;if(ca===b8){b9.notifyWith(cc,ca)}else{if(!(--b1)){b9.resolveWith(cc,ca)}}}},b8,b5,b7;if(e>1){b8=new Array(e);b5=new Array(e);b7=new Array(e);for(;b2<e;b2++){if(b6[b2]&&bI.isFunction(b6[b2].promise)){b6[b2].promise().done(b3(b2,b7,b6)).fail(b9.reject).progress(b3(b2,b5,b8))}else{--b1}}}if(!b1){b9.resolveWith(b7,b6)}return b9.promise()}});bI.support=(function(){var cc,cb,b9,ca,b3,b8,b7,b5,b2,b4,b1=l.createElement("div");b1.setAttribute("className","t");b1.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";cb=b1.getElementsByTagName("*");b9=b1.getElementsByTagName("a")[0];if(!cb||!b9||!cb.length){return{}}ca=l.createElement("select");b3=ca.appendChild(l.createElement("option"));b8=b1.getElementsByTagName("input")[0];b9.style.cssText="top:1px;float:left;opacity:.5";cc={getSetAttribute:b1.className!=="t",leadingWhitespace:b1.firstChild.nodeType===3,tbody:!b1.getElementsByTagName("tbody").length,htmlSerialize:!!b1.getElementsByTagName("link").length,style:/top/.test(b9.getAttribute("style")),hrefNormalized:b9.getAttribute("href")==="/a",opacity:/^0.5/.test(b9.style.opacity),cssFloat:!!b9.style.cssFloat,checkOn:!!b8.value,optSelected:b3.selected,enctype:!!l.createElement("form").enctype,html5Clone:l.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:l.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};b8.checked=true;cc.noCloneChecked=b8.cloneNode(true).checked;ca.disabled=true;cc.optDisabled=!b3.disabled;try{delete b1.test}catch(b6){cc.deleteExpando=false}b8=l.createElement("input");b8.setAttribute("value","");cc.input=b8.getAttribute("value")==="";b8.value="t";b8.setAttribute("type","radio");cc.radioValue=b8.value==="t";b8.setAttribute("checked","t");b8.setAttribute("name","t");b7=l.createDocumentFragment();b7.appendChild(b8);cc.appendChecked=b8.checked;cc.checkClone=b7.cloneNode(true).cloneNode(true).lastChild.checked;if(b1.attachEvent){b1.attachEvent("onclick",function(){cc.noCloneEvent=false});b1.cloneNode(true).click()}for(b4 in {submit:true,change:true,focusin:true}){b1.setAttribute(b5="on"+b4,"t");cc[b4+"Bubbles"]=b5 in a2||b1.attributes[b5].expando===false}b1.style.backgroundClip="content-box";b1.cloneNode(true).style.backgroundClip="";cc.clearCloneStyle=b1.style.backgroundClip==="content-box";bI(function(){var cd,cg,cf,ce="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",e=l.getElementsByTagName("body")[0];if(!e){return}cd=l.createElement("div");cd.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";e.appendChild(cd).appendChild(b1);b1.innerHTML="<table><tr><td></td><td>t</td></tr></table>";cf=b1.getElementsByTagName("td");cf[0].style.cssText="padding:0;margin:0;border:0;display:none";b2=(cf[0].offsetHeight===0);cf[0].style.display="";cf[1].style.display="none";cc.reliableHiddenOffsets=b2&&(cf[0].offsetHeight===0);b1.innerHTML="";b1.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";cc.boxSizing=(b1.offsetWidth===4);cc.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);if(a2.getComputedStyle){cc.pixelPosition=(a2.getComputedStyle(b1,null)||{}).top!=="1%";cc.boxSizingReliable=(a2.getComputedStyle(b1,null)||{width:"4px"}).width==="4px";cg=b1.appendChild(l.createElement("div"));cg.style.cssText=b1.style.cssText=ce;cg.style.marginRight=cg.style.width="0";b1.style.width="1px";cc.reliableMarginRight=!parseFloat((a2.getComputedStyle(cg,null)||{}).marginRight)}if(typeof b1.style.zoom!=="undefined"){b1.innerHTML="";b1.style.cssText=ce+"width:1px;padding:1px;display:inline;zoom:1";cc.inlineBlockNeedsLayout=(b1.offsetWidth===3);b1.style.display="block";b1.innerHTML="<div></div>";b1.firstChild.style.width="5px";cc.shrinkWrapBlocks=(b1.offsetWidth!==3);e.style.zoom=1}e.removeChild(cd);cd=b1=cf=cg=null});cb=ca=b7=b3=b9=b8=null;return cc})();var bv=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aN=/([A-Z])/g;function ba(b3,b1,b5,b4){if(!bI.acceptData(b3)){return}var b6,b8,b9=bI.expando,b7=typeof b1==="string",ca=b3.nodeType,e=ca?bI.cache:b3,b2=ca?b3[b9]:b3[b9]&&b9;if((!b2||!e[b2]||(!b4&&!e[b2].data))&&b7&&b5===aF){return}if(!b2){if(ca){b3[b9]=b2=a6.pop()||bI.guid++}else{b2=b9}}if(!e[b2]){e[b2]={};if(!ca){e[b2].toJSON=bI.noop}}if(typeof b1==="object"||typeof b1==="function"){if(b4){e[b2]=bI.extend(e[b2],b1)}else{e[b2].data=bI.extend(e[b2].data,b1)}}b6=e[b2];if(!b4){if(!b6.data){b6.data={}}b6=b6.data}if(b5!==aF){b6[bI.camelCase(b1)]=b5}if(b7){b8=b6[b1];if(b8==null){b8=b6[bI.camelCase(b1)]}}else{b8=b6}return b8}function Z(b3,b1,b4){if(!bI.acceptData(b3)){return}var b7,b6,b5,b8=b3.nodeType,e=b8?bI.cache:b3,b2=b8?b3[bI.expando]:bI.expando;if(!e[b2]){return}if(b1){b7=b4?e[b2]:e[b2].data;if(b7){if(!bI.isArray(b1)){if(b1 in b7){b1=[b1]}else{b1=bI.camelCase(b1);if(b1 in b7){b1=[b1]}else{b1=b1.split(" ")}}}else{b1=b1.concat(bI.map(b1,bI.camelCase))}for(b6=0,b5=b1.length;b6<b5;b6++){delete b7[b1[b6]]}if(!(b4?N:bI.isEmptyObject)(b7)){return}}}if(!b4){delete e[b2].data;if(!N(e[b2])){return}}if(b8){bI.cleanData([b3],true)}else{if(bI.support.deleteExpando||e!=e.window){delete e[b2]}else{e[b2]=null}}}bI.extend({cache:{},expando:"jQuery"+(s+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bI.cache[e[bI.expando]]:e[bI.expando];return !!e&&!N(e)},data:function(b1,e,b2){return ba(b1,e,b2,false)},removeData:function(b1,e){return Z(b1,e,false)},_data:function(b1,e,b2){return ba(b1,e,b2,true)},_removeData:function(b1,e){return Z(b1,e,true)},acceptData:function(b1){var e=b1.nodeName&&bI.noData[b1.nodeName.toLowerCase()];return !e||e!==true&&b1.getAttribute("classid")===e}});bI.fn.extend({data:function(b3,b6){var b1,e,b4=this[0],b2=0,b5=null;if(b3===aF){if(this.length){b5=bI.data(b4);if(b4.nodeType===1&&!bI._data(b4,"parsedAttrs")){b1=b4.attributes;for(;b2<b1.length;b2++){e=b1[b2].name;if(!e.indexOf("data-")){e=bI.camelCase(e.substring(5));bx(b4,e,b5[e])}}bI._data(b4,"parsedAttrs",true)}}return b5}if(typeof b3==="object"){return this.each(function(){bI.data(this,b3)})}return bI.access(this,function(b7){if(b7===aF){return b4?bx(b4,b3,bI.data(b4,b3)):null}this.each(function(){bI.data(this,b3,b7)})},null,b6,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){bI.removeData(this,e)})}});function bx(b3,b2,b4){if(b4===aF&&b3.nodeType===1){var b1="data-"+b2.replace(aN,"-$1").toLowerCase();b4=b3.getAttribute(b1);if(typeof b4==="string"){try{b4=b4==="true"?true:b4==="false"?false:b4==="null"?null:+b4+""===b4?+b4:bv.test(b4)?bI.parseJSON(b4):b4}catch(b5){}bI.data(b3,b2,b4)}else{b4=aF}}return b4}function N(b1){var e;for(e in b1){if(e==="data"&&bI.isEmptyObject(b1[e])){continue}if(e!=="toJSON"){return false}}return true}bI.extend({queue:function(b2,b1,b3){var e;if(b2){b1=(b1||"fx")+"queue";e=bI._data(b2,b1);if(b3){if(!e||bI.isArray(b3)){e=bI._data(b2,b1,bI.makeArray(b3))}else{e.push(b3)}}return e||[]}},dequeue:function(b5,b4){b4=b4||"fx";var b1=bI.queue(b5,b4),b6=b1.length,b3=b1.shift(),e=bI._queueHooks(b5,b4),b2=function(){bI.dequeue(b5,b4)};if(b3==="inprogress"){b3=b1.shift();b6--}e.cur=b3;if(b3){if(b4==="fx"){b1.unshift("inprogress")}delete e.stop;b3.call(b5,b2,e)}if(!b6&&e){e.empty.fire()}},_queueHooks:function(b2,b1){var e=b1+"queueHooks";return bI._data(b2,e)||bI._data(b2,e,{empty:bI.Callbacks("once memory").add(function(){bI._removeData(b2,b1+"queue");bI._removeData(b2,e)})})}});bI.fn.extend({queue:function(e,b1){var b2=2;if(typeof e!=="string"){b1=e;e="fx";b2--}if(arguments.length<b2){return bI.queue(this[0],e)}return b1===aF?this:this.each(function(){var b3=bI.queue(this,e,b1);bI._queueHooks(this,e);if(e==="fx"&&b3[0]!=="inprogress"){bI.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){bI.dequeue(this,e)})},delay:function(b1,e){b1=bI.fx?bI.fx.speeds[b1]||b1:b1;e=e||"fx";return this.queue(e,function(b3,b2){var b4=setTimeout(b3,b1);b2.stop=function(){clearTimeout(b4)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(b2,b6){var b1,b3=1,b7=bI.Deferred(),b5=this,e=this.length,b4=function(){if(!(--b3)){b7.resolveWith(b5,[b5])}};if(typeof b2!=="string"){b6=b2;b2=aF}b2=b2||"fx";while(e--){b1=bI._data(b5[e],b2+"queueHooks");if(b1&&b1.empty){b3++;b1.empty.add(b4)}}b4();return b7.promise(b6)}});var a8,bX,bL=/[\t\r\n]/g,ak=/\r/g,aE=/^(?:input|select|textarea|button|object)$/i,D=/^(?:a|area)$/i,L=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,aq=/^(?:checked|selected)$/i,bO=bI.support.getSetAttribute,bE=bI.support.input;bI.fn.extend({attr:function(e,b1){return bI.access(this,bI.attr,e,b1,arguments.length>1)},removeAttr:function(e){return this.each(function(){bI.removeAttr(this,e)})},prop:function(e,b1){return bI.access(this,bI.prop,e,b1,arguments.length>1)},removeProp:function(e){e=bI.propFix[e]||e;return this.each(function(){try{this[e]=aF;delete this[e]}catch(b1){}})},addClass:function(b7){var b1,e,b8,b4,b2,b3=0,b5=this.length,b6=typeof b7==="string"&&b7;if(bI.isFunction(b7)){return this.each(function(b9){bI(this).addClass(b7.call(this,b9,this.className))})}if(b6){b1=(b7||"").match(ac)||[];for(;b3<b5;b3++){e=this[b3];b8=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bL," "):" ");if(b8){b2=0;while((b4=b1[b2++])){if(b8.indexOf(" "+b4+" ")<0){b8+=b4+" "}}e.className=bI.trim(b8)}}}return this},removeClass:function(b7){var b1,e,b8,b4,b2,b3=0,b5=this.length,b6=arguments.length===0||typeof b7==="string"&&b7;if(bI.isFunction(b7)){return this.each(function(b9){bI(this).removeClass(b7.call(this,b9,this.className))})}if(b6){b1=(b7||"").match(ac)||[];for(;b3<b5;b3++){e=this[b3];b8=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bL," "):"");if(b8){b2=0;while((b4=b1[b2++])){while(b8.indexOf(" "+b4+" ")>=0){b8=b8.replace(" "+b4+" "," ")}}e.className=b7?bI.trim(b8):""}}}return this},toggleClass:function(b3,b1){var b2=typeof b3,e=typeof b1==="boolean";if(bI.isFunction(b3)){return this.each(function(b4){bI(this).toggleClass(b3.call(this,b4,this.className,b1),b1)})}return this.each(function(){if(b2==="string"){var b6,b5=0,b4=bI(this),b7=b1,b8=b3.match(ac)||[];while((b6=b8[b5++])){b7=e?b7:!b4.hasClass(b6);b4[b7?"addClass":"removeClass"](b6)}}else{if(b2==="undefined"||b2==="boolean"){if(this.className){bI._data(this,"__className__",this.className)}this.className=this.className||b3===false?"":bI._data(this,"__className__")||""}}})},hasClass:function(e){var b3=" "+e+" ",b2=0,b1=this.length;for(;b2<b1;b2++){if(this[b2].nodeType===1&&(" "+this[b2].className+" ").replace(bL," ").indexOf(b3)>=0){return true}}return false},val:function(b3){var e,b1,b4,b2=this[0];if(!arguments.length){if(b2){e=bI.valHooks[b2.type]||bI.valHooks[b2.nodeName.toLowerCase()];if(e&&"get" in e&&(b1=e.get(b2,"value"))!==aF){return b1}b1=b2.value;return typeof b1==="string"?b1.replace(ak,""):b1==null?"":b1}return}b4=bI.isFunction(b3);return this.each(function(b6){var b7,b5=bI(this);if(this.nodeType!==1){return}if(b4){b7=b3.call(this,b6,b5.val())}else{b7=b3}if(b7==null){b7=""}else{if(typeof b7==="number"){b7+=""}else{if(bI.isArray(b7)){b7=bI.map(b7,function(b8){return b8==null?"":b8+""})}}}e=bI.valHooks[this.type]||bI.valHooks[this.nodeName.toLowerCase()];if(!e||!("set" in e)||e.set(this,b7,"value")===aF){this.value=b7}})}});bI.extend({valHooks:{option:{get:function(e){var b1=e.attributes.value;return !b1||b1.specified?e.value:e.text}},select:{get:function(e){var b6,b2,b8=e.options,b4=e.selectedIndex,b3=e.type==="select-one"||b4<0,b7=b3?null:[],b5=b3?b4+1:b8.length,b1=b4<0?b5:b3?b4:0;for(;b1<b5;b1++){b2=b8[b1];if((b2.selected||b1===b4)&&(bI.support.optDisabled?!b2.disabled:b2.getAttribute("disabled")===null)&&(!b2.parentNode.disabled||!bI.nodeName(b2.parentNode,"optgroup"))){b6=bI(b2).val();if(b3){return b6}b7.push(b6)}}return b7},set:function(b1,b2){var e=bI.makeArray(b2);bI(b1).find("option").each(function(){this.selected=bI.inArray(bI(this).val(),e)>=0});if(!e.length){b1.selectedIndex=-1}return e}}},attr:function(b5,b3,b6){var b2,e,b4,b1=b5.nodeType;if(!b5||b1===3||b1===8||b1===2){return}if(typeof b5.getAttribute==="undefined"){return bI.prop(b5,b3,b6)}b4=b1!==1||!bI.isXMLDoc(b5);if(b4){b3=b3.toLowerCase();e=bI.attrHooks[b3]||(L.test(b3)?bX:a8)}if(b6!==aF){if(b6===null){bI.removeAttr(b5,b3)}else{if(e&&b4&&"set" in e&&(b2=e.set(b5,b6,b3))!==aF){return b2}else{b5.setAttribute(b3,b6+"");return b6}}}else{if(e&&b4&&"get" in e&&(b2=e.get(b5,b3))!==null){return b2}else{if(typeof b5.getAttribute!=="undefined"){b2=b5.getAttribute(b3)}return b2==null?aF:b2}}},removeAttr:function(b2,b4){var e,b3,b1=0,b5=b4&&b4.match(ac);if(b5&&b2.nodeType===1){while((e=b5[b1++])){b3=bI.propFix[e]||e;if(L.test(e)){if(!bO&&aq.test(e)){b2[bI.camelCase("default-"+e)]=b2[b3]=false}else{b2[b3]=false}}else{bI.attr(b2,e,"")}b2.removeAttribute(bO?e:b3)}}},attrHooks:{type:{set:function(e,b1){if(!bI.support.radioValue&&b1==="radio"&&bI.nodeName(e,"input")){var b2=e.value;e.setAttribute("type",b1);if(b2){e.value=b2}return b1}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b5,b3,b6){var b2,e,b4,b1=b5.nodeType;if(!b5||b1===3||b1===8||b1===2){return}b4=b1!==1||!bI.isXMLDoc(b5);if(b4){b3=bI.propFix[b3]||b3;e=bI.propHooks[b3]}if(b6!==aF){if(e&&"set" in e&&(b2=e.set(b5,b6,b3))!==aF){return b2}else{return(b5[b3]=b6)}}else{if(e&&"get" in e&&(b2=e.get(b5,b3))!==null){return b2}else{return b5[b3]}}},propHooks:{tabIndex:{get:function(b1){var e=b1.getAttributeNode("tabindex");return e&&e.specified?parseInt(e.value,10):aE.test(b1.nodeName)||D.test(b1.nodeName)&&b1.href?0:aF}}}});bX={get:function(b3,b1){var b4=bI.prop(b3,b1),e=typeof b4==="boolean"&&b3.getAttribute(b1),b2=typeof b4==="boolean"?bE&&bO?e!=null:aq.test(b1)?b3[bI.camelCase("default-"+b1)]:!!e:b3.getAttributeNode(b1);return b2&&b2.value!==false?b1.toLowerCase():aF},set:function(b1,b2,e){if(b2===false){bI.removeAttr(b1,e)}else{if(bE&&bO||!aq.test(e)){b1.setAttribute(!bO&&bI.propFix[e]||e,e)}else{b1[bI.camelCase("default-"+e)]=b1[e]=true}}return e}};if(!bE||!bO){bI.attrHooks.value={get:function(b2,b1){var e=b2.getAttributeNode(b1);return bI.nodeName(b2,"input")?b2.defaultValue:e&&e.specified?e.value:aF},set:function(b1,b2,e){if(bI.nodeName(b1,"input")){b1.defaultValue=b2}else{return a8&&a8.set(b1,b2,e)}}}}if(!bO){a8=bI.valHooks.button={get:function(b2,b1){var e=b2.getAttributeNode(b1);return e&&(b1==="id"||b1==="name"||b1==="coords"?e.value!=="":e.specified)?e.value:aF},set:function(b2,b3,b1){var e=b2.getAttributeNode(b1);if(!e){b2.setAttributeNode((e=b2.ownerDocument.createAttribute(b1)))}e.value=b3+="";return b1==="value"||b3===b2.getAttribute(b1)?b3:aF}};bI.attrHooks.contenteditable={get:a8.get,set:function(b1,b2,e){a8.set(b1,b2===""?false:b2,e)}};bI.each(["width","height"],function(b1,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{set:function(b2,b3){if(b3===""){b2.setAttribute(e,"auto");return b3}}})})}if(!bI.support.hrefNormalized){bI.each(["href","src","width","height"],function(b1,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{get:function(b3){var b2=b3.getAttribute(e,2);return b2==null?aF:b2}})});bI.each(["href","src"],function(b1,e){bI.propHooks[e]={get:function(b2){return b2.getAttribute(e,4)}}})}if(!bI.support.style){bI.attrHooks.style={get:function(e){return e.style.cssText||aF},set:function(e,b1){return(e.style.cssText=b1+"")}}}if(!bI.support.optSelected){bI.propHooks.selected=bI.extend(bI.propHooks.selected,{get:function(b1){var e=b1.parentNode;if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex}}return null}})}if(!bI.support.enctype){bI.propFix.enctype="encoding"}if(!bI.support.checkOn){bI.each(["radio","checkbox"],function(){bI.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}bI.each(["radio","checkbox"],function(){bI.valHooks[this]=bI.extend(bI.valHooks[this],{set:function(e,b1){if(bI.isArray(b1)){return(e.checked=bI.inArray(bI(e).val(),b1)>=0)}}})});var bG=/^(?:input|select|textarea)$/i,a3=/^key/,bM=/^(?:mouse|contextmenu)|click/,bA=/^(?:focusinfocus|focusoutblur)$/,bt=/^([^.]*)(?:\.(.+)|)$/;function R(){return true}function X(){return false}bI.event={global:{},add:function(b4,b9,cg,b6,b5){var b2,b8,b7,cf,ce,cd,cb,b3,cc,e,b1,ca=b4.nodeType!==3&&b4.nodeType!==8&&bI._data(b4);if(!ca){return}if(cg.handler){b2=cg;cg=b2.handler;b5=b2.selector}if(!cg.guid){cg.guid=bI.guid++}if(!(cf=ca.events)){cf=ca.events={}}if(!(b8=ca.handle)){b8=ca.handle=function(ch){return typeof bI!=="undefined"&&(!ch||bI.event.triggered!==ch.type)?bI.event.dispatch.apply(b8.elem,arguments):aF};b8.elem=b4}b9=(b9||"").match(ac)||[""];ce=b9.length;while(ce--){b7=bt.exec(b9[ce])||[];cc=b1=b7[1];e=(b7[2]||"").split(".").sort();cb=bI.event.special[cc]||{};cc=(b5?cb.delegateType:cb.bindType)||cc;cb=bI.event.special[cc]||{};cd=bI.extend({type:cc,origType:b1,data:b6,handler:cg,guid:cg.guid,selector:b5,needsContext:b5&&bI.expr.match.needsContext.test(b5),namespace:e.join(".")},b2);if(!(b3=cf[cc])){b3=cf[cc]=[];b3.delegateCount=0;if(!cb.setup||cb.setup.call(b4,b6,e,b8)===false){if(b4.addEventListener){b4.addEventListener(cc,b8,false)}else{if(b4.attachEvent){b4.attachEvent("on"+cc,b8)}}}}if(cb.add){cb.add.call(b4,cd);if(!cd.handler.guid){cd.handler.guid=cg.guid}}if(b5){b3.splice(b3.delegateCount++,0,cd)}else{b3.push(cd)}bI.event.global[cc]=true}b4=null},remove:function(b3,b9,cg,b4,b8){var b6,b5,b7,cf,ce,cd,cb,b2,cc,e,b1,ca=bI.hasData(b3)&&bI._data(b3);if(!ca||!(cf=ca.events)){return}b9=(b9||"").match(ac)||[""];ce=b9.length;while(ce--){b7=bt.exec(b9[ce])||[];cc=b1=b7[1];e=(b7[2]||"").split(".").sort();if(!cc){for(cc in cf){bI.event.remove(b3,cc+b9[ce],cg,b4,true)}continue}cb=bI.event.special[cc]||{};cc=(b4?cb.delegateType:cb.bindType)||cc;b2=cf[cc]||[];b7=b7[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");b5=b6=b2.length;while(b6--){cd=b2[b6];if((b8||b1===cd.origType)&&(!cg||cg.guid===cd.guid)&&(!b7||b7.test(cd.namespace))&&(!b4||b4===cd.selector||b4==="**"&&cd.selector)){b2.splice(b6,1);if(cd.selector){b2.delegateCount--}if(cb.remove){cb.remove.call(b3,cd)}}}if(b5&&!b2.length){if(!cb.teardown||cb.teardown.call(b3,e,ca.handle)===false){bI.removeEvent(b3,cc,ca.handle)}delete cf[cc]}}if(bI.isEmptyObject(cf)){delete ca.handle;bI._removeData(b3,"events")}},trigger:function(b1,b6,b4,cf){var b7,cd,b8,ce,b3,b9,cb,b5=[b4||l],cc=b1.type||b1,b2=b1.namespace?b1.namespace.split("."):[];cd=b8=b4=b4||l;if(b4.nodeType===3||b4.nodeType===8){return}if(bA.test(cc+bI.event.triggered)){return}if(cc.indexOf(".")>=0){b2=cc.split(".");cc=b2.shift();b2.sort()}b3=cc.indexOf(":")<0&&"on"+cc;b1=b1[bI.expando]?b1:new bI.Event(cc,typeof b1==="object"&&b1);b1.isTrigger=true;b1.namespace=b2.join(".");b1.namespace_re=b1.namespace?new RegExp("(^|\\.)"+b2.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;b1.result=aF;if(!b1.target){b1.target=b4}b6=b6==null?[b1]:bI.makeArray(b6,[b1]);cb=bI.event.special[cc]||{};if(!cf&&cb.trigger&&cb.trigger.apply(b4,b6)===false){return}if(!cf&&!cb.noBubble&&!bI.isWindow(b4)){ce=cb.delegateType||cc;if(!bA.test(ce+cc)){cd=cd.parentNode}for(;cd;cd=cd.parentNode){b5.push(cd);b8=cd}if(b8===(b4.ownerDocument||l)){b5.push(b8.defaultView||b8.parentWindow||a2)}}b7=0;while((cd=b5[b7++])&&!b1.isPropagationStopped()){b1.type=b7>1?ce:cb.bindType||cc;b9=(bI._data(cd,"events")||{})[b1.type]&&bI._data(cd,"handle");if(b9){b9.apply(cd,b6)}b9=b3&&cd[b3];if(b9&&bI.acceptData(cd)&&b9.apply&&b9.apply(cd,b6)===false){b1.preventDefault()}}b1.type=cc;if(!cf&&!b1.isDefaultPrevented()){if((!cb._default||cb._default.apply(b4.ownerDocument,b6)===false)&&!(cc==="click"&&bI.nodeName(b4,"a"))&&bI.acceptData(b4)){if(b3&&b4[cc]&&!bI.isWindow(b4)){b8=b4[b3];if(b8){b4[b3]=null}bI.event.triggered=cc;try{b4[cc]()}catch(ca){}bI.event.triggered=aF;if(b8){b4[b3]=b8}}}}return b1.result},dispatch:function(e){e=bI.event.fix(e);var b4,b3,b5,b1,b9,b8=[],b7=a4.call(arguments),b2=(bI._data(this,"events")||{})[e.type]||[],b6=bI.event.special[e.type]||{};b7[0]=e;e.delegateTarget=this;if(b6.preDispatch&&b6.preDispatch.call(this,e)===false){return}b8=bI.event.handlers.call(this,e,b2);b4=0;while((b1=b8[b4++])&&!e.isPropagationStopped()){e.currentTarget=b1.elem;b3=0;while((b9=b1.handlers[b3++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(b9.namespace)){e.handleObj=b9;e.data=b9.data;b5=((bI.event.special[b9.origType]||{}).handle||b9.handler).apply(b1.elem,b7);if(b5!==aF){if((e.result=b5)===false){e.preventDefault();e.stopPropagation()}}}}}if(b6.postDispatch){b6.postDispatch.call(this,e)}return e.result},handlers:function(e,b2){var b4,b5,b1,b7,b6=[],b3=b2.delegateCount,b8=e.target;if(b3&&b8.nodeType&&(!e.button||e.type!=="click")){for(;b8!=this;b8=b8.parentNode||this){if(b8.disabled!==true||e.type!=="click"){b5=[];for(b4=0;b4<b3;b4++){b7=b2[b4];b1=b7.selector+" ";if(b5[b1]===aF){b5[b1]=b7.needsContext?bI(b1,this).index(b8)>=0:bI.find(b1,this,null,[b8]).length}if(b5[b1]){b5.push(b7)}}if(b5.length){b6.push({elem:b8,handlers:b5})}}}}if(b3<b2.length){b6.push({elem:this,handlers:b2.slice(b3)})}return b6},fix:function(b2){if(b2[bI.expando]){return b2}var b1,b5,e=b2,b3=bI.event.fixHooks[b2.type]||{},b4=b3.props?this.props.concat(b3.props):this.props;b2=new bI.Event(e);b1=b4.length;while(b1--){b5=b4[b1];b2[b5]=e[b5]}if(!b2.target){b2.target=e.srcElement||l}if(b2.target.nodeType===3){b2.target=b2.target.parentNode}b2.metaKey=!!b2.metaKey;return b3.filter?b3.filter(b2,e):b2},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b1,e){if(b1.which==null){b1.which=e.charCode!=null?e.charCode:e.keyCode}return b1}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b3,b2){var b4,b5,e,b1=b2.button,b6=b2.fromElement;if(b3.pageX==null&&b2.clientX!=null){b4=b3.target.ownerDocument||l;b5=b4.documentElement;e=b4.body;b3.pageX=b2.clientX+(b5&&b5.scrollLeft||e&&e.scrollLeft||0)-(b5&&b5.clientLeft||e&&e.clientLeft||0);b3.pageY=b2.clientY+(b5&&b5.scrollTop||e&&e.scrollTop||0)-(b5&&b5.clientTop||e&&e.clientTop||0)}if(!b3.relatedTarget&&b6){b3.relatedTarget=b6===b3.target?b2.toElement:b6}if(!b3.which&&b1!==aF){b3.which=(b1&1?1:(b1&2?3:(b1&4?2:0)))}return b3}},special:{load:{noBubble:true},click:{trigger:function(){if(bI.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false}}},focus:{trigger:function(){if(this!==l.activeElement&&this.focus){try{this.focus();return false}catch(b1){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===l.activeElement&&this.blur){this.blur();return false}},delegateType:"focusout"},beforeunload:{postDispatch:function(e){if(e.result!==aF){e.originalEvent.returnValue=e.result}}}},simulate:function(b2,b4,b3,b1){var b5=bI.extend(new bI.Event(),b3,{type:b2,isSimulated:true,originalEvent:{}});if(b1){bI.event.trigger(b5,null,b4)}else{bI.event.dispatch.call(b4,b5)}if(b5.isDefaultPrevented()){b3.preventDefault()}}};bI.removeEvent=l.removeEventListener?function(b1,e,b2){if(b1.removeEventListener){b1.removeEventListener(e,b2,false)}}:function(b2,b1,b3){var e="on"+b1;if(b2.detachEvent){if(typeof b2[e]==="undefined"){b2[e]=null}b2.detachEvent(e,b3)}};bI.Event=function(b1,e){if(!(this instanceof bI.Event)){return new bI.Event(b1,e)}if(b1&&b1.type){this.originalEvent=b1;this.type=b1.type;this.isDefaultPrevented=(b1.defaultPrevented||b1.returnValue===false||b1.getPreventDefault&&b1.getPreventDefault())?R:X}else{this.type=b1}if(e){bI.extend(this,e)}this.timeStamp=b1&&b1.timeStamp||bI.now();this[bI.expando]=true};bI.Event.prototype={isDefaultPrevented:X,isPropagationStopped:X,isImmediatePropagationStopped:X,preventDefault:function(){var b1=this.originalEvent;this.isDefaultPrevented=R;if(!b1){return}if(b1.preventDefault){b1.preventDefault()}else{b1.returnValue=false}},stopPropagation:function(){var b1=this.originalEvent;this.isPropagationStopped=R;if(!b1){return}if(b1.stopPropagation){b1.stopPropagation()}b1.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=R;this.stopPropagation()}};bI.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b1,e){bI.event.special[b1]={delegateType:e,bindType:e,handle:function(b4){var b2,b6=this,b5=b4.relatedTarget,b3=b4.handleObj;if(!b5||(b5!==b6&&!bI.contains(b6,b5))){b4.type=b3.origType;b2=b3.handler.apply(this,arguments);b4.type=e}return b2}}});if(!bI.support.submitBubbles){bI.event.special.submit={setup:function(){if(bI.nodeName(this,"form")){return false}bI.event.add(this,"click._submit keypress._submit",function(b3){var b2=b3.target,b1=bI.nodeName(b2,"input")||bI.nodeName(b2,"button")?b2.form:aF;if(b1&&!bI._data(b1,"submitBubbles")){bI.event.add(b1,"submit._submit",function(e){e._submit_bubble=true});bI._data(b1,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){bI.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(bI.nodeName(this,"form")){return false}bI.event.remove(this,"._submit")}}}if(!bI.support.changeBubbles){bI.event.special.change={setup:function(){if(bG.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bI.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}});bI.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}bI.event.simulate("change",this,e,true)})}return false}bI.event.add(this,"beforeactivate._change",function(b2){var b1=b2.target;if(bG.test(b1.nodeName)&&!bI._data(b1,"changeBubbles")){bI.event.add(b1,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bI.event.simulate("change",this.parentNode,e,true)}});bI._data(b1,"changeBubbles",true)}})},handle:function(b1){var e=b1.target;if(this!==e||b1.isSimulated||b1.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b1.handleObj.handler.apply(this,arguments)}},teardown:function(){bI.event.remove(this,"._change");return !bG.test(this.nodeName)}}}if(!bI.support.focusinBubbles){bI.each({focus:"focusin",blur:"focusout"},function(b3,e){var b1=0,b2=function(b4){bI.event.simulate(e,b4.target,bI.event.fix(b4),true)};bI.event.special[e]={setup:function(){if(b1++===0){l.addEventListener(b3,b2,true)}},teardown:function(){if(--b1===0){l.removeEventListener(b3,b2,true)}}}})}bI.fn.extend({on:function(b2,e,b5,b4,b1){var b6,b3;if(typeof b2==="object"){if(typeof e!=="string"){b5=b5||e;e=aF}for(b3 in b2){this.on(b3,e,b5,b2[b3],b1)}return this}if(b5==null&&b4==null){b4=e;b5=e=aF}else{if(b4==null){if(typeof e==="string"){b4=b5;b5=aF}else{b4=b5;b5=e;e=aF}}}if(b4===false){b4=X}else{if(!b4){return this}}if(b1===1){b6=b4;b4=function(b7){bI().off(b7);return b6.apply(this,arguments)};b4.guid=b6.guid||(b6.guid=bI.guid++)}return this.each(function(){bI.event.add(this,b2,b4,b5,e)})},one:function(b1,e,b3,b2){return this.on(b1,e,b3,b2,1)},off:function(b2,e,b4){var b1,b3;if(b2&&b2.preventDefault&&b2.handleObj){b1=b2.handleObj;bI(b2.delegateTarget).off(b1.namespace?b1.origType+"."+b1.namespace:b1.origType,b1.selector,b1.handler);return this}if(typeof b2==="object"){for(b3 in b2){this.off(b3,e,b2[b3])}return this}if(e===false||typeof e==="function"){b4=e;e=aF}if(b4===false){b4=X}return this.each(function(){bI.event.remove(this,b2,b4,e)})},bind:function(e,b2,b1){return this.on(e,null,b2,b1)},unbind:function(e,b1){return this.off(e,null,b1)},delegate:function(e,b1,b3,b2){return this.on(b1,e,b3,b2)},undelegate:function(e,b1,b2){return arguments.length===1?this.off(e,"**"):this.off(b1,e||"**",b2)},trigger:function(e,b1){return this.each(function(){bI.event.trigger(e,b1,this)})},triggerHandler:function(e,b2){var b1=this[0];if(b1){return bI.event.trigger(e,b2,b1,true)}},hover:function(e,b1){return this.mouseenter(e).mouseleave(b1||e)}});bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b1,e){bI.fn[e]=function(b3,b2){return arguments.length>0?this.on(e,null,b3,b2):this.trigger(e)};if(a3.test(e)){bI.event.fixHooks[e]=bI.event.keyHooks}if(bM.test(e)){bI.event.fixHooks[e]=bI.event.mouseHooks}});
/*
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(c8,cf){var cv,b9,cl,cF,cH,cQ,cR,de,cT,cz,cm,cb,cX,c9,b8,cD,cB,c3="sizzle"+-(new Date()),cG=c8.document,db={},dc=0,cY=0,b3=cx(),c2=cx(),cE=cx(),c7=typeof cf,cL=1<<31,c5=[],c6=c5.pop,b2=c5.push,ck=c5.slice,b7=c5.indexOf||function(dg){var df=0,e=this.length;for(;df<e;df++){if(this[df]===dg){return df}}return -1},cn="[\\x20\\t\\r\\n\\f]",b1="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cI=b1.replace("w","w#"),cg="([*^$|!~]?=)",c0="\\["+cn+"*("+b1+")"+cn+"*(?:"+cg+cn+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cI+")|)|)"+cn+"*\\]",ci=":("+b1+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+c0.replace(3,8)+")*)|.*)\\)|)",cp=new RegExp("^"+cn+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cn+"+$","g"),cs=new RegExp("^"+cn+"*,"+cn+"*"),cy=new RegExp("^"+cn+"*([\\x20\\t\\r\\n\\f>+~])"+cn+"*"),cN=new RegExp(ci),cO=new RegExp("^"+cI+"$"),cW={ID:new RegExp("^#("+b1+")"),CLASS:new RegExp("^\\.("+b1+")"),NAME:new RegExp("^\\[name=['\"]?("+b1+")['\"]?\\]"),TAG:new RegExp("^("+b1.replace("w","w*")+")"),ATTR:new RegExp("^"+c0),PSEUDO:new RegExp("^"+ci),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cn+"*(even|odd|(([+-]|)(\\d*)n|)"+cn+"*(?:([+-]|)"+cn+"*(\\d+)|))"+cn+"*\\)|)","i"),needsContext:new RegExp("^"+cn+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cn+"*((?:-\\d)?\\d*)"+cn+"*\\)|)(?=[^-]|$)","i")},cU=/[\x20\t\r\n\f]*[+~]/,cK=/\{\s*\[native code\]\s*\}/,cM=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,b6=/^(?:input|select|textarea|button)$/i,cj=/^h\d$/i,cJ=/'|\\/g,cr=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cq=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,cZ=function(e,dg){var df="0x"+dg-65536;return df!==df?dg:df<0?String.fromCharCode(df+65536):String.fromCharCode(df>>10|55296,df&1023|56320)};try{ck.call(cm.childNodes,0)[0].nodeType}catch(cA){ck=function(df){var dg,e=[];for(;(dg=this[df]);df++){e.push(dg)}return e}}function cC(e){return cK.test(e+"")}function cx(){var e,df=[];return(e=function(dg,dh){if(df.push(dg+=" ")>cl.cacheLength){delete e[df.shift()]}return(e[dg]=dh)})}function ch(e){e[c3]=true;return e}function ca(df){var dh=cz.createElement("div");try{return df(dh)}catch(dg){return false}finally{dh=null}}function ct(dm,df,dr,dt){var ds,dj,dk,dp,dq,di,dh,e,dg,dn;if((df?df.ownerDocument||df:cG)!==cz){cT(df)}df=df||cz;dr=dr||[];if(!dm||typeof dm!=="string"){return dr}if((dp=df.nodeType)!==1&&dp!==9){return[]}if(!cb&&!dt){if((ds=cM.exec(dm))){if((dk=ds[1])){if(dp===9){dj=df.getElementById(dk);if(dj&&dj.parentNode){if(dj.id===dk){dr.push(dj);return dr}}else{return dr}}else{if(df.ownerDocument&&(dj=df.ownerDocument.getElementById(dk))&&cD(df,dj)&&dj.id===dk){dr.push(dj);return dr}}}else{if(ds[2]){b2.apply(dr,ck.call(df.getElementsByTagName(dm),0));return dr}else{if((dk=ds[3])&&db.getByClassName&&df.getElementsByClassName){b2.apply(dr,ck.call(df.getElementsByClassName(dk),0));return dr}}}}if(db.qsa&&!cX.test(dm)){dh=true;e=c3;dg=df;dn=dp===9&&dm;if(dp===1&&df.nodeName.toLowerCase()!=="object"){di=cd(dm);if((dh=df.getAttribute("id"))){e=dh.replace(cJ,"\\$&")}else{df.setAttribute("id",e)}e="[id='"+e+"'] ";dq=di.length;while(dq--){di[dq]=e+ce(di[dq])}dg=cU.test(dm)&&df.parentNode||df;dn=di.join(",")}if(dn){try{b2.apply(dr,ck.call(dg.querySelectorAll(dn),0));return dr}catch(dl){}finally{if(!dh){df.removeAttribute("id")}}}}}return da(dm.replace(cp,"$1"),df,dr,dt)}cH=ct.isXML=function(e){var df=e&&(e.ownerDocument||e).documentElement;return df?df.nodeName!=="HTML":false};cT=ct.setDocument=function(e){var df=e?e.ownerDocument||e:cG;if(df===cz||df.nodeType!==9||!df.documentElement){return cz}cz=df;cm=df.documentElement;cb=cH(df);db.tagNameNoComments=ca(function(dg){dg.appendChild(df.createComment(""));return !dg.getElementsByTagName("*").length});db.attributes=ca(function(dh){dh.innerHTML="<select></select>";var dg=typeof dh.lastChild.getAttribute("multiple");return dg!=="boolean"&&dg!=="string"});db.getByClassName=ca(function(dg){dg.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!dg.getElementsByClassName||!dg.getElementsByClassName("e").length){return false}dg.lastChild.className="e";return dg.getElementsByClassName("e").length===2});db.getByName=ca(function(dh){dh.id=c3+0;dh.innerHTML="<a name='"+c3+"'></a><div name='"+c3+"'></div>";cm.insertBefore(dh,cm.firstChild);var dg=df.getElementsByName&&df.getElementsByName(c3).length===2+df.getElementsByName(c3+0).length;db.getIdNotName=!df.getElementById(c3);cm.removeChild(dh);return dg});cl.attrHandle=ca(function(dg){dg.innerHTML="<a href='#'></a>";return dg.firstChild&&typeof dg.firstChild.getAttribute!==c7&&dg.firstChild.getAttribute("href")==="#"})?{}:{href:function(dg){return dg.getAttribute("href",2)},type:function(dg){return dg.getAttribute("type")}};if(db.getIdNotName){cl.find.ID=function(di,dh){if(typeof dh.getElementById!==c7&&!cb){var dg=dh.getElementById(di);return dg&&dg.parentNode?[dg]:[]}};cl.filter.ID=function(dh){var dg=dh.replace(cq,cZ);return function(di){return di.getAttribute("id")===dg}}}else{cl.find.ID=function(di,dh){if(typeof dh.getElementById!==c7&&!cb){var dg=dh.getElementById(di);return dg?dg.id===di||typeof dg.getAttributeNode!==c7&&dg.getAttributeNode("id").value===di?[dg]:cf:[]}};cl.filter.ID=function(dh){var dg=dh.replace(cq,cZ);return function(dj){var di=typeof dj.getAttributeNode!==c7&&dj.getAttributeNode("id");return di&&di.value===dg}}}cl.find.TAG=db.tagNameNoComments?function(dg,dh){if(typeof dh.getElementsByTagName!==c7){return dh.getElementsByTagName(dg)}}:function(dg,dk){var dl,dj=[],di=0,dh=dk.getElementsByTagName(dg);if(dg==="*"){for(;(dl=dh[di]);di++){if(dl.nodeType===1){dj.push(dl)}}return dj}return dh};cl.find.NAME=db.getByName&&function(dg,dh){if(typeof dh.getElementsByName!==c7){return dh.getElementsByName(name)}};cl.find.CLASS=db.getByClassName&&function(dh,dg){if(typeof dg.getElementsByClassName!==c7&&!cb){return dg.getElementsByClassName(dh)}};c9=[];cX=[":focus"];if((db.qsa=cC(df.querySelectorAll))){ca(function(dg){dg.innerHTML="<select><option selected=''></option></select>";if(!dg.querySelectorAll("[selected]").length){cX.push("\\["+cn+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!dg.querySelectorAll(":checked").length){cX.push(":checked")}});ca(function(dg){dg.innerHTML="<input type='hidden' i=''/>";if(dg.querySelectorAll("[i^='']").length){cX.push("[*^$]="+cn+"*(?:\"\"|'')")}if(!dg.querySelectorAll(":enabled").length){cX.push(":enabled",":disabled")}dg.querySelectorAll("*,:x");cX.push(",.*:")})}if((db.matchesSelector=cC((b8=cm.matchesSelector||cm.mozMatchesSelector||cm.webkitMatchesSelector||cm.oMatchesSelector||cm.msMatchesSelector)))){ca(function(dg){db.disconnectedMatch=b8.call(dg,"div");b8.call(dg,"[s!='']:x");c9.push("!=",ci)})}cX=new RegExp(cX.join("|"));c9=new RegExp(c9.join("|"));cD=cC(cm.contains)||cm.compareDocumentPosition?function(dh,dg){var dj=dh.nodeType===9?dh.documentElement:dh,di=dg&&dg.parentNode;return dh===di||!!(di&&di.nodeType===1&&(dj.contains?dj.contains(di):dh.compareDocumentPosition&&dh.compareDocumentPosition(di)&16))}:function(dh,dg){if(dg){while((dg=dg.parentNode)){if(dg===dh){return true}}}return false};cB=cm.compareDocumentPosition?function(dh,dg){var di;if(dh===dg){cR=true;return 0}if((di=dg.compareDocumentPosition&&dh.compareDocumentPosition&&dh.compareDocumentPosition(dg))){if(di&1||dh.parentNode&&dh.parentNode.nodeType===11){if(dh===df||cD(cG,dh)){return -1}if(dg===df||cD(cG,dg)){return 1}return 0}return di&4?-1:1}return dh.compareDocumentPosition?-1:1}:function(dh,dg){var dn,dk=0,dm=dh.parentNode,dj=dg.parentNode,di=[dh],dl=[dg];if(dh===dg){cR=true;return 0}else{if(dh.sourceIndex&&dg.sourceIndex){return(~dg.sourceIndex||cL)-(cD(cG,dh)&&~dh.sourceIndex||cL)}else{if(!dm||!dj){return dh===df?-1:dg===df?1:dm?-1:dj?1:0}else{if(dm===dj){return b4(dh,dg)}}}}dn=dh;while((dn=dn.parentNode)){di.unshift(dn)}dn=dg;while((dn=dn.parentNode)){dl.unshift(dn)}while(di[dk]===dl[dk]){dk++}return dk?b4(di[dk],dl[dk]):di[dk]===cG?-1:dl[dk]===cG?1:0};cR=false;[0,0].sort(cB);db.detectDuplicates=cR;return cz};ct.matches=function(df,e){return ct(df,null,null,e)};ct.matchesSelector=function(dg,di){if((dg.ownerDocument||dg)!==cz){cT(dg)}di=di.replace(cr,"='$1']");if(db.matchesSelector&&!cb&&(!c9||!c9.test(di))&&!cX.test(di)){try{var df=b8.call(dg,di);if(df||db.disconnectedMatch||dg.document&&dg.document.nodeType!==11){return df}}catch(dh){}}return ct(di,cz,null,[dg]).length>0};ct.contains=function(e,df){if((e.ownerDocument||e)!==cz){cT(e)}return cD(e,df)};ct.attr=function(df,e){var dg;if((df.ownerDocument||df)!==cz){cT(df)}if(!cb){e=e.toLowerCase()}if((dg=cl.attrHandle[e])){return dg(df)}if(cb||db.attributes){return df.getAttribute(e)}return((dg=df.getAttributeNode(e))||df.getAttribute(e))&&df[e]===true?e:dg&&dg.specified?dg.value:null};ct.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};ct.uniqueSort=function(dg){var dh,di=[],df=1,e=0;cR=!db.detectDuplicates;dg.sort(cB);if(cR){for(;(dh=dg[df]);df++){if(dh===dg[df-1]){e=di.push(df)}}while(e--){dg.splice(di[e],1)}}return dg};function b4(df,e){var dg=df&&e&&df.nextSibling;for(;dg;dg=dg.nextSibling){if(dg===e){return -1}}return df?1:-1}function cu(e){return function(dg){var df=dg.nodeName.toLowerCase();return df==="input"&&dg.type===e}}function b5(e){return function(dg){var df=dg.nodeName.toLowerCase();return(df==="input"||df==="button")&&dg.type===e}}function c1(e){return ch(function(df){df=+df;return ch(function(dg,dk){var di,dh=e([],dg.length,df),dj=dh.length;while(dj--){if(dg[(di=dh[dj])]){dg[di]=!(dk[di]=dg[di])}}})})}cF=ct.getText=function(di){var dh,df="",dg=0,e=di.nodeType;if(!e){for(;(dh=di[dg]);dg++){df+=cF(dh)}}else{if(e===1||e===9||e===11){if(typeof di.textContent==="string"){return di.textContent}else{for(di=di.firstChild;di;di=di.nextSibling){df+=cF(di)}}}else{if(e===3||e===4){return di.nodeValue}}}return df};cl=ct.selectors={cacheLength:50,createPseudo:ch,match:cW,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cq,cZ);e[3]=(e[4]||e[5]||"").replace(cq,cZ);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){ct.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+((e[7]+e[8])||e[3]==="odd")}else{if(e[3]){ct.error(e[0])}}return e},PSEUDO:function(df){var e,dg=!df[5]&&df[2];if(cW.CHILD.test(df[0])){return null}if(df[4]){df[2]=df[4]}else{if(dg&&cN.test(dg)&&(e=cd(dg,true))&&(e=dg.indexOf(")",dg.length-e)-dg.length)){df[0]=df[0].slice(0,e);df[2]=dg.slice(0,e)}}return df.slice(0,3)}},filter:{TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(cq,cZ).toLowerCase();return function(df){return df.nodeName&&df.nodeName.toLowerCase()===e}},CLASS:function(e){var df=b3[e+" "];return df||(df=new RegExp("(^|"+cn+")"+e+"("+cn+"|$)"))&&b3(e,function(dg){return df.test(dg.className||(typeof dg.getAttribute!==c7&&dg.getAttribute("class"))||"")})},ATTR:function(dg,df,e){return function(di){var dh=ct.attr(di,dg);if(dh==null){return df==="!="}if(!df){return true}dh+="";return df==="="?dh===e:df==="!="?dh!==e:df==="^="?e&&dh.indexOf(e)===0:df==="*="?e&&dh.indexOf(e)>-1:df==="$="?e&&dh.substr(dh.length-e.length)===e:df==="~="?(" "+dh+" ").indexOf(e)>-1:df==="|="?dh===e||dh.substr(0,e.length+1)===e+"-":false}},CHILD:function(df,di,dh,dj,dg){var dl=df.slice(0,3)!=="nth",e=df.slice(-4)!=="last",dk=di==="of-type";return dj===1&&dg===0?function(dm){return !!dm.parentNode}:function(dt,dr,dw){var dm,dz,du,dy,dv,dq,ds=dl!==e?"nextSibling":"previousSibling",dx=dt.parentNode,dp=dk&&dt.nodeName.toLowerCase(),dn=!dw&&!dk;if(dx){if(dl){while(ds){du=dt;while((du=du[ds])){if(dk?du.nodeName.toLowerCase()===dp:du.nodeType===1){return false}}dq=ds=df==="only"&&!dq&&"nextSibling"}return true}dq=[e?dx.firstChild:dx.lastChild];if(e&&dn){dz=dx[c3]||(dx[c3]={});dm=dz[df]||[];dv=dm[0]===dc&&dm[1];dy=dm[0]===dc&&dm[2];du=dv&&dx.childNodes[dv];while((du=++dv&&du&&du[ds]||(dy=dv=0)||dq.pop())){if(du.nodeType===1&&++dy&&du===dt){dz[df]=[dc,dv,dy];break}}}else{if(dn&&(dm=(dt[c3]||(dt[c3]={}))[df])&&dm[0]===dc){dy=dm[1]}else{while((du=++dv&&du&&du[ds]||(dy=dv=0)||dq.pop())){if((dk?du.nodeName.toLowerCase()===dp:du.nodeType===1)&&++dy){if(dn){(du[c3]||(du[c3]={}))[df]=[dc,dy]}if(du===dt){break}}}}}dy-=dg;return dy===dj||(dy%dj===0&&dy/dj>=0)}}},PSEUDO:function(dh,dg){var e,df=cl.pseudos[dh]||cl.setFilters[dh.toLowerCase()]||ct.error("unsupported pseudo: "+dh);if(df[c3]){return df(dg)}if(df.length>1){e=[dh,dh,"",dg];return cl.setFilters.hasOwnProperty(dh.toLowerCase())?ch(function(dk,dm){var dj,di=df(dk,dg),dl=di.length;while(dl--){dj=b7.call(dk,di[dl]);dk[dj]=!(dm[dj]=di[dl])}}):function(di){return df(di,0,e)}}return df}},pseudos:{not:ch(function(e){var df=[],dg=[],dh=cQ(e.replace(cp,"$1"));return dh[c3]?ch(function(dj,dp,dm,dk){var dn,di=dh(dj,null,dk,[]),dl=dj.length;while(dl--){if((dn=di[dl])){dj[dl]=!(dp[dl]=dn)}}}):function(dk,dj,di){df[0]=dk;dh(df,null,di,dg);return !dg.pop()}}),has:ch(function(e){return function(df){return ct(e,df).length>0}}),contains:ch(function(e){return function(df){return(df.textContent||df.innerText||cF(df)).indexOf(e)>-1}}),lang:ch(function(e){if(!cO.test(e||"")){ct.error("unsupported lang: "+e)}e=e.replace(cq,cZ).toLowerCase();return function(dg){var df;do{if((df=cb?dg.getAttribute("xml:lang")||dg.getAttribute("lang"):dg.lang)){df=df.toLowerCase();return df===e||df.indexOf(e+"-")===0}}while((dg=dg.parentNode)&&dg.nodeType===1);return false}}),target:function(e){var df=c8.location&&c8.location.hash;return df&&df.slice(1)===e.id},root:function(e){return e===cm},focus:function(e){return e===cz.activeElement&&(!cz.hasFocus||cz.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var df=e.nodeName.toLowerCase();return(df==="input"&&!!e.checked)||(df==="option"&&!!e.selected)},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return !cl.pseudos.empty(e)},header:function(e){return cj.test(e.nodeName)},input:function(e){return b6.test(e.nodeName)},button:function(df){var e=df.nodeName.toLowerCase();return e==="input"&&df.type==="button"||e==="button"},text:function(df){var e;return df.nodeName.toLowerCase()==="input"&&df.type==="text"&&((e=df.getAttribute("type"))==null||e.toLowerCase()===df.type)},first:c1(function(){return[0]}),last:c1(function(e,df){return[df-1]}),eq:c1(function(e,dg,df){return[df<0?df+dg:df]}),even:c1(function(e,dg){var df=0;for(;df<dg;df+=2){e.push(df)}return e}),odd:c1(function(e,dg){var df=1;for(;df<dg;df+=2){e.push(df)}return e}),lt:c1(function(e,dh,dg){var df=dg<0?dg+dh:dg;for(;--df>=0;){e.push(df)}return e}),gt:c1(function(e,dh,dg){var df=dg<0?dg+dh:dg;for(;++df<dh;){e.push(df)}return e})}};for(cv in {radio:true,checkbox:true,file:true,password:true,image:true}){cl.pseudos[cv]=cu(cv)}for(cv in {submit:true,reset:true}){cl.pseudos[cv]=b5(cv)}function cd(di,dn){var df,dj,dl,dm,dk,dg,e,dh=c2[di+" "];if(dh){return dn?0:dh.slice(0)}dk=di;dg=[];e=cl.preFilter;while(dk){if(!df||(dj=cs.exec(dk))){if(dj){dk=dk.slice(dj[0].length)||dk}dg.push(dl=[])}df=false;if((dj=cy.exec(dk))){df=dj.shift();dl.push({value:df,type:dj[0].replace(cp," ")});dk=dk.slice(df.length)}for(dm in cl.filter){if((dj=cW[dm].exec(dk))&&(!e[dm]||(dj=e[dm](dj)))){df=dj.shift();dl.push({value:df,type:dm,matches:dj});dk=dk.slice(df.length)}}if(!df){break}}return dn?dk.length:dk?ct.error(di):c2(di,dg).slice(0)}function ce(dh){var dg=0,df=dh.length,e="";for(;dg<df;dg++){e+=dh[dg].value}return e}function co(di,dg,dh){var e=dg.dir,dj=dh&&dg.dir==="parentNode",df=cY++;return dg.first?function(dm,dl,dk){while((dm=dm[e])){if(dm.nodeType===1||dj){return di(dm,dl,dk)}}}:function(dp,dm,dl){var dr,dk,dn,dq=dc+" "+df;if(dl){while((dp=dp[e])){if(dp.nodeType===1||dj){if(di(dp,dm,dl)){return true}}}}else{while((dp=dp[e])){if(dp.nodeType===1||dj){dn=dp[c3]||(dp[c3]={});if((dk=dn[e])&&dk[0]===dq){if((dr=dk[1])===true||dr===b9){return dr===true}}else{dk=dn[e]=[dq];dk[1]=di(dp,dm,dl)||b9;if(dk[1]===true){return true}}}}}}}function dd(e){return e.length>1?function(di,dh,df){var dg=e.length;while(dg--){if(!e[dg](di,dh,df)){return false}}return true}:e[0]}function cV(e,df,dg,dh,dk){var di,dn=[],dj=0,dl=e.length,dm=df!=null;for(;dj<dl;dj++){if((di=e[dj])){if(!dg||dg(di,dh,dk)){dn.push(di);if(dm){df.push(dj)}}}}return dn}function cc(dg,df,di,dh,dj,e){if(dh&&!dh[c3]){dh=cc(dh)}if(dj&&!dj[c3]){dj=cc(dj,e)}return ch(function(dv,ds,dm,du){var dx,dt,dp,dn=[],dw=[],dl=ds.length,dk=dv||cw(df||"*",dm.nodeType?[dm]:dm,[]),dq=dg&&(dv||!df)?cV(dk,dn,dg,dm,du):dk,dr=di?dj||(dv?dg:dl||dh)?[]:ds:dq;if(di){di(dq,dr,dm,du)}if(dh){dx=cV(dr,dw);dh(dx,[],dm,du);dt=dx.length;while(dt--){if((dp=dx[dt])){dr[dw[dt]]=!(dq[dw[dt]]=dp)}}}if(dv){if(dj||dg){if(dj){dx=[];dt=dr.length;while(dt--){if((dp=dr[dt])){dx.push((dq[dt]=dp))}}dj(null,(dr=[]),dx,du)}dt=dr.length;while(dt--){if((dp=dr[dt])&&(dx=dj?b7.call(dv,dp):dn[dt])>-1){dv[dx]=!(ds[dx]=dp)}}}}else{dr=cV(dr===ds?dr.splice(dl,dr.length):dr);if(dj){dj(null,ds,dr,du)}else{b2.apply(ds,dr)}}})}function c4(dk){var df,di,dg,dj=dk.length,dn=cl.relative[dk[0].type],dp=dn||cl.relative[" "],dh=dn?1:0,dl=co(function(dq){return dq===df},dp,true),dm=co(function(dq){return b7.call(df,dq)>-1},dp,true),e=[function(ds,dr,dq){return(!dn&&(dq||dr!==de))||((df=dr).nodeType?dl(ds,dr,dq):dm(ds,dr,dq))}];for(;dh<dj;dh++){if((di=cl.relative[dk[dh].type])){e=[co(dd(e),di)]}else{di=cl.filter[dk[dh].type].apply(null,dk[dh].matches);if(di[c3]){dg=++dh;for(;dg<dj;dg++){if(cl.relative[dk[dg].type]){break}}return cc(dh>1&&dd(e),dh>1&&ce(dk.slice(0,dh-1)).replace(cp,"$1"),di,dh<dg&&c4(dk.slice(dh,dg)),dg<dj&&c4((dk=dk.slice(dg))),dg<dj&&ce(dk))}e.push(di)}}return dd(e)}function cS(dh,dg){var dj=0,e=dg.length>0,di=dh.length>0,df=function(du,dn,dt,ds,dA){var dp,dq,dv,dz=[],dy=0,dr="0",dk=du&&[],dw=dA!=null,dx=de,dm=du||di&&cl.find.TAG("*",dA&&dn.parentNode||dn),dl=(dc+=dx==null?1:Math.E);if(dw){de=dn!==cz&&dn;b9=dj}for(;(dp=dm[dr])!=null;dr++){if(di&&dp){for(dq=0;(dv=dh[dq]);dq++){if(dv(dp,dn,dt)){ds.push(dp);break}}if(dw){dc=dl;b9=++dj}}if(e){if((dp=!dv&&dp)){dy--}if(du){dk.push(dp)}}}dy+=dr;if(e&&dr!==dy){for(dq=0;(dv=dg[dq]);dq++){dv(dk,dz,dn,dt)}if(du){if(dy>0){while(dr--){if(!(dk[dr]||dz[dr])){dz[dr]=c6.call(ds)}}}dz=cV(dz)}b2.apply(ds,dz);if(dw&&!du&&dz.length>0&&(dy+dg.length)>1){ct.uniqueSort(ds)}}if(dw){dc=dl;de=dx}return dk};return e?ch(df):df}cQ=ct.compile=function(e,dj){var dg,df=[],di=[],dh=cE[e+" "];if(!dh){if(!dj){dj=cd(e)}dg=dj.length;while(dg--){dh=c4(dj[dg]);if(dh[c3]){df.push(dh)}else{di.push(dh)}}dh=cE(e,cS(di,df))}return dh};function cw(df,di,dh){var dg=0,e=di.length;for(;dg<e;dg++){ct(df,di[dg],dh)}return dh}function da(dg,e,dh,dk){var di,dm,df,dn,dl,dj=cd(dg);if(!dk){if(dj.length===1){dm=dj[0]=dj[0].slice(0);if(dm.length>2&&(df=dm[0]).type==="ID"&&e.nodeType===9&&!cb&&cl.relative[dm[1].type]){e=cl.find.ID(df.matches[0].replace(cq,cZ),e)[0];if(!e){return dh}dg=dg.slice(dm.shift().value.length)}for(di=cW.needsContext.test(dg)?-1:dm.length-1;di>=0;di--){df=dm[di];if(cl.relative[(dn=df.type)]){break}if((dl=cl.find[dn])){if((dk=dl(df.matches[0].replace(cq,cZ),cU.test(dm[0].type)&&e.parentNode||e))){dm.splice(di,1);dg=dk.length&&ce(dm);if(!dg){b2.apply(dh,ck.call(dk,0));return dh}break}}}}}cQ(dg,dj)(dk,e,cb,dh,cU.test(dg));return dh}cl.pseudos.nth=cl.pseudos.eq;function cP(){}cl.filters=cP.prototype=cl.pseudos;cl.setFilters=new cP();cT();ct.attr=bI.attr;bI.find=ct;bI.expr=ct.selectors;bI.expr[":"]=bI.expr.pseudos;bI.unique=ct.uniqueSort;bI.text=ct.getText;bI.isXMLDoc=ct.isXML;bI.contains=ct.contains})(a2);var aj=/Until$/,bs=/^(?:parents|prev(?:Until|All))/,an=/^.[^:#\[\.,]*$/,y=bI.expr.match.needsContext,bw={children:true,contents:true,next:true,prev:true};bI.fn.extend({find:function(e){var b3,b2,b1;if(typeof e!=="string"){b1=this;return this.pushStack(bI(e).filter(function(){for(b3=0;b3<b1.length;b3++){if(bI.contains(b1[b3],this)){return true}}}))}b2=[];for(b3=0;b3<this.length;b3++){bI.find(e,this[b3],b2)}b2=this.pushStack(bI.unique(b2));b2.selector=(this.selector?this.selector+" ":"")+e;return b2},has:function(b3){var b2,b1=bI(b3,this),e=b1.length;return this.filter(function(){for(b2=0;b2<e;b2++){if(bI.contains(this,b1[b2])){return true}}})},not:function(e){return this.pushStack(aO(this,e,false))},filter:function(e){return this.pushStack(aO(this,e,true))},is:function(e){return !!e&&(typeof e==="string"?y.test(e)?bI(e,this.context).index(this[0])>=0:bI.filter(e,this).length>0:this.filter(e).length>0)},closest:function(b4,b3){var b5,b2=0,e=this.length,b1=[],b6=y.test(b4)||typeof b4!=="string"?bI(b4,b3||this.context):0;for(;b2<e;b2++){b5=this[b2];while(b5&&b5.ownerDocument&&b5!==b3&&b5.nodeType!==11){if(b6?b6.index(b5)>-1:bI.find.matchesSelector(b5,b4)){b1.push(b5);break}b5=b5.parentNode}}return this.pushStack(b1.length>1?bI.unique(b1):b1)},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1}if(typeof e==="string"){return bI.inArray(this[0],bI(e))}return bI.inArray(e.jquery?e[0]:e,this)},add:function(e,b1){var b3=typeof e==="string"?bI(e,b1):bI.makeArray(e&&e.nodeType?[e]:e),b2=bI.merge(this.get(),b3);return this.pushStack(bI.unique(b2))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});bI.fn.andSelf=bI.fn.addBack;function aX(b1,e){do{b1=b1[e]}while(b1&&b1.nodeType!==1);return b1}bI.each({parent:function(b1){var e=b1.parentNode;return e&&e.nodeType!==11?e:null},parents:function(e){return bI.dir(e,"parentNode")},parentsUntil:function(b1,e,b2){return bI.dir(b1,"parentNode",b2)},next:function(e){return aX(e,"nextSibling")},prev:function(e){return aX(e,"previousSibling")},nextAll:function(e){return bI.dir(e,"nextSibling")},prevAll:function(e){return bI.dir(e,"previousSibling")},nextUntil:function(b1,e,b2){return bI.dir(b1,"nextSibling",b2)},prevUntil:function(b1,e,b2){return bI.dir(b1,"previousSibling",b2)},siblings:function(e){return bI.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return bI.sibling(e.firstChild)},contents:function(e){return bI.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bI.merge([],e.childNodes)}},function(e,b1){bI.fn[e]=function(b4,b2){var b3=bI.map(this,b1,b4);if(!aj.test(e)){b2=b4}if(b2&&typeof b2==="string"){b3=bI.filter(b2,b3)}b3=this.length>1&&!bw[e]?bI.unique(b3):b3;if(this.length>1&&bs.test(e)){b3=b3.reverse()}return this.pushStack(b3)}});bI.extend({filter:function(b2,e,b1){if(b1){b2=":not("+b2+")"}return e.length===1?bI.find.matchesSelector(e[0],b2)?[e[0]]:[]:bI.find.matches(b2,e)},dir:function(b2,b1,b4){var e=[],b3=b2[b1];while(b3&&b3.nodeType!==9&&(b4===aF||b3.nodeType!==1||!bI(b3).is(b4))){if(b3.nodeType===1){e.push(b3)}b3=b3[b1]}return e},sibling:function(b2,b1){var e=[];for(;b2;b2=b2.nextSibling){if(b2.nodeType===1&&b2!==b1){e.push(b2)}}return e}});function aO(b3,b2,e){b2=b2||0;if(bI.isFunction(b2)){return bI.grep(b3,function(b5,b4){var b6=!!b2.call(b5,b4,b5);return b6===e})}else{if(b2.nodeType){return bI.grep(b3,function(b4){return(b4===b2)===e})}else{if(typeof b2==="string"){var b1=bI.grep(b3,function(b4){return b4.nodeType===1});if(an.test(b2)){return bI.filter(b2,b1,!e)}else{b2=bI.filter(b2,b1)}}}}return bI.grep(b3,function(b4){return(bI.inArray(b4,b2)>=0)===e})}function A(e){var b2=d.split("|"),b1=e.createDocumentFragment();if(b1.createElement){while(b2.length){b1.createElement(b2.pop())}}return b1}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aA=/ jQuery\d+="(?:null|\d+)"/g,J=new RegExp("<(?:"+d+")[\\s/>]","i"),b0=/^\s+/,aC=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/<([\w:]+)/,bV=/<tbody/i,I=/<|&#?\w+;/,al=/<(?:script|style|link)/i,q=/^(?:checkbox|radio)$/i,bT=/checked\s*(?:[^=]|=\s*.checked.)/i,by=/^$|\/(?:java|ecma)script/i,ar=/^true\/(.*)/,aK=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,T={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:bI.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aS=A(l),j=aS.appendChild(l.createElement("div"));T.optgroup=T.option;T.tbody=T.tfoot=T.colgroup=T.caption=T.thead;T.th=T.td;bI.fn.extend({text:function(e){return bI.access(this,function(b1){return b1===aF?bI.text(this):this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(b1))},null,e,arguments.length)},wrapAll:function(e){if(bI.isFunction(e)){return this.each(function(b2){bI(this).wrapAll(e.call(this,b2))})}if(this[0]){var b1=bI(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){b1.insertBefore(this[0])}b1.map(function(){var b2=this;while(b2.firstChild&&b2.firstChild.nodeType===1){b2=b2.firstChild}return b2}).append(this)}return this},wrapInner:function(e){if(bI.isFunction(e)){return this.each(function(b1){bI(this).wrapInner(e.call(this,b1))})}return this.each(function(){var b1=bI(this),b2=b1.contents();if(b2.length){b2.wrapAll(e)}else{b1.append(e)}})},wrap:function(e){var b1=bI.isFunction(e);return this.each(function(b2){bI(this).wrapAll(b1?e.call(this,b2):e)})},unwrap:function(){return this.parent().each(function(){if(!bI.nodeName(this,"body")){bI(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(e,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,b3){var b2,b1=0;for(;(b2=this[b1])!=null;b1++){if(!e||bI.filter(e,[b2]).length>0){if(!b3&&b2.nodeType===1){bI.cleanData(k(b2))}if(b2.parentNode){if(b3&&bI.contains(b2.ownerDocument,b2)){br(k(b2,"script"))}b2.parentNode.removeChild(b2)}}}return this},empty:function(){var b1,e=0;for(;(b1=this[e])!=null;e++){if(b1.nodeType===1){bI.cleanData(k(b1,false))}while(b1.firstChild){b1.removeChild(b1.firstChild)}if(b1.options&&bI.nodeName(b1,"select")){b1.options.length=0}}return this},clone:function(b1,e){b1=b1==null?false:b1;e=e==null?b1:e;return this.map(function(){return bI.clone(this,b1,e)})},html:function(e){return bI.access(this,function(b4){var b3=this[0]||{},b2=0,b1=this.length;if(b4===aF){return b3.nodeType===1?b3.innerHTML.replace(aA,""):aF}if(typeof b4==="string"&&!al.test(b4)&&(bI.support.htmlSerialize||!J.test(b4))&&(bI.support.leadingWhitespace||!b0.test(b4))&&!T[(m.exec(b4)||["",""])[1].toLowerCase()]){b4=b4.replace(aC,"<$1></$2>");try{for(;b2<b1;b2++){b3=this[b2]||{};if(b3.nodeType===1){bI.cleanData(k(b3,false));b3.innerHTML=b4}}b3=0}catch(b5){}}if(b3){this.empty().append(b4)}},null,e,arguments.length)},replaceWith:function(b1){var e=bI.isFunction(b1);if(!e&&typeof b1!=="string"){b1=bI(b1).not(this).detach()}return this.domManip([b1],true,function(b4){var b3=this.nextSibling,b2=this.parentNode;if(b2&&this.nodeType===1||this.nodeType===11){bI(this).remove();if(b3){b3.parentNode.insertBefore(b4,b3)}else{b2.appendChild(b4)}}})},detach:function(e){return this.remove(e,true)},domManip:function(b8,ce,cd){b8=aH.apply([],b8);var b7,b6,b4,e,b2,cb,b5=0,b3=this.length,ca=this,cc=b3-1,b9=b8[0],b1=bI.isFunction(b9);if(b1||!(b3<=1||typeof b9!=="string"||bI.support.checkClone||!bT.test(b9))){return this.each(function(cg){var cf=ca.eq(cg);if(b1){b8[0]=b9.call(this,cg,ce?cf.html():aF)}cf.domManip(b8,ce,cd)})}if(b3){b7=bI.buildFragment(b8,this[0].ownerDocument,false,this);b6=b7.firstChild;if(b7.childNodes.length===1){b7=b6}if(b6){ce=ce&&bI.nodeName(b6,"tr");b4=bI.map(k(b7,"script"),t);e=b4.length;for(;b5<b3;b5++){b2=b7;if(b5!==cc){b2=bI.clone(b2,true,true);if(e){bI.merge(b4,k(b2,"script"))}}cd.call(ce&&bI.nodeName(this[b5],"table")?x(this[b5],"tbody"):this[b5],b2,b5)}if(e){cb=b4[b4.length-1].ownerDocument;bI.map(b4,bc);for(b5=0;b5<e;b5++){b2=b4[b5];if(by.test(b2.type||"")&&!bI._data(b2,"globalEval")&&bI.contains(cb,b2)){if(b2.src){bI.ajax({url:b2.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{bI.globalEval((b2.text||b2.textContent||b2.innerHTML||"").replace(aK,""))}}}}b7=b6=null}}return this}});function x(b1,e){return b1.getElementsByTagName(e)[0]||b1.appendChild(b1.ownerDocument.createElement(e))}function t(b1){var e=b1.getAttributeNode("type");b1.type=(e&&e.specified)+"/"+b1.type;return b1}function bc(b1){var e=ar.exec(b1.type);if(e){b1.type=e[1]}else{b1.removeAttribute("type")}return b1}function br(e,b2){var b3,b1=0;for(;(b3=e[b1])!=null;b1++){bI._data(b3,"globalEval",!b2||bI._data(b2[b1],"globalEval"))}}function at(b7,b1){if(b1.nodeType!==1||!bI.hasData(b7)){return}var b4,b3,e,b6=bI._data(b7),b5=bI._data(b1,b6),b2=b6.events;if(b2){delete b5.handle;b5.events={};for(b4 in b2){for(b3=0,e=b2[b4].length;b3<e;b3++){bI.event.add(b1,b4,b2[b4][b3])}}}if(b5.data){b5.data=bI.extend({},b5.data)}}function Q(b4,b1){var b5,b2,b3;if(b1.nodeType!==1){return}b5=b1.nodeName.toLowerCase();if(!bI.support.noCloneEvent&&b1[bI.expando]){b2=bI._data(b1);for(b3 in b2.events){bI.removeEvent(b1,b3,b2.handle)}b1.removeAttribute(bI.expando)}if(b5==="script"&&b1.text!==b4.text){t(b1).text=b4.text;bc(b1)}else{if(b5==="object"){if(b1.parentNode){b1.outerHTML=b4.outerHTML}if(bI.support.html5Clone&&(b4.innerHTML&&!bI.trim(b1.innerHTML))){b1.innerHTML=b4.innerHTML}}else{if(b5==="input"&&q.test(b4.type)){b1.defaultChecked=b1.checked=b4.checked;if(b1.value!==b4.value){b1.value=b4.value}}else{if(b5==="option"){b1.defaultSelected=b1.selected=b4.defaultSelected}else{if(b5==="input"||b5==="textarea"){b1.defaultValue=b4.defaultValue}}}}}}bI.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b1){bI.fn[e]=function(b2){var b3,b5=0,b4=[],b7=bI(b2),b6=b7.length-1;for(;b5<=b6;b5++){b3=b5===b6?this:this.clone(true);bI(b7[b5])[b1](b3);ao.apply(b4,b3.get())}return this.pushStack(b4)}});function k(b3,e){var b1,b4,b2=0,b5=typeof b3.getElementsByTagName!=="undefined"?b3.getElementsByTagName(e||"*"):typeof b3.querySelectorAll!=="undefined"?b3.querySelectorAll(e||"*"):aF;if(!b5){for(b5=[],b1=b3.childNodes||b3;(b4=b1[b2])!=null;b2++){if(!e||bI.nodeName(b4,e)){b5.push(b4)}else{bI.merge(b5,k(b4,e))}}}return e===aF||e&&bI.nodeName(b3,e)?bI.merge([b3],b5):b5}function bU(e){if(q.test(e.type)){e.defaultChecked=e.checked}}bI.extend({clone:function(b1,b3,e){var b5,b6,b2,b4,b8,b7=bI.contains(b1.ownerDocument,b1);if(bI.support.html5Clone||bI.isXMLDoc(b1)||!J.test("<"+b1.nodeName+">")){b8=b1.cloneNode(true)}else{j.innerHTML=b1.outerHTML;j.removeChild(b8=j.firstChild)}if((!bI.support.noCloneEvent||!bI.support.noCloneChecked)&&(b1.nodeType===1||b1.nodeType===11)&&!bI.isXMLDoc(b1)){b5=k(b8);b6=k(b1);for(b4=0;(b2=b6[b4])!=null;++b4){if(b5[b4]){Q(b2,b5[b4])}}}if(b3){if(e){b6=b6||k(b1);b5=b5||k(b8);for(b4=0;(b2=b6[b4])!=null;b4++){at(b2,b5[b4])}}else{at(b1,b8)}}b5=k(b8,"script");if(b5.length>0){br(b5,!b7&&k(b1,"script"))}b5=b6=b2=null;return b8},buildFragment:function(b1,b3,b8,cd){var b7,b5,ce,cc,b2,cb,b9,b6=b1.length,b4=A(b3),e=[],ca=0;for(;ca<b6;ca++){b5=b1[ca];if(b5||b5===0){if(bI.type(b5)==="object"){bI.merge(e,b5.nodeType?[b5]:b5)}else{if(!I.test(b5)){e.push(b3.createTextNode(b5))}else{cc=cc||b4.appendChild(b3.createElement("div"));ce=(m.exec(b5)||["",""])[1].toLowerCase();b2=T[ce]||T._default;cc.innerHTML=b2[1]+b5.replace(aC,"<$1></$2>")+b2[2];b9=b2[0];while(b9--){cc=cc.lastChild}if(!bI.support.leadingWhitespace&&b0.test(b5)){e.push(b3.createTextNode(b0.exec(b5)[0]))}if(!bI.support.tbody){b5=ce==="table"&&!bV.test(b5)?cc.firstChild:b2[1]==="<table>"&&!bV.test(b5)?cc:0;b9=b5&&b5.childNodes.length;while(b9--){if(bI.nodeName((cb=b5.childNodes[b9]),"tbody")&&!cb.childNodes.length){b5.removeChild(cb)}}}bI.merge(e,cc.childNodes);cc.textContent="";while(cc.firstChild){cc.removeChild(cc.firstChild)}cc=b4.lastChild}}}}if(cc){b4.removeChild(cc)}if(!bI.support.appendChecked){bI.grep(k(e,"input"),bU)}ca=0;while((b5=e[ca++])){if(cd&&bI.inArray(b5,cd)!==-1){continue}b7=bI.contains(b5.ownerDocument,b5);cc=k(b4.appendChild(b5),"script");if(b7){br(cc)}if(b8){b9=0;while((b5=cc[b9++])){if(by.test(b5.type||"")){b8.push(b5)}}}}cc=null;return b4},cleanData:function(b1,b9){var b4,b2,b3,b8,b5=0,ca=bI.expando,e=bI.cache,b6=bI.support.deleteExpando,b7=bI.event.special;for(;(b3=b1[b5])!=null;b5++){if(b9||bI.acceptData(b3)){b2=b3[ca];b4=b2&&e[b2];if(b4){if(b4.events){for(b8 in b4.events){if(b7[b8]){bI.event.remove(b3,b8)}else{bI.removeEvent(b3,b8,b4.handle)}}}if(e[b2]){delete e[b2];if(b6){delete b3[ca]}else{if(typeof b3.removeAttribute!=="undefined"){b3.removeAttribute(ca)}else{b3[ca]=null}}a6.push(b2)}}}}}});var E,bn,aD,bg=/alpha\([^)]*\)/i,aT=/opacity\s*=\s*([^)]*)/,bm=/^(top|right|bottom|left)$/,F=/^(none|table(?!-c[ea]).+)/,aY=/^margin/,a9=new RegExp("^("+bz+")(.*)$","i"),W=new RegExp("^("+bz+")(?!px)[a-z%]+$","i"),S=new RegExp("^([+-])=("+bz+")","i"),bj={BODY:"block"},bb={position:"absolute",visibility:"hidden",display:"block"},bB={letterSpacing:0,fontWeight:400},bS=["Top","Right","Bottom","Left"],av=["Webkit","O","Moz","ms"];function b(b3,b1){if(b1 in b3){return b1}var b4=b1.charAt(0).toUpperCase()+b1.slice(1),e=b1,b2=av.length;while(b2--){b1=av[b2]+b4;if(b1 in b3){return b1}}return e}function P(b1,e){b1=e||b1;return bI.css(b1,"display")==="none"||!bI.contains(b1.ownerDocument,b1)}function p(b5,e){var b4,b1=[],b2=0,b3=b5.length;for(;b2<b3;b2++){b4=b5[b2];if(!b4.style){continue}b1[b2]=bI._data(b4,"olddisplay");if(e){if(!b1[b2]&&b4.style.display==="none"){b4.style.display=""}if(b4.style.display===""&&P(b4)){b1[b2]=bI._data(b4,"olddisplay",bD(b4.nodeName))}}else{if(!b1[b2]&&!P(b4)){bI._data(b4,"olddisplay",bI.css(b4,"display"))}}}for(b2=0;b2<b3;b2++){b4=b5[b2];if(!b4.style){continue}if(!e||b4.style.display==="none"||b4.style.display===""){b4.style.display=e?b1[b2]||"":"none"}}return b5}bI.fn.extend({css:function(e,b1){return bI.access(this,function(b6,b3,b7){var b5,b2,b8={},b4=0;if(bI.isArray(b3)){b5=bn(b6);b2=b3.length;for(;b4<b2;b4++){b8[b3[b4]]=bI.css(b6,b3[b4],false,b5)}return b8}return b7!==aF?bI.style(b6,b3,b7):bI.css(b6,b3)},e,b1,arguments.length>1)},show:function(){return p(this,true)},hide:function(){return p(this)},toggle:function(b1){var e=typeof b1==="boolean";return this.each(function(){if(e?b1:P(this)){bI(this).show()}else{bI(this).hide()}})}});bI.extend({cssHooks:{opacity:{get:function(b2,b1){if(b1){var e=E(b2,"opacity");return e===""?"1":e}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bI.support.cssFloat?"cssFloat":"styleFloat"},style:function(b3,b2,b9,b4){if(!b3||b3.nodeType===3||b3.nodeType===8||!b3.style){return}var b7,b8,ca,b5=bI.camelCase(b2),b1=b3.style;b2=bI.cssProps[b5]||(bI.cssProps[b5]=b(b1,b5));ca=bI.cssHooks[b2]||bI.cssHooks[b5];if(b9!==aF){b8=typeof b9;if(b8==="string"&&(b7=S.exec(b9))){b9=(b7[1]+1)*b7[2]+parseFloat(bI.css(b3,b2));b8="number"}if(b9==null||b8==="number"&&isNaN(b9)){return}if(b8==="number"&&!bI.cssNumber[b5]){b9+="px"}if(!bI.support.clearCloneStyle&&b9===""&&b2.indexOf("background")===0){b1[b2]="inherit"}if(!ca||!("set" in ca)||(b9=ca.set(b3,b9,b4))!==aF){try{b1[b2]=b9}catch(b6){}}}else{if(ca&&"get" in ca&&(b7=ca.get(b3,false,b4))!==aF){return b7}return b1[b2]}},css:function(b6,b4,b1,b5){var b7,b3,e,b2=bI.camelCase(b4);b4=bI.cssProps[b2]||(bI.cssProps[b2]=b(b6.style,b2));e=bI.cssHooks[b4]||bI.cssHooks[b2];if(e&&"get" in e){b7=e.get(b6,true,b1)}if(b7===aF){b7=E(b6,b4,b5)}if(b7==="normal"&&b4 in bB){b7=bB[b4]}if(b1){b3=parseFloat(b7);return b1===true||bI.isNumeric(b3)?b3||0:b7}return b7},swap:function(b5,b4,b6,b3){var b2,b1,e={};for(b1 in b4){e[b1]=b5.style[b1];b5.style[b1]=b4[b1]}b2=b6.apply(b5,b3||[]);for(b1 in b4){b5.style[b1]=e[b1]}return b2}});if(a2.getComputedStyle){bn=function(e){return a2.getComputedStyle(e,null)};E=function(b4,b2,b6){var b3,b1,b8,b5=b6||bn(b4),b7=b5?b5.getPropertyValue(b2)||b5[b2]:aF,e=b4.style;if(b5){if(b7===""&&!bI.contains(b4.ownerDocument,b4)){b7=bI.style(b4,b2)}if(W.test(b7)&&aY.test(b2)){b3=e.width;b1=e.minWidth;b8=e.maxWidth;e.minWidth=e.maxWidth=e.width=b7;b7=b5.width;e.width=b3;e.minWidth=b1;e.maxWidth=b8}}return b7}}else{if(l.documentElement.currentStyle){bn=function(e){return e.currentStyle};E=function(b3,b1,b6){var b2,b5,b7,b4=b6||bn(b3),b8=b4?b4[b1]:aF,e=b3.style;if(b8==null&&e&&e[b1]){b8=e[b1]}if(W.test(b8)&&!bm.test(b1)){b2=e.left;b5=b3.runtimeStyle;b7=b5&&b5.left;if(b7){b5.left=b3.currentStyle.left}e.left=b1==="fontSize"?"1em":b8;b8=e.pixelLeft+"px";e.left=b2;if(b7){b5.left=b7}}return b8===""?"auto":b8}}}function aJ(e,b2,b3){var b1=a9.exec(b2);return b1?Math.max(0,b1[1]-(b3||0))+(b1[2]||"px"):b2}function aw(b4,b1,e,b6,b3){var b2=e===(b6?"border":"content")?4:b1==="width"?1:0,b5=0;for(;b2<4;b2+=2){if(e==="margin"){b5+=bI.css(b4,e+bS[b2],true,b3)}if(b6){if(e==="content"){b5-=bI.css(b4,"padding"+bS[b2],true,b3)}if(e!=="margin"){b5-=bI.css(b4,"border"+bS[b2]+"Width",true,b3)}}else{b5+=bI.css(b4,"padding"+bS[b2],true,b3);if(e!=="padding"){b5+=bI.css(b4,"border"+bS[b2]+"Width",true,b3)}}}return b5}function u(b4,b1,e){var b3=true,b5=b1==="width"?b4.offsetWidth:b4.offsetHeight,b2=bn(b4),b6=bI.support.boxSizing&&bI.css(b4,"boxSizing",false,b2)==="border-box";if(b5<=0||b5==null){b5=E(b4,b1,b2);if(b5<0||b5==null){b5=b4.style[b1]}if(W.test(b5)){return b5}b3=b6&&(bI.support.boxSizingReliable||b5===b4.style[b1]);b5=parseFloat(b5)||0}return(b5+aw(b4,b1,e||(b6?"border":"content"),b3,b2))+"px"}function bD(b2){var b1=l,e=bj[b2];if(!e){e=a1(b2,b1);if(e==="none"||!e){aD=(aD||bI("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b1.documentElement);b1=(aD[0].contentWindow||aD[0].contentDocument).document;b1.write("<!doctype html><html><body>");b1.close();e=a1(b2,b1);aD.detach()}bj[b2]=e}return e}function a1(e,b3){var b1=bI(b3.createElement(e)).appendTo(b3.body),b2=bI.css(b1[0],"display");b1.remove();return b2}bI.each(["height","width"],function(b1,e){bI.cssHooks[e]={get:function(b4,b3,b2){if(b3){return b4.offsetWidth===0&&F.test(bI.css(b4,"display"))?bI.swap(b4,bb,function(){return u(b4,e,b2)}):u(b4,e,b2)}},set:function(b4,b5,b2){var b3=b2&&bn(b4);return aJ(b4,b5,b2?aw(b4,e,b2,bI.support.boxSizing&&bI.css(b4,"boxSizing",false,b3)==="border-box",b3):0)}}});if(!bI.support.opacity){bI.cssHooks.opacity={get:function(b1,e){return aT.test((e&&b1.currentStyle?b1.currentStyle.filter:b1.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""},set:function(b4,b5){var b3=b4.style,b1=b4.currentStyle,e=bI.isNumeric(b5)?"alpha(opacity="+b5*100+")":"",b2=b1&&b1.filter||b3.filter||"";b3.zoom=1;if((b5>=1||b5==="")&&bI.trim(b2.replace(bg,""))===""&&b3.removeAttribute){b3.removeAttribute("filter");if(b5===""||b1&&!b1.filter){return}}b3.filter=bg.test(b2)?b2.replace(bg,e):b2+" "+e}}}bI(function(){if(!bI.support.reliableMarginRight){bI.cssHooks.marginRight={get:function(b1,e){if(e){return bI.swap(b1,{display:"inline-block"},E,[b1,"marginRight"])}}}}if(!bI.support.pixelPosition&&bI.fn.position){bI.each(["top","left"],function(e,b1){bI.cssHooks[b1]={get:function(b3,b2){if(b2){b2=E(b3,b1);return W.test(b2)?bI(b3).position()[b1]+"px":b2}}}})}});if(bI.expr&&bI.expr.filters){bI.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!bI.support.reliableHiddenOffsets&&((e.style&&e.style.display)||bI.css(e,"display"))==="none")};bI.expr.filters.visible=function(e){return !bI.expr.filters.hidden(e)}}bI.each({margin:"",padding:"",border:"Width"},function(e,b1){bI.cssHooks[e+b1]={expand:function(b4){var b3=0,b2={},b5=typeof b4==="string"?b4.split(" "):[b4];for(;b3<4;b3++){b2[e+bS[b3]+b1]=b5[b3]||b5[b3-2]||b5[0]}return b2}};if(!aY.test(e)){bI.cssHooks[e+b1].set=aJ}});var bu=/%20/g,aR=/\[\]$/,U=/\r?\n/g,c=/^(?:submit|button|image|reset)$/i,au=/^(?:input|select|textarea|keygen)/i;bI.fn.extend({serialize:function(){return bI.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=bI.prop(this,"elements");return e?bI.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!bI(this).is(":disabled")&&au.test(this.nodeName)&&!c.test(e)&&(this.checked||!q.test(e))}).map(function(e,b1){var b2=bI(this).val();return b2==null?null:bI.isArray(b2)?bI.map(b2,function(b3){return{name:b1.name,value:b3.replace(U,"\r\n")}}):{name:b1.name,value:b2.replace(U,"\r\n")}}).get()}});bI.param=function(e,b2){var b3,b1=[],b4=function(b5,b6){b6=bI.isFunction(b6)?b6():(b6==null?"":b6);b1[b1.length]=encodeURIComponent(b5)+"="+encodeURIComponent(b6)};if(b2===aF){b2=bI.ajaxSettings&&bI.ajaxSettings.traditional}if(bI.isArray(e)||(e.jquery&&!bI.isPlainObject(e))){bI.each(e,function(){b4(this.name,this.value)})}else{for(b3 in e){i(b3,e[b3],b2,b4)}}return b1.join("&").replace(bu,"+")};function i(b2,b4,b1,b3){var e;if(bI.isArray(b4)){bI.each(b4,function(b6,b5){if(b1||aR.test(b2)){b3(b2,b5)}else{i(b2+"["+(typeof b5==="object"?b6:"")+"]",b5,b1,b3)}})}else{if(!b1&&bI.type(b4)==="object"){for(e in b4){i(b2+"["+e+"]",b4[e],b1,b3)}}else{b3(b2,b4)}}}var bZ,Y,bN=bI.now(),az=/\?/,ap=/#.*$/,O=/([?&])_=[^&]*/,af=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,o=/^(?:GET|HEAD)$/,aG=/^\/\//,aU=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bY=bI.fn.load,v={},a7={},aW="*/".concat("*");try{Y=aL.href}catch(bf){Y=l.createElement("a");Y.href="";Y=Y.href}bZ=aU.exec(Y.toLowerCase())||[];function bK(e){return function(b4,b5){if(typeof b4!=="string"){b5=b4;b4="*"}var b1,b2=0,b3=b4.toLowerCase().match(ac)||[];if(bI.isFunction(b5)){while((b1=b3[b2++])){if(b1[0]==="+"){b1=b1.slice(1)||"*";(e[b1]=e[b1]||[]).unshift(b5)}else{(e[b1]=e[b1]||[]).push(b5)}}}}}function n(e,b2,b6,b3){var b1={},b4=(e===a7);function b5(b7){var b8;b1[b7]=true;bI.each(e[b7]||[],function(ca,b9){var cb=b9(b2,b6,b3);if(typeof cb==="string"&&!b4&&!b1[cb]){b2.dataTypes.unshift(cb);b5(cb);return false}else{if(b4){return !(b8=cb)}}});return b8}return b5(b2.dataTypes[0])||!b1["*"]&&b5("*")}function r(b2,b3){var b1,e,b4=bI.ajaxSettings.flatOptions||{};for(b1 in b3){if(b3[b1]!==aF){(b4[b1]?b2:(e||(e={})))[b1]=b3[b1]}}if(e){bI.extend(true,b2,e)}return b2}bI.fn.load=function(b3,b6,b7){if(typeof b3!=="string"&&bY){return bY.apply(this,arguments)}var e,b4,b2,b1=this,b5=b3.indexOf(" ");if(b5>=0){e=b3.slice(b5,b3.length);b3=b3.slice(0,b5)}if(bI.isFunction(b6)){b7=b6;b6=aF}else{if(b6&&typeof b6==="object"){b4="POST"}}if(b1.length>0){bI.ajax({url:b3,type:b4,dataType:"html",data:b6}).done(function(b8){b2=arguments;b1.html(e?bI("<div>").append(bI.parseHTML(b8)).find(e):b8)}).complete(b7&&function(b9,b8){b1.each(b7,b2||[b9.responseText,b8,b9])})}return this};bI.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b1){bI.fn[b1]=function(b2){return this.on(b1,b2)}});bI.each(["get","post"],function(e,b1){bI[b1]=function(b2,b4,b5,b3){if(bI.isFunction(b4)){b3=b3||b5;b5=b4;b4=aF}return bI.ajax({url:b2,type:b1,dataType:b3,data:b4,success:b5})}});bI.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Y,type:"GET",isLocal:B.test(bZ[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aW,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a2.String,"text html":true,"text json":bI.parseJSON,"text xml":bI.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(b1,e){return e?r(r(b1,bI.ajaxSettings),e):r(bI.ajaxSettings,b1)},ajaxPrefilter:bK(v),ajaxTransport:bK(a7),ajax:function(b5,b2){if(typeof b5==="object"){b2=b5;b5=aF}b2=b2||{};var ch,b6,cl,b3,ca,ce,b1,cg,b9=bI.ajaxSetup({},b2),cn=b9.context||b9,cc=b9.context&&(cn.nodeType||cn.jquery)?bI(cn):bI.event,cm=bI.Deferred(),cj=bI.Callbacks("once memory"),b7=b9.statusCode||{},cd={},ck={},b4=0,b8="canceled",cf={readyState:0,getResponseHeader:function(co){var e;if(b4===2){if(!b3){b3={};while((e=af.exec(cl))){b3[e[1].toLowerCase()]=e[2]}}e=b3[co.toLowerCase()]}return e==null?null:e},getAllResponseHeaders:function(){return b4===2?cl:null},setRequestHeader:function(co,cp){var e=co.toLowerCase();if(!b4){co=ck[e]=ck[e]||co;cd[co]=cp}return this},overrideMimeType:function(e){if(!b4){b9.mimeType=e}return this},statusCode:function(co){var e;if(co){if(b4<2){for(e in co){b7[e]=[b7[e],co[e]]}}else{cf.always(co[cf.status])}}return this},abort:function(co){var e=co||b8;if(ch){ch.abort(e)}cb(0,e);return this}};cm.promise(cf).complete=cj.add;cf.success=cf.done;cf.error=cf.fail;b9.url=((b5||b9.url||Y)+"").replace(ap,"").replace(aG,bZ[1]+"//");b9.type=b2.method||b2.type||b9.method||b9.type;b9.dataTypes=bI.trim(b9.dataType||"*").toLowerCase().match(ac)||[""];if(b9.crossDomain==null){ce=aU.exec(b9.url.toLowerCase());b9.crossDomain=!!(ce&&(ce[1]!==bZ[1]||ce[2]!==bZ[2]||(ce[3]||(ce[1]==="http:"?80:443))!=(bZ[3]||(bZ[1]==="http:"?80:443))))}if(b9.data&&b9.processData&&typeof b9.data!=="string"){b9.data=bI.param(b9.data,b9.traditional)}n(v,b9,b2,cf);if(b4===2){return cf}b1=b9.global;if(b1&&bI.active++===0){bI.event.trigger("ajaxStart")}b9.type=b9.type.toUpperCase();b9.hasContent=!o.test(b9.type);b6=b9.url;if(!b9.hasContent){if(b9.data){b6=(b9.url+=(az.test(b6)?"&":"?")+b9.data);delete b9.data}if(b9.cache===false){b9.url=O.test(b6)?b6.replace(O,"$1_="+bN++):b6+(az.test(b6)?"&":"?")+"_="+bN++}}if(b9.ifModified){if(bI.lastModified[b6]){cf.setRequestHeader("If-Modified-Since",bI.lastModified[b6])}if(bI.etag[b6]){cf.setRequestHeader("If-None-Match",bI.etag[b6])}}if(b9.data&&b9.hasContent&&b9.contentType!==false||b2.contentType){cf.setRequestHeader("Content-Type",b9.contentType)}cf.setRequestHeader("Accept",b9.dataTypes[0]&&b9.accepts[b9.dataTypes[0]]?b9.accepts[b9.dataTypes[0]]+(b9.dataTypes[0]!=="*"?", "+aW+"; q=0.01":""):b9.accepts["*"]);for(cg in b9.headers){cf.setRequestHeader(cg,b9.headers[cg])}if(b9.beforeSend&&(b9.beforeSend.call(cn,cf,b9)===false||b4===2)){return cf.abort()}b8="abort";for(cg in {success:1,error:1,complete:1}){cf[cg](b9[cg])}ch=n(a7,b9,b2,cf);if(!ch){cb(-1,"No Transport")}else{cf.readyState=1;if(b1){cc.trigger("ajaxSend",[cf,b9])}if(b9.async&&b9.timeout>0){ca=setTimeout(function(){cf.abort("timeout")},b9.timeout)}try{b4=1;ch.send(cd,cb)}catch(ci){if(b4<2){cb(-1,ci)}else{throw ci}}}function cb(cs,co,ct,cq){var e,cw,cu,cr,cv,cp=co;if(b4===2){return}b4=2;if(ca){clearTimeout(ca)}ch=aF;cl=cq||"";cf.readyState=cs>0?4:0;if(ct){cr=g(b9,cf,ct)}if(cs>=200&&cs<300||cs===304){if(b9.ifModified){cv=cf.getResponseHeader("Last-Modified");if(cv){bI.lastModified[b6]=cv}cv=cf.getResponseHeader("etag");if(cv){bI.etag[b6]=cv}}if(cs===304){e=true;cp="notmodified"}else{e=ag(b9,cr);cp=e.state;cw=e.data;cu=e.error;e=!cu}}else{cu=cp;if(cs||!cp){cp="error";if(cs<0){cs=0}}}cf.status=cs;cf.statusText=(co||cp)+"";if(e){cm.resolveWith(cn,[cw,cp,cf])}else{cm.rejectWith(cn,[cf,cp,cu])}cf.statusCode(b7);b7=aF;if(b1){cc.trigger(e?"ajaxSuccess":"ajaxError",[cf,b9,e?cw:cu])}cj.fireWith(cn,[cf,cp]);if(b1){cc.trigger("ajaxComplete",[cf,b9]);if(!(--bI.active)){bI.event.trigger("ajaxStop")}}}return cf},getScript:function(e,b1){return bI.get(e,aF,b1,"script")},getJSON:function(e,b1,b2){return bI.get(e,b1,b2,"json")}});function g(b9,b8,b5){var b4,b6,b3,e,b1=b9.contents,b7=b9.dataTypes,b2=b9.responseFields;for(b6 in b2){if(b6 in b5){b8[b2[b6]]=b5[b6]}}while(b7[0]==="*"){b7.shift();if(b4===aF){b4=b9.mimeType||b8.getResponseHeader("Content-Type")}}if(b4){for(b6 in b1){if(b1[b6]&&b1[b6].test(b4)){b7.unshift(b6);break}}}if(b7[0] in b5){b3=b7[0]}else{for(b6 in b5){if(!b7[0]||b9.converters[b6+" "+b7[0]]){b3=b6;break}if(!e){e=b6}}b3=b3||e}if(b3){if(b3!==b7[0]){b7.unshift(b3)}return b5[b3]}}function ag(cb,b3){var b9,b1,b7,b4,ca={},b5=0,b8=cb.dataTypes.slice(),b2=b8[0];if(cb.dataFilter){b3=cb.dataFilter(b3,cb.dataType)}if(b8[1]){for(b9 in cb.converters){ca[b9.toLowerCase()]=cb.converters[b9]}}for(;(b7=b8[++b5]);){if(b7!=="*"){if(b2!=="*"&&b2!==b7){b9=ca[b2+" "+b7]||ca["* "+b7];if(!b9){for(b1 in ca){b4=b1.split(" ");if(b4[1]===b7){b9=ca[b2+" "+b4[0]]||ca["* "+b4[0]];if(b9){if(b9===true){b9=ca[b1]}else{if(ca[b1]!==true){b7=b4[0];b8.splice(b5--,0,b7)}}break}}}}if(b9!==true){if(b9&&cb["throws"]){b3=b9(b3)}else{try{b3=b9(b3)}catch(b6){return{state:"parsererror",error:b9?b6:"No conversion from "+b2+" to "+b7}}}}}b2=b7}}return{state:"success",data:b3}}bI.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bI.globalEval(e);return e}}});bI.ajaxPrefilter("script",function(e){if(e.cache===aF){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});bI.ajaxTransport("script",function(b2){if(b2.crossDomain){var e,b1=l.head||bI("head")[0]||l.documentElement;return{send:function(b3,b4){e=l.createElement("script");e.async=true;if(b2.scriptCharset){e.charset=b2.scriptCharset}e.src=b2.url;e.onload=e.onreadystatechange=function(b6,b5){if(b5||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(e.parentNode){e.parentNode.removeChild(e)}e=null;if(!b5){b4(200,"success")}}};b1.insertBefore(e,b1.firstChild)},abort:function(){if(e){e.onload(aF,true)}}}}});var bq=[],a5=/(=)\?(?=&|$)|\?\?/;bI.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bq.pop()||(bI.expando+"_"+(bN++));this[e]=true;return e}});bI.ajaxPrefilter("json jsonp",function(b3,e,b4){var b6,b1,b2,b5=b3.jsonp!==false&&(a5.test(b3.url)?"url":typeof b3.data==="string"&&!(b3.contentType||"").indexOf("application/x-www-form-urlencoded")&&a5.test(b3.data)&&"data");if(b5||b3.dataTypes[0]==="jsonp"){b6=b3.jsonpCallback=bI.isFunction(b3.jsonpCallback)?b3.jsonpCallback():b3.jsonpCallback;if(b5){b3[b5]=b3[b5].replace(a5,"$1"+b6)}else{if(b3.jsonp!==false){b3.url+=(az.test(b3.url)?"&":"?")+b3.jsonp+"="+b6}}b3.converters["script json"]=function(){if(!b2){bI.error(b6+" was not called")}return b2[0]};b3.dataTypes[0]="json";b1=a2[b6];a2[b6]=function(){b2=arguments};b4.always(function(){a2[b6]=b1;if(b3[b6]){b3.jsonpCallback=e.jsonpCallback;bq.push(b6)}if(b2&&bI.isFunction(b1)){b1(b2[0])}b2=b1=aF});return"script"}});var ah,ax,ay=0,aP=a2.ActiveXObject&&function(){var e;for(e in ah){ah[e](aF,true)}};function bC(){try{return new a2.XMLHttpRequest()}catch(b1){}}function bd(){try{return new a2.ActiveXObject("Microsoft.XMLHTTP")}catch(b1){}}bI.ajaxSettings.xhr=a2.ActiveXObject?function(){return !this.isLocal&&bC()||bd()}:bC;ax=bI.ajaxSettings.xhr();bI.support.cors=!!ax&&("withCredentials" in ax);ax=bI.support.ajax=!!ax;if(ax){bI.ajaxTransport(function(e){if(!e.crossDomain||bI.support.cors){var b1;return{send:function(b7,b2){var b5,b3,b6=e.xhr();if(e.username){b6.open(e.type,e.url,e.async,e.username,e.password)}else{b6.open(e.type,e.url,e.async)}if(e.xhrFields){for(b3 in e.xhrFields){b6[b3]=e.xhrFields[b3]}}if(e.mimeType&&b6.overrideMimeType){b6.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!b7["X-Requested-With"]){b7["X-Requested-With"]="XMLHttpRequest"}try{for(b3 in b7){b6.setRequestHeader(b3,b7[b3])}}catch(b4){}b6.send((e.hasContent&&e.data)||null);b1=function(cg,ca){var cb,b9,b8,ce,cd;try{if(b1&&(ca||b6.readyState===4)){b1=aF;if(b5){b6.onreadystatechange=bI.noop;if(aP){delete ah[b5]}}if(ca){if(b6.readyState!==4){b6.abort()}}else{ce={};cb=b6.status;cd=b6.responseXML;b8=b6.getAllResponseHeaders();if(cd&&cd.documentElement){ce.xml=cd}if(typeof b6.responseText==="string"){ce.text=b6.responseText}try{b9=b6.statusText}catch(cf){b9=""}if(!cb&&e.isLocal&&!e.crossDomain){cb=ce.text?200:404}else{if(cb===1223){cb=204}}}}}catch(cc){if(!ca){b2(-1,cc)}}if(ce){b2(cb,b9,ce,b8)}};if(!e.async){b1()}else{if(b6.readyState===4){setTimeout(b1)}else{b5=++ay;if(aP){if(!ah){ah={};bI(a2).unload(aP)}ah[b5]=b1}b6.onreadystatechange=b1}}},abort:function(){if(b1){b1(aF,true)}}}}})}var K,ad,bQ=/^(?:toggle|show|hide)$/,bJ=new RegExp("^(?:([+-])=|)("+bz+")([a-z%]*)$","i"),bP=/queueHooks$/,aB=[h],a0={"*":[function(e,b7){var b3,b8,b9=this.createTween(e,b7),b4=bJ.exec(b7),b5=b9.cur(),b1=+b5||0,b2=1,b6=20;if(b4){b3=+b4[2];b8=b4[3]||(bI.cssNumber[e]?"":"px");if(b8!=="px"&&b1){b1=bI.css(b9.elem,e,true)||b3||1;do{b2=b2||".5";b1=b1/b2;bI.style(b9.elem,e,b1+b8)}while(b2!==(b2=b9.cur()/b5)&&b2!==1&&--b6)}b9.unit=b8;b9.start=b1;b9.end=b4[1]?b1+(b4[1]+1)*b3:b3}return b9}]};function bl(){setTimeout(function(){K=aF});return(K=bI.now())}function be(b1,e){bI.each(e,function(b6,b4){var b5=(a0[b6]||[]).concat(a0["*"]),b2=0,b3=b5.length;for(;b2<b3;b2++){if(b5[b2].call(b1,b6,b4)){return}}})}function f(b2,b6,b9){var ca,e,b5=0,b1=aB.length,b8=bI.Deferred().always(function(){delete b4.elem}),b4=function(){if(e){return false}var cg=K||bl(),cd=Math.max(0,b3.startTime+b3.duration-cg),cb=cd/b3.duration||0,cf=1-cb,cc=0,ce=b3.tweens.length;for(;cc<ce;cc++){b3.tweens[cc].run(cf)}b8.notifyWith(b2,[b3,cf,cd]);if(cf<1&&ce){return cd}else{b8.resolveWith(b2,[b3]);return false}},b3=b8.promise({elem:b2,props:bI.extend({},b6),opts:bI.extend(true,{specialEasing:{}},b9),originalProperties:b6,originalOptions:b9,startTime:K||bl(),duration:b9.duration,tweens:[],createTween:function(cd,cb){var cc=bI.Tween(b2,b3.opts,cd,cb,b3.opts.specialEasing[cd]||b3.opts.easing);b3.tweens.push(cc);return cc},stop:function(cc){var cb=0,cd=cc?b3.tweens.length:0;if(e){return this}e=true;for(;cb<cd;cb++){b3.tweens[cb].run(1)}if(cc){b8.resolveWith(b2,[b3,cc])}else{b8.rejectWith(b2,[b3,cc])}return this}}),b7=b3.props;am(b7,b3.opts.specialEasing);for(;b5<b1;b5++){ca=aB[b5].call(b3,b2,b7,b3.opts);if(ca){return ca}}be(b3,b7);if(bI.isFunction(b3.opts.start)){b3.opts.start.call(b2,b3)}bI.fx.timer(bI.extend(b4,{elem:b2,anim:b3,queue:b3.opts.queue}));return b3.progress(b3.opts.progress).done(b3.opts.done,b3.opts.complete).fail(b3.opts.fail).always(b3.opts.always)}function am(b3,b5){var b2,b1,b6,b4,e;for(b2 in b3){b1=bI.camelCase(b2);b6=b5[b1];b4=b3[b2];if(bI.isArray(b4)){b6=b4[1];b4=b3[b2]=b4[0]}if(b2!==b1){b3[b1]=b4;delete b3[b2]}e=bI.cssHooks[b1];if(e&&"expand" in e){b4=e.expand(b4);delete b3[b1];for(b2 in b4){if(!(b2 in b3)){b3[b2]=b4[b2];b5[b2]=b6}}}else{b5[b1]=b6}}}bI.Animation=bI.extend(f,{tweener:function(b1,b4){if(bI.isFunction(b1)){b4=b1;b1=["*"]}else{b1=b1.split(" ")}var b3,e=0,b2=b1.length;for(;e<b2;e++){b3=b1[e];a0[b3]=a0[b3]||[];a0[b3].unshift(b4)}},prefilter:function(b1,e){if(e){aB.unshift(b1)}else{aB.push(b1)}}});function h(b4,ca,e){var b9,b2,cc,b3,cg,b6,cf,ce,cd,b5=this,b1=b4.style,cb={},b8=[],b7=b4.nodeType&&P(b4);if(!e.queue){ce=bI._queueHooks(b4,"fx");if(ce.unqueued==null){ce.unqueued=0;cd=ce.empty.fire;ce.empty.fire=function(){if(!ce.unqueued){cd()}}}ce.unqueued++;b5.always(function(){b5.always(function(){ce.unqueued--;if(!bI.queue(b4,"fx").length){ce.empty.fire()}})})}if(b4.nodeType===1&&("height" in ca||"width" in ca)){e.overflow=[b1.overflow,b1.overflowX,b1.overflowY];if(bI.css(b4,"display")==="inline"&&bI.css(b4,"float")==="none"){if(!bI.support.inlineBlockNeedsLayout||bD(b4.nodeName)==="inline"){b1.display="inline-block"}else{b1.zoom=1}}}if(e.overflow){b1.overflow="hidden";if(!bI.support.shrinkWrapBlocks){b5.done(function(){b1.overflow=e.overflow[0];b1.overflowX=e.overflow[1];b1.overflowY=e.overflow[2]})}}for(b9 in ca){cc=ca[b9];if(bQ.exec(cc)){delete ca[b9];b6=b6||cc==="toggle";if(cc===(b7?"hide":"show")){continue}b8.push(b9)}}b3=b8.length;if(b3){cg=bI._data(b4,"fxshow")||bI._data(b4,"fxshow",{});if("hidden" in cg){b7=cg.hidden}if(b6){cg.hidden=!b7}if(b7){bI(b4).show()}else{b5.done(function(){bI(b4).hide()})}b5.done(function(){var ch;bI._removeData(b4,"fxshow");for(ch in cb){bI.style(b4,ch,cb[ch])}});for(b9=0;b9<b3;b9++){b2=b8[b9];cf=b5.createTween(b2,b7?cg[b2]:0);cb[b2]=cg[b2]||bI.style(b4,b2);if(!(b2 in cg)){cg[b2]=cf.start;if(b7){cf.end=cf.start;cf.start=b2==="width"||b2==="height"?1:0}}}}}function G(b2,b1,b4,e,b3){return new G.prototype.init(b2,b1,b4,e,b3)}bI.Tween=G;G.prototype={constructor:G,init:function(b3,b1,b5,e,b4,b2){this.elem=b3;this.prop=b5;this.easing=b4||"swing";this.options=b1;this.start=this.now=this.cur();this.end=e;this.unit=b2||(bI.cssNumber[b5]?"":"px")},cur:function(){var e=G.propHooks[this.prop];return e&&e.get?e.get(this):G.propHooks._default.get(this)},run:function(b2){var b1,e=G.propHooks[this.prop];if(this.options.duration){this.pos=b1=bI.easing[this.easing](b2,this.options.duration*b2,0,1,this.options.duration)}else{this.pos=b1=b2}this.now=(this.end-this.start)*b1+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(e&&e.set){e.set(this)}else{G.propHooks._default.set(this)}return this}};G.prototype.init.prototype=G.prototype;G.propHooks={_default:{get:function(b1){var e;if(b1.elem[b1.prop]!=null&&(!b1.elem.style||b1.elem.style[b1.prop]==null)){return b1.elem[b1.prop]}e=bI.css(b1.elem,b1.prop,"auto");return !e||e==="auto"?0:e},set:function(e){if(bI.fx.step[e.prop]){bI.fx.step[e.prop](e)}else{if(e.elem.style&&(e.elem.style[bI.cssProps[e.prop]]!=null||bI.cssHooks[e.prop])){bI.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}}};G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}};bI.each(["toggle","show","hide"],function(b1,e){var b2=bI.fn[e];bI.fn[e]=function(b3,b5,b4){return b3==null||typeof b3==="boolean"?b2.apply(this,arguments):this.animate(bH(e,true),b3,b5,b4)}});bI.fn.extend({fadeTo:function(e,b3,b2,b1){return this.filter(P).css("opacity",0).show().end().animate({opacity:b3},e,b2,b1)},animate:function(b6,b3,b5,b4){var b2=bI.isEmptyObject(b6),e=bI.speed(b3,b5,b4),b1=function(){var b7=f(this,bI.extend({},b6),e);b1.finish=function(){b7.stop(true)};if(b2||bI._data(this,"finish")){b7.stop(true)}};b1.finish=b1;return b2||e.queue===false?this.each(b1):this.queue(e.queue,b1)},stop:function(b2,b1,e){var b3=function(b4){var b5=b4.stop;delete b4.stop;b5(e)};if(typeof b2!=="string"){e=b1;b1=b2;b2=aF}if(b1&&b2!==false){this.queue(b2||"fx",[])}return this.each(function(){var b7=true,b4=b2!=null&&b2+"queueHooks",b6=bI.timers,b5=bI._data(this);if(b4){if(b5[b4]&&b5[b4].stop){b3(b5[b4])}}else{for(b4 in b5){if(b5[b4]&&b5[b4].stop&&bP.test(b4)){b3(b5[b4])}}}for(b4=b6.length;b4--;){if(b6[b4].elem===this&&(b2==null||b6[b4].queue===b2)){b6[b4].anim.stop(e);b7=false;b6.splice(b4,1)}}if(b7||!e){bI.dequeue(this,b2)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var b3,b6=bI._data(this),b2=b6[e+"queue"],b1=b6[e+"queueHooks"],b5=bI.timers,b4=b2?b2.length:0;b6.finish=true;bI.queue(this,e,[]);if(b1&&b1.cur&&b1.cur.finish){b1.cur.finish.call(this)}for(b3=b5.length;b3--;){if(b5[b3].elem===this&&b5[b3].queue===e){b5[b3].anim.stop(true);b5.splice(b3,1)}}for(b3=0;b3<b4;b3++){if(b2[b3]&&b2[b3].finish){b2[b3].finish.call(this)}}delete b6.finish})}});function bH(b2,b4){var b3,e={height:b2},b1=0;b4=b4?1:0;for(;b1<4;b1+=2-b4){b3=bS[b1];e["margin"+b3]=e["padding"+b3]=b2}if(b4){e.opacity=e.width=b2}return e}bI.each({slideDown:bH("show"),slideUp:bH("hide"),slideToggle:bH("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b1){bI.fn[e]=function(b2,b4,b3){return this.animate(b1,b2,b4,b3)}});bI.speed=function(b2,b3,b1){var e=b2&&typeof b2==="object"?bI.extend({},b2):{complete:b1||!b1&&b3||bI.isFunction(b2)&&b2,duration:b2,easing:b1&&b3||b3&&!bI.isFunction(b3)&&b3};e.duration=bI.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bI.fx.speeds?bI.fx.speeds[e.duration]:bI.fx.speeds._default;if(e.queue==null||e.queue===true){e.queue="fx"}e.old=e.complete;e.complete=function(){if(bI.isFunction(e.old)){e.old.call(this)}if(e.queue){bI.dequeue(this,e.queue)}};return e};bI.easing={linear:function(e){return e},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2}};bI.timers=[];bI.fx=G.prototype.init;bI.fx.tick=function(){var b2,b1=bI.timers,e=0;K=bI.now();for(;e<b1.length;e++){b2=b1[e];if(!b2()&&b1[e]===b2){b1.splice(e--,1)}}if(!b1.length){bI.fx.stop()}K=aF};bI.fx.timer=function(e){if(e()&&bI.timers.push(e)){bI.fx.start()}};bI.fx.interval=13;bI.fx.start=function(){if(!ad){ad=setInterval(bI.fx.tick,bI.fx.interval)}};bI.fx.stop=function(){clearInterval(ad);ad=null};bI.fx.speeds={slow:600,fast:200,_default:400};bI.fx.step={};if(bI.expr&&bI.expr.filters){bI.expr.filters.animated=function(e){return bI.grep(bI.timers,function(b1){return e===b1.elem}).length}}bI.fn.offset=function(b1){if(arguments.length){return b1===aF?this:this.each(function(b6){bI.offset.setOffset(this,b1,b6)})}var e,b5,b3={top:0,left:0},b2=this[0],b4=b2&&b2.ownerDocument;if(!b4){return}e=b4.documentElement;if(!bI.contains(e,b2)){return b3}if(typeof b2.getBoundingClientRect!=="undefined"){b3=b2.getBoundingClientRect()}b5=bo(b4);return{top:b3.top+(b5.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b3.left+(b5.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};bI.offset={setOffset:function(b3,cc,b6){var b7=bI.css(b3,"position");if(b7==="static"){b3.style.position="relative"}var b5=bI(b3),b1=b5.offset(),e=bI.css(b3,"top"),ca=bI.css(b3,"left"),cb=(b7==="absolute"||b7==="fixed")&&bI.inArray("auto",[e,ca])>-1,b9={},b8={},b2,b4;if(cb){b8=b5.position();b2=b8.top;b4=b8.left}else{b2=parseFloat(e)||0;b4=parseFloat(ca)||0}if(bI.isFunction(cc)){cc=cc.call(b3,b6,b1)}if(cc.top!=null){b9.top=(cc.top-b1.top)+b2}if(cc.left!=null){b9.left=(cc.left-b1.left)+b4}if("using" in cc){cc.using.call(b3,b9)}else{b5.css(b9)}}};bI.fn.extend({position:function(){if(!this[0]){return}var b2,b3,e={top:0,left:0},b1=this[0];if(bI.css(b1,"position")==="fixed"){b3=b1.getBoundingClientRect()}else{b2=this.offsetParent();b3=this.offset();if(!bI.nodeName(b2[0],"html")){e=b2.offset()}e.top+=bI.css(b2[0],"borderTopWidth",true);e.left+=bI.css(b2[0],"borderLeftWidth",true)}return{top:b3.top-e.top-bI.css(b1,"marginTop",true),left:b3.left-e.left-bI.css(b1,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||l.documentElement;while(e&&(!bI.nodeName(e,"html")&&bI.css(e,"position")==="static")){e=e.offsetParent}return e||l.documentElement})}});bI.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b2,b1){var e=/Y/.test(b1);bI.fn[b2]=function(b3){return bI.access(this,function(b4,b7,b6){var b5=bo(b4);if(b6===aF){return b5?(b1 in b5)?b5[b1]:b5.document.documentElement[b7]:b4[b7]}if(b5){b5.scrollTo(!e?b6:bI(b5).scrollLeft(),e?b6:bI(b5).scrollTop())}else{b4[b7]=b6}},b2,b3,arguments.length,null)}});function bo(e){return bI.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}bI.each({Height:"height",Width:"width"},function(e,b1){bI.each({padding:"inner"+e,content:b1,"":"outer"+e},function(b2,b3){bI.fn[b3]=function(b7,b6){var b5=arguments.length&&(b2||typeof b7!=="boolean"),b4=b2||(b7===true||b6===true?"margin":"border");return bI.access(this,function(b9,b8,ca){var cb;if(bI.isWindow(b9)){return b9.document.documentElement["client"+e]}if(b9.nodeType===9){cb=b9.documentElement;return Math.max(b9.body["scroll"+e],cb["scroll"+e],b9.body["offset"+e],cb["offset"+e],cb["client"+e])}return ca===aF?bI.css(b9,b8,b4):bI.style(b9,b8,ca,b4)},b1,b5?b7:aF,b5,null)}})});a2.jQuery=a2.$=bI;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bI})}})(window);
/*
 * jQuery Migrate - v1.0.0 - 2013-01-14
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function(s,p,i){var D={};s.migrateWarnings=[];s.migrateReset=function(){D={};s.migrateWarnings.length=0};function h(G){if(!D[G]){D[G]=true;s.migrateWarnings.push(G);if(p.console&&console.warn&&!s.migrateMute){console.warn("JQMIGRATE: "+G)}}}function a(I,K,H,J){if(Object.defineProperty){try{Object.defineProperty(I,K,{configurable:true,enumerable:true,get:function(){h(J);return H},set:function(L){h(J);H=L}});return}catch(G){}}s._definePropertyBroken=true;I[K]=H}if(document.compatMode==="BackCompat"){h("jQuery is not compatible with Quirks Mode")}var f={},y=s.attr,x=s.attrHooks.value&&s.attrHooks.value.get||function(){return null},j=s.attrHooks.value&&s.attrHooks.value.set||function(){return i},t=/^(?:input|button)$/i,z=/^[238]$/,B=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,k=/^(?:checked|selected)$/i;a(s,"attrFn",f,"jQuery.attrFn is deprecated");s.attr=function(K,I,L,J){var H=I.toLowerCase(),G=K&&K.nodeType;if(J){h("jQuery.fn.attr( props, pass ) is deprecated");if(K&&!z.test(G)&&s.isFunction(s.fn[I])){return s(K)[I](L)}}if(I==="type"&&L!==i&&t.test(K.nodeName)){h("Can't change the 'type' of an input or button in IE 6/7/8")}if(!s.attrHooks[H]&&B.test(H)){s.attrHooks[H]={get:function(N,M){var P,O=s.prop(N,M);return O===true||typeof O!=="boolean"&&(P=N.getAttributeNode(M))&&P.nodeValue!==false?M.toLowerCase():i},set:function(N,P,M){var O;if(P===false){s.removeAttr(N,M)}else{O=s.propFix[M]||M;if(O in N){N[O]=true}N.setAttribute(M,M.toLowerCase())}return M}};if(k.test(H)){h("jQuery.fn.attr("+H+") may use property instead of attribute")}}return y.call(s,K,I,L)};s.attrHooks.value={get:function(H,G){var I=(H.nodeName||"").toLowerCase();if(I==="button"){return x.apply(this,arguments)}if(I!=="input"&&I!=="option"){h("property-based jQuery.fn.attr('value') is deprecated")}return G in H?H.value:null},set:function(G,H){var I=(G.nodeName||"").toLowerCase();if(I==="button"){return j.apply(this,arguments)}if(I!=="input"&&I!=="option"){h("property-based jQuery.fn.attr('value', val) is deprecated")}G.value=H}};var q,E,A=s.fn.init,v=/^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/;s.fn.init=function(G,J,I){var H;if(G&&typeof G==="string"&&!s.isPlainObject(J)&&(H=v.exec(G))&&H[1]){if(G.charAt(0)!=="<"){h("$(html) HTML strings must start with '<' character")}if(J&&J.context){J=J.context}if(s.parseHTML){return A.call(this,s.parseHTML(s.trim(G),J,true),J,I)}}return A.apply(this,arguments)};s.fn.init.prototype=s.fn;s.uaMatch=function(H){H=H.toLowerCase();var G=/(chrome)[ \/]([\w.]+)/.exec(H)||/(webkit)[ \/]([\w.]+)/.exec(H)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(H)||/(msie) ([\w.]+)/.exec(H)||H.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(H)||[];return{browser:G[1]||"",version:G[2]||"0"}};q=s.uaMatch(navigator.userAgent);E={};if(q.browser){E[q.browser]=true;E.version=q.version}if(E.chrome){E.webkit=true}else{if(E.webkit){E.safari=true}}s.browser=E;a(s,"browser",E,"jQuery.browser is deprecated");s.sub=function(){function G(J,K){return new G.fn.init(J,K)}s.extend(true,G,this);G.superclass=this;G.fn=G.prototype=this();G.fn.constructor=G;G.sub=this.sub;G.fn.init=function I(J,K){if(K&&K instanceof s&&!(K instanceof G)){K=G(K)}return s.fn.init.call(this,J,K,H)};G.fn.init.prototype=G.fn;var H=G(document);h("jQuery.sub() is deprecated");return G};var n=s.fn.data;s.fn.data=function(I){var H,G,J=this[0];if(J&&I==="events"&&arguments.length===1){H=s.data(J,I);G=s._data(J,I);if((H===i||H===G)&&G!==i){h("Use of jQuery.fn.data('events') is deprecated");return G}}return n.apply(this,arguments)};var o=/\/(java|ecma)script/i,u=s.fn.andSelf||s.fn.addBack,w=s.buildFragment;s.fn.andSelf=function(){h("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");return u.apply(this,arguments)};if(!s.clean){s.clean=function(G,H,N,J){H=H||document;H=!H.nodeType&&H[0]||H;H=H.ownerDocument||H;h("jQuery.clean() is deprecated");var K,I,L,O,M=[];s.merge(M,s.buildFragment(G,H).childNodes);if(N){L=function(P){if(!P.type||o.test(P.type)){return J?J.push(P.parentNode?P.parentNode.removeChild(P):P):N.appendChild(P)}};for(K=0;(I=M[K])!=null;K++){if(!(s.nodeName(I,"script")&&L(I))){N.appendChild(I);if(typeof I.getElementsByTagName!=="undefined"){O=s.grep(s.merge([],I.getElementsByTagName("script")),L);M.splice.apply(M,[K+1,0].concat(O));K+=O.length}}}}return M}}s.buildFragment=function(I,K,H,M){var J,L="jQuery.buildFragment() is deprecated";K=K||document;K=!K.nodeType&&K[0]||K;K=K.ownerDocument||K;try{J=w.call(s,I,K,H,M)}catch(G){J=w.call(s,I,K.nodeType?[K]:K[0],H,M);h(L)}if(!J.fragment){a(J,"fragment",J,L);a(J,"cacheable",false,L)}return J};var c=s.event.add,b=s.event.remove,g=s.event.trigger,r=s.fn.toggle,d=s.fn.live,m=s.fn.die,C="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",e=new RegExp("\\b(?:"+C+")\\b"),F=/(?:^|\s)hover(\.\S+|)\b/,l=function(G){if(typeof(G)!="string"||s.event.special.hover){return G}if(F.test(G)){h("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return G&&G.replace(F,"mouseenter$1 mouseleave$1")};if(s.event.props&&s.event.props[0]!=="attrChange"){s.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}a(s.event,"handle",s.event.dispatch,"jQuery.event.handle is undocumented and deprecated");s.event.add=function(J,H,I,K,G){if(J!==document&&e.test(H)){h("AJAX events should be attached to document: "+H)}c.call(this,J,l(H||""),I,K,G)};s.event.remove=function(K,I,J,G,H){b.call(this,K,l(I)||"",J,G,H)};s.fn.error=function(){var G=Array.prototype.slice.call(arguments,0);h("jQuery.fn.error() is deprecated");G.splice(0,0,"error");if(arguments.length){return this.bind.apply(this,G)}this.triggerHandler.apply(this,G);return this};s.fn.toggle=function(K,I){if(!s.isFunction(K)||!s.isFunction(I)){return r.apply(this,arguments)}h("jQuery.fn.toggle(handler, handler...) is deprecated");var H=arguments,G=K.guid||s.guid++,J=0,L=function(M){var N=(s._data(this,"lastToggle"+K.guid)||0)%J;s._data(this,"lastToggle"+K.guid,N+1);M.preventDefault();return H[N].apply(this,arguments)||false};L.guid=G;while(J<H.length){H[J++].guid=G}return this.click(L)};s.fn.live=function(G,I,H){h("jQuery.fn.live() is deprecated");if(d){return d.apply(this,arguments)}s(this.context).on(G,this.selector,I,H);return this};s.fn.die=function(G,H){h("jQuery.fn.die() is deprecated");if(m){return m.apply(this,arguments)}s(this.context).off(G,this.selector||"**",H);return this};s.event.trigger=function(I,J,H,G){if(!H&!e.test(I)){h("Global events are undocumented and deprecated")}return g.call(this,I,J,H||document,G)};s.each(C.split("|"),function(H,G){s.event.special[G]={setup:function(){var I=this;if(I!==document){s.event.add(document,G+"."+s.guid,function(){s.event.trigger(G,null,I,true)});s._data(this,G,s.guid++)}return false},teardown:function(){if(this!==document){s.event.remove(document,G+"."+s._data(this,G))}return false}}})})(jQuery,window);(function(t){var Y,A="2.0.0",ac=Math.round,ae,P={},O=(typeof module!=="undefined"&&module.exports),x=/^\/?Date\((\-?\d+)/i,l=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,r=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,ah=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,g=/\d\d?/,Q=/\d{1,3}/,S=/\d{3}/,I=/\d{1,4}/,q=/[+\-]?\d{1,6}/,J=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,b=/Z|[\+\-]\d\d:?\d\d/i,u=/T/i,p=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,d="YYYY-MM-DDTHH:mm:ssZ",j=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],C=/([\+\-]|\d\d)/gi,n="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Z={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},m={},F="DDD w W M D d".split(" "),w="M D H h m s w W".split(" "),h={M:function(){return this.month()+1},MMM:function(i){return this.lang().monthsShort(this,i)},MMMM:function(i){return this.lang().months(this,i)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(i){return this.lang().weekdaysMin(this,i)},ddd:function(i){return this.lang().weekdaysShort(this,i)},dddd:function(i){return this.lang().weekdays(this,i)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return ab(this.year()%100,2)},YYYY:function(){return ab(this.year(),4)},YYYYY:function(){return ab(this.year(),5)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return ~~(this.milliseconds()/100)},SS:function(){return ab(~~(this.milliseconds()/10),2)},SSS:function(){return ab(this.milliseconds(),3)},Z:function(){var aj=-this.zone(),i="+";if(aj<0){aj=-aj;i="-"}return i+ab(~~(aj/60),2)+":"+ab(~~aj%60,2)},ZZ:function(){var aj=-this.zone(),i="+";if(aj<0){aj=-aj;i="-"}return i+ab(~~(10*aj/6),4)},X:function(){return this.unix()}};function M(aj,i){return function(ak){return ab(aj.call(this,ak),i)}}function G(i){return function(aj){return this.lang().ordinal(i.call(this,aj))}}while(F.length){ae=F.pop();h[ae+"o"]=G(h[ae])}while(w.length){ae=w.pop();h[ae+ae]=M(h[ae],2)}h.DDDD=M(h.DDD,3);function ag(){}function v(i){s(this,i)}function ai(al){var an=this._data={},ao=al.years||al.year||al.y||0,aj=al.months||al.month||al.M||0,i=al.weeks||al.week||al.w||0,ar=al.days||al.day||al.d||0,ap=al.hours||al.hour||al.h||0,am=al.minutes||al.minute||al.m||0,aq=al.seconds||al.second||al.s||0,ak=al.milliseconds||al.millisecond||al.ms||0;this._milliseconds=ak+aq*1000+am*60000+ap*3600000;this._days=ar+i*7;this._months=aj+ao*12;an.milliseconds=ak%1000;aq+=X(ak/1000);an.seconds=aq%60;am+=X(aq/60);an.minutes=am%60;ap+=X(am/60);an.hours=ap%24;ar+=X(ap/24);ar+=i*7;an.days=ar%30;aj+=X(ar/30);an.months=aj%12;ao+=X(aj/12);an.years=ao}function s(ak,aj){for(var al in aj){if(aj.hasOwnProperty(al)){ak[al]=aj[al]}}return ak}function X(i){if(i<0){return Math.ceil(i)}else{return Math.floor(i)}}function ab(ak,aj){var i=ak+"";while(i.length<aj){i="0"+i}return i}function U(ak,am,al){var aj=am._milliseconds,an=am._days,ao=am._months,i;if(aj){ak._d.setTime(+ak+aj*al)}if(an){ak.date(ak.date()+an*al)}if(ao){i=ak.date();ak.date(1).month(ak.month()+ao*al).date(Math.min(i,ak.daysInMonth()))}}function D(i){return Object.prototype.toString.call(i)==="[object Array]"}function T(an,am){var aj=Math.min(an.length,am.length),ak=Math.abs(an.length-am.length),ao=0,al;for(al=0;al<aj;al++){if(~~an[al]!==~~am[al]){ao++}}return ao+ak}ag.prototype={set:function(aj){var al,ak;for(ak in aj){al=aj[ak];if(typeof al==="function"){this[ak]=al}else{this["_"+ak]=al}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(i){return this._months[i.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(i){return this._monthsShort[i.month()]},monthsParse:function(aj){var al,an,am,ak;if(!this._monthsParse){this._monthsParse=[]}for(al=0;al<12;al++){if(!this._monthsParse[al]){an=Y([2000,al]);am="^"+this.months(an,"")+"|^"+this.monthsShort(an,"");this._monthsParse[al]=new RegExp(am.replace(".",""),"i")}if(this._monthsParse[al].test(aj)){return al}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(i){return this._weekdays[i.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(i){return this._weekdaysShort[i.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(i){return this._weekdaysMin[i.day()]},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(aj){var i=this._longDateFormat[aj];if(!i&&this._longDateFormat[aj.toUpperCase()]){i=this._longDateFormat[aj.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(ak){return ak.slice(1)});this._longDateFormat[aj]=i}return i},meridiem:function(i,aj,ak){if(i>11){return ak?"pm":"PM"}else{return ak?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},calendar:function(aj,ak){var i=this._calendar[aj];return typeof i==="function"?i.apply(ak):i},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(al,ak,aj,am){var i=this._relativeTime[aj];return(typeof i==="function")?i(al,ak,aj,am):i.replace(/%d/i,al)},pastFuture:function(ak,i){var aj=this._relativeTime[ak>0?"future":"past"];return typeof aj==="function"?aj(i):aj.replace(/%s/i,i)},ordinal:function(i){return this._ordinal.replace("%d",i)},_ordinal:"%d",preparse:function(i){return i},postformat:function(i){return i},week:function(i){return R(i,this._week.dow,this._week.doy)},_week:{dow:0,doy:6}};function z(aj,i){i.abbr=aj;if(!P[aj]){P[aj]=new ag()}P[aj].set(i);return P[aj]}function y(i){if(!i){return Y.fn._lang}if(!P[i]&&O){require("./lang/"+i)}return P[i]}function H(i){if(i.match(/\[.*\]/)){return i.replace(/^\[|\]$/g,"")}return i.replace(/\\/g,"")}function W(al){var am=al.match(l),aj,ak;for(aj=0,ak=am.length;aj<ak;aj++){if(h[am[aj]]){am[aj]=h[am[aj]]}else{am[aj]=H(am[aj])}}return function(an){var i="";for(aj=0;aj<ak;aj++){i+=typeof am[aj].call==="function"?am[aj].call(an,al):am[aj]}return i}}function N(aj,am){var ak=5;function al(i){return aj.lang().longDateFormat(i)||i}while(ak--&&r.test(am)){am=am.replace(r,al)}if(!m[am]){m[am]=W(am)}return m[am](aj)}function f(i){switch(i){case"DDDD":return S;case"YYYY":return I;case"YYYYY":return q;case"S":case"SS":case"SSS":case"DDD":return Q;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return J;case"X":return p;case"Z":case"ZZ":return b;case"T":return u;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return g;default:return new RegExp(i.replace("\\",""))}}function e(an,al,am){var ak,i,aj=am._a;switch(an){case"M":case"MM":aj[1]=(al==null)?0:~~al-1;break;case"MMM":case"MMMM":ak=y(am._l).monthsParse(al);if(ak!=null){aj[1]=ak}else{am._isValid=false}break;case"D":case"DD":case"DDD":case"DDDD":if(al!=null){aj[2]=~~al}break;case"YY":aj[0]=~~al+(~~al>68?1900:2000);break;case"YYYY":case"YYYYY":aj[0]=~~al;break;case"a":case"A":am._isPm=((al+"").toLowerCase()==="pm");break;case"H":case"HH":case"h":case"hh":aj[3]=~~al;break;case"m":case"mm":aj[4]=~~al;break;case"s":case"ss":aj[5]=~~al;break;case"S":case"SS":case"SSS":aj[6]=~~(("0."+al)*1000);break;case"X":am._d=new Date(parseFloat(al)*1000);break;case"Z":case"ZZ":am._useUTC=true;ak=(al+"").match(C);if(ak&&ak[1]){am._tzh=~~ak[1]}if(ak&&ak[2]){am._tzm=~~ak[2]}if(ak&&ak[0]==="+"){am._tzh=-am._tzh;am._tzm=-am._tzm}break}if(al==null){am._isValid=false}}function k(al){var am,ak,aj=[];if(al._d){return}for(am=0;am<7;am++){al._a[am]=aj[am]=(al._a[am]==null)?(am===2?1:0):al._a[am]}aj[3]+=al._tzh||0;aj[4]+=al._tzm||0;ak=new Date(0);if(al._useUTC){ak.setUTCFullYear(aj[0],aj[1],aj[2]);ak.setUTCHours(aj[3],aj[4],aj[5],aj[6])}else{ak.setFullYear(aj[0],aj[1],aj[2]);ak.setHours(aj[3],aj[4],aj[5],aj[6])}al._d=ak}function L(ak){var an=ak._f.match(l),aj=ak._i,al,am;ak._a=[];for(al=0;al<an.length;al++){am=(f(an[al]).exec(aj)||[])[0];if(am){aj=aj.slice(aj.indexOf(am)+am.length)}if(h[an[al]]){e(an[al],am,ak)}}if(ak._isPm&&ak._a[3]<12){ak._a[3]+=12}if(ak._isPm===false&&ak._a[3]===12){ak._a[3]=0}k(ak)}function B(al){var ap,aj,an,ao=99,am,ak,aq;while(al._f.length){ap=s({},al);ap._f=al._f.pop();L(ap);aj=new v(ap);if(aj.isValid()){an=aj;break}aq=T(ap._a,aj.toArray());if(aq<ao){ao=aq;an=aj}}s(al,an)}function aa(ak){var al,aj=ak._i;if(K.exec(aj)){ak._f="YYYY-MM-DDT";for(al=0;al<4;al++){if(j[al][1].exec(aj)){ak._f+=j[al][0];break}}if(b.exec(aj)){ak._f+=" Z"}L(ak)}else{ak._d=new Date(aj)}}function af(ak){var aj=ak._i,i=x.exec(aj);if(aj===t){ak._d=new Date()}else{if(i){ak._d=new Date(+i[1])}else{if(typeof aj==="string"){aa(ak)}else{if(D(aj)){ak._a=aj.slice(0);k(ak)}else{ak._d=aj instanceof Date?new Date(+aj):new Date(aj)}}}}}function V(i,ak,aj,al,am){return am.relativeTime(ak||1,!!aj,i,al)}function E(ak,i,aj){var ap=ac(Math.abs(ak)/1000),al=ac(ap/60),ao=ac(al/60),aq=ac(ao/24),am=ac(aq/365),an=ap<45&&["s",ap]||al===1&&["m"]||al<45&&["mm",al]||ao===1&&["h"]||ao<22&&["hh",ao]||aq===1&&["d"]||aq<=25&&["dd",aq]||aq<=45&&["M"]||aq<345&&["MM",ac(aq/30)]||am===1&&["y"]||["yy",am];an[2]=i;an[3]=ak>0;an[4]=aj;return V.apply({},an)}function R(al,ak,am){var aj=am-ak,i=am-al.day();if(i>aj){i-=7}if(i<aj-7){i+=7}return Math.ceil(Y(al).add("d",i).dayOfYear()/7)}function ad(aj){var i=aj._i,ak=aj._f;if(i===null||i===""){return null}if(typeof i==="string"){aj._i=i=y().preparse(i)}if(Y.isMoment(i)){aj=s({},i);aj._d=new Date(+i._d)}else{if(ak){if(D(ak)){B(aj)}else{L(aj)}}else{af(aj)}}return new v(aj)}Y=function(i,aj,ak){return ad({_i:i,_f:aj,_l:ak,_isUTC:false})};Y.utc=function(i,aj,ak){return ad({_useUTC:true,_isUTC:true,_l:ak,_i:i,_f:aj})};Y.unix=function(i){return Y(i*1000)};Y.duration=function(i,am){var al=Y.isDuration(i),ak=(typeof i==="number"),an=(al?i._data:(ak?{}:i)),aj;if(ak){if(am){an[am]=i}else{an.milliseconds=i}}aj=new ai(an);if(al&&i.hasOwnProperty("_lang")){aj._lang=i._lang}return aj};Y.version=A;Y.defaultFormat=d;Y.lang=function(al,aj){var ak;if(!al){return Y.fn._lang._abbr}if(aj){z(al,aj)}else{if(!P[al]){y(al)}}Y.duration.fn._lang=Y.fn._lang=y(al)};Y.langData=function(i){if(i&&i._lang&&i._lang._abbr){i=i._lang._abbr}return y(i)};Y.isMoment=function(i){return i instanceof v};Y.isDuration=function(i){return i instanceof ai};Y.fn=v.prototype={clone:function(){return Y(this)},valueOf:function(){return +this._d},unix:function(){return Math.floor(+this._d/1000)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._d},toJSON:function(){return Y.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var i=this;return[i.year(),i.month(),i.date(),i.hours(),i.minutes(),i.seconds(),i.milliseconds()]},isValid:function(){if(this._isValid==null){if(this._a){this._isValid=!T(this._a,(this._isUTC?Y.utc(this._a):Y(this._a)).toArray())}else{this._isValid=!isNaN(this._d.getTime())}}return !!this._isValid},utc:function(){this._isUTC=true;return this},local:function(){this._isUTC=false;return this},format:function(aj){var i=N(this,aj||Y.defaultFormat);return this.lang().postformat(i)},add:function(i,ak){var aj;if(typeof i==="string"){aj=Y.duration(+ak,i)}else{aj=Y.duration(i,ak)}U(this,aj,1);return this},subtract:function(i,ak){var aj;if(typeof i==="string"){aj=Y.duration(+ak,i)}else{aj=Y.duration(i,ak)}U(this,aj,-1);return this},diff:function(am,al,i){var an=this._isUTC?Y(am).utc():Y(am).local(),aj=(this.zone()-an.zone())*60000,ao,ak;if(al){al=al.replace(/s$/,"")}if(al==="year"||al==="month"){ao=(this.daysInMonth()+an.daysInMonth())*43200000;ak=((this.year()-an.year())*12)+(this.month()-an.month());ak+=((this-Y(this).startOf("month"))-(an-Y(an).startOf("month")))/ao;if(al==="year"){ak=ak/12}}else{ao=(this-an)-aj;ak=al==="second"?ao/1000:al==="minute"?ao/60000:al==="hour"?ao/3600000:al==="day"?ao/86400000:al==="week"?ao/604800000:ao}return i?ak:X(ak)},from:function(aj,i){return Y.duration(this.diff(aj)).lang(this.lang()._abbr).humanize(!i)},fromNow:function(i){return this.from(Y(),i)},calendar:function(){var aj=this.diff(Y().startOf("day"),"days",true),i=aj<-6?"sameElse":aj<-1?"lastWeek":aj<0?"lastDay":aj<1?"sameDay":aj<2?"nextDay":aj<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(i,this))},isLeapYear:function(){var i=this.year();return(i%4===0&&i%100!==0)||i%400===0},isDST:function(){return(this.zone()<Y([this.year()]).zone()||this.zone()<Y([this.year(),5]).zone())},day:function(aj){var i=this._isUTC?this._d.getUTCDay():this._d.getDay();return aj==null?i:this.add({d:aj-i})},startOf:function(i){i=i.replace(/s$/,"");switch(i){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(i==="week"){this.day(0)}return this},endOf:function(i){return this.startOf(i).add(i.replace(/s?$/,"s"),1).subtract("ms",1)},isAfter:function(aj,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)>+Y(aj).startOf(i)},isBefore:function(aj,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)<+Y(aj).startOf(i)},isSame:function(aj,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)===+Y(aj).startOf(i)},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return Y.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(i){var aj=ac((Y(this).startOf("day")-Y(this).startOf("year"))/86400000)+1;return i==null?aj:this.add("d",(i-aj))},isoWeek:function(i){var aj=R(this,1,4);return i==null?aj:this.add("d",(i-aj)*7)},week:function(i){var aj=this.lang().week(this);return i==null?aj:this.add("d",(i-aj)*7)},lang:function(i){if(i===t){return this._lang}else{this._lang=y(i);return this}}};function o(i,aj){Y.fn[i]=Y.fn[i+"s"]=function(ak){var al=this._isUTC?"UTC":"";if(ak!=null){this._d["set"+al+aj](ak);return this}else{return this._d["get"+al+aj]()}}}for(ae=0;ae<n.length;ae++){o(n[ae].toLowerCase().replace(/s$/,""),n[ae])}o("year","FullYear");Y.fn.days=Y.fn.day;Y.fn.weeks=Y.fn.week;Y.fn.isoWeeks=Y.fn.isoWeek;Y.duration.fn=ai.prototype={weeks:function(){return X(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*86400000+this._months*2592000000},humanize:function(aj){var ak=+this,i=E(ak,!aj,this.lang());if(aj){i=this.lang().pastFuture(ak,i)}return this.lang().postformat(i)},lang:Y.fn.lang};function a(i){Y.duration.fn[i]=function(){return this._data[i]}}function c(i,aj){Y.duration.fn["as"+i]=function(){return +this/aj}}for(ae in Z){if(Z.hasOwnProperty(ae)){c(ae,Z[ae]);a(ae.toLowerCase())}}c("Weeks",604800000);Y.lang("en",{ordinal:function(ak){var i=ak%10,aj=(~~(ak%100/10)===1)?"th":(i===1)?"st":(i===2)?"nd":(i===3)?"rd":"th";return ak+aj}});if(O){module.exports=Y}if(typeof ender==="undefined"){this["moment"]=Y}if(typeof define==="function"&&define.amd){define("moment",[],function(){return Y})}}).call(this);!function(a){a(function(){a.support.transition=(function(){var b=(function(){var e=document.createElement("bootstrap"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in d){if(e.style[c]!==undefined){return d[c]}}}());return b&&{end:b}})()})}(window.jQuery);!function(d){var c='[data-dismiss="alert"]',b=function(e){d(e).on("click",c,this.close)};b.prototype.close=function(j){var i=d(this),g=i.attr("data-target"),h;if(!g){g=i.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}h=d(g);j&&j.preventDefault();h.length||(h=i.hasClass("alert")?i:i.parent());h.trigger(j=d.Event("close"));if(j.isDefaultPrevented()){return}h.removeClass("in");function f(){h.trigger("closed").remove()}d.support.transition&&h.hasClass("fade")?h.on(d.support.transition.end,f):f()};var a=d.fn.alert;d.fn.alert=function(e){return this.each(function(){var g=d(this),f=g.data("alert");if(!f){g.data("alert",(f=new b(this)))}if(typeof e=="string"){f[e].call(g)}})};d.fn.alert.Constructor=b;d.fn.alert.noConflict=function(){d.fn.alert=a;return this};d(document).on("click.alert.data-api",c,b.prototype.close)}(window.jQuery);!function(c){var b=function(e,d){this.$element=c(e);this.options=c.extend({},c.fn.button.defaults,d)};b.prototype.setState=function(g){var i="disabled",e=this.$element,f=e.data(),h=e.is("input")?"val":"html";g=g+"Text";f.resetText||e.data("resetText",e[h]());e[h](f[g]||this.options[g]);setTimeout(function(){g=="loadingText"?e.addClass(i).attr(i,i):e.removeClass(i).removeAttr(i)},0)};b.prototype.toggle=function(){var d=this.$element.closest('[data-toggle="buttons-radio"]');d&&d.find(".active").removeClass("active");this.$element.toggleClass("active")};var a=c.fn.button;c.fn.button=function(d){return this.each(function(){var g=c(this),f=g.data("button"),e=typeof d=="object"&&d;if(!f){g.data("button",(f=new b(this,e)))}if(d=="toggle"){f.toggle()}else{if(d){f.setState(d)}}})};c.fn.button.defaults={loadingText:"loading..."};c.fn.button.Constructor=b;c.fn.button.noConflict=function(){c.fn.button=a;return this};c(document).on("click.button.data-api","[data-toggle^=button]",function(f){var d=c(f.target);if(!d.hasClass("btn")){d=d.closest(".btn")}d.button("toggle")})}(window.jQuery);!function(b){var c=function(e,d){this.$element=b(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=d;this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};c.prototype={cycle:function(d){if(!d){this.paused=false}if(this.interval){clearInterval(this.interval)}this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this},getActiveIndex:function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)},to:function(f){var d=this.getActiveIndex(),e=this;if(f>(this.$items.length-1)||f<0){return}if(this.sliding){return this.$element.one("slid",function(){e.to(f)})}if(d==f){return this.pause().cycle()}return this.slide(f>d?"next":"prev",b(this.$items[f]))},pause:function(d){if(!d){this.paused=true}if(this.$element.find(".next, .prev").length&&b.support.transition.end){this.$element.trigger(b.support.transition.end);this.cycle(true)}clearInterval(this.interval);this.interval=null;return this},next:function(){if(this.sliding){return}return this.slide("next")},prev:function(){if(this.sliding){return}return this.slide("prev")},slide:function(k,f){var m=this.$element.find(".item.active"),d=f||m[k](),j=this.interval,l=k=="next"?"left":"right",g=k=="next"?"first":"last",h=this,i;this.sliding=true;j&&this.pause();d=d.length?d:this.$element.find(".item")[g]();i=b.Event("slide",{relatedTarget:d[0],direction:l});if(d.hasClass("active")){return}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid",function(){var e=b(h.$indicators.children()[h.getActiveIndex()]);e&&e.addClass("active")})}if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(i);if(i.isDefaultPrevented()){return}d.addClass(k);d[0].offsetWidth;m.addClass(l);d.addClass(l);this.$element.one(b.support.transition.end,function(){d.removeClass([k,l].join(" ")).addClass("active");m.removeClass(["active",l].join(" "));h.sliding=false;setTimeout(function(){h.$element.trigger("slid")},0)})}else{this.$element.trigger(i);if(i.isDefaultPrevented()){return}m.removeClass("active");d.addClass("active");this.sliding=false;this.$element.trigger("slid")}j&&this.cycle();return this}};var a=b.fn.carousel;b.fn.carousel=function(d){return this.each(function(){var h=b(this),g=h.data("carousel"),e=b.extend({},b.fn.carousel.defaults,typeof d=="object"&&d),f=typeof d=="string"?d:e.slide;if(!g){h.data("carousel",(g=new c(this,e)))}if(typeof d=="number"){g.to(d)}else{if(f){g[f]()}else{if(e.interval){g.pause().cycle()}}}})};b.fn.carousel.defaults={interval:5000,pause:"hover"};b.fn.carousel.Constructor=c;b.fn.carousel.noConflict=function(){b.fn.carousel=a;return this};b(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f,d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")),g=b.extend({},d.data(),i.data()),h;d.carousel(g);if(h=i.attr("data-slide-to")){d.data("carousel").pause().to(h).cycle()}j.preventDefault()})}(window.jQuery);!function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},b.fn.collapse.defaults,d);if(this.options.parent){this.$parent=b(this.options.parent)}this.options.toggle&&this.toggle()};c.prototype={constructor:c,dimension:function(){var d=this.$element.hasClass("width");return d?"width":"height"},show:function(){var g,d,f,e;if(this.transitioning||this.$element.hasClass("in")){return}g=this.dimension();d=b.camelCase(["scroll",g].join("-"));f=this.$parent&&this.$parent.find("> .accordion-group > .in");if(f&&f.length){e=f.data("collapse");if(e&&e.transitioning){return}f.collapse("hide");e||f.data("collapse",null)}this.$element[g](0);this.transition("addClass",b.Event("show"),"shown");b.support.transition&&this.$element[g](this.$element[0][d])},hide:function(){var d;if(this.transitioning||!this.$element.hasClass("in")){return}d=this.dimension();this.reset(this.$element[d]());this.transition("removeClass",b.Event("hide"),"hidden");this.$element[d](0)},reset:function(d){var e=this.dimension();this.$element.removeClass("collapse")[e](d||"auto")[0].offsetWidth;this.$element[d!==null?"addClass":"removeClass"]("collapse");return this},transition:function(h,e,f){var g=this,d=function(){if(e.type=="show"){g.reset()}g.transitioning=0;g.$element.trigger(f)};this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.transitioning=1;this.$element[h]("in");b.support.transition&&this.$element.hasClass("collapse")?this.$element.one(b.support.transition.end,d):d()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var a=b.fn.collapse;b.fn.collapse=function(d){return this.each(function(){var g=b(this),f=g.data("collapse"),e=b.extend({},b.fn.collapse.defaults,g.data(),typeof d=="object"&&d);if(!f){g.data("collapse",(f=new c(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.collapse.defaults={toggle:true};b.fn.collapse.Constructor=c;b.fn.collapse.noConflict=function(){b.fn.collapse=a;return this};b(document).on("click.collapse.data-api","[data-toggle=collapse]",function(i){var h=b(this),d,g=h.attr("data-target")||i.preventDefault()||(d=h.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=b(g).data("collapse")?"toggle":h.data();h[b(g).hasClass("in")?"addClass":"removeClass"]("collapsed");b(g).collapse(f)})}(window.jQuery);!function(f){var b="[data-toggle=dropdown]",a=function(h){var g=f(h).on("click.dropdown.data-api",this.toggle);f("html").on("click.dropdown.data-api",function(){g.parent().removeClass("open")})};a.prototype={constructor:a,toggle:function(j){var i=f(this),h,g;if(i.is(".disabled, :disabled")){return}h=e(i);g=h.hasClass("open");d();if(!g){h.toggleClass("open")}i.focus();return false},keydown:function(l){var k,m,g,j,i,h;if(!/(38|40|27)/.test(l.keyCode)){return}k=f(this);l.preventDefault();l.stopPropagation();if(k.is(".disabled, :disabled")){return}j=e(k);i=j.hasClass("open");if(!i||(i&&l.keyCode==27)){if(l.which==27){j.find(b).focus()}return k.click()}m=f("[role=menu] li:not(.divider):visible a",j);if(!m.length){return}h=m.index(m.filter(":focus"));if(l.keyCode==38&&h>0){h--}if(l.keyCode==40&&h<m.length-1){h++}if(!~h){h=0}m.eq(h).focus()}};function d(){f(b).each(function(){e(f(this)).removeClass("open")})}function e(i){var g=i.attr("data-target"),h;if(!g){g=i.attr("href");g=g&&/#/.test(g)&&g.replace(/.*(?=#[^\s]*$)/,"")}h=g&&f(g);if(!h||!h.length){h=i.parent()}return h}var c=f.fn.dropdown;f.fn.dropdown=function(g){return this.each(function(){var i=f(this),h=i.data("dropdown");if(!h){i.data("dropdown",(h=new a(this)))}if(typeof g=="string"){h[g].call(i)}})};f.fn.dropdown.Constructor=a;f.fn.dropdown.noConflict=function(){f.fn.dropdown=c;return this};f(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(g){g.stopPropagation()}).on("click.dropdown-menu",function(g){g.stopPropagation()}).on("click.dropdown.data-api",b,a.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",a.prototype.keydown)}(window.jQuery);!function(c){var b=function(e,d){this.options=d;this.$element=c(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",c.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var d=this,f=c.Event("show");this.$element.trigger(f);if(this.isShown||f.isDefaultPrevented()){return}this.isShown=true;this.escape();this.backdrop(function(){var e=c.support.transition&&d.$element.hasClass("fade");if(!d.$element.parent().length){d.$element.appendTo(document.body)}d.$element.show();if(e){d.$element[0].offsetWidth}d.$element.addClass("in").attr("aria-hidden",false);d.enforceFocus();e?d.$element.one(c.support.transition.end,function(){d.$element.focus().trigger("shown")}):d.$element.focus().trigger("shown")})},hide:function(f){f&&f.preventDefault();var d=this;f=c.Event("hide");this.$element.trigger(f);if(!this.isShown||f.isDefaultPrevented()){return}this.isShown=false;this.escape();c(document).off("focusin.modal");this.$element.removeClass("in").attr("aria-hidden",true);c.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var d=this;c(document).on("focusin.modal",function(f){if(d.$element[0]!==f.target&&!d.$element.has(f.target).length){d.$element.focus()}})},escape:function(){var d=this;if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(f){f.which==27&&d.hide()})}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")}}},hideWithTransition:function(){var d=this,e=setTimeout(function(){d.$element.off(c.support.transition.end);d.hideModal()},500);this.$element.one(c.support.transition.end,function(){clearTimeout(e);d.hideModal()})},hideModal:function(){var d=this;this.$element.hide();this.backdrop(function(){d.removeBackdrop();d.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null},backdrop:function(g){var f=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);this.$backdrop.click(this.options.backdrop=="static"?c.proxy(this.$element[0].focus,this.$element[0]):c.proxy(this.hide,this));if(d){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!g){return}d?this.$backdrop.one(c.support.transition.end,g):g()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,g):g()}else{if(g){g()}}}}};var a=c.fn.modal;c.fn.modal=function(d){return this.each(function(){var g=c(this),f=g.data("modal"),e=c.extend({},c.fn.modal.defaults,g.data(),typeof d=="object"&&d);if(!f){g.data("modal",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}else{if(e.show){f.show()}}})};c.fn.modal.defaults={backdrop:true,keyboard:true,show:true};c.fn.modal.Constructor=b;c.fn.modal.noConflict=function(){c.fn.modal=a;return this};c(document).on("click.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this),f=h.attr("href"),d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,""))),g=d.data("modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());i.preventDefault();d.modal(g).one("hide",function(){h.focus()})})}(window.jQuery);!function(c){var b=function(e,d){this.init("tooltip",e,d)};b.prototype={constructor:b,init:function(k,h,f){var l,d,j,e,g;this.type=k;this.$element=c(h);this.options=this.getOptions(f);this.enabled=true;j=this.options.trigger.split(" ");for(g=j.length;g--;){e=j[g];if(e=="click"){this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this))}else{if(e!="manual"){l=e=="hover"?"mouseenter":"focus";d=e=="hover"?"mouseleave":"blur";this.$element.on(l+"."+this.type,this.options.selector,c.proxy(this.enter,this));this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this))}}}this.options.selector?(this._options=c.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()},getOptions:function(d){d=c.extend({},c.fn[this.type].defaults,this.$element.data(),d);if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}}return d},enter:function(h){var g=c.fn[this.type].defaults,f={},d;this._options&&c.each(this._options,function(e,i){if(g[e]!=i){f[e]=i}},this);d=c(h.currentTarget)[this.type](f).data(this.type);if(!d.options.delay||!d.options.delay.show){return d.show()}clearTimeout(this.timeout);d.hoverState="in";this.timeout=setTimeout(function(){if(d.hoverState=="in"){d.show()}},d.options.delay.show)},leave:function(f){var d=c(f.currentTarget)[this.type](this._options).data(this.type);if(this.timeout){clearTimeout(this.timeout)}if(!d.options.delay||!d.options.delay.hide){return d.hide()}d.hoverState="out";this.timeout=setTimeout(function(){if(d.hoverState=="out"){d.hide()}},d.options.delay.hide)},show:function(){var i,k,g,j,d,h,f=c.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(f);if(f.isDefaultPrevented()){return}i=this.tip();this.setContent();if(this.options.animation){i.addClass("fade")}d=typeof this.options.placement=="function"?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement;i.detach().css({top:0,left:0,display:"block"});this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);k=this.getPosition();g=i[0].offsetWidth;j=i[0].offsetHeight;switch(d){case"bottom":h={top:k.top+k.height,left:k.left+k.width/2-g/2};break;case"top":h={top:k.top-j,left:k.left+k.width/2-g/2};break;case"left":h={top:k.top+k.height/2-j/2,left:k.left-g};break;case"right":h={top:k.top+k.height/2-j/2,left:k.left+k.width};break}this.applyPlacement(h,d);this.$element.trigger("shown")}},applyPlacement:function(g,h){var i=this.tip(),e=i[0].offsetWidth,l=i[0].offsetHeight,d,j,k,f;i.offset(g).addClass(h).addClass("in");d=i[0].offsetWidth;j=i[0].offsetHeight;if(h=="top"&&j!=l){g.top=g.top+l-j;f=true}if(h=="bottom"||h=="top"){k=0;if(g.left<0){k=g.left*-2;g.left=0;i.offset(g);d=i[0].offsetWidth;j=i[0].offsetHeight}this.replaceArrow(k-e+d,d,"left")}else{this.replaceArrow(j-l,j,"top")}if(f){i.offset(g)}},replaceArrow:function(f,e,d){this.arrow().css(d,f?(50*(1-f/e)+"%"):"")},setContent:function(){var e=this.tip(),d=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](d);e.removeClass("fade in top bottom left right")},hide:function(){var d=this,g=this.tip(),f=c.Event("hide");this.$element.trigger(f);if(f.isDefaultPrevented()){return}g.removeClass("in");function h(){var e=setTimeout(function(){g.off(c.support.transition.end).detach()},500);g.one(c.support.transition.end,function(){clearTimeout(e);g.detach()})}c.support.transition&&this.$tip.hasClass("fade")?h():g.detach();this.$element.trigger("hidden");return this},fixTitle:function(){var d=this.$element;if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")}},hasContent:function(){return this.getTitle()},getPosition:function(){var d=this.$element[0];return c.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())},getTitle:function(){var f,d=this.$element,e=this.options;f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);return f},tip:function(){return this.$tip=this.$tip||c(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(f){var d=f?c(f.currentTarget)[this.type](this._options).data(this.type):this;d.tip().hasClass("in")?d.hide():d.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var a=c.fn.tooltip;c.fn.tooltip=function(d){return this.each(function(){var g=c(this),f=g.data("tooltip"),e=typeof d=="object"&&d;if(!f){g.data("tooltip",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.tooltip.Constructor=b;c.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};c.fn.tooltip.noConflict=function(){c.fn.tooltip=a;return this}}(window.jQuery);!function(c){var b=function(e,d){this.init("popover",e,d)};b.prototype=c.extend({},c.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var f=this.tip(),e=this.getTitle(),d=this.getContent();f.find(".popover-title")[this.options.html?"html":"text"](e);f.find(".popover-content")[this.options.html?"html":"text"](d);f.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,d=this.$element,f=this.options;e=(typeof f.content=="function"?f.content.call(d[0]):f.content)||d.attr("data-content");return e},tip:function(){if(!this.$tip){this.$tip=c(this.options.template)}return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var a=c.fn.popover;c.fn.popover=function(d){return this.each(function(){var g=c(this),f=g.data("popover"),e=typeof d=="object"&&d;if(!f){g.data("popover",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.popover.Constructor=b;c.fn.popover.defaults=c.extend({},c.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});c.fn.popover.noConflict=function(){c.fn.popover=a;return this}}(window.jQuery);!function(c){function b(g,f){var h=c.proxy(this.process,this),d=c(g).is("body")?c(window):c(g),e;this.options=c.extend({},c.fn.scrollspy.defaults,f);this.$scrollElement=d.on("scroll.scroll-spy.data-api",h);this.selector=(this.options.target||((e=c(g).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";this.$body=c("body");this.refresh();this.process()}b.prototype={constructor:b,refresh:function(){var d=this,e;this.offsets=c([]);this.targets=c([]);e=this.$body.find(this.selector).map(function(){var g=c(this),f=g.data("target")||g.attr("href"),h=/^#\w/.test(f)&&c(f);return(h&&h.length&&[[h.position().top+(!c.isWindow(d.$scrollElement.get(0))&&d.$scrollElement.scrollTop()),f]])||null}).sort(function(g,f){return g[0]-f[0]}).each(function(){d.offsets.push(this[0]);d.targets.push(this[1])})},process:function(){var j=this.$scrollElement.scrollTop()+this.options.offset,f=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,h=f-this.$scrollElement.height(),g=this.offsets,d=this.targets,k=this.activeTarget,e;if(j>=h){return k!=(e=d.last()[0])&&this.activate(e)}for(e=g.length;e--;){k!=d[e]&&j>=g[e]&&(!g[e+1]||j<=g[e+1])&&this.activate(d[e])}},activate:function(f){var e,d;this.activeTarget=f;c(this.selector).parent(".active").removeClass("active");d=this.selector+'[data-target="'+f+'"],'+this.selector+'[href="'+f+'"]';e=c(d).parent("li").addClass("active");if(e.parent(".dropdown-menu").length){e=e.closest("li.dropdown").addClass("active")}e.trigger("activate")}};var a=c.fn.scrollspy;c.fn.scrollspy=function(d){return this.each(function(){var g=c(this),f=g.data("scrollspy"),e=typeof d=="object"&&d;if(!f){g.data("scrollspy",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.scrollspy.Constructor=b;c.fn.scrollspy.defaults={offset:10};c.fn.scrollspy.noConflict=function(){c.fn.scrollspy=a;return this};c(window).on("load",function(){c('[data-spy="scroll"]').each(function(){var d=c(this);d.scrollspy(d.data())})})}(window.jQuery);!function(c){var b=function(d){this.element=c(d)};b.prototype={constructor:b,show:function(){var j=this.element,g=j.closest("ul:not(.dropdown-menu)"),f=j.attr("data-target"),h,d,i;if(!f){f=j.attr("href");f=f&&f.replace(/.*(?=#[^\s]*$)/,"")}if(j.parent("li").hasClass("active")){return}h=g.find(".active:last a")[0];i=c.Event("show",{relatedTarget:h});j.trigger(i);if(i.isDefaultPrevented()){return}d=c(f);this.activate(j.parent("li"),g);this.activate(d,d.parent(),function(){j.trigger({type:"shown",relatedTarget:h})})},activate:function(f,e,i){var d=e.find("> .active"),h=i&&c.support.transition&&d.hasClass("fade");function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");f.addClass("active");if(h){f[0].offsetWidth;f.addClass("in")}else{f.removeClass("fade")}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")}i&&i()}h?d.one(c.support.transition.end,g):g();d.removeClass("in")}};var a=c.fn.tab;c.fn.tab=function(d){return this.each(function(){var f=c(this),e=f.data("tab");if(!e){f.data("tab",(e=new b(this)))}if(typeof d=="string"){e[d]()}})};c.fn.tab.Constructor=b;c.fn.tab.noConflict=function(){c.fn.tab=a;return this};c(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();c(this).tab("show")})}(window.jQuery);!function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},b.fn.typeahead.defaults,d);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.source=this.options.source;this.$menu=b(this.options.menu);this.shown=false;this.listen()};c.prototype={constructor:c,select:function(){var d=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(d)).change();return this.hide()},updater:function(d){return d},show:function(){var d=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:d.top+d.height,left:d.left}).show();this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(e){var d;this.query=this.$element.val();if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}d=b.isFunction(this.source)?this.source(this.query,b.proxy(this.process,this)):this.source;return d?this.process(d):this},process:function(d){var e=this;d=b.grep(d,function(f){return e.matcher(f)});d=this.sorter(d);if(!d.length){return this.shown?this.hide():this}return this.render(d.slice(0,this.options.items)).show()},matcher:function(d){return ~d.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(f){var g=[],e=[],d=[],h;while(h=f.shift()){if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(h)}else{if(~h.indexOf(this.query)){e.push(h)}else{d.push(h)}}}return g.concat(e,d)},highlighter:function(d){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return d.replace(new RegExp("("+e+")","ig"),function(f,g){return"<strong>"+g+"</strong>"})},render:function(d){var e=this;d=b(d).map(function(f,g){f=b(e.options.item).attr("data-value",g);f.find("a").html(e.highlighter(g));return f[0]});d.first().addClass("active");this.$menu.html(d);return this},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();if(!d.length){d=b(this.$menu.find("li")[0])}d.addClass("active")},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();if(!d.length){d=this.$menu.find("li").last()}d.addClass("active")},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this))},eventSupported:function(d){var e=d in this.$element;if(!e){this.$element.setAttribute(d,"return;");e=typeof this.$element[d]==="function"}return e},move:function(d){if(!this.shown){return}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();break;case 38:d.preventDefault();this.prev();break;case 40:d.preventDefault();this.next();break}d.stopPropagation()},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);this.move(d)},keypress:function(d){if(this.suppressKeyPressRepeat){return}this.move(d)},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break;default:this.lookup()}d.stopPropagation();d.preventDefault()},focus:function(d){this.focused=true},blur:function(d){this.focused=false;if(!this.mousedover&&this.shown){this.hide()}},click:function(d){d.stopPropagation();d.preventDefault();this.select();this.$element.focus()},mouseenter:function(d){this.mousedover=true;this.$menu.find(".active").removeClass("active");b(d.currentTarget).addClass("active")},mouseleave:function(d){this.mousedover=false;if(!this.focused&&this.shown){this.hide()}}};var a=b.fn.typeahead;b.fn.typeahead=function(d){return this.each(function(){var g=b(this),f=g.data("typeahead"),e=typeof d=="object"&&d;if(!f){g.data("typeahead",(f=new c(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};b.fn.typeahead.Constructor=c;b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;return this};b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);if(d.data("typeahead")){return}d.typeahead(d.data())})}(window.jQuery);!function(c){var b=function(e,d){this.options=c.extend({},c.fn.affix.defaults,d);this.$window=c(window).on("scroll.affix.data-api",c.proxy(this.checkPosition,this)).on("click.affix.data-api",c.proxy(function(){setTimeout(c.proxy(this.checkPosition,this),1)},this));this.$element=c(e);this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var h=c(document).height(),j=this.$window.scrollTop(),d=this.$element.offset(),k=this.options.offset,f=k.bottom,g=k.top,i="affix affix-top affix-bottom",e;if(typeof k!="object"){f=g=k}if(typeof g=="function"){g=k.top()}if(typeof f=="function"){f=k.bottom()}e=this.unpin!=null&&(j+this.unpin<=d.top)?false:f!=null&&(d.top+this.$element.height()>=h-f)?"bottom":g!=null&&j<=g?"top":false;if(this.affixed===e){return}this.affixed=e;this.unpin=e=="bottom"?d.top-j:null;this.$element.removeClass(i).addClass("affix"+(e?"-"+e:""))};var a=c.fn.affix;c.fn.affix=function(d){return this.each(function(){var g=c(this),f=g.data("affix"),e=typeof d=="object"&&d;if(!f){g.data("affix",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.affix.Constructor=b;c.fn.affix.defaults={offset:0};c.fn.affix.noConflict=function(){c.fn.affix=a;return this};c(window).on("load",function(){c('[data-spy="affix"]').each(function(){var e=c(this),d=e.data();d.offset=d.offset||{};d.offsetBottom&&(d.offset.bottom=d.offsetBottom);d.offsetTop&&(d.offset.top=d.offsetTop);e.affix(d)})})}(window.jQuery);
/*
 * Timepicker Component for Twitter Bootstrap
 *
 * Copyright 2013 Joris de Wit
 *
 * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function(d,c,a,e){var b=function(g,f){this.widget="";this.$element=d(g);this.defaultTime=f.defaultTime;this.disableFocus=f.disableFocus;this.isOpen=f.isOpen;this.minuteStep=f.minuteStep;this.modalBackdrop=f.modalBackdrop;this.secondStep=f.secondStep;this.showInputs=f.showInputs;this.showMeridian=f.showMeridian;this.showSeconds=f.showSeconds;this.template=f.template;this.appendWidgetTo=f.appendWidgetTo;this._init()};b.prototype={constructor:b,_init:function(){var f=this;if(this.$element.parent().hasClass("input-append")||this.$element.parent().hasClass("input-prepend")){this.$element.parent(".input-append, .input-prepend").find(".add-on").on({"click.timepicker":d.proxy(this.showWidget,this)});this.$element.on({"focus.timepicker":d.proxy(this.highlightUnit,this),"click.timepicker":d.proxy(this.highlightUnit,this),"keydown.timepicker":d.proxy(this.elementKeydown,this),"blur.timepicker":d.proxy(this.blurElement,this)})}else{if(this.template){this.$element.on({"focus.timepicker":d.proxy(this.showWidget,this),"click.timepicker":d.proxy(this.showWidget,this),"blur.timepicker":d.proxy(this.blurElement,this)})}else{this.$element.on({"focus.timepicker":d.proxy(this.highlightUnit,this),"click.timepicker":d.proxy(this.highlightUnit,this),"keydown.timepicker":d.proxy(this.elementKeydown,this),"blur.timepicker":d.proxy(this.blurElement,this)})}}if(this.template!==false){this.$widget=d(this.getTemplate()).prependTo(this.$element.parents(this.appendWidgetTo)).on("click",d.proxy(this.widgetClick,this))}else{this.$widget=false}if(this.showInputs&&this.$widget!==false){this.$widget.find("input").each(function(){d(this).on({"click.timepicker":function(){d(this).select()},"keydown.timepicker":d.proxy(f.widgetKeydown,f)})})}this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=e;this.updateFromElementVal()},decrementHour:function(){if(this.showMeridian){if(this.hour===1){this.hour=12}else{if(this.hour===12){this.hour--;return this.toggleMeridian()}else{if(this.hour===0){this.hour=11;return this.toggleMeridian()}else{this.hour--}}}}else{if(this.hour===0){this.hour=23}else{this.hour--}}this.update()},decrementMinute:function(g){var f;if(g){f=this.minute-g}else{f=this.minute-this.minuteStep}if(f<0){this.decrementHour();this.minute=f+60}else{this.minute=f}this.update()},decrementSecond:function(){var f=this.second-this.secondStep;if(f<0){this.decrementMinute(true);this.second=f+60}else{this.second=f}this.update()},elementKeydown:function(f){switch(f.keyCode){case 9:this.updateFromElementVal();switch(this.highlightedUnit){case"hour":f.preventDefault();this.highlightNextUnit();break;case"minute":if(this.showMeridian||this.showSeconds){f.preventDefault();this.highlightNextUnit()}break;case"second":if(this.showMeridian){f.preventDefault();this.highlightNextUnit()}break}break;case 27:this.updateFromElementVal();break;case 37:f.preventDefault();this.highlightPrevUnit();this.updateFromElementVal();break;case 38:f.preventDefault();switch(this.highlightedUnit){case"hour":this.incrementHour();this.highlightHour();break;case"minute":this.incrementMinute();this.highlightMinute();break;case"second":this.incrementSecond();this.highlightSecond();break;case"meridian":this.toggleMeridian();this.highlightMeridian();break}break;case 39:f.preventDefault();this.updateFromElementVal();this.highlightNextUnit();break;case 40:f.preventDefault();switch(this.highlightedUnit){case"hour":this.decrementHour();this.highlightHour();break;case"minute":this.decrementMinute();this.highlightMinute();break;case"second":this.decrementSecond();this.highlightSecond();break;case"meridian":this.toggleMeridian();this.highlightMeridian();break}break}},formatTime:function(f,i,g,h){f=f<10?"0"+f:f;i=i<10?"0"+i:i;g=g<10?"0"+g:g;return f+":"+i+(this.showSeconds?":"+g:"")+(this.showMeridian?" "+h:"")},getCursorPosition:function(){var g=this.$element.get(0);if("selectionStart" in g){return g.selectionStart}else{if(a.selection){g.focus();var h=a.selection.createRange(),f=a.selection.createRange().text.length;h.moveStart("character",-g.value.length);return h.text.length-f}}},getTemplate:function(){var h,j,g,f,i,k;if(this.showInputs){j='<input type="text" name="hour" class="bootstrap-timepicker-hour" maxlength="2"/>';g='<input type="text" name="minute" class="bootstrap-timepicker-minute" maxlength="2"/>';f='<input type="text" name="second" class="bootstrap-timepicker-second" maxlength="2"/>';i='<input type="text" name="meridian" class="bootstrap-timepicker-meridian" maxlength="2"/>'}else{j='<span class="bootstrap-timepicker-hour"></span>';g='<span class="bootstrap-timepicker-minute"></span>';f='<span class="bootstrap-timepicker-second"></span>';i='<span class="bootstrap-timepicker-meridian"></span>'}k='<table><tr><td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>':"")+"</tr><tr><td>"+j+'</td> <td class="separator">:</td><td>'+g+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+f+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+i+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>':"")+"</tr></table>";switch(this.template){case"modal":h='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">'+k+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":h='<div class="bootstrap-timepicker-widget dropdown-menu">'+k+"</div>";break}return h},getTime:function(){return this.formatTime(this.hour,this.minute,this.second,this.meridian)},hideWidget:function(){if(this.isOpen===false){return}if(this.showInputs){this.updateFromWidgetInputs()}this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}});if(this.template==="modal"&&this.$widget.modal){this.$widget.modal("hide")}else{this.$widget.removeClass("open")}d(a).off("mousedown.timepicker");this.isOpen=false},highlightUnit:function(){this.position=this.getCursorPosition();if(this.position>=0&&this.position<=2){this.highlightHour()}else{if(this.position>=3&&this.position<=5){this.highlightMinute()}else{if(this.position>=6&&this.position<=8){if(this.showSeconds){this.highlightSecond()}else{this.highlightMeridian()}}else{if(this.position>=9&&this.position<=11){this.highlightMeridian()}}}}},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":if(this.showSeconds){this.highlightSecond()}else{if(this.showMeridian){this.highlightMeridian()}else{this.highlightHour()}}break;case"second":if(this.showMeridian){this.highlightMeridian()}else{this.highlightHour()}break;case"meridian":this.highlightHour();break}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMeridian();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":if(this.showSeconds){this.highlightSecond()}else{this.highlightMinute()}break}},highlightHour:function(){var f=this.$element.get(0);this.highlightedUnit="hour";if(f.setSelectionRange){setTimeout(function(){f.setSelectionRange(0,2)},0)}},highlightMinute:function(){var f=this.$element.get(0);this.highlightedUnit="minute";if(f.setSelectionRange){setTimeout(function(){f.setSelectionRange(3,5)},0)}},highlightSecond:function(){var f=this.$element.get(0);this.highlightedUnit="second";if(f.setSelectionRange){setTimeout(function(){f.setSelectionRange(6,8)},0)}},highlightMeridian:function(){var f=this.$element.get(0);this.highlightedUnit="meridian";if(f.setSelectionRange){if(this.showSeconds){setTimeout(function(){f.setSelectionRange(9,11)},0)}else{setTimeout(function(){f.setSelectionRange(6,8)},0)}}},incrementHour:function(){if(this.showMeridian){if(this.hour===11){this.hour++;return this.toggleMeridian()}else{if(this.hour===12){this.hour=0}}}if(this.hour===23){this.hour=0;return}this.hour++;this.update()},incrementMinute:function(g){var f;if(g){f=this.minute+g}else{f=this.minute+this.minuteStep-(this.minute%this.minuteStep)}if(f>59){this.incrementHour();this.minute=f-60}else{this.minute=f}this.update()},incrementSecond:function(){var f=this.second+this.secondStep-(this.second%this.secondStep);if(f>59){this.incrementMinute(true);this.second=f-60}else{this.second=f}this.update()},remove:function(){d("document").off(".timepicker");if(this.$widget){this.$widget.remove()}delete this.$element.data().timepicker},setDefaultTime:function(h){if(!this.$element.val()){if(h==="current"){var f=new Date(),g=f.getHours(),j=Math.floor(f.getMinutes()/this.minuteStep)*this.minuteStep,k=Math.floor(f.getSeconds()/this.secondStep)*this.secondStep,i="AM";if(this.showMeridian){if(g===0){g=12}else{if(g>=12){if(g>12){g=g-12}i="PM"}else{i="AM"}}}this.hour=g;this.minute=j;this.second=k;this.meridian=i;this.update()}else{if(h===false){this.hour=0;this.minute=0;this.second=0;this.meridian="AM"}else{this.setTime(h)}}}else{this.updateFromElementVal()}},setTime:function(h){var f,g;if(this.showMeridian){f=h.split(" ");g=f[0].split(":");this.meridian=f[1]}else{g=h.split(":")}this.hour=parseInt(g[0],10);this.minute=parseInt(g[1],10);this.second=parseInt(g[2],10);if(isNaN(this.hour)){this.hour=0}if(isNaN(this.minute)){this.minute=0}if(this.showMeridian){if(this.hour>12){this.hour=12}else{if(this.hour<1){this.hour=12}}if(this.meridian==="am"||this.meridian==="a"){this.meridian="AM"}else{if(this.meridian==="pm"||this.meridian==="p"){this.meridian="PM"}}if(this.meridian!=="AM"&&this.meridian!=="PM"){this.meridian="AM"}}else{if(this.hour>=24){this.hour=23}else{if(this.hour<0){this.hour=0}}}if(this.minute<0){this.minute=0}else{if(this.minute>=60){this.minute=59}}if(this.showSeconds){if(isNaN(this.second)){this.second=0}else{if(this.second<0){this.second=0}else{if(this.second>=60){this.second=59}}}}this.update()},showWidget:function(){if(this.isOpen){return}if(this.$element.is(":disabled")){return}var f=this;d(a).on("mousedown.timepicker",function(g){if(d(g.target).closest(".bootstrap-timepicker-widget").length===0){f.hideWidget()}});this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}});if(this.disableFocus){this.$element.blur()}this.updateFromElementVal();if(this.template==="modal"&&this.$widget.modal){this.$widget.modal("show").on("hidden",d.proxy(this.hideWidget,this))}else{if(this.isOpen===false){this.$widget.addClass("open")}}this.isOpen=true},toggleMeridian:function(){this.meridian=this.meridian==="AM"?"PM":"AM";this.update()},update:function(){this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}});this.updateElement();this.updateWidget()},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){var f=this.$element.val();if(f){this.setTime(f)}},updateWidget:function(){if(this.$widget===false){return}var f=this.hour<10?"0"+this.hour:this.hour,h=this.minute<10?"0"+this.minute:this.minute,g=this.second<10?"0"+this.second:this.second;if(this.showInputs){this.$widget.find("input.bootstrap-timepicker-hour").val(f);this.$widget.find("input.bootstrap-timepicker-minute").val(h);if(this.showSeconds){this.$widget.find("input.bootstrap-timepicker-second").val(g)}if(this.showMeridian){this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)}}else{this.$widget.find("span.bootstrap-timepicker-hour").text(f);this.$widget.find("span.bootstrap-timepicker-minute").text(h);if(this.showSeconds){this.$widget.find("span.bootstrap-timepicker-second").text(g)}if(this.showMeridian){this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian)}}},updateFromWidgetInputs:function(){if(this.$widget===false){return}var f=d("input.bootstrap-timepicker-hour",this.$widget).val()+":"+d("input.bootstrap-timepicker-minute",this.$widget).val()+(this.showSeconds?":"+d("input.bootstrap-timepicker-second",this.$widget).val():"")+(this.showMeridian?" "+d("input.bootstrap-timepicker-meridian",this.$widget).val():"");this.setTime(f)},widgetClick:function(g){g.stopPropagation();g.preventDefault();var f=d(g.target).closest("a").data("action");if(f){this[f]()}},widgetKeydown:function(g){var h=d(g.target).closest("input"),f=h.attr("name");switch(g.keyCode){case 9:if(this.showMeridian){if(f==="meridian"){return this.hideWidget()}}else{if(this.showSeconds){if(f==="second"){return this.hideWidget()}}else{if(f==="minute"){return this.hideWidget()}}}this.updateFromWidgetInputs();break;case 27:this.hideWidget();break;case 38:g.preventDefault();switch(f){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian();break}break;case 40:g.preventDefault();switch(f){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian();break}break}}};d.fn.timepicker=function(g){var f=Array.apply(null,arguments);f.shift();return this.each(function(){var j=d(this),i=j.data("timepicker"),h=typeof g==="object"&&g;if(!i){j.data("timepicker",(i=new b(this,d.extend({},d.fn.timepicker.defaults,h,d(this).data()))))}if(typeof g==="string"){i[g].apply(i,f)}})};d.fn.timepicker.defaults={defaultTime:"current",disableFocus:false,isOpen:false,minuteStep:15,modalBackdrop:false,secondStep:15,showSeconds:false,showInputs:true,showMeridian:true,template:"dropdown",appendWidgetTo:".bootstrap-timepicker"};d.fn.timepicker.Constructor=b})(jQuery,window,document);!function(d){function f(){return new Date(Date.UTC.apply(Date,arguments))}function b(){var g=new Date();return f(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate())}var a=function(h,g){var i=this;this.element=d(h);this.language=g.language||this.element.data("date-language")||"en";this.language=this.language in e?this.language:this.language.split("-")[0];this.language=this.language in e?this.language:"en";this.isRTL=e[this.language].rtl||false;this.format=c.parseFormat(g.format||this.element.data("date-format")||e[this.language].format||"mm/dd/yyyy");this.isInline=false;this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on, .btn"):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.forceParse=true;if("forceParse" in g){this.forceParse=g.forceParse}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse")}}this.picker=d(c.template);this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element)}else{this.picker.addClass("datepicker-dropdown dropdown-menu")}if(this.isRTL){this.picker.addClass("datepicker-rtl");this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")}this.autoclose=false;if("autoclose" in g){this.autoclose=g.autoclose}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")}}this.keyboardNavigation=true;if("keyboardNavigation" in g){this.keyboardNavigation=g.keyboardNavigation}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")}}this.viewMode=this.startViewMode=0;switch(g.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;break;case 1:case"year":this.viewMode=this.startViewMode=1;break}this.minViewMode=g.minViewMode||this.element.data("date-min-view-mode")||0;if(typeof this.minViewMode==="string"){switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0;break}}this.viewMode=this.startViewMode=Math.max(this.startViewMode,this.minViewMode);this.todayBtn=(g.todayBtn||this.element.data("date-today-btn")||false);this.todayHighlight=(g.todayHighlight||this.element.data("date-today-highlight")||false);this.calendarWeeks=false;if("calendarWeeks" in g){this.calendarWeeks=g.calendarWeeks}else{if("dateCalendarWeeks" in this.element.data()){this.calendarWeeks=this.element.data("date-calendar-weeks")}}if(this.calendarWeeks){this.picker.find("tfoot th.today").attr("colspan",function(j,k){return parseInt(k)+1})}this._allow_update=false;this.weekStart=((g.weekStart||this.element.data("date-weekstart")||e[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.daysOfWeekDisabled=[];this.setStartDate(g.startDate||this.element.data("date-startdate"));this.setEndDate(g.endDate||this.element.data("date-enddate"));this.setDaysOfWeekDisabled(g.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show()}};a.prototype={constructor:a,_events:[],_secondaryEvents:[],_applyEvents:function(g){for(var h=0,j,k;h<g.length;h++){j=g[h][0];k=g[h][1];j.on(k)}},_unapplyEvents:function(g){for(var h=0,j,k;h<g.length;h++){j=g[h][0];k=g[h][1];j.off(k)}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:d.proxy(this.show,this),keyup:d.proxy(this.update,this),keydown:d.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:d.proxy(this.show,this),keyup:d.proxy(this.update,this),keydown:d.proxy(this.keydown,this)}],[this.component,{click:d.proxy(this.show,this)}]]}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:d.proxy(this.show,this)}]]}}}this._secondaryEvents=[[this.picker,{click:d.proxy(this.click,this)}],[d(window),{resize:d.proxy(this.place,this)}],[d(document),{mousedown:d.proxy(function(g){if(d(g.target).closest(".datepicker.datepicker-inline, .datepicker.datepicker-dropdown").length===0){this.hide()}},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},show:function(g){if(!this.isInline){this.picker.appendTo("body")}this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();this._attachSecondaryEvents();if(g){g.preventDefault()}this.element.trigger({type:"show",date:this.date})},hide:function(g){if(this.isInline){return}if(!this.picker.is(":visible")){return}this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.startViewMode;this.showMode();if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this.element.trigger({type:"hide",date:this.date})},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date}},getDate:function(){var g=this.getUTCDate();return new Date(g.getTime()+(g.getTimezoneOffset()*60000))},getUTCDate:function(){return this.date},setDate:function(g){this.setUTCDate(new Date(g.getTime()-(g.getTimezoneOffset()*60000)))},setUTCDate:function(g){this.date=g;this.setValue()},setValue:function(){var g=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(g)}this.element.data("date",g)}else{this.element.val(g)}},getFormattedDate:function(g){if(g===undefined){g=this.format}return c.formatDate(this.date,g,this.language)},setStartDate:function(g){this.startDate=g||-Infinity;if(this.startDate!==-Infinity){this.startDate=c.parseDate(this.startDate,this.format,this.language)}this.update();this.updateNavArrows()},setEndDate:function(g){this.endDate=g||Infinity;if(this.endDate!==Infinity){this.endDate=c.parseDate(this.endDate,this.format,this.language)}this.update();this.updateNavArrows()},setDaysOfWeekDisabled:function(g){this.daysOfWeekDisabled=g||[];if(!d.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)}this.daysOfWeekDisabled=d.map(this.daysOfWeekDisabled,function(h){return parseInt(h,10)});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}var i=parseInt(this.element.parents().filter(function(){return d(this).css("z-index")!="auto"}).first().css("z-index"))+10;var h=this.component?this.component.parent().offset():this.element.offset();var g=this.component?this.component.outerHeight(true):this.element.outerHeight(true);this.picker.css({top:h.top+g,left:h.left,zIndex:i})},_allow_update:true,update:function(){if(!this._allow_update){return}var g,h=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){g=arguments[0];h=true}else{g=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val()}this.date=c.parseDate(g,this.format,this.language);if(h){this.setValue()}if(this.date<this.startDate){this.viewDate=new Date(this.startDate)}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)}else{this.viewDate=new Date(this.date)}}this.fill()},fillDow:function(){var h=this.weekStart,i="<tr>";if(this.calendarWeeks){var g='<th class="cw">&nbsp;</th>';i+=g;this.picker.find(".datepicker-days thead tr:first-child").prepend(g)}while(h<this.weekStart+7){i+='<th class="dow">'+e[this.language].daysMin[(h++)%7]+"</th>"}i+="</tr>";this.picker.find(".datepicker-days thead").append(i)},fillMonths:function(){var h="",g=0;while(g<12){h+='<span class="month">'+e[this.language].monthsShort[g++]+"</span>"}this.picker.find(".datepicker-months td").html(h)},fill:function(){var y=new Date(this.viewDate),p=y.getUTCFullYear(),z=y.getUTCMonth(),s=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,w=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,m=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,t=this.endDate!==Infinity?this.endDate.getUTCMonth():Infinity,n=this.date&&this.date.valueOf(),x=new Date();this.picker.find(".datepicker-days thead th.switch").text(e[this.language].months[z]+" "+p);this.picker.find("tfoot th.today").text(e[this.language].today).toggle(this.todayBtn!==false);this.updateNavArrows();this.fillMonths();var B=f(p,z-1,28,0,0,0,0),v=c.getDaysInMonth(B.getUTCFullYear(),B.getUTCMonth());B.setUTCDate(v);B.setUTCDate(v-(B.getUTCDay()-this.weekStart+7)%7);var g=new Date(B);g.setUTCDate(g.getUTCDate()+42);g=g.valueOf();var o=[];var r;while(B.valueOf()<g){if(B.getUTCDay()==this.weekStart){o.push("<tr>");if(this.calendarWeeks){var h=new Date(+B+(this.weekStart-B.getUTCDay()-7)%7*86400000),k=new Date(+h+(7+4-h.getUTCDay())%7*86400000),j=new Date(+(j=f(k.getUTCFullYear(),0,1))+(7+4-j.getUTCDay())%7*86400000),q=(k-j)/86400000/7+1;o.push('<td class="cw">'+q+"</td>")}}r="";if(B.getUTCFullYear()<p||(B.getUTCFullYear()==p&&B.getUTCMonth()<z)){r+=" old"}else{if(B.getUTCFullYear()>p||(B.getUTCFullYear()==p&&B.getUTCMonth()>z)){r+=" new"}}if(this.todayHighlight&&B.getUTCFullYear()==x.getFullYear()&&B.getUTCMonth()==x.getMonth()&&B.getUTCDate()==x.getDate()){r+=" today"}if(n&&B.valueOf()==n){r+=" active"}if(B.valueOf()<this.startDate||B.valueOf()>this.endDate||d.inArray(B.getUTCDay(),this.daysOfWeekDisabled)!==-1){r+=" disabled"}o.push('<td class="day'+r+'">'+B.getUTCDate()+"</td>");if(B.getUTCDay()==this.weekEnd){o.push("</tr>")}B.setUTCDate(B.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(o.join(""));var C=this.date&&this.date.getUTCFullYear();var l=this.picker.find(".datepicker-months").find("th:eq(1)").text(p).end().find("span").removeClass("active");if(C&&C==p){l.eq(this.date.getUTCMonth()).addClass("active")}if(p<s||p>m){l.addClass("disabled")}if(p==s){l.slice(0,w).addClass("disabled")}if(p==m){l.slice(t+1).addClass("disabled")}o="";p=parseInt(p/10,10)*10;var A=this.picker.find(".datepicker-years").find("th:eq(1)").text(p+"-"+(p+9)).end().find("td");p-=1;for(var u=-1;u<11;u++){o+='<span class="year'+(u==-1||u==10?" old":"")+(C==p?" active":"")+(p<s||p>m?" disabled":"")+'">'+p+"</span>";p+=1}A.html(o)},updateNavArrows:function(){if(!this._allow_update){return}var i=new Date(this.viewDate),g=i.getUTCFullYear(),h=i.getUTCMonth();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&g<=this.startDate.getUTCFullYear()&&h<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&g>=this.endDate.getUTCFullYear()&&h>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:case 2:if(this.startDate!==-Infinity&&g<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&g>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},click:function(m){m.preventDefault();var l=d(m.target).closest("span, td, th");if(l.length==1){switch(l[0].nodeName.toLowerCase()){case"th":switch(l[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var i=c.modes[this.viewMode].navStep*(l[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,i);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,i);break}this.fill();break;case"today":var h=new Date();h=f(h.getFullYear(),h.getMonth(),h.getDate(),0,0,0);this.showMode(-2);var n=this.todayBtn=="linked"?null:"view";this._setDate(h,n);break}break;case"span":if(!l.is(".disabled")){this.viewDate.setUTCDate(1);if(l.is(".month")){var g=1;var k=l.parent().find("span").index(l);var j=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(k);this.element.trigger({type:"changeMonth",date:this.viewDate});if(this.minViewMode==1){this._setDate(f(j,k,g,0,0,0,0))}}else{var j=parseInt(l.text(),10)||0;var g=1;var k=0;this.viewDate.setUTCFullYear(j);this.element.trigger({type:"changeYear",date:this.viewDate});if(this.minViewMode==2){this._setDate(f(j,k,g,0,0,0,0))}}this.showMode(-1);this.fill()}break;case"td":if(l.is(".day")&&!l.is(".disabled")){var g=parseInt(l.text(),10)||1;var j=this.viewDate.getUTCFullYear(),k=this.viewDate.getUTCMonth();if(l.is(".old")){if(k===0){k=11;j-=1}else{k-=1}}else{if(l.is(".new")){if(k==11){k=0;j+=1}else{k+=1}}}this._setDate(f(j,k,g,0,0,0,0))}break}}},_setDate:function(g,i){if(!i||i=="date"){this.date=g}if(!i||i=="view"){this.viewDate=g}this.fill();this.setValue();this.element.trigger({type:"changeDate",date:this.date});var h;if(this.isInput){h=this.element}else{if(this.component){h=this.element.find("input")}}if(h){h.change();if(this.autoclose&&(!i||i=="date")){this.hide()}}},moveMonth:function(g,h){if(!h){return g}var l=new Date(g.valueOf()),p=l.getUTCDate(),m=l.getUTCMonth(),k=Math.abs(h),o,n;h=h>0?1:-1;if(k==1){n=h==-1?function(){return l.getUTCMonth()==m}:function(){return l.getUTCMonth()!=o};o=m+h;l.setUTCMonth(o);if(o<0||o>11){o=(o+12)%12}}else{for(var j=0;j<k;j++){l=this.moveMonth(l,h)}o=l.getUTCMonth();l.setUTCDate(p);n=function(){return o!=l.getUTCMonth()}}while(n()){l.setUTCDate(--p);l.setUTCMonth(o)}return l},moveYear:function(h,g){return this.moveMonth(h,g*12)},dateWithinRange:function(g){return g>=this.startDate&&g<=this.endDate},keydown:function(n){if(this.picker.is(":not(:visible)")){if(n.keyCode==27){this.show()}return}var j=false,i,h,m,g,l;switch(n.keyCode){case 27:this.hide();n.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation){break}i=n.keyCode==37?-1:1;if(n.ctrlKey){g=this.moveYear(this.date,i);l=this.moveYear(this.viewDate,i)}else{if(n.shiftKey){g=this.moveMonth(this.date,i);l=this.moveMonth(this.viewDate,i)}else{g=new Date(this.date);g.setUTCDate(this.date.getUTCDate()+i);l=new Date(this.viewDate);l.setUTCDate(this.viewDate.getUTCDate()+i)}}if(this.dateWithinRange(g)){this.date=g;this.viewDate=l;this.setValue();this.update();n.preventDefault();j=true}break;case 38:case 40:if(!this.keyboardNavigation){break}i=n.keyCode==38?-1:1;if(n.ctrlKey){g=this.moveYear(this.date,i);l=this.moveYear(this.viewDate,i)}else{if(n.shiftKey){g=this.moveMonth(this.date,i);l=this.moveMonth(this.viewDate,i)}else{g=new Date(this.date);g.setUTCDate(this.date.getUTCDate()+i*7);l=new Date(this.viewDate);l.setUTCDate(this.viewDate.getUTCDate()+i*7)}}if(this.dateWithinRange(g)){this.date=g;this.viewDate=l;this.setValue();this.update();n.preventDefault();j=true}break;case 13:this.hide();n.preventDefault();break;case 9:this.hide();break}if(j){this.element.trigger({type:"changeDate",date:this.date});var k;if(this.isInput){k=this.element}else{if(this.component){k=this.element.find("input")}}if(k){k.change()}}},showMode:function(g){if(g){this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+g))}this.picker.find(">div").hide().filter(".datepicker-"+c.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()}};d.fn.datepicker=function(h){var g=Array.apply(null,arguments);g.shift();return this.each(function(){var k=d(this),j=k.data("datepicker"),i=typeof h=="object"&&h;if(!j){k.data("datepicker",(j=new a(this,d.extend({},d.fn.datepicker.defaults,i))))}if(typeof h=="string"&&typeof j[h]=="function"){j[h].apply(j,g)}})};d.fn.datepicker.defaults={};d.fn.datepicker.Constructor=a;var e=d.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"}};var c={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(g){return(((g%4===0)&&(g%100!==0))||(g%400===0))},getDaysInMonth:function(g,h){return[31,(c.isLeapYear(g)?29:28),31,30,31,30,31,31,30,31,30,31][h]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(i){var g=i.replace(this.validParts,"\0").split("\0"),h=i.match(this.validParts);if(!g||!g.length||!h||h.length===0){throw new Error("Invalid date format.")}return{separators:g,parts:h}},parseDate:function(k,u,n){if(k instanceof Date){return k}if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(k)){var w=/([\-+]\d+)([dmwy])/,m=k.match(/([\-+]\d+)([dmwy])/g),g,l;k=new Date();for(var o=0;o<m.length;o++){g=w.exec(m[o]);l=parseInt(g[1]);switch(g[2]){case"d":k.setUTCDate(k.getUTCDate()+l);break;case"m":k=a.prototype.moveMonth.call(a.prototype,k,l);break;case"w":k.setUTCDate(k.getUTCDate()+l*7);break;case"y":k=a.prototype.moveYear.call(a.prototype,k,l);break}}return f(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate(),0,0,0)}var m=k&&k.match(this.nonpunctuation)||[],k=new Date(),r={},t=["yyyy","yy","M","MM","m","mm","d","dd"],v={yyyy:function(s,i){return s.setUTCFullYear(i)},yy:function(s,i){return s.setUTCFullYear(2000+i)},m:function(s,i){i-=1;while(i<0){i+=12}i%=12;s.setUTCMonth(i);while(s.getUTCMonth()!=i){s.setUTCDate(s.getUTCDate()-1)}return s},d:function(s,i){return s.setUTCDate(i)}},j,p,g;v.M=v.MM=v.mm=v.m;v.dd=v.d;k=f(k.getFullYear(),k.getMonth(),k.getDate(),0,0,0);var q=u.parts.slice();if(m.length!=q.length){q=d(q).filter(function(s,y){return d.inArray(y,t)!==-1}).toArray()}if(m.length==q.length){for(var o=0,h=q.length;o<h;o++){j=parseInt(m[o],10);g=q[o];if(isNaN(j)){switch(g){case"MM":p=d(e[n].months).filter(function(){var i=this.slice(0,m[o].length),s=m[o].slice(0,i.length);return i==s});j=d.inArray(p[0],e[n].months)+1;break;case"M":p=d(e[n].monthsShort).filter(function(){var i=this.slice(0,m[o].length),s=m[o].slice(0,i.length);return i==s});j=d.inArray(p[0],e[n].monthsShort)+1;break}}r[g]=j}for(var o=0,x;o<t.length;o++){x=t[o];if(x in r&&!isNaN(r[x])){v[x](k,r[x])}}}return k},formatDate:function(g,l,n){var m={d:g.getUTCDate(),D:e[n].daysShort[g.getUTCDay()],DD:e[n].days[g.getUTCDay()],m:g.getUTCMonth()+1,M:e[n].monthsShort[g.getUTCMonth()],MM:e[n].months[g.getUTCMonth()],yy:g.getUTCFullYear().toString().substring(2),yyyy:g.getUTCFullYear()};m.dd=(m.d<10?"0":"")+m.d;m.mm=(m.m<10?"0":"")+m.m;var g=[],k=d.extend([],l.separators);for(var j=0,h=l.parts.length;j<h;j++){if(k.length){g.push(k.shift())}g.push(m[l.parts[j]])}return g.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};c.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+c.headTemplate+"<tbody></tbody>"+c.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+c.headTemplate+c.contTemplate+c.footTemplate+"</table></div></div>";d.fn.datepicker.DPGlobal=c}(window.jQuery);/**
 * @license AngularJS v1.1.5
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, document, undefined) {
'use strict';

////////////////////////////////////

/**
 * @ngdoc function
 * @name angular.lowercase
 * @function
 *
 * @description Converts the specified string to lowercase.
 * @param {string} string String to be converted to lowercase.
 * @returns {string} Lowercased string.
 */
var lowercase = function(string){return isString(string) ? string.toLowerCase() : string;};


/**
 * @ngdoc function
 * @name angular.uppercase
 * @function
 *
 * @description Converts the specified string to uppercase.
 * @param {string} string String to be converted to uppercase.
 * @returns {string} Uppercased string.
 */
var uppercase = function(string){return isString(string) ? string.toUpperCase() : string;};


var manualLowercase = function(s) {
  return isString(s)
      ? s.replace(/[A-Z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) | 32);})
      : s;
};
var manualUppercase = function(s) {
  return isString(s)
      ? s.replace(/[a-z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) & ~32);})
      : s;
};


// String#toLowerCase and String#toUpperCase don't produce correct results in browsers with Turkish
// locale, for this reason we need to detect this case and redefine lowercase/uppercase methods
// with correct but slower alternatives.
if ('i' !== 'I'.toLowerCase()) {
  lowercase = manualLowercase;
  uppercase = manualUppercase;
}


var /** holds major version number for IE or NaN for real browsers */
    msie              = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]),
    jqLite,           // delay binding since jQuery could be loaded after us.
    jQuery,           // delay binding
    slice             = [].slice,
    push              = [].push,
    toString          = Object.prototype.toString,


    _angular          = window.angular,
    /** @name angular */
    angular           = window.angular || (window.angular = {}),
    angularModule,
    nodeName_,
    uid               = ['0', '0', '0'];

/**
 * @ngdoc function
 * @name angular.noConflict
 * @function
 *
 * @description
 * Restores the previous global value of angular and returns the current instance. Other libraries may already use the
 * angular namespace. Or a previous version of angular is already loaded on the page. In these cases you may want to
 * restore the previous namespace and keep a reference to angular.
 *
 * @return {Object} The current angular namespace
 */
function noConflict() {
  var a = window.angular;
  window.angular = _angular;
  return a;
}

/**
 * @private
 * @param {*} obj
 * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments, ...)
 */
function isArrayLike(obj) {
  if (!obj || (typeof obj.length !== 'number')) return false;

  // We have on object which has length property. Should we treat it as array?
  if (typeof obj.hasOwnProperty != 'function' &&
      typeof obj.constructor != 'function') {
    // This is here for IE8: it is a bogus object treat it as array;
    return true;
  } else  {
    return obj instanceof JQLite ||                      // JQLite
           (jQuery && obj instanceof jQuery) ||          // jQuery
           toString.call(obj) !== '[object Object]' ||   // some browser native object
           typeof obj.callee === 'function';              // arguments (on IE8 looks like regular obj)
  }
}

/**
 * @ngdoc function
 * @name angular.forEach
 * @function
 *
 * @description
 * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
 * object or an array. The `iterator` function is invoked with `iterator(value, key)`, where `value`
 * is the value of an object property or an array element and `key` is the object property key or
 * array element index. Specifying a `context` for the function is optional.
 *
 * Note: this function was previously known as `angular.foreach`.
 *
   <pre>
     var values = {name: 'misko', gender: 'male'};
     var log = [];
     angular.forEach(values, function(value, key){
       this.push(key + ': ' + value);
     }, log);
     expect(log).toEqual(['name: misko', 'gender:male']);
   </pre>
 *
 * @param {Object|Array} obj Object to iterate over.
 * @param {Function} iterator Iterator function.
 * @param {Object=} context Object to become context (`this`) for the iterator function.
 * @returns {Object|Array} Reference to `obj`.
 */
function forEach(obj, iterator, context) {
  var key;
  if (obj) {
    if (isFunction(obj)){
      for (key in obj) {
        if (key != 'prototype' && key != 'length' && key != 'name' && obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context);
    } else if (isArrayLike(obj)) {
      for (key = 0; key < obj.length; key++)
        iterator.call(context, obj[key], key);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key);
        }
      }
    }
  }
  return obj;
}

function sortedKeys(obj) {
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.sort();
}

function forEachSorted(obj, iterator, context) {
  var keys = sortedKeys(obj);
  for ( var i = 0; i < keys.length; i++) {
    iterator.call(context, obj[keys[i]], keys[i]);
  }
  return keys;
}


/**
 * when using forEach the params are value, key, but it is often useful to have key, value.
 * @param {function(string, *)} iteratorFn
 * @returns {function(*, string)}
 */
function reverseParams(iteratorFn) {
  return function(value, key) { iteratorFn(key, value) };
}

/**
 * A consistent way of creating unique IDs in angular. The ID is a sequence of alpha numeric
 * characters such as '012ABC'. The reason why we are not using simply a number counter is that
 * the number string gets longer over time, and it can also overflow, where as the nextId
 * will grow much slower, it is a string, and it will never overflow.
 *
 * @returns an unique alpha-numeric string
 */
function nextUid() {
  var index = uid.length;
  var digit;

  while(index) {
    index--;
    digit = uid[index].charCodeAt(0);
    if (digit == 57 /*'9'*/) {
      uid[index] = 'A';
      return uid.join('');
    }
    if (digit == 90  /*'Z'*/) {
      uid[index] = '0';
    } else {
      uid[index] = String.fromCharCode(digit + 1);
      return uid.join('');
    }
  }
  uid.unshift('0');
  return uid.join('');
}


/**
 * Set or clear the hashkey for an object.
 * @param obj object 
 * @param h the hashkey (!truthy to delete the hashkey)
 */
function setHashKey(obj, h) {
  if (h) {
    obj.$$hashKey = h;
  }
  else {
    delete obj.$$hashKey;
  }
}

/**
 * @ngdoc function
 * @name angular.extend
 * @function
 *
 * @description
 * Extends the destination object `dst` by copying all of the properties from the `src` object(s)
 * to `dst`. You can specify multiple `src` objects.
 *
 * @param {Object} dst Destination object.
 * @param {...Object} src Source object(s).
 * @returns {Object} Reference to `dst`.
 */
function extend(dst) {
  var h = dst.$$hashKey;
  forEach(arguments, function(obj){
    if (obj !== dst) {
      forEach(obj, function(value, key){
        dst[key] = value;
      });
    }
  });

  setHashKey(dst,h);
  return dst;
}

function int(str) {
  return parseInt(str, 10);
}


function inherit(parent, extra) {
  return extend(new (extend(function() {}, {prototype:parent}))(), extra);
}

var START_SPACE = /^\s*/;
var END_SPACE = /\s*$/;
function stripWhitespace(str) {
  return isString(str) ? str.replace(START_SPACE, '').replace(END_SPACE, '') : str;
}

/**
 * @ngdoc function
 * @name angular.noop
 * @function
 *
 * @description
 * A function that performs no operations. This function can be useful when writing code in the
 * functional style.
   <pre>
     function foo(callback) {
       var result = calculateResult();
       (callback || angular.noop)(result);
     }
   </pre>
 */
function noop() {}
noop.$inject = [];


/**
 * @ngdoc function
 * @name angular.identity
 * @function
 *
 * @description
 * A function that returns its first argument. This function is useful when writing code in the
 * functional style.
 *
   <pre>
     function transformer(transformationFn, value) {
       return (transformationFn || identity)(value);
     };
   </pre>
 */
function identity($) {return $;}
identity.$inject = [];


function valueFn(value) {return function() {return value;};}

/**
 * @ngdoc function
 * @name angular.isUndefined
 * @function
 *
 * @description
 * Determines if a reference is undefined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is undefined.
 */
function isUndefined(value){return typeof value == 'undefined';}


/**
 * @ngdoc function
 * @name angular.isDefined
 * @function
 *
 * @description
 * Determines if a reference is defined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is defined.
 */
function isDefined(value){return typeof value != 'undefined';}


/**
 * @ngdoc function
 * @name angular.isObject
 * @function
 *
 * @description
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Object` but not `null`.
 */
function isObject(value){return value != null && typeof value == 'object';}


/**
 * @ngdoc function
 * @name angular.isString
 * @function
 *
 * @description
 * Determines if a reference is a `String`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `String`.
 */
function isString(value){return typeof value == 'string';}


/**
 * @ngdoc function
 * @name angular.isNumber
 * @function
 *
 * @description
 * Determines if a reference is a `Number`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Number`.
 */
function isNumber(value){return typeof value == 'number';}


/**
 * @ngdoc function
 * @name angular.isDate
 * @function
 *
 * @description
 * Determines if a value is a date.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Date`.
 */
function isDate(value){
  return toString.apply(value) == '[object Date]';
}


/**
 * @ngdoc function
 * @name angular.isArray
 * @function
 *
 * @description
 * Determines if a reference is an `Array`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Array`.
 */
function isArray(value) {
  return toString.apply(value) == '[object Array]';
}


/**
 * @ngdoc function
 * @name angular.isFunction
 * @function
 *
 * @description
 * Determines if a reference is a `Function`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Function`.
 */
function isFunction(value){return typeof value == 'function';}


/**
 * Checks if `obj` is a window object.
 *
 * @private
 * @param {*} obj Object to check
 * @returns {boolean} True if `obj` is a window obj.
 */
function isWindow(obj) {
  return obj && obj.document && obj.location && obj.alert && obj.setInterval;
}


function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}


function isFile(obj) {
  return toString.apply(obj) === '[object File]';
}


function isBoolean(value) {
  return typeof value == 'boolean';
}


function trim(value) {
  return isString(value) ? value.replace(/^\s*/, '').replace(/\s*$/, '') : value;
}

/**
 * @ngdoc function
 * @name angular.isElement
 * @function
 *
 * @description
 * Determines if a reference is a DOM element (or wrapped jQuery element).
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a DOM element (or wrapped jQuery element).
 */
function isElement(node) {
  return node &&
    (node.nodeName  // we are a direct element
    || (node.bind && node.find));  // we have a bind and find method part of jQuery API
}

/**
 * @param str 'key1,key2,...'
 * @returns {object} in the form of {key1:true, key2:true, ...}
 */
function makeMap(str){
  var obj = {}, items = str.split(","), i;
  for ( i = 0; i < items.length; i++ )
    obj[ items[i] ] = true;
  return obj;
}


if (msie < 9) {
  nodeName_ = function(element) {
    element = element.nodeName ? element : element[0];
    return (element.scopeName && element.scopeName != 'HTML')
      ? uppercase(element.scopeName + ':' + element.nodeName) : element.nodeName;
  };
} else {
  nodeName_ = function(element) {
    return element.nodeName ? element.nodeName : element[0].nodeName;
  };
}


function map(obj, iterator, context) {
  var results = [];
  forEach(obj, function(value, index, list) {
    results.push(iterator.call(context, value, index, list));
  });
  return results;
}


/**
 * @description
 * Determines the number of elements in an array, the number of properties an object has, or
 * the length of a string.
 *
 * Note: This function is used to augment the Object type in Angular expressions. See
 * {@link angular.Object} for more information about Angular arrays.
 *
 * @param {Object|Array|string} obj Object, array, or string to inspect.
 * @param {boolean} [ownPropsOnly=false] Count only "own" properties in an object
 * @returns {number} The size of `obj` or `0` if `obj` is neither an object nor an array.
 */
function size(obj, ownPropsOnly) {
  var size = 0, key;

  if (isArray(obj) || isString(obj)) {
    return obj.length;
  } else if (isObject(obj)){
    for (key in obj)
      if (!ownPropsOnly || obj.hasOwnProperty(key))
        size++;
  }

  return size;
}


function includes(array, obj) {
  return indexOf(array, obj) != -1;
}

function indexOf(array, obj) {
  if (array.indexOf) return array.indexOf(obj);

  for ( var i = 0; i < array.length; i++) {
    if (obj === array[i]) return i;
  }
  return -1;
}

function arrayRemove(array, value) {
  var index = indexOf(array, value);
  if (index >=0)
    array.splice(index, 1);
  return value;
}

function isLeafNode (node) {
  if (node) {
    switch (node.nodeName) {
    case "OPTION":
    case "PRE":
    case "TITLE":
      return true;
    }
  }
  return false;
}

/**
 * @ngdoc function
 * @name angular.copy
 * @function
 *
 * @description
 * Creates a deep copy of `source`, which should be an object or an array.
 *
 * * If no destination is supplied, a copy of the object or array is created.
 * * If a destination is provided, all of its elements (for array) or properties (for objects)
 *   are deleted and then all elements/properties from the source are copied to it.
 * * If  `source` is not an object or array, `source` is returned.
 *
 * Note: this function is used to augment the Object type in Angular expressions. See
 * {@link ng.$filter} for more information about Angular arrays.
 *
 * @param {*} source The source that will be used to make a copy.
 *                   Can be any type, including primitives, `null`, and `undefined`.
 * @param {(Object|Array)=} destination Destination into which the source is copied. If
 *     provided, must be of the same type as `source`.
 * @returns {*} The copy or updated `destination`, if `destination` was specified.
 */
function copy(source, destination){
  if (isWindow(source) || isScope(source)) throw Error("Can't copy Window or Scope");
  if (!destination) {
    destination = source;
    if (source) {
      if (isArray(source)) {
        destination = copy(source, []);
      } else if (isDate(source)) {
        destination = new Date(source.getTime());
      } else if (isObject(source)) {
        destination = copy(source, {});
      }
    }
  } else {
    if (source === destination) throw Error("Can't copy equivalent objects or arrays");
    if (isArray(source)) {
      destination.length = 0;
      for ( var i = 0; i < source.length; i++) {
        destination.push(copy(source[i]));
      }
    } else {
      var h = destination.$$hashKey;
      forEach(destination, function(value, key){
        delete destination[key];
      });
      for ( var key in source) {
        destination[key] = copy(source[key]);
      }
      setHashKey(destination,h);
    }
  }
  return destination;
}

/**
 * Create a shallow copy of an object
 */
function shallowCopy(src, dst) {
  dst = dst || {};

  for(var key in src) {
    if (src.hasOwnProperty(key) && key.substr(0, 2) !== '$$') {
      dst[key] = src[key];
    }
  }

  return dst;
}


/**
 * @ngdoc function
 * @name angular.equals
 * @function
 *
 * @description
 * Determines if two objects or two values are equivalent. Supports value types, arrays and
 * objects.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties pass `===` comparison.
 * * Both values are NaN. (In JavasScript, NaN == NaN => false. But we consider two NaN as equal)
 *
 * During a property comparison, properties of `function` type and properties with names
 * that begin with `$` are ignored.
 *
 * Scope and DOMWindow objects are being compared only by identify (`===`).
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
  var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
  if (t1 == t2) {
    if (t1 == 'object') {
      if (isArray(o1)) {
        if ((length = o1.length) == o2.length) {
          for(key=0; key<length; key++) {
            if (!equals(o1[key], o2[key])) return false;
          }
          return true;
        }
      } else if (isDate(o1)) {
        return isDate(o2) && o1.getTime() == o2.getTime();
      } else {
        if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2)) return false;
        keySet = {};
        for(key in o1) {
          if (key.charAt(0) === '$' || isFunction(o1[key])) continue;
          if (!equals(o1[key], o2[key])) return false;
          keySet[key] = true;
        }
        for(key in o2) {
          if (!keySet[key] &&
              key.charAt(0) !== '$' &&
              o2[key] !== undefined &&
              !isFunction(o2[key])) return false;
        }
        return true;
      }
    }
  }
  return false;
}


function concat(array1, array2, index) {
  return array1.concat(slice.call(array2, index));
}

function sliceArgs(args, startIndex) {
  return slice.call(args, startIndex || 0);
}


/**
 * @ngdoc function
 * @name angular.bind
 * @function
 *
 * @description
 * Returns a function which calls function `fn` bound to `self` (`self` becomes the `this` for
 * `fn`). You can supply optional `args` that are prebound to the function. This feature is also
 * known as [function currying](http://en.wikipedia.org/wiki/Currying).
 *
 * @param {Object} self Context which `fn` should be evaluated in.
 * @param {function()} fn Function to be bound.
 * @param {...*} args Optional arguments to be prebound to the `fn` function call.
 * @returns {function()} Function that wraps the `fn` with all the specified bindings.
 */
function bind(self, fn) {
  var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
  if (isFunction(fn) && !(fn instanceof RegExp)) {
    return curryArgs.length
      ? function() {
          return arguments.length
            ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0)))
            : fn.apply(self, curryArgs);
        }
      : function() {
          return arguments.length
            ? fn.apply(self, arguments)
            : fn.call(self);
        };
  } else {
    // in IE, native methods are not functions so they cannot be bound (note: they don't need to be)
    return fn;
  }
}


function toJsonReplacer(key, value) {
  var val = value;

  if (/^\$+/.test(key)) {
    val = undefined;
  } else if (isWindow(value)) {
    val = '$WINDOW';
  } else if (value &&  document === value) {
    val = '$DOCUMENT';
  } else if (isScope(value)) {
    val = '$SCOPE';
  }

  return val;
}


/**
 * @ngdoc function
 * @name angular.toJson
 * @function
 *
 * @description
 * Serializes input into a JSON-formatted string.
 *
 * @param {Object|Array|Date|string|number} obj Input to be serialized into JSON.
 * @param {boolean=} pretty If set to true, the JSON output will contain newlines and whitespace.
 * @returns {string} Jsonified string representing `obj`.
 */
function toJson(obj, pretty) {
  return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
}


/**
 * @ngdoc function
 * @name angular.fromJson
 * @function
 *
 * @description
 * Deserializes a JSON string.
 *
 * @param {string} json JSON string to deserialize.
 * @returns {Object|Array|Date|string|number} Deserialized thingy.
 */
function fromJson(json) {
  return isString(json)
      ? JSON.parse(json)
      : json;
}


function toBoolean(value) {
  if (value && value.length !== 0) {
    var v = lowercase("" + value);
    value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
  } else {
    value = false;
  }
  return value;
}

/**
 * @returns {string} Returns the string representation of the element.
 */
function startingTag(element) {
  element = jqLite(element).clone();
  try {
    // turns out IE does not let you set .html() on elements which
    // are not allowed to have children. So we just ignore it.
    element.html('');
  } catch(e) {}
  // As Per DOM Standards
  var TEXT_NODE = 3;
  var elemHtml = jqLite('<div>').append(element).html();
  try {
    return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) :
        elemHtml.
          match(/^(<[^>]+>)/)[1].
          replace(/^<([\w\-]+)/, function(match, nodeName) { return '<' + lowercase(nodeName); });
  } catch(e) {
    return lowercase(elemHtml);
  }

}


/////////////////////////////////////////////////

/**
 * Parses an escaped url query string into key-value pairs.
 * @returns Object.<(string|boolean)>
 */
function parseKeyValue(/**string*/keyValue) {
  var obj = {}, key_value, key;
  forEach((keyValue || "").split('&'), function(keyValue){
    if (keyValue) {
      key_value = keyValue.split('=');
      key = decodeURIComponent(key_value[0]);
      obj[key] = isDefined(key_value[1]) ? decodeURIComponent(key_value[1]) : true;
    }
  });
  return obj;
}

function toKeyValue(obj) {
  var parts = [];
  forEach(obj, function(value, key) {
    parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
  });
  return parts.length ? parts.join('&') : '';
}


/**
 * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
 * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
 * segments:
 *    segment       = *pchar
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 */
function encodeUriSegment(val) {
  return encodeUriQuery(val, true).
             replace(/%26/gi, '&').
             replace(/%3D/gi, '=').
             replace(/%2B/gi, '+');
}


/**
 * This method is intended for encoding *key* or *value* parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query       = *( pchar / "/" / "?" )
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 */
function encodeUriQuery(val, pctEncodeSpaces) {
  return encodeURIComponent(val).
             replace(/%40/gi, '@').
             replace(/%3A/gi, ':').
             replace(/%24/g, '$').
             replace(/%2C/gi, ',').
             replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}


/**
 * @ngdoc directive
 * @name ng.directive:ngApp
 *
 * @element ANY
 * @param {angular.Module} ngApp an optional application
 *   {@link angular.module module} name to load.
 *
 * @description
 *
 * Use this directive to auto-bootstrap an application. Only
 * one directive can be used per HTML document. The directive
 * designates the root of the application and is typically placed
 * at the root of the page.
 *
 * In the example below if the `ngApp` directive would not be placed
 * on the `html` element then the document would not be compiled
 * and the `{{ 1+2 }}` would not be resolved to `3`.
 *
 * `ngApp` is the easiest way to bootstrap an application.
 *
 <doc:example>
   <doc:source>
    I can add: 1 + 2 =  {{ 1+2 }}
   </doc:source>
 </doc:example>
 *
 */
function angularInit(element, bootstrap) {
  var elements = [element],
      appElement,
      module,
      names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
      NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;

  function append(element) {
    element && elements.push(element);
  }

  forEach(names, function(name) {
    names[name] = true;
    append(document.getElementById(name));
    name = name.replace(':', '\\:');
    if (element.querySelectorAll) {
      forEach(element.querySelectorAll('.' + name), append);
      forEach(element.querySelectorAll('.' + name + '\\:'), append);
      forEach(element.querySelectorAll('[' + name + ']'), append);
    }
  });

  forEach(elements, function(element) {
    if (!appElement) {
      var className = ' ' + element.className + ' ';
      var match = NG_APP_CLASS_REGEXP.exec(className);
      if (match) {
        appElement = element;
        module = (match[2] || '').replace(/\s+/g, ',');
      } else {
        forEach(element.attributes, function(attr) {
          if (!appElement && names[attr.name]) {
            appElement = element;
            module = attr.value;
          }
        });
      }
    }
  });
  if (appElement) {
    bootstrap(appElement, module ? [module] : []);
  }
}

/**
 * @ngdoc function
 * @name angular.bootstrap
 * @description
 * Use this function to manually start up angular application.
 *
 * See: {@link guide/bootstrap Bootstrap}
 *
 * @param {Element} element DOM element which is the root of angular application.
 * @param {Array<String|Function>=} modules an array of module declarations. See: {@link angular.module modules}
 * @returns {AUTO.$injector} Returns the newly created injector for this app.
 */
function bootstrap(element, modules) {
  var resumeBootstrapInternal = function() {
    element = jqLite(element);
    modules = modules || [];
    modules.unshift(['$provide', function($provide) {
      $provide.value('$rootElement', element);
    }]);
    modules.unshift('ng');
    var injector = createInjector(modules);
    injector.invoke(['$rootScope', '$rootElement', '$compile', '$injector', '$animator',
       function(scope, element, compile, injector, animator) {
        scope.$apply(function() {
          element.data('$injector', injector);
          compile(element)(scope);
        });
        animator.enabled(true);
      }]
    );
    return injector;
  };

  var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;

  if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
    return resumeBootstrapInternal();
  }

  window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
  angular.resumeBootstrap = function(extraModules) {
    forEach(extraModules, function(module) {
      modules.push(module);
    });
    resumeBootstrapInternal();
  };
}

var SNAKE_CASE_REGEXP = /[A-Z]/g;
function snake_case(name, separator){
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function bindJQuery() {
  // bind to jQuery if present;
  jQuery = window.jQuery;
  // reset to jQuery or default to us.
  if (jQuery) {
    jqLite = jQuery;
    extend(jQuery.fn, {
      scope: JQLitePrototype.scope,
      controller: JQLitePrototype.controller,
      injector: JQLitePrototype.injector,
      inheritedData: JQLitePrototype.inheritedData
    });
    JQLitePatchJQueryRemove('remove', true);
    JQLitePatchJQueryRemove('empty');
    JQLitePatchJQueryRemove('html');
  } else {
    jqLite = JQLite;
  }
  angular.element = jqLite;
}

/**
 * throw error if the argument is falsy.
 */
function assertArg(arg, name, reason) {
  if (!arg) {
    throw new Error("Argument '" + (name || '?') + "' is " + (reason || "required"));
  }
  return arg;
}

function assertArgFn(arg, name, acceptArrayAnnotation) {
  if (acceptArrayAnnotation && isArray(arg)) {
      arg = arg[arg.length - 1];
  }

  assertArg(isFunction(arg), name, 'not a function, got ' +
      (arg && typeof arg == 'object' ? arg.constructor.name || 'Object' : typeof arg));
  return arg;
}

/**
 * @ngdoc interface
 * @name angular.Module
 * @description
 *
 * Interface for configuring angular {@link angular.module modules}.
 */

function setupModuleLoader(window) {

  function ensure(obj, name, factory) {
    return obj[name] || (obj[name] = factory());
  }

  return ensure(ensure(window, 'angular', Object), 'module', function() {
    /** @type {Object.<string, angular.Module>} */
    var modules = {};

    /**
     * @ngdoc function
     * @name angular.module
     * @description
     *
     * The `angular.module` is a global place for creating and registering Angular modules. All
     * modules (angular core or 3rd party) that should be available to an application must be
     * registered using this mechanism.
     *
     *
     * # Module
     *
     * A module is a collocation of services, directives, filters, and configuration information. Module
     * is used to configure the {@link AUTO.$injector $injector}.
     *
     * <pre>
     * // Create a new module
     * var myModule = angular.module('myModule', []);
     *
     * // register a new service
     * myModule.value('appName', 'MyCoolApp');
     *
     * // configure existing services inside initialization blocks.
     * myModule.config(function($locationProvider) {
     *   // Configure existing providers
     *   $locationProvider.hashPrefix('!');
     * });
     * </pre>
     *
     * Then you can create an injector and load your modules like this:
     *
     * <pre>
     * var injector = angular.injector(['ng', 'MyModule'])
     * </pre>
     *
     * However it's more likely that you'll just use
     * {@link ng.directive:ngApp ngApp} or
     * {@link angular.bootstrap} to simplify this process for you.
     *
     * @param {!string} name The name of the module to create or retrieve.
     * @param {Array.<string>=} requires If specified then new module is being created. If unspecified then the
     *        the module is being retrieved for further configuration.
     * @param {Function} configFn Optional configuration function for the module. Same as
     *        {@link angular.Module#config Module#config()}.
     * @returns {module} new module with the {@link angular.Module} api.
     */
    return function module(name, requires, configFn) {
      if (requires && modules.hasOwnProperty(name)) {
        modules[name] = null;
      }
      return ensure(modules, name, function() {
        if (!requires) {
          throw Error('No module: ' + name);
        }

        /** @type {!Array.<Array.<*>>} */
        var invokeQueue = [];

        /** @type {!Array.<Function>} */
        var runBlocks = [];

        var config = invokeLater('$injector', 'invoke');

        /** @type {angular.Module} */
        var moduleInstance = {
          // Private state
          _invokeQueue: invokeQueue,
          _runBlocks: runBlocks,

          /**
           * @ngdoc property
           * @name angular.Module#requires
           * @propertyOf angular.Module
           * @returns {Array.<string>} List of module names which must be loaded before this module.
           * @description
           * Holds the list of modules which the injector will load before the current module is loaded.
           */
          requires: requires,

          /**
           * @ngdoc property
           * @name angular.Module#name
           * @propertyOf angular.Module
           * @returns {string} Name of the module.
           * @description
           */
          name: name,


          /**
           * @ngdoc method
           * @name angular.Module#provider
           * @methodOf angular.Module
           * @param {string} name service name
           * @param {Function} providerType Construction function for creating new instance of the service.
           * @description
           * See {@link AUTO.$provide#provider $provide.provider()}.
           */
          provider: invokeLater('$provide', 'provider'),

          /**
           * @ngdoc method
           * @name angular.Module#factory
           * @methodOf angular.Module
           * @param {string} name service name
           * @param {Function} providerFunction Function for creating new instance of the service.
           * @description
           * See {@link AUTO.$provide#factory $provide.factory()}.
           */
          factory: invokeLater('$provide', 'factory'),

          /**
           * @ngdoc method
           * @name angular.Module#service
           * @methodOf angular.Module
           * @param {string} name service name
           * @param {Function} constructor A constructor function that will be instantiated.
           * @description
           * See {@link AUTO.$provide#service $provide.service()}.
           */
          service: invokeLater('$provide', 'service'),

          /**
           * @ngdoc method
           * @name angular.Module#value
           * @methodOf angular.Module
           * @param {string} name service name
           * @param {*} object Service instance object.
           * @description
           * See {@link AUTO.$provide#value $provide.value()}.
           */
          value: invokeLater('$provide', 'value'),

          /**
           * @ngdoc method
           * @name angular.Module#constant
           * @methodOf angular.Module
           * @param {string} name constant name
           * @param {*} object Constant value.
           * @description
           * Because the constant are fixed, they get applied before other provide methods.
           * See {@link AUTO.$provide#constant $provide.constant()}.
           */
          constant: invokeLater('$provide', 'constant', 'unshift'),

          /**
           * @ngdoc method
           * @name angular.Module#animation
           * @methodOf angular.Module
           * @param {string} name animation name
           * @param {Function} animationFactory Factory function for creating new instance of an animation.
           * @description
           *
           * Defines an animation hook that can be later used with {@link ng.directive:ngAnimate ngAnimate}
           * alongside {@link ng.directive:ngAnimate#Description common ng directives} as well as custom directives.
           * <pre>
           * module.animation('animation-name', function($inject1, $inject2) {
           *   return {
           *     //this gets called in preparation to setup an animation
           *     setup : function(element) { ... },
           *
           *     //this gets called once the animation is run
           *     start : function(element, done, memo) { ... }
           *   }
           * })
           * </pre>
           *
           * See {@link ng.$animationProvider#register $animationProvider.register()} and
           * {@link ng.directive:ngAnimate ngAnimate} for more information.
           */
          animation: invokeLater('$animationProvider', 'register'),

          /**
           * @ngdoc method
           * @name angular.Module#filter
           * @methodOf angular.Module
           * @param {string} name Filter name.
           * @param {Function} filterFactory Factory function for creating new instance of filter.
           * @description
           * See {@link ng.$filterProvider#register $filterProvider.register()}.
           */
          filter: invokeLater('$filterProvider', 'register'),

          /**
           * @ngdoc method
           * @name angular.Module#controller
           * @methodOf angular.Module
           * @param {string} name Controller name.
           * @param {Function} constructor Controller constructor function.
           * @description
           * See {@link ng.$controllerProvider#register $controllerProvider.register()}.
           */
          controller: invokeLater('$controllerProvider', 'register'),

          /**
           * @ngdoc method
           * @name angular.Module#directive
           * @methodOf angular.Module
           * @param {string} name directive name
           * @param {Function} directiveFactory Factory function for creating new instance of
           * directives.
           * @description
           * See {@link ng.$compileProvider#directive $compileProvider.directive()}.
           */
          directive: invokeLater('$compileProvider', 'directive'),

          /**
           * @ngdoc method
           * @name angular.Module#config
           * @methodOf angular.Module
           * @param {Function} configFn Execute this function on module load. Useful for service
           *    configuration.
           * @description
           * Use this method to register work which needs to be performed on module loading.
           */
          config: config,

          /**
           * @ngdoc method
           * @name angular.Module#run
           * @methodOf angular.Module
           * @param {Function} initializationFn Execute this function after injector creation.
           *    Useful for application initialization.
           * @description
           * Use this method to register work which should be performed when the injector is done
           * loading all modules.
           */
          run: function(block) {
            runBlocks.push(block);
            return this;
          }
        };

        if (configFn) {
          config(configFn);
        }

        return  moduleInstance;

        /**
         * @param {string} provider
         * @param {string} method
         * @param {String=} insertMethod
         * @returns {angular.Module}
         */
        function invokeLater(provider, method, insertMethod) {
          return function() {
            invokeQueue[insertMethod || 'push']([provider, method, arguments]);
            return moduleInstance;
          }
        }
      });
    };
  });

}

/**
 * @ngdoc property
 * @name angular.version
 * @description
 * An object that contains information about the current AngularJS version. This object has the
 * following properties:
 *
 * - `full` – `{string}` – Full version string, such as "0.9.18".
 * - `major` – `{number}` – Major version number, such as "0".
 * - `minor` – `{number}` – Minor version number, such as "9".
 * - `dot` – `{number}` – Dot version number, such as "18".
 * - `codeName` – `{string}` – Code name of the release, such as "jiggling-armfat".
 */
var version = {
  full: '1.1.5',    // all of these placeholder strings will be replaced by grunt's
  major: 1,    // package task
  minor: 1,
  dot: 5,
  codeName: 'triangle-squarification'
};


function publishExternalAPI(angular){
  extend(angular, {
    'bootstrap': bootstrap,
    'copy': copy,
    'extend': extend,
    'equals': equals,
    'element': jqLite,
    'forEach': forEach,
    'injector': createInjector,
    'noop':noop,
    'bind':bind,
    'toJson': toJson,
    'fromJson': fromJson,
    'identity':identity,
    'isUndefined': isUndefined,
    'isDefined': isDefined,
    'isString': isString,
    'isFunction': isFunction,
    'isObject': isObject,
    'isNumber': isNumber,
    'isElement': isElement,
    'isArray': isArray,
    'version': version,
    'isDate': isDate,
    'lowercase': lowercase,
    'uppercase': uppercase,
    'callbacks': {counter: 0},
    'noConflict': noConflict
  });

  angularModule = setupModuleLoader(window);
  try {
    angularModule('ngLocale');
  } catch (e) {
    angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
  }

  angularModule('ng', ['ngLocale'], ['$provide',
    function ngModule($provide) {
      $provide.provider('$compile', $CompileProvider).
        directive({
            a: htmlAnchorDirective,
            input: inputDirective,
            textarea: inputDirective,
            form: formDirective,
            script: scriptDirective,
            select: selectDirective,
            style: styleDirective,
            option: optionDirective,
            ngBind: ngBindDirective,
            ngBindHtmlUnsafe: ngBindHtmlUnsafeDirective,
            ngBindTemplate: ngBindTemplateDirective,
            ngClass: ngClassDirective,
            ngClassEven: ngClassEvenDirective,
            ngClassOdd: ngClassOddDirective,
            ngCsp: ngCspDirective,
            ngCloak: ngCloakDirective,
            ngController: ngControllerDirective,
            ngForm: ngFormDirective,
            ngHide: ngHideDirective,
            ngIf: ngIfDirective,
            ngInclude: ngIncludeDirective,
            ngInit: ngInitDirective,
            ngNonBindable: ngNonBindableDirective,
            ngPluralize: ngPluralizeDirective,
            ngRepeat: ngRepeatDirective,
            ngShow: ngShowDirective,
            ngSubmit: ngSubmitDirective,
            ngStyle: ngStyleDirective,
            ngSwitch: ngSwitchDirective,
            ngSwitchWhen: ngSwitchWhenDirective,
            ngSwitchDefault: ngSwitchDefaultDirective,
            ngOptions: ngOptionsDirective,
            ngView: ngViewDirective,
            ngTransclude: ngTranscludeDirective,
            ngModel: ngModelDirective,
            ngList: ngListDirective,
            ngChange: ngChangeDirective,
            required: requiredDirective,
            ngRequired: requiredDirective,
            ngValue: ngValueDirective
        }).
        directive(ngAttributeAliasDirectives).
        directive(ngEventDirectives);
      $provide.provider({
        $anchorScroll: $AnchorScrollProvider,
        $animation: $AnimationProvider,
        $animator: $AnimatorProvider,
        $browser: $BrowserProvider,
        $cacheFactory: $CacheFactoryProvider,
        $controller: $ControllerProvider,
        $document: $DocumentProvider,
        $exceptionHandler: $ExceptionHandlerProvider,
        $filter: $FilterProvider,
        $interpolate: $InterpolateProvider,
        $http: $HttpProvider,
        $httpBackend: $HttpBackendProvider,
        $location: $LocationProvider,
        $log: $LogProvider,
        $parse: $ParseProvider,
        $route: $RouteProvider,
        $routeParams: $RouteParamsProvider,
        $rootScope: $RootScopeProvider,
        $q: $QProvider,
        $sniffer: $SnifferProvider,
        $templateCache: $TemplateCacheProvider,
        $timeout: $TimeoutProvider,
        $window: $WindowProvider
      });
    }
  ]);
}

//////////////////////////////////
//JQLite
//////////////////////////////////

/**
 * @ngdoc function
 * @name angular.element
 * @function
 *
 * @description
 * Wraps a raw DOM element or HTML string as a [jQuery](http://jquery.com) element.
 * `angular.element` can be either an alias for [jQuery](http://api.jquery.com/jQuery/) function, if
 * jQuery is available, or a function that wraps the element or string in Angular's jQuery lite
 * implementation (commonly referred to as jqLite).
 *
 * Real jQuery always takes precedence over jqLite, provided it was loaded before `DOMContentLoaded`
 * event fired.
 *
 * jqLite is a tiny, API-compatible subset of jQuery that allows
 * Angular to manipulate the DOM. jqLite implements only the most commonly needed functionality
 * within a very small footprint, so only a subset of the jQuery API - methods, arguments and
 * invocation styles - are supported.
 *
 * Note: All element references in Angular are always wrapped with jQuery or jqLite; they are never
 * raw DOM references.
 *
 * ## Angular's jQuery lite provides the following methods:
 *
 * - [addClass()](http://api.jquery.com/addClass/)
 * - [after()](http://api.jquery.com/after/)
 * - [append()](http://api.jquery.com/append/)
 * - [attr()](http://api.jquery.com/attr/)
 * - [bind()](http://api.jquery.com/bind/) - Does not support namespaces
 * - [children()](http://api.jquery.com/children/) - Does not support selectors
 * - [clone()](http://api.jquery.com/clone/)
 * - [contents()](http://api.jquery.com/contents/)
 * - [css()](http://api.jquery.com/css/)
 * - [data()](http://api.jquery.com/data/)
 * - [eq()](http://api.jquery.com/eq/)
 * - [find()](http://api.jquery.com/find/) - Limited to lookups by tag name
 * - [hasClass()](http://api.jquery.com/hasClass/)
 * - [html()](http://api.jquery.com/html/)
 * - [next()](http://api.jquery.com/next/) - Does not support selectors
 * - [parent()](http://api.jquery.com/parent/) - Does not support selectors
 * - [prepend()](http://api.jquery.com/prepend/)
 * - [prop()](http://api.jquery.com/prop/)
 * - [ready()](http://api.jquery.com/ready/)
 * - [remove()](http://api.jquery.com/remove/)
 * - [removeAttr()](http://api.jquery.com/removeAttr/)
 * - [removeClass()](http://api.jquery.com/removeClass/)
 * - [removeData()](http://api.jquery.com/removeData/)
 * - [replaceWith()](http://api.jquery.com/replaceWith/)
 * - [text()](http://api.jquery.com/text/)
 * - [toggleClass()](http://api.jquery.com/toggleClass/)
 * - [triggerHandler()](http://api.jquery.com/triggerHandler/) - Passes a dummy event object to handlers.
 * - [unbind()](http://api.jquery.com/unbind/) - Does not support namespaces
 * - [val()](http://api.jquery.com/val/)
 * - [wrap()](http://api.jquery.com/wrap/)
 *
 * ## In addition to the above, Angular provides additional methods to both jQuery and jQuery lite:
 *
 * - `controller(name)` - retrieves the controller of the current element or its parent. By default
 *   retrieves controller associated with the `ngController` directive. If `name` is provided as
 *   camelCase directive name, then the controller for this directive will be retrieved (e.g.
 *   `'ngModel'`).
 * - `injector()` - retrieves the injector of the current element or its parent.
 * - `scope()` - retrieves the {@link api/ng.$rootScope.Scope scope} of the current
 *   element or its parent.
 * - `inheritedData()` - same as `data()`, but walks up the DOM until a value is found or the top
 *   parent element is reached.
 *
 * @param {string|DOMElement} element HTML string or DOMElement to be wrapped into jQuery.
 * @returns {Object} jQuery object.
 */

var jqCache = JQLite.cache = {},
    jqName = JQLite.expando = 'ng-' + new Date().getTime(),
    jqId = 1,
    addEventListenerFn = (window.document.addEventListener
      ? function(element, type, fn) {element.addEventListener(type, fn, false);}
      : function(element, type, fn) {element.attachEvent('on' + type, fn);}),
    removeEventListenerFn = (window.document.removeEventListener
      ? function(element, type, fn) {element.removeEventListener(type, fn, false); }
      : function(element, type, fn) {element.detachEvent('on' + type, fn); });

function jqNextId() { return ++jqId; }


var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * Converts snake_case to camelCase.
 * Also there is special case for Moz prefix starting with upper case letter.
 * @param name Name to normalize
 */
function camelCase(name) {
  return name.
    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).
    replace(MOZ_HACK_REGEXP, 'Moz$1');
}

/////////////////////////////////////////////
// jQuery mutation patch
//
//  In conjunction with bindJQuery intercepts all jQuery's DOM destruction apis and fires a
// $destroy event on all DOM nodes being removed.
//
/////////////////////////////////////////////

function JQLitePatchJQueryRemove(name, dispatchThis) {
  var originalJqFn = jQuery.fn[name];
  originalJqFn = originalJqFn.$original || originalJqFn;
  removePatch.$original = originalJqFn;
  jQuery.fn[name] = removePatch;

  function removePatch() {
    var list = [this],
        fireEvent = dispatchThis,
        set, setIndex, setLength,
        element, childIndex, childLength, children,
        fns, events;

    while(list.length) {
      set = list.shift();
      for(setIndex = 0, setLength = set.length; setIndex < setLength; setIndex++) {
        element = jqLite(set[setIndex]);
        if (fireEvent) {
          element.triggerHandler('$destroy');
        } else {
          fireEvent = !fireEvent;
        }
        for(childIndex = 0, childLength = (children = element.children()).length;
            childIndex < childLength;
            childIndex++) {
          list.push(jQuery(children[childIndex]));
        }
      }
    }
    return originalJqFn.apply(this, arguments);
  }
}

/////////////////////////////////////////////
function JQLite(element) {
  if (element instanceof JQLite) {
    return element;
  }
  if (!(this instanceof JQLite)) {
    if (isString(element) && element.charAt(0) != '<') {
      throw Error('selectors not implemented');
    }
    return new JQLite(element);
  }

  if (isString(element)) {
    var div = document.createElement('div');
    // Read about the NoScope elements here:
    // http://msdn.microsoft.com/en-us/library/ms533897(VS.85).aspx
    div.innerHTML = '<div>&#160;</div>' + element; // IE insanity to make NoScope elements work!
    div.removeChild(div.firstChild); // remove the superfluous div
    JQLiteAddNodes(this, div.childNodes);
    this.remove(); // detach the elements from the temporary DOM div.
  } else {
    JQLiteAddNodes(this, element);
  }
}

function JQLiteClone(element) {
  return element.cloneNode(true);
}

function JQLiteDealoc(element){
  JQLiteRemoveData(element);
  for ( var i = 0, children = element.childNodes || []; i < children.length; i++) {
    JQLiteDealoc(children[i]);
  }
}

function JQLiteUnbind(element, type, fn) {
  var events = JQLiteExpandoStore(element, 'events'),
      handle = JQLiteExpandoStore(element, 'handle');

  if (!handle) return; //no listeners registered

  if (isUndefined(type)) {
    forEach(events, function(eventHandler, type) {
      removeEventListenerFn(element, type, eventHandler);
      delete events[type];
    });
  } else {
    if (isUndefined(fn)) {
      removeEventListenerFn(element, type, events[type]);
      delete events[type];
    } else {
      arrayRemove(events[type], fn);
    }
  }
}

function JQLiteRemoveData(element) {
  var expandoId = element[jqName],
      expandoStore = jqCache[expandoId];

  if (expandoStore) {
    if (expandoStore.handle) {
      expandoStore.events.$destroy && expandoStore.handle({}, '$destroy');
      JQLiteUnbind(element);
    }
    delete jqCache[expandoId];
    element[jqName] = undefined; // ie does not allow deletion of attributes on elements.
  }
}

function JQLiteExpandoStore(element, key, value) {
  var expandoId = element[jqName],
      expandoStore = jqCache[expandoId || -1];

  if (isDefined(value)) {
    if (!expandoStore) {
      element[jqName] = expandoId = jqNextId();
      expandoStore = jqCache[expandoId] = {};
    }
    expandoStore[key] = value;
  } else {
    return expandoStore && expandoStore[key];
  }
}

function JQLiteData(element, key, value) {
  var data = JQLiteExpandoStore(element, 'data'),
      isSetter = isDefined(value),
      keyDefined = !isSetter && isDefined(key),
      isSimpleGetter = keyDefined && !isObject(key);

  if (!data && !isSimpleGetter) {
    JQLiteExpandoStore(element, 'data', data = {});
  }

  if (isSetter) {
    data[key] = value;
  } else {
    if (keyDefined) {
      if (isSimpleGetter) {
        // don't create data in this case.
        return data && data[key];
      } else {
        extend(data, key);
      }
    } else {
      return data;
    }
  }
}

function JQLiteHasClass(element, selector) {
  return ((" " + element.className + " ").replace(/[\n\t]/g, " ").
      indexOf( " " + selector + " " ) > -1);
}

function JQLiteRemoveClass(element, cssClasses) {
  if (cssClasses) {
    forEach(cssClasses.split(' '), function(cssClass) {
      element.className = trim(
          (" " + element.className + " ")
          .replace(/[\n\t]/g, " ")
          .replace(" " + trim(cssClass) + " ", " ")
      );
    });
  }
}

function JQLiteAddClass(element, cssClasses) {
  if (cssClasses) {
    forEach(cssClasses.split(' '), function(cssClass) {
      if (!JQLiteHasClass(element, cssClass)) {
        element.className = trim(element.className + ' ' + trim(cssClass));
      }
    });
  }
}

function JQLiteAddNodes(root, elements) {
  if (elements) {
    elements = (!elements.nodeName && isDefined(elements.length) && !isWindow(elements))
      ? elements
      : [ elements ];
    for(var i=0; i < elements.length; i++) {
      root.push(elements[i]);
    }
  }
}

function JQLiteController(element, name) {
  return JQLiteInheritedData(element, '$' + (name || 'ngController' ) + 'Controller');
}

function JQLiteInheritedData(element, name, value) {
  element = jqLite(element);

  // if element is the document object work with the html element instead
  // this makes $(document).scope() possible
  if(element[0].nodeType == 9) {
    element = element.find('html');
  }

  while (element.length) {
    if (value = element.data(name)) return value;
    element = element.parent();
  }
}

//////////////////////////////////////////
// Functions which are declared directly.
//////////////////////////////////////////
var JQLitePrototype = JQLite.prototype = {
  ready: function(fn) {
    var fired = false;

    function trigger() {
      if (fired) return;
      fired = true;
      fn();
    }

    // check if document already is loaded
    if (document.readyState === 'complete'){
      setTimeout(trigger);
    } else {
      this.bind('DOMContentLoaded', trigger); // works for modern browsers and IE9
      // we can not use jqLite since we are not done loading and jQuery could be loaded later.
      JQLite(window).bind('load', trigger); // fallback to window.onload for others
    }
  },
  toString: function() {
    var value = [];
    forEach(this, function(e){ value.push('' + e);});
    return '[' + value.join(', ') + ']';
  },

  eq: function(index) {
      return (index >= 0) ? jqLite(this[index]) : jqLite(this[this.length + index]);
  },

  length: 0,
  push: push,
  sort: [].sort,
  splice: [].splice
};

//////////////////////////////////////////
// Functions iterating getter/setters.
// these functions return self on setter and
// value on get.
//////////////////////////////////////////
var BOOLEAN_ATTR = {};
forEach('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function(value) {
  BOOLEAN_ATTR[lowercase(value)] = value;
});
var BOOLEAN_ELEMENTS = {};
forEach('input,select,option,textarea,button,form,details'.split(','), function(value) {
  BOOLEAN_ELEMENTS[uppercase(value)] = true;
});

function getBooleanAttrName(element, name) {
  // check dom last since we will most likely fail on name
  var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];

  // booleanAttr is here twice to minimize DOM access
  return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
}

forEach({
  data: JQLiteData,
  inheritedData: JQLiteInheritedData,

  scope: function(element) {
    return JQLiteInheritedData(element, '$scope');
  },

  controller: JQLiteController ,

  injector: function(element) {
    return JQLiteInheritedData(element, '$injector');
  },

  removeAttr: function(element,name) {
    element.removeAttribute(name);
  },

  hasClass: JQLiteHasClass,

  css: function(element, name, value) {
    name = camelCase(name);

    if (isDefined(value)) {
      element.style[name] = value;
    } else {
      var val;

      if (msie <= 8) {
        // this is some IE specific weirdness that jQuery 1.6.4 does not sure why
        val = element.currentStyle && element.currentStyle[name];
        if (val === '') val = 'auto';
      }

      val = val || element.style[name];

      if (msie <= 8) {
        // jquery weirdness :-/
        val = (val === '') ? undefined : val;
      }

      return  val;
    }
  },

  attr: function(element, name, value){
    var lowercasedName = lowercase(name);
    if (BOOLEAN_ATTR[lowercasedName]) {
      if (isDefined(value)) {
        if (!!value) {
          element[name] = true;
          element.setAttribute(name, lowercasedName);
        } else {
          element[name] = false;
          element.removeAttribute(lowercasedName);
        }
      } else {
        return (element[name] ||
                 (element.attributes.getNamedItem(name)|| noop).specified)
               ? lowercasedName
               : undefined;
      }
    } else if (isDefined(value)) {
      element.setAttribute(name, value);
    } else if (element.getAttribute) {
      // the extra argument "2" is to get the right thing for a.href in IE, see jQuery code
      // some elements (e.g. Document) don't have get attribute, so return undefined
      var ret = element.getAttribute(name, 2);
      // normalize non-existing attributes to undefined (as jQuery)
      return ret === null ? undefined : ret;
    }
  },

  prop: function(element, name, value) {
    if (isDefined(value)) {
      element[name] = value;
    } else {
      return element[name];
    }
  },

  text: extend((msie < 9)
      ? function(element, value) {
        if (element.nodeType == 1 /** Element */) {
          if (isUndefined(value))
            return element.innerText;
          element.innerText = value;
        } else {
          if (isUndefined(value))
            return element.nodeValue;
          element.nodeValue = value;
        }
      }
      : function(element, value) {
        if (isUndefined(value)) {
          return element.textContent;
        }
        element.textContent = value;
      }, {$dv:''}),

  val: function(element, value) {
    if (isUndefined(value)) {
      return element.value;
    }
    element.value = value;
  },

  html: function(element, value) {
    if (isUndefined(value)) {
      return element.innerHTML;
    }
    for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) {
      JQLiteDealoc(childNodes[i]);
    }
    element.innerHTML = value;
  }
}, function(fn, name){
  /**
   * Properties: writes return selection, reads return first value
   */
  JQLite.prototype[name] = function(arg1, arg2) {
    var i, key;

    // JQLiteHasClass has only two arguments, but is a getter-only fn, so we need to special-case it
    // in a way that survives minification.
    if (((fn.length == 2 && (fn !== JQLiteHasClass && fn !== JQLiteController)) ? arg1 : arg2) === undefined) {
      if (isObject(arg1)) {

        // we are a write, but the object properties are the key/values
        for(i=0; i < this.length; i++) {
          if (fn === JQLiteData) {
            // data() takes the whole object in jQuery
            fn(this[i], arg1);
          } else {
            for (key in arg1) {
              fn(this[i], key, arg1[key]);
            }
          }
        }
        // return self for chaining
        return this;
      } else {
        // we are a read, so read the first child.
        if (this.length)
          return fn(this[0], arg1, arg2);
      }
    } else {
      // we are a write, so apply to all children
      for(i=0; i < this.length; i++) {
        fn(this[i], arg1, arg2);
      }
      // return self for chaining
      return this;
    }
    return fn.$dv;
  };
});

function createEventHandler(element, events) {
  var eventHandler = function (event, type) {
    if (!event.preventDefault) {
      event.preventDefault = function() {
        event.returnValue = false; //ie
      };
    }

    if (!event.stopPropagation) {
      event.stopPropagation = function() {
        event.cancelBubble = true; //ie
      };
    }

    if (!event.target) {
      event.target = event.srcElement || document;
    }

    if (isUndefined(event.defaultPrevented)) {
      var prevent = event.preventDefault;
      event.preventDefault = function() {
        event.defaultPrevented = true;
        prevent.call(event);
      };
      event.defaultPrevented = false;
    }

    event.isDefaultPrevented = function() {
      return event.defaultPrevented || event.returnValue == false;
    };

    forEach(events[type || event.type], function(fn) {
      fn.call(element, event);
    });

    // Remove monkey-patched methods (IE),
    // as they would cause memory leaks in IE8.
    if (msie <= 8) {
      // IE7/8 does not allow to delete property on native object
      event.preventDefault = null;
      event.stopPropagation = null;
      event.isDefaultPrevented = null;
    } else {
      // It shouldn't affect normal browsers (native methods are defined on prototype).
      delete event.preventDefault;
      delete event.stopPropagation;
      delete event.isDefaultPrevented;
    }
  };
  eventHandler.elem = element;
  return eventHandler;
}

//////////////////////////////////////////
// Functions iterating traversal.
// These functions chain results into a single
// selector.
//////////////////////////////////////////
forEach({
  removeData: JQLiteRemoveData,

  dealoc: JQLiteDealoc,

  bind: function bindFn(element, type, fn){
    var events = JQLiteExpandoStore(element, 'events'),
        handle = JQLiteExpandoStore(element, 'handle');

    if (!events) JQLiteExpandoStore(element, 'events', events = {});
    if (!handle) JQLiteExpandoStore(element, 'handle', handle = createEventHandler(element, events));

    forEach(type.split(' '), function(type){
      var eventFns = events[type];

      if (!eventFns) {
        if (type == 'mouseenter' || type == 'mouseleave') {
          var contains = document.body.contains || document.body.compareDocumentPosition ?
          function( a, b ) {
            var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a === bup || !!( bup && bup.nodeType === 1 && (
              adown.contains ?
              adown.contains( bup ) :
              a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
              ));
            } :
            function( a, b ) {
              if ( b ) {
                while ( (b = b.parentNode) ) {
                  if ( b === a ) {
                    return true;
                  }
                }
              }
              return false;
            };	

          events[type] = [];
		
		  // Refer to jQuery's implementation of mouseenter & mouseleave
          // Read about mouseenter and mouseleave:
          // http://www.quirksmode.org/js/events_mouse.html#link8
          var eventmap = { mouseleave : "mouseout", mouseenter : "mouseover"}          
          bindFn(element, eventmap[type], function(event) {
            var ret, target = this, related = event.relatedTarget;
            // For mousenter/leave call the handler if related is outside the target.
            // NB: No relatedTarget if the mouse left/entered the browser window
            if ( !related || (related !== target && !contains(target, related)) ){
              handle(event, type);
            }	

          });

        } else {
          addEventListenerFn(element, type, handle);
          events[type] = [];
        }
        eventFns = events[type]
      }
      eventFns.push(fn);
    });
  },

  unbind: JQLiteUnbind,

  replaceWith: function(element, replaceNode) {
    var index, parent = element.parentNode;
    JQLiteDealoc(element);
    forEach(new JQLite(replaceNode), function(node){
      if (index) {
        parent.insertBefore(node, index.nextSibling);
      } else {
        parent.replaceChild(node, element);
      }
      index = node;
    });
  },

  children: function(element) {
    var children = [];
    forEach(element.childNodes, function(element){
      if (element.nodeType === 1)
        children.push(element);
    });
    return children;
  },

  contents: function(element) {
    return element.childNodes || [];
  },

  append: function(element, node) {
    forEach(new JQLite(node), function(child){
      if (element.nodeType === 1 || element.nodeType === 11) {
        element.appendChild(child);
      }
    });
  },

  prepend: function(element, node) {
    if (element.nodeType === 1) {
      var index = element.firstChild;
      forEach(new JQLite(node), function(child){
        if (index) {
          element.insertBefore(child, index);
        } else {
          element.appendChild(child);
          index = child;
        }
      });
    }
  },

  wrap: function(element, wrapNode) {
    wrapNode = jqLite(wrapNode)[0];
    var parent = element.parentNode;
    if (parent) {
      parent.replaceChild(wrapNode, element);
    }
    wrapNode.appendChild(element);
  },

  remove: function(element) {
    JQLiteDealoc(element);
    var parent = element.parentNode;
    if (parent) parent.removeChild(element);
  },

  after: function(element, newElement) {
    var index = element, parent = element.parentNode;
    forEach(new JQLite(newElement), function(node){
      parent.insertBefore(node, index.nextSibling);
      index = node;
    });
  },

  addClass: JQLiteAddClass,
  removeClass: JQLiteRemoveClass,

  toggleClass: function(element, selector, condition) {
    if (isUndefined(condition)) {
      condition = !JQLiteHasClass(element, selector);
    }
    (condition ? JQLiteAddClass : JQLiteRemoveClass)(element, selector);
  },

  parent: function(element) {
    var parent = element.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },

  next: function(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }

    // IE8 doesn't have nextElementSibling
    var elm = element.nextSibling;
    while (elm != null && elm.nodeType !== 1) {
      elm = elm.nextSibling;
    }
    return elm;
  },

  find: function(element, selector) {
    return element.getElementsByTagName(selector);
  },

  clone: JQLiteClone,

  triggerHandler: function(element, eventName) {
    var eventFns = (JQLiteExpandoStore(element, 'events') || {})[eventName];
    var event;

    forEach(eventFns, function(fn) {
      fn.call(element, {preventDefault: noop});
    });
  }
}, function(fn, name){
  /**
   * chaining functions
   */
  JQLite.prototype[name] = function(arg1, arg2) {
    var value;
    for(var i=0; i < this.length; i++) {
      if (value == undefined) {
        value = fn(this[i], arg1, arg2);
        if (value !== undefined) {
          // any function which returns a value needs to be wrapped
          value = jqLite(value);
        }
      } else {
        JQLiteAddNodes(value, fn(this[i], arg1, arg2));
      }
    }
    return value == undefined ? this : value;
  };
});

/**
 * Computes a hash of an 'obj'.
 * Hash of a:
 *  string is string
 *  number is number as string
 *  object is either result of calling $$hashKey function on the object or uniquely generated id,
 *         that is also assigned to the $$hashKey property of the object.
 *
 * @param obj
 * @returns {string} hash string such that the same input will have the same hash string.
 *         The resulting string key is in 'type:hashKey' format.
 */
function hashKey(obj) {
  var objType = typeof obj,
      key;

  if (objType == 'object' && obj !== null) {
    if (typeof (key = obj.$$hashKey) == 'function') {
      // must invoke on object to keep the right this
      key = obj.$$hashKey();
    } else if (key === undefined) {
      key = obj.$$hashKey = nextUid();
    }
  } else {
    key = obj;
  }

  return objType + ':' + key;
}

/**
 * HashMap which can use objects as keys
 */
function HashMap(array){
  forEach(array, this.put, this);
}
HashMap.prototype = {
  /**
   * Store key value pair
   * @param key key to store can be any type
   * @param value value to store can be any type
   */
  put: function(key, value) {
    this[hashKey(key)] = value;
  },

  /**
   * @param key
   * @returns the value for the key
   */
  get: function(key) {
    return this[hashKey(key)];
  },

  /**
   * Remove the key/value pair
   * @param key
   */
  remove: function(key) {
    var value = this[key = hashKey(key)];
    delete this[key];
    return value;
  }
};

/**
 * @ngdoc function
 * @name angular.injector
 * @function
 *
 * @description
 * Creates an injector function that can be used for retrieving services as well as for
 * dependency injection (see {@link guide/di dependency injection}).
 *

 * @param {Array.<string|Function>} modules A list of module functions or their aliases. See
 *        {@link angular.module}. The `ng` module must be explicitly added.
 * @returns {function()} Injector function. See {@link AUTO.$injector $injector}.
 *
 * @example
 * Typical usage
 * <pre>
 *   // create an injector
 *   var $injector = angular.injector(['ng']);
 *
 *   // use the injector to kick off your application
 *   // use the type inference to auto inject arguments, or use implicit injection
 *   $injector.invoke(function($rootScope, $compile, $document){
 *     $compile($document)($rootScope);
 *     $rootScope.$digest();
 *   });
 * </pre>
 */


/**
 * @ngdoc overview
 * @name AUTO
 * @description
 *
 * Implicit module which gets automatically added to each {@link AUTO.$injector $injector}.
 */

var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
function annotate(fn) {
  var $inject,
      fnText,
      argDecl,
      last;

  if (typeof fn == 'function') {
    if (!($inject = fn.$inject)) {
      $inject = [];
      fnText = fn.toString().replace(STRIP_COMMENTS, '');
      argDecl = fnText.match(FN_ARGS);
      forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg){
        arg.replace(FN_ARG, function(all, underscore, name){
          $inject.push(name);
        });
      });
      fn.$inject = $inject;
    }
  } else if (isArray(fn)) {
    last = fn.length - 1;
    assertArgFn(fn[last], 'fn');
    $inject = fn.slice(0, last);
  } else {
    assertArgFn(fn, 'fn', true);
  }
  return $inject;
}

///////////////////////////////////////

/**
 * @ngdoc object
 * @name AUTO.$injector
 * @function
 *
 * @description
 *
 * `$injector` is used to retrieve object instances as defined by
 * {@link AUTO.$provide provider}, instantiate types, invoke methods,
 * and load modules.
 *
 * The following always holds true:
 *
 * <pre>
 *   var $injector = angular.injector();
 *   expect($injector.get('$injector')).toBe($injector);
 *   expect($injector.invoke(function($injector){
 *     return $injector;
 *   }).toBe($injector);
 * </pre>
 *
 * # Injection Function Annotation
 *
 * JavaScript does not have annotations, and annotations are needed for dependency injection. The
 * following are all valid ways of annotating function with injection arguments and are equivalent.
 *
 * <pre>
 *   // inferred (only works if code not minified/obfuscated)
 *   $injector.invoke(function(serviceA){});
 *
 *   // annotated
 *   function explicit(serviceA) {};
 *   explicit.$inject = ['serviceA'];
 *   $injector.invoke(explicit);
 *
 *   // inline
 *   $injector.invoke(['serviceA', function(serviceA){}]);
 * </pre>
 *
 * ## Inference
 *
 * In JavaScript calling `toString()` on a function returns the function definition. The definition can then be
 * parsed and the function arguments can be extracted. *NOTE:* This does not work with minification, and obfuscation
 * tools since these tools change the argument names.
 *
 * ## `$inject` Annotation
 * By adding a `$inject` property onto a function the injection parameters can be specified.
 *
 * ## Inline
 * As an array of injection names, where the last item in the array is the function to call.
 */

/**
 * @ngdoc method
 * @name AUTO.$injector#get
 * @methodOf AUTO.$injector
 *
 * @description
 * Return an instance of the service.
 *
 * @param {string} name The name of the instance to retrieve.
 * @return {*} The instance.
 */

/**
 * @ngdoc method
 * @name AUTO.$injector#invoke
 * @methodOf AUTO.$injector
 *
 * @description
 * Invoke the method and supply the method arguments from the `$injector`.
 *
 * @param {!function} fn The function to invoke. The function arguments come form the function annotation.
 * @param {Object=} self The `this` for the invoked method.
 * @param {Object=} locals Optional object. If preset then any argument names are read from this object first, before
 *   the `$injector` is consulted.
 * @returns {*} the value returned by the invoked `fn` function.
 */

/**
 * @ngdoc method
 * @name AUTO.$injector#has
 * @methodOf AUTO.$injector
 *
 * @description
 * Allows the user to query if the particular service exist.
 *
 * @param {string} Name of the service to query.
 * @returns {boolean} returns true if injector has given service.
 */

/**
 * @ngdoc method
 * @name AUTO.$injector#instantiate
 * @methodOf AUTO.$injector
 * @description
 * Create a new instance of JS type. The method takes a constructor function invokes the new operator and supplies
 * all of the arguments to the constructor function as specified by the constructor annotation.
 *
 * @param {function} Type Annotated constructor function.
 * @param {Object=} locals Optional object. If preset then any argument names are read from this object first, before
 *   the `$injector` is consulted.
 * @returns {Object} new instance of `Type`.
 */

/**
 * @ngdoc method
 * @name AUTO.$injector#annotate
 * @methodOf AUTO.$injector
 *
 * @description
 * Returns an array of service names which the function is requesting for injection. This API is used by the injector
 * to determine which services need to be injected into the function when the function is invoked. There are three
 * ways in which the function can be annotated with the needed dependencies.
 *
 * # Argument names
 *
 * The simplest form is to extract the dependencies from the arguments of the function. This is done by converting
 * the function into a string using `toString()` method and extracting the argument names.
 * <pre>
 *   // Given
 *   function MyController($scope, $route) {
 *     // ...
 *   }
 *
 *   // Then
 *   expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
 * </pre>
 *
 * This method does not work with code minfication / obfuscation. For this reason the following annotation strategies
 * are supported.
 *
 * # The `$inject` property
 *
 * If a function has an `$inject` property and its value is an array of strings, then the strings represent names of
 * services to be injected into the function.
 * <pre>
 *   // Given
 *   var MyController = function(obfuscatedScope, obfuscatedRoute) {
 *     // ...
 *   }
 *   // Define function dependencies
 *   MyController.$inject = ['$scope', '$route'];
 *
 *   // Then
 *   expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
 * </pre>
 *
 * # The array notation
 *
 * It is often desirable to inline Injected functions and that's when setting the `$inject` property is very
 * inconvenient. In these situations using the array notation to specify the dependencies in a way that survives
 * minification is a better choice:
 *
 * <pre>
 *   // We wish to write this (not minification / obfuscation safe)
 *   injector.invoke(function($compile, $rootScope) {
 *     // ...
 *   });
 *
 *   // We are forced to write break inlining
 *   var tmpFn = function(obfuscatedCompile, obfuscatedRootScope) {
 *     // ...
 *   };
 *   tmpFn.$inject = ['$compile', '$rootScope'];
 *   injector.invoke(tmpFn);
 *
 *   // To better support inline function the inline annotation is supported
 *   injector.invoke(['$compile', '$rootScope', function(obfCompile, obfRootScope) {
 *     // ...
 *   }]);
 *
 *   // Therefore
 *   expect(injector.annotate(
 *      ['$compile', '$rootScope', function(obfus_$compile, obfus_$rootScope) {}])
 *    ).toEqual(['$compile', '$rootScope']);
 * </pre>
 *
 * @param {function|Array.<string|Function>} fn Function for which dependent service names need to be retrieved as described
 *   above.
 *
 * @returns {Array.<string>} The names of the services which the function requires.
 */




/**
 * @ngdoc object
 * @name AUTO.$provide
 *
 * @description
 *
 * Use `$provide` to register new providers with the `$injector`. The providers are the factories for the instance.
 * The providers share the same name as the instance they create with `Provider` suffixed to them.
 *
 * A provider is an object with a `$get()` method. The injector calls the `$get` method to create a new instance of
 * a service. The Provider can have additional methods which would allow for configuration of the provider.
 *
 * <pre>
 *   function GreetProvider() {
 *     var salutation = 'Hello';
 *
 *     this.salutation = function(text) {
 *       salutation = text;
 *     };
 *
 *     this.$get = function() {
 *       return function (name) {
 *         return salutation + ' ' + name + '!';
 *       };
 *     };
 *   }
 *
 *   describe('Greeter', function(){
 *
 *     beforeEach(module(function($provide) {
 *       $provide.provider('greet', GreetProvider);
 *     }));
 *
 *     it('should greet', inject(function(greet) {
 *       expect(greet('angular')).toEqual('Hello angular!');
 *     }));
 *
 *     it('should allow configuration of salutation', function() {
 *       module(function(greetProvider) {
 *         greetProvider.salutation('Ahoj');
 *       });
 *       inject(function(greet) {
 *         expect(greet('angular')).toEqual('Ahoj angular!');
 *       });
 *     });
 * </pre>
 */

/**
 * @ngdoc method
 * @name AUTO.$provide#provider
 * @methodOf AUTO.$provide
 * @description
 *
 * Register a provider for a service. The providers can be retrieved and can have additional configuration methods.
 *
 * @param {string} name The name of the instance. NOTE: the provider will be available under `name + 'Provider'` key.
 * @param {(Object|function())} provider If the provider is:
 *
 *   - `Object`: then it should have a `$get` method. The `$get` method will be invoked using
 *               {@link AUTO.$injector#invoke $injector.invoke()} when an instance needs to be created.
 *   - `Constructor`: a new instance of the provider will be created using
 *               {@link AUTO.$injector#instantiate $injector.instantiate()}, then treated as `object`.
 *
 * @returns {Object} registered provider instance
 */

/**
 * @ngdoc method
 * @name AUTO.$provide#factory
 * @methodOf AUTO.$provide
 * @description
 *
 * A short hand for configuring services if only `$get` method is required.
 *
 * @param {string} name The name of the instance.
 * @param {function()} $getFn The $getFn for the instance creation. Internally this is a short hand for
 * `$provide.provider(name, {$get: $getFn})`.
 * @returns {Object} registered provider instance
 */


/**
 * @ngdoc method
 * @name AUTO.$provide#service
 * @methodOf AUTO.$provide
 * @description
 *
 * A short hand for registering service of given class.
 *
 * @param {string} name The name of the instance.
 * @param {Function} constructor A class (constructor function) that will be instantiated.
 * @returns {Object} registered provider instance
 */


/**
 * @ngdoc method
 * @name AUTO.$provide#value
 * @methodOf AUTO.$provide
 * @description
 *
 * A short hand for configuring services if the `$get` method is a constant.
 *
 * @param {string} name The name of the instance.
 * @param {*} value The value.
 * @returns {Object} registered provider instance
 */


/**
 * @ngdoc method
 * @name AUTO.$provide#constant
 * @methodOf AUTO.$provide
 * @description
 *
 * A constant value, but unlike {@link AUTO.$provide#value value} it can be injected
 * into configuration function (other modules) and it is not interceptable by
 * {@link AUTO.$provide#decorator decorator}.
 *
 * @param {string} name The name of the constant.
 * @param {*} value The constant value.
 * @returns {Object} registered instance
 */


/**
 * @ngdoc method
 * @name AUTO.$provide#decorator
 * @methodOf AUTO.$provide
 * @description
 *
 * Decoration of service, allows the decorator to intercept the service instance creation. The
 * returned instance may be the original instance, or a new instance which delegates to the
 * original instance.
 *
 * @param {string} name The name of the service to decorate.
 * @param {function()} decorator This function will be invoked when the service needs to be
 *    instantiated. The function is called using the {@link AUTO.$injector#invoke
 *    injector.invoke} method and is therefore fully injectable. Local injection arguments:
 *
 *    * `$delegate` - The original service instance, which can be monkey patched, configured,
 *      decorated or delegated to.
 */


function createInjector(modulesToLoad) {
  var INSTANTIATING = {},
      providerSuffix = 'Provider',
      path = [],
      loadedModules = new HashMap(),
      providerCache = {
        $provide: {
            provider: supportObject(provider),
            factory: supportObject(factory),
            service: supportObject(service),
            value: supportObject(value),
            constant: supportObject(constant),
            decorator: decorator
          }
      },
      providerInjector = (providerCache.$injector =
          createInternalInjector(providerCache, function() {
            throw Error("Unknown provider: " + path.join(' <- '));
          })),
      instanceCache = {},
      instanceInjector = (instanceCache.$injector =
          createInternalInjector(instanceCache, function(servicename) {
            var provider = providerInjector.get(servicename + providerSuffix);
            return instanceInjector.invoke(provider.$get, provider);
          }));


  forEach(loadModules(modulesToLoad), function(fn) { instanceInjector.invoke(fn || noop); });

  return instanceInjector;

  ////////////////////////////////////
  // $provider
  ////////////////////////////////////

  function supportObject(delegate) {
    return function(key, value) {
      if (isObject(key)) {
        forEach(key, reverseParams(delegate));
      } else {
        return delegate(key, value);
      }
    }
  }

  function provider(name, provider_) {
    if (isFunction(provider_) || isArray(provider_)) {
      provider_ = providerInjector.instantiate(provider_);
    }
    if (!provider_.$get) {
      throw Error('Provider ' + name + ' must define $get factory method.');
    }
    return providerCache[name + providerSuffix] = provider_;
  }

  function factory(name, factoryFn) { return provider(name, { $get: factoryFn }); }

  function service(name, constructor) {
    return factory(name, ['$injector', function($injector) {
      return $injector.instantiate(constructor);
    }]);
  }

  function value(name, value) { return factory(name, valueFn(value)); }

  function constant(name, value) {
    providerCache[name] = value;
    instanceCache[name] = value;
  }

  function decorator(serviceName, decorFn) {
    var origProvider = providerInjector.get(serviceName + providerSuffix),
        orig$get = origProvider.$get;

    origProvider.$get = function() {
      var origInstance = instanceInjector.invoke(orig$get, origProvider);
      return instanceInjector.invoke(decorFn, null, {$delegate: origInstance});
    };
  }

  ////////////////////////////////////
  // Module Loading
  ////////////////////////////////////
  function loadModules(modulesToLoad){
    var runBlocks = [];
    forEach(modulesToLoad, function(module) {
      if (loadedModules.get(module)) return;
      loadedModules.put(module, true);
      if (isString(module)) {
        var moduleFn = angularModule(module);
        runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);

        try {
          for(var invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; i < ii; i++) {
            var invokeArgs = invokeQueue[i],
                provider = providerInjector.get(invokeArgs[0]);

            provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
          }
        } catch (e) {
          if (e.message) e.message += ' from ' + module;
          throw e;
        }
      } else if (isFunction(module)) {
        try {
          runBlocks.push(providerInjector.invoke(module));
        } catch (e) {
          if (e.message) e.message += ' from ' + module;
          throw e;
        }
      } else if (isArray(module)) {
        try {
          runBlocks.push(providerInjector.invoke(module));
        } catch (e) {
          if (e.message) e.message += ' from ' + String(module[module.length - 1]);
          throw e;
        }
      } else {
        assertArgFn(module, 'module');
      }
    });
    return runBlocks;
  }

  ////////////////////////////////////
  // internal Injector
  ////////////////////////////////////

  function createInternalInjector(cache, factory) {

    function getService(serviceName) {
      if (typeof serviceName !== 'string') {
        throw Error('Service name expected');
      }
      if (cache.hasOwnProperty(serviceName)) {
        if (cache[serviceName] === INSTANTIATING) {
          throw Error('Circular dependency: ' + path.join(' <- '));
        }
        return cache[serviceName];
      } else {
        try {
          path.unshift(serviceName);
          cache[serviceName] = INSTANTIATING;
          return cache[serviceName] = factory(serviceName);
        } finally {
          path.shift();
        }
      }
    }

    function invoke(fn, self, locals){
      var args = [],
          $inject = annotate(fn),
          length, i,
          key;

      for(i = 0, length = $inject.length; i < length; i++) {
        key = $inject[i];
        args.push(
          locals && locals.hasOwnProperty(key)
          ? locals[key]
          : getService(key)
        );
      }
      if (!fn.$inject) {
        // this means that we must be an array.
        fn = fn[length];
      }


      // Performance optimization: http://jsperf.com/apply-vs-call-vs-invoke
      switch (self ? -1 : args.length) {
        case  0: return fn();
        case  1: return fn(args[0]);
        case  2: return fn(args[0], args[1]);
        case  3: return fn(args[0], args[1], args[2]);
        case  4: return fn(args[0], args[1], args[2], args[3]);
        case  5: return fn(args[0], args[1], args[2], args[3], args[4]);
        case  6: return fn(args[0], args[1], args[2], args[3], args[4], args[5]);
        case  7: return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        case  8: return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        case  9: return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
        case 10: return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
        default: return fn.apply(self, args);
      }
    }

    function instantiate(Type, locals) {
      var Constructor = function() {},
          instance, returnedValue;

      // Check if Type is annotated and use just the given function at n-1 as parameter
      // e.g. someModule.factory('greeter', ['$window', function(renamed$window) {}]);
      Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype;
      instance = new Constructor();
      returnedValue = invoke(Type, instance, locals);

      return isObject(returnedValue) ? returnedValue : instance;
    }

    return {
      invoke: invoke,
      instantiate: instantiate,
      get: getService,
      annotate: annotate,
      has: function(name) {
        return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
      }
    };
  }
}

/**
 * @ngdoc function
 * @name ng.$anchorScroll
 * @requires $window
 * @requires $location
 * @requires $rootScope
 *
 * @description
 * When called, it checks current value of `$location.hash()` and scroll to related element,
 * according to rules specified in
 * {@link http://dev.w3.org/html5/spec/Overview.html#the-indicated-part-of-the-document Html5 spec}.
 *
 * It also watches the `$location.hash()` and scroll whenever it changes to match any anchor.
 * This can be disabled by calling `$anchorScrollProvider.disableAutoScrolling()`.
 */
function $AnchorScrollProvider() {

  var autoScrollingEnabled = true;

  this.disableAutoScrolling = function() {
    autoScrollingEnabled = false;
  };

  this.$get = ['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
    var document = $window.document;

    // helper function to get first anchor from a NodeList
    // can't use filter.filter, as it accepts only instances of Array
    // and IE can't convert NodeList to an array using [].slice
    // TODO(vojta): use filter if we change it to accept lists as well
    function getFirstAnchor(list) {
      var result = null;
      forEach(list, function(element) {
        if (!result && lowercase(element.nodeName) === 'a') result = element;
      });
      return result;
    }

    function scroll() {
      var hash = $location.hash(), elm;

      // empty hash, scroll to the top of the page
      if (!hash) $window.scrollTo(0, 0);

      // element with given id
      else if ((elm = document.getElementById(hash))) elm.scrollIntoView();

      // first anchor with given name :-D
      else if ((elm = getFirstAnchor(document.getElementsByName(hash)))) elm.scrollIntoView();

      // no element and hash == 'top', scroll to the top of the page
      else if (hash === 'top') $window.scrollTo(0, 0);
    }

    // does not scroll when user clicks on anchor link that is currently on
    // (no url change, no $location.hash() change), browser native does scroll
    if (autoScrollingEnabled) {
      $rootScope.$watch(function autoScrollWatch() {return $location.hash();},
        function autoScrollWatchAction() {
          $rootScope.$evalAsync(scroll);
        });
    }

    return scroll;
  }];
}


/**
 * @ngdoc object
 * @name ng.$animationProvider
 * @description
 *
 * The $AnimationProvider provider allows developers to register and access custom JavaScript animations directly inside
 * of a module.
 *
 */
$AnimationProvider.$inject = ['$provide'];
function $AnimationProvider($provide) {
  var suffix = 'Animation';

  /**
   * @ngdoc function
   * @name ng.$animation#register
   * @methodOf ng.$animationProvider
   *
   * @description
   * Registers a new injectable animation factory function. The factory function produces the animation object which
   * has these two properties:
   *
   *   * `setup`: `function(Element):*` A function which receives the starting state of the element. The purpose
   *   of this function is to get the element ready for animation. Optionally the function returns an memento which
   *   is passed to the `start` function.
   *   * `start`: `function(Element, doneFunction, *)` The element to animate, the `doneFunction` to be called on
   *   element animation completion, and an optional memento from the `setup` function.
   *
   * @param {string} name The name of the animation.
   * @param {function} factory The factory function that will be executed to return the animation object.
   * 
   */
  this.register = function(name, factory) {
    $provide.factory(camelCase(name) + suffix, factory);
  };

  this.$get = ['$injector', function($injector) {
    /**
     * @ngdoc function
     * @name ng.$animation
     * @function
     *
     * @description
     * The $animation service is used to retrieve any defined animation functions. When executed, the $animation service
     * will return a object that contains the setup and start functions that were defined for the animation.
     *
     * @param {String} name Name of the animation function to retrieve. Animation functions are registered and stored
     *        inside of the AngularJS DI so a call to $animate('custom') is the same as injecting `customAnimation`
     *        via dependency injection.
     * @return {Object} the animation object which contains the `setup` and `start` functions that perform the animation.
     */
    return function $animation(name) {
      if (name) {
        var animationName = camelCase(name) + suffix;
        if ($injector.has(animationName)) {
          return $injector.get(animationName);
        }
      }
    };
  }];
}

// NOTE: this is a pseudo directive.

/**
 * @ngdoc directive
 * @name ng.directive:ngAnimate
 *
 * @description
 * The `ngAnimate` directive works as an attribute that is attached alongside pre-existing directives.
 * It effects how the directive will perform DOM manipulation. This allows for complex animations to take place
 * without burdening the directive which uses the animation with animation details. The built in directives
 * `ngRepeat`, `ngInclude`, `ngSwitch`, `ngShow`, `ngHide` and `ngView` already accept `ngAnimate` directive.
 * Custom directives can take advantage of animation through {@link ng.$animator $animator service}.
 *
 * Below is a more detailed breakdown of the supported callback events provided by pre-exisitng ng directives:
 *
 * | Directive                                                 | Supported Animations                               |
 * |========================================================== |====================================================|
 * | {@link ng.directive:ngRepeat#animations ngRepeat}         | enter, leave and move                              |
 * | {@link ng.directive:ngView#animations ngView}             | enter and leave                                    |
 * | {@link ng.directive:ngInclude#animations ngInclude}       | enter and leave                                    |
 * | {@link ng.directive:ngSwitch#animations ngSwitch}         | enter and leave                                    |
 * | {@link ng.directive:ngIf#animations ngIf}                 | enter and leave                                    |
 * | {@link ng.directive:ngShow#animations ngShow & ngHide}    | show and hide                                      |
 *
 * You can find out more information about animations upon visiting each directive page.
 *
 * Below is an example of a directive that makes use of the ngAnimate attribute:
 *
 * <pre>
 * <!-- you can also use data-ng-animate, ng:animate or x-ng-animate as well -->
 * <ANY ng-directive ng-animate="{event1: 'animation-name', event2: 'animation-name-2'}"></ANY>
 *
 * <!-- you can also use a short hand -->
 * <ANY ng-directive ng-animate=" 'animation' "></ANY>
 * <!-- which expands to -->
 * <ANY ng-directive ng-animate="{ enter: 'animation-enter', leave: 'animation-leave', ...}"></ANY>
 *
 * <!-- keep in mind that ng-animate can take expressions -->
 * <ANY ng-directive ng-animate=" computeCurrentAnimation() "></ANY>
 * </pre>
 *
 * The `event1` and `event2` attributes refer to the animation events specific to the directive that has been assigned.
 *
 * Keep in mind that if an animation is running, no child element of such animation can also be animated.
 *
 * <h2>CSS-defined Animations</h2>
 * By default, ngAnimate attaches two CSS classes per animation event to the DOM element to achieve the animation.
 * It is up to you, the developer, to ensure that the animations take place using cross-browser CSS3 transitions as
 * well as CSS animations.
 *
 * The following code below demonstrates how to perform animations using **CSS transitions** with ngAnimate:
 *
 * <pre>
 * <style type="text/css">
 * /&#42;
 *  The animate-enter CSS class is the event name that you
 *  have provided within the ngAnimate attribute.
 * &#42;/
 * .animate-enter {
 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
 *  -moz-transition: 1s linear all; /&#42; Firefox &#42;/
 *  -o-transition: 1s linear all; /&#42; Opera &#42;/
 *  transition: 1s linear all; /&#42; IE10+ and Future Browsers &#42;/
 *
 *  /&#42; The animation preparation code &#42;/
 *  opacity: 0;
 * }
 *
 * /&#42;
 *  Keep in mind that you want to combine both CSS
 *  classes together to avoid any CSS-specificity
 *  conflicts
 * &#42;/
 * .animate-enter.animate-enter-active {
 *  /&#42; The animation code itself &#42;/
 *  opacity: 1;
 * }
 * </style>
 *
 * <div ng-directive ng-animate="{enter: 'animate-enter'}"></div>
 * </pre>
 *
 * The following code below demonstrates how to perform animations using **CSS animations** with ngAnimate:
 *
 * <pre>
 * <style type="text/css">
 * .animate-enter {
 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
 *   -moz-animation: enter_sequence 1s linear; /&#42; Firefox &#42;/
 *   -o-animation: enter_sequence 1s linear; /&#42; Opera &#42;/
 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
 * }
 * &#64-webkit-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64-moz-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64-o-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * &#64keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * </style>
 *
 * <div ng-directive ng-animate="{enter: 'animate-enter'}"></div>
 * </pre>
 *
 * ngAnimate will first examine any CSS animation code and then fallback to using CSS transitions.
 *
 * Upon DOM mutation, the event class is added first, then the browser is allowed to reflow the content and then,
 * the active class is added to trigger the animation. The ngAnimate directive will automatically extract the duration
 * of the animation to determine when the animation ends. Once the animation is over then both CSS classes will be
 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
 * immediately resulting in a DOM element that is at it's final state. This final state is when the DOM element
 * has no CSS transition/animation classes surrounding it.
 *
 * <h2>JavaScript-defined Animations</h2>
 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations to browsers that do not
 * yet support them, then you can make use of JavaScript animations defined inside of your AngularJS module.
 *
 * <pre>
 * var ngModule = angular.module('YourApp', []);
 * ngModule.animation('animate-enter', function() {
 *   return {
 *     setup : function(element) {
 *       //prepare the element for animation
 *       element.css({ 'opacity': 0 });
 *       var memo = "..."; //this value is passed to the start function
 *       return memo;
 *     },
 *     start : function(element, done, memo) {
 *       //start the animation
 *       element.animate({
 *         'opacity' : 1
 *       }, function() {
 *         //call when the animation is complete
 *         done()
 *       });
 *     }
 *   }
 * });
 * </pre>
 *
 * As you can see, the JavaScript code follows a similar template to the CSS3 animations. Once defined, the animation
 * can be used in the same way with the ngAnimate attribute. Keep in mind that, when using JavaScript-enabled
 * animations, ngAnimate will also add in the same CSS classes that CSS-enabled animations do (even if you're not using
 * CSS animations) to animated the element, but it will not attempt to find any CSS3 transition or animation duration/delay values.
 * It will instead close off the animation once the provided done function is executed. So it's important that you
 * make sure your animations remember to fire off the done function once the animations are complete.
 *
 * @param {expression} ngAnimate Used to configure the DOM manipulation animations.
 *
 */

var $AnimatorProvider = function() {
  var NG_ANIMATE_CONTROLLER = '$ngAnimateController';
  var rootAnimateController = {running:true};

  this.$get = ['$animation', '$window', '$sniffer', '$rootElement', '$rootScope',
      function($animation, $window, $sniffer, $rootElement, $rootScope) {
    $rootElement.data(NG_ANIMATE_CONTROLLER, rootAnimateController);

    /**
     * @ngdoc function
     * @name ng.$animator
     * @function
     *
     * @description
     * The $animator.create service provides the DOM manipulation API which is decorated with animations.
     *
     * @param {Scope} scope the scope for the ng-animate.
     * @param {Attributes} attr the attributes object which contains the ngAnimate key / value pair. (The attributes are
     *        passed into the linking function of the directive using the `$animator`.)
     * @return {object} the animator object which contains the enter, leave, move, show, hide and animate methods.
     */
     var AnimatorService = function(scope, attrs) {
        var animator = {};
  
        /**
         * @ngdoc function
         * @name ng.animator#enter
         * @methodOf ng.$animator
         * @function
         *
         * @description
         * Injects the element object into the DOM (inside of the parent element) and then runs the enter animation.
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the enter animation
         * @param {jQuery/jqLite element} parent the parent element of the element that will be the focus of the enter animation
         * @param {jQuery/jqLite element} after the sibling element (which is the previous element) of the element that will be the focus of the enter animation
        */
        animator.enter = animateActionFactory('enter', insert, noop);
  
        /**
         * @ngdoc function
         * @name ng.animator#leave
         * @methodOf ng.$animator
         * @function
         *
         * @description
         * Runs the leave animation operation and, upon completion, removes the element from the DOM.
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the leave animation
         * @param {jQuery/jqLite element} parent the parent element of the element that will be the focus of the leave animation
        */
        animator.leave = animateActionFactory('leave', noop, remove);
  
        /**
         * @ngdoc function
         * @name ng.animator#move
         * @methodOf ng.$animator
         * @function
         *
         * @description
         * Fires the move DOM operation. Just before the animation starts, the animator will either append it into the parent container or
         * add the element directly after the after element if present. Then the move animation will be run.
         *
         * @param {jQuery/jqLite element} element the element that will be the focus of the move animation
         * @param {jQuery/jqLite element} parent the parent element of the element that will be the focus of the move animation
         * @param {jQuery/jqLite element} after the sibling element (which is the previous element) of the element that will be the focus of the move animation
        */
        animator.move = animateActionFactory('move', move, noop);
  
        /**
         * @ngdoc function
         * @name ng.animator#show
         * @methodOf ng.$animator
         * @function
         *
         * @description
         * Reveals the element by setting the CSS property `display` to `block` and then starts the show animation directly after.
         *
         * @param {jQuery/jqLite element} element the element that will be rendered visible or hidden
        */
        animator.show = animateActionFactory('show', show, noop);
  
        /**
         * @ngdoc function
         * @name ng.animator#hide
         * @methodOf ng.$animator
         *
         * @description
         * Starts the hide animation first and sets the CSS `display` property to `none` upon completion.
         *
         * @param {jQuery/jqLite element} element the element that will be rendered visible or hidden
        */
        animator.hide = animateActionFactory('hide', noop, hide);

        /**
         * @ngdoc function
         * @name ng.animator#animate
         * @methodOf ng.$animator
         *
         * @description
         * Triggers a custom animation event to be executed on the given element
         *
         * @param {jQuery/jqLite element} element that will be animated
        */
        animator.animate = function(event, element) {
          animateActionFactory(event, noop, noop)(element);
        }
        return animator;
  
        function animateActionFactory(type, beforeFn, afterFn) {
          return function(element, parent, after) {
            var ngAnimateValue = scope.$eval(attrs.ngAnimate);
            var className = ngAnimateValue
                ? isObject(ngAnimateValue) ? ngAnimateValue[type] : ngAnimateValue + '-' + type
                : '';
            var animationPolyfill = $animation(className);
            var polyfillSetup = animationPolyfill && animationPolyfill.setup;
            var polyfillStart = animationPolyfill && animationPolyfill.start;
            var polyfillCancel = animationPolyfill && animationPolyfill.cancel;

            if (!className) {
              beforeFn(element, parent, after);
              afterFn(element, parent, after);
            } else {
              var activeClassName = className + '-active';

              if (!parent) {
                parent = after ? after.parent() : element.parent();
              }
              if ((!$sniffer.transitions && !polyfillSetup && !polyfillStart) ||
                  (parent.inheritedData(NG_ANIMATE_CONTROLLER) || noop).running) {
                beforeFn(element, parent, after);
                afterFn(element, parent, after);
                return;
              }

              var animationData = element.data(NG_ANIMATE_CONTROLLER) || {};
              if(animationData.running) {
                (polyfillCancel || noop)(element);
                animationData.done();
              }

              element.data(NG_ANIMATE_CONTROLLER, {running:true, done:done});
              element.addClass(className);
              beforeFn(element, parent, after);
              if (element.length == 0) return done();

              var memento = (polyfillSetup || noop)(element);

              // $window.setTimeout(beginAnimation, 0); this was causing the element not to animate
              // keep at 1 for animation dom rerender
              $window.setTimeout(beginAnimation, 1);
            }

            function parseMaxTime(str) {
              var total = 0, values = isString(str) ? str.split(/\s*,\s*/) : [];
              forEach(values, function(value) {
                total = Math.max(parseFloat(value) || 0, total);
              });
              return total;
            }

            function beginAnimation() {
              element.addClass(activeClassName);
              if (polyfillStart) {
                polyfillStart(element, done, memento);
              } else if (isFunction($window.getComputedStyle)) {
                //one day all browsers will have these properties
                var w3cAnimationProp = 'animation'; 
                var w3cTransitionProp = 'transition';

                //but some still use vendor-prefixed styles 
                var vendorAnimationProp = $sniffer.vendorPrefix + 'Animation';
                var vendorTransitionProp = $sniffer.vendorPrefix + 'Transition';

                var durationKey = 'Duration',
                    delayKey = 'Delay',
                    animationIterationCountKey = 'IterationCount',
                    duration = 0;
                
                //we want all the styles defined before and after
                var ELEMENT_NODE = 1;
                forEach(element, function(element) {
                  if (element.nodeType == ELEMENT_NODE) {
                    var w3cProp = w3cTransitionProp,
                        vendorProp = vendorTransitionProp,
                        iterations = 1,
                        elementStyles = $window.getComputedStyle(element) || {};

                    //use CSS Animations over CSS Transitions
                    if(parseFloat(elementStyles[w3cAnimationProp + durationKey]) > 0 ||
                       parseFloat(elementStyles[vendorAnimationProp + durationKey]) > 0) {
                      w3cProp = w3cAnimationProp;
                      vendorProp = vendorAnimationProp;
                      iterations = Math.max(parseInt(elementStyles[w3cProp    + animationIterationCountKey]) || 0,
                                            parseInt(elementStyles[vendorProp + animationIterationCountKey]) || 0,
                                            iterations);
                    }

                    var parsedDelay     = Math.max(parseMaxTime(elementStyles[w3cProp     + delayKey]),
                                                   parseMaxTime(elementStyles[vendorProp  + delayKey]));

                    var parsedDuration  = Math.max(parseMaxTime(elementStyles[w3cProp     + durationKey]),
                                                   parseMaxTime(elementStyles[vendorProp  + durationKey]));

                    duration = Math.max(parsedDelay + (iterations * parsedDuration), duration);
                  }
                });
                $window.setTimeout(done, duration * 1000);
              } else {
                done();
              }
            }

            function done() {
              if(!done.run) {
                done.run = true;
                afterFn(element, parent, after);
                element.removeClass(className);
                element.removeClass(activeClassName);
                element.removeData(NG_ANIMATE_CONTROLLER);
              }
            }
          };
        }
  
        function show(element) {
          element.css('display', '');
        }
  
        function hide(element) {
          element.css('display', 'none');
        }
  
        function insert(element, parent, after) {
          if (after) {
            after.after(element);
          } else {
            parent.append(element);
          }
        }
  
        function remove(element) {
          element.remove();
        }
  
        function move(element, parent, after) {
          // Do not remove element before insert. Removing will cause data associated with the
          // element to be dropped. Insert will implicitly do the remove.
          insert(element, parent, after);
        }
      };

    /**
     * @ngdoc function
     * @name ng.animator#enabled
     * @methodOf ng.$animator
     * @function
     *
     * @param {Boolean=} If provided then set the animation on or off.
     * @return {Boolean} Current animation state.
     *
     * @description
     * Globally enables/disables animations.
     *
    */
    AnimatorService.enabled = function(value) {
      if (arguments.length) {
        rootAnimateController.running = !value;
      }
      return !rootAnimateController.running;
    };

    return AnimatorService;
  }];
};

/**
 * ! This is a private undocumented service !
 *
 * @name ng.$browser
 * @requires $log
 * @description
 * This object has two goals:
 *
 * - hide all the global state in the browser caused by the window object
 * - abstract away all the browser specific features and inconsistencies
 *
 * For tests we provide {@link ngMock.$browser mock implementation} of the `$browser`
 * service, which can be used for convenient testing of the application without the interaction with
 * the real browser apis.
 */
/**
 * @param {object} window The global window object.
 * @param {object} document jQuery wrapped document.
 * @param {function()} XHR XMLHttpRequest constructor.
 * @param {object} $log console.log or an object with the same interface.
 * @param {object} $sniffer $sniffer service
 */
function Browser(window, document, $log, $sniffer) {
  var self = this,
      rawDocument = document[0],
      location = window.location,
      history = window.history,
      setTimeout = window.setTimeout,
      clearTimeout = window.clearTimeout,
      pendingDeferIds = {};

  self.isMock = false;

  var outstandingRequestCount = 0;
  var outstandingRequestCallbacks = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = completeOutstandingRequest;
  self.$$incOutstandingRequestCount = function() { outstandingRequestCount++; };

  /**
   * Executes the `fn` function(supports currying) and decrements the `outstandingRequestCallbacks`
   * counter. If the counter reaches 0, all the `outstandingRequestCallbacks` are executed.
   */
  function completeOutstandingRequest(fn) {
    try {
      fn.apply(null, sliceArgs(arguments, 1));
    } finally {
      outstandingRequestCount--;
      if (outstandingRequestCount === 0) {
        while(outstandingRequestCallbacks.length) {
          try {
            outstandingRequestCallbacks.pop()();
          } catch (e) {
            $log.error(e);
          }
        }
      }
    }
  }

  /**
   * @private
   * Note: this method is used only by scenario runner
   * TODO(vojta): prefix this method with $$ ?
   * @param {function()} callback Function that will be called when no outstanding request
   */
  self.notifyWhenNoOutstandingRequests = function(callback) {
    // force browser to execute all pollFns - this is needed so that cookies and other pollers fire
    // at some deterministic time in respect to the test runner's actions. Leaving things up to the
    // regular poller would result in flaky tests.
    forEach(pollFns, function(pollFn){ pollFn(); });

    if (outstandingRequestCount === 0) {
      callback();
    } else {
      outstandingRequestCallbacks.push(callback);
    }
  };

  //////////////////////////////////////////////////////////////
  // Poll Watcher API
  //////////////////////////////////////////////////////////////
  var pollFns = [],
      pollTimeout;

  /**
   * @name ng.$browser#addPollFn
   * @methodOf ng.$browser
   *
   * @param {function()} fn Poll function to add
   *
   * @description
   * Adds a function to the list of functions that poller periodically executes,
   * and starts polling if not started yet.
   *
   * @returns {function()} the added function
   */
  self.addPollFn = function(fn) {
    if (isUndefined(pollTimeout)) startPoller(100, setTimeout);
    pollFns.push(fn);
    return fn;
  };

  /**
   * @param {number} interval How often should browser call poll functions (ms)
   * @param {function()} setTimeout Reference to a real or fake `setTimeout` function.
   *
   * @description
   * Configures the poller to run in the specified intervals, using the specified
   * setTimeout fn and kicks it off.
   */
  function startPoller(interval, setTimeout) {
    (function check() {
      forEach(pollFns, function(pollFn){ pollFn(); });
      pollTimeout = setTimeout(check, interval);
    })();
  }

  //////////////////////////////////////////////////////////////
  // URL API
  //////////////////////////////////////////////////////////////

  var lastBrowserUrl = location.href,
      baseElement = document.find('base');

  /**
   * @name ng.$browser#url
   * @methodOf ng.$browser
   *
   * @description
   * GETTER:
   * Without any argument, this method just returns current value of location.href.
   *
   * SETTER:
   * With at least one argument, this method sets url to new value.
   * If html5 history api supported, pushState/replaceState is used, otherwise
   * location.href/location.replace is used.
   * Returns its own instance to allow chaining
   *
   * NOTE: this api is intended for use only by the $location service. Please use the
   * {@link ng.$location $location service} to change url.
   *
   * @param {string} url New url (when used as setter)
   * @param {boolean=} replace Should new url replace current history record ?
   */
  self.url = function(url, replace) {
    // setter
    if (url) {
      if (lastBrowserUrl == url) return;
      lastBrowserUrl = url;
      if ($sniffer.history) {
        if (replace) history.replaceState(null, '', url);
        else {
          history.pushState(null, '', url);
          // Crazy Opera Bug: http://my.opera.com/community/forums/topic.dml?id=1185462
          baseElement.attr('href', baseElement.attr('href'));
        }
      } else {
        if (replace) location.replace(url);
        else location.href = url;
      }
      return self;
    // getter
    } else {
      // the replacement is a workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=407172
      return location.href.replace(/%27/g,"'");
    }
  };

  var urlChangeListeners = [],
      urlChangeInit = false;

  function fireUrlChange() {
    if (lastBrowserUrl == self.url()) return;

    lastBrowserUrl = self.url();
    forEach(urlChangeListeners, function(listener) {
      listener(self.url());
    });
  }

  /**
   * @name ng.$browser#onUrlChange
   * @methodOf ng.$browser
   * @TODO(vojta): refactor to use node's syntax for events
   *
   * @description
   * Register callback function that will be called, when url changes.
   *
   * It's only called when the url is changed by outside of angular:
   * - user types different url into address bar
   * - user clicks on history (forward/back) button
   * - user clicks on a link
   *
   * It's not called when url is changed by $browser.url() method
   *
   * The listener gets called with new url as parameter.
   *
   * NOTE: this api is intended for use only by the $location service. Please use the
   * {@link ng.$location $location service} to monitor url changes in angular apps.
   *
   * @param {function(string)} listener Listener function to be called when url changes.
   * @return {function(string)} Returns the registered listener fn - handy if the fn is anonymous.
   */
  self.onUrlChange = function(callback) {
    if (!urlChangeInit) {
      // We listen on both (hashchange/popstate) when available, as some browsers (e.g. Opera)
      // don't fire popstate when user change the address bar and don't fire hashchange when url
      // changed by push/replaceState

      // html5 history api - popstate event
      if ($sniffer.history) jqLite(window).bind('popstate', fireUrlChange);
      // hashchange event
      if ($sniffer.hashchange) jqLite(window).bind('hashchange', fireUrlChange);
      // polling
      else self.addPollFn(fireUrlChange);

      urlChangeInit = true;
    }

    urlChangeListeners.push(callback);
    return callback;
  };

  //////////////////////////////////////////////////////////////
  // Misc API
  //////////////////////////////////////////////////////////////

  /**
   * Returns current <base href>
   * (always relative - without domain)
   *
   * @returns {string=}
   */
  self.baseHref = function() {
    var href = baseElement.attr('href');
    return href ? href.replace(/^https?\:\/\/[^\/]*/, '') : '';
  };

  //////////////////////////////////////////////////////////////
  // Cookies API
  //////////////////////////////////////////////////////////////
  var lastCookies = {};
  var lastCookieString = '';
  var cookiePath = self.baseHref();

  /**
   * @name ng.$browser#cookies
   * @methodOf ng.$browser
   *
   * @param {string=} name Cookie name
   * @param {string=} value Cookie value
   *
   * @description
   * The cookies method provides a 'private' low level access to browser cookies.
   * It is not meant to be used directly, use the $cookie service instead.
   *
   * The return values vary depending on the arguments that the method was called with as follows:
   * <ul>
   *   <li>cookies() -> hash of all cookies, this is NOT a copy of the internal state, so do not modify it</li>
   *   <li>cookies(name, value) -> set name to value, if value is undefined delete the cookie</li>
   *   <li>cookies(name) -> the same as (name, undefined) == DELETES (no one calls it right now that way)</li>
   * </ul>
   *
   * @returns {Object} Hash of all cookies (if called without any parameter)
   */
  self.cookies = function(name, value) {
    var cookieLength, cookieArray, cookie, i, index;

    if (name) {
      if (value === undefined) {
        rawDocument.cookie = escape(name) + "=;path=" + cookiePath + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
      } else {
        if (isString(value)) {
          cookieLength = (rawDocument.cookie = escape(name) + '=' + escape(value) + ';path=' + cookiePath).length + 1;

          // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
          // - 300 cookies
          // - 20 cookies per unique domain
          // - 4096 bytes per cookie
          if (cookieLength > 4096) {
            $log.warn("Cookie '"+ name +"' possibly not set or overflowed because it was too large ("+
              cookieLength + " > 4096 bytes)!");
          }
        }
      }
    } else {
      if (rawDocument.cookie !== lastCookieString) {
        lastCookieString = rawDocument.cookie;
        cookieArray = lastCookieString.split("; ");
        lastCookies = {};

        for (i = 0; i < cookieArray.length; i++) {
          cookie = cookieArray[i];
          index = cookie.indexOf('=');
          if (index > 0) { //ignore nameless cookies
            var name = unescape(cookie.substring(0, index));
            // the first value that is seen for a cookie is the most
            // specific one.  values for the same cookie name that
            // follow are for less specific paths.
            if (lastCookies[name] === undefined) {
              lastCookies[name] = unescape(cookie.substring(index + 1));
            }
          }
        }
      }
      return lastCookies;
    }
  };


  /**
   * @name ng.$browser#defer
   * @methodOf ng.$browser
   * @param {function()} fn A function, who's execution should be defered.
   * @param {number=} [delay=0] of milliseconds to defer the function execution.
   * @returns {*} DeferId that can be used to cancel the task via `$browser.defer.cancel()`.
   *
   * @description
   * Executes a fn asynchronously via `setTimeout(fn, delay)`.
   *
   * Unlike when calling `setTimeout` directly, in test this function is mocked and instead of using
   * `setTimeout` in tests, the fns are queued in an array, which can be programmatically flushed
   * via `$browser.defer.flush()`.
   *
   */
  self.defer = function(fn, delay) {
    var timeoutId;
    outstandingRequestCount++;
    timeoutId = setTimeout(function() {
      delete pendingDeferIds[timeoutId];
      completeOutstandingRequest(fn);
    }, delay || 0);
    pendingDeferIds[timeoutId] = true;
    return timeoutId;
  };


  /**
   * @name ng.$browser#defer.cancel
   * @methodOf ng.$browser.defer
   *
   * @description
   * Cancels a defered task identified with `deferId`.
   *
   * @param {*} deferId Token returned by the `$browser.defer` function.
   * @returns {boolean} Returns `true` if the task hasn't executed yet and was successfully canceled.
   */
  self.defer.cancel = function(deferId) {
    if (pendingDeferIds[deferId]) {
      delete pendingDeferIds[deferId];
      clearTimeout(deferId);
      completeOutstandingRequest(noop);
      return true;
    }
    return false;
  };

}

function $BrowserProvider(){
  this.$get = ['$window', '$log', '$sniffer', '$document',
      function( $window,   $log,   $sniffer,   $document){
        return new Browser($window, $document, $log, $sniffer);
      }];
}

/**
 * @ngdoc object
 * @name ng.$cacheFactory
 *
 * @description
 * Factory that constructs cache objects.
 *
 *
 * @param {string} cacheId Name or id of the newly created cache.
 * @param {object=} options Options object that specifies the cache behavior. Properties:
 *
 *   - `{number=}` `capacity` — turns the cache into LRU cache.
 *
 * @returns {object} Newly created cache object with the following set of methods:
 *
 * - `{object}` `info()` — Returns id, size, and options of cache.
 * - `{{*}}` `put({string} key, {*} value)` — Puts a new key-value pair into the cache and returns it.
 * - `{{*}}` `get({string} key)` — Returns cached value for `key` or undefined for cache miss.
 * - `{void}` `remove({string} key)` — Removes a key-value pair from the cache.
 * - `{void}` `removeAll()` — Removes all cached values.
 * - `{void}` `destroy()` — Removes references to this cache from $cacheFactory.
 *
 */
function $CacheFactoryProvider() {

  this.$get = function() {
    var caches = {};

    function cacheFactory(cacheId, options) {
      if (cacheId in caches) {
        throw Error('cacheId ' + cacheId + ' taken');
      }

      var size = 0,
          stats = extend({}, options, {id: cacheId}),
          data = {},
          capacity = (options && options.capacity) || Number.MAX_VALUE,
          lruHash = {},
          freshEnd = null,
          staleEnd = null;

      return caches[cacheId] = {

        put: function(key, value) {
          var lruEntry = lruHash[key] || (lruHash[key] = {key: key});

          refresh(lruEntry);

          if (isUndefined(value)) return;
          if (!(key in data)) size++;
          data[key] = value;

          if (size > capacity) {
            this.remove(staleEnd.key);
          }

          return value;
        },


        get: function(key) {
          var lruEntry = lruHash[key];

          if (!lruEntry) return;

          refresh(lruEntry);

          return data[key];
        },


        remove: function(key) {
          var lruEntry = lruHash[key];

          if (!lruEntry) return;

          if (lruEntry == freshEnd) freshEnd = lruEntry.p;
          if (lruEntry == staleEnd) staleEnd = lruEntry.n;
          link(lruEntry.n,lruEntry.p);

          delete lruHash[key];
          delete data[key];
          size--;
        },


        removeAll: function() {
          data = {};
          size = 0;
          lruHash = {};
          freshEnd = staleEnd = null;
        },


        destroy: function() {
          data = null;
          stats = null;
          lruHash = null;
          delete caches[cacheId];
        },


        info: function() {
          return extend({}, stats, {size: size});
        }
      };


      /**
       * makes the `entry` the freshEnd of the LRU linked list
       */
      function refresh(entry) {
        if (entry != freshEnd) {
          if (!staleEnd) {
            staleEnd = entry;
          } else if (staleEnd == entry) {
            staleEnd = entry.n;
          }

          link(entry.n, entry.p);
          link(entry, freshEnd);
          freshEnd = entry;
          freshEnd.n = null;
        }
      }


      /**
       * bidirectionally links two entries of the LRU linked list
       */
      function link(nextEntry, prevEntry) {
        if (nextEntry != prevEntry) {
          if (nextEntry) nextEntry.p = prevEntry; //p stands for previous, 'prev' didn't minify
          if (prevEntry) prevEntry.n = nextEntry; //n stands for next, 'next' didn't minify
        }
      }
    }


    cacheFactory.info = function() {
      var info = {};
      forEach(caches, function(cache, cacheId) {
        info[cacheId] = cache.info();
      });
      return info;
    };


    cacheFactory.get = function(cacheId) {
      return caches[cacheId];
    };


    return cacheFactory;
  };
}

/**
 * @ngdoc object
 * @name ng.$templateCache
 *
 * @description
 * Cache used for storing html templates.
 *
 * See {@link ng.$cacheFactory $cacheFactory}.
 *
 */
function $TemplateCacheProvider() {
  this.$get = ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('templates');
  }];
}

/* ! VARIABLE/FUNCTION NAMING CONVENTIONS THAT APPLY TO THIS FILE!
 *
 * DOM-related variables:
 *
 * - "node" - DOM Node
 * - "element" - DOM Element or Node
 * - "$node" or "$element" - jqLite-wrapped node or element
 *
 *
 * Compiler related stuff:
 *
 * - "linkFn" - linking fn of a single directive
 * - "nodeLinkFn" - function that aggregates all linking fns for a particular node
 * - "childLinkFn" -  function that aggregates all linking fns for child nodes of a particular node
 * - "compositeLinkFn" - function that aggregates all linking fns for a compilation root (nodeList)
 */


var NON_ASSIGNABLE_MODEL_EXPRESSION = 'Non-assignable model expression: ';


/**
 * @ngdoc function
 * @name ng.$compile
 * @function
 *
 * @description
 * Compiles a piece of HTML string or DOM into a template and produces a template function, which
 * can then be used to link {@link ng.$rootScope.Scope scope} and the template together.
 *
 * The compilation is a process of walking the DOM tree and trying to match DOM elements to
 * {@link ng.$compileProvider#directive directives}. For each match it
 * executes corresponding template function and collects the
 * instance functions into a single template function which is then returned.
 *
 * The template function can then be used once to produce the view or as it is the case with
 * {@link ng.directive:ngRepeat repeater} many-times, in which
 * case each call results in a view that is a DOM clone of the original template.
 *
 <doc:example module="compile">
   <doc:source>
    <script>
      // declare a new module, and inject the $compileProvider
      angular.module('compile', [], function($compileProvider) {
        // configure new 'compile' directive by passing a directive
        // factory function. The factory function injects the '$compile'
        $compileProvider.directive('compile', function($compile) {
          // directive factory creates a link function
          return function(scope, element, attrs) {
            scope.$watch(
              function(scope) {
                 // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
              },
              function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
              }
            );
          };
        })
      });

      function Ctrl($scope) {
        $scope.name = 'Angular';
        $scope.html = 'Hello {{name}}';
      }
    </script>
    <div ng-controller="Ctrl">
      <input ng-model="name"> <br>
      <textarea ng-model="html"></textarea> <br>
      <div compile="html"></div>
    </div>
   </doc:source>
   <doc:scenario>
     it('should auto compile', function() {
       expect(element('div[compile]').text()).toBe('Hello Angular');
       input('html').enter('{{name}}!');
       expect(element('div[compile]').text()).toBe('Angular!');
     });
   </doc:scenario>
 </doc:example>

 *
 *
 * @param {string|DOMElement} element Element or HTML string to compile into a template function.
 * @param {function(angular.Scope[, cloneAttachFn]} transclude function available to directives.
 * @param {number} maxPriority only apply directives lower then given priority (Only effects the
 *                 root element(s), not their children)
 * @returns {function(scope[, cloneAttachFn])} a link function which is used to bind template
 * (a DOM element/tree) to a scope. Where:
 *
 *  * `scope` - A {@link ng.$rootScope.Scope Scope} to bind to.
 *  * `cloneAttachFn` - If `cloneAttachFn` is provided, then the link function will clone the
 *               `template` and call the `cloneAttachFn` function allowing the caller to attach the
 *               cloned elements to the DOM document at the appropriate place. The `cloneAttachFn` is
 *               called as: <br> `cloneAttachFn(clonedElement, scope)` where:
 *
 *      * `clonedElement` - is a clone of the original `element` passed into the compiler.
 *      * `scope` - is the current scope with which the linking function is working with.
 *
 * Calling the linking function returns the element of the template. It is either the original element
 * passed in, or the clone of the element if the `cloneAttachFn` is provided.
 *
 * After linking the view is not updated until after a call to $digest which typically is done by
 * Angular automatically.
 *
 * If you need access to the bound view, there are two ways to do it:
 *
 * - If you are not asking the linking function to clone the template, create the DOM element(s)
 *   before you send them to the compiler and keep this reference around.
 *   <pre>
 *     var element = $compile('<p>{{total}}</p>')(scope);
 *   </pre>
 *
 * - if on the other hand, you need the element to be cloned, the view reference from the original
 *   example would not point to the clone, but rather to the original template that was cloned. In
 *   this case, you can access the clone via the cloneAttachFn:
 *   <pre>
 *     var templateHTML = angular.element('<p>{{total}}</p>'),
 *         scope = ....;
 *
 *     var clonedElement = $compile(templateHTML)(scope, function(clonedElement, scope) {
 *       //attach the clone to DOM document at the right place
 *     });
 *
 *     //now we have reference to the cloned DOM via `clone`
 *   </pre>
 *
 *
 * For information on how the compiler works, see the
 * {@link guide/compiler Angular HTML Compiler} section of the Developer Guide.
 */


/**
 * @ngdoc service
 * @name ng.$compileProvider
 * @function
 *
 * @description
 */
$CompileProvider.$inject = ['$provide'];
function $CompileProvider($provide) {
  var hasDirectives = {},
      Suffix = 'Directive',
      COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
      CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
      MULTI_ROOT_TEMPLATE_ERROR = 'Template must have exactly one root element. was: ',
      urlSanitizationWhitelist = /^\s*(https?|ftp|mailto|file):/;


  /**
   * @ngdoc function
   * @name ng.$compileProvider#directive
   * @methodOf ng.$compileProvider
   * @function
   *
   * @description
   * Register a new directives with the compiler.
   *
   * @param {string} name Name of the directive in camel-case. (ie <code>ngBind</code> which will match as
   *                <code>ng-bind</code>).
   * @param {function} directiveFactory An injectable directive factory function. See {@link guide/directive} for more
   *                info.
   * @returns {ng.$compileProvider} Self for chaining.
   */
   this.directive = function registerDirective(name, directiveFactory) {
    if (isString(name)) {
      assertArg(directiveFactory, 'directive');
      if (!hasDirectives.hasOwnProperty(name)) {
        hasDirectives[name] = [];
        $provide.factory(name + Suffix, ['$injector', '$exceptionHandler',
          function($injector, $exceptionHandler) {
            var directives = [];
            forEach(hasDirectives[name], function(directiveFactory) {
              try {
                var directive = $injector.invoke(directiveFactory);
                if (isFunction(directive)) {
                  directive = { compile: valueFn(directive) };
                } else if (!directive.compile && directive.link) {
                  directive.compile = valueFn(directive.link);
                }
                directive.priority = directive.priority || 0;
                directive.name = directive.name || name;
                directive.require = directive.require || (directive.controller && directive.name);
                directive.restrict = directive.restrict || 'A';
                directives.push(directive);
              } catch (e) {
                $exceptionHandler(e);
              }
            });
            return directives;
          }]);
      }
      hasDirectives[name].push(directiveFactory);
    } else {
      forEach(name, reverseParams(registerDirective));
    }
    return this;
  };


  /**
   * @ngdoc function
   * @name ng.$compileProvider#urlSanitizationWhitelist
   * @methodOf ng.$compileProvider
   * @function
   *
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during a[href] sanitization.
   *
   * The sanitization is a security measure aimed at prevent XSS attacks via html links.
   *
   * Any url about to be assigned to a[href] via data-binding is first normalized and turned into an
   * absolute url. Afterwards the url is matched against the `urlSanitizationWhitelist` regular
   * expression. If a match is found the original url is written into the dom. Otherwise the
   * absolute url is prefixed with `'unsafe:'` string and only then it is written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
  this.urlSanitizationWhitelist = function(regexp) {
    if (isDefined(regexp)) {
      urlSanitizationWhitelist = regexp;
      return this;
    }
    return urlSanitizationWhitelist;
  };


  this.$get = [
            '$injector', '$interpolate', '$exceptionHandler', '$http', '$templateCache', '$parse',
            '$controller', '$rootScope', '$document',
    function($injector,   $interpolate,   $exceptionHandler,   $http,   $templateCache,   $parse,
             $controller,   $rootScope,   $document) {

    var Attributes = function(element, attr) {
      this.$$element = element;
      this.$attr = attr || {};
    };

    Attributes.prototype = {
      $normalize: directiveNormalize,


      /**
       * Set a normalized attribute on the element in a way such that all directives
       * can share the attribute. This function properly handles boolean attributes.
       * @param {string} key Normalized key. (ie ngAttribute)
       * @param {string|boolean} value The value to set. If `null` attribute will be deleted.
       * @param {boolean=} writeAttr If false, does not write the value to DOM element attribute.
       *     Defaults to true.
       * @param {string=} attrName Optional none normalized name. Defaults to key.
       */
      $set: function(key, value, writeAttr, attrName) {
        var booleanKey = getBooleanAttrName(this.$$element[0], key),
            $$observers = this.$$observers,
            normalizedVal;

        if (booleanKey) {
          this.$$element.prop(key, value);
          attrName = booleanKey;
        }

        this[key] = value;

        // translate normalized key to actual key
        if (attrName) {
          this.$attr[key] = attrName;
        } else {
          attrName = this.$attr[key];
          if (!attrName) {
            this.$attr[key] = attrName = snake_case(key, '-');
          }
        }


        // sanitize a[href] values
        if (nodeName_(this.$$element[0]) === 'A' && key === 'href') {
          urlSanitizationNode.setAttribute('href', value);

          // href property always returns normalized absolute url, so we can match against that
          normalizedVal = urlSanitizationNode.href;
          if (!normalizedVal.match(urlSanitizationWhitelist)) {
            this[key] = value = 'unsafe:' + normalizedVal;
          }
        }


        if (writeAttr !== false) {
          if (value === null || value === undefined) {
            this.$$element.removeAttr(attrName);
          } else {
            this.$$element.attr(attrName, value);
          }
        }

        // fire observers
        $$observers && forEach($$observers[key], function(fn) {
          try {
            fn(value);
          } catch (e) {
            $exceptionHandler(e);
          }
        });
      },


      /**
       * Observe an interpolated attribute.
       * The observer will never be called, if given attribute is not interpolated.
       *
       * @param {string} key Normalized key. (ie ngAttribute) .
       * @param {function(*)} fn Function that will be called whenever the attribute value changes.
       * @returns {function(*)} the `fn` Function passed in.
       */
      $observe: function(key, fn) {
        var attrs = this,
            $$observers = (attrs.$$observers || (attrs.$$observers = {})),
            listeners = ($$observers[key] || ($$observers[key] = []));

        listeners.push(fn);
        $rootScope.$evalAsync(function() {
          if (!listeners.$$inter) {
            // no one registered attribute interpolation function, so lets call it manually
            fn(attrs[key]);
          }
        });
        return fn;
      }
    };

    var urlSanitizationNode = $document[0].createElement('a'),
        startSymbol = $interpolate.startSymbol(),
        endSymbol = $interpolate.endSymbol(),
        denormalizeTemplate = (startSymbol == '{{' || endSymbol  == '}}')
            ? identity
            : function denormalizeTemplate(template) {
              return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
        },
        NG_ATTR_BINDING = /^ngAttr[A-Z]/;


    return compile;

    //================================

    function compile($compileNodes, transcludeFn, maxPriority) {
      if (!($compileNodes instanceof jqLite)) {
        // jquery always rewraps, whereas we need to preserve the original selector so that we can modify it.
        $compileNodes = jqLite($compileNodes);
      }
      // We can not compile top level text elements since text nodes can be merged and we will
      // not be able to attach scope data to them, so we will wrap them in <span>
      forEach($compileNodes, function(node, index){
        if (node.nodeType == 3 /* text node */ && node.nodeValue.match(/\S+/) /* non-empty */ ) {
          $compileNodes[index] = jqLite(node).wrap('<span></span>').parent()[0];
        }
      });
      var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority);
      return function publicLinkFn(scope, cloneConnectFn){
        assertArg(scope, 'scope');
        // important!!: we must call our jqLite.clone() since the jQuery one is trying to be smart
        // and sometimes changes the structure of the DOM.
        var $linkNode = cloneConnectFn
          ? JQLitePrototype.clone.call($compileNodes) // IMPORTANT!!!
          : $compileNodes;

        // Attach scope only to non-text nodes.
        for(var i = 0, ii = $linkNode.length; i<ii; i++) {
          var node = $linkNode[i];
          if (node.nodeType == 1 /* element */ || node.nodeType == 9 /* document */) {
            $linkNode.eq(i).data('$scope', scope);
          }
        }
        safeAddClass($linkNode, 'ng-scope');
        if (cloneConnectFn) cloneConnectFn($linkNode, scope);
        if (compositeLinkFn) compositeLinkFn(scope, $linkNode, $linkNode);
        return $linkNode;
      };
    }

    function wrongMode(localName, mode) {
      throw Error("Unsupported '" + mode + "' for '" + localName + "'.");
    }

    function safeAddClass($element, className) {
      try {
        $element.addClass(className);
      } catch(e) {
        // ignore, since it means that we are trying to set class on
        // SVG element, where class name is read-only.
      }
    }

    /**
     * Compile function matches each node in nodeList against the directives. Once all directives
     * for a particular node are collected their compile functions are executed. The compile
     * functions return values - the linking functions - are combined into a composite linking
     * function, which is the a linking function for the node.
     *
     * @param {NodeList} nodeList an array of nodes or NodeList to compile
     * @param {function(angular.Scope[, cloneAttachFn]} transcludeFn A linking function, where the
     *        scope argument is auto-generated to the new child of the transcluded parent scope.
     * @param {DOMElement=} $rootElement If the nodeList is the root of the compilation tree then the
     *        rootElement must be set the jqLite collection of the compile root. This is
     *        needed so that the jqLite collection items can be replaced with widgets.
     * @param {number=} max directive priority
     * @returns {?function} A composite linking function of all of the matched directives or null.
     */
    function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority) {
      var linkFns = [],
          nodeLinkFn, childLinkFn, directives, attrs, linkFnFound;

      for(var i = 0; i < nodeList.length; i++) {
        attrs = new Attributes();

        // we must always refer to nodeList[i] since the nodes can be replaced underneath us.
        directives = collectDirectives(nodeList[i], [], attrs, maxPriority);

        nodeLinkFn = (directives.length)
            ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement)
            : null;

        childLinkFn = (nodeLinkFn && nodeLinkFn.terminal || !nodeList[i].childNodes || !nodeList[i].childNodes.length)
            ? null
            : compileNodes(nodeList[i].childNodes,
                 nodeLinkFn ? nodeLinkFn.transclude : transcludeFn);

        linkFns.push(nodeLinkFn);
        linkFns.push(childLinkFn);
        linkFnFound = (linkFnFound || nodeLinkFn || childLinkFn);
      }

      // return a linking function if we have found anything, null otherwise
      return linkFnFound ? compositeLinkFn : null;

      function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
        var nodeLinkFn, childLinkFn, node, childScope, childTranscludeFn, i, ii, n;

        // copy nodeList so that linking doesn't break due to live list updates.
        var stableNodeList = [];
        for (i = 0, ii = nodeList.length; i < ii; i++) {
          stableNodeList.push(nodeList[i]);
        }

        for(i = 0, n = 0, ii = linkFns.length; i < ii; n++) {
          node = stableNodeList[n];
          nodeLinkFn = linkFns[i++];
          childLinkFn = linkFns[i++];

          if (nodeLinkFn) {
            if (nodeLinkFn.scope) {
              childScope = scope.$new(isObject(nodeLinkFn.scope));
              jqLite(node).data('$scope', childScope);
            } else {
              childScope = scope;
            }
            childTranscludeFn = nodeLinkFn.transclude;
            if (childTranscludeFn || (!boundTranscludeFn && transcludeFn)) {
              nodeLinkFn(childLinkFn, childScope, node, $rootElement,
                  (function(transcludeFn) {
                    return function(cloneFn) {
                      var transcludeScope = scope.$new();
                      transcludeScope.$$transcluded = true;

                      return transcludeFn(transcludeScope, cloneFn).
                          bind('$destroy', bind(transcludeScope, transcludeScope.$destroy));
                    };
                  })(childTranscludeFn || transcludeFn)
              );
            } else {
              nodeLinkFn(childLinkFn, childScope, node, undefined, boundTranscludeFn);
            }
          } else if (childLinkFn) {
            childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
          }
        }
      }
    }


    /**
     * Looks for directives on the given node and adds them to the directive collection which is
     * sorted.
     *
     * @param node Node to search.
     * @param directives An array to which the directives are added to. This array is sorted before
     *        the function returns.
     * @param attrs The shared attrs object which is used to populate the normalized attributes.
     * @param {number=} maxPriority Max directive priority.
     */
    function collectDirectives(node, directives, attrs, maxPriority) {
      var nodeType = node.nodeType,
          attrsMap = attrs.$attr,
          match,
          className;

      switch(nodeType) {
        case 1: /* Element */
          // use the node name: <directive>
          addDirective(directives,
              directiveNormalize(nodeName_(node).toLowerCase()), 'E', maxPriority);

          // iterate over the attributes
          for (var attr, name, nName, ngAttrName, value, nAttrs = node.attributes,
                   j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
            attr = nAttrs[j];
            if (attr.specified) {
              name = attr.name;
              // support ngAttr attribute binding
              ngAttrName = directiveNormalize(name);
              if (NG_ATTR_BINDING.test(ngAttrName)) {
                name = ngAttrName.substr(6).toLowerCase();
              }
              nName = directiveNormalize(name.toLowerCase());
              attrsMap[nName] = name;
              attrs[nName] = value = trim((msie && name == 'href')
                ? decodeURIComponent(node.getAttribute(name, 2))
                : attr.value);
              if (getBooleanAttrName(node, nName)) {
                attrs[nName] = true; // presence means true
              }
              addAttrInterpolateDirective(node, directives, value, nName);
              addDirective(directives, nName, 'A', maxPriority);
            }
          }

          // use class as directive
          className = node.className;
          if (isString(className) && className !== '') {
            while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
              nName = directiveNormalize(match[2]);
              if (addDirective(directives, nName, 'C', maxPriority)) {
                attrs[nName] = trim(match[3]);
              }
              className = className.substr(match.index + match[0].length);
            }
          }
          break;
        case 3: /* Text Node */
          addTextInterpolateDirective(directives, node.nodeValue);
          break;
        case 8: /* Comment */
          try {
            match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
            if (match) {
              nName = directiveNormalize(match[1]);
              if (addDirective(directives, nName, 'M', maxPriority)) {
                attrs[nName] = trim(match[2]);
              }
            }
          } catch (e) {
            // turns out that under some circumstances IE9 throws errors when one attempts to read comment's node value.
            // Just ignore it and continue. (Can't seem to reproduce in test case.)
          }
          break;
      }

      directives.sort(byPriority);
      return directives;
    }


    /**
     * Once the directives have been collected, their compile functions are executed. This method
     * is responsible for inlining directive templates as well as terminating the application
     * of the directives if the terminal directive has been reached.
     *
     * @param {Array} directives Array of collected directives to execute their compile function.
     *        this needs to be pre-sorted by priority order.
     * @param {Node} compileNode The raw DOM node to apply the compile functions to
     * @param {Object} templateAttrs The shared attribute function
     * @param {function(angular.Scope[, cloneAttachFn]} transcludeFn A linking function, where the
     *        scope argument is auto-generated to the new child of the transcluded parent scope.
     * @param {JQLite} jqCollection If we are working on the root of the compile tree then this
     *        argument has the root jqLite array so that we can replace nodes on it.
     * @returns linkFn
     */
    function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection) {
      var terminalPriority = -Number.MAX_VALUE,
          preLinkFns = [],
          postLinkFns = [],
          newScopeDirective = null,
          newIsolateScopeDirective = null,
          templateDirective = null,
          $compileNode = templateAttrs.$$element = jqLite(compileNode),
          directive,
          directiveName,
          $template,
          transcludeDirective,
          childTranscludeFn = transcludeFn,
          controllerDirectives,
          linkFn,
          directiveValue;

      // executes all directives on the current element
      for(var i = 0, ii = directives.length; i < ii; i++) {
        directive = directives[i];
        $template = undefined;

        if (terminalPriority > directive.priority) {
          break; // prevent further processing of directives
        }

        if (directiveValue = directive.scope) {
          assertNoDuplicate('isolated scope', newIsolateScopeDirective, directive, $compileNode);
          if (isObject(directiveValue)) {
            safeAddClass($compileNode, 'ng-isolate-scope');
            newIsolateScopeDirective = directive;
          }
          safeAddClass($compileNode, 'ng-scope');
          newScopeDirective = newScopeDirective || directive;
        }

        directiveName = directive.name;

        if (directiveValue = directive.controller) {
          controllerDirectives = controllerDirectives || {};
          assertNoDuplicate("'" + directiveName + "' controller",
              controllerDirectives[directiveName], directive, $compileNode);
          controllerDirectives[directiveName] = directive;
        }

        if (directiveValue = directive.transclude) {
          assertNoDuplicate('transclusion', transcludeDirective, directive, $compileNode);
          transcludeDirective = directive;
          terminalPriority = directive.priority;
          if (directiveValue == 'element') {
            $template = jqLite(compileNode);
            $compileNode = templateAttrs.$$element =
                jqLite(document.createComment(' ' + directiveName + ': ' + templateAttrs[directiveName] + ' '));
            compileNode = $compileNode[0];
            replaceWith(jqCollection, jqLite($template[0]), compileNode);
            childTranscludeFn = compile($template, transcludeFn, terminalPriority);
          } else {
            $template = jqLite(JQLiteClone(compileNode)).contents();
            $compileNode.html(''); // clear contents
            childTranscludeFn = compile($template, transcludeFn);
          }
        }

        if (directive.template) {
          assertNoDuplicate('template', templateDirective, directive, $compileNode);
          templateDirective = directive;

          directiveValue = (isFunction(directive.template))
              ? directive.template($compileNode, templateAttrs)
              : directive.template;

          directiveValue = denormalizeTemplate(directiveValue);

          if (directive.replace) {
            $template = jqLite('<div>' +
                                 trim(directiveValue) +
                               '</div>').contents();
            compileNode = $template[0];

            if ($template.length != 1 || compileNode.nodeType !== 1) {
              throw new Error(MULTI_ROOT_TEMPLATE_ERROR + directiveValue);
            }

            replaceWith(jqCollection, $compileNode, compileNode);

            var newTemplateAttrs = {$attr: {}};

            // combine directives from the original node and from the template:
            // - take the array of directives for this element
            // - split it into two parts, those that were already applied and those that weren't
            // - collect directives from the template, add them to the second group and sort them
            // - append the second group with new directives to the first group
            directives = directives.concat(
                collectDirectives(
                    compileNode,
                    directives.splice(i + 1, directives.length - (i + 1)),
                    newTemplateAttrs
                )
            );
            mergeTemplateAttributes(templateAttrs, newTemplateAttrs);

            ii = directives.length;
          } else {
            $compileNode.html(directiveValue);
          }
        }

        if (directive.templateUrl) {
          assertNoDuplicate('template', templateDirective, directive, $compileNode);
          templateDirective = directive;
          nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i),
              nodeLinkFn, $compileNode, templateAttrs, jqCollection, directive.replace,
              childTranscludeFn);
          ii = directives.length;
        } else if (directive.compile) {
          try {
            linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
            if (isFunction(linkFn)) {
              addLinkFns(null, linkFn);
            } else if (linkFn) {
              addLinkFns(linkFn.pre, linkFn.post);
            }
          } catch (e) {
            $exceptionHandler(e, startingTag($compileNode));
          }
        }

        if (directive.terminal) {
          nodeLinkFn.terminal = true;
          terminalPriority = Math.max(terminalPriority, directive.priority);
        }

      }

      nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope;
      nodeLinkFn.transclude = transcludeDirective && childTranscludeFn;

      // might be normal or delayed nodeLinkFn depending on if templateUrl is present
      return nodeLinkFn;

      ////////////////////

      function addLinkFns(pre, post) {
        if (pre) {
          pre.require = directive.require;
          preLinkFns.push(pre);
        }
        if (post) {
          post.require = directive.require;
          postLinkFns.push(post);
        }
      }


      function getControllers(require, $element) {
        var value, retrievalMethod = 'data', optional = false;
        if (isString(require)) {
          while((value = require.charAt(0)) == '^' || value == '?') {
            require = require.substr(1);
            if (value == '^') {
              retrievalMethod = 'inheritedData';
            }
            optional = optional || value == '?';
          }
          value = $element[retrievalMethod]('$' + require + 'Controller');
          if (!value && !optional) {
            throw Error("No controller: " + require);
          }
          return value;
        } else if (isArray(require)) {
          value = [];
          forEach(require, function(require) {
            value.push(getControllers(require, $element));
          });
        }
        return value;
      }


      function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
        var attrs, $element, i, ii, linkFn, controller;

        if (compileNode === linkNode) {
          attrs = templateAttrs;
        } else {
          attrs = shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr));
        }
        $element = attrs.$$element;

        if (newIsolateScopeDirective) {
          var LOCAL_REGEXP = /^\s*([@=&])(\??)\s*(\w*)\s*$/;

          var parentScope = scope.$parent || scope;

          forEach(newIsolateScopeDirective.scope, function(definiton, scopeName) {
            var match = definiton.match(LOCAL_REGEXP) || [],
                attrName = match[3] || scopeName,
                optional = (match[2] == '?'),
                mode = match[1], // @, =, or &
                lastValue,
                parentGet, parentSet;

            scope.$$isolateBindings[scopeName] = mode + attrName;

            switch (mode) {

              case '@': {
                attrs.$observe(attrName, function(value) {
                  scope[scopeName] = value;
                });
                attrs.$$observers[attrName].$$scope = parentScope;
                if( attrs[attrName] ) {
                  // If the attribute has been provided then we trigger an interpolation to ensure the value is there for use in the link fn
                  scope[scopeName] = $interpolate(attrs[attrName])(parentScope);
                }
                break;
              }

              case '=': {
                if (optional && !attrs[attrName]) {
                  return;
                }
                parentGet = $parse(attrs[attrName]);
                parentSet = parentGet.assign || function() {
                  // reset the change, or we will throw this exception on every $digest
                  lastValue = scope[scopeName] = parentGet(parentScope);
                  throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + attrs[attrName] +
                      ' (directive: ' + newIsolateScopeDirective.name + ')');
                };
                lastValue = scope[scopeName] = parentGet(parentScope);
                scope.$watch(function parentValueWatch() {
                  var parentValue = parentGet(parentScope);

                  if (parentValue !== scope[scopeName]) {
                    // we are out of sync and need to copy
                    if (parentValue !== lastValue) {
                      // parent changed and it has precedence
                      lastValue = scope[scopeName] = parentValue;
                    } else {
                      // if the parent can be assigned then do so
                      parentSet(parentScope, parentValue = lastValue = scope[scopeName]);
                    }
                  }
                  return parentValue;
                });
                break;
              }

              case '&': {
                parentGet = $parse(attrs[attrName]);
                scope[scopeName] = function(locals) {
                  return parentGet(parentScope, locals);
                };
                break;
              }

              default: {
                throw Error('Invalid isolate scope definition for directive ' +
                    newIsolateScopeDirective.name + ': ' + definiton);
              }
            }
          });
        }

        if (controllerDirectives) {
          forEach(controllerDirectives, function(directive) {
            var locals = {
              $scope: scope,
              $element: $element,
              $attrs: attrs,
              $transclude: boundTranscludeFn
            };

            controller = directive.controller;
            if (controller == '@') {
              controller = attrs[directive.name];
            }

            $element.data(
                '$' + directive.name + 'Controller',
                $controller(controller, locals));
          });
        }

        // PRELINKING
        for(i = 0, ii = preLinkFns.length; i < ii; i++) {
          try {
            linkFn = preLinkFns[i];
            linkFn(scope, $element, attrs,
                linkFn.require && getControllers(linkFn.require, $element));
          } catch (e) {
            $exceptionHandler(e, startingTag($element));
          }
        }

        // RECURSION
        childLinkFn && childLinkFn(scope, linkNode.childNodes, undefined, boundTranscludeFn);

        // POSTLINKING
        for(i = 0, ii = postLinkFns.length; i < ii; i++) {
          try {
            linkFn = postLinkFns[i];
            linkFn(scope, $element, attrs,
                linkFn.require && getControllers(linkFn.require, $element));
          } catch (e) {
            $exceptionHandler(e, startingTag($element));
          }
        }
      }
    }


    /**
     * looks up the directive and decorates it with exception handling and proper parameters. We
     * call this the boundDirective.
     *
     * @param {string} name name of the directive to look up.
     * @param {string} location The directive must be found in specific format.
     *   String containing any of theses characters:
     *
     *   * `E`: element name
     *   * `A': attribute
     *   * `C`: class
     *   * `M`: comment
     * @returns true if directive was added.
     */
    function addDirective(tDirectives, name, location, maxPriority) {
      var match = false;
      if (hasDirectives.hasOwnProperty(name)) {
        for(var directive, directives = $injector.get(name + Suffix),
            i = 0, ii = directives.length; i<ii; i++) {
          try {
            directive = directives[i];
            if ( (maxPriority === undefined || maxPriority > directive.priority) &&
                 directive.restrict.indexOf(location) != -1) {
              tDirectives.push(directive);
              match = true;
            }
          } catch(e) { $exceptionHandler(e); }
        }
      }
      return match;
    }


    /**
     * When the element is replaced with HTML template then the new attributes
     * on the template need to be merged with the existing attributes in the DOM.
     * The desired effect is to have both of the attributes present.
     *
     * @param {object} dst destination attributes (original DOM)
     * @param {object} src source attributes (from the directive template)
     */
    function mergeTemplateAttributes(dst, src) {
      var srcAttr = src.$attr,
          dstAttr = dst.$attr,
          $element = dst.$$element;

      // reapply the old attributes to the new element
      forEach(dst, function(value, key) {
        if (key.charAt(0) != '$') {
          if (src[key]) {
            value += (key === 'style' ? ';' : ' ') + src[key];
          }
          dst.$set(key, value, true, srcAttr[key]);
        }
      });

      // copy the new attributes on the old attrs object
      forEach(src, function(value, key) {
        if (key == 'class') {
          safeAddClass($element, value);
          dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
        } else if (key == 'style') {
          $element.attr('style', $element.attr('style') + ';' + value);
        } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
          dst[key] = value;
          dstAttr[key] = srcAttr[key];
        }
      });
    }


    function compileTemplateUrl(directives, beforeTemplateNodeLinkFn, $compileNode, tAttrs,
        $rootElement, replace, childTranscludeFn) {
      var linkQueue = [],
          afterTemplateNodeLinkFn,
          afterTemplateChildLinkFn,
          beforeTemplateCompileNode = $compileNode[0],
          origAsyncDirective = directives.shift(),
          // The fact that we have to copy and patch the directive seems wrong!
          derivedSyncDirective = extend({}, origAsyncDirective, {
            controller: null, templateUrl: null, transclude: null, scope: null
          }),
          templateUrl = (isFunction(origAsyncDirective.templateUrl))
              ? origAsyncDirective.templateUrl($compileNode, tAttrs)
              : origAsyncDirective.templateUrl;

      $compileNode.html('');

      $http.get(templateUrl, {cache: $templateCache}).
        success(function(content) {
          var compileNode, tempTemplateAttrs, $template;

          content = denormalizeTemplate(content);

          if (replace) {
            $template = jqLite('<div>' + trim(content) + '</div>').contents();
            compileNode = $template[0];

            if ($template.length != 1 || compileNode.nodeType !== 1) {
              throw new Error(MULTI_ROOT_TEMPLATE_ERROR + content);
            }

            tempTemplateAttrs = {$attr: {}};
            replaceWith($rootElement, $compileNode, compileNode);
            collectDirectives(compileNode, directives, tempTemplateAttrs);
            mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
          } else {
            compileNode = beforeTemplateCompileNode;
            $compileNode.html(content);
          }

          directives.unshift(derivedSyncDirective);
          afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn);
          afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);


          while(linkQueue.length) {
            var scope = linkQueue.shift(),
                beforeTemplateLinkNode = linkQueue.shift(),
                linkRootElement = linkQueue.shift(),
                controller = linkQueue.shift(),
                linkNode = compileNode;

            if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
              // it was cloned therefore we have to clone as well.
              linkNode = JQLiteClone(compileNode);
              replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
            }

            afterTemplateNodeLinkFn(function() {
              beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, controller);
            }, scope, linkNode, $rootElement, controller);
          }
          linkQueue = null;
        }).
        error(function(response, code, headers, config) {
          throw Error('Failed to load template: ' + config.url);
        });

      return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, controller) {
        if (linkQueue) {
          linkQueue.push(scope);
          linkQueue.push(node);
          linkQueue.push(rootElement);
          linkQueue.push(controller);
        } else {
          afterTemplateNodeLinkFn(function() {
            beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, controller);
          }, scope, node, rootElement, controller);
        }
      };
    }


    /**
     * Sorting function for bound directives.
     */
    function byPriority(a, b) {
      return b.priority - a.priority;
    }


    function assertNoDuplicate(what, previousDirective, directive, element) {
      if (previousDirective) {
        throw Error('Multiple directives [' + previousDirective.name + ', ' +
          directive.name + '] asking for ' + what + ' on: ' +  startingTag(element));
      }
    }


    function addTextInterpolateDirective(directives, text) {
      var interpolateFn = $interpolate(text, true);
      if (interpolateFn) {
        directives.push({
          priority: 0,
          compile: valueFn(function textInterpolateLinkFn(scope, node) {
            var parent = node.parent(),
                bindings = parent.data('$binding') || [];
            bindings.push(interpolateFn);
            safeAddClass(parent.data('$binding', bindings), 'ng-binding');
            scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
              node[0].nodeValue = value;
            });
          })
        });
      }
    }


    function addAttrInterpolateDirective(node, directives, value, name) {
      var interpolateFn = $interpolate(value, true);

      // no interpolation found -> ignore
      if (!interpolateFn) return;


      directives.push({
        priority: 100,
        compile: valueFn(function attrInterpolateLinkFn(scope, element, attr) {
          var $$observers = (attr.$$observers || (attr.$$observers = {}));

          // we need to interpolate again, in case the attribute value has been updated
          // (e.g. by another directive's compile function)
          interpolateFn = $interpolate(attr[name], true);

          // if attribute was updated so that there is no interpolation going on we don't want to
          // register any observers
          if (!interpolateFn) return;

          attr[name] = interpolateFn(scope);
          ($$observers[name] || ($$observers[name] = [])).$$inter = true;
          (attr.$$observers && attr.$$observers[name].$$scope || scope).
            $watch(interpolateFn, function interpolateFnWatchAction(value) {
              attr.$set(name, value);
            });
        })
      });
    }


    /**
     * This is a special jqLite.replaceWith, which can replace items which
     * have no parents, provided that the containing jqLite collection is provided.
     *
     * @param {JqLite=} $rootElement The root of the compile tree. Used so that we can replace nodes
     *    in the root of the tree.
     * @param {JqLite} $element The jqLite element which we are going to replace. We keep the shell,
     *    but replace its DOM node reference.
     * @param {Node} newNode The new DOM node.
     */
    function replaceWith($rootElement, $element, newNode) {
      var oldNode = $element[0],
          parent = oldNode.parentNode,
          i, ii;

      if ($rootElement) {
        for(i = 0, ii = $rootElement.length; i < ii; i++) {
          if ($rootElement[i] == oldNode) {
            $rootElement[i] = newNode;
            break;
          }
        }
      }

      if (parent) {
        parent.replaceChild(newNode, oldNode);
      }

      newNode[jqLite.expando] = oldNode[jqLite.expando];
      $element[0] = newNode;
    }
  }];
}

var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i;
/**
 * Converts all accepted directives format into proper directive name.
 * All of these will become 'myDirective':
 *   my:DiRective
 *   my-directive
 *   x-my-directive
 *   data-my:directive
 *
 * Also there is special case for Moz prefix starting with upper case letter.
 * @param name Name to normalize
 */
function directiveNormalize(name) {
  return camelCase(name.replace(PREFIX_REGEXP, ''));
}

/**
 * @ngdoc object
 * @name ng.$compile.directive.Attributes
 * @description
 *
 * A shared object between directive compile / linking functions which contains normalized DOM element
 * attributes. The the values reflect current binding state `{{ }}`. The normalization is needed
 * since all of these are treated as equivalent in Angular:
 *
 *          <span ng:bind="a" ng-bind="a" data-ng-bind="a" x-ng-bind="a">
 */

/**
 * @ngdoc property
 * @name ng.$compile.directive.Attributes#$attr
 * @propertyOf ng.$compile.directive.Attributes
 * @returns {object} A map of DOM element attribute names to the normalized name. This is
 *          needed to do reverse lookup from normalized name back to actual name.
 */


/**
 * @ngdoc function
 * @name ng.$compile.directive.Attributes#$set
 * @methodOf ng.$compile.directive.Attributes
 * @function
 *
 * @description
 * Set DOM element attribute value.
 *
 *
 * @param {string} name Normalized element attribute name of the property to modify. The name is
 *          revers translated using the {@link ng.$compile.directive.Attributes#$attr $attr}
 *          property to the original name.
 * @param {string} value Value to set the attribute to. The value can be an interpolated string.
 */



/**
 * Closure compiler type information
 */

function nodesetLinkingFn(
  /* angular.Scope */ scope,
  /* NodeList */ nodeList,
  /* Element */ rootElement,
  /* function(Function) */ boundTranscludeFn
){}

function directiveLinkingFn(
  /* nodesetLinkingFn */ nodesetLinkingFn,
  /* angular.Scope */ scope,
  /* Node */ node,
  /* Element */ rootElement,
  /* function(Function) */ boundTranscludeFn
){}

/**
 * @ngdoc object
 * @name ng.$controllerProvider
 * @description
 * The {@link ng.$controller $controller service} is used by Angular to create new
 * controllers.
 *
 * This provider allows controller registration via the
 * {@link ng.$controllerProvider#register register} method.
 */
function $ControllerProvider() {
  var controllers = {},
      CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;


  /**
   * @ngdoc function
   * @name ng.$controllerProvider#register
   * @methodOf ng.$controllerProvider
   * @param {string} name Controller name
   * @param {Function|Array} constructor Controller constructor fn (optionally decorated with DI
   *    annotations in the array notation).
   */
  this.register = function(name, constructor) {
    if (isObject(name)) {
      extend(controllers, name)
    } else {
      controllers[name] = constructor;
    }
  };


  this.$get = ['$injector', '$window', function($injector, $window) {

    /**
     * @ngdoc function
     * @name ng.$controller
     * @requires $injector
     *
     * @param {Function|string} constructor If called with a function then it's considered to be the
     *    controller constructor function. Otherwise it's considered to be a string which is used
     *    to retrieve the controller constructor using the following steps:
     *
     *    * check if a controller with given name is registered via `$controllerProvider`
     *    * check if evaluating the string on the current scope returns a constructor
     *    * check `window[constructor]` on the global `window` object
     *
     * @param {Object} locals Injection locals for Controller.
     * @return {Object} Instance of given controller.
     *
     * @description
     * `$controller` service is responsible for instantiating controllers.
     *
     * It's just a simple call to {@link AUTO.$injector $injector}, but extracted into
     * a service, so that one can override this service with {@link https://gist.github.com/1649788
     * BC version}.
     */
    return function(expression, locals) {
      var instance, match, constructor, identifier;

      if(isString(expression)) {
        match = expression.match(CNTRL_REG),
        constructor = match[1],
        identifier = match[3];
        expression = controllers.hasOwnProperty(constructor)
            ? controllers[constructor]
            : getter(locals.$scope, constructor, true) || getter($window, constructor, true);

        assertArgFn(expression, constructor, true);
      }

      instance = $injector.instantiate(expression, locals);

      if (identifier) {
        if (typeof locals.$scope !== 'object') {
          throw new Error('Can not export controller as "' + identifier + '". ' +
              'No scope object provided!');
        }

        locals.$scope[identifier] = instance;
      }

      return instance;
    };
  }];
}

/**
 * @ngdoc object
 * @name ng.$document
 * @requires $window
 *
 * @description
 * A {@link angular.element jQuery (lite)}-wrapped reference to the browser's `window.document`
 * element.
 */
function $DocumentProvider(){
  this.$get = ['$window', function(window){
    return jqLite(window.document);
  }];
}

/**
 * @ngdoc function
 * @name ng.$exceptionHandler
 * @requires $log
 *
 * @description
 * Any uncaught exception in angular expressions is delegated to this service.
 * The default implementation simply delegates to `$log.error` which logs it into
 * the browser console.
 *
 * In unit tests, if `angular-mocks.js` is loaded, this service is overridden by
 * {@link ngMock.$exceptionHandler mock $exceptionHandler} which aids in testing.
 *
 * @param {Error} exception Exception associated with the error.
 * @param {string=} cause optional information about the context in which
 *       the error was thrown.
 *
 */
function $ExceptionHandlerProvider() {
  this.$get = ['$log', function($log) {
    return function(exception, cause) {
      $log.error.apply($log, arguments);
    };
  }];
}

/**
 * @ngdoc object
 * @name ng.$interpolateProvider
 * @function
 *
 * @description
 *
 * Used for configuring the interpolation markup. Defaults to `{{` and `}}`.
 */
function $InterpolateProvider() {
  var startSymbol = '{{';
  var endSymbol = '}}';

  /**
   * @ngdoc method
   * @name ng.$interpolateProvider#startSymbol
   * @methodOf ng.$interpolateProvider
   * @description
   * Symbol to denote start of expression in the interpolated string. Defaults to `{{`.
   *
   * @param {string=} value new value to set the starting symbol to.
   * @returns {string|self} Returns the symbol when used as getter and self if used as setter.
   */
  this.startSymbol = function(value){
    if (value) {
      startSymbol = value;
      return this;
    } else {
      return startSymbol;
    }
  };

  /**
   * @ngdoc method
   * @name ng.$interpolateProvider#endSymbol
   * @methodOf ng.$interpolateProvider
   * @description
   * Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.
   *
   * @param {string=} value new value to set the ending symbol to.
   * @returns {string|self} Returns the symbol when used as getter and self if used as setter.
   */
  this.endSymbol = function(value){
    if (value) {
      endSymbol = value;
      return this;
    } else {
      return endSymbol;
    }
  };


  this.$get = ['$parse', '$exceptionHandler', function($parse, $exceptionHandler) {
    var startSymbolLength = startSymbol.length,
        endSymbolLength = endSymbol.length;

    /**
     * @ngdoc function
     * @name ng.$interpolate
     * @function
     *
     * @requires $parse
     *
     * @description
     *
     * Compiles a string with markup into an interpolation function. This service is used by the
     * HTML {@link ng.$compile $compile} service for data binding. See
     * {@link ng.$interpolateProvider $interpolateProvider} for configuring the
     * interpolation markup.
     *
     *
       <pre>
         var $interpolate = ...; // injected
         var exp = $interpolate('Hello {{name}}!');
         expect(exp({name:'Angular'}).toEqual('Hello Angular!');
       </pre>
     *
     *
     * @param {string} text The text with markup to interpolate.
     * @param {boolean=} mustHaveExpression if set to true then the interpolation string must have
     *    embedded expression in order to return an interpolation function. Strings with no
     *    embedded expression will return null for the interpolation function.
     * @returns {function(context)} an interpolation function which is used to compute the interpolated
     *    string. The function has these parameters:
     *
     *    * `context`: an object against which any expressions embedded in the strings are evaluated
     *      against.
     *
     */
    function $interpolate(text, mustHaveExpression) {
      var startIndex,
          endIndex,
          index = 0,
          parts = [],
          length = text.length,
          hasInterpolation = false,
          fn,
          exp,
          concat = [];

      while(index < length) {
        if ( ((startIndex = text.indexOf(startSymbol, index)) != -1) &&
             ((endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1) ) {
          (index != startIndex) && parts.push(text.substring(index, startIndex));
          parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex)));
          fn.exp = exp;
          index = endIndex + endSymbolLength;
          hasInterpolation = true;
        } else {
          // we did not find anything, so we have to add the remainder to the parts array
          (index != length) && parts.push(text.substring(index));
          index = length;
        }
      }

      if (!(length = parts.length)) {
        // we added, nothing, must have been an empty string.
        parts.push('');
        length = 1;
      }

      if (!mustHaveExpression  || hasInterpolation) {
        concat.length = length;
        fn = function(context) {
          try {
            for(var i = 0, ii = length, part; i<ii; i++) {
              if (typeof (part = parts[i]) == 'function') {
                part = part(context);
                if (part == null || part == undefined) {
                  part = '';
                } else if (typeof part != 'string') {
                  part = toJson(part);
                }
              }
              concat[i] = part;
            }
            return concat.join('');
          }
          catch(err) {
            var newErr = new Error('Error while interpolating: ' + text + '\n' + err.toString());
            $exceptionHandler(newErr);
          }
        };
        fn.exp = text;
        fn.parts = parts;
        return fn;
      }
    }


    /**
     * @ngdoc method
     * @name ng.$interpolate#startSymbol
     * @methodOf ng.$interpolate
     * @description
     * Symbol to denote the start of expression in the interpolated string. Defaults to `{{`.
     *
     * Use {@link ng.$interpolateProvider#startSymbol $interpolateProvider#startSymbol} to change
     * the symbol.
     *
     * @returns {string} start symbol.
     */
    $interpolate.startSymbol = function() {
      return startSymbol;
    }


    /**
     * @ngdoc method
     * @name ng.$interpolate#endSymbol
     * @methodOf ng.$interpolate
     * @description
     * Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.
     *
     * Use {@link ng.$interpolateProvider#endSymbol $interpolateProvider#endSymbol} to change
     * the symbol.
     *
     * @returns {string} start symbol.
     */
    $interpolate.endSymbol = function() {
      return endSymbol;
    }

    return $interpolate;
  }];
}

var SERVER_MATCH = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
    PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    DEFAULT_PORTS = {'http': 80, 'https': 443, 'ftp': 21};


/**
 * Encode path using encodeUriSegment, ignoring forward slashes
 *
 * @param {string} path Path to encode
 * @returns {string}
 */
function encodePath(path) {
  var segments = path.split('/'),
      i = segments.length;

  while (i--) {
    segments[i] = encodeUriSegment(segments[i]);
  }

  return segments.join('/');
}

function matchUrl(url, obj) {
  var match = SERVER_MATCH.exec(url);

  obj.$$protocol = match[1];
  obj.$$host = match[3];
  obj.$$port = int(match[5]) || DEFAULT_PORTS[match[1]] || null;
}

function matchAppUrl(url, obj) {
  var match = PATH_MATCH.exec(url);

  obj.$$path = decodeURIComponent(match[1]);
  obj.$$search = parseKeyValue(match[3]);
  obj.$$hash = decodeURIComponent(match[5] || '');

  // make sure path starts with '/';
  if (obj.$$path && obj.$$path.charAt(0) != '/') obj.$$path = '/' + obj.$$path;
}


function composeProtocolHostPort(protocol, host, port) {
  return protocol + '://' + host + (port == DEFAULT_PORTS[protocol] ? '' : ':' + port);
}

/**
 *
 * @param {string} begin
 * @param {string} whole
 * @param {string} otherwise
 * @returns {string} returns text from whole after begin or otherwise if it does not begin with expected string.
 */
function beginsWith(begin, whole, otherwise) {
  return whole.indexOf(begin) == 0 ? whole.substr(begin.length) : otherwise;
}


function stripHash(url) {
  var index = url.indexOf('#');
  return index == -1 ? url : url.substr(0, index);
}


function stripFile(url) {
  return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
}

/* return the server only */
function serverBase(url) {
  return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
}


/**
 * LocationHtml5Url represents an url
 * This object is exposed as $location service when HTML5 mode is enabled and supported
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} basePrefix url path prefix
 */
function LocationHtml5Url(appBase, basePrefix) {
  basePrefix = basePrefix || '';
  var appBaseNoFile = stripFile(appBase);
  /**
   * Parse given html5 (regular) url string into properties
   * @param {string} newAbsoluteUrl HTML5 url
   * @private
   */
  this.$$parse = function(url) {
    var parsed = {}
    matchUrl(url, parsed);
    var pathUrl = beginsWith(appBaseNoFile, url);
    if (!isString(pathUrl)) {
      throw Error('Invalid url "' + url + '", missing path prefix "' + appBaseNoFile + '".');
    }
    matchAppUrl(pathUrl, parsed);
    extend(this, parsed);
    if (!this.$$path) {
      this.$$path = '/';
    }

    this.$$compose();
  };

  /**
   * Compose url and update `absUrl` property
   * @private
   */
  this.$$compose = function() {
    var search = toKeyValue(this.$$search),
        hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';

    this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
    this.$$absUrl = appBaseNoFile + this.$$url.substr(1); // first char is always '/'
  };

  this.$$rewrite = function(url) {
    var appUrl, prevAppUrl;

    if ( (appUrl = beginsWith(appBase, url)) !== undefined ) {
      prevAppUrl = appUrl;
      if ( (appUrl = beginsWith(basePrefix, appUrl)) !== undefined ) {
        return appBaseNoFile + (beginsWith('/', appUrl) || appUrl);
      } else {
        return appBase + prevAppUrl;
      }
    } else if ( (appUrl = beginsWith(appBaseNoFile, url)) !== undefined ) {
      return appBaseNoFile + appUrl;
    } else if (appBaseNoFile == url + '/') {
      return appBaseNoFile;
    }
  }
}


/**
 * LocationHashbangUrl represents url
 * This object is exposed as $location service when html5 history api is disabled or not supported
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} hashPrefix hashbang prefix
 */
function LocationHashbangUrl(appBase, hashPrefix) {
  var appBaseNoFile = stripFile(appBase);

  /**
   * Parse given hashbang url into properties
   * @param {string} url Hashbang url
   * @private
   */
  this.$$parse = function(url) {
    matchUrl(url, this);
    var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url);
    if (!isString(withoutBaseUrl)) {
      throw new Error('Invalid url "' + url + '", does not start with "' + appBase +  '".');
    }
    var withoutHashUrl = withoutBaseUrl.charAt(0) == '#' ? beginsWith(hashPrefix, withoutBaseUrl) : withoutBaseUrl;
    if (!isString(withoutHashUrl)) {
      throw new Error('Invalid url "' + url + '", missing hash prefix "' + hashPrefix + '".');
    }
    matchAppUrl(withoutHashUrl, this);
    this.$$compose();
  };

  /**
   * Compose hashbang url and update `absUrl` property
   * @private
   */
  this.$$compose = function() {
    var search = toKeyValue(this.$$search),
        hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';

    this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
    this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : '');
  };

  this.$$rewrite = function(url) {
    if(stripHash(appBase) == stripHash(url)) {
      return url;
    }
  }
}


/**
 * LocationHashbangUrl represents url
 * This object is exposed as $location service when html5 history api is enabled but the browser
 * does not support it.
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} hashPrefix hashbang prefix
 */
function LocationHashbangInHtml5Url(appBase, hashPrefix) {
  LocationHashbangUrl.apply(this, arguments);

  var appBaseNoFile = stripFile(appBase);

  this.$$rewrite = function(url) {
    var appUrl;

    if ( appBase == stripHash(url) ) {
      return url;
    } else if ( (appUrl = beginsWith(appBaseNoFile, url)) ) {
      return appBase + hashPrefix + appUrl;
    } else if ( appBaseNoFile === url + '/') {
      return appBaseNoFile;
    }
  }
}


LocationHashbangInHtml5Url.prototype =
  LocationHashbangUrl.prototype =
  LocationHtml5Url.prototype = {

  /**
   * Has any change been replacing ?
   * @private
   */
  $$replace: false,

  /**
   * @ngdoc method
   * @name ng.$location#absUrl
   * @methodOf ng.$location
   *
   * @description
   * This method is getter only.
   *
   * Return full url representation with all segments encoded according to rules specified in
   * {@link http://www.ietf.org/rfc/rfc3986.txt RFC 3986}.
   *
   * @return {string} full url
   */
  absUrl: locationGetter('$$absUrl'),

  /**
   * @ngdoc method
   * @name ng.$location#url
   * @methodOf ng.$location
   *
   * @description
   * This method is getter / setter.
   *
   * Return url (e.g. `/path?a=b#hash`) when called without any parameter.
   *
   * Change path, search and hash, when called with parameter and return `$location`.
   *
   * @param {string=} url New url without base prefix (e.g. `/path?a=b#hash`)
   * @return {string} url
   */
  url: function(url, replace) {
    if (isUndefined(url))
      return this.$$url;

    var match = PATH_MATCH.exec(url);
    if (match[1]) this.path(decodeURIComponent(match[1]));
    if (match[2] || match[1]) this.search(match[3] || '');
    this.hash(match[5] || '', replace);

    return this;
  },

  /**
   * @ngdoc method
   * @name ng.$location#protocol
   * @methodOf ng.$location
   *
   * @description
   * This method is getter only.
   *
   * Return protocol of current url.
   *
   * @return {string} protocol of current url
   */
  protocol: locationGetter('$$protocol'),

  /**
   * @ngdoc method
   * @name ng.$location#host
   * @methodOf ng.$location
   *
   * @description
   * This method is getter only.
   *
   * Return host of current url.
   *
   * @return {string} host of current url.
   */
  host: locationGetter('$$host'),

  /**
   * @ngdoc method
   * @name ng.$location#port
   * @methodOf ng.$location
   *
   * @description
   * This method is getter only.
   *
   * Return port of current url.
   *
   * @return {Number} port
   */
  port: locationGetter('$$port'),

  /**
   * @ngdoc method
   * @name ng.$location#path
   * @methodOf ng.$location
   *
   * @description
   * This method is getter / setter.
   *
   * Return path of current url when called without any parameter.
   *
   * Change path when called with parameter and return `$location`.
   *
   * Note: Path should always begin with forward slash (/), this method will add the forward slash
   * if it is missing.
   *
   * @param {string=} path New path
   * @return {string} path
   */
  path: locationGetterSetter('$$path', function(path) {
    return path.charAt(0) == '/' ? path : '/' + path;
  }),

  /**
   * @ngdoc method
   * @name ng.$location#search
   * @methodOf ng.$location
   *
   * @description
   * This method is getter / setter.
   *
   * Return search part (as object) of current url when called without any parameter.
   *
   * Change search part when called with parameter and return `$location`.
   *
   * @param {string|object<string,string>=} search New search params - string or hash object
   * @param {string=} paramValue If `search` is a string, then `paramValue` will override only a
   *    single search parameter. If the value is `null`, the parameter will be deleted.
   *
   * @return {string} search
   */
  search: function(search, paramValue) {
    if (isUndefined(search))
      return this.$$search;

    if (isDefined(paramValue)) {
      if (paramValue === null) {
        delete this.$$search[search];
      } else {
        this.$$search[search] = paramValue;
      }
    } else {
      this.$$search = isString(search) ? parseKeyValue(search) : search;
    }

    this.$$compose();
    return this;
  },

  /**
   * @ngdoc method
   * @name ng.$location#hash
   * @methodOf ng.$location
   *
   * @description
   * This method is getter / setter.
   *
   * Return hash fragment when called without any parameter.
   *
   * Change hash fragment when called with parameter and return `$location`.
   *
   * @param {string=} hash New hash fragment
   * @return {string} hash
   */
  hash: locationGetterSetter('$$hash', identity),

  /**
   * @ngdoc method
   * @name ng.$location#replace
   * @methodOf ng.$location
   *
   * @description
   * If called, all changes to $location during current `$digest` will be replacing current history
   * record, instead of adding new one.
   */
  replace: function() {
    this.$$replace = true;
    return this;
  }
};

function locationGetter(property) {
  return function() {
    return this[property];
  };
}


function locationGetterSetter(property, preprocess) {
  return function(value) {
    if (isUndefined(value))
      return this[property];

    this[property] = preprocess(value);
    this.$$compose();

    return this;
  };
}


/**
 * @ngdoc object
 * @name ng.$location
 *
 * @requires $browser
 * @requires $sniffer
 * @requires $rootElement
 *
 * @description
 * The $location service parses the URL in the browser address bar (based on the
 * {@link https://developer.mozilla.org/en/window.location window.location}) and makes the URL
 * available to your application. Changes to the URL in the address bar are reflected into
 * $location service and changes to $location are reflected into the browser address bar.
 *
 * **The $location service:**
 *
 * - Exposes the current URL in the browser address bar, so you can
 *   - Watch and observe the URL.
 *   - Change the URL.
 * - Synchronizes the URL with the browser when the user
 *   - Changes the address bar.
 *   - Clicks the back or forward button (or clicks a History link).
 *   - Clicks on a link.
 * - Represents the URL object as a set of methods (protocol, host, port, path, search, hash).
 *
 * For more information see {@link guide/dev_guide.services.$location Developer Guide: Angular
 * Services: Using $location}
 */

/**
 * @ngdoc object
 * @name ng.$locationProvider
 * @description
 * Use the `$locationProvider` to configure how the application deep linking paths are stored.
 */
function $LocationProvider(){
  var hashPrefix = '',
      html5Mode = false;

  /**
   * @ngdoc property
   * @name ng.$locationProvider#hashPrefix
   * @methodOf ng.$locationProvider
   * @description
   * @param {string=} prefix Prefix for hash part (containing path and search)
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   */
  this.hashPrefix = function(prefix) {
    if (isDefined(prefix)) {
      hashPrefix = prefix;
      return this;
    } else {
      return hashPrefix;
    }
  };

  /**
   * @ngdoc property
   * @name ng.$locationProvider#html5Mode
   * @methodOf ng.$locationProvider
   * @description
   * @param {string=} mode Use HTML5 strategy if available.
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   */
  this.html5Mode = function(mode) {
    if (isDefined(mode)) {
      html5Mode = mode;
      return this;
    } else {
      return html5Mode;
    }
  };

  this.$get = ['$rootScope', '$browser', '$sniffer', '$rootElement',
      function( $rootScope,   $browser,   $sniffer,   $rootElement) {
    var $location,
        LocationMode,
        baseHref = $browser.baseHref(),
        initialUrl = $browser.url(),
        appBase;

    if (html5Mode) {
      appBase = baseHref ? serverBase(initialUrl) + baseHref : initialUrl;
      LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
    } else {
      appBase = stripHash(initialUrl);
      LocationMode = LocationHashbangUrl;
    }
    $location = new LocationMode(appBase, '#' + hashPrefix);
    $location.$$parse($location.$$rewrite(initialUrl));

    $rootElement.bind('click', function(event) {
      // TODO(vojta): rewrite link when opening in new tab/window (in legacy browser)
      // currently we open nice url link and redirect then

      if (event.ctrlKey || event.metaKey || event.which == 2) return;

      var elm = jqLite(event.target);

      // traverse the DOM up to find first A tag
      while (lowercase(elm[0].nodeName) !== 'a') {
        // ignore rewriting if no A tag (reached root element, or no parent - removed from document)
        if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
      }

      var absHref = elm.prop('href');
      var rewrittenUrl = $location.$$rewrite(absHref);

      if (absHref && !elm.attr('target') && rewrittenUrl && !event.isDefaultPrevented()) {
        event.preventDefault();
        if (rewrittenUrl != $browser.url()) {
          // update location manually
          $location.$$parse(rewrittenUrl);
          $rootScope.$apply();
          // hack to work around FF6 bug 684208 when scenario runner clicks on links
          window.angular['ff-684208-preventDefault'] = true;
        }
      }
    });


    // rewrite hashbang url <> html5 url
    if ($location.absUrl() != initialUrl) {
      $browser.url($location.absUrl(), true);
    }

    // update $location when $browser url changes
    $browser.onUrlChange(function(newUrl) {
      if ($location.absUrl() != newUrl) {
        if ($rootScope.$broadcast('$locationChangeStart', newUrl, $location.absUrl()).defaultPrevented) {
          $browser.url($location.absUrl());
          return;
        }
        $rootScope.$evalAsync(function() {
          var oldUrl = $location.absUrl();

          $location.$$parse(newUrl);
          afterLocationChange(oldUrl);
        });
        if (!$rootScope.$$phase) $rootScope.$digest();
      }
    });

    // update browser
    var changeCounter = 0;
    $rootScope.$watch(function $locationWatch() {
      var oldUrl = $browser.url();
      var currentReplace = $location.$$replace;

      if (!changeCounter || oldUrl != $location.absUrl()) {
        changeCounter++;
        $rootScope.$evalAsync(function() {
          if ($rootScope.$broadcast('$locationChangeStart', $location.absUrl(), oldUrl).
              defaultPrevented) {
            $location.$$parse(oldUrl);
          } else {
            $browser.url($location.absUrl(), currentReplace);
            afterLocationChange(oldUrl);
          }
        });
      }
      $location.$$replace = false;

      return changeCounter;
    });

    return $location;

    function afterLocationChange(oldUrl) {
      $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl);
    }
}];
}

/**
 * @ngdoc object
 * @name ng.$log
 * @requires $window
 *
 * @description
 * Simple service for logging. Default implementation writes the message
 * into the browser's console (if present).
 *
 * The main purpose of this service is to simplify debugging and troubleshooting.
 *
 * @example
   <example>
     <file name="script.js">
       function LogCtrl($scope, $log) {
         $scope.$log = $log;
         $scope.message = 'Hello World!';
       }
     </file>
     <file name="index.html">
       <div ng-controller="LogCtrl">
         <p>Reload this page with open console, enter text and hit the log button...</p>
         Message:
         <input type="text" ng-model="message"/>
         <button ng-click="$log.log(message)">log</button>
         <button ng-click="$log.warn(message)">warn</button>
         <button ng-click="$log.info(message)">info</button>
         <button ng-click="$log.error(message)">error</button>
       </div>
     </file>
   </example>
 */

/**
 * @ngdoc object
 * @name ng.$logProvider
 * @description
 * Use the `$logProvider` to configure how the application logs messages
 */
function $LogProvider(){
  var debug = true,
      self = this;
  
  /**
   * @ngdoc property
   * @name ng.$logProvider#debugEnabled
   * @methodOf ng.$logProvider
   * @description
   * @param {string=} flag enable or disable debug level messages
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   */
  this.debugEnabled = function(flag) {
	  if (isDefined(flag)) {
		  debug = flag;
		  return this;
	  } else {
		  return debug;
	  }
  };
  
  this.$get = ['$window', function($window){
    return {
      /**
       * @ngdoc method
       * @name ng.$log#log
       * @methodOf ng.$log
       *
       * @description
       * Write a log message
       */
      log: consoleLog('log'),

      /**
       * @ngdoc method
       * @name ng.$log#warn
       * @methodOf ng.$log
       *
       * @description
       * Write a warning message
       */
      warn: consoleLog('warn'),

      /**
       * @ngdoc method
       * @name ng.$log#info
       * @methodOf ng.$log
       *
       * @description
       * Write an information message
       */
      info: consoleLog('info'),

      /**
       * @ngdoc method
       * @name ng.$log#error
       * @methodOf ng.$log
       *
       * @description
       * Write an error message
       */
      error: consoleLog('error'),
      
      /**
       * @ngdoc method
       * @name ng.$log#debug
       * @methodOf ng.$log
       * 
       * @description
       * Write a debug message
       */
      debug: (function () {
    	var fn = consoleLog('debug');
    	
    	return function() {
    		if (debug) {
    			fn.apply(self, arguments);
    		}
    	}
      }())
    };

    function formatError(arg) {
      if (arg instanceof Error) {
        if (arg.stack) {
          arg = (arg.message && arg.stack.indexOf(arg.message) === -1)
              ? 'Error: ' + arg.message + '\n' + arg.stack
              : arg.stack;
        } else if (arg.sourceURL) {
          arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
        }
      }
      return arg;
    }

    function consoleLog(type) {
      var console = $window.console || {},
          logFn = console[type] || console.log || noop;

      if (logFn.apply) {
        return function() {
          var args = [];
          forEach(arguments, function(arg) {
            args.push(formatError(arg));
          });
          return logFn.apply(console, args);
        };
      }

      // we are IE which either doesn't have window.console => this is noop and we do nothing,
      // or we are IE where console.log doesn't have apply so we log at least first 2 args
      return function(arg1, arg2) {
        logFn(arg1, arg2);
      }
    }
  }];
}

var OPERATORS = {
    'null':function(){return null;},
    'true':function(){return true;},
    'false':function(){return false;},
    undefined:noop,
    '+':function(self, locals, a,b){
      a=a(self, locals); b=b(self, locals);
      if (isDefined(a)) {
        if (isDefined(b)) {
          return a + b;
        }
        return a;
      }
      return isDefined(b)?b:undefined;},
    '-':function(self, locals, a,b){a=a(self, locals); b=b(self, locals); return (isDefined(a)?a:0)-(isDefined(b)?b:0);},
    '*':function(self, locals, a,b){return a(self, locals)*b(self, locals);},
    '/':function(self, locals, a,b){return a(self, locals)/b(self, locals);},
    '%':function(self, locals, a,b){return a(self, locals)%b(self, locals);},
    '^':function(self, locals, a,b){return a(self, locals)^b(self, locals);},
    '=':noop,
    '===':function(self, locals, a, b){return a(self, locals)===b(self, locals);},
    '!==':function(self, locals, a, b){return a(self, locals)!==b(self, locals);},
    '==':function(self, locals, a,b){return a(self, locals)==b(self, locals);},
    '!=':function(self, locals, a,b){return a(self, locals)!=b(self, locals);},
    '<':function(self, locals, a,b){return a(self, locals)<b(self, locals);},
    '>':function(self, locals, a,b){return a(self, locals)>b(self, locals);},
    '<=':function(self, locals, a,b){return a(self, locals)<=b(self, locals);},
    '>=':function(self, locals, a,b){return a(self, locals)>=b(self, locals);},
    '&&':function(self, locals, a,b){return a(self, locals)&&b(self, locals);},
    '||':function(self, locals, a,b){return a(self, locals)||b(self, locals);},
    '&':function(self, locals, a,b){return a(self, locals)&b(self, locals);},
//    '|':function(self, locals, a,b){return a|b;},
    '|':function(self, locals, a,b){return b(self, locals)(self, locals, a(self, locals));},
    '!':function(self, locals, a){return !a(self, locals);}
};
var ESCAPE = {"n":"\n", "f":"\f", "r":"\r", "t":"\t", "v":"\v", "'":"'", '"':'"'};

function lex(text, csp){
  var tokens = [],
      token,
      index = 0,
      json = [],
      ch,
      lastCh = ':'; // can start regexp

  while (index < text.length) {
    ch = text.charAt(index);
    if (is('"\'')) {
      readString(ch);
    } else if (isNumber(ch) || is('.') && isNumber(peek())) {
      readNumber();
    } else if (isIdent(ch)) {
      readIdent();
      // identifiers can only be if the preceding char was a { or ,
      if (was('{,') && json[0]=='{' &&
         (token=tokens[tokens.length-1])) {
        token.json = token.text.indexOf('.') == -1;
      }
    } else if (is('(){}[].,;:?')) {
      tokens.push({
        index:index,
        text:ch,
        json:(was(':[,') && is('{[')) || is('}]:,')
      });
      if (is('{[')) json.unshift(ch);
      if (is('}]')) json.shift();
      index++;
    } else if (isWhitespace(ch)) {
      index++;
      continue;
    } else {
      var ch2 = ch + peek(),
          ch3 = ch2 + peek(2),
          fn = OPERATORS[ch],
          fn2 = OPERATORS[ch2],
          fn3 = OPERATORS[ch3];
      if (fn3) {
        tokens.push({index:index, text:ch3, fn:fn3});
        index += 3;
      } else if (fn2) {
        tokens.push({index:index, text:ch2, fn:fn2});
        index += 2;
      } else if (fn) {
        tokens.push({index:index, text:ch, fn:fn, json: was('[,:') && is('+-')});
        index += 1;
      } else {
        throwError("Unexpected next character ", index, index+1);
      }
    }
    lastCh = ch;
  }
  return tokens;

  function is(chars) {
    return chars.indexOf(ch) != -1;
  }

  function was(chars) {
    return chars.indexOf(lastCh) != -1;
  }

  function peek(i) {
    var num = i || 1;
    return index + num < text.length ? text.charAt(index + num) : false;
  }
  function isNumber(ch) {
    return '0' <= ch && ch <= '9';
  }
  function isWhitespace(ch) {
    return ch == ' ' || ch == '\r' || ch == '\t' ||
           ch == '\n' || ch == '\v' || ch == '\u00A0'; // IE treats non-breaking space as \u00A0
  }
  function isIdent(ch) {
    return 'a' <= ch && ch <= 'z' ||
           'A' <= ch && ch <= 'Z' ||
           '_' == ch || ch == '$';
  }
  function isExpOperator(ch) {
    return ch == '-' || ch == '+' || isNumber(ch);
  }

  function throwError(error, start, end) {
    end = end || index;
    throw Error("Lexer Error: " + error + " at column" +
        (isDefined(start)
            ? "s " + start +  "-" + index + " [" + text.substring(start, end) + "]"
            : " " + end) +
        " in expression [" + text + "].");
  }

  function readNumber() {
    var number = "";
    var start = index;
    while (index < text.length) {
      var ch = lowercase(text.charAt(index));
      if (ch == '.' || isNumber(ch)) {
        number += ch;
      } else {
        var peekCh = peek();
        if (ch == 'e' && isExpOperator(peekCh)) {
          number += ch;
        } else if (isExpOperator(ch) &&
            peekCh && isNumber(peekCh) &&
            number.charAt(number.length - 1) == 'e') {
          number += ch;
        } else if (isExpOperator(ch) &&
            (!peekCh || !isNumber(peekCh)) &&
            number.charAt(number.length - 1) == 'e') {
          throwError('Invalid exponent');
        } else {
          break;
        }
      }
      index++;
    }
    number = 1 * number;
    tokens.push({index:start, text:number, json:true,
      fn:function() {return number;}});
  }
  function readIdent() {
    var ident = "",
        start = index,
        lastDot, peekIndex, methodName, ch;

    while (index < text.length) {
      ch = text.charAt(index);
      if (ch == '.' || isIdent(ch) || isNumber(ch)) {
        if (ch == '.') lastDot = index;
        ident += ch;
      } else {
        break;
      }
      index++;
    }

    //check if this is not a method invocation and if it is back out to last dot
    if (lastDot) {
      peekIndex = index;
      while(peekIndex < text.length) {
        ch = text.charAt(peekIndex);
        if (ch == '(') {
          methodName = ident.substr(lastDot - start + 1);
          ident = ident.substr(0, lastDot - start);
          index = peekIndex;
          break;
        }
        if(isWhitespace(ch)) {
          peekIndex++;
        } else {
          break;
        }
      }
    }


    var token = {
      index:start,
      text:ident
    };

    if (OPERATORS.hasOwnProperty(ident)) {
      token.fn = token.json = OPERATORS[ident];
    } else {
      var getter = getterFn(ident, csp);
      token.fn = extend(function(self, locals) {
        return (getter(self, locals));
      }, {
        assign: function(self, value) {
          return setter(self, ident, value);
        }
      });
    }

    tokens.push(token);

    if (methodName) {
      tokens.push({
        index:lastDot,
        text: '.',
        json: false
      });
      tokens.push({
        index: lastDot + 1,
        text: methodName,
        json: false
      });
    }
  }

  function readString(quote) {
    var start = index;
    index++;
    var string = "";
    var rawString = quote;
    var escape = false;
    while (index < text.length) {
      var ch = text.charAt(index);
      rawString += ch;
      if (escape) {
        if (ch == 'u') {
          var hex = text.substring(index + 1, index + 5);
          if (!hex.match(/[\da-f]{4}/i))
            throwError( "Invalid unicode escape [\\u" + hex + "]");
          index += 4;
          string += String.fromCharCode(parseInt(hex, 16));
        } else {
          var rep = ESCAPE[ch];
          if (rep) {
            string += rep;
          } else {
            string += ch;
          }
        }
        escape = false;
      } else if (ch == '\\') {
        escape = true;
      } else if (ch == quote) {
        index++;
        tokens.push({
          index:start,
          text:rawString,
          string:string,
          json:true,
          fn:function() { return string; }
        });
        return;
      } else {
        string += ch;
      }
      index++;
    }
    throwError("Unterminated quote", start);
  }
}

/////////////////////////////////////////

function parser(text, json, $filter, csp){
  var ZERO = valueFn(0),
      value,
      tokens = lex(text, csp),
      assignment = _assignment,
      functionCall = _functionCall,
      fieldAccess = _fieldAccess,
      objectIndex = _objectIndex,
      filterChain = _filterChain;

  if(json){
    // The extra level of aliasing is here, just in case the lexer misses something, so that
    // we prevent any accidental execution in JSON.
    assignment = logicalOR;
    functionCall =
      fieldAccess =
      objectIndex =
      filterChain =
        function() { throwError("is not valid json", {text:text, index:0}); };
    value = primary();
  } else {
    value = statements();
  }
  if (tokens.length !== 0) {
    throwError("is an unexpected token", tokens[0]);
  }
  value.literal = !!value.literal;
  value.constant = !!value.constant;
  return value;

  ///////////////////////////////////
  function throwError(msg, token) {
    throw Error("Syntax Error: Token '" + token.text +
      "' " + msg + " at column " +
      (token.index + 1) + " of the expression [" +
      text + "] starting at [" + text.substring(token.index) + "].");
  }

  function peekToken() {
    if (tokens.length === 0)
      throw Error("Unexpected end of expression: " + text);
    return tokens[0];
  }

  function peek(e1, e2, e3, e4) {
    if (tokens.length > 0) {
      var token = tokens[0];
      var t = token.text;
      if (t==e1 || t==e2 || t==e3 || t==e4 ||
          (!e1 && !e2 && !e3 && !e4)) {
        return token;
      }
    }
    return false;
  }

  function expect(e1, e2, e3, e4){
    var token = peek(e1, e2, e3, e4);
    if (token) {
      if (json && !token.json) {
        throwError("is not valid json", token);
      }
      tokens.shift();
      return token;
    }
    return false;
  }

  function consume(e1){
    if (!expect(e1)) {
      throwError("is unexpected, expecting [" + e1 + "]", peek());
    }
  }

  function unaryFn(fn, right) {
    return extend(function(self, locals) {
      return fn(self, locals, right);
    }, {
      constant:right.constant
    });
  }

  function ternaryFn(left, middle, right){
    return extend(function(self, locals){
      return left(self, locals) ? middle(self, locals) : right(self, locals);
    }, {
      constant: left.constant && middle.constant && right.constant
    });
  }
  
  function binaryFn(left, fn, right) {
    return extend(function(self, locals) {
      return fn(self, locals, left, right);
    }, {
      constant:left.constant && right.constant
    });
  }

  function statements() {
    var statements = [];
    while(true) {
      if (tokens.length > 0 && !peek('}', ')', ';', ']'))
        statements.push(filterChain());
      if (!expect(';')) {
        // optimize for the common case where there is only one statement.
        // TODO(size): maybe we should not support multiple statements?
        return statements.length == 1
          ? statements[0]
          : function(self, locals){
            var value;
            for ( var i = 0; i < statements.length; i++) {
              var statement = statements[i];
              if (statement)
                value = statement(self, locals);
            }
            return value;
          };
      }
    }
  }

  function _filterChain() {
    var left = expression();
    var token;
    while(true) {
      if ((token = expect('|'))) {
        left = binaryFn(left, token.fn, filter());
      } else {
        return left;
      }
    }
  }

  function filter() {
    var token = expect();
    var fn = $filter(token.text);
    var argsFn = [];
    while(true) {
      if ((token = expect(':'))) {
        argsFn.push(expression());
      } else {
        var fnInvoke = function(self, locals, input){
          var args = [input];
          for ( var i = 0; i < argsFn.length; i++) {
            args.push(argsFn[i](self, locals));
          }
          return fn.apply(self, args);
        };
        return function() {
          return fnInvoke;
        };
      }
    }
  }

  function expression() {
    return assignment();
  }

  function _assignment() {
    var left = ternary();
    var right;
    var token;
    if ((token = expect('='))) {
      if (!left.assign) {
        throwError("implies assignment but [" +
          text.substring(0, token.index) + "] can not be assigned to", token);
      }
      right = ternary();
      return function(scope, locals){
        return left.assign(scope, right(scope, locals), locals);
      };
    } else {
      return left;
    }
  }

  function ternary() {
    var left = logicalOR();
    var middle;
    var token;
    if((token = expect('?'))){
      middle = ternary();
      if((token = expect(':'))){
        return ternaryFn(left, middle, ternary());
      }
      else {
        throwError('expected :', token);
      }
    }
    else {
      return left;
    }
  }
  
  function logicalOR() {
    var left = logicalAND();
    var token;
    while(true) {
      if ((token = expect('||'))) {
        left = binaryFn(left, token.fn, logicalAND());
      } else {
        return left;
      }
    }
  }

  function logicalAND() {
    var left = equality();
    var token;
    if ((token = expect('&&'))) {
      left = binaryFn(left, token.fn, logicalAND());
    }
    return left;
  }

  function equality() {
    var left = relational();
    var token;
    if ((token = expect('==','!=','===','!=='))) {
      left = binaryFn(left, token.fn, equality());
    }
    return left;
  }

  function relational() {
    var left = additive();
    var token;
    if ((token = expect('<', '>', '<=', '>='))) {
      left = binaryFn(left, token.fn, relational());
    }
    return left;
  }

  function additive() {
    var left = multiplicative();
    var token;
    while ((token = expect('+','-'))) {
      left = binaryFn(left, token.fn, multiplicative());
    }
    return left;
  }

  function multiplicative() {
    var left = unary();
    var token;
    while ((token = expect('*','/','%'))) {
      left = binaryFn(left, token.fn, unary());
    }
    return left;
  }

  function unary() {
    var token;
    if (expect('+')) {
      return primary();
    } else if ((token = expect('-'))) {
      return binaryFn(ZERO, token.fn, unary());
    } else if ((token = expect('!'))) {
      return unaryFn(token.fn, unary());
    } else {
      return primary();
    }
  }


  function primary() {
    var primary;
    if (expect('(')) {
      primary = filterChain();
      consume(')');
    } else if (expect('[')) {
      primary = arrayDeclaration();
    } else if (expect('{')) {
      primary = object();
    } else {
      var token = expect();
      primary = token.fn;
      if (!primary) {
        throwError("not a primary expression", token);
      }
      if (token.json) {
        primary.constant = primary.literal = true;
      }
    }

    var next, context;
    while ((next = expect('(', '[', '.'))) {
      if (next.text === '(') {
        primary = functionCall(primary, context);
        context = null;
      } else if (next.text === '[') {
        context = primary;
        primary = objectIndex(primary);
      } else if (next.text === '.') {
        context = primary;
        primary = fieldAccess(primary);
      } else {
        throwError("IMPOSSIBLE");
      }
    }
    return primary;
  }

  function _fieldAccess(object) {
    var field = expect().text;
    var getter = getterFn(field, csp);
    return extend(
        function(scope, locals, self) {
          return getter(self || object(scope, locals), locals);
        },
        {
          assign:function(scope, value, locals) {
            return setter(object(scope, locals), field, value);
          }
        }
    );
  }

  function _objectIndex(obj) {
    var indexFn = expression();
    consume(']');
    return extend(
      function(self, locals){
        var o = obj(self, locals),
            i = indexFn(self, locals),
            v, p;

        if (!o) return undefined;
        v = o[i];
        if (v && v.then) {
          p = v;
          if (!('$$v' in v)) {
            p.$$v = undefined;
            p.then(function(val) { p.$$v = val; });
          }
          v = v.$$v;
        }
        return v;
      }, {
        assign:function(self, value, locals){
          return obj(self, locals)[indexFn(self, locals)] = value;
        }
      });
  }

  function _functionCall(fn, contextGetter) {
    var argsFn = [];
    if (peekToken().text != ')') {
      do {
        argsFn.push(expression());
      } while (expect(','));
    }
    consume(')');
    return function(scope, locals){
      var args = [],
          context = contextGetter ? contextGetter(scope, locals) : scope;

      for ( var i = 0; i < argsFn.length; i++) {
        args.push(argsFn[i](scope, locals));
      }
      var fnPtr = fn(scope, locals, context) || noop;
      // IE stupidity!
      return fnPtr.apply
          ? fnPtr.apply(context, args)
          : fnPtr(args[0], args[1], args[2], args[3], args[4]);
    };
  }

  // This is used with json array declaration
  function arrayDeclaration () {
    var elementFns = [];
    var allConstant = true;
    if (peekToken().text != ']') {
      do {
        var elementFn = expression();
        elementFns.push(elementFn);
        if (!elementFn.constant) {
          allConstant = false;
        }
      } while (expect(','));
    }
    consume(']');
    return extend(function(self, locals){
      var array = [];
      for ( var i = 0; i < elementFns.length; i++) {
        array.push(elementFns[i](self, locals));
      }
      return array;
    }, {
      literal:true,
      constant:allConstant
    });
  }

  function object () {
    var keyValues = [];
    var allConstant = true;
    if (peekToken().text != '}') {
      do {
        var token = expect(),
        key = token.string || token.text;
        consume(":");
        var value = expression();
        keyValues.push({key:key, value:value});
        if (!value.constant) {
          allConstant = false;
        }
      } while (expect(','));
    }
    consume('}');
    return extend(function(self, locals){
      var object = {};
      for ( var i = 0; i < keyValues.length; i++) {
        var keyValue = keyValues[i];
        object[keyValue.key] = keyValue.value(self, locals);
      }
      return object;
    }, {
      literal:true,
      constant:allConstant
    });
  }
}

//////////////////////////////////////////////////
// Parser helper functions
//////////////////////////////////////////////////

function setter(obj, path, setValue) {
  var element = path.split('.');
  for (var i = 0; element.length > 1; i++) {
    var key = element.shift();
    var propertyObj = obj[key];
    if (!propertyObj) {
      propertyObj = {};
      obj[key] = propertyObj;
    }
    obj = propertyObj;
  }
  obj[element.shift()] = setValue;
  return setValue;
}

/**
 * Return the value accessible from the object by path. Any undefined traversals are ignored
 * @param {Object} obj starting object
 * @param {string} path path to traverse
 * @param {boolean=true} bindFnToScope
 * @returns value as accessible by path
 */
//TODO(misko): this function needs to be removed
function getter(obj, path, bindFnToScope) {
  if (!path) return obj;
  var keys = path.split('.');
  var key;
  var lastInstance = obj;
  var len = keys.length;

  for (var i = 0; i < len; i++) {
    key = keys[i];
    if (obj) {
      obj = (lastInstance = obj)[key];
    }
  }
  if (!bindFnToScope && isFunction(obj)) {
    return bind(lastInstance, obj);
  }
  return obj;
}

var getterFnCache = {};

/**
 * Implementation of the "Black Hole" variant from:
 * - http://jsperf.com/angularjs-parse-getter/4
 * - http://jsperf.com/path-evaluation-simplified/7
 */
function cspSafeGetterFn(key0, key1, key2, key3, key4) {
  return function(scope, locals) {
    var pathVal = (locals && locals.hasOwnProperty(key0)) ? locals : scope,
        promise;

    if (pathVal === null || pathVal === undefined) return pathVal;

    pathVal = pathVal[key0];
    if (pathVal && pathVal.then) {
      if (!("$$v" in pathVal)) {
        promise = pathVal;
        promise.$$v = undefined;
        promise.then(function(val) { promise.$$v = val; });
      }
      pathVal = pathVal.$$v;
    }
    if (!key1 || pathVal === null || pathVal === undefined) return pathVal;

    pathVal = pathVal[key1];
    if (pathVal && pathVal.then) {
      if (!("$$v" in pathVal)) {
        promise = pathVal;
        promise.$$v = undefined;
        promise.then(function(val) { promise.$$v = val; });
      }
      pathVal = pathVal.$$v;
    }
    if (!key2 || pathVal === null || pathVal === undefined) return pathVal;

    pathVal = pathVal[key2];
    if (pathVal && pathVal.then) {
      if (!("$$v" in pathVal)) {
        promise = pathVal;
        promise.$$v = undefined;
        promise.then(function(val) { promise.$$v = val; });
      }
      pathVal = pathVal.$$v;
    }
    if (!key3 || pathVal === null || pathVal === undefined) return pathVal;

    pathVal = pathVal[key3];
    if (pathVal && pathVal.then) {
      if (!("$$v" in pathVal)) {
        promise = pathVal;
        promise.$$v = undefined;
        promise.then(function(val) { promise.$$v = val; });
      }
      pathVal = pathVal.$$v;
    }
    if (!key4 || pathVal === null || pathVal === undefined) return pathVal;

    pathVal = pathVal[key4];
    if (pathVal && pathVal.then) {
      if (!("$$v" in pathVal)) {
        promise = pathVal;
        promise.$$v = undefined;
        promise.then(function(val) { promise.$$v = val; });
      }
      pathVal = pathVal.$$v;
    }
    return pathVal;
  };
}

function getterFn(path, csp) {
  if (getterFnCache.hasOwnProperty(path)) {
    return getterFnCache[path];
  }

  var pathKeys = path.split('.'),
      pathKeysLength = pathKeys.length,
      fn;

  if (csp) {
    fn = (pathKeysLength < 6)
        ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4])
        : function(scope, locals) {
          var i = 0, val;
          do {
            val = cspSafeGetterFn(
                    pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++]
                  )(scope, locals);

            locals = undefined; // clear after first iteration
            scope = val;
          } while (i < pathKeysLength);
          return val;
        }
  } else {
    var code = 'var l, fn, p;\n';
    forEach(pathKeys, function(key, index) {
      code += 'if(s === null || s === undefined) return s;\n' +
              'l=s;\n' +
              's='+ (index
                      // we simply dereference 's' on any .dot notation
                      ? 's'
                      // but if we are first then we check locals first, and if so read it first
                      : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ';\n' +
              'if (s && s.then) {\n' +
                ' if (!("$$v" in s)) {\n' +
                  ' p=s;\n' +
                  ' p.$$v = undefined;\n' +
                  ' p.then(function(v) {p.$$v=v;});\n' +
                  '}\n' +
                ' s=s.$$v\n' +
              '}\n';
    });
    code += 'return s;';
    fn = Function('s', 'k', code); // s=scope, k=locals
    fn.toString = function() { return code; };
  }

  return getterFnCache[path] = fn;
}

///////////////////////////////////

/**
 * @ngdoc function
 * @name ng.$parse
 * @function
 *
 * @description
 *
 * Converts Angular {@link guide/expression expression} into a function.
 *
 * <pre>
 *   var getter = $parse('user.name');
 *   var setter = getter.assign;
 *   var context = {user:{name:'angular'}};
 *   var locals = {user:{name:'local'}};
 *
 *   expect(getter(context)).toEqual('angular');
 *   setter(context, 'newValue');
 *   expect(context.user.name).toEqual('newValue');
 *   expect(getter(context, locals)).toEqual('local');
 * </pre>
 *
 *
 * @param {string} expression String expression to compile.
 * @returns {function(context, locals)} a function which represents the compiled expression:
 *
 *    * `context` – `{object}` – an object against which any expressions embedded in the strings
 *      are evaluated against (typically a scope object).
 *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
 *      `context`.
 *
 *    The returned function also has the following properties:
 *      * `literal` – `{boolean}` – whether the expression's top-level node is a JavaScript
 *        literal.
 *      * `constant` – `{boolean}` – whether the expression is made entirely of JavaScript
 *        constant literals.
 *      * `assign` – `{?function(context, value)}` – if the expression is assignable, this will be
 *        set to a function to change its value on the given context.
 *
 */
function $ParseProvider() {
  var cache = {};
  this.$get = ['$filter', '$sniffer', function($filter, $sniffer) {
    return function(exp) {
      switch(typeof exp) {
        case 'string':
          return cache.hasOwnProperty(exp)
            ? cache[exp]
            : cache[exp] =  parser(exp, false, $filter, $sniffer.csp);
        case 'function':
          return exp;
        default:
          return noop;
      }
    };
  }];
}

/**
 * @ngdoc service
 * @name ng.$q
 * @requires $rootScope
 *
 * @description
 * A promise/deferred implementation inspired by [Kris Kowal's Q](https://github.com/kriskowal/q).
 *
 * [The CommonJS Promise proposal](http://wiki.commonjs.org/wiki/Promises) describes a promise as an
 * interface for interacting with an object that represents the result of an action that is
 * performed asynchronously, and may or may not be finished at any given point in time.
 *
 * From the perspective of dealing with error handling, deferred and promise APIs are to
 * asynchronous programming what `try`, `catch` and `throw` keywords are to synchronous programming.
 *
 * <pre>
 *   // for the purpose of this example let's assume that variables `$q` and `scope` are
 *   // available in the current lexical scope (they could have been injected or passed in).
 *
 *   function asyncGreet(name) {
 *     var deferred = $q.defer();
 *
 *     setTimeout(function() {
 *       // since this fn executes async in a future turn of the event loop, we need to wrap
 *       // our code into an $apply call so that the model changes are properly observed.
 *       scope.$apply(function() {
 *         if (okToGreet(name)) {
 *           deferred.resolve('Hello, ' + name + '!');
 *         } else {
 *           deferred.reject('Greeting ' + name + ' is not allowed.');
 *         }
 *       });
 *     }, 1000);
 *
 *     return deferred.promise;
 *   }
 *
 *   var promise = asyncGreet('Robin Hood');
 *   promise.then(function(greeting) {
 *     alert('Success: ' + greeting);
 *   }, function(reason) {
 *     alert('Failed: ' + reason);
 *   });
 * </pre>
 *
 * At first it might not be obvious why this extra complexity is worth the trouble. The payoff
 * comes in the way of
 * [guarantees that promise and deferred APIs make](https://github.com/kriskowal/uncommonjs/blob/master/promises/specification.md).
 *
 * Additionally the promise api allows for composition that is very hard to do with the
 * traditional callback ([CPS](http://en.wikipedia.org/wiki/Continuation-passing_style)) approach.
 * For more on this please see the [Q documentation](https://github.com/kriskowal/q) especially the
 * section on serial or parallel joining of promises.
 *
 *
 * # The Deferred API
 *
 * A new instance of deferred is constructed by calling `$q.defer()`.
 *
 * The purpose of the deferred object is to expose the associated Promise instance as well as APIs
 * that can be used for signaling the successful or unsuccessful completion of the task.
 *
 * **Methods**
 *
 * - `resolve(value)` – resolves the derived promise with the `value`. If the value is a rejection
 *   constructed via `$q.reject`, the promise will be rejected instead.
 * - `reject(reason)` – rejects the derived promise with the `reason`. This is equivalent to
 *   resolving it with a rejection constructed via `$q.reject`.
 *
 * **Properties**
 *
 * - promise – `{Promise}` – promise object associated with this deferred.
 *
 *
 * # The Promise API
 *
 * A new promise instance is created when a deferred instance is created and can be retrieved by
 * calling `deferred.promise`.
 *
 * The purpose of the promise object is to allow for interested parties to get access to the result
 * of the deferred task when it completes.
 *
 * **Methods**
 *
 * - `then(successCallback, errorCallback)` – regardless of when the promise was or will be resolved
 *   or rejected calls one of the success or error callbacks asynchronously as soon as the result
 *   is available. The callbacks are called with a single argument the result or rejection reason.
 *
 *   This method *returns a new promise* which is resolved or rejected via the return value of the
 *   `successCallback` or `errorCallback`.
 *
 * - `always(callback)` – allows you to observe either the fulfillment or rejection of a promise,
 *   but to do so without modifying the final value. This is useful to release resources or do some
 *   clean-up that needs to be done whether the promise was rejected or resolved. See the [full
 *   specification](https://github.com/kriskowal/q/wiki/API-Reference#promisefinallycallback) for
 *   more information.
 *
 * # Chaining promises
 *
 * Because calling `then` api of a promise returns a new derived promise, it is easily possible
 * to create a chain of promises:
 *
 * <pre>
 *   promiseB = promiseA.then(function(result) {
 *     return result + 1;
 *   });
 *
 *   // promiseB will be resolved immediately after promiseA is resolved and its value will be
 *   // the result of promiseA incremented by 1
 * </pre>
 *
 * It is possible to create chains of any length and since a promise can be resolved with another
 * promise (which will defer its resolution further), it is possible to pause/defer resolution of
 * the promises at any point in the chain. This makes it possible to implement powerful apis like
 * $http's response interceptors.
 *
 *
 * # Differences between Kris Kowal's Q and $q
 *
 *  There are three main differences:
 *
 * - $q is integrated with the {@link ng.$rootScope.Scope} Scope model observation
 *   mechanism in angular, which means faster propagation of resolution or rejection into your
 *   models and avoiding unnecessary browser repaints, which would result in flickering UI.
 * - $q promises are recognized by the templating engine in angular, which means that in templates
 *   you can treat promises attached to a scope as if they were the resulting values.
 * - Q has many more features than $q, but that comes at a cost of bytes. $q is tiny, but contains
 *   all the important functionality needed for common async tasks.
 * 
 *  # Testing
 * 
 *  <pre>
 *    it('should simulate promise', inject(function($q, $rootScope) {
 *      var deferred = $q.defer();
 *      var promise = deferred.promise;
 *      var resolvedValue;
 * 
 *      promise.then(function(value) { resolvedValue = value; });
 *      expect(resolvedValue).toBeUndefined();
 * 
 *      // Simulate resolving of promise
 *      deferred.resolve(123);
 *      // Note that the 'then' function does not get called synchronously.
 *      // This is because we want the promise API to always be async, whether or not
 *      // it got called synchronously or asynchronously.
 *      expect(resolvedValue).toBeUndefined();
 * 
 *      // Propagate promise resolution to 'then' functions using $apply().
 *      $rootScope.$apply();
 *      expect(resolvedValue).toEqual(123);
 *    });
 *  </pre>
 */
function $QProvider() {

  this.$get = ['$rootScope', '$exceptionHandler', function($rootScope, $exceptionHandler) {
    return qFactory(function(callback) {
      $rootScope.$evalAsync(callback);
    }, $exceptionHandler);
  }];
}


/**
 * Constructs a promise manager.
 *
 * @param {function(function)} nextTick Function for executing functions in the next turn.
 * @param {function(...*)} exceptionHandler Function into which unexpected exceptions are passed for
 *     debugging purposes.
 * @returns {object} Promise manager.
 */
function qFactory(nextTick, exceptionHandler) {

  /**
   * @ngdoc
   * @name ng.$q#defer
   * @methodOf ng.$q
   * @description
   * Creates a `Deferred` object which represents a task which will finish in the future.
   *
   * @returns {Deferred} Returns a new instance of deferred.
   */
  var defer = function() {
    var pending = [],
        value, deferred;

    deferred = {

      resolve: function(val) {
        if (pending) {
          var callbacks = pending;
          pending = undefined;
          value = ref(val);

          if (callbacks.length) {
            nextTick(function() {
              var callback;
              for (var i = 0, ii = callbacks.length; i < ii; i++) {
                callback = callbacks[i];
                value.then(callback[0], callback[1]);
              }
            });
          }
        }
      },


      reject: function(reason) {
        deferred.resolve(reject(reason));
      },


      promise: {
        then: function(callback, errback) {
          var result = defer();

          var wrappedCallback = function(value) {
            try {
              result.resolve((callback || defaultCallback)(value));
            } catch(e) {
              exceptionHandler(e);
              result.reject(e);
            }
          };

          var wrappedErrback = function(reason) {
            try {
              result.resolve((errback || defaultErrback)(reason));
            } catch(e) {
              exceptionHandler(e);
              result.reject(e);
            }
          };

          if (pending) {
            pending.push([wrappedCallback, wrappedErrback]);
          } else {
            value.then(wrappedCallback, wrappedErrback);
          }

          return result.promise;
        },
        always: function(callback) {
          
          function makePromise(value, resolved) {
            var result = defer();
            if (resolved) {
              result.resolve(value);
            } else {
              result.reject(value);
            }
            return result.promise;
          }
          
          function handleCallback(value, isResolved) {
            var callbackOutput = null;            
            try {
              callbackOutput = (callback ||defaultCallback)();
            } catch(e) {
              return makePromise(e, false);
            }            
            if (callbackOutput && callbackOutput.then) {
              return callbackOutput.then(function() {
                return makePromise(value, isResolved);
              }, function(error) {
                return makePromise(error, false);
              });
            } else {
              return makePromise(value, isResolved);
            }
          }
          
          return this.then(function(value) {
            return handleCallback(value, true);
          }, function(error) {
            return handleCallback(error, false);
          });
        }
      }
    };

    return deferred;
  };


  var ref = function(value) {
    if (value && value.then) return value;
    return {
      then: function(callback) {
        var result = defer();
        nextTick(function() {
          result.resolve(callback(value));
        });
        return result.promise;
      }
    };
  };


  /**
   * @ngdoc
   * @name ng.$q#reject
   * @methodOf ng.$q
   * @description
   * Creates a promise that is resolved as rejected with the specified `reason`. This api should be
   * used to forward rejection in a chain of promises. If you are dealing with the last promise in
   * a promise chain, you don't need to worry about it.
   *
   * When comparing deferreds/promises to the familiar behavior of try/catch/throw, think of
   * `reject` as the `throw` keyword in JavaScript. This also means that if you "catch" an error via
   * a promise error callback and you want to forward the error to the promise derived from the
   * current promise, you have to "rethrow" the error by returning a rejection constructed via
   * `reject`.
   *
   * <pre>
   *   promiseB = promiseA.then(function(result) {
   *     // success: do something and resolve promiseB
   *     //          with the old or a new result
   *     return result;
   *   }, function(reason) {
   *     // error: handle the error if possible and
   *     //        resolve promiseB with newPromiseOrValue,
   *     //        otherwise forward the rejection to promiseB
   *     if (canHandle(reason)) {
   *      // handle the error and recover
   *      return newPromiseOrValue;
   *     }
   *     return $q.reject(reason);
   *   });
   * </pre>
   *
   * @param {*} reason Constant, message, exception or an object representing the rejection reason.
   * @returns {Promise} Returns a promise that was already resolved as rejected with the `reason`.
   */
  var reject = function(reason) {
    return {
      then: function(callback, errback) {
        var result = defer();
        nextTick(function() {
          result.resolve((errback || defaultErrback)(reason));
        });
        return result.promise;
      }
    };
  };


  /**
   * @ngdoc
   * @name ng.$q#when
   * @methodOf ng.$q
   * @description
   * Wraps an object that might be a value or a (3rd party) then-able promise into a $q promise.
   * This is useful when you are dealing with an object that might or might not be a promise, or if
   * the promise comes from a source that can't be trusted.
   *
   * @param {*} value Value or a promise
   * @returns {Promise} Returns a promise of the passed value or promise
   */
  var when = function(value, callback, errback) {
    var result = defer(),
        done;

    var wrappedCallback = function(value) {
      try {
        return (callback || defaultCallback)(value);
      } catch (e) {
        exceptionHandler(e);
        return reject(e);
      }
    };

    var wrappedErrback = function(reason) {
      try {
        return (errback || defaultErrback)(reason);
      } catch (e) {
        exceptionHandler(e);
        return reject(e);
      }
    };

    nextTick(function() {
      ref(value).then(function(value) {
        if (done) return;
        done = true;
        result.resolve(ref(value).then(wrappedCallback, wrappedErrback));
      }, function(reason) {
        if (done) return;
        done = true;
        result.resolve(wrappedErrback(reason));
      });
    });

    return result.promise;
  };


  function defaultCallback(value) {
    return value;
  }


  function defaultErrback(reason) {
    return reject(reason);
  }


  /**
   * @ngdoc
   * @name ng.$q#all
   * @methodOf ng.$q
   * @description
   * Combines multiple promises into a single promise that is resolved when all of the input
   * promises are resolved.
   *
   * @param {Array.<Promise>|Object.<Promise>} promises An array or hash of promises.
   * @returns {Promise} Returns a single promise that will be resolved with an array/hash of values,
   *   each value corresponding to the promise at the same index/key in the `promises` array/hash. If any of
   *   the promises is resolved with a rejection, this resulting promise will be resolved with the
   *   same rejection.
   */
  function all(promises) {
    var deferred = defer(),
        counter = 0,
        results = isArray(promises) ? [] : {};

    forEach(promises, function(promise, key) {
      counter++;
      ref(promise).then(function(value) {
        if (results.hasOwnProperty(key)) return;
        results[key] = value;
        if (!(--counter)) deferred.resolve(results);
      }, function(reason) {
        if (results.hasOwnProperty(key)) return;
        deferred.reject(reason);
      });
    });

    if (counter === 0) {
      deferred.resolve(results);
    }

    return deferred.promise;
  }

  return {
    defer: defer,
    reject: reject,
    when: when,
    all: all
  };
}

/**
 * @ngdoc object
 * @name ng.$routeProvider
 * @function
 *
 * @description
 *
 * Used for configuring routes. See {@link ng.$route $route} for an example.
 */
function $RouteProvider(){
  var routes = {};

  /**
   * @ngdoc method
   * @name ng.$routeProvider#when
   * @methodOf ng.$routeProvider
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *      * `path` can contain named groups starting with a colon (`:name`). All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *      * `path` can contain named groups starting with a star (`*name`). All characters are
   *        eagerly stored in `$routeParams` under the given `name` when the route matches.
   *
   *    For example, routes like `/color/:color/largecode/*largecode/edit` will match
   *    `/color/brown/largecode/code/with/slashs/edit` and extract:
   *
   *      * `color: brown`
   *      * `largecode: code/with/slashs`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with newly
   *      created scope or the name of a {@link angular.Module#controller registered controller}
   *      if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or function that returns
   *      an html template as a string which should be used by {@link ng.directive:ngView ngView} or
   *      {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ng.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, they will be
   *      resolved and converted to a value before the controller is instantiated and the
   *      `$routeChangeSuccess` event is fired. The map object is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link api/AUTO.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is resolved
   *        before its value is injected into the controller.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only $location.search()
   *    changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = extend({reloadOnSearch: true, caseInsensitiveMatch: false}, route);

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
          ? path.substr(0, path.length-1)
          : path +'/';

      routes[redirectPath] = {redirectTo: path};
    }

    return this;
  };

  /**
   * @ngdoc method
   * @name ng.$routeProvider#otherwise
   * @methodOf ng.$routeProvider
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope', '$location', '$routeParams', '$q', '$injector', '$http', '$templateCache',
      function( $rootScope,   $location,   $routeParams,   $q,   $injector,   $http,   $templateCache) {

    /**
     * @ngdoc object
     * @name ng.$route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Array.<Object>} routes Array of all configured routes.
     *
     * @description
     * Is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * You can define routes through {@link ng.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with {@link ng.directive:ngView ngView}
     * directive and the {@link ng.$routeParams $routeParams} service.
     *
     * @example
       This example shows how changing the URL hash causes the `$route` to match a route against the
       URL, and the `ngView` pulls in the partial.

       Note that this example is using {@link ng.directive:script inlined templates}
       to get it working on jsfiddle as well.

     <example module="ngView">
       <file name="index.html">
         <div ng-controller="MainCntl">
           Choose:
           <a href="Book/Moby">Moby</a> |
           <a href="Book/Moby/ch/1">Moby: Ch1</a> |
           <a href="Book/Gatsby">Gatsby</a> |
           <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
           <a href="Book/Scarlet">Scarlet Letter</a><br/>

           <div ng-view></div>
           <hr />

           <pre>$location.path() = {{$location.path()}}</pre>
           <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
           <pre>$route.current.params = {{$route.current.params}}</pre>
           <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
           <pre>$routeParams = {{$routeParams}}</pre>
         </div>
       </file>

       <file name="book.html">
         controller: {{name}}<br />
         Book Id: {{params.bookId}}<br />
       </file>

       <file name="chapter.html">
         controller: {{name}}<br />
         Book Id: {{params.bookId}}<br />
         Chapter Id: {{params.chapterId}}
       </file>

       <file name="script.js">
         angular.module('ngView', [], function($routeProvider, $locationProvider) {
           $routeProvider.when('/Book/:bookId', {
             templateUrl: 'book.html',
             controller: BookCntl,
             resolve: {
               // I will cause a 1 second delay
               delay: function($q, $timeout) {
                 var delay = $q.defer();
                 $timeout(delay.resolve, 1000);
                 return delay.promise;
               }
             }
           });
           $routeProvider.when('/Book/:bookId/ch/:chapterId', {
             templateUrl: 'chapter.html',
             controller: ChapterCntl
           });

           // configure html5 to get links working on jsfiddle
           $locationProvider.html5Mode(true);
         });

         function MainCntl($scope, $route, $routeParams, $location) {
           $scope.$route = $route;
           $scope.$location = $location;
           $scope.$routeParams = $routeParams;
         }

         function BookCntl($scope, $routeParams) {
           $scope.name = "BookCntl";
           $scope.params = $routeParams;
         }

         function ChapterCntl($scope, $routeParams) {
           $scope.name = "ChapterCntl";
           $scope.params = $routeParams;
         }
       </file>

       <file name="scenario.js">
         it('should load and compile correct template', function() {
           element('a:contains("Moby: Ch1")').click();
           var content = element('.doc-example-live [ng-view]').text();
           expect(content).toMatch(/controller\: ChapterCntl/);
           expect(content).toMatch(/Book Id\: Moby/);
           expect(content).toMatch(/Chapter Id\: 1/);

           element('a:contains("Scarlet")').click();
           sleep(2); // promises are not part of scenario waiting
           content = element('.doc-example-live [ng-view]').text();
           expect(content).toMatch(/controller\: BookCntl/);
           expect(content).toMatch(/Book Id\: Scarlet/);
         });
       </file>
     </example>
     */

    /**
     * @ngdoc event
     * @name ng.$route#$routeChangeStart
     * @eventOf ng.$route
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occurs.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name ng.$route#$routeChangeSuccess
     * @eventOf ng.$route
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ng.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is first route entered.
     */

    /**
     * @ngdoc event
     * @name ng.$route#$routeChangeError
     * @eventOf ng.$route
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name ng.$route#$routeUpdate
     * @eventOf ng.$route
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name ng.$route#reload
           * @methodOf ng.$route
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ng.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param when {string} route when template to match the url against
     * @param whenProperties {Object} properties to define when's matching behavior
     * @return {?Object}
     */
    function switchRouteMatcher(on, when, whenProperties) {
      // TODO(i): this code is convoluted and inefficient, we should construct the route matching
      //   regex only once and then reuse it

      // Escape regexp special characters.
      when = '^' + when.replace(/[-\/\\^$:*+?.()|[\]{}]/g, "\\$&") + '$';

      var regex = '',
          params = [],
          dst = {};

      var re = /\\([:*])(\w+)/g,
          paramMatch,
          lastMatchedIndex = 0;

      while ((paramMatch = re.exec(when)) !== null) {
        // Find each :param in `when` and replace it with a capturing group.
        // Append all other sections of when unchanged.
        regex += when.slice(lastMatchedIndex, paramMatch.index);
        switch(paramMatch[1]) {
          case ':':
            regex += '([^\\/]*)';
            break;
          case '*':
            regex += '(.*)';
            break;
        }
        params.push(paramMatch[2]);
        lastMatchedIndex = re.lastIndex;
      }
      // Append trailing path part.
      regex += when.substr(lastMatchedIndex);

      var match = on.match(new RegExp(regex, whenProperties.caseInsensitiveMatch ? 'i' : ''));
      if (match) {
        forEach(params, function(name, index) {
          dst[name] = match[index + 1];
        });
      }
      return match ? dst : null;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = extend({}, next.resolve),
                  template;

              forEach(locals, function(value, key) {
                locals[key] = isString(value) ? $injector.get(value) : $injector.invoke(value);
              });

              if (isDefined(template = next.template)) {
                if (isFunction(template)) {
                  template = template(next.params);
                }
              } else if (isDefined(template = next.templateUrl)) {
                if (isFunction(template)) {
                  template = template(next.params);
                }
                if (isDefined(template)) {
                  next.loadedTemplateUrl = template;
                  template = $http.get(template, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), path, route))) {
          match = inherit(route, {
            params: extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      forEach((string||'').split(':'), function(segment, i) {
        if (i == 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

/**
 * @ngdoc object
 * @name ng.$routeParams
 * @requires $route
 *
 * @description
 * Current set of route parameters. The route parameters are a combination of the
 * {@link ng.$location $location} `search()`, and `path()`. The `path` parameters
 * are extracted when the {@link ng.$route $route} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * @example
 * <pre>
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}
 * </pre>
 */
function $RouteParamsProvider() {
  this.$get = valueFn({});
}

/**
 * DESIGN NOTES
 *
 * The design decisions behind the scope are heavily favored for speed and memory consumption.
 *
 * The typical use of scope is to watch the expressions, which most of the time return the same
 * value as last time so we optimize the operation.
 *
 * Closures construction is expensive in terms of speed as well as memory:
 *   - No closures, instead use prototypical inheritance for API
 *   - Internal state needs to be stored on scope directly, which means that private state is
 *     exposed as $$____ properties
 *
 * Loop operations are optimized by using while(count--) { ... }
 *   - this means that in order to keep the same order of execution as addition we have to add
 *     items to the array at the beginning (shift) instead of at the end (push)
 *
 * Child scopes are created and removed often
 *   - Using an array would be slow since inserts in middle are expensive so we use linked list
 *
 * There are few watches then a lot of observers. This is why you don't want the observer to be
 * implemented in the same way as watch. Watch requires return of initialization function which
 * are expensive to construct.
 */


/**
 * @ngdoc object
 * @name ng.$rootScopeProvider
 * @description
 *
 * Provider for the $rootScope service.
 */

/**
 * @ngdoc function
 * @name ng.$rootScopeProvider#digestTtl
 * @methodOf ng.$rootScopeProvider
 * @description
 *
 * Sets the number of digest iterations the scope should attempt to execute before giving up and
 * assuming that the model is unstable.
 *
 * The current default is 10 iterations.
 *
 * @param {number} limit The number of digest iterations.
 */


/**
 * @ngdoc object
 * @name ng.$rootScope
 * @description
 *
 * Every application has a single root {@link ng.$rootScope.Scope scope}.
 * All other scopes are child scopes of the root scope. Scopes provide mechanism for watching the model and provide
 * event processing life-cycle. See {@link guide/scope developer guide on scopes}.
 */
function $RootScopeProvider(){
  var TTL = 10;

  this.digestTtl = function(value) {
    if (arguments.length) {
      TTL = value;
    }
    return TTL;
  };

  this.$get = ['$injector', '$exceptionHandler', '$parse',
      function( $injector,   $exceptionHandler,   $parse) {

    /**
     * @ngdoc function
     * @name ng.$rootScope.Scope
     *
     * @description
     * A root scope can be retrieved using the {@link ng.$rootScope $rootScope} key from the
     * {@link AUTO.$injector $injector}. Child scopes are created using the
     * {@link ng.$rootScope.Scope#$new $new()} method. (Most scopes are created automatically when
     * compiled HTML template is executed.)
     *
     * Here is a simple scope snippet to show how you can interact with the scope.
     * <pre>
     * <file src="./test/ng/rootScopeSpec.js" tag="docs1" />
     * </pre>
     *
     * # Inheritance
     * A scope can inherit from a parent scope, as in this example:
     * <pre>
         var parent = $rootScope;
         var child = parent.$new();

         parent.salutation = "Hello";
         child.name = "World";
         expect(child.salutation).toEqual('Hello');

         child.salutation = "Welcome";
         expect(child.salutation).toEqual('Welcome');
         expect(parent.salutation).toEqual('Hello');
     * </pre>
     *
     *
     * @param {Object.<string, function()>=} providers Map of service factory which need to be provided
     *     for the current scope. Defaults to {@link ng}.
     * @param {Object.<string, *>=} instanceCache Provides pre-instantiated services which should
     *     append/override services provided by `providers`. This is handy when unit-testing and having
     *     the need to override a default service.
     * @returns {Object} Newly created scope.
     *
     */
    function Scope() {
      this.$id = nextUid();
      this.$$phase = this.$parent = this.$$watchers =
                     this.$$nextSibling = this.$$prevSibling =
                     this.$$childHead = this.$$childTail = null;
      this['this'] = this.$root =  this;
      this.$$destroyed = false;
      this.$$asyncQueue = [];
      this.$$listeners = {};
      this.$$isolateBindings = {};
    }

    /**
     * @ngdoc property
     * @name ng.$rootScope.Scope#$id
     * @propertyOf ng.$rootScope.Scope
     * @returns {number} Unique scope ID (monotonically increasing alphanumeric sequence) useful for
     *   debugging.
     */


    Scope.prototype = {
      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$new
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Creates a new child {@link ng.$rootScope.Scope scope}.
       *
       * The parent scope will propagate the {@link ng.$rootScope.Scope#$digest $digest()} and
       * {@link ng.$rootScope.Scope#$digest $digest()} events. The scope can be removed from the scope
       * hierarchy using {@link ng.$rootScope.Scope#$destroy $destroy()}.
       *
       * {@link ng.$rootScope.Scope#$destroy $destroy()} must be called on a scope when it is desired for
       * the scope and its child scopes to be permanently detached from the parent and thus stop
       * participating in model change detection and listener notification by invoking.
       *
       * @param {boolean} isolate if true then the scope does not prototypically inherit from the
       *         parent scope. The scope is isolated, as it can not see parent scope properties.
       *         When creating widgets it is useful for the widget to not accidentally read parent
       *         state.
       *
       * @returns {Object} The newly created child scope.
       *
       */
      $new: function(isolate) {
        var Child,
            child;

        if (isFunction(isolate)) {
          // TODO: remove at some point
          throw Error('API-CHANGE: Use $controller to instantiate controllers.');
        }
        if (isolate) {
          child = new Scope();
          child.$root = this.$root;
        } else {
          Child = function() {}; // should be anonymous; This is so that when the minifier munges
            // the name it does not become random set of chars. These will then show up as class
            // name in the debugger.
          Child.prototype = this;
          child = new Child();
          child.$id = nextUid();
        }
        child['this'] = child;
        child.$$listeners = {};
        child.$parent = this;
        child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null;
        child.$$prevSibling = this.$$childTail;
        if (this.$$childHead) {
          this.$$childTail.$$nextSibling = child;
          this.$$childTail = child;
        } else {
          this.$$childHead = this.$$childTail = child;
        }
        return child;
      },

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$watch
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Registers a `listener` callback to be executed whenever the `watchExpression` changes.
       *
       * - The `watchExpression` is called on every call to {@link ng.$rootScope.Scope#$digest $digest()} and
       *   should return the value which will be watched. (Since {@link ng.$rootScope.Scope#$digest $digest()}
       *   reruns when it detects changes the `watchExpression` can execute multiple times per
       *   {@link ng.$rootScope.Scope#$digest $digest()} and should be idempotent.)
       * - The `listener` is called only when the value from the current `watchExpression` and the
       *   previous call to `watchExpression` are not equal (with the exception of the initial run,
       *   see below). The inequality is determined according to
       *   {@link angular.equals} function. To save the value of the object for later comparison, the
       *   {@link angular.copy} function is used. It also means that watching complex options will
       *   have adverse memory and performance implications.
       * - The watch `listener` may change the model, which may trigger other `listener`s to fire. This
       *   is achieved by rerunning the watchers until no changes are detected. The rerun iteration
       *   limit is 10 to prevent an infinite loop deadlock.
       *
       *
       * If you want to be notified whenever {@link ng.$rootScope.Scope#$digest $digest} is called,
       * you can register a `watchExpression` function with no `listener`. (Since `watchExpression`
       * can execute multiple times per {@link ng.$rootScope.Scope#$digest $digest} cycle when a change is
       * detected, be prepared for multiple calls to your listener.)
       *
       * After a watcher is registered with the scope, the `listener` fn is called asynchronously
       * (via {@link ng.$rootScope.Scope#$evalAsync $evalAsync}) to initialize the
       * watcher. In rare cases, this is undesirable because the listener is called when the result
       * of `watchExpression` didn't change. To detect this scenario within the `listener` fn, you
       * can compare the `newVal` and `oldVal`. If these two values are identical (`===`) then the
       * listener was called due to initialization.
       *
       *
       * # Example
       * <pre>
           // let's assume that scope was dependency injected as the $rootScope
           var scope = $rootScope;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) { scope.counter = scope.counter + 1; });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // no variable change
           expect(scope.counter).toEqual(0);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(1);
       * </pre>
       *
       *
       *
       * @param {(function()|string)} watchExpression Expression that is evaluated on each
       *    {@link ng.$rootScope.Scope#$digest $digest} cycle. A change in the return value triggers a
       *    call to the `listener`.
       *
       *    - `string`: Evaluated as {@link guide/expression expression}
       *    - `function(scope)`: called with current `scope` as a parameter.
       * @param {(function()|string)=} listener Callback called whenever the return value of
       *   the `watchExpression` changes.
       *
       *    - `string`: Evaluated as {@link guide/expression expression}
       *    - `function(newValue, oldValue, scope)`: called with current and previous values as parameters.
       *
       * @param {boolean=} objectEquality Compare object for equality rather than for reference.
       * @returns {function()} Returns a deregistration function for this listener.
       */
      $watch: function(watchExp, listener, objectEquality) {
        var scope = this,
            get = compileToFn(watchExp, 'watch'),
            array = scope.$$watchers,
            watcher = {
              fn: listener,
              last: initWatchVal,
              get: get,
              exp: watchExp,
              eq: !!objectEquality
            };

        // in the case user pass string, we need to compile it, do we really need this ?
        if (!isFunction(listener)) {
          var listenFn = compileToFn(listener || noop, 'listener');
          watcher.fn = function(newVal, oldVal, scope) {listenFn(scope);};
        }

        if (typeof watchExp == 'string' && get.constant) {
          var originalFn = watcher.fn;
          watcher.fn = function(newVal, oldVal, scope) {
            originalFn.call(this, newVal, oldVal, scope);
            arrayRemove(array, watcher);
          };
        }

        if (!array) {
          array = scope.$$watchers = [];
        }
        // we use unshift since we use a while loop in $digest for speed.
        // the while loop reads in reverse order.
        array.unshift(watcher);

        return function() {
          arrayRemove(array, watcher);
        };
      },


      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$watchCollection
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Shallow watches the properties of an object and fires whenever any of the properties change
       * (for arrays this implies watching the array items, for object maps this implies watching the properties).
       * If a change is detected the `listener` callback is fired.
       *
       * - The `obj` collection is observed via standard $watch operation and is examined on every call to $digest() to
       *   see if any items have been added, removed, or moved.
       * - The `listener` is called whenever anything within the `obj` has changed. Examples include adding new items
       *   into the object or array, removing and moving items around.
       *
       *
       * # Example
       * <pre>
          $scope.names = ['igor', 'matias', 'misko', 'james'];
          $scope.dataCount = 4;

          $scope.$watchCollection('names', function(newNames, oldNames) {
            $scope.dataCount = newNames.length;
          });

          expect($scope.dataCount).toEqual(4);
          $scope.$digest();

          //still at 4 ... no changes
          expect($scope.dataCount).toEqual(4);

          $scope.names.pop();
          $scope.$digest();

          //now there's been a change
          expect($scope.dataCount).toEqual(3);
       * </pre>
       *
       *
       * @param {string|Function(scope)} obj Evaluated as {@link guide/expression expression}. The expression value
       *    should evaluate to an object or an array which is observed on each
       *    {@link ng.$rootScope.Scope#$digest $digest} cycle. Any shallow change within the collection will trigger
       *    a call to the `listener`.
       *
       * @param {function(newCollection, oldCollection, scope)} listener a callback function that is fired with both
       *    the `newCollection` and `oldCollection` as parameters.
       *    The `newCollection` object is the newly modified data obtained from the `obj` expression and the
       *    `oldCollection` object is a copy of the former collection data.
       *    The `scope` refers to the current scope.
       *
       * @returns {function()} Returns a de-registration function for this listener. When the de-registration function is executed
       * then the internal watch operation is terminated.
       */
      $watchCollection: function(obj, listener) {
        var self = this;
        var oldValue;
        var newValue;
        var changeDetected = 0;
        var objGetter = $parse(obj);
        var internalArray = [];
        var internalObject = {};
        var oldLength = 0;

        function $watchCollectionWatch() {
          newValue = objGetter(self);
          var newLength, key;

          if (!isObject(newValue)) {
            if (oldValue !== newValue) {
              oldValue = newValue;
              changeDetected++;
            }
          } else if (isArrayLike(newValue)) {
            if (oldValue !== internalArray) {
              // we are transitioning from something which was not an array into array.
              oldValue = internalArray;
              oldLength = oldValue.length = 0;
              changeDetected++;
            }

            newLength = newValue.length;

            if (oldLength !== newLength) {
              // if lengths do not match we need to trigger change notification
              changeDetected++;
              oldValue.length = oldLength = newLength;
            }
            // copy the items to oldValue and look for changes.
            for (var i = 0; i < newLength; i++) {
              if (oldValue[i] !== newValue[i]) {
                changeDetected++;
                oldValue[i] = newValue[i];
              }
            }
          } else {
            if (oldValue !== internalObject) {
              // we are transitioning from something which was not an object into object.
              oldValue = internalObject = {};
              oldLength = 0;
              changeDetected++;
            }
            // copy the items to oldValue and look for changes.
            newLength = 0;
            for (key in newValue) {
              if (newValue.hasOwnProperty(key)) {
                newLength++;
                if (oldValue.hasOwnProperty(key)) {
                  if (oldValue[key] !== newValue[key]) {
                    changeDetected++;
                    oldValue[key] = newValue[key];
                  }
                } else {
                  oldLength++;
                  oldValue[key] = newValue[key];
                  changeDetected++;
                }
              }
            }
            if (oldLength > newLength) {
              // we used to have more keys, need to find them and destroy them.
              changeDetected++;
              for(key in oldValue) {
                if (oldValue.hasOwnProperty(key) && !newValue.hasOwnProperty(key)) {
                  oldLength--;
                  delete oldValue[key];
                }
              }
            }
          }
          return changeDetected;
        }

        function $watchCollectionAction() {
          listener(newValue, oldValue, self);
        }

        return this.$watch($watchCollectionWatch, $watchCollectionAction);
      },

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$digest
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Processes all of the {@link ng.$rootScope.Scope#$watch watchers} of the current scope and its children.
       * Because a {@link ng.$rootScope.Scope#$watch watcher}'s listener can change the model, the
       * `$digest()` keeps calling the {@link ng.$rootScope.Scope#$watch watchers} until no more listeners are
       * firing. This means that it is possible to get into an infinite loop. This function will throw
       * `'Maximum iteration limit exceeded.'` if the number of iterations exceeds 10.
       *
       * Usually you don't call `$digest()` directly in
       * {@link ng.directive:ngController controllers} or in
       * {@link ng.$compileProvider#directive directives}.
       * Instead a call to {@link ng.$rootScope.Scope#$apply $apply()} (typically from within a
       * {@link ng.$compileProvider#directive directives}) will force a `$digest()`.
       *
       * If you want to be notified whenever `$digest()` is called,
       * you can register a `watchExpression` function  with {@link ng.$rootScope.Scope#$watch $watch()}
       * with no `listener`.
       *
       * You may have a need to call `$digest()` from within unit-tests, to simulate the scope
       * life-cycle.
       *
       * # Example
       * <pre>
           var scope = ...;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // no variable change
           expect(scope.counter).toEqual(0);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(1);
       * </pre>
       *
       */
      $digest: function() {
        var watch, value, last,
            watchers,
            asyncQueue = this.$$asyncQueue,
            length,
            dirty, ttl = TTL,
            next, current, target = this,
            watchLog = [],
            logIdx, logMsg;

        beginPhase('$digest');

        do { // "while dirty" loop
          dirty = false;
          current = target;

          while(asyncQueue.length) {
            try {
              current.$eval(asyncQueue.shift());
            } catch (e) {
              $exceptionHandler(e);
            }
          }

          do { // "traverse the scopes" loop
            if ((watchers = current.$$watchers)) {
              // process our watches
              length = watchers.length;
              while (length--) {
                try {
                  watch = watchers[length];
                  // Most common watches are on primitives, in which case we can short
                  // circuit it with === operator, only when === fails do we use .equals
                  if ((value = watch.get(current)) !== (last = watch.last) &&
                      !(watch.eq
                          ? equals(value, last)
                          : (typeof value == 'number' && typeof last == 'number'
                             && isNaN(value) && isNaN(last)))) {
                    dirty = true;
                    watch.last = watch.eq ? copy(value) : value;
                    watch.fn(value, ((last === initWatchVal) ? value : last), current);
                    if (ttl < 5) {
                      logIdx = 4 - ttl;
                      if (!watchLog[logIdx]) watchLog[logIdx] = [];
                      logMsg = (isFunction(watch.exp))
                          ? 'fn: ' + (watch.exp.name || watch.exp.toString())
                          : watch.exp;
                      logMsg += '; newVal: ' + toJson(value) + '; oldVal: ' + toJson(last);
                      watchLog[logIdx].push(logMsg);
                    }
                  }
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            }

            // Insanity Warning: scope depth-first traversal
            // yes, this code is a bit crazy, but it works and we have tests to prove it!
            // this piece should be kept in sync with the traversal in $broadcast
            if (!(next = (current.$$childHead || (current !== target && current.$$nextSibling)))) {
              while(current !== target && !(next = current.$$nextSibling)) {
                current = current.$parent;
              }
            }
          } while ((current = next));

          if(dirty && !(ttl--)) {
            clearPhase();
            throw Error(TTL + ' $digest() iterations reached. Aborting!\n' +
                'Watchers fired in the last 5 iterations: ' + toJson(watchLog));
          }
        } while (dirty || asyncQueue.length);

        clearPhase();
      },


      /**
       * @ngdoc event
       * @name ng.$rootScope.Scope#$destroy
       * @eventOf ng.$rootScope.Scope
       * @eventType broadcast on scope being destroyed
       *
       * @description
       * Broadcasted when a scope and its children are being destroyed.
       */

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$destroy
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Removes the current scope (and all of its children) from the parent scope. Removal implies
       * that calls to {@link ng.$rootScope.Scope#$digest $digest()} will no longer
       * propagate to the current scope and its children. Removal also implies that the current
       * scope is eligible for garbage collection.
       *
       * The `$destroy()` is usually used by directives such as
       * {@link ng.directive:ngRepeat ngRepeat} for managing the
       * unrolling of the loop.
       *
       * Just before a scope is destroyed a `$destroy` event is broadcasted on this scope.
       * Application code can register a `$destroy` event handler that will give it chance to
       * perform any necessary cleanup.
       */
      $destroy: function() {
        // we can't destroy the root scope or a scope that has been already destroyed
        if ($rootScope == this || this.$$destroyed) return;
        var parent = this.$parent;

        this.$broadcast('$destroy');
        this.$$destroyed = true;

        if (parent.$$childHead == this) parent.$$childHead = this.$$nextSibling;
        if (parent.$$childTail == this) parent.$$childTail = this.$$prevSibling;
        if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
        if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;

        // This is bogus code that works around Chrome's GC leak
        // see: https://github.com/angular/angular.js/issues/1313#issuecomment-10378451
        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead =
            this.$$childTail = null;
      },

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$eval
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Executes the `expression` on the current scope returning the result. Any exceptions in the
       * expression are propagated (uncaught). This is useful when evaluating Angular expressions.
       *
       * # Example
       * <pre>
           var scope = ng.$rootScope.Scope();
           scope.a = 1;
           scope.b = 2;

           expect(scope.$eval('a+b')).toEqual(3);
           expect(scope.$eval(function(scope){ return scope.a + scope.b; })).toEqual(3);
       * </pre>
       *
       * @param {(string|function())=} expression An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in  {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with the current `scope` parameter.
       *
       * @returns {*} The result of evaluating the expression.
       */
      $eval: function(expr, locals) {
        return $parse(expr)(this, locals);
      },

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$evalAsync
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Executes the expression on the current scope at a later point in time.
       *
       * The `$evalAsync` makes no guarantees as to when the `expression` will be executed, only that:
       *
       *   - it will execute in the current script execution context (before any DOM rendering).
       *   - at least one {@link ng.$rootScope.Scope#$digest $digest cycle} will be performed after
       *     `expression` execution.
       *
       * Any exceptions from the execution of the expression are forwarded to the
       * {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {(string|function())=} expression An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in  {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with the current `scope` parameter.
       *
       */
      $evalAsync: function(expr) {
        this.$$asyncQueue.push(expr);
      },

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$apply
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * `$apply()` is used to execute an expression in angular from outside of the angular framework.
       * (For example from browser DOM events, setTimeout, XHR or third party libraries).
       * Because we are calling into the angular framework we need to perform proper scope life-cycle
       * of {@link ng.$exceptionHandler exception handling},
       * {@link ng.$rootScope.Scope#$digest executing watches}.
       *
       * ## Life cycle
       *
       * # Pseudo-Code of `$apply()`
       * <pre>
           function $apply(expr) {
             try {
               return $eval(expr);
             } catch (e) {
               $exceptionHandler(e);
             } finally {
               $root.$digest();
             }
           }
       * </pre>
       *
       *
       * Scope's `$apply()` method transitions through the following stages:
       *
       * 1. The {@link guide/expression expression} is executed using the
       *    {@link ng.$rootScope.Scope#$eval $eval()} method.
       * 2. Any exceptions from the execution of the expression are forwarded to the
       *    {@link ng.$exceptionHandler $exceptionHandler} service.
       * 3. The {@link ng.$rootScope.Scope#$watch watch} listeners are fired immediately after the expression
       *    was executed using the {@link ng.$rootScope.Scope#$digest $digest()} method.
       *
       *
       * @param {(string|function())=} exp An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with current `scope` parameter.
       *
       * @returns {*} The result of evaluating the expression.
       */
      $apply: function(expr) {
        try {
          beginPhase('$apply');
          return this.$eval(expr);
        } catch (e) {
          $exceptionHandler(e);
        } finally {
          clearPhase();
          try {
            $rootScope.$digest();
          } catch (e) {
            $exceptionHandler(e);
            throw e;
          }
        }
      },

      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$on
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Listens on events of a given type. See {@link ng.$rootScope.Scope#$emit $emit} for discussion of
       * event life cycle.
       *
       * The event listener function format is: `function(event, args...)`. The `event` object
       * passed into the listener has the following attributes:
       *
       *   - `targetScope` - `{Scope}`: the scope on which the event was `$emit`-ed or `$broadcast`-ed.
       *   - `currentScope` - `{Scope}`: the current scope which is handling the event.
       *   - `name` - `{string}`: Name of the event.
       *   - `stopPropagation` - `{function=}`: calling `stopPropagation` function will cancel further event
       *     propagation (available only for events that were `$emit`-ed).
       *   - `preventDefault` - `{function}`: calling `preventDefault` sets `defaultPrevented` flag to true.
       *   - `defaultPrevented` - `{boolean}`: true if `preventDefault` was called.
       *
       * @param {string} name Event name to listen on.
       * @param {function(event, args...)} listener Function to call when the event is emitted.
       * @returns {function()} Returns a deregistration function for this listener.
       */
      $on: function(name, listener) {
        var namedListeners = this.$$listeners[name];
        if (!namedListeners) {
          this.$$listeners[name] = namedListeners = [];
        }
        namedListeners.push(listener);

        return function() {
          namedListeners[indexOf(namedListeners, listener)] = null;
        };
      },


      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$emit
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Dispatches an event `name` upwards through the scope hierarchy notifying the
       * registered {@link ng.$rootScope.Scope#$on} listeners.
       *
       * The event life cycle starts at the scope on which `$emit` was called. All
       * {@link ng.$rootScope.Scope#$on listeners} listening for `name` event on this scope get notified.
       * Afterwards, the event traverses upwards toward the root scope and calls all registered
       * listeners along the way. The event will stop propagating if one of the listeners cancels it.
       *
       * Any exception emitted from the {@link ng.$rootScope.Scope#$on listeners} will be passed
       * onto the {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {string} name Event name to emit.
       * @param {...*} args Optional set of arguments which will be passed onto the event listeners.
       * @return {Object} Event object, see {@link ng.$rootScope.Scope#$on}
       */
      $emit: function(name, args) {
        var empty = [],
            namedListeners,
            scope = this,
            stopPropagation = false,
            event = {
              name: name,
              targetScope: scope,
              stopPropagation: function() {stopPropagation = true;},
              preventDefault: function() {
                event.defaultPrevented = true;
              },
              defaultPrevented: false
            },
            listenerArgs = concat([event], arguments, 1),
            i, length;

        do {
          namedListeners = scope.$$listeners[name] || empty;
          event.currentScope = scope;
          for (i=0, length=namedListeners.length; i<length; i++) {

            // if listeners were deregistered, defragment the array
            if (!namedListeners[i]) {
              namedListeners.splice(i, 1);
              i--;
              length--;
              continue;
            }
            try {
              namedListeners[i].apply(null, listenerArgs);
              if (stopPropagation) return event;
            } catch (e) {
              $exceptionHandler(e);
            }
          }
          //traverse upwards
          scope = scope.$parent;
        } while (scope);

        return event;
      },


      /**
       * @ngdoc function
       * @name ng.$rootScope.Scope#$broadcast
       * @methodOf ng.$rootScope.Scope
       * @function
       *
       * @description
       * Dispatches an event `name` downwards to all child scopes (and their children) notifying the
       * registered {@link ng.$rootScope.Scope#$on} listeners.
       *
       * The event life cycle starts at the scope on which `$broadcast` was called. All
       * {@link ng.$rootScope.Scope#$on listeners} listening for `name` event on this scope get notified.
       * Afterwards, the event propagates to all direct and indirect scopes of the current scope and
       * calls all registered listeners along the way. The event cannot be canceled.
       *
       * Any exception emitted from the {@link ng.$rootScope.Scope#$on listeners} will be passed
       * onto the {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {string} name Event name to broadcast.
       * @param {...*} args Optional set of arguments which will be passed onto the event listeners.
       * @return {Object} Event object, see {@link ng.$rootScope.Scope#$on}
       */
      $broadcast: function(name, args) {
        var target = this,
            current = target,
            next = target,
            event = {
              name: name,
              targetScope: target,
              preventDefault: function() {
                event.defaultPrevented = true;
              },
              defaultPrevented: false
            },
            listenerArgs = concat([event], arguments, 1),
            listeners, i, length;

        //down while you can, then up and next sibling or up and next sibling until back at root
        do {
          current = next;
          event.currentScope = current;
          listeners = current.$$listeners[name] || [];
          for (i=0, length = listeners.length; i<length; i++) {
            // if listeners were deregistered, defragment the array
            if (!listeners[i]) {
              listeners.splice(i, 1);
              i--;
              length--;
              continue;
            }

            try {
              listeners[i].apply(null, listenerArgs);
            } catch(e) {
              $exceptionHandler(e);
            }
          }

          // Insanity Warning: scope depth-first traversal
          // yes, this code is a bit crazy, but it works and we have tests to prove it!
          // this piece should be kept in sync with the traversal in $digest
          if (!(next = (current.$$childHead || (current !== target && current.$$nextSibling)))) {
            while(current !== target && !(next = current.$$nextSibling)) {
              current = current.$parent;
            }
          }
        } while ((current = next));

        return event;
      }
    };

    var $rootScope = new Scope();

    return $rootScope;


    function beginPhase(phase) {
      if ($rootScope.$$phase) {
        throw Error($rootScope.$$phase + ' already in progress');
      }

      $rootScope.$$phase = phase;
    }

    function clearPhase() {
      $rootScope.$$phase = null;
    }

    function compileToFn(exp, name) {
      var fn = $parse(exp);
      assertArgFn(fn, name);
      return fn;
    }

    /**
     * function used as an initial value for watchers.
     * because it's unique we can easily tell it apart from other values
     */
    function initWatchVal() {}
  }];
}

/**
 * !!! This is an undocumented "private" service !!!
 *
 * @name ng.$sniffer
 * @requires $window
 * @requires $document
 *
 * @property {boolean} history Does the browser support html5 history api ?
 * @property {boolean} hashchange Does the browser support hashchange event ?
 * @property {boolean} transitions Does the browser support CSS transition events ?
 * @property {boolean} animations Does the browser support CSS animation events ?
 *
 * @description
 * This is very simple implementation of testing browser's features.
 */
function $SnifferProvider() {
  this.$get = ['$window', '$document', function($window, $document) {
    var eventSupport = {},
        android = int((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]),
        document = $document[0] || {},
        vendorPrefix,
        vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/,
        bodyStyle = document.body && document.body.style,
        transitions = false,
        animations = false,
        match;

    if (bodyStyle) {
      for(var prop in bodyStyle) {
        if(match = vendorRegex.exec(prop)) {
          vendorPrefix = match[0];
          vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
          break;
        }
      }
      transitions = !!(('transition' in bodyStyle) || (vendorPrefix + 'Transition' in bodyStyle));
      animations  = !!(('animation' in bodyStyle) || (vendorPrefix + 'Animation' in bodyStyle));
    }


    return {
      // Android has history.pushState, but it does not update location correctly
      // so let's not use the history API at all.
      // http://code.google.com/p/android/issues/detail?id=17471
      // https://github.com/angular/angular.js/issues/904
      history: !!($window.history && $window.history.pushState && !(android < 4)),
      hashchange: 'onhashchange' in $window &&
                  // IE8 compatible mode lies
                  (!document.documentMode || document.documentMode > 7),
      hasEvent: function(event) {
        // IE9 implements 'input' event it's so fubared that we rather pretend that it doesn't have
        // it. In particular the event is not fired when backspace or delete key are pressed or
        // when cut operation is performed.
        if (event == 'input' && msie == 9) return false;

        if (isUndefined(eventSupport[event])) {
          var divElm = document.createElement('div');
          eventSupport[event] = 'on' + event in divElm;
        }

        return eventSupport[event];
      },
      csp: document.securityPolicy ? document.securityPolicy.isActive : false,
      vendorPrefix: vendorPrefix,
      transitions : transitions,
      animations : animations
    };
  }];
}

/**
 * @ngdoc object
 * @name ng.$window
 *
 * @description
 * A reference to the browser's `window` object. While `window`
 * is globally available in JavaScript, it causes testability problems, because
 * it is a global variable. In angular we always refer to it through the
 * `$window` service, so it may be overridden, removed or mocked for testing.
 *
 * All expressions are evaluated with respect to current scope so they don't
 * suffer from window globality.
 *
 * @example
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope, $window) {
           $scope.$window = $window;
           $scope.greeting = 'Hello, World!';
         }
       </script>
       <div ng-controller="Ctrl">
         <input type="text" ng-model="greeting" />
         <button ng-click="$window.alert(greeting)">ALERT</button>
       </div>
     </doc:source>
     <doc:scenario>
      it('should display the greeting in the input box', function() {
       input('greeting').enter('Hello, E2E Tests');
       // If we click the button it will block the test runner
       // element(':button').click();
      });
     </doc:scenario>
   </doc:example>
 */
function $WindowProvider(){
  this.$get = valueFn(window);
}

/**
 * Parse headers into key value object
 *
 * @param {string} headers Raw headers as a string
 * @returns {Object} Parsed headers as key value object
 */
function parseHeaders(headers) {
  var parsed = {}, key, val, i;

  if (!headers) return parsed;

  forEach(headers.split('\n'), function(line) {
    i = line.indexOf(':');
    key = lowercase(trim(line.substr(0, i)));
    val = trim(line.substr(i + 1));

    if (key) {
      if (parsed[key]) {
        parsed[key] += ', ' + val;
      } else {
        parsed[key] = val;
      }
    }
  });

  return parsed;
}


var IS_SAME_DOMAIN_URL_MATCH = /^(([^:]+):)?\/\/(\w+:{0,1}\w*@)?([\w\.-]*)?(:([0-9]+))?(.*)$/;


/**
 * Parse a request and location URL and determine whether this is a same-domain request.
 *
 * @param {string} requestUrl The url of the request.
 * @param {string} locationUrl The current browser location url.
 * @returns {boolean} Whether the request is for the same domain.
 */
function isSameDomain(requestUrl, locationUrl) {
  var match = IS_SAME_DOMAIN_URL_MATCH.exec(requestUrl);
  // if requestUrl is relative, the regex does not match.
  if (match == null) return true;

  var domain1 = {
      protocol: match[2],
      host: match[4],
      port: int(match[6]) || DEFAULT_PORTS[match[2]] || null,
      // IE8 sets unmatched groups to '' instead of undefined.
      relativeProtocol: match[2] === undefined || match[2] === ''
    };

  match = SERVER_MATCH.exec(locationUrl);
  var domain2 = {
      protocol: match[1],
      host: match[3],
      port: int(match[5]) || DEFAULT_PORTS[match[1]] || null
    };

  return (domain1.protocol == domain2.protocol || domain1.relativeProtocol) &&
         domain1.host == domain2.host &&
         (domain1.port == domain2.port || (domain1.relativeProtocol &&
             domain2.port == DEFAULT_PORTS[domain2.protocol]));
}


/**
 * Returns a function that provides access to parsed headers.
 *
 * Headers are lazy parsed when first requested.
 * @see parseHeaders
 *
 * @param {(string|Object)} headers Headers to provide access to.
 * @returns {function(string=)} Returns a getter function which if called with:
 *
 *   - if called with single an argument returns a single header value or null
 *   - if called with no arguments returns an object containing all headers.
 */
function headersGetter(headers) {
  var headersObj = isObject(headers) ? headers : undefined;

  return function(name) {
    if (!headersObj) headersObj =  parseHeaders(headers);

    if (name) {
      return headersObj[lowercase(name)] || null;
    }

    return headersObj;
  };
}


/**
 * Chain all given functions
 *
 * This function is used for both request and response transforming
 *
 * @param {*} data Data to transform.
 * @param {function(string=)} headers Http headers getter fn.
 * @param {(function|Array.<function>)} fns Function or an array of functions.
 * @returns {*} Transformed data.
 */
function transformData(data, headers, fns) {
  if (isFunction(fns))
    return fns(data, headers);

  forEach(fns, function(fn) {
    data = fn(data, headers);
  });

  return data;
}


function isSuccess(status) {
  return 200 <= status && status < 300;
}


function $HttpProvider() {
  var JSON_START = /^\s*(\[|\{[^\{])/,
      JSON_END = /[\}\]]\s*$/,
      PROTECTION_PREFIX = /^\)\]\}',?\n/,
      CONTENT_TYPE_APPLICATION_JSON = {'Content-Type': 'application/json;charset=utf-8'};

  var defaults = this.defaults = {
    // transform incoming response data
    transformResponse: [function(data) {
      if (isString(data)) {
        // strip json vulnerability protection prefix
        data = data.replace(PROTECTION_PREFIX, '');
        if (JSON_START.test(data) && JSON_END.test(data))
          data = fromJson(data, true);
      }
      return data;
    }],

    // transform outgoing request data
    transformRequest: [function(d) {
      return isObject(d) && !isFile(d) ? toJson(d) : d;
    }],

    // default headers
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      },
      post:   CONTENT_TYPE_APPLICATION_JSON,
      put:    CONTENT_TYPE_APPLICATION_JSON,
      patch:  CONTENT_TYPE_APPLICATION_JSON
    },

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN'
  };

  /**
   * Are order by request. I.E. they are applied in the same order as
   * array on request, but revers order on response.
   */
  var interceptorFactories = this.interceptors = [];
  /**
   * For historical reasons, response interceptors ordered by the order in which
   * they are applied to response. (This is in revers to interceptorFactories)
   */
  var responseInterceptorFactories = this.responseInterceptors = [];

  this.$get = ['$httpBackend', '$browser', '$cacheFactory', '$rootScope', '$q', '$injector',
      function($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {

    var defaultCache = $cacheFactory('$http');

    /**
     * Interceptors stored in reverse order. Inner interceptors before outer interceptors.
     * The reversal is needed so that we can build up the interception chain around the
     * server request.
     */
    var reversedInterceptors = [];

    forEach(interceptorFactories, function(interceptorFactory) {
      reversedInterceptors.unshift(isString(interceptorFactory)
          ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
    });

    forEach(responseInterceptorFactories, function(interceptorFactory, index) {
      var responseFn = isString(interceptorFactory)
          ? $injector.get(interceptorFactory)
          : $injector.invoke(interceptorFactory);

      /**
       * Response interceptors go before "around" interceptors (no real reason, just
       * had to pick one.) But they are already revesed, so we can't use unshift, hence
       * the splice.
       */
      reversedInterceptors.splice(index, 0, {
        response: function(response) {
          return responseFn($q.when(response));
        },
        responseError: function(response) {
          return responseFn($q.reject(response));
        }
      });
    });


    /**
     * @ngdoc function
     * @name ng.$http
     * @requires $httpBackend
     * @requires $browser
     * @requires $cacheFactory
     * @requires $rootScope
     * @requires $q
     * @requires $injector
     *
     * @description
     * The `$http` service is a core Angular service that facilitates communication with the remote
     * HTTP servers via the browser's {@link https://developer.mozilla.org/en/xmlhttprequest
     * XMLHttpRequest} object or via {@link http://en.wikipedia.org/wiki/JSONP JSONP}.
     *
     * For unit testing applications that use `$http` service, see
     * {@link ngMock.$httpBackend $httpBackend mock}.
     *
     * For a higher level of abstraction, please check out the {@link ngResource.$resource
     * $resource} service.
     *
     * The $http API is based on the {@link ng.$q deferred/promise APIs} exposed by
     * the $q service. While for simple usage patterns this doesn't matter much, for advanced usage
     * it is important to familiarize yourself with these APIs and the guarantees they provide.
     *
     *
     * # General usage
     * The `$http` service is a function which takes a single argument — a configuration object —
     * that is used to generate an HTTP request and returns  a {@link ng.$q promise}
     * with two $http specific methods: `success` and `error`.
     *
     * <pre>
     *   $http({method: 'GET', url: '/someUrl'}).
     *     success(function(data, status, headers, config) {
     *       // this callback will be called asynchronously
     *       // when the response is available
     *     }).
     *     error(function(data, status, headers, config) {
     *       // called asynchronously if an error occurs
     *       // or server returns response with an error status.
     *     });
     * </pre>
     *
     * Since the returned value of calling the $http function is a `promise`, you can also use
     * the `then` method to register callbacks, and these callbacks will receive a single argument –
     * an object representing the response. See the API signature and type info below for more
     * details.
     *
     * A response status code between 200 and 299 is considered a success status and
     * will result in the success callback being called. Note that if the response is a redirect,
     * XMLHttpRequest will transparently follow it, meaning that the error callback will not be
     * called for such responses.
     *
     * # Shortcut methods
     *
     * Since all invocations of the $http service require passing in an HTTP method and URL, and
     * POST/PUT requests require request data to be provided as well, shortcut methods
     * were created:
     *
     * <pre>
     *   $http.get('/someUrl').success(successCallback);
     *   $http.post('/someUrl', data).success(successCallback);
     * </pre>
     *
     * Complete list of shortcut methods:
     *
     * - {@link ng.$http#get $http.get}
     * - {@link ng.$http#head $http.head}
     * - {@link ng.$http#post $http.post}
     * - {@link ng.$http#put $http.put}
     * - {@link ng.$http#delete $http.delete}
     * - {@link ng.$http#jsonp $http.jsonp}
     *
     *
     * # Setting HTTP Headers
     *
     * The $http service will automatically add certain HTTP headers to all requests. These defaults
     * can be fully configured by accessing the `$httpProvider.defaults.headers` configuration
     * object, which currently contains this default configuration:
     *
     * - `$httpProvider.defaults.headers.common` (headers that are common for all requests):
     *   - `Accept: application/json, text/plain, * / *`
     * - `$httpProvider.defaults.headers.post`: (header defaults for POST requests)
     *   - `Content-Type: application/json`
     * - `$httpProvider.defaults.headers.put` (header defaults for PUT requests)
     *   - `Content-Type: application/json`
     *
     * To add or overwrite these defaults, simply add or remove a property from these configuration
     * objects. To add headers for an HTTP method other than POST or PUT, simply add a new object
     * with the lowercased HTTP method name as the key, e.g.
     * `$httpProvider.defaults.headers.get['My-Header']='value'`.
     *
     * Additionally, the defaults can be set at runtime via the `$http.defaults` object in the same
     * fashion.
     *
     *
     * # Transforming Requests and Responses
     *
     * Both requests and responses can be transformed using transform functions. By default, Angular
     * applies these transformations:
     *
     * Request transformations:
     *
     * - If the `data` property of the request configuration object contains an object, serialize it into
     *   JSON format.
     *
     * Response transformations:
     *
     *  - If XSRF prefix is detected, strip it (see Security Considerations section below).
     *  - If JSON response is detected, deserialize it using a JSON parser.
     *
     * To globally augment or override the default transforms, modify the `$httpProvider.defaults.transformRequest` and
     * `$httpProvider.defaults.transformResponse` properties. These properties are by default an
     * array of transform functions, which allows you to `push` or `unshift` a new transformation function into the
     * transformation chain. You can also decide to completely override any default transformations by assigning your
     * transformation functions to these properties directly without the array wrapper.
     *
     * Similarly, to locally override the request/response transforms, augment the `transformRequest` and/or
     * `transformResponse` properties of the configuration object passed into `$http`.
     *
     *
     * # Caching
     *
     * To enable caching, set the configuration property `cache` to `true`. When the cache is
     * enabled, `$http` stores the response from the server in local cache. Next time the
     * response is served from the cache without sending a request to the server.
     *
     * Note that even if the response is served from cache, delivery of the data is asynchronous in
     * the same way that real requests are.
     *
     * If there are multiple GET requests for the same URL that should be cached using the same
     * cache, but the cache is not populated yet, only one request to the server will be made and
     * the remaining requests will be fulfilled using the response from the first request.
     *
     * A custom default cache built with $cacheFactory can be provided in $http.defaults.cache.
     * To skip it, set configuration property `cache` to `false`.
     *
     *
     * # Interceptors
     *
     * Before you start creating interceptors, be sure to understand the
     * {@link ng.$q $q and deferred/promise APIs}.
     *
     * For purposes of global error handling, authentication, or any kind of synchronous or
     * asynchronous pre-processing of request or postprocessing of responses, it is desirable to be
     * able to intercept requests before they are handed to the server and
     * responses before they are handed over to the application code that
     * initiated these requests. The interceptors leverage the {@link ng.$q
     * promise APIs} to fulfill this need for both synchronous and asynchronous pre-processing.
     *
     * The interceptors are service factories that are registered with the `$httpProvider` by
     * adding them to the `$httpProvider.interceptors` array. The factory is called and
     * injected with dependencies (if specified) and returns the interceptor.
     *
     * There are two kinds of interceptors (and two kinds of rejection interceptors):
     *
     *   * `request`: interceptors get called with http `config` object. The function is free to modify
     *     the `config` or create a new one. The function needs to return the `config` directly or as a
     *     promise.
     *   * `requestError`: interceptor gets called when a previous interceptor threw an error or resolved
     *      with a rejection.
     *   * `response`: interceptors get called with http `response` object. The function is free to modify
     *     the `response` or create a new one. The function needs to return the `response` directly or as a
     *     promise.
     *   * `responseError`: interceptor gets called when a previous interceptor threw an error or resolved
     *      with a rejection.
     *
     *
     * <pre>
     *   // register the interceptor as a service
     *   $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
     *     return {
     *       // optional method
     *       'request': function(config) {
     *         // do something on success
     *         return config || $q.when(config);
     *       },
     *
     *       // optional method
     *      'requestError': function(rejection) {
     *         // do something on error
     *         if (canRecover(rejection)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(rejection);
     *       },
     *
     *
     *
     *       // optional method
     *       'response': function(response) {
     *         // do something on success
     *         return response || $q.when(response);
     *       },
     *
     *       // optional method
     *      'responseError': function(rejection) {
     *         // do something on error
     *         if (canRecover(rejection)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(rejection);
     *       };
     *     }
     *   });
     *
     *   $httpProvider.interceptors.push('myHttpInterceptor');
     *
     *
     *   // register the interceptor via an anonymous factory
     *   $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
     *     return {
     *      'request': function(config) {
     *          // same as above
     *       },
     *       'response': function(response) {
     *          // same as above
     *       }
     *   });
     * </pre>
     *
     * # Response interceptors (DEPRECATED)
     *
     * Before you start creating interceptors, be sure to understand the
     * {@link ng.$q $q and deferred/promise APIs}.
     *
     * For purposes of global error handling, authentication or any kind of synchronous or
     * asynchronous preprocessing of received responses, it is desirable to be able to intercept
     * responses for http requests before they are handed over to the application code that
     * initiated these requests. The response interceptors leverage the {@link ng.$q
     * promise apis} to fulfil this need for both synchronous and asynchronous preprocessing.
     *
     * The interceptors are service factories that are registered with the $httpProvider by
     * adding them to the `$httpProvider.responseInterceptors` array. The factory is called and
     * injected with dependencies (if specified) and returns the interceptor  — a function that
     * takes a {@link ng.$q promise} and returns the original or a new promise.
     *
     * <pre>
     *   // register the interceptor as a service
     *   $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
     *     return function(promise) {
     *       return promise.then(function(response) {
     *         // do something on success
     *       }, function(response) {
     *         // do something on error
     *         if (canRecover(response)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(response);
     *       });
     *     }
     *   });
     *
     *   $httpProvider.responseInterceptors.push('myHttpInterceptor');
     *
     *
     *   // register the interceptor via an anonymous factory
     *   $httpProvider.responseInterceptors.push(function($q, dependency1, dependency2) {
     *     return function(promise) {
     *       // same as above
     *     }
     *   });
     * </pre>
     *
     *
     * # Security Considerations
     *
     * When designing web applications, consider security threats from:
     *
     * - {@link http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx
     *   JSON vulnerability}
     * - {@link http://en.wikipedia.org/wiki/Cross-site_request_forgery XSRF}
     *
     * Both server and the client must cooperate in order to eliminate these threats. Angular comes
     * pre-configured with strategies that address these issues, but for this to work backend server
     * cooperation is required.
     *
     * ## JSON Vulnerability Protection
     *
     * A {@link http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx
     * JSON vulnerability} allows third party website to turn your JSON resource URL into
     * {@link http://en.wikipedia.org/wiki/JSONP JSONP} request under some conditions. To
     * counter this your server can prefix all JSON requests with following string `")]}',\n"`.
     * Angular will automatically strip the prefix before processing it as JSON.
     *
     * For example if your server needs to return:
     * <pre>
     * ['one','two']
     * </pre>
     *
     * which is vulnerable to attack, your server can return:
     * <pre>
     * )]}',
     * ['one','two']
     * </pre>
     *
     * Angular will strip the prefix, before processing the JSON.
     *
     *
     * ## Cross Site Request Forgery (XSRF) Protection
     *
     * {@link http://en.wikipedia.org/wiki/Cross-site_request_forgery XSRF} is a technique by which
     * an unauthorized site can gain your user's private data. Angular provides a mechanism
     * to counter XSRF. When performing XHR requests, the $http service reads a token from a cookie
     * (by default, `XSRF-TOKEN`) and sets it as an HTTP header (`X-XSRF-TOKEN`). Since only
     * JavaScript that runs on your domain could read the cookie, your server can be assured that
     * the XHR came from JavaScript running on your domain. The header will not be set for
     * cross-domain requests.
     *
     * To take advantage of this, your server needs to set a token in a JavaScript readable session
     * cookie called `XSRF-TOKEN` on the first HTTP GET request. On subsequent XHR requests the
     * server can verify that the cookie matches `X-XSRF-TOKEN` HTTP header, and therefore be sure
     * that only JavaScript running on your domain could have sent the request. The token must be
     * unique for each user and must be verifiable by the server (to prevent the JavaScript from making
     * up its own tokens). We recommend that the token is a digest of your site's authentication
     * cookie with a {@link https://en.wikipedia.org/wiki/Salt_(cryptography) salt} for added security.
     *
     * The name of the headers can be specified using the xsrfHeaderName and xsrfCookieName
     * properties of either $httpProvider.defaults, or the per-request config object.
     *
     *
     * @param {object} config Object describing the request to be made and how it should be
     *    processed. The object has following properties:
     *
     *    - **method** – `{string}` – HTTP method (e.g. 'GET', 'POST', etc)
     *    - **url** – `{string}` – Absolute or relative URL of the resource that is being requested.
     *    - **params** – `{Object.<string|Object>}` – Map of strings or objects which will be turned to
     *      `?key1=value1&key2=value2` after the url. If the value is not a string, it will be JSONified.
     *    - **data** – `{string|Object}` – Data to be sent as the request message data.
     *    - **headers** – `{Object}` – Map of strings representing HTTP headers to send to the server.
     *    - **xsrfHeaderName** – `{string}` – Name of HTTP header to populate with the XSRF token.
     *    - **xsrfCookieName** – `{string}` – Name of cookie containing the XSRF token.
     *    - **transformRequest** – `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
     *      transform function or an array of such functions. The transform function takes the http
     *      request body and headers and returns its transformed (typically serialized) version.
     *    - **transformResponse** – `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
     *      transform function or an array of such functions. The transform function takes the http
     *      response body and headers and returns its transformed (typically deserialized) version.
     *    - **cache** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
     *      GET request, otherwise if a cache instance built with
     *      {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
     *      caching.
     *    - **timeout** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise}
     *      that should abort the request when resolved.
     *    - **withCredentials** - `{boolean}` - whether to to set the `withCredentials` flag on the
     *      XHR object. See {@link https://developer.mozilla.org/en/http_access_control#section_5
     *      requests with credentials} for more information.
     *    - **responseType** - `{string}` - see {@link
     *      https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType requestType}.
     *
     * @returns {HttpPromise} Returns a {@link ng.$q promise} object with the
     *   standard `then` method and two http specific methods: `success` and `error`. The `then`
     *   method takes two arguments a success and an error callback which will be called with a
     *   response object. The `success` and `error` methods take a single argument - a function that
     *   will be called when the request succeeds or fails respectively. The arguments passed into
     *   these functions are destructured representation of the response object passed into the
     *   `then` method. The response object has these properties:
     *
     *   - **data** – `{string|Object}` – The response body transformed with the transform functions.
     *   - **status** – `{number}` – HTTP status code of the response.
     *   - **headers** – `{function([headerName])}` – Header getter function.
     *   - **config** – `{Object}` – The configuration object that was used to generate the request.
     *
     * @property {Array.<Object>} pendingRequests Array of config objects for currently pending
     *   requests. This is primarily meant to be used for debugging purposes.
     *
     *
     * @example
      <example>
        <file name="index.html">
          <div ng-controller="FetchCtrl">
            <select ng-model="method">
              <option>GET</option>
              <option>JSONP</option>
            </select>
            <input type="text" ng-model="url" size="80"/>
            <button ng-click="fetch()">fetch</button><br>
            <button ng-click="updateModel('GET', 'http-hello.html')">Sample GET</button>
            <button ng-click="updateModel('JSONP', 'http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')">Sample JSONP</button>
            <button ng-click="updateModel('JSONP', 'http://angularjs.org/doesntexist&callback=JSON_CALLBACK')">Invalid JSONP</button>
            <pre>http status code: {{status}}</pre>
            <pre>http response data: {{data}}</pre>
          </div>
        </file>
        <file name="script.js">
          function FetchCtrl($scope, $http, $templateCache) {
            $scope.method = 'GET';
            $scope.url = 'http-hello.html';

            $scope.fetch = function() {
              $scope.code = null;
              $scope.response = null;

              $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
                success(function(data, status) {
                  $scope.status = status;
                  $scope.data = data;
                }).
                error(function(data, status) {
                  $scope.data = data || "Request failed";
                  $scope.status = status;
              });
            };

            $scope.updateModel = function(method, url) {
              $scope.method = method;
              $scope.url = url;
            };
          }
        </file>
        <file name="http-hello.html">
          Hello, $http!
        </file>
        <file name="scenario.js">
          it('should make an xhr GET request', function() {
            element(':button:contains("Sample GET")').click();
            element(':button:contains("fetch")').click();
            expect(binding('status')).toBe('200');
            expect(binding('data')).toMatch(/Hello, \$http!/);
          });

          it('should make a JSONP request to angularjs.org', function() {
            element(':button:contains("Sample JSONP")').click();
            element(':button:contains("fetch")').click();
            expect(binding('status')).toBe('200');
            expect(binding('data')).toMatch(/Super Hero!/);
          });

          it('should make JSONP request to invalid URL and invoke the error handler',
              function() {
            element(':button:contains("Invalid JSONP")').click();
            element(':button:contains("fetch")').click();
            expect(binding('status')).toBe('0');
            expect(binding('data')).toBe('Request failed');
          });
        </file>
      </example>
     */
    function $http(requestConfig) {
      var config = {
        transformRequest: defaults.transformRequest,
        transformResponse: defaults.transformResponse
      };
      var headers = {};

      extend(config, requestConfig);
      config.headers = headers;
      config.method = uppercase(config.method);

      extend(headers,
          defaults.headers.common,
          defaults.headers[lowercase(config.method)],
          requestConfig.headers);

      var xsrfValue = isSameDomain(config.url, $browser.url())
          ? $browser.cookies()[config.xsrfCookieName || defaults.xsrfCookieName]
          : undefined;
      if (xsrfValue) {
        headers[(config.xsrfHeaderName || defaults.xsrfHeaderName)] = xsrfValue;
      }


      var serverRequest = function(config) {
        var reqData = transformData(config.data, headersGetter(headers), config.transformRequest);

        // strip content-type if data is undefined
        if (isUndefined(config.data)) {
          delete headers['Content-Type'];
        }

        if (isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials)) {
          config.withCredentials = defaults.withCredentials;
        }

        // send request
        return sendReq(config, reqData, headers).then(transformResponse, transformResponse);
      };

      var chain = [serverRequest, undefined];
      var promise = $q.when(config);

      // apply interceptors
      forEach(reversedInterceptors, function(interceptor) {
        if (interceptor.request || interceptor.requestError) {
          chain.unshift(interceptor.request, interceptor.requestError);
        }
        if (interceptor.response || interceptor.responseError) {
          chain.push(interceptor.response, interceptor.responseError);
        }
      });

      while(chain.length) {
        var thenFn = chain.shift();
        var rejectFn = chain.shift();

        promise = promise.then(thenFn, rejectFn);
      }

      promise.success = function(fn) {
        promise.then(function(response) {
          fn(response.data, response.status, response.headers, config);
        });
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, function(response) {
          fn(response.data, response.status, response.headers, config);
        });
        return promise;
      };

      return promise;

      function transformResponse(response) {
        // make a copy since the response must be cacheable
        var resp = extend({}, response, {
          data: transformData(response.data, response.headers, config.transformResponse)
        });
        return (isSuccess(response.status))
          ? resp
          : $q.reject(resp);
      }
    }

    $http.pendingRequests = [];

    /**
     * @ngdoc method
     * @name ng.$http#get
     * @methodOf ng.$http
     *
     * @description
     * Shortcut method to perform `GET` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name ng.$http#delete
     * @methodOf ng.$http
     *
     * @description
     * Shortcut method to perform `DELETE` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name ng.$http#head
     * @methodOf ng.$http
     *
     * @description
     * Shortcut method to perform `HEAD` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name ng.$http#jsonp
     * @methodOf ng.$http
     *
     * @description
     * Shortcut method to perform `JSONP` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request.
     *                     Should contain `JSON_CALLBACK` string.
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
    createShortMethods('get', 'delete', 'head', 'jsonp');

    /**
     * @ngdoc method
     * @name ng.$http#post
     * @methodOf ng.$http
     *
     * @description
     * Shortcut method to perform `POST` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {*} data Request content
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */

    /**
     * @ngdoc method
     * @name ng.$http#put
     * @methodOf ng.$http
     *
     * @description
     * Shortcut method to perform `PUT` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {*} data Request content
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
    createShortMethodsWithData('post', 'put');

        /**
         * @ngdoc property
         * @name ng.$http#defaults
         * @propertyOf ng.$http
         *
         * @description
         * Runtime equivalent of the `$httpProvider.defaults` property. Allows configuration of
         * default headers, withCredentials as well as request and response transformations.
         *
         * See "Setting HTTP Headers" and "Transforming Requests and Responses" sections above.
         */
    $http.defaults = defaults;


    return $http;


    function createShortMethods(names) {
      forEach(arguments, function(name) {
        $http[name] = function(url, config) {
          return $http(extend(config || {}, {
            method: name,
            url: url
          }));
        };
      });
    }


    function createShortMethodsWithData(name) {
      forEach(arguments, function(name) {
        $http[name] = function(url, data, config) {
          return $http(extend(config || {}, {
            method: name,
            url: url,
            data: data
          }));
        };
      });
    }


    /**
     * Makes the request.
     *
     * !!! ACCESSES CLOSURE VARS:
     * $httpBackend, defaults, $log, $rootScope, defaultCache, $http.pendingRequests
     */
    function sendReq(config, reqData, reqHeaders) {
      var deferred = $q.defer(),
          promise = deferred.promise,
          cache,
          cachedResp,
          url = buildUrl(config.url, config.params);

      $http.pendingRequests.push(config);
      promise.then(removePendingReq, removePendingReq);


      if ((config.cache || defaults.cache) && config.cache !== false && config.method == 'GET') {
        cache = isObject(config.cache) ? config.cache
              : isObject(defaults.cache) ? defaults.cache
              : defaultCache;
      }

      if (cache) {
        cachedResp = cache.get(url);
        if (cachedResp) {
          if (cachedResp.then) {
            // cached request has already been sent, but there is no response yet
            cachedResp.then(removePendingReq, removePendingReq);
            return cachedResp;
          } else {
            // serving from cache
            if (isArray(cachedResp)) {
              resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2]));
            } else {
              resolvePromise(cachedResp, 200, {});
            }
          }
        } else {
          // put the promise for the non-transformed response into cache as a placeholder
          cache.put(url, promise);
        }
      }

      // if we won't have the response in cache, send the request to the backend
      if (!cachedResp) {
        $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout,
            config.withCredentials, config.responseType);
      }

      return promise;


      /**
       * Callback registered to $httpBackend():
       *  - caches the response if desired
       *  - resolves the raw $http promise
       *  - calls $apply
       */
      function done(status, response, headersString) {
        if (cache) {
          if (isSuccess(status)) {
            cache.put(url, [status, response, parseHeaders(headersString)]);
          } else {
            // remove promise from the cache
            cache.remove(url);
          }
        }

        resolvePromise(response, status, headersString);
        if (!$rootScope.$$phase) $rootScope.$apply();
      }


      /**
       * Resolves the raw $http promise.
       */
      function resolvePromise(response, status, headers) {
        // normalize internal statuses to 0
        status = Math.max(status, 0);

        (isSuccess(status) ? deferred.resolve : deferred.reject)({
          data: response,
          status: status,
          headers: headersGetter(headers),
          config: config
        });
      }


      function removePendingReq() {
        var idx = indexOf($http.pendingRequests, config);
        if (idx !== -1) $http.pendingRequests.splice(idx, 1);
      }
    }


    function buildUrl(url, params) {
          if (!params) return url;
          var parts = [];
          forEachSorted(params, function(value, key) {
            if (value == null || value == undefined) return;
            if (!isArray(value)) value = [value];

            forEach(value, function(v) {
              if (isObject(v)) {
                v = toJson(v);
              }
              parts.push(encodeUriQuery(key) + '=' +
                         encodeUriQuery(v));
            });
          });
          return url + ((url.indexOf('?') == -1) ? '?' : '&') + parts.join('&');
        }


  }];
}

var XHR = window.XMLHttpRequest || function() {
  try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e1) {}
  try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e2) {}
  try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e3) {}
  throw new Error("This browser does not support XMLHttpRequest.");
};


/**
 * @ngdoc object
 * @name ng.$httpBackend
 * @requires $browser
 * @requires $window
 * @requires $document
 *
 * @description
 * HTTP backend used by the {@link ng.$http service} that delegates to
 * XMLHttpRequest object or JSONP and deals with browser incompatibilities.
 *
 * You should never need to use this service directly, instead use the higher-level abstractions:
 * {@link ng.$http $http} or {@link ngResource.$resource $resource}.
 *
 * During testing this implementation is swapped with {@link ngMock.$httpBackend mock
 * $httpBackend} which can be trained with responses.
 */
function $HttpBackendProvider() {
  this.$get = ['$browser', '$window', '$document', function($browser, $window, $document) {
    return createHttpBackend($browser, XHR, $browser.defer, $window.angular.callbacks,
        $document[0], $window.location.protocol.replace(':', ''));
  }];
}

function createHttpBackend($browser, XHR, $browserDefer, callbacks, rawDocument, locationProtocol) {
  // TODO(vojta): fix the signature
  return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
    var status;
    $browser.$$incOutstandingRequestCount();
    url = url || $browser.url();

    if (lowercase(method) == 'jsonp') {
      var callbackId = '_' + (callbacks.counter++).toString(36);
      callbacks[callbackId] = function(data) {
        callbacks[callbackId].data = data;
      };

      var jsonpDone = jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId),
          function() {
        if (callbacks[callbackId].data) {
          completeRequest(callback, 200, callbacks[callbackId].data);
        } else {
          completeRequest(callback, status || -2);
        }
        delete callbacks[callbackId];
      });
    } else {
      var xhr = new XHR();
      xhr.open(method, url, true);
      forEach(headers, function(value, key) {
        if (value) xhr.setRequestHeader(key, value);
      });

      // In IE6 and 7, this might be called synchronously when xhr.send below is called and the
      // response is in the cache. the promise api will ensure that to the app code the api is
      // always async
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var responseHeaders = xhr.getAllResponseHeaders();

          // TODO(vojta): remove once Firefox 21 gets released.
          // begin: workaround to overcome Firefox CORS http response headers bug
          // https://bugzilla.mozilla.org/show_bug.cgi?id=608735
          // Firefox already patched in nightly. Should land in Firefox 21.

          // CORS "simple response headers" http://www.w3.org/TR/cors/
          var value,
              simpleHeaders = ["Cache-Control", "Content-Language", "Content-Type",
                                  "Expires", "Last-Modified", "Pragma"];
          if (!responseHeaders) {
            responseHeaders = "";
            forEach(simpleHeaders, function (header) {
              var value = xhr.getResponseHeader(header);
              if (value) {
                  responseHeaders += header + ": " + value + "\n";
              }
            });
          }
          // end of the workaround.

          // responseText is the old-school way of retrieving response (supported by IE8 & 9)
          // response and responseType properties were introduced in XHR Level2 spec (supported by IE10)
          completeRequest(callback,
              status || xhr.status,
              (xhr.responseType ? xhr.response : xhr.responseText),
              responseHeaders);
        }
      };

      if (withCredentials) {
        xhr.withCredentials = true;
      }

      if (responseType) {
        xhr.responseType = responseType;
      }

      xhr.send(post || '');
    }

    if (timeout > 0) {
      var timeoutId = $browserDefer(timeoutRequest, timeout);
    } else if (timeout && timeout.then) {
      timeout.then(timeoutRequest);
    }


    function timeoutRequest() {
      status = -1;
      jsonpDone && jsonpDone();
      xhr && xhr.abort();
    }

    function completeRequest(callback, status, response, headersString) {
      // URL_MATCH is defined in src/service/location.js
      var protocol = (url.match(SERVER_MATCH) || ['', locationProtocol])[1];

      // cancel timeout and subsequent timeout promise resolution
      timeoutId && $browserDefer.cancel(timeoutId);
      jsonpDone = xhr = null;

      // fix status code for file protocol (it's always 0)
      status = (protocol == 'file') ? (response ? 200 : 404) : status;

      // normalize IE bug (http://bugs.jquery.com/ticket/1450)
      status = status == 1223 ? 204 : status;

      callback(status, response, headersString);
      $browser.$$completeOutstandingRequest(noop);
    }
  };

  function jsonpReq(url, done) {
    // we can't use jQuery/jqLite here because jQuery does crazy shit with script elements, e.g.:
    // - fetches local scripts via XHR and evals them
    // - adds and immediately removes script elements from the document
    var script = rawDocument.createElement('script'),
        doneWrapper = function() {
          rawDocument.body.removeChild(script);
          if (done) done();
        };

    script.type = 'text/javascript';
    script.src = url;

    if (msie) {
      script.onreadystatechange = function() {
        if (/loaded|complete/.test(script.readyState)) doneWrapper();
      };
    } else {
      script.onload = script.onerror = doneWrapper;
    }

    rawDocument.body.appendChild(script);
    return doneWrapper;
  }
}

/**
 * @ngdoc object
 * @name ng.$locale
 *
 * @description
 * $locale service provides localization rules for various Angular components. As of right now the
 * only public api is:
 *
 * * `id` – `{string}` – locale id formatted as `languageId-countryId` (e.g. `en-us`)
 */
function $LocaleProvider(){
  this.$get = function() {
    return {
      id: 'en-us',

      NUMBER_FORMATS: {
        DECIMAL_SEP: '.',
        GROUP_SEP: ',',
        PATTERNS: [
          { // Decimal Pattern
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: '',
            posSuf: '',
            negPre: '-',
            negSuf: '',
            gSize: 3,
            lgSize: 3
          },{ //Currency Pattern
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: '\u00A4',
            posSuf: '',
            negPre: '(\u00A4',
            negSuf: ')',
            gSize: 3,
            lgSize: 3
          }
        ],
        CURRENCY_SYM: '$'
      },

      DATETIME_FORMATS: {
        MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'
                .split(','),
        SHORTMONTH:  'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
        DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
        SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
        AMPMS: ['AM','PM'],
        medium: 'MMM d, y h:mm:ss a',
        short: 'M/d/yy h:mm a',
        fullDate: 'EEEE, MMMM d, y',
        longDate: 'MMMM d, y',
        mediumDate: 'MMM d, y',
        shortDate: 'M/d/yy',
        mediumTime: 'h:mm:ss a',
        shortTime: 'h:mm a'
      },

      pluralCat: function(num) {
        if (num === 1) {
          return 'one';
        }
        return 'other';
      }
    };
  };
}

function $TimeoutProvider() {
  this.$get = ['$rootScope', '$browser', '$q', '$exceptionHandler',
       function($rootScope,   $browser,   $q,   $exceptionHandler) {
    var deferreds = {};


     /**
      * @ngdoc function
      * @name ng.$timeout
      * @requires $browser
      *
      * @description
      * Angular's wrapper for `window.setTimeout`. The `fn` function is wrapped into a try/catch
      * block and delegates any exceptions to
      * {@link ng.$exceptionHandler $exceptionHandler} service.
      *
      * The return value of registering a timeout function is a promise, which will be resolved when
      * the timeout is reached and the timeout function is executed.
      *
      * To cancel a timeout request, call `$timeout.cancel(promise)`.
      *
      * In tests you can use {@link ngMock.$timeout `$timeout.flush()`} to
      * synchronously flush the queue of deferred functions.
      *
      * @param {function()} fn A function, whose execution should be delayed.
      * @param {number=} [delay=0] Delay in milliseconds.
      * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
      *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
      * @returns {Promise} Promise that will be resolved when the timeout is reached. The value this
      *   promise will be resolved with is the return value of the `fn` function.
      */
    function timeout(fn, delay, invokeApply) {
      var deferred = $q.defer(),
          promise = deferred.promise,
          skipApply = (isDefined(invokeApply) && !invokeApply),
          timeoutId, cleanup;

      timeoutId = $browser.defer(function() {
        try {
          deferred.resolve(fn());
        } catch(e) {
          deferred.reject(e);
          $exceptionHandler(e);
        }

        if (!skipApply) $rootScope.$apply();
      }, delay);

      cleanup = function() {
        delete deferreds[promise.$$timeoutId];
      };

      promise.$$timeoutId = timeoutId;
      deferreds[timeoutId] = deferred;
      promise.then(cleanup, cleanup);

      return promise;
    }


     /**
      * @ngdoc function
      * @name ng.$timeout#cancel
      * @methodOf ng.$timeout
      *
      * @description
      * Cancels a task associated with the `promise`. As a result of this, the promise will be
      * resolved with a rejection.
      *
      * @param {Promise=} promise Promise returned by the `$timeout` function.
      * @returns {boolean} Returns `true` if the task hasn't executed yet and was successfully
      *   canceled.
      */
    timeout.cancel = function(promise) {
      if (promise && promise.$$timeoutId in deferreds) {
        deferreds[promise.$$timeoutId].reject('canceled');
        return $browser.defer.cancel(promise.$$timeoutId);
      }
      return false;
    };

    return timeout;
  }];
}

/**
 * @ngdoc object
 * @name ng.$filterProvider
 * @description
 *
 * Filters are just functions which transform input to an output. However filters need to be Dependency Injected. To
 * achieve this a filter definition consists of a factory function which is annotated with dependencies and is
 * responsible for creating a filter function.
 *
 * <pre>
 *   // Filter registration
 *   function MyModule($provide, $filterProvider) {
 *     // create a service to demonstrate injection (not always needed)
 *     $provide.value('greet', function(name){
 *       return 'Hello ' + name + '!';
 *     });
 *
 *     // register a filter factory which uses the
 *     // greet service to demonstrate DI.
 *     $filterProvider.register('greet', function(greet){
 *       // return the filter function which uses the greet service
 *       // to generate salutation
 *       return function(text) {
 *         // filters need to be forgiving so check input validity
 *         return text && greet(text) || text;
 *       };
 *     });
 *   }
 * </pre>
 *
 * The filter function is registered with the `$injector` under the filter name suffixe with `Filter`.
 * <pre>
 *   it('should be the same instance', inject(
 *     function($filterProvider) {
 *       $filterProvider.register('reverse', function(){
 *         return ...;
 *       });
 *     },
 *     function($filter, reverseFilter) {
 *       expect($filter('reverse')).toBe(reverseFilter);
 *     });
 * </pre>
 *
 *
 * For more information about how angular filters work, and how to create your own filters, see
 * {@link guide/dev_guide.templates.filters Understanding Angular Filters} in the angular Developer
 * Guide.
 */
/**
 * @ngdoc method
 * @name ng.$filterProvider#register
 * @methodOf ng.$filterProvider
 * @description
 * Register filter factory function.
 *
 * @param {String} name Name of the filter.
 * @param {function} fn The filter factory function which is injectable.
 */


/**
 * @ngdoc function
 * @name ng.$filter
 * @function
 * @description
 * Filters are used for formatting data displayed to the user.
 *
 * The general syntax in templates is as follows:
 *
 *         {{ expression [| filter_name[:parameter_value] ... ] }}
 *
 * @param {String} name Name of the filter function to retrieve
 * @return {Function} the filter function
 */
$FilterProvider.$inject = ['$provide'];
function $FilterProvider($provide) {
  var suffix = 'Filter';

  function register(name, factory) {
    return $provide.factory(name + suffix, factory);
  }
  this.register = register;

  this.$get = ['$injector', function($injector) {
    return function(name) {
      return $injector.get(name + suffix);
    }
  }];

  ////////////////////////////////////////

  register('currency', currencyFilter);
  register('date', dateFilter);
  register('filter', filterFilter);
  register('json', jsonFilter);
  register('limitTo', limitToFilter);
  register('lowercase', lowercaseFilter);
  register('number', numberFilter);
  register('orderBy', orderByFilter);
  register('uppercase', uppercaseFilter);
}

/**
 * @ngdoc filter
 * @name ng.filter:filter
 * @function
 *
 * @description
 * Selects a subset of items from `array` and returns it as a new array.
 *
 * Note: This function is used to augment the `Array` type in Angular expressions. See
 * {@link ng.$filter} for more information about Angular arrays.
 *
 * @param {Array} array The source array.
 * @param {string|Object|function()} expression The predicate to be used for selecting items from
 *   `array`.
 *
 *   Can be one of:
 *
 *   - `string`: Predicate that results in a substring match using the value of `expression`
 *     string. All strings or objects with string properties in `array` that contain this string
 *     will be returned. The predicate can be negated by prefixing the string with `!`.
 *
 *   - `Object`: A pattern object can be used to filter specific properties on objects contained
 *     by `array`. For example `{name:"M", phone:"1"}` predicate will return an array of items
 *     which have property `name` containing "M" and property `phone` containing "1". A special
 *     property name `$` can be used (as in `{$:"text"}`) to accept a match against any
 *     property of the object. That's equivalent to the simple substring match with a `string`
 *     as described above.
 *
 *   - `function`: A predicate function can be used to write arbitrary filters. The function is
 *     called for each element of `array`. The final result is an array of those elements that
 *     the predicate returned true for.
 *
 * @param {function(expected, actual)|true|undefined} comparator Comparator which is used in
 *     determining if the expected value (from the filter expression) and actual value (from
 *     the object in the array) should be considered a match.
 *
 *   Can be one of:
 *
 *     - `function(expected, actual)`:
 *       The function will be given the object value and the predicate value to compare and
 *       should return true if the item should be included in filtered result.
 *
 *     - `true`: A shorthand for `function(expected, actual) { return angular.equals(expected, actual)}`.
 *       this is essentially strict comparison of expected and actual.
 *
 *     - `false|undefined`: A short hand for a function which will look for a substring match in case
 *       insensitive way.
 *
 * @example
   <doc:example>
     <doc:source>
       <div ng-init="friends = [{name:'John', phone:'555-1276'},
                                {name:'Mary', phone:'800-BIG-MARY'},
                                {name:'Mike', phone:'555-4321'},
                                {name:'Adam', phone:'555-5678'},
                                {name:'Julie', phone:'555-8765'},
                                {name:'Juliette', phone:'555-5678'}]"></div>

       Search: <input ng-model="searchText">
       <table id="searchTextResults">
         <tr><th>Name</th><th>Phone</th></tr>
         <tr ng-repeat="friend in friends | filter:searchText">
           <td>{{friend.name}}</td>
           <td>{{friend.phone}}</td>
         </tr>
       </table>
       <hr>
       Any: <input ng-model="search.$"> <br>
       Name only <input ng-model="search.name"><br>
       Phone only <input ng-model="search.phone"><br>
       Equality <input type="checkbox" ng-model="strict"><br>
       <table id="searchObjResults">
         <tr><th>Name</th><th>Phone</th></tr>
         <tr ng-repeat="friend in friends | filter:search:strict">
           <td>{{friend.name}}</td>
           <td>{{friend.phone}}</td>
         </tr>
       </table>
     </doc:source>
     <doc:scenario>
       it('should search across all fields when filtering with a string', function() {
         input('searchText').enter('m');
         expect(repeater('#searchTextResults tr', 'friend in friends').column('friend.name')).
           toEqual(['Mary', 'Mike', 'Adam']);

         input('searchText').enter('76');
         expect(repeater('#searchTextResults tr', 'friend in friends').column('friend.name')).
           toEqual(['John', 'Julie']);
       });

       it('should search in specific fields when filtering with a predicate object', function() {
         input('search.$').enter('i');
         expect(repeater('#searchObjResults tr', 'friend in friends').column('friend.name')).
           toEqual(['Mary', 'Mike', 'Julie', 'Juliette']);
       });
       it('should use a equal comparison when comparator is true', function() {
         input('search.name').enter('Julie');
         input('strict').check();
         expect(repeater('#searchObjResults tr', 'friend in friends').column('friend.name')).
           toEqual(['Julie']);
       });
     </doc:scenario>
   </doc:example>
 */
function filterFilter() {
  return function(array, expression, comperator) {
    if (!isArray(array)) return array;
    var predicates = [];
    predicates.check = function(value) {
      for (var j = 0; j < predicates.length; j++) {
        if(!predicates[j](value)) {
          return false;
        }
      }
      return true;
    };
    switch(typeof comperator) {
      case "function":
        break;
      case "boolean":
        if(comperator == true) {
          comperator = function(obj, text) {
            return angular.equals(obj, text);
          }
          break;
        }
      default:
        comperator = function(obj, text) {
          text = (''+text).toLowerCase();
          return (''+obj).toLowerCase().indexOf(text) > -1
        };
    }
    var search = function(obj, text){
      if (typeof text == 'string' && text.charAt(0) === '!') {
        return !search(obj, text.substr(1));
      }
      switch (typeof obj) {
        case "boolean":
        case "number":
        case "string":
          return comperator(obj, text);
        case "object":
          switch (typeof text) {
            case "object":
              return comperator(obj, text);
              break;
            default:
              for ( var objKey in obj) {
                if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
                  return true;
                }
              }
              break;
          }
          return false;
        case "array":
          for ( var i = 0; i < obj.length; i++) {
            if (search(obj[i], text)) {
              return true;
            }
          }
          return false;
        default:
          return false;
      }
    };
    switch (typeof expression) {
      case "boolean":
      case "number":
      case "string":
        expression = {$:expression};
      case "object":
        for (var key in expression) {
          if (key == '$') {
            (function() {
              if (!expression[key]) return;
              var path = key
              predicates.push(function(value) {
                return search(value, expression[path]);
              });
            })();
          } else {
            (function() {
              if (!expression[key]) return;
              var path = key;
              predicates.push(function(value) {
                return search(getter(value,path), expression[path]);
              });
            })();
          }
        }
        break;
      case 'function':
        predicates.push(expression);
        break;
      default:
        return array;
    }
    var filtered = [];
    for ( var j = 0; j < array.length; j++) {
      var value = array[j];
      if (predicates.check(value)) {
        filtered.push(value);
      }
    }
    return filtered;
  }
}

/**
 * @ngdoc filter
 * @name ng.filter:currency
 * @function
 *
 * @description
 * Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default
 * symbol for current locale is used.
 *
 * @param {number} amount Input to filter.
 * @param {string=} symbol Currency symbol or identifier to be displayed.
 * @returns {string} Formatted number.
 *
 *
 * @example
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.amount = 1234.56;
         }
       </script>
       <div ng-controller="Ctrl">
         <input type="number" ng-model="amount"> <br>
         default currency symbol ($): {{amount | currency}}<br>
         custom currency identifier (USD$): {{amount | currency:"USD$"}}
       </div>
     </doc:source>
     <doc:scenario>
       it('should init with 1234.56', function() {
         expect(binding('amount | currency')).toBe('$1,234.56');
         expect(binding('amount | currency:"USD$"')).toBe('USD$1,234.56');
       });
       it('should update', function() {
         input('amount').enter('-1234');
         expect(binding('amount | currency')).toBe('($1,234.00)');
         expect(binding('amount | currency:"USD$"')).toBe('(USD$1,234.00)');
       });
     </doc:scenario>
   </doc:example>
 */
currencyFilter.$inject = ['$locale'];
function currencyFilter($locale) {
  var formats = $locale.NUMBER_FORMATS;
  return function(amount, currencySymbol){
    if (isUndefined(currencySymbol)) currencySymbol = formats.CURRENCY_SYM;
    return formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).
                replace(/\u00A4/g, currencySymbol);
  };
}

/**
 * @ngdoc filter
 * @name ng.filter:number
 * @function
 *
 * @description
 * Formats a number as text.
 *
 * If the input is not a number an empty string is returned.
 *
 * @param {number|string} number Number to format.
 * @param {(number|string)=} [fractionSize=2] Number of decimal places to round the number to.
 * @returns {string} Number rounded to decimalPlaces and places a “,” after each third digit.
 *
 * @example
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.val = 1234.56789;
         }
       </script>
       <div ng-controller="Ctrl">
         Enter number: <input ng-model='val'><br>
         Default formatting: {{val | number}}<br>
         No fractions: {{val | number:0}}<br>
         Negative number: {{-val | number:4}}
       </div>
     </doc:source>
     <doc:scenario>
       it('should format numbers', function() {
         expect(binding('val | number')).toBe('1,234.568');
         expect(binding('val | number:0')).toBe('1,235');
         expect(binding('-val | number:4')).toBe('-1,234.5679');
       });

       it('should update', function() {
         input('val').enter('3374.333');
         expect(binding('val | number')).toBe('3,374.333');
         expect(binding('val | number:0')).toBe('3,374');
         expect(binding('-val | number:4')).toBe('-3,374.3330');
       });
     </doc:scenario>
   </doc:example>
 */


numberFilter.$inject = ['$locale'];
function numberFilter($locale) {
  var formats = $locale.NUMBER_FORMATS;
  return function(number, fractionSize) {
    return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP,
      fractionSize);
  };
}

var DECIMAL_SEP = '.';
function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
  if (isNaN(number) || !isFinite(number)) return '';

  var isNegative = number < 0;
  number = Math.abs(number);
  var numStr = number + '',
      formatedText = '',
      parts = [];

  var hasExponent = false;
  if (numStr.indexOf('e') !== -1) {
    var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
    if (match && match[2] == '-' && match[3] > fractionSize + 1) {
      numStr = '0';
    } else {
      formatedText = numStr;
      hasExponent = true;
    }
  }

  if (!hasExponent) {
    var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;

    // determine fractionSize if it is not specified
    if (isUndefined(fractionSize)) {
      fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
    }

    var pow = Math.pow(10, fractionSize);
    number = Math.round(number * pow) / pow;
    var fraction = ('' + number).split(DECIMAL_SEP);
    var whole = fraction[0];
    fraction = fraction[1] || '';

    var pos = 0,
        lgroup = pattern.lgSize,
        group = pattern.gSize;

    if (whole.length >= (lgroup + group)) {
      pos = whole.length - lgroup;
      for (var i = 0; i < pos; i++) {
        if ((pos - i)%group === 0 && i !== 0) {
          formatedText += groupSep;
        }
        formatedText += whole.charAt(i);
      }
    }

    for (i = pos; i < whole.length; i++) {
      if ((whole.length - i)%lgroup === 0 && i !== 0) {
        formatedText += groupSep;
      }
      formatedText += whole.charAt(i);
    }

    // format fraction part.
    while(fraction.length < fractionSize) {
      fraction += '0';
    }

    if (fractionSize && fractionSize !== "0") formatedText += decimalSep + fraction.substr(0, fractionSize);
  }

  parts.push(isNegative ? pattern.negPre : pattern.posPre);
  parts.push(formatedText);
  parts.push(isNegative ? pattern.negSuf : pattern.posSuf);
  return parts.join('');
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while(num.length < digits) num = '0' + num;
  if (trim)
    num = num.substr(num.length - digits);
  return neg + num;
}


function dateGetter(name, size, offset, trim) {
  offset = offset || 0;
  return function(date) {
    var value = date['get' + name]();
    if (offset > 0 || value > -offset)
      value += offset;
    if (value === 0 && offset == -12 ) value = 12;
    return padNumber(value, size, trim);
  };
}

function dateStrGetter(name, shortForm) {
  return function(date, formats) {
    var value = date['get' + name]();
    var get = uppercase(shortForm ? ('SHORT' + name) : name);

    return formats[get][value];
  };
}

function timeZoneGetter(date) {
  var zone = -1 * date.getTimezoneOffset();
  var paddedZone = (zone >= 0) ? "+" : "";

  paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) +
                padNumber(Math.abs(zone % 60), 2);

  return paddedZone;
}

function ampmGetter(date, formats) {
  return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
}

var DATE_FORMATS = {
  yyyy: dateGetter('FullYear', 4),
    yy: dateGetter('FullYear', 2, 0, true),
     y: dateGetter('FullYear', 1),
  MMMM: dateStrGetter('Month'),
   MMM: dateStrGetter('Month', true),
    MM: dateGetter('Month', 2, 1),
     M: dateGetter('Month', 1, 1),
    dd: dateGetter('Date', 2),
     d: dateGetter('Date', 1),
    HH: dateGetter('Hours', 2),
     H: dateGetter('Hours', 1),
    hh: dateGetter('Hours', 2, -12),
     h: dateGetter('Hours', 1, -12),
    mm: dateGetter('Minutes', 2),
     m: dateGetter('Minutes', 1),
    ss: dateGetter('Seconds', 2),
     s: dateGetter('Seconds', 1),
     // while ISO 8601 requires fractions to be prefixed with `.` or `,` 
     // we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
   sss: dateGetter('Milliseconds', 3),
  EEEE: dateStrGetter('Day'),
   EEE: dateStrGetter('Day', true),
     a: ampmGetter,
     Z: timeZoneGetter
};

var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    NUMBER_STRING = /^\d+$/;

/**
 * @ngdoc filter
 * @name ng.filter:date
 * @function
 *
 * @description
 *   Formats `date` to a string based on the requested `format`.
 *
 *   `format` string can be composed of the following elements:
 *
 *   * `'yyyy'`: 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
 *   * `'yy'`: 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
 *   * `'y'`: 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
 *   * `'MMMM'`: Month in year (January-December)
 *   * `'MMM'`: Month in year (Jan-Dec)
 *   * `'MM'`: Month in year, padded (01-12)
 *   * `'M'`: Month in year (1-12)
 *   * `'dd'`: Day in month, padded (01-31)
 *   * `'d'`: Day in month (1-31)
 *   * `'EEEE'`: Day in Week,(Sunday-Saturday)
 *   * `'EEE'`: Day in Week, (Sun-Sat)
 *   * `'HH'`: Hour in day, padded (00-23)
 *   * `'H'`: Hour in day (0-23)
 *   * `'hh'`: Hour in am/pm, padded (01-12)
 *   * `'h'`: Hour in am/pm, (1-12)
 *   * `'mm'`: Minute in hour, padded (00-59)
 *   * `'m'`: Minute in hour (0-59)
 *   * `'ss'`: Second in minute, padded (00-59)
 *   * `'s'`: Second in minute (0-59)
 *   * `'.sss' or ',sss'`: Millisecond in second, padded (000-999)
 *   * `'a'`: am/pm marker
 *   * `'Z'`: 4 digit (+sign) representation of the timezone offset (-1200-+1200)
 *
 *   `format` string can also be one of the following predefined
 *   {@link guide/i18n localizable formats}:
 *
 *   * `'medium'`: equivalent to `'MMM d, y h:mm:ss a'` for en_US locale
 *     (e.g. Sep 3, 2010 12:05:08 pm)
 *   * `'short'`: equivalent to `'M/d/yy h:mm a'` for en_US  locale (e.g. 9/3/10 12:05 pm)
 *   * `'fullDate'`: equivalent to `'EEEE, MMMM d,y'` for en_US  locale
 *     (e.g. Friday, September 3, 2010)
 *   * `'longDate'`: equivalent to `'MMMM d, y'` for en_US  locale (e.g. September 3, 2010
 *   * `'mediumDate'`: equivalent to `'MMM d, y'` for en_US  locale (e.g. Sep 3, 2010)
 *   * `'shortDate'`: equivalent to `'M/d/yy'` for en_US locale (e.g. 9/3/10)
 *   * `'mediumTime'`: equivalent to `'h:mm:ss a'` for en_US locale (e.g. 12:05:08 pm)
 *   * `'shortTime'`: equivalent to `'h:mm a'` for en_US locale (e.g. 12:05 pm)
 *
 *   `format` string can contain literal values. These need to be quoted with single quotes (e.g.
 *   `"h 'in the morning'"`). In order to output single quote, use two single quotes in a sequence
 *   (e.g. `"h o''clock"`).
 *
 * @param {(Date|number|string)} date Date to format either as Date object, milliseconds (string or
 *    number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.SSSZ and its
 *    shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is
 *    specified in the string input, the time is considered to be in the local timezone.
 * @param {string=} format Formatting rules (see Description). If not specified,
 *    `mediumDate` is used.
 * @returns {string} Formatted string or the input if input is not recognized as date/millis.
 *
 * @example
   <doc:example>
     <doc:source>
       <span ng-non-bindable>{{1288323623006 | date:'medium'}}</span>:
           {{1288323623006 | date:'medium'}}<br>
       <span ng-non-bindable>{{1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}</span>:
          {{1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}<br>
       <span ng-non-bindable>{{1288323623006 | date:'MM/dd/yyyy @ h:mma'}}</span>:
          {{'1288323623006' | date:'MM/dd/yyyy @ h:mma'}}<br>
     </doc:source>
     <doc:scenario>
       it('should format date', function() {
         expect(binding("1288323623006 | date:'medium'")).
            toMatch(/Oct 2\d, 2010 \d{1,2}:\d{2}:\d{2} (AM|PM)/);
         expect(binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).
            toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} (\-|\+)?\d{4}/);
         expect(binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).
            toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(AM|PM)/);
       });
     </doc:scenario>
   </doc:example>
 */
dateFilter.$inject = ['$locale'];
function dateFilter($locale) {


  var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
                     // 1        2       3         4          5          6          7          8  9     10      11
  function jsonStringToDate(string) {
    var match;
    if (match = string.match(R_ISO8601_STR)) {
      var date = new Date(0),
          tzHour = 0,
          tzMin  = 0,
          dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear,
          timeSetter = match[8] ? date.setUTCHours : date.setHours;

      if (match[9]) {
        tzHour = int(match[9] + match[10]);
        tzMin = int(match[9] + match[11]);
      }
      dateSetter.call(date, int(match[1]), int(match[2]) - 1, int(match[3]));
      var h = int(match[4]||0) - tzHour;
      var m = int(match[5]||0) - tzMin
      var s = int(match[6]||0);
      var ms = Math.round(parseFloat('0.' + (match[7]||0)) * 1000);
      timeSetter.call(date, h, m, s, ms);
      return date;
    }
    return string;
  }


  return function(date, format) {
    var text = '',
        parts = [],
        fn, match;

    format = format || 'mediumDate';
    format = $locale.DATETIME_FORMATS[format] || format;
    if (isString(date)) {
      if (NUMBER_STRING.test(date)) {
        date = int(date);
      } else {
        date = jsonStringToDate(date);
      }
    }

    if (isNumber(date)) {
      date = new Date(date);
    }

    if (!isDate(date)) {
      return date;
    }

    while(format) {
      match = DATE_FORMATS_SPLIT.exec(format);
      if (match) {
        parts = concat(parts, match, 1);
        format = parts.pop();
      } else {
        parts.push(format);
        format = null;
      }
    }

    forEach(parts, function(value){
      fn = DATE_FORMATS[value];
      text += fn ? fn(date, $locale.DATETIME_FORMATS)
                 : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
    });

    return text;
  };
}


/**
 * @ngdoc filter
 * @name ng.filter:json
 * @function
 *
 * @description
 *   Allows you to convert a JavaScript object into JSON string.
 *
 *   This filter is mostly useful for debugging. When using the double curly {{value}} notation
 *   the binding is automatically converted to JSON.
 *
 * @param {*} object Any JavaScript object (including arrays and primitive types) to filter.
 * @returns {string} JSON string.
 *
 *
 * @example:
   <doc:example>
     <doc:source>
       <pre>{{ {'name':'value'} | json }}</pre>
     </doc:source>
     <doc:scenario>
       it('should jsonify filtered objects', function() {
         expect(binding("{'name':'value'}")).toMatch(/\{\n  "name": ?"value"\n}/);
       });
     </doc:scenario>
   </doc:example>
 *
 */
function jsonFilter() {
  return function(object) {
    return toJson(object, true);
  };
}


/**
 * @ngdoc filter
 * @name ng.filter:lowercase
 * @function
 * @description
 * Converts string to lowercase.
 * @see angular.lowercase
 */
var lowercaseFilter = valueFn(lowercase);


/**
 * @ngdoc filter
 * @name ng.filter:uppercase
 * @function
 * @description
 * Converts string to uppercase.
 * @see angular.uppercase
 */
var uppercaseFilter = valueFn(uppercase);

/**
 * @ngdoc function
 * @name ng.filter:limitTo
 * @function
 *
 * @description
 * Creates a new array or string containing only a specified number of elements. The elements
 * are taken from either the beginning or the end of the source array or string, as specified by
 * the value and sign (positive or negative) of `limit`.
 *
 * Note: This function is used to augment the `Array` type in Angular expressions. See
 * {@link ng.$filter} for more information about Angular arrays.
 *
 * @param {Array|string} input Source array or string to be limited.
 * @param {string|number} limit The length of the returned array or string. If the `limit` number 
 *     is positive, `limit` number of items from the beginning of the source array/string are copied.
 *     If the number is negative, `limit` number  of items from the end of the source array/string 
 *     are copied. The `limit` will be trimmed if it exceeds `array.length`
 * @returns {Array|string} A new sub-array or substring of length `limit` or less if input array
 *     had less than `limit` elements.
 *
 * @example
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.numbers = [1,2,3,4,5,6,7,8,9];
           $scope.letters = "abcdefghi";
           $scope.numLimit = 3;
           $scope.letterLimit = 3;
         }
       </script>
       <div ng-controller="Ctrl">
         Limit {{numbers}} to: <input type="integer" ng-model="numLimit">
         <p>Output numbers: {{ numbers | limitTo:numLimit }}</p>
         Limit {{letters}} to: <input type="integer" ng-model="letterLimit">
         <p>Output letters: {{ letters | limitTo:letterLimit }}</p>
       </div>
     </doc:source>
     <doc:scenario>
       it('should limit the number array to first three items', function() {
         expect(element('.doc-example-live input[ng-model=numLimit]').val()).toBe('3');
         expect(element('.doc-example-live input[ng-model=letterLimit]').val()).toBe('3');
         expect(binding('numbers | limitTo:numLimit')).toEqual('[1,2,3]');
         expect(binding('letters | limitTo:letterLimit')).toEqual('abc');
       });

       it('should update the output when -3 is entered', function() {
         input('numLimit').enter(-3);
         input('letterLimit').enter(-3);
         expect(binding('numbers | limitTo:numLimit')).toEqual('[7,8,9]');
         expect(binding('letters | limitTo:letterLimit')).toEqual('ghi');
       });

       it('should not exceed the maximum size of input array', function() {
         input('numLimit').enter(100);
         input('letterLimit').enter(100);
         expect(binding('numbers | limitTo:numLimit')).toEqual('[1,2,3,4,5,6,7,8,9]');
         expect(binding('letters | limitTo:letterLimit')).toEqual('abcdefghi');
       });
     </doc:scenario>
   </doc:example>
 */
function limitToFilter(){
  return function(input, limit) {
    if (!isArray(input) && !isString(input)) return input;
    
    limit = int(limit);

    if (isString(input)) {
      //NaN check on limit
      if (limit) {
        return limit >= 0 ? input.slice(0, limit) : input.slice(limit, input.length);
      } else {
        return "";
      }
    }

    var out = [],
      i, n;

    // if abs(limit) exceeds maximum length, trim it
    if (limit > input.length)
      limit = input.length;
    else if (limit < -input.length)
      limit = -input.length;

    if (limit > 0) {
      i = 0;
      n = limit;
    } else {
      i = input.length + limit;
      n = input.length;
    }

    for (; i<n; i++) {
      out.push(input[i]);
    }

    return out;
  }
}

/**
 * @ngdoc function
 * @name ng.filter:orderBy
 * @function
 *
 * @description
 * Orders a specified `array` by the `expression` predicate.
 *
 * Note: this function is used to augment the `Array` type in Angular expressions. See
 * {@link ng.$filter} for more information about Angular arrays.
 *
 * @param {Array} array The array to sort.
 * @param {function(*)|string|Array.<(function(*)|string)>} expression A predicate to be
 *    used by the comparator to determine the order of elements.
 *
 *    Can be one of:
 *
 *    - `function`: Getter function. The result of this function will be sorted using the
 *      `<`, `=`, `>` operator.
 *    - `string`: An Angular expression which evaluates to an object to order by, such as 'name'
 *      to sort by a property called 'name'. Optionally prefixed with `+` or `-` to control
 *      ascending or descending sort order (for example, +name or -name).
 *    - `Array`: An array of function or string predicates. The first predicate in the array
 *      is used for sorting, but when two items are equivalent, the next predicate is used.
 *
 * @param {boolean=} reverse Reverse the order the array.
 * @returns {Array} Sorted copy of the source array.
 *
 * @example
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.friends =
               [{name:'John', phone:'555-1212', age:10},
                {name:'Mary', phone:'555-9876', age:19},
                {name:'Mike', phone:'555-4321', age:21},
                {name:'Adam', phone:'555-5678', age:35},
                {name:'Julie', phone:'555-8765', age:29}]
           $scope.predicate = '-age';
         }
       </script>
       <div ng-controller="Ctrl">
         <pre>Sorting predicate = {{predicate}}; reverse = {{reverse}}</pre>
         <hr/>
         [ <a href="" ng-click="predicate=''">unsorted</a> ]
         <table class="friend">
           <tr>
             <th><a href="" ng-click="predicate = 'name'; reverse=false">Name</a>
                 (<a href ng-click="predicate = '-name'; reverse=false">^</a>)</th>
             <th><a href="" ng-click="predicate = 'phone'; reverse=!reverse">Phone Number</a></th>
             <th><a href="" ng-click="predicate = 'age'; reverse=!reverse">Age</a></th>
           </tr>
           <tr ng-repeat="friend in friends | orderBy:predicate:reverse">
             <td>{{friend.name}}</td>
             <td>{{friend.phone}}</td>
             <td>{{friend.age}}</td>
           </tr>
         </table>
       </div>
     </doc:source>
     <doc:scenario>
       it('should be reverse ordered by aged', function() {
         expect(binding('predicate')).toBe('-age');
         expect(repeater('table.friend', 'friend in friends').column('friend.age')).
           toEqual(['35', '29', '21', '19', '10']);
         expect(repeater('table.friend', 'friend in friends').column('friend.name')).
           toEqual(['Adam', 'Julie', 'Mike', 'Mary', 'John']);
       });

       it('should reorder the table when user selects different predicate', function() {
         element('.doc-example-live a:contains("Name")').click();
         expect(repeater('table.friend', 'friend in friends').column('friend.name')).
           toEqual(['Adam', 'John', 'Julie', 'Mary', 'Mike']);
         expect(repeater('table.friend', 'friend in friends').column('friend.age')).
           toEqual(['35', '10', '29', '19', '21']);

         element('.doc-example-live a:contains("Phone")').click();
         expect(repeater('table.friend', 'friend in friends').column('friend.phone')).
           toEqual(['555-9876', '555-8765', '555-5678', '555-4321', '555-1212']);
         expect(repeater('table.friend', 'friend in friends').column('friend.name')).
           toEqual(['Mary', 'Julie', 'Adam', 'Mike', 'John']);
       });
     </doc:scenario>
   </doc:example>
 */
orderByFilter.$inject = ['$parse'];
function orderByFilter($parse){
  return function(array, sortPredicate, reverseOrder) {
    if (!isArray(array)) return array;
    if (!sortPredicate) return array;
    sortPredicate = isArray(sortPredicate) ? sortPredicate: [sortPredicate];
    sortPredicate = map(sortPredicate, function(predicate){
      var descending = false, get = predicate || identity;
      if (isString(predicate)) {
        if ((predicate.charAt(0) == '+' || predicate.charAt(0) == '-')) {
          descending = predicate.charAt(0) == '-';
          predicate = predicate.substring(1);
        }
        get = $parse(predicate);
      }
      return reverseComparator(function(a,b){
        return compare(get(a),get(b));
      }, descending);
    });
    var arrayCopy = [];
    for ( var i = 0; i < array.length; i++) { arrayCopy.push(array[i]); }
    return arrayCopy.sort(reverseComparator(comparator, reverseOrder));

    function comparator(o1, o2){
      for ( var i = 0; i < sortPredicate.length; i++) {
        var comp = sortPredicate[i](o1, o2);
        if (comp !== 0) return comp;
      }
      return 0;
    }
    function reverseComparator(comp, descending) {
      return toBoolean(descending)
          ? function(a,b){return comp(b,a);}
          : comp;
    }
    function compare(v1, v2){
      var t1 = typeof v1;
      var t2 = typeof v2;
      if (t1 == t2) {
        if (t1 == "string") v1 = v1.toLowerCase();
        if (t1 == "string") v2 = v2.toLowerCase();
        if (v1 === v2) return 0;
        return v1 < v2 ? -1 : 1;
      } else {
        return t1 < t2 ? -1 : 1;
      }
    }
  }
}

function ngDirective(directive) {
  if (isFunction(directive)) {
    directive = {
      link: directive
    }
  }
  directive.restrict = directive.restrict || 'AC';
  return valueFn(directive);
}

/**
 * @ngdoc directive
 * @name ng.directive:a
 * @restrict E
 *
 * @description
 * Modifies the default behavior of html A tag, so that the default action is prevented when href
 * attribute is empty.
 *
 * The reasoning for this change is to allow easy creation of action links with `ngClick` directive
 * without changing the location or causing page reloads, e.g.:
 * `<a href="" ng-click="model.$save()">Save</a>`
 */
var htmlAnchorDirective = valueFn({
  restrict: 'E',
  compile: function(element, attr) {

    if (msie <= 8) {

      // turn <a href ng-click="..">link</a> into a stylable link in IE
      // but only if it doesn't have name attribute, in which case it's an anchor
      if (!attr.href && !attr.name) {
        attr.$set('href', '');
      }

      // add a comment node to anchors to workaround IE bug that causes element content to be reset
      // to new attribute content if attribute is updated with value containing @ and element also
      // contains value with @
      // see issue #1949
      element.append(document.createComment('IE fix'));
    }

    return function(scope, element) {
      element.bind('click', function(event){
        // if we have no href url, then don't navigate anywhere.
        if (!element.attr('href')) {
          event.preventDefault();
        }
      });
    }
  }
});

/**
 * @ngdoc directive
 * @name ng.directive:ngHref
 * @restrict A
 *
 * @description
 * Using Angular markup like {{hash}} in an href attribute makes
 * the page open to a wrong URL, if the user clicks that link before
 * angular has a chance to replace the {{hash}} with actual URL, the
 * link will be broken and will most likely return a 404 error.
 * The `ngHref` directive solves this problem.
 *
 * The buggy way to write it:
 * <pre>
 * <a href="http://www.gravatar.com/avatar/{{hash}}"/>
 * </pre>
 *
 * The correct way to write it:
 * <pre>
 * <a ng-href="http://www.gravatar.com/avatar/{{hash}}"/>
 * </pre>
 *
 * @element A
 * @param {template} ngHref any string which can contain `{{}}` markup.
 *
 * @example
 * This example uses `link` variable inside `href` attribute:
    <doc:example>
      <doc:source>
        <input ng-model="value" /><br />
        <a id="link-1" href ng-click="value = 1">link 1</a> (link, don't reload)<br />
        <a id="link-2" href="" ng-click="value = 2">link 2</a> (link, don't reload)<br />
        <a id="link-3" ng-href="/{{'123'}}">link 3</a> (link, reload!)<br />
        <a id="link-4" href="" name="xx" ng-click="value = 4">anchor</a> (link, don't reload)<br />
        <a id="link-5" name="xxx" ng-click="value = 5">anchor</a> (no link)<br />
        <a id="link-6" ng-href="{{value}}">link</a> (link, change location)
      </doc:source>
      <doc:scenario>
        it('should execute ng-click but not reload when href without value', function() {
          element('#link-1').click();
          expect(input('value').val()).toEqual('1');
          expect(element('#link-1').attr('href')).toBe("");
        });

        it('should execute ng-click but not reload when href empty string', function() {
          element('#link-2').click();
          expect(input('value').val()).toEqual('2');
          expect(element('#link-2').attr('href')).toBe("");
        });

        it('should execute ng-click and change url when ng-href specified', function() {
          expect(element('#link-3').attr('href')).toBe("/123");

          element('#link-3').click();
          expect(browser().window().path()).toEqual('/123');
        });

        it('should execute ng-click but not reload when href empty string and name specified', function() {
          element('#link-4').click();
          expect(input('value').val()).toEqual('4');
          expect(element('#link-4').attr('href')).toBe('');
        });

        it('should execute ng-click but not reload when no href but name specified', function() {
          element('#link-5').click();
          expect(input('value').val()).toEqual('5');
          expect(element('#link-5').attr('href')).toBe(undefined);
        });

        it('should only change url when only ng-href', function() {
          input('value').enter('6');
          expect(element('#link-6').attr('href')).toBe('6');

          element('#link-6').click();
          expect(browser().location().url()).toEqual('/6');
        });
      </doc:scenario>
    </doc:example>
 */

/**
 * @ngdoc directive
 * @name ng.directive:ngSrc
 * @restrict A
 *
 * @description
 * Using Angular markup like `{{hash}}` in a `src` attribute doesn't
 * work right: The browser will fetch from the URL with the literal
 * text `{{hash}}` until Angular replaces the expression inside
 * `{{hash}}`. The `ngSrc` directive solves this problem.
 *
 * The buggy way to write it:
 * <pre>
 * <img src="http://www.gravatar.com/avatar/{{hash}}"/>
 * </pre>
 *
 * The correct way to write it:
 * <pre>
 * <img ng-src="http://www.gravatar.com/avatar/{{hash}}"/>
 * </pre>
 *
 * @element IMG
 * @param {template} ngSrc any string which can contain `{{}}` markup.
 */

/**
 * @ngdoc directive
 * @name ng.directive:ngSrcset
 * @restrict A
 *
 * @description
 * Using Angular markup like `{{hash}}` in a `srcset` attribute doesn't
 * work right: The browser will fetch from the URL with the literal
 * text `{{hash}}` until Angular replaces the expression inside
 * `{{hash}}`. The `ngSrcset` directive solves this problem.
 *
 * The buggy way to write it:
 * <pre>
 * <img srcset="http://www.gravatar.com/avatar/{{hash}} 2x"/>
 * </pre>
 *
 * The correct way to write it:
 * <pre>
 * <img ng-srcset="http://www.gravatar.com/avatar/{{hash}} 2x"/>
 * </pre>
 *
 * @element IMG
 * @param {template} ngSrcset any string which can contain `{{}}` markup.
 */

/**
 * @ngdoc directive
 * @name ng.directive:ngDisabled
 * @restrict A
 *
 * @description
 *
 * The following markup will make the button enabled on Chrome/Firefox but not on IE8 and older IEs:
 * <pre>
 * <div ng-init="scope = { isDisabled: false }">
 *  <button disabled="{{scope.isDisabled}}">Disabled</button>
 * </div>
 * </pre>
 *
 * The HTML specs do not require browsers to preserve the special attributes such as disabled.
 * (The presence of them means true and absence means false)
 * This prevents the angular compiler from correctly retrieving the binding expression.
 * To solve this problem, we introduce the `ngDisabled` directive.
 *
 * @example
    <doc:example>
      <doc:source>
        Click me to toggle: <input type="checkbox" ng-model="checked"><br/>
        <button ng-model="button" ng-disabled="checked">Button</button>
      </doc:source>
      <doc:scenario>
        it('should toggle button', function() {
          expect(element('.doc-example-live :button').prop('disabled')).toBeFalsy();
          input('checked').check();
          expect(element('.doc-example-live :button').prop('disabled')).toBeTruthy();
        });
      </doc:scenario>
    </doc:example>
 *
 * @element INPUT
 * @param {expression} ngDisabled Angular expression that will be evaluated.
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngChecked
 * @restrict A
 *
 * @description
 * The HTML specs do not require browsers to preserve the special attributes such as checked.
 * (The presence of them means true and absence means false)
 * This prevents the angular compiler from correctly retrieving the binding expression.
 * To solve this problem, we introduce the `ngChecked` directive.
 * @example
    <doc:example>
      <doc:source>
        Check me to check both: <input type="checkbox" ng-model="master"><br/>
        <input id="checkSlave" type="checkbox" ng-checked="master">
      </doc:source>
      <doc:scenario>
        it('should check both checkBoxes', function() {
          expect(element('.doc-example-live #checkSlave').prop('checked')).toBeFalsy();
          input('master').check();
          expect(element('.doc-example-live #checkSlave').prop('checked')).toBeTruthy();
        });
      </doc:scenario>
    </doc:example>
 *
 * @element INPUT
 * @param {expression} ngChecked Angular expression that will be evaluated.
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngMultiple
 * @restrict A
 *
 * @description
 * The HTML specs do not require browsers to preserve the special attributes such as multiple.
 * (The presence of them means true and absence means false)
 * This prevents the angular compiler from correctly retrieving the binding expression.
 * To solve this problem, we introduce the `ngMultiple` directive.
 *
 * @example
     <doc:example>
       <doc:source>
         Check me check multiple: <input type="checkbox" ng-model="checked"><br/>
         <select id="select" ng-multiple="checked">
           <option>Misko</option>
           <option>Igor</option>
           <option>Vojta</option>
           <option>Di</option>
         </select>
       </doc:source>
       <doc:scenario>
         it('should toggle multiple', function() {
           expect(element('.doc-example-live #select').prop('multiple')).toBeFalsy();
           input('checked').check();
           expect(element('.doc-example-live #select').prop('multiple')).toBeTruthy();
         });
       </doc:scenario>
     </doc:example>
 *
 * @element SELECT
 * @param {expression} ngMultiple Angular expression that will be evaluated.
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngReadonly
 * @restrict A
 *
 * @description
 * The HTML specs do not require browsers to preserve the special attributes such as readonly.
 * (The presence of them means true and absence means false)
 * This prevents the angular compiler from correctly retrieving the binding expression.
 * To solve this problem, we introduce the `ngReadonly` directive.
 * @example
    <doc:example>
      <doc:source>
        Check me to make text readonly: <input type="checkbox" ng-model="checked"><br/>
        <input type="text" ng-readonly="checked" value="I'm Angular"/>
      </doc:source>
      <doc:scenario>
        it('should toggle readonly attr', function() {
          expect(element('.doc-example-live :text').prop('readonly')).toBeFalsy();
          input('checked').check();
          expect(element('.doc-example-live :text').prop('readonly')).toBeTruthy();
        });
      </doc:scenario>
    </doc:example>
 *
 * @element INPUT
 * @param {string} expression Angular expression that will be evaluated.
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngSelected
 * @restrict A
 *
 * @description
 * The HTML specs do not require browsers to preserve the special attributes such as selected.
 * (The presence of them means true and absence means false)
 * This prevents the angular compiler from correctly retrieving the binding expression.
 * To solve this problem, we introduced the `ngSelected` directive.
 * @example
    <doc:example>
      <doc:source>
        Check me to select: <input type="checkbox" ng-model="selected"><br/>
        <select>
          <option>Hello!</option>
          <option id="greet" ng-selected="selected">Greetings!</option>
        </select>
      </doc:source>
      <doc:scenario>
        it('should select Greetings!', function() {
          expect(element('.doc-example-live #greet').prop('selected')).toBeFalsy();
          input('selected').check();
          expect(element('.doc-example-live #greet').prop('selected')).toBeTruthy();
        });
      </doc:scenario>
    </doc:example>
 *
 * @element OPTION
 * @param {string} expression Angular expression that will be evaluated.
 */

/**
 * @ngdoc directive
 * @name ng.directive:ngOpen
 * @restrict A
 *
 * @description
 * The HTML specs do not require browsers to preserve the special attributes such as open.
 * (The presence of them means true and absence means false)
 * This prevents the angular compiler from correctly retrieving the binding expression.
 * To solve this problem, we introduce the `ngOpen` directive.
 *
 * @example
     <doc:example>
       <doc:source>
         Check me check multiple: <input type="checkbox" ng-model="open"><br/>
         <details id="details" ng-open="open">
            <summary>Show/Hide me</summary>
         </details>
       </doc:source>
       <doc:scenario>
         it('should toggle open', function() {
           expect(element('#details').prop('open')).toBeFalsy();
           input('open').check();
           expect(element('#details').prop('open')).toBeTruthy();
         });
       </doc:scenario>
     </doc:example>
 *
 * @element DETAILS
 * @param {string} expression Angular expression that will be evaluated.
 */

var ngAttributeAliasDirectives = {};


// boolean attrs are evaluated
forEach(BOOLEAN_ATTR, function(propName, attrName) {
  var normalized = directiveNormalize('ng-' + attrName);
  ngAttributeAliasDirectives[normalized] = function() {
    return {
      priority: 100,
      compile: function() {
        return function(scope, element, attr) {
          scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
            attr.$set(attrName, !!value);
          });
        };
      }
    };
  };
});


// ng-src, ng-srcset, ng-href are interpolated
forEach(['src', 'srcset', 'href'], function(attrName) {
  var normalized = directiveNormalize('ng-' + attrName);
  ngAttributeAliasDirectives[normalized] = function() {
    return {
      priority: 99, // it needs to run after the attributes are interpolated
      link: function(scope, element, attr) {
        attr.$observe(normalized, function(value) {
          if (!value)
             return;

          attr.$set(attrName, value);

          // on IE, if "ng:src" directive declaration is used and "src" attribute doesn't exist
          // then calling element.setAttribute('src', 'foo') doesn't do anything, so we need
          // to set the property as well to achieve the desired effect.
          // we use attr[attrName] value since $set can sanitize the url.
          if (msie) element.prop(attrName, attr[attrName]);
        });
      }
    };
  };
});

var nullFormCtrl = {
  $addControl: noop,
  $removeControl: noop,
  $setValidity: noop,
  $setDirty: noop,
  $setPristine: noop
};

/**
 * @ngdoc object
 * @name ng.directive:form.FormController
 *
 * @property {boolean} $pristine True if user has not interacted with the form yet.
 * @property {boolean} $dirty True if user has already interacted with the form.
 * @property {boolean} $valid True if all of the containing forms and controls are valid.
 * @property {boolean} $invalid True if at least one containing control or form is invalid.
 *
 * @property {Object} $error Is an object hash, containing references to all invalid controls or
 *  forms, where:
 *
 *  - keys are validation tokens (error names) — such as `required`, `url` or `email`),
 *  - values are arrays of controls or forms that are invalid with given error.
 *
 * @description
 * `FormController` keeps track of all its controls and nested forms as well as state of them,
 * such as being valid/invalid or dirty/pristine.
 *
 * Each {@link ng.directive:form form} directive creates an instance
 * of `FormController`.
 *
 */
//asks for $scope to fool the BC controller module
FormController.$inject = ['$element', '$attrs', '$scope'];
function FormController(element, attrs) {
  var form = this,
      parentForm = element.parent().controller('form') || nullFormCtrl,
      invalidCount = 0, // used to easily determine if we are valid
      errors = form.$error = {},
      controls = [];

  // init state
  form.$name = attrs.name;
  form.$dirty = false;
  form.$pristine = true;
  form.$valid = true;
  form.$invalid = false;

  parentForm.$addControl(form);

  // Setup initial state of the control
  element.addClass(PRISTINE_CLASS);
  toggleValidCss(true);

  // convenience method for easy toggling of classes
  function toggleValidCss(isValid, validationErrorKey) {
    validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
    element.
      removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).
      addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
  }

  form.$addControl = function(control) {
    controls.push(control);

    if (control.$name && !form.hasOwnProperty(control.$name)) {
      form[control.$name] = control;
    }
  };

  form.$removeControl = function(control) {
    if (control.$name && form[control.$name] === control) {
      delete form[control.$name];
    }
    forEach(errors, function(queue, validationToken) {
      form.$setValidity(validationToken, true, control);
    });

    arrayRemove(controls, control);
  };

  form.$setValidity = function(validationToken, isValid, control) {
    var queue = errors[validationToken];

    if (isValid) {
      if (queue) {
        arrayRemove(queue, control);
        if (!queue.length) {
          invalidCount--;
          if (!invalidCount) {
            toggleValidCss(isValid);
            form.$valid = true;
            form.$invalid = false;
          }
          errors[validationToken] = false;
          toggleValidCss(true, validationToken);
          parentForm.$setValidity(validationToken, true, form);
        }
      }

    } else {
      if (!invalidCount) {
        toggleValidCss(isValid);
      }
      if (queue) {
        if (includes(queue, control)) return;
      } else {
        errors[validationToken] = queue = [];
        invalidCount++;
        toggleValidCss(false, validationToken);
        parentForm.$setValidity(validationToken, false, form);
      }
      queue.push(control);

      form.$valid = false;
      form.$invalid = true;
    }
  };

  form.$setDirty = function() {
    element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
    form.$dirty = true;
    form.$pristine = false;
    parentForm.$setDirty();
  };

  /**
   * @ngdoc function
   * @name ng.directive:form.FormController#$setPristine
   * @methodOf ng.directive:form.FormController
   *
   * @description
   * Sets the form to its pristine state.
   *
   * This method can be called to remove the 'ng-dirty' class and set the form to its pristine
   * state (ng-pristine class). This method will also propagate to all the controls contained
   * in this form.
   *
   * Setting a form back to a pristine state is often useful when we want to 'reuse' a form after
   * saving or resetting it.
   */
  form.$setPristine = function () {
    element.removeClass(DIRTY_CLASS).addClass(PRISTINE_CLASS);
    form.$dirty = false;
    form.$pristine = true;
    forEach(controls, function(control) {
      control.$setPristine();
    });
  };
}


/**
 * @ngdoc directive
 * @name ng.directive:ngForm
 * @restrict EAC
 *
 * @description
 * Nestable alias of {@link ng.directive:form `form`} directive. HTML
 * does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a
 * sub-group of controls needs to be determined.
 *
 * @param {string=} name|ngForm Name of the form. If specified, the form controller will be published into
 *                       related scope, under this name.
 *
 */

 /**
 * @ngdoc directive
 * @name ng.directive:form
 * @restrict E
 *
 * @description
 * Directive that instantiates
 * {@link ng.directive:form.FormController FormController}.
 *
 * If `name` attribute is specified, the form controller is published onto the current scope under
 * this name.
 *
 * # Alias: {@link ng.directive:ngForm `ngForm`}
 *
 * In angular forms can be nested. This means that the outer form is valid when all of the child
 * forms are valid as well. However browsers do not allow nesting of `<form>` elements, for this
 * reason angular provides {@link ng.directive:ngForm `ngForm`} alias
 * which behaves identical to `<form>` but allows form nesting.
 *
 *
 * # CSS classes
 *  - `ng-valid` Is set if the form is valid.
 *  - `ng-invalid` Is set if the form is invalid.
 *  - `ng-pristine` Is set if the form is pristine.
 *  - `ng-dirty` Is set if the form is dirty.
 *
 *
 * # Submitting a form and preventing default action
 *
 * Since the role of forms in client-side Angular applications is different than in classical
 * roundtrip apps, it is desirable for the browser not to translate the form submission into a full
 * page reload that sends the data to the server. Instead some javascript logic should be triggered
 * to handle the form submission in application specific way.
 *
 * For this reason, Angular prevents the default action (form submission to the server) unless the
 * `<form>` element has an `action` attribute specified.
 *
 * You can use one of the following two ways to specify what javascript method should be called when
 * a form is submitted:
 *
 * - {@link ng.directive:ngSubmit ngSubmit} directive on the form element
 * - {@link ng.directive:ngClick ngClick} directive on the first
  *  button or input field of type submit (input[type=submit])
 *
 * To prevent double execution of the handler, use only one of ngSubmit or ngClick directives. This
 * is because of the following form submission rules coming from the html spec:
 *
 * - If a form has only one input field then hitting enter in this field triggers form submit
 * (`ngSubmit`)
 * - if a form has has 2+ input fields and no buttons or input[type=submit] then hitting enter
 * doesn't trigger submit
 * - if a form has one or more input fields and one or more buttons or input[type=submit] then
 * hitting enter in any of the input fields will trigger the click handler on the *first* button or
 * input[type=submit] (`ngClick`) *and* a submit handler on the enclosing form (`ngSubmit`)
 *
 * @param {string=} name Name of the form. If specified, the form controller will be published into
 *                       related scope, under this name.
 *
 * @example
    <doc:example>
      <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.userType = 'guest';
         }
       </script>
       <form name="myForm" ng-controller="Ctrl">
         userType: <input name="input" ng-model="userType" required>
         <span class="error" ng-show="myForm.input.$error.required">Required!</span><br>
         <tt>userType = {{userType}}</tt><br>
         <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br>
         <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br>
         <tt>myForm.$valid = {{myForm.$valid}}</tt><br>
         <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>
        </form>
      </doc:source>
      <doc:scenario>
        it('should initialize to model', function() {
         expect(binding('userType')).toEqual('guest');
         expect(binding('myForm.input.$valid')).toEqual('true');
        });

        it('should be invalid if empty', function() {
         input('userType').enter('');
         expect(binding('userType')).toEqual('');
         expect(binding('myForm.input.$valid')).toEqual('false');
        });
      </doc:scenario>
    </doc:example>
 */
var formDirectiveFactory = function(isNgForm) {
  return ['$timeout', function($timeout) {
    var formDirective = {
      name: 'form',
      restrict: 'E',
      controller: FormController,
      compile: function() {
        return {
          pre: function(scope, formElement, attr, controller) {
            if (!attr.action) {
              // we can't use jq events because if a form is destroyed during submission the default
              // action is not prevented. see #1238
              //
              // IE 9 is not affected because it doesn't fire a submit event and try to do a full
              // page reload if the form was destroyed by submission of the form via a click handler
              // on a button in the form. Looks like an IE9 specific bug.
              var preventDefaultListener = function(event) {
                event.preventDefault
                  ? event.preventDefault()
                  : event.returnValue = false; // IE
              };

              addEventListenerFn(formElement[0], 'submit', preventDefaultListener);

              // unregister the preventDefault listener so that we don't not leak memory but in a
              // way that will achieve the prevention of the default action.
              formElement.bind('$destroy', function() {
                $timeout(function() {
                  removeEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                }, 0, false);
              });
            }

            var parentFormCtrl = formElement.parent().controller('form'),
                alias = attr.name || attr.ngForm;

            if (alias) {
              scope[alias] = controller;
            }
            if (parentFormCtrl) {
              formElement.bind('$destroy', function() {
                parentFormCtrl.$removeControl(controller);
                if (alias) {
                  scope[alias] = undefined;
                }
                extend(controller, nullFormCtrl); //stop propagating child destruction handlers upwards
              });
            }
          }
        };
      }
    };

    return isNgForm ? extend(copy(formDirective), {restrict: 'EAC'}) : formDirective;
  }];
};

var formDirective = formDirectiveFactory();
var ngFormDirective = formDirectiveFactory(true);

var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;

var inputType = {

  /**
   * @ngdoc inputType
   * @name ng.directive:input.text
   *
   * @description
   * Standard HTML text input with angular data binding.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Adds `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength.
   * @param {string=} ngPattern Sets `pattern` validation error key if the value does not match the
   *    RegExp pattern expression. Expected value is `/regexp/` for inline patterns or `regexp` for
   *    patterns defined as scope expressions.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   * @param {boolean=} [ngTrim=true] If set to false Angular will not automatically trimming the
   *    input.
   *
   * @example
      <doc:example>
        <doc:source>
         <script>
           function Ctrl($scope) {
             $scope.text = 'guest';
             $scope.word = /^\s*\w*\s*$/;
           }
         </script>
         <form name="myForm" ng-controller="Ctrl">
           Single word: <input type="text" name="input" ng-model="text"
                               ng-pattern="word" required ng-trim="false">
           <span class="error" ng-show="myForm.input.$error.required">
             Required!</span>
           <span class="error" ng-show="myForm.input.$error.pattern">
             Single word only!</span>

           <tt>text = {{text}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
          </form>
        </doc:source>
        <doc:scenario>
          it('should initialize to model', function() {
            expect(binding('text')).toEqual('guest');
            expect(binding('myForm.input.$valid')).toEqual('true');
          });

          it('should be invalid if empty', function() {
            input('text').enter('');
            expect(binding('text')).toEqual('');
            expect(binding('myForm.input.$valid')).toEqual('false');
          });

          it('should be invalid if multi word', function() {
            input('text').enter('hello world');
            expect(binding('myForm.input.$valid')).toEqual('false');
          });

          it('should not be trimmed', function() {
            input('text').enter('untrimmed ');
            expect(binding('text')).toEqual('untrimmed ');
            expect(binding('myForm.input.$valid')).toEqual('true');
          });
        </doc:scenario>
      </doc:example>
   */
  'text': textInputType,


  /**
   * @ngdoc inputType
   * @name ng.directive:input.number
   *
   * @description
   * Text input with number validation and transformation. Sets the `number` validation
   * error if not a valid number.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength.
   * @param {string=} ngPattern Sets `pattern` validation error key if the value does not match the
   *    RegExp pattern expression. Expected value is `/regexp/` for inline patterns or `regexp` for
   *    patterns defined as scope expressions.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <doc:example>
        <doc:source>
         <script>
           function Ctrl($scope) {
             $scope.value = 12;
           }
         </script>
         <form name="myForm" ng-controller="Ctrl">
           Number: <input type="number" name="input" ng-model="value"
                          min="0" max="99" required>
           <span class="error" ng-show="myForm.list.$error.required">
             Required!</span>
           <span class="error" ng-show="myForm.list.$error.number">
             Not valid number!</span>
           <tt>value = {{value}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
          </form>
        </doc:source>
        <doc:scenario>
          it('should initialize to model', function() {
           expect(binding('value')).toEqual('12');
           expect(binding('myForm.input.$valid')).toEqual('true');
          });

          it('should be invalid if empty', function() {
           input('value').enter('');
           expect(binding('value')).toEqual('');
           expect(binding('myForm.input.$valid')).toEqual('false');
          });

          it('should be invalid if over max', function() {
           input('value').enter('123');
           expect(binding('value')).toEqual('');
           expect(binding('myForm.input.$valid')).toEqual('false');
          });
        </doc:scenario>
      </doc:example>
   */
  'number': numberInputType,


  /**
   * @ngdoc inputType
   * @name ng.directive:input.url
   *
   * @description
   * Text input with URL validation. Sets the `url` validation error key if the content is not a
   * valid URL.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength.
   * @param {string=} ngPattern Sets `pattern` validation error key if the value does not match the
   *    RegExp pattern expression. Expected value is `/regexp/` for inline patterns or `regexp` for
   *    patterns defined as scope expressions.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <doc:example>
        <doc:source>
         <script>
           function Ctrl($scope) {
             $scope.text = 'http://google.com';
           }
         </script>
         <form name="myForm" ng-controller="Ctrl">
           URL: <input type="url" name="input" ng-model="text" required>
           <span class="error" ng-show="myForm.input.$error.required">
             Required!</span>
           <span class="error" ng-show="myForm.input.$error.url">
             Not valid url!</span>
           <tt>text = {{text}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
           <tt>myForm.$error.url = {{!!myForm.$error.url}}</tt><br/>
          </form>
        </doc:source>
        <doc:scenario>
          it('should initialize to model', function() {
            expect(binding('text')).toEqual('http://google.com');
            expect(binding('myForm.input.$valid')).toEqual('true');
          });

          it('should be invalid if empty', function() {
            input('text').enter('');
            expect(binding('text')).toEqual('');
            expect(binding('myForm.input.$valid')).toEqual('false');
          });

          it('should be invalid if not url', function() {
            input('text').enter('xxx');
            expect(binding('myForm.input.$valid')).toEqual('false');
          });
        </doc:scenario>
      </doc:example>
   */
  'url': urlInputType,


  /**
   * @ngdoc inputType
   * @name ng.directive:input.email
   *
   * @description
   * Text input with email validation. Sets the `email` validation error key if not a valid email
   * address.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength.
   * @param {string=} ngPattern Sets `pattern` validation error key if the value does not match the
   *    RegExp pattern expression. Expected value is `/regexp/` for inline patterns or `regexp` for
   *    patterns defined as scope expressions.
   *
   * @example
      <doc:example>
        <doc:source>
         <script>
           function Ctrl($scope) {
             $scope.text = 'me@example.com';
           }
         </script>
           <form name="myForm" ng-controller="Ctrl">
             Email: <input type="email" name="input" ng-model="text" required>
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.email">
               Not valid email!</span>
             <tt>text = {{text}}</tt><br/>
             <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
             <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
             <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
             <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
             <tt>myForm.$error.email = {{!!myForm.$error.email}}</tt><br/>
           </form>
        </doc:source>
        <doc:scenario>
          it('should initialize to model', function() {
            expect(binding('text')).toEqual('me@example.com');
            expect(binding('myForm.input.$valid')).toEqual('true');
          });

          it('should be invalid if empty', function() {
            input('text').enter('');
            expect(binding('text')).toEqual('');
            expect(binding('myForm.input.$valid')).toEqual('false');
          });

          it('should be invalid if not email', function() {
            input('text').enter('xxx');
            expect(binding('myForm.input.$valid')).toEqual('false');
          });
        </doc:scenario>
      </doc:example>
   */
  'email': emailInputType,


  /**
   * @ngdoc inputType
   * @name ng.directive:input.radio
   *
   * @description
   * HTML radio button.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string} value The value to which the expression should be set when selected.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <doc:example>
        <doc:source>
         <script>
           function Ctrl($scope) {
             $scope.color = 'blue';
           }
         </script>
         <form name="myForm" ng-controller="Ctrl">
           <input type="radio" ng-model="color" value="red">  Red <br/>
           <input type="radio" ng-model="color" value="green"> Green <br/>
           <input type="radio" ng-model="color" value="blue"> Blue <br/>
           <tt>color = {{color}}</tt><br/>
          </form>
        </doc:source>
        <doc:scenario>
          it('should change state', function() {
            expect(binding('color')).toEqual('blue');

            input('color').select('red');
            expect(binding('color')).toEqual('red');
          });
        </doc:scenario>
      </doc:example>
   */
  'radio': radioInputType,


  /**
   * @ngdoc inputType
   * @name ng.directive:input.checkbox
   *
   * @description
   * HTML checkbox.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} ngTrueValue The value to which the expression should be set when selected.
   * @param {string=} ngFalseValue The value to which the expression should be set when not selected.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <doc:example>
        <doc:source>
         <script>
           function Ctrl($scope) {
             $scope.value1 = true;
             $scope.value2 = 'YES'
           }
         </script>
         <form name="myForm" ng-controller="Ctrl">
           Value1: <input type="checkbox" ng-model="value1"> <br/>
           Value2: <input type="checkbox" ng-model="value2"
                          ng-true-value="YES" ng-false-value="NO"> <br/>
           <tt>value1 = {{value1}}</tt><br/>
           <tt>value2 = {{value2}}</tt><br/>
          </form>
        </doc:source>
        <doc:scenario>
          it('should change state', function() {
            expect(binding('value1')).toEqual('true');
            expect(binding('value2')).toEqual('YES');

            input('value1').check();
            input('value2').check();
            expect(binding('value1')).toEqual('false');
            expect(binding('value2')).toEqual('NO');
          });
        </doc:scenario>
      </doc:example>
   */
  'checkbox': checkboxInputType,

  'hidden': noop,
  'button': noop,
  'submit': noop,
  'reset': noop
};


function isEmpty(value) {
  return isUndefined(value) || value === '' || value === null || value !== value;
}


function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {

  var listener = function() {
    var value = element.val();

    // By default we will trim the value
    // If the attribute ng-trim exists we will avoid trimming
    // e.g. <input ng-model="foo" ng-trim="false">
    if (toBoolean(attr.ngTrim || 'T')) {
      value = trim(value);
    }

    if (ctrl.$viewValue !== value) {
      scope.$apply(function() {
        ctrl.$setViewValue(value);
      });
    }
  };

  // if the browser does support "input" event, we are fine - except on IE9 which doesn't fire the
  // input event on backspace, delete or cut
  if ($sniffer.hasEvent('input')) {
    element.bind('input', listener);
  } else {
    var timeout;

    var deferListener = function() {
      if (!timeout) {
        timeout = $browser.defer(function() {
          listener();
          timeout = null;
        });
      }
    };

    element.bind('keydown', function(event) {
      var key = event.keyCode;

      // ignore
      //    command            modifiers                   arrows
      if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) return;

      deferListener();
    });

    // if user paste into input using mouse, we need "change" event to catch it
    element.bind('change', listener);

    // if user modifies input value using context menu in IE, we need "paste" and "cut" events to catch it
    if ($sniffer.hasEvent('paste')) {
      element.bind('paste cut', deferListener);
    }
  }


  ctrl.$render = function() {
    element.val(isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue);
  };

  // pattern validator
  var pattern = attr.ngPattern,
      patternValidator,
      match;

  var validate = function(regexp, value) {
    if (isEmpty(value) || regexp.test(value)) {
      ctrl.$setValidity('pattern', true);
      return value;
    } else {
      ctrl.$setValidity('pattern', false);
      return undefined;
    }
  };

  if (pattern) {
    match = pattern.match(/^\/(.*)\/([gim]*)$/);
    if (match) {
      pattern = new RegExp(match[1], match[2]);
      patternValidator = function(value) {
        return validate(pattern, value)
      };
    } else {
      patternValidator = function(value) {
        var patternObj = scope.$eval(pattern);

        if (!patternObj || !patternObj.test) {
          throw new Error('Expected ' + pattern + ' to be a RegExp but was ' + patternObj);
        }
        return validate(patternObj, value);
      };
    }

    ctrl.$formatters.push(patternValidator);
    ctrl.$parsers.push(patternValidator);
  }

  // min length validator
  if (attr.ngMinlength) {
    var minlength = int(attr.ngMinlength);
    var minLengthValidator = function(value) {
      if (!isEmpty(value) && value.length < minlength) {
        ctrl.$setValidity('minlength', false);
        return undefined;
      } else {
        ctrl.$setValidity('minlength', true);
        return value;
      }
    };

    ctrl.$parsers.push(minLengthValidator);
    ctrl.$formatters.push(minLengthValidator);
  }

  // max length validator
  if (attr.ngMaxlength) {
    var maxlength = int(attr.ngMaxlength);
    var maxLengthValidator = function(value) {
      if (!isEmpty(value) && value.length > maxlength) {
        ctrl.$setValidity('maxlength', false);
        return undefined;
      } else {
        ctrl.$setValidity('maxlength', true);
        return value;
      }
    };

    ctrl.$parsers.push(maxLengthValidator);
    ctrl.$formatters.push(maxLengthValidator);
  }
}

function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
  textInputType(scope, element, attr, ctrl, $sniffer, $browser);

  ctrl.$parsers.push(function(value) {
    var empty = isEmpty(value);
    if (empty || NUMBER_REGEXP.test(value)) {
      ctrl.$setValidity('number', true);
      return value === '' ? null : (empty ? value : parseFloat(value));
    } else {
      ctrl.$setValidity('number', false);
      return undefined;
    }
  });

  ctrl.$formatters.push(function(value) {
    return isEmpty(value) ? '' : '' + value;
  });

  if (attr.min) {
    var min = parseFloat(attr.min);
    var minValidator = function(value) {
      if (!isEmpty(value) && value < min) {
        ctrl.$setValidity('min', false);
        return undefined;
      } else {
        ctrl.$setValidity('min', true);
        return value;
      }
    };

    ctrl.$parsers.push(minValidator);
    ctrl.$formatters.push(minValidator);
  }

  if (attr.max) {
    var max = parseFloat(attr.max);
    var maxValidator = function(value) {
      if (!isEmpty(value) && value > max) {
        ctrl.$setValidity('max', false);
        return undefined;
      } else {
        ctrl.$setValidity('max', true);
        return value;
      }
    };

    ctrl.$parsers.push(maxValidator);
    ctrl.$formatters.push(maxValidator);
  }

  ctrl.$formatters.push(function(value) {

    if (isEmpty(value) || isNumber(value)) {
      ctrl.$setValidity('number', true);
      return value;
    } else {
      ctrl.$setValidity('number', false);
      return undefined;
    }
  });
}

function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
  textInputType(scope, element, attr, ctrl, $sniffer, $browser);

  var urlValidator = function(value) {
    if (isEmpty(value) || URL_REGEXP.test(value)) {
      ctrl.$setValidity('url', true);
      return value;
    } else {
      ctrl.$setValidity('url', false);
      return undefined;
    }
  };

  ctrl.$formatters.push(urlValidator);
  ctrl.$parsers.push(urlValidator);
}

function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
  textInputType(scope, element, attr, ctrl, $sniffer, $browser);

  var emailValidator = function(value) {
    if (isEmpty(value) || EMAIL_REGEXP.test(value)) {
      ctrl.$setValidity('email', true);
      return value;
    } else {
      ctrl.$setValidity('email', false);
      return undefined;
    }
  };

  ctrl.$formatters.push(emailValidator);
  ctrl.$parsers.push(emailValidator);
}

function radioInputType(scope, element, attr, ctrl) {
  // make the name unique, if not defined
  if (isUndefined(attr.name)) {
    element.attr('name', nextUid());
  }

  element.bind('click', function() {
    if (element[0].checked) {
      scope.$apply(function() {
        ctrl.$setViewValue(attr.value);
      });
    }
  });

  ctrl.$render = function() {
    var value = attr.value;
    element[0].checked = (value == ctrl.$viewValue);
  };

  attr.$observe('value', ctrl.$render);
}

function checkboxInputType(scope, element, attr, ctrl) {
  var trueValue = attr.ngTrueValue,
      falseValue = attr.ngFalseValue;

  if (!isString(trueValue)) trueValue = true;
  if (!isString(falseValue)) falseValue = false;

  element.bind('click', function() {
    scope.$apply(function() {
      ctrl.$setViewValue(element[0].checked);
    });
  });

  ctrl.$render = function() {
    element[0].checked = ctrl.$viewValue;
  };

  ctrl.$formatters.push(function(value) {
    return value === trueValue;
  });

  ctrl.$parsers.push(function(value) {
    return value ? trueValue : falseValue;
  });
}


/**
 * @ngdoc directive
 * @name ng.directive:textarea
 * @restrict E
 *
 * @description
 * HTML textarea element control with angular data-binding. The data-binding and validation
 * properties of this element are exactly the same as those of the
 * {@link ng.directive:input input element}.
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} required Sets `required` validation error key if the value is not entered.
 * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
 *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
 *    `required` when you want to data-bind to the `required` attribute.
 * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
 *    minlength.
 * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
 *    maxlength.
 * @param {string=} ngPattern Sets `pattern` validation error key if the value does not match the
 *    RegExp pattern expression. Expected value is `/regexp/` for inline patterns or `regexp` for
 *    patterns defined as scope expressions.
 * @param {string=} ngChange Angular expression to be executed when input changes due to user
 *    interaction with the input element.
 */


/**
 * @ngdoc directive
 * @name ng.directive:input
 * @restrict E
 *
 * @description
 * HTML input element control with angular data-binding. Input control follows HTML5 input types
 * and polyfills the HTML5 validation behavior for older browsers.
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} required Sets `required` validation error key if the value is not entered.
 * @param {boolean=} ngRequired Sets `required` attribute if set to true
 * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
 *    minlength.
 * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
 *    maxlength.
 * @param {string=} ngPattern Sets `pattern` validation error key if the value does not match the
 *    RegExp pattern expression. Expected value is `/regexp/` for inline patterns or `regexp` for
 *    patterns defined as scope expressions.
 * @param {string=} ngChange Angular expression to be executed when input changes due to user
 *    interaction with the input element.
 *
 * @example
    <doc:example>
      <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.user = {name: 'guest', last: 'visitor'};
         }
       </script>
       <div ng-controller="Ctrl">
         <form name="myForm">
           User name: <input type="text" name="userName" ng-model="user.name" required>
           <span class="error" ng-show="myForm.userName.$error.required">
             Required!</span><br>
           Last name: <input type="text" name="lastName" ng-model="user.last"
             ng-minlength="3" ng-maxlength="10">
           <span class="error" ng-show="myForm.lastName.$error.minlength">
             Too short!</span>
           <span class="error" ng-show="myForm.lastName.$error.maxlength">
             Too long!</span><br>
         </form>
         <hr>
         <tt>user = {{user}}</tt><br/>
         <tt>myForm.userName.$valid = {{myForm.userName.$valid}}</tt><br>
         <tt>myForm.userName.$error = {{myForm.userName.$error}}</tt><br>
         <tt>myForm.lastName.$valid = {{myForm.lastName.$valid}}</tt><br>
         <tt>myForm.lastName.$error = {{myForm.lastName.$error}}</tt><br>
         <tt>myForm.$valid = {{myForm.$valid}}</tt><br>
         <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br>
         <tt>myForm.$error.minlength = {{!!myForm.$error.minlength}}</tt><br>
         <tt>myForm.$error.maxlength = {{!!myForm.$error.maxlength}}</tt><br>
       </div>
      </doc:source>
      <doc:scenario>
        it('should initialize to model', function() {
          expect(binding('user')).toEqual('{"name":"guest","last":"visitor"}');
          expect(binding('myForm.userName.$valid')).toEqual('true');
          expect(binding('myForm.$valid')).toEqual('true');
        });

        it('should be invalid if empty when required', function() {
          input('user.name').enter('');
          expect(binding('user')).toEqual('{"last":"visitor"}');
          expect(binding('myForm.userName.$valid')).toEqual('false');
          expect(binding('myForm.$valid')).toEqual('false');
        });

        it('should be valid if empty when min length is set', function() {
          input('user.last').enter('');
          expect(binding('user')).toEqual('{"name":"guest","last":""}');
          expect(binding('myForm.lastName.$valid')).toEqual('true');
          expect(binding('myForm.$valid')).toEqual('true');
        });

        it('should be invalid if less than required min length', function() {
          input('user.last').enter('xx');
          expect(binding('user')).toEqual('{"name":"guest"}');
          expect(binding('myForm.lastName.$valid')).toEqual('false');
          expect(binding('myForm.lastName.$error')).toMatch(/minlength/);
          expect(binding('myForm.$valid')).toEqual('false');
        });

        it('should be invalid if longer than max length', function() {
          input('user.last').enter('some ridiculously long name');
          expect(binding('user'))
            .toEqual('{"name":"guest"}');
          expect(binding('myForm.lastName.$valid')).toEqual('false');
          expect(binding('myForm.lastName.$error')).toMatch(/maxlength/);
          expect(binding('myForm.$valid')).toEqual('false');
        });
      </doc:scenario>
    </doc:example>
 */
var inputDirective = ['$browser', '$sniffer', function($browser, $sniffer) {
  return {
    restrict: 'E',
    require: '?ngModel',
    link: function(scope, element, attr, ctrl) {
      if (ctrl) {
        (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer,
                                                            $browser);
      }
    }
  };
}];

var VALID_CLASS = 'ng-valid',
    INVALID_CLASS = 'ng-invalid',
    PRISTINE_CLASS = 'ng-pristine',
    DIRTY_CLASS = 'ng-dirty';

/**
 * @ngdoc object
 * @name ng.directive:ngModel.NgModelController
 *
 * @property {string} $viewValue Actual string value in the view.
 * @property {*} $modelValue The value in the model, that the control is bound to.
 * @property {Array.<Function>} $parsers Whenever the control reads value from the DOM, it executes
 *     all of these functions to sanitize / convert the value as well as validate.
 *
 * @property {Array.<Function>} $formatters Whenever the model value changes, it executes all of
 *     these functions to convert the value as well as validate.
 *
 * @property {Object} $error An object hash with all errors as keys.
 *
 * @property {boolean} $pristine True if user has not interacted with the control yet.
 * @property {boolean} $dirty True if user has already interacted with the control.
 * @property {boolean} $valid True if there is no error.
 * @property {boolean} $invalid True if at least one error on the control.
 *
 * @description
 *
 * `NgModelController` provides API for the `ng-model` directive. The controller contains
 * services for data-binding, validation, CSS update, value formatting and parsing. It
 * specifically does not contain any logic which deals with DOM rendering or listening to
 * DOM events. The `NgModelController` is meant to be extended by other directives where, the
 * directive provides DOM manipulation and the `NgModelController` provides the data-binding.
 *
 * This example shows how to use `NgModelController` with a custom control to achieve
 * data-binding. Notice how different directives (`contenteditable`, `ng-model`, and `required`)
 * collaborate together to achieve the desired result.
 *
 * <example module="customControl">
    <file name="style.css">
      [contenteditable] {
        border: 1px solid black;
        background-color: white;
        min-height: 20px;
      }

      .ng-invalid {
        border: 1px solid red;
      }

    </file>
    <file name="script.js">
      angular.module('customControl', []).
        directive('contenteditable', function() {
          return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function(scope, element, attrs, ngModel) {
              if(!ngModel) return; // do nothing if no ng-model

              // Specify how UI should be updated
              ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
              };

              // Listen for change events to enable binding
              element.bind('blur keyup change', function() {
                scope.$apply(read);
              });
              read(); // initialize

              // Write data to the model
              function read() {
                ngModel.$setViewValue(element.html());
              }
            }
          };
        });
    </file>
    <file name="index.html">
      <form name="myForm">
       <div contenteditable
            name="myWidget" ng-model="userContent"
            required>Change me!</div>
        <span ng-show="myForm.myWidget.$error.required">Required!</span>
       <hr>
       <textarea ng-model="userContent"></textarea>
      </form>
    </file>
    <file name="scenario.js">
      it('should data-bind and become invalid', function() {
        var contentEditable = element('[contenteditable]');

        expect(contentEditable.text()).toEqual('Change me!');
        input('userContent').enter('');
        expect(contentEditable.text()).toEqual('');
        expect(contentEditable.prop('className')).toMatch(/ng-invalid-required/);
      });
    </file>
 * </example>
 *
 */
var NgModelController = ['$scope', '$exceptionHandler', '$attrs', '$element', '$parse',
    function($scope, $exceptionHandler, $attr, $element, $parse) {
  this.$viewValue = Number.NaN;
  this.$modelValue = Number.NaN;
  this.$parsers = [];
  this.$formatters = [];
  this.$viewChangeListeners = [];
  this.$pristine = true;
  this.$dirty = false;
  this.$valid = true;
  this.$invalid = false;
  this.$name = $attr.name;

  var ngModelGet = $parse($attr.ngModel),
      ngModelSet = ngModelGet.assign;

  if (!ngModelSet) {
    throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + $attr.ngModel +
        ' (' + startingTag($element) + ')');
  }

  /**
   * @ngdoc function
   * @name ng.directive:ngModel.NgModelController#$render
   * @methodOf ng.directive:ngModel.NgModelController
   *
   * @description
   * Called when the view needs to be updated. It is expected that the user of the ng-model
   * directive will implement this method.
   */
  this.$render = noop;

  var parentForm = $element.inheritedData('$formController') || nullFormCtrl,
      invalidCount = 0, // used to easily determine if we are valid
      $error = this.$error = {}; // keep invalid keys here


  // Setup initial state of the control
  $element.addClass(PRISTINE_CLASS);
  toggleValidCss(true);

  // convenience method for easy toggling of classes
  function toggleValidCss(isValid, validationErrorKey) {
    validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
    $element.
      removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).
      addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
  }

  /**
   * @ngdoc function
   * @name ng.directive:ngModel.NgModelController#$setValidity
   * @methodOf ng.directive:ngModel.NgModelController
   *
   * @description
   * Change the validity state, and notifies the form when the control changes validity. (i.e. it
   * does not notify form if given validator is already marked as invalid).
   *
   * This method should be called by validators - i.e. the parser or formatter functions.
   *
   * @param {string} validationErrorKey Name of the validator. the `validationErrorKey` will assign
   *        to `$error[validationErrorKey]=isValid` so that it is available for data-binding.
   *        The `validationErrorKey` should be in camelCase and will get converted into dash-case
   *        for class name. Example: `myError` will result in `ng-valid-my-error` and `ng-invalid-my-error`
   *        class and can be bound to as  `{{someForm.someControl.$error.myError}}` .
   * @param {boolean} isValid Whether the current state is valid (true) or invalid (false).
   */
  this.$setValidity = function(validationErrorKey, isValid) {
    if ($error[validationErrorKey] === !isValid) return;

    if (isValid) {
      if ($error[validationErrorKey]) invalidCount--;
      if (!invalidCount) {
        toggleValidCss(true);
        this.$valid = true;
        this.$invalid = false;
      }
    } else {
      toggleValidCss(false);
      this.$invalid = true;
      this.$valid = false;
      invalidCount++;
    }

    $error[validationErrorKey] = !isValid;
    toggleValidCss(isValid, validationErrorKey);

    parentForm.$setValidity(validationErrorKey, isValid, this);
  };

  /**
   * @ngdoc function
   * @name ng.directive:ngModel.NgModelController#$setPristine
   * @methodOf ng.directive:ngModel.NgModelController
   *
   * @description
   * Sets the control to its pristine state.
   *
   * This method can be called to remove the 'ng-dirty' class and set the control to its pristine
   * state (ng-pristine class).
   */
  this.$setPristine = function () {
    this.$dirty = false;
    this.$pristine = true;
    $element.removeClass(DIRTY_CLASS).addClass(PRISTINE_CLASS);
  };

  /**
   * @ngdoc function
   * @name ng.directive:ngModel.NgModelController#$setViewValue
   * @methodOf ng.directive:ngModel.NgModelController
   *
   * @description
   * Read a value from view.
   *
   * This method should be called from within a DOM event handler.
   * For example {@link ng.directive:input input} or
   * {@link ng.directive:select select} directives call it.
   *
   * It internally calls all `parsers` and if resulted value is valid, updates the model and
   * calls all registered change listeners.
   *
   * @param {string} value Value from the view.
   */
  this.$setViewValue = function(value) {
    this.$viewValue = value;

    // change to dirty
    if (this.$pristine) {
      this.$dirty = true;
      this.$pristine = false;
      $element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
      parentForm.$setDirty();
    }

    forEach(this.$parsers, function(fn) {
      value = fn(value);
    });

    if (this.$modelValue !== value) {
      this.$modelValue = value;
      ngModelSet($scope, value);
      forEach(this.$viewChangeListeners, function(listener) {
        try {
          listener();
        } catch(e) {
          $exceptionHandler(e);
        }
      })
    }
  };

  // model -> value
  var ctrl = this;

  $scope.$watch(function ngModelWatch() {
    var value = ngModelGet($scope);

    // if scope model value and ngModel value are out of sync
    if (ctrl.$modelValue !== value) {

      var formatters = ctrl.$formatters,
          idx = formatters.length;

      ctrl.$modelValue = value;
      while(idx--) {
        value = formatters[idx](value);
      }

      if (ctrl.$viewValue !== value) {
        ctrl.$viewValue = value;
        ctrl.$render();
      }
    }
  });
}];


/**
 * @ngdoc directive
 * @name ng.directive:ngModel
 *
 * @element input
 *
 * @description
 * Is directive that tells Angular to do two-way data binding. It works together with `input`,
 * `select`, `textarea`. You can easily write your own directives to use `ngModel` as well.
 *
 * `ngModel` is responsible for:
 *
 * - binding the view into the model, which other directives such as `input`, `textarea` or `select`
 *   require,
 * - providing validation behavior (i.e. required, number, email, url),
 * - keeping state of the control (valid/invalid, dirty/pristine, validation errors),
 * - setting related css class onto the element (`ng-valid`, `ng-invalid`, `ng-dirty`, `ng-pristine`),
 * - register the control with parent {@link ng.directive:form form}.
 *
 * For basic examples, how to use `ngModel`, see:
 *
 *  - {@link ng.directive:input input}
 *    - {@link ng.directive:input.text text}
 *    - {@link ng.directive:input.checkbox checkbox}
 *    - {@link ng.directive:input.radio radio}
 *    - {@link ng.directive:input.number number}
 *    - {@link ng.directive:input.email email}
 *    - {@link ng.directive:input.url url}
 *  - {@link ng.directive:select select}
 *  - {@link ng.directive:textarea textarea}
 *
 */
var ngModelDirective = function() {
  return {
    require: ['ngModel', '^?form'],
    controller: NgModelController,
    link: function(scope, element, attr, ctrls) {
      // notify others, especially parent forms

      var modelCtrl = ctrls[0],
          formCtrl = ctrls[1] || nullFormCtrl;

      formCtrl.$addControl(modelCtrl);

      element.bind('$destroy', function() {
        formCtrl.$removeControl(modelCtrl);
      });
    }
  };
};


/**
 * @ngdoc directive
 * @name ng.directive:ngChange
 * @restrict E
 *
 * @description
 * Evaluate given expression when user changes the input.
 * The expression is not evaluated when the value change is coming from the model.
 *
 * Note, this directive requires `ngModel` to be present.
 *
 * @element input
 *
 * @example
 * <doc:example>
 *   <doc:source>
 *     <script>
 *       function Controller($scope) {
 *         $scope.counter = 0;
 *         $scope.change = function() {
 *           $scope.counter++;
 *         };
 *       }
 *     </script>
 *     <div ng-controller="Controller">
 *       <input type="checkbox" ng-model="confirmed" ng-change="change()" id="ng-change-example1" />
 *       <input type="checkbox" ng-model="confirmed" id="ng-change-example2" />
 *       <label for="ng-change-example2">Confirmed</label><br />
 *       debug = {{confirmed}}<br />
 *       counter = {{counter}}
 *     </div>
 *   </doc:source>
 *   <doc:scenario>
 *     it('should evaluate the expression if changing from view', function() {
 *       expect(binding('counter')).toEqual('0');
 *       element('#ng-change-example1').click();
 *       expect(binding('counter')).toEqual('1');
 *       expect(binding('confirmed')).toEqual('true');
 *     });
 *
 *     it('should not evaluate the expression if changing from model', function() {
 *       element('#ng-change-example2').click();
 *       expect(binding('counter')).toEqual('0');
 *       expect(binding('confirmed')).toEqual('true');
 *     });
 *   </doc:scenario>
 * </doc:example>
 */
var ngChangeDirective = valueFn({
  require: 'ngModel',
  link: function(scope, element, attr, ctrl) {
    ctrl.$viewChangeListeners.push(function() {
      scope.$eval(attr.ngChange);
    });
  }
});


var requiredDirective = function() {
  return {
    require: '?ngModel',
    link: function(scope, elm, attr, ctrl) {
      if (!ctrl) return;
      attr.required = true; // force truthy in case we are on non input element

      var validator = function(value) {
        if (attr.required && (isEmpty(value) || value === false)) {
          ctrl.$setValidity('required', false);
          return;
        } else {
          ctrl.$setValidity('required', true);
          return value;
        }
      };

      ctrl.$formatters.push(validator);
      ctrl.$parsers.unshift(validator);

      attr.$observe('required', function() {
        validator(ctrl.$viewValue);
      });
    }
  };
};


/**
 * @ngdoc directive
 * @name ng.directive:ngList
 *
 * @description
 * Text input that converts between comma-separated string into an array of strings.
 *
 * @element input
 * @param {string=} ngList optional delimiter that should be used to split the value. If
 *   specified in form `/something/` then the value will be converted into a regular expression.
 *
 * @example
    <doc:example>
      <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.names = ['igor', 'misko', 'vojta'];
         }
       </script>
       <form name="myForm" ng-controller="Ctrl">
         List: <input name="namesInput" ng-model="names" ng-list required>
         <span class="error" ng-show="myForm.list.$error.required">
           Required!</span>
         <tt>names = {{names}}</tt><br/>
         <tt>myForm.namesInput.$valid = {{myForm.namesInput.$valid}}</tt><br/>
         <tt>myForm.namesInput.$error = {{myForm.namesInput.$error}}</tt><br/>
         <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
         <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
        </form>
      </doc:source>
      <doc:scenario>
        it('should initialize to model', function() {
          expect(binding('names')).toEqual('["igor","misko","vojta"]');
          expect(binding('myForm.namesInput.$valid')).toEqual('true');
        });

        it('should be invalid if empty', function() {
          input('names').enter('');
          expect(binding('names')).toEqual('[]');
          expect(binding('myForm.namesInput.$valid')).toEqual('false');
        });
      </doc:scenario>
    </doc:example>
 */
var ngListDirective = function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ctrl) {
      var match = /\/(.*)\//.exec(attr.ngList),
          separator = match && new RegExp(match[1]) || attr.ngList || ',';

      var parse = function(viewValue) {
        var list = [];

        if (viewValue) {
          forEach(viewValue.split(separator), function(value) {
            if (value) list.push(trim(value));
          });
        }

        return list;
      };

      ctrl.$parsers.push(parse);
      ctrl.$formatters.push(function(value) {
        if (isArray(value)) {
          return value.join(', ');
        }

        return undefined;
      });
    }
  };
};


var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;

var ngValueDirective = function() {
  return {
    priority: 100,
    compile: function(tpl, tplAttr) {
      if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
        return function(scope, elm, attr) {
          attr.$set('value', scope.$eval(attr.ngValue));
        };
      } else {
        return function(scope, elm, attr) {
          scope.$watch(attr.ngValue, function valueWatchAction(value) {
            attr.$set('value', value, false);
          });
        };
      }
    }
  };
};

/**
 * @ngdoc directive
 * @name ng.directive:ngBind
 *
 * @description
 * The `ngBind` attribute tells Angular to replace the text content of the specified HTML element
 * with the value of a given expression, and to update the text content when the value of that
 * expression changes.
 *
 * Typically, you don't use `ngBind` directly, but instead you use the double curly markup like
 * `{{ expression }}` which is similar but less verbose.
 *
 * One scenario in which the use of `ngBind` is preferred over `{{ expression }}` binding is when
 * it's desirable to put bindings into template that is momentarily displayed by the browser in its
 * raw state before Angular compiles it. Since `ngBind` is an element attribute, it makes the
 * bindings invisible to the user while the page is loading.
 *
 * An alternative solution to this problem would be using the
 * {@link ng.directive:ngCloak ngCloak} directive.
 *
 *
 * @element ANY
 * @param {expression} ngBind {@link guide/expression Expression} to evaluate.
 *
 * @example
 * Enter a name in the Live Preview text box; the greeting below the text box changes instantly.
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.name = 'Whirled';
         }
       </script>
       <div ng-controller="Ctrl">
         Enter name: <input type="text" ng-model="name"><br>
         Hello <span ng-bind="name"></span>!
       </div>
     </doc:source>
     <doc:scenario>
       it('should check ng-bind', function() {
         expect(using('.doc-example-live').binding('name')).toBe('Whirled');
         using('.doc-example-live').input('name').enter('world');
         expect(using('.doc-example-live').binding('name')).toBe('world');
       });
     </doc:scenario>
   </doc:example>
 */
var ngBindDirective = ngDirective(function(scope, element, attr) {
  element.addClass('ng-binding').data('$binding', attr.ngBind);
  scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
    element.text(value == undefined ? '' : value);
  });
});


/**
 * @ngdoc directive
 * @name ng.directive:ngBindTemplate
 *
 * @description
 * The `ngBindTemplate` directive specifies that the element
 * text should be replaced with the template in ngBindTemplate.
 * Unlike ngBind the ngBindTemplate can contain multiple `{{` `}}`
 * expressions. (This is required since some HTML elements
 * can not have SPAN elements such as TITLE, or OPTION to name a few.)
 *
 * @element ANY
 * @param {string} ngBindTemplate template of form
 *   <tt>{{</tt> <tt>expression</tt> <tt>}}</tt> to eval.
 *
 * @example
 * Try it here: enter text in text box and watch the greeting change.
   <doc:example>
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.salutation = 'Hello';
           $scope.name = 'World';
         }
       </script>
       <div ng-controller="Ctrl">
        Salutation: <input type="text" ng-model="salutation"><br>
        Name: <input type="text" ng-model="name"><br>
        <pre ng-bind-template="{{salutation}} {{name}}!"></pre>
       </div>
     </doc:source>
     <doc:scenario>
       it('should check ng-bind', function() {
         expect(using('.doc-example-live').binding('salutation')).
           toBe('Hello');
         expect(using('.doc-example-live').binding('name')).
           toBe('World');
         using('.doc-example-live').input('salutation').enter('Greetings');
         using('.doc-example-live').input('name').enter('user');
         expect(using('.doc-example-live').binding('salutation')).
           toBe('Greetings');
         expect(using('.doc-example-live').binding('name')).
           toBe('user');
       });
     </doc:scenario>
   </doc:example>
 */
var ngBindTemplateDirective = ['$interpolate', function($interpolate) {
  return function(scope, element, attr) {
    // TODO: move this to scenario runner
    var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
    element.addClass('ng-binding').data('$binding', interpolateFn);
    attr.$observe('ngBindTemplate', function(value) {
      element.text(value);
    });
  }
}];


/**
 * @ngdoc directive
 * @name ng.directive:ngBindHtmlUnsafe
 *
 * @description
 * Creates a binding that will innerHTML the result of evaluating the `expression` into the current
 * element. *The innerHTML-ed content will not be sanitized!* You should use this directive only if
 * {@link ngSanitize.directive:ngBindHtml ngBindHtml} directive is too
 * restrictive and when you absolutely trust the source of the content you are binding to.
 *
 * See {@link ngSanitize.$sanitize $sanitize} docs for examples.
 *
 * @element ANY
 * @param {expression} ngBindHtmlUnsafe {@link guide/expression Expression} to evaluate.
 */
var ngBindHtmlUnsafeDirective = [function() {
  return function(scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
    scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
}];

function classDirective(name, selector) {
  name = 'ngClass' + name;
  return ngDirective(function(scope, element, attr) {
    var oldVal = undefined;

    scope.$watch(attr[name], ngClassWatchAction, true);

    attr.$observe('class', function(value) {
      var ngClass = scope.$eval(attr[name]);
      ngClassWatchAction(ngClass, ngClass);
    });


    if (name !== 'ngClass') {
      scope.$watch('$index', function($index, old$index) {
        var mod = $index & 1;
        if (mod !== old$index & 1) {
          if (mod === selector) {
            addClass(scope.$eval(attr[name]));
          } else {
            removeClass(scope.$eval(attr[name]));
          }
        }
      });
    }


    function ngClassWatchAction(newVal) {
      if (selector === true || scope.$index % 2 === selector) {
        if (oldVal && !equals(newVal,oldVal)) {
          removeClass(oldVal);
        }
        addClass(newVal);
      }
      oldVal = copy(newVal);
    }


    function removeClass(classVal) {
      if (isObject(classVal) && !isArray(classVal)) {
        classVal = map(classVal, function(v, k) { if (v) return k });
      }
      element.removeClass(isArray(classVal) ? classVal.join(' ') : classVal);
    }


    function addClass(classVal) {
      if (isObject(classVal) && !isArray(classVal)) {
        classVal = map(classVal, function(v, k) { if (v) return k });
      }
      if (classVal) {
        element.addClass(isArray(classVal) ? classVal.join(' ') : classVal);
      }
    }
  });
}

/**
 * @ngdoc directive
 * @name ng.directive:ngClass
 *
 * @description
 * The `ngClass` allows you to set CSS class on HTML element dynamically by databinding an
 * expression that represents all classes to be added.
 *
 * The directive won't add duplicate classes if a particular class was already set.
 *
 * When the expression changes, the previously added classes are removed and only then the
 * new classes are added.
 *
 * @element ANY
 * @param {expression} ngClass {@link guide/expression Expression} to eval. The result
 *   of the evaluation can be a string representing space delimited class
 *   names, an array, or a map of class names to boolean values.
 *
 * @example
   <example>
     <file name="index.html">
      <input type="button" value="set" ng-click="myVar='my-class'">
      <input type="button" value="clear" ng-click="myVar=''">
      <br>
      <span ng-class="myVar">Sample Text</span>
     </file>
     <file name="style.css">
       .my-class {
         color: red;
       }
     </file>
     <file name="scenario.js">
       it('should check ng-class', function() {
         expect(element('.doc-example-live span').prop('className')).not().
           toMatch(/my-class/);

         using('.doc-example-live').element(':button:first').click();

         expect(element('.doc-example-live span').prop('className')).
           toMatch(/my-class/);

         using('.doc-example-live').element(':button:last').click();

         expect(element('.doc-example-live span').prop('className')).not().
           toMatch(/my-class/);
       });
     </file>
   </example>
 */
var ngClassDirective = classDirective('', true);

/**
 * @ngdoc directive
 * @name ng.directive:ngClassOdd
 *
 * @description
 * The `ngClassOdd` and `ngClassEven` directives work exactly as
 * {@link ng.directive:ngClass ngClass}, except it works in
 * conjunction with `ngRepeat` and takes affect only on odd (even) rows.
 *
 * This directive can be applied only within a scope of an
 * {@link ng.directive:ngRepeat ngRepeat}.
 *
 * @element ANY
 * @param {expression} ngClassOdd {@link guide/expression Expression} to eval. The result
 *   of the evaluation can be a string representing space delimited class names or an array.
 *
 * @example
   <example>
     <file name="index.html">
        <ol ng-init="names=['John', 'Mary', 'Cate', 'Suz']">
          <li ng-repeat="name in names">
           <span ng-class-odd="'odd'" ng-class-even="'even'">
             {{name}}
           </span>
          </li>
        </ol>
     </file>
     <file name="style.css">
       .odd {
         color: red;
       }
       .even {
         color: blue;
       }
     </file>
     <file name="scenario.js">
       it('should check ng-class-odd and ng-class-even', function() {
         expect(element('.doc-example-live li:first span').prop('className')).
           toMatch(/odd/);
         expect(element('.doc-example-live li:last span').prop('className')).
           toMatch(/even/);
       });
     </file>
   </example>
 */
var ngClassOddDirective = classDirective('Odd', 0);

/**
 * @ngdoc directive
 * @name ng.directive:ngClassEven
 *
 * @description
 * The `ngClassOdd` and `ngClassEven` directives work exactly as
 * {@link ng.directive:ngClass ngClass}, except it works in
 * conjunction with `ngRepeat` and takes affect only on odd (even) rows.
 *
 * This directive can be applied only within a scope of an
 * {@link ng.directive:ngRepeat ngRepeat}.
 *
 * @element ANY
 * @param {expression} ngClassEven {@link guide/expression Expression} to eval. The
 *   result of the evaluation can be a string representing space delimited class names or an array.
 *
 * @example
   <example>
     <file name="index.html">
        <ol ng-init="names=['John', 'Mary', 'Cate', 'Suz']">
          <li ng-repeat="name in names">
           <span ng-class-odd="'odd'" ng-class-even="'even'">
             {{name}} &nbsp; &nbsp; &nbsp;
           </span>
          </li>
        </ol>
     </file>
     <file name="style.css">
       .odd {
         color: red;
       }
       .even {
         color: blue;
       }
     </file>
     <file name="scenario.js">
       it('should check ng-class-odd and ng-class-even', function() {
         expect(element('.doc-example-live li:first span').prop('className')).
           toMatch(/odd/);
         expect(element('.doc-example-live li:last span').prop('className')).
           toMatch(/even/);
       });
     </file>
   </example>
 */
var ngClassEvenDirective = classDirective('Even', 1);

/**
 * @ngdoc directive
 * @name ng.directive:ngCloak
 *
 * @description
 * The `ngCloak` directive is used to prevent the Angular html template from being briefly
 * displayed by the browser in its raw (uncompiled) form while your application is loading. Use this
 * directive to avoid the undesirable flicker effect caused by the html template display.
 *
 * The directive can be applied to the `<body>` element, but typically a fine-grained application is
 * preferred in order to benefit from progressive rendering of the browser view.
 *
 * `ngCloak` works in cooperation with a css rule that is embedded within `angular.js` and
 *  `angular.min.js` files. Following is the css rule:
 *
 * <pre>
 * [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
 *   display: none;
 * }
 * </pre>
 *
 * When this css rule is loaded by the browser, all html elements (including their children) that
 * are tagged with the `ng-cloak` directive are hidden. When Angular comes across this directive
 * during the compilation of the template it deletes the `ngCloak` element attribute, which
 * makes the compiled element visible.
 *
 * For the best result, `angular.js` script must be loaded in the head section of the html file;
 * alternatively, the css rule (above) must be included in the external stylesheet of the
 * application.
 *
 * Legacy browsers, like IE7, do not provide attribute selector support (added in CSS 2.1) so they
 * cannot match the `[ng\:cloak]` selector. To work around this limitation, you must add the css
 * class `ngCloak` in addition to `ngCloak` directive as shown in the example below.
 *
 * @element ANY
 *
 * @example
   <doc:example>
     <doc:source>
        <div id="template1" ng-cloak>{{ 'hello' }}</div>
        <div id="template2" ng-cloak class="ng-cloak">{{ 'hello IE7' }}</div>
     </doc:source>
     <doc:scenario>
       it('should remove the template directive and css class', function() {
         expect(element('.doc-example-live #template1').attr('ng-cloak')).
           not().toBeDefined();
         expect(element('.doc-example-live #template2').attr('ng-cloak')).
           not().toBeDefined();
       });
     </doc:scenario>
   </doc:example>
 *
 */
var ngCloakDirective = ngDirective({
  compile: function(element, attr) {
    attr.$set('ngCloak', undefined);
    element.removeClass('ng-cloak');
  }
});

/**
 * @ngdoc directive
 * @name ng.directive:ngController
 *
 * @description
 * The `ngController` directive assigns behavior to a scope. This is a key aspect of how angular
 * supports the principles behind the Model-View-Controller design pattern.
 *
 * MVC components in angular:
 *
 * * Model — The Model is data in scope properties; scopes are attached to the DOM.
 * * View — The template (HTML with data bindings) is rendered into the View.
 * * Controller — The `ngController` directive specifies a Controller class; the class has
 *   methods that typically express the business logic behind the application.
 *
 * Note that an alternative way to define controllers is via the {@link ng.$route $route} service.
 *
 * @element ANY
 * @scope
 * @param {expression} ngController Name of a globally accessible constructor function or an
 *     {@link guide/expression expression} that on the current scope evaluates to a
 *     constructor function. The controller instance can further be published into the scope
 *     by adding `as localName` the controller name attribute.
 *
 * @example
 * Here is a simple form for editing user contact information. Adding, removing, clearing, and
 * greeting are methods declared on the controller (see source tab). These methods can
 * easily be called from the angular markup. Notice that the scope becomes the `this` for the
 * controller's instance. This allows for easy access to the view data from the controller. Also
 * notice that any changes to the data are automatically reflected in the View without the need
 * for a manual update. The example is included in two different declaration styles based on
 * your style preferences.
   <doc:example>
     <doc:source>
      <script>
        function SettingsController() {
          this.name = "John Smith";
          this.contacts = [
            {type: 'phone', value: '408 555 1212'},
            {type: 'email', value: 'john.smith@example.org'} ];
          };

        SettingsController.prototype.greet = function() {
          alert(this.name);
        };

        SettingsController.prototype.addContact = function() {
          this.contacts.push({type: 'email', value: 'yourname@example.org'});
        };

        SettingsController.prototype.removeContact = function(contactToRemove) {
         var index = this.contacts.indexOf(contactToRemove);
          this.contacts.splice(index, 1);
        };

        SettingsController.prototype.clearContact = function(contact) {
          contact.type = 'phone';
          contact.value = '';
        };
      </script>
      <div ng-controller="SettingsController as settings">
        Name: <input type="text" ng-model="settings.name"/>
        [ <a href="" ng-click="settings.greet()">greet</a> ]<br/>
        Contact:
        <ul>
          <li ng-repeat="contact in settings.contacts">
            <select ng-model="contact.type">
               <option>phone</option>
               <option>email</option>
            </select>
            <input type="text" ng-model="contact.value"/>
            [ <a href="" ng-click="settings.clearContact(contact)">clear</a>
            | <a href="" ng-click="settings.removeContact(contact)">X</a> ]
          </li>
          <li>[ <a href="" ng-click="settings.addContact()">add</a> ]</li>
       </ul>
      </div>
     </doc:source>
     <doc:scenario>
       it('should check controller', function() {
         expect(element('.doc-example-live div>:input').val()).toBe('John Smith');
         expect(element('.doc-example-live li:nth-child(1) input').val())
           .toBe('408 555 1212');
         expect(element('.doc-example-live li:nth-child(2) input').val())
           .toBe('john.smith@example.org');

         element('.doc-example-live li:first a:contains("clear")').click();
         expect(element('.doc-example-live li:first input').val()).toBe('');

         element('.doc-example-live li:last a:contains("add")').click();
         expect(element('.doc-example-live li:nth-child(3) input').val())
           .toBe('yourname@example.org');
       });
     </doc:scenario>
   </doc:example>



    <doc:example>
     <doc:source>
      <script>
        function SettingsController($scope) {
          $scope.name = "John Smith";
          $scope.contacts = [
            {type:'phone', value:'408 555 1212'},
            {type:'email', value:'john.smith@example.org'} ];

          $scope.greet = function() {
           alert(this.name);
          };

          $scope.addContact = function() {
           this.contacts.push({type:'email', value:'yourname@example.org'});
          };

          $scope.removeContact = function(contactToRemove) {
           var index = this.contacts.indexOf(contactToRemove);
           this.contacts.splice(index, 1);
          };

          $scope.clearContact = function(contact) {
           contact.type = 'phone';
           contact.value = '';
          };
        }
      </script>
      <div ng-controller="SettingsController">
        Name: <input type="text" ng-model="name"/>
        [ <a href="" ng-click="greet()">greet</a> ]<br/>
        Contact:
        <ul>
          <li ng-repeat="contact in contacts">
            <select ng-model="contact.type">
               <option>phone</option>
               <option>email</option>
            </select>
            <input type="text" ng-model="contact.value"/>
            [ <a href="" ng-click="clearContact(contact)">clear</a>
            | <a href="" ng-click="removeContact(contact)">X</a> ]
          </li>
          <li>[ <a href="" ng-click="addContact()">add</a> ]</li>
       </ul>
      </div>
     </doc:source>
     <doc:scenario>
       it('should check controller', function() {
         expect(element('.doc-example-live div>:input').val()).toBe('John Smith');
         expect(element('.doc-example-live li:nth-child(1) input').val())
           .toBe('408 555 1212');
         expect(element('.doc-example-live li:nth-child(2) input').val())
           .toBe('john.smith@example.org');

         element('.doc-example-live li:first a:contains("clear")').click();
         expect(element('.doc-example-live li:first input').val()).toBe('');

         element('.doc-example-live li:last a:contains("add")').click();
         expect(element('.doc-example-live li:nth-child(3) input').val())
           .toBe('yourname@example.org');
       });
     </doc:scenario>
   </doc:example>

 */
var ngControllerDirective = [function() {
  return {
    scope: true,
    controller: '@'
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngCsp
 * @priority 1000
 *
 * @element html
 * @description
 * Enables [CSP (Content Security Policy)](https://developer.mozilla.org/en/Security/CSP) support.
 * 
 * This is necessary when developing things like Google Chrome Extensions.
 * 
 * CSP forbids apps to use `eval` or `Function(string)` generated functions (among other things).
 * For us to be compatible, we just need to implement the "getterFn" in $parse without violating
 * any of these restrictions.
 * 
 * AngularJS uses `Function(string)` generated functions as a speed optimization. By applying `ngCsp`
 * it is be possible to opt into the CSP compatible mode. When this mode is on AngularJS will
 * evaluate all expressions up to 30% slower than in non-CSP mode, but no security violations will
 * be raised.
 * 
 * In order to use this feature put `ngCsp` directive on the root element of the application.
 * 
 * @example
 * This example shows how to apply the `ngCsp` directive to the `html` tag.
   <pre>
     <!doctype html>
     <html ng-app ng-csp>
     ...
     ...
     </html>
   </pre>
 */

var ngCspDirective = ['$sniffer', function($sniffer) {
  return {
    priority: 1000,
    compile: function() {
      $sniffer.csp = true;
    }
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngClick
 *
 * @description
 * The ngClick allows you to specify custom behavior when
 * element is clicked.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate upon
 * click. (Event object is available as `$event`)
 *
 * @example
   <doc:example>
     <doc:source>
      <button ng-click="count = count + 1" ng-init="count=0">
        Increment
      </button>
      count: {{count}}
     </doc:source>
     <doc:scenario>
       it('should check ng-click', function() {
         expect(binding('count')).toBe('0');
         element('.doc-example-live :button').click();
         expect(binding('count')).toBe('1');
       });
     </doc:scenario>
   </doc:example>
 */
/*
 * A directive that allows creation of custom onclick handlers that are defined as angular
 * expressions and are compiled and executed within the current scope.
 *
 * Events that are handled via these handler are always configured not to propagate further.
 */
var ngEventDirectives = {};
forEach(
  'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress'.split(' '),
  function(name) {
    var directiveName = directiveNormalize('ng-' + name);
    ngEventDirectives[directiveName] = ['$parse', function($parse) {
      return function(scope, element, attr) {
        var fn = $parse(attr[directiveName]);
        element.bind(lowercase(name), function(event) {
          scope.$apply(function() {
            fn(scope, {$event:event});
          });
        });
      };
    }];
  }
);

/**
 * @ngdoc directive
 * @name ng.directive:ngDblclick
 *
 * @description
 * The `ngDblclick` directive allows you to specify custom behavior on dblclick event.
 *
 * @element ANY
 * @param {expression} ngDblclick {@link guide/expression Expression} to evaluate upon
 * dblclick. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngMousedown
 *
 * @description
 * The ngMousedown directive allows you to specify custom behavior on mousedown event.
 *
 * @element ANY
 * @param {expression} ngMousedown {@link guide/expression Expression} to evaluate upon
 * mousedown. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngMouseup
 *
 * @description
 * Specify custom behavior on mouseup event.
 *
 * @element ANY
 * @param {expression} ngMouseup {@link guide/expression Expression} to evaluate upon
 * mouseup. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */

/**
 * @ngdoc directive
 * @name ng.directive:ngMouseover
 *
 * @description
 * Specify custom behavior on mouseover event.
 *
 * @element ANY
 * @param {expression} ngMouseover {@link guide/expression Expression} to evaluate upon
 * mouseover. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngMouseenter
 *
 * @description
 * Specify custom behavior on mouseenter event.
 *
 * @element ANY
 * @param {expression} ngMouseenter {@link guide/expression Expression} to evaluate upon
 * mouseenter. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngMouseleave
 *
 * @description
 * Specify custom behavior on mouseleave event.
 *
 * @element ANY
 * @param {expression} ngMouseleave {@link guide/expression Expression} to evaluate upon
 * mouseleave. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngMousemove
 *
 * @description
 * Specify custom behavior on mousemove event.
 *
 * @element ANY
 * @param {expression} ngMousemove {@link guide/expression Expression} to evaluate upon
 * mousemove. (Event object is available as `$event`)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngKeydown
 *
 * @description
 * Specify custom behavior on keydown event.
 *
 * @element ANY
 * @param {expression} ngKeydown {@link guide/expression Expression} to evaluate upon
 * keydown. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngKeyup
 *
 * @description
 * Specify custom behavior on keyup event.
 *
 * @element ANY
 * @param {expression} ngKeyup {@link guide/expression Expression} to evaluate upon
 * keyup. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngKeypress
 *
 * @description
 * Specify custom behavior on keypress event.
 *
 * @element ANY
 * @param {expression} ngKeypress {@link guide/expression Expression} to evaluate upon
 * keypress. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */


/**
 * @ngdoc directive
 * @name ng.directive:ngSubmit
 *
 * @description
 * Enables binding angular expressions to onsubmit events.
 *
 * Additionally it prevents the default action (which for form means sending the request to the
 * server and reloading the current page).
 *
 * @element form
 * @param {expression} ngSubmit {@link guide/expression Expression} to eval.
 *
 * @example
   <doc:example>
     <doc:source>
      <script>
        function Ctrl($scope) {
          $scope.list = [];
          $scope.text = 'hello';
          $scope.submit = function() {
            if (this.text) {
              this.list.push(this.text);
              this.text = '';
            }
          };
        }
      </script>
      <form ng-submit="submit()" ng-controller="Ctrl">
        Enter text and hit enter:
        <input type="text" ng-model="text" name="text" />
        <input type="submit" id="submit" value="Submit" />
        <pre>list={{list}}</pre>
      </form>
     </doc:source>
     <doc:scenario>
       it('should check ng-submit', function() {
         expect(binding('list')).toBe('[]');
         element('.doc-example-live #submit').click();
         expect(binding('list')).toBe('["hello"]');
         expect(input('text').val()).toBe('');
       });
       it('should ignore empty strings', function() {
         expect(binding('list')).toBe('[]');
         element('.doc-example-live #submit').click();
         element('.doc-example-live #submit').click();
         expect(binding('list')).toBe('["hello"]');
       });
     </doc:scenario>
   </doc:example>
 */
var ngSubmitDirective = ngDirective(function(scope, element, attrs) {
  element.bind('submit', function() {
    scope.$apply(attrs.ngSubmit);
  });
});

/**
 * @ngdoc directive
 * @name ng.directive:ngIf
 * @restrict A
 *
 * @description
 * The `ngIf` directive removes and recreates a portion of the DOM tree (HTML)
 * conditionally based on **"falsy"** and **"truthy"** values, respectively, evaluated within
 * an {expression}. In other words, if the expression assigned to **ngIf evaluates to a false
 * value** then **the element is removed from the DOM** and **if true** then **a clone of the
 * element is reinserted into the DOM**.
 *
 * `ngIf` differs from `ngShow` and `ngHide` in that `ngIf` completely removes and recreates the
 * element in the DOM rather than changing its visibility via the `display` css property.  A common
 * case when this difference is significant is when using css selectors that rely on an element's
 * position within the DOM (HTML), such as the `:first-child` or `:last-child` pseudo-classes.
 *
 * Note that **when an element is removed using ngIf its scope is destroyed** and **a new scope
 * is created when the element is restored**.  The scope created within `ngIf` inherits from 
 * its parent scope using
 * {@link https://github.com/angular/angular.js/wiki/The-Nuances-of-Scope-Prototypal-Inheritance prototypal inheritance}.
 * An important implication of this is if `ngModel` is used within `ngIf` to bind to
 * a javascript primitive defined in the parent scope. In this case any modifications made to the
 * variable within the child scope will override (hide) the value in the parent scope.
 *
 * Also, `ngIf` recreates elements using their compiled state. An example scenario of this behavior
 * is if an element's class attribute is directly modified after it's compiled, using something like 
 * jQuery's `.addClass()` method, and the element is later removed. When `ngIf` recreates the element
 * the added class will be lost because the original compiled state is used to regenerate the element.
 *
 * Additionally, you can provide animations via the ngAnimate attribute to animate the **enter**
 * and **leave** effects.
 *
 * @animations
 * enter - happens just after the ngIf contents change and a new DOM element is created and injected into the ngIf container
 * leave - happens just before the ngIf contents are removed from the DOM
 *
 * @element ANY
 * @scope
 * @param {expression} ngIf If the {@link guide/expression expression} is falsy then
 *     the element is removed from the DOM tree (HTML).
 *
 * @example
  <example animations="true">
    <file name="index.html">
      Click me: <input type="checkbox" ng-model="checked" ng-init="checked=true" /><br/>
      Show when checked:
      <span ng-if="checked" ng-animate="'example'">
        I'm removed when the checkbox is unchecked.
      </span>
    </file>
    <file name="animations.css">
      .example-leave, .example-enter {
        -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -moz-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -ms-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -o-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
      }

      .example-enter {
        opacity:0;
      }
      .example-enter.example-enter-active {
        opacity:1;
      }

      .example-leave {
        opacity:1;
      }
      .example-leave.example-leave-active {
        opacity:0;
      }
    </file>
  </example>
 */
var ngIfDirective = ['$animator', function($animator) {
  return {
    transclude: 'element',
    priority: 1000,
    terminal: true,
    restrict: 'A',
    compile: function (element, attr, transclude) {
      return function ($scope, $element, $attr) {
        var animate = $animator($scope, $attr);
        var childElement, childScope;
        $scope.$watch($attr.ngIf, function ngIfWatchAction(value) {
          if (childElement) {
            animate.leave(childElement);
            childElement = undefined;
          }
          if (childScope) {
            childScope.$destroy();
            childScope = undefined;
          }
          if (toBoolean(value)) {
            childScope = $scope.$new();
            transclude(childScope, function (clone) {
              childElement = clone;
              animate.enter(clone, $element.parent(), $element);
            });
          }
        });
      }
    }
  }
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngInclude
 * @restrict ECA
 *
 * @description
 * Fetches, compiles and includes an external HTML fragment.
 *
 * Keep in mind that Same Origin Policy applies to included resources
 * (e.g. ngInclude won't work for cross-domain requests on all browsers and for
 *  file:// access on some browsers).
 *
 * Additionally, you can also provide animations via the ngAnimate attribute to animate the **enter**
 * and **leave** effects.
 *
 * @animations
 * enter - happens just after the ngInclude contents change and a new DOM element is created and injected into the ngInclude container
 * leave - happens just after the ngInclude contents change and just before the former contents are removed from the DOM
 *
 * @scope
 *
 * @param {string} ngInclude|src angular expression evaluating to URL. If the source is a string constant,
 *                 make sure you wrap it in quotes, e.g. `src="'myPartialTemplate.html'"`.
 * @param {string=} onload Expression to evaluate when a new partial is loaded.
 *
 * @param {string=} autoscroll Whether `ngInclude` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the content is loaded.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the expression evaluates to truthy value.
 *
 * @example
  <example animations="true">
    <file name="index.html">
     <div ng-controller="Ctrl">
       <select ng-model="template" ng-options="t.name for t in templates">
        <option value="">(blank)</option>
       </select>
       url of the template: <tt>{{template.url}}</tt>
       <hr/>
       <div class="example-animate-container"
            ng-include="template.url"
            ng-animate="{enter: 'example-enter', leave: 'example-leave'}"></div>
     </div>
    </file>
    <file name="script.js">
      function Ctrl($scope) {
        $scope.templates =
          [ { name: 'template1.html', url: 'template1.html'}
          , { name: 'template2.html', url: 'template2.html'} ];
        $scope.template = $scope.templates[0];
      }
     </file>
    <file name="template1.html">
      <div>Content of template1.html</div>
    </file>
    <file name="template2.html">
      <div>Content of template2.html</div>
    </file>
    <file name="animations.css">
      .example-leave,
      .example-enter {
        -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -moz-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -ms-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -o-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;

        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
      }

      .example-animate-container > * {
        display:block;
        padding:10px;
      }

      .example-enter {
        top:-50px;
      }
      .example-enter.example-enter-active {
        top:0;
      }

      .example-leave {
        top:0;
      }
      .example-leave.example-leave-active {
        top:50px;
      }
    </file>
    <file name="scenario.js">
      it('should load template1.html', function() {
       expect(element('.doc-example-live [ng-include]').text()).
         toMatch(/Content of template1.html/);
      });
      it('should load template2.html', function() {
       select('template').option('1');
       expect(element('.doc-example-live [ng-include]').text()).
         toMatch(/Content of template2.html/);
      });
      it('should change to blank', function() {
       select('template').option('');
       expect(element('.doc-example-live [ng-include]').text()).toEqual('');
      });
    </file>
  </example>
 */


/**
 * @ngdoc event
 * @name ng.directive:ngInclude#$includeContentRequested
 * @eventOf ng.directive:ngInclude
 * @eventType emit on the scope ngInclude was declared in
 * @description
 * Emitted every time the ngInclude content is requested.
 */


/**
 * @ngdoc event
 * @name ng.directive:ngInclude#$includeContentLoaded
 * @eventOf ng.directive:ngInclude
 * @eventType emit on the current ngInclude scope
 * @description
 * Emitted every time the ngInclude content is reloaded.
 */
var ngIncludeDirective = ['$http', '$templateCache', '$anchorScroll', '$compile', '$animator',
                  function($http,   $templateCache,   $anchorScroll,   $compile,   $animator) {
  return {
    restrict: 'ECA',
    terminal: true,
    compile: function(element, attr) {
      var srcExp = attr.ngInclude || attr.src,
          onloadExp = attr.onload || '',
          autoScrollExp = attr.autoscroll;

      return function(scope, element, attr) {
        var animate = $animator(scope, attr);
        var changeCounter = 0,
            childScope;

        var clearContent = function() {
          if (childScope) {
            childScope.$destroy();
            childScope = null;
          }
          animate.leave(element.contents(), element);
        };

        scope.$watch(srcExp, function ngIncludeWatchAction(src) {
          var thisChangeId = ++changeCounter;

          if (src) {
            $http.get(src, {cache: $templateCache}).success(function(response) {
              if (thisChangeId !== changeCounter) return;

              if (childScope) childScope.$destroy();
              childScope = scope.$new();
              animate.leave(element.contents(), element);

              var contents = jqLite('<div/>').html(response).contents();

              animate.enter(contents, element);
              $compile(contents)(childScope);

              if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                $anchorScroll();
              }

              childScope.$emit('$includeContentLoaded');
              scope.$eval(onloadExp);
            }).error(function() {
              if (thisChangeId === changeCounter) clearContent();
            });
            scope.$emit('$includeContentRequested');
          } else {
            clearContent();
          }
        });
      };
    }
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngInit
 *
 * @description
 * The `ngInit` directive specifies initialization tasks to be executed
 *  before the template enters execution mode during bootstrap.
 *
 * @element ANY
 * @param {expression} ngInit {@link guide/expression Expression} to eval.
 *
 * @example
   <doc:example>
     <doc:source>
    <div ng-init="greeting='Hello'; person='World'">
      {{greeting}} {{person}}!
    </div>
     </doc:source>
     <doc:scenario>
       it('should check greeting', function() {
         expect(binding('greeting')).toBe('Hello');
         expect(binding('person')).toBe('World');
       });
     </doc:scenario>
   </doc:example>
 */
var ngInitDirective = ngDirective({
  compile: function() {
    return {
      pre: function(scope, element, attrs) {
        scope.$eval(attrs.ngInit);
      }
    }
  }
});

/**
 * @ngdoc directive
 * @name ng.directive:ngNonBindable
 * @priority 1000
 *
 * @description
 * Sometimes it is necessary to write code which looks like bindings but which should be left alone
 * by angular. Use `ngNonBindable` to make angular ignore a chunk of HTML.
 *
 * @element ANY
 *
 * @example
 * In this example there are two location where a simple binding (`{{}}`) is present, but the one
 * wrapped in `ngNonBindable` is left alone.
 *
 * @example
    <doc:example>
      <doc:source>
        <div>Normal: {{1 + 2}}</div>
        <div ng-non-bindable>Ignored: {{1 + 2}}</div>
      </doc:source>
      <doc:scenario>
       it('should check ng-non-bindable', function() {
         expect(using('.doc-example-live').binding('1 + 2')).toBe('3');
         expect(using('.doc-example-live').element('div:last').text()).
           toMatch(/1 \+ 2/);
       });
      </doc:scenario>
    </doc:example>
 */
var ngNonBindableDirective = ngDirective({ terminal: true, priority: 1000 });

/**
 * @ngdoc directive
 * @name ng.directive:ngPluralize
 * @restrict EA
 *
 * @description
 * # Overview
 * `ngPluralize` is a directive that displays messages according to en-US localization rules.
 * These rules are bundled with angular.js and the rules can be overridden
 * (see {@link guide/i18n Angular i18n} dev guide). You configure ngPluralize directive
 * by specifying the mappings between
 * {@link http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
 * plural categories} and the strings to be displayed.
 *
 * # Plural categories and explicit number rules
 * There are two
 * {@link http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
 * plural categories} in Angular's default en-US locale: "one" and "other".
 *
 * While a plural category may match many numbers (for example, in en-US locale, "other" can match
 * any number that is not 1), an explicit number rule can only match one number. For example, the
 * explicit number rule for "3" matches the number 3. You will see the use of plural categories
 * and explicit number rules throughout later parts of this documentation.
 *
 * # Configuring ngPluralize
 * You configure ngPluralize by providing 2 attributes: `count` and `when`.
 * You can also provide an optional attribute, `offset`.
 *
 * The value of the `count` attribute can be either a string or an {@link guide/expression
 * Angular expression}; these are evaluated on the current scope for its bound value.
 *
 * The `when` attribute specifies the mappings between plural categories and the actual
 * string to be displayed. The value of the attribute should be a JSON object so that Angular
 * can interpret it correctly.
 *
 * The following example shows how to configure ngPluralize:
 *
 * <pre>
 * <ng-pluralize count="personCount"
                 when="{'0': 'Nobody is viewing.',
 *                      'one': '1 person is viewing.',
 *                      'other': '{} people are viewing.'}">
 * </ng-pluralize>
 *</pre>
 *
 * In the example, `"0: Nobody is viewing."` is an explicit number rule. If you did not
 * specify this rule, 0 would be matched to the "other" category and "0 people are viewing"
 * would be shown instead of "Nobody is viewing". You can specify an explicit number rule for
 * other numbers, for example 12, so that instead of showing "12 people are viewing", you can
 * show "a dozen people are viewing".
 *
 * You can use a set of closed braces(`{}`) as a placeholder for the number that you want substituted
 * into pluralized strings. In the previous example, Angular will replace `{}` with
 * <span ng-non-bindable>`{{personCount}}`</span>. The closed braces `{}` is a placeholder
 * for <span ng-non-bindable>{{numberExpression}}</span>.
 *
 * # Configuring ngPluralize with offset
 * The `offset` attribute allows further customization of pluralized text, which can result in
 * a better user experience. For example, instead of the message "4 people are viewing this document",
 * you might display "John, Kate and 2 others are viewing this document".
 * The offset attribute allows you to offset a number by any desired value.
 * Let's take a look at an example:
 *
 * <pre>
 * <ng-pluralize count="personCount" offset=2
 *               when="{'0': 'Nobody is viewing.',
 *                      '1': '{{person1}} is viewing.',
 *                      '2': '{{person1}} and {{person2}} are viewing.',
 *                      'one': '{{person1}}, {{person2}} and one other person are viewing.',
 *                      'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
 * </ng-pluralize>
 * </pre>
 *
 * Notice that we are still using two plural categories(one, other), but we added
 * three explicit number rules 0, 1 and 2.
 * When one person, perhaps John, views the document, "John is viewing" will be shown.
 * When three people view the document, no explicit number rule is found, so
 * an offset of 2 is taken off 3, and Angular uses 1 to decide the plural category.
 * In this case, plural category 'one' is matched and "John, Marry and one other person are viewing"
 * is shown.
 *
 * Note that when you specify offsets, you must provide explicit number rules for
 * numbers from 0 up to and including the offset. If you use an offset of 3, for example,
 * you must provide explicit number rules for 0, 1, 2 and 3. You must also provide plural strings for
 * plural categories "one" and "other".
 *
 * @param {string|expression} count The variable to be bounded to.
 * @param {string} when The mapping between plural category to its corresponding strings.
 * @param {number=} offset Offset to deduct from the total number.
 *
 * @example
    <doc:example>
      <doc:source>
        <script>
          function Ctrl($scope) {
            $scope.person1 = 'Igor';
            $scope.person2 = 'Misko';
            $scope.personCount = 1;
          }
        </script>
        <div ng-controller="Ctrl">
          Person 1:<input type="text" ng-model="person1" value="Igor" /><br/>
          Person 2:<input type="text" ng-model="person2" value="Misko" /><br/>
          Number of People:<input type="text" ng-model="personCount" value="1" /><br/>

          <!--- Example with simple pluralization rules for en locale --->
          Without Offset:
          <ng-pluralize count="personCount"
                        when="{'0': 'Nobody is viewing.',
                               'one': '1 person is viewing.',
                               'other': '{} people are viewing.'}">
          </ng-pluralize><br>

          <!--- Example with offset --->
          With Offset(2):
          <ng-pluralize count="personCount" offset=2
                        when="{'0': 'Nobody is viewing.',
                               '1': '{{person1}} is viewing.',
                               '2': '{{person1}} and {{person2}} are viewing.',
                               'one': '{{person1}}, {{person2}} and one other person are viewing.',
                               'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
          </ng-pluralize>
        </div>
      </doc:source>
      <doc:scenario>
        it('should show correct pluralized string', function() {
          expect(element('.doc-example-live ng-pluralize:first').text()).
                                             toBe('1 person is viewing.');
          expect(element('.doc-example-live ng-pluralize:last').text()).
                                                toBe('Igor is viewing.');

          using('.doc-example-live').input('personCount').enter('0');
          expect(element('.doc-example-live ng-pluralize:first').text()).
                                               toBe('Nobody is viewing.');
          expect(element('.doc-example-live ng-pluralize:last').text()).
                                              toBe('Nobody is viewing.');

          using('.doc-example-live').input('personCount').enter('2');
          expect(element('.doc-example-live ng-pluralize:first').text()).
                                            toBe('2 people are viewing.');
          expect(element('.doc-example-live ng-pluralize:last').text()).
                              toBe('Igor and Misko are viewing.');

          using('.doc-example-live').input('personCount').enter('3');
          expect(element('.doc-example-live ng-pluralize:first').text()).
                                            toBe('3 people are viewing.');
          expect(element('.doc-example-live ng-pluralize:last').text()).
                              toBe('Igor, Misko and one other person are viewing.');

          using('.doc-example-live').input('personCount').enter('4');
          expect(element('.doc-example-live ng-pluralize:first').text()).
                                            toBe('4 people are viewing.');
          expect(element('.doc-example-live ng-pluralize:last').text()).
                              toBe('Igor, Misko and 2 other people are viewing.');
        });

        it('should show data-binded names', function() {
          using('.doc-example-live').input('personCount').enter('4');
          expect(element('.doc-example-live ng-pluralize:last').text()).
              toBe('Igor, Misko and 2 other people are viewing.');

          using('.doc-example-live').input('person1').enter('Di');
          using('.doc-example-live').input('person2').enter('Vojta');
          expect(element('.doc-example-live ng-pluralize:last').text()).
              toBe('Di, Vojta and 2 other people are viewing.');
        });
      </doc:scenario>
    </doc:example>
 */
var ngPluralizeDirective = ['$locale', '$interpolate', function($locale, $interpolate) {
  var BRACE = /{}/g;
  return {
    restrict: 'EA',
    link: function(scope, element, attr) {
      var numberExp = attr.count,
          whenExp = element.attr(attr.$attr.when), // this is because we have {{}} in attrs
          offset = attr.offset || 0,
          whens = scope.$eval(whenExp),
          whensExpFns = {},
          startSymbol = $interpolate.startSymbol(),
          endSymbol = $interpolate.endSymbol();

      forEach(whens, function(expression, key) {
        whensExpFns[key] =
          $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' +
            offset + endSymbol));
      });

      scope.$watch(function ngPluralizeWatch() {
        var value = parseFloat(scope.$eval(numberExp));

        if (!isNaN(value)) {
          //if explicit number rule such as 1, 2, 3... is defined, just use it. Otherwise,
          //check it against pluralization rules in $locale service
          if (!(value in whens)) value = $locale.pluralCat(value - offset);
           return whensExpFns[value](scope, element, true);
        } else {
          return '';
        }
      }, function ngPluralizeWatchAction(newVal) {
        element.text(newVal);
      });
    }
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngRepeat
 *
 * @description
 * The `ngRepeat` directive instantiates a template once per item from a collection. Each template
 * instance gets its own scope, where the given loop variable is set to the current collection item,
 * and `$index` is set to the item index or key.
 *
 * Special properties are exposed on the local scope of each template instance, including:
 *
 *   * `$index` – `{number}` – iterator offset of the repeated element (0..length-1)
 *   * `$first` – `{boolean}` – true if the repeated element is first in the iterator.
 *   * `$middle` – `{boolean}` – true if the repeated element is between the first and last in the iterator.
 *   * `$last` – `{boolean}` – true if the repeated element is last in the iterator.
 *
 * Additionally, you can also provide animations via the ngAnimate attribute to animate the **enter**,
 * **leave** and **move** effects.
 *
 * @animations
 * enter - when a new item is added to the list or when an item is revealed after a filter
 * leave - when an item is removed from the list or when an item is filtered out
 * move - when an adjacent item is filtered out causing a reorder or when the item contents are reordered
 *
 * @element ANY
 * @scope
 * @priority 1000
 * @param {repeat_expression} ngRepeat The expression indicating how to enumerate a collection. These
 *   formats are currently supported:
 *
 *   * `variable in expression` – where variable is the user defined loop variable and `expression`
 *     is a scope expression giving the collection to enumerate.
 *
 *     For example: `track in cd.tracks`.
 *
 *   * `(key, value) in expression` – where `key` and `value` can be any user defined identifiers,
 *     and `expression` is the scope expression giving the collection to enumerate.
 *
 *     For example: `(name, age) in {'adam':10, 'amalie':12}`.
 *
 *   * `variable in expression track by tracking_expression` – You can also provide an optional tracking function
 *     which can be used to associate the objects in the collection with the DOM elements. If no tractking function
 *     is specified the ng-repeat associates elements by identity in the collection. It is an error to have
 *     more then one tractking function to  resolve to the same key. (This would mean that two distinct objects are
 *     mapped to the same DOM element, which is not possible.)
 *
 *     For example: `item in items` is equivalent to `item in items track by $id(item)'. This implies that the DOM elements
 *     will be associated by item identity in the array.
 *
 *     For example: `item in items track by $id(item)`. A built in `$id()` function can be used to assign a unique
 *     `$$hashKey` property to each item in the array. This property is then used as a key to associated DOM elements
 *     with the corresponding item in the array by identity. Moving the same object in array would move the DOM
 *     element in the same way ian the DOM.
 *
 *     For example: `item in items track by item.id` Is a typical pattern when the items come from the database. In this
 *     case the object identity does not matter. Two objects are considered equivalent as long as their `id`
 *     property is same.
 *
 * @example
 * This example initializes the scope to a list of names and
 * then uses `ngRepeat` to display every person:
  <example animations="true">
    <file name="index.html">
      <div ng-init="friends = [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Samantha', age:60, gender:'girl'}
      ]">
        I have {{friends.length}} friends. They are:
        <input type="search" ng-model="q" placeholder="filter friends..." />
        <ul>
          <li ng-repeat="friend in friends | filter:q"
              ng-animate="{enter: 'example-repeat-enter',
                          leave: 'example-repeat-leave',
                          move: 'example-repeat-move'}">
            [{{$index + 1}}] {{friend.name}} who is {{friend.age}} years old.
          </li>
        </ul>
      </div>
    </file>
    <file name="animations.css">
      .example-repeat-enter,
      .example-repeat-leave,
      .example-repeat-move {
        -webkit-transition:all linear 0.5s;
        -moz-transition:all linear 0.5s;
        -ms-transition:all linear 0.5s;
        -o-transition:all linear 0.5s;
        transition:all linear 0.5s;
      }

      .example-repeat-enter {
        line-height:0;
        opacity:0;
      }
      .example-repeat-enter.example-repeat-enter-active {
        line-height:20px;
        opacity:1;
      }

      .example-repeat-leave {
        opacity:1;
        line-height:20px;
      }
      .example-repeat-leave.example-repeat-leave-active {
        opacity:0;
        line-height:0;
      }

      .example-repeat-move { }
      .example-repeat-move.example-repeat-move-active { }
    </file>
    <file name="scenario.js">
       it('should render initial data set', function() {
         var r = using('.doc-example-live').repeater('ul li');
         expect(r.count()).toBe(10);
         expect(r.row(0)).toEqual(["1","John","25"]);
         expect(r.row(1)).toEqual(["2","Jessie","30"]);
         expect(r.row(9)).toEqual(["10","Samantha","60"]);
         expect(binding('friends.length')).toBe("10");
       });

       it('should update repeater when filter predicate changes', function() {
         var r = using('.doc-example-live').repeater('ul li');
         expect(r.count()).toBe(10);

         input('q').enter('ma');

         expect(r.count()).toBe(2);
         expect(r.row(0)).toEqual(["1","Mary","28"]);
         expect(r.row(1)).toEqual(["2","Samantha","60"]);
       });
      </file>
    </example>
 */
var ngRepeatDirective = ['$parse', '$animator', function($parse, $animator) {
  var NG_REMOVED = '$$NG_REMOVED';
  return {
    transclude: 'element',
    priority: 1000,
    terminal: true,
    compile: function(element, attr, linker) {
      return function($scope, $element, $attr){
        var animate = $animator($scope, $attr);
        var expression = $attr.ngRepeat;
        var match = expression.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
          trackByExp, trackByExpGetter, trackByIdFn, lhs, rhs, valueIdentifier, keyIdentifier,
          hashFnLocals = {$id: hashKey};

        if (!match) {
          throw Error("Expected ngRepeat in form of '_item_ in _collection_[ track by _id_]' but got '" +
            expression + "'.");
        }

        lhs = match[1];
        rhs = match[2];
        trackByExp = match[4];

        if (trackByExp) {
          trackByExpGetter = $parse(trackByExp);
          trackByIdFn = function(key, value, index) {
            // assign key, value, and $index to the locals so that they can be used in hash functions
            if (keyIdentifier) hashFnLocals[keyIdentifier] = key;
            hashFnLocals[valueIdentifier] = value;
            hashFnLocals.$index = index;
            return trackByExpGetter($scope, hashFnLocals);
          };
        } else {
          trackByIdFn = function(key, value) {
            return hashKey(value);
          }
        }

        match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
        if (!match) {
          throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" +
              lhs + "'.");
        }
        valueIdentifier = match[3] || match[1];
        keyIdentifier = match[2];

        // Store a list of elements from previous run. This is a hash where key is the item from the
        // iterator, and the value is objects with following properties.
        //   - scope: bound scope
        //   - element: previous element.
        //   - index: position
        var lastBlockMap = {};

        //watch props
        $scope.$watchCollection(rhs, function ngRepeatAction(collection){
          var index, length,
              cursor = $element,     // current position of the node
              nextCursor,
              // Same as lastBlockMap but it has the current state. It will become the
              // lastBlockMap on the next iteration.
              nextBlockMap = {},
              arrayLength,
              childScope,
              key, value, // key/value of iteration
              trackById,
              collectionKeys,
              block,       // last object information {scope, element, id}
              nextBlockOrder = [];


          if (isArrayLike(collection)) {
            collectionKeys = collection;
          } else {
            // if object, extract keys, sort them and use to determine order of iteration over obj props
            collectionKeys = [];
            for (key in collection) {
              if (collection.hasOwnProperty(key) && key.charAt(0) != '$') {
                collectionKeys.push(key);
              }
            }
            collectionKeys.sort();
          }

          arrayLength = collectionKeys.length;

          // locate existing items
          length = nextBlockOrder.length = collectionKeys.length;
          for(index = 0; index < length; index++) {
           key = (collection === collectionKeys) ? index : collectionKeys[index];
           value = collection[key];
           trackById = trackByIdFn(key, value, index);
           if(lastBlockMap.hasOwnProperty(trackById)) {
             block = lastBlockMap[trackById]
             delete lastBlockMap[trackById];
             nextBlockMap[trackById] = block;
             nextBlockOrder[index] = block;
           } else if (nextBlockMap.hasOwnProperty(trackById)) {
             // restore lastBlockMap
             forEach(nextBlockOrder, function(block) {
               if (block && block.element) lastBlockMap[block.id] = block;
             });
             // This is a duplicate and we need to throw an error
             throw new Error('Duplicates in a repeater are not allowed. Repeater: ' + expression +
                 ' key: ' + trackById);
           } else {
             // new never before seen block
             nextBlockOrder[index] = { id: trackById };
             nextBlockMap[trackById] = false;
           }
         }

          // remove existing items
          for (key in lastBlockMap) {
            if (lastBlockMap.hasOwnProperty(key)) {
              block = lastBlockMap[key];
              animate.leave(block.element);
              block.element[0][NG_REMOVED] = true;
              block.scope.$destroy();
            }
          }

          // we are not using forEach for perf reasons (trying to avoid #call)
          for (index = 0, length = collectionKeys.length; index < length; index++) {
            key = (collection === collectionKeys) ? index : collectionKeys[index];
            value = collection[key];
            block = nextBlockOrder[index];

            if (block.element) {
              // if we have already seen this object, then we need to reuse the
              // associated scope/element
              childScope = block.scope;

              nextCursor = cursor[0];
              do {
                nextCursor = nextCursor.nextSibling;
              } while(nextCursor && nextCursor[NG_REMOVED]);

              if (block.element[0] == nextCursor) {
                // do nothing
                cursor = block.element;
              } else {
                // existing item which got moved
                animate.move(block.element, null, cursor);
                cursor = block.element;
              }
            } else {
              // new item which we don't know about
              childScope = $scope.$new();
            }

            childScope[valueIdentifier] = value;
            if (keyIdentifier) childScope[keyIdentifier] = key;
            childScope.$index = index;
            childScope.$first = (index === 0);
            childScope.$last = (index === (arrayLength - 1));
            childScope.$middle = !(childScope.$first || childScope.$last);

            if (!block.element) {
              linker(childScope, function(clone) {
                animate.enter(clone, null, cursor);
                cursor = clone;
                block.scope = childScope;
                block.element = clone;
                nextBlockMap[block.id] = block;
              });
            }
          }
          lastBlockMap = nextBlockMap;
        });
      };
    }
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngShow
 *
 * @description
 * The `ngShow` and `ngHide` directives show or hide a portion of the DOM tree (HTML)
 * conditionally based on **"truthy"** values evaluated within an {expression}. In other
 * words, if the expression assigned to **ngShow evaluates to a true value** then **the element is set to visible**
 * (via `display:block` in css) and **if false** then **the element is set to hidden** (so display:none).
 * With ngHide this is the reverse whereas true values cause the element itself to become
 * hidden.
 *
 * Additionally, you can also provide animations via the ngAnimate attribute to animate the **show**
 * and **hide** effects.
 *
 * @animations
 * show - happens after the ngShow expression evaluates to a truthy value and the contents are set to visible
 * hide - happens before the ngShow expression evaluates to a non truthy value and just before the contents are set to hidden
 *
 * @element ANY
 * @param {expression} ngShow If the {@link guide/expression expression} is truthy
 *     then the element is shown or hidden respectively.
 *
 * @example
  <example animations="true">
    <file name="index.html">
      Click me: <input type="checkbox" ng-model="checked"><br/>
      <div>
        Show:
        <span class="check-element"
              ng-show="checked"
              ng-animate="{show: 'example-show', hide: 'example-hide'}">
          <span class="icon-thumbs-up"></span> I show up when your checkbox is checked.
        </span>
      </div>
      <div>
        Hide:
        <span class="check-element"
              ng-hide="checked"
              ng-animate="{show: 'example-show', hide: 'example-hide'}">
          <span class="icon-thumbs-down"></span> I hide when your checkbox is checked.
        </span>
      </div>
    </file>
    <file name="animations.css">
      .example-show, .example-hide {
        -webkit-transition:all linear 0.5s;
        -moz-transition:all linear 0.5s;
        -ms-transition:all linear 0.5s;
        -o-transition:all linear 0.5s;
        transition:all linear 0.5s;
      }

      .example-show {
        line-height:0;
        opacity:0;
        padding:0 10px;
      }
      .example-show-active.example-show-active {
        line-height:20px;
        opacity:1;
        padding:10px;
        border:1px solid black;
        background:white;
      }

      .example-hide {
        line-height:20px;
        opacity:1;
        padding:10px;
        border:1px solid black;
        background:white;
      }
      .example-hide-active.example-hide-active {
        line-height:0;
        opacity:0;
        padding:0 10px;
      }

      .check-element {
        padding:10px;
        border:1px solid black;
        background:white;
      }
    </file>
    <file name="scenario.js">
       it('should check ng-show / ng-hide', function() {
         expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
         expect(element('.doc-example-live span:last:visible').count()).toEqual(1);

         input('checked').check();

         expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
         expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
       });
    </file>
  </example>
 */
//TODO(misko): refactor to remove element from the DOM
var ngShowDirective = ['$animator', function($animator) {
  return function(scope, element, attr) {
    var animate = $animator(scope, attr);
    scope.$watch(attr.ngShow, function ngShowWatchAction(value){
      animate[toBoolean(value) ? 'show' : 'hide'](element);
    });
  };
}];


/**
 * @ngdoc directive
 * @name ng.directive:ngHide
 *
 * @description
 * The `ngShow` and `ngHide` directives show or hide a portion of the DOM tree (HTML)
 * conditionally based on **"truthy"** values evaluated within an {expression}. In other
 * words, if the expression assigned to **ngShow evaluates to a true value** then **the element is set to visible**
 * (via `display:block` in css) and **if false** then **the element is set to hidden** (so display:none).
 * With ngHide this is the reverse whereas true values cause the element itself to become
 * hidden.
 *
 * Additionally, you can also provide animations via the ngAnimate attribute to animate the **show**
 * and **hide** effects.
 *
 * @animations
 * show - happens after the ngHide expression evaluates to a non truthy value and the contents are set to visible
 * hide - happens after the ngHide expression evaluates to a truthy value and just before the contents are set to hidden
 *
 * @element ANY
 * @param {expression} ngHide If the {@link guide/expression expression} is truthy then
 *     the element is shown or hidden respectively.
 *
 * @example
  <example animations="true">
    <file name="index.html">
      Click me: <input type="checkbox" ng-model="checked"><br/>
      <div>
        Show:
        <span class="check-element"
              ng-show="checked"
              ng-animate="{show: 'example-show', hide: 'example-hide'}">
          <span class="icon-thumbs-up"></span> I show up when your checkbox is checked.
        </span>
      </div>
      <div>
        Hide:
        <span class="check-element"
              ng-hide="checked"
              ng-animate="{show: 'example-show', hide: 'example-hide'}">
          <span class="icon-thumbs-down"></span> I hide when your checkbox is checked.
        </span>
      </div>
    </file>
    <file name="animations.css">
      .example-show, .example-hide {
        -webkit-transition:all linear 0.5s;
        -moz-transition:all linear 0.5s;
        -ms-transition:all linear 0.5s;
        -o-transition:all linear 0.5s;
        transition:all linear 0.5s;
      }

      .example-show {
        line-height:0;
        opacity:0;
        padding:0 10px;
      }
      .example-show.example-show-active {
        line-height:20px;
        opacity:1;
        padding:10px;
        border:1px solid black;
        background:white;
      }

      .example-hide {
        line-height:20px;
        opacity:1;
        padding:10px;
        border:1px solid black;
        background:white;
      }
      .example-hide.example-hide-active {
        line-height:0;
        opacity:0;
        padding:0 10px;
      }

      .check-element {
        padding:10px;
        border:1px solid black;
        background:white;
      }
    </file>
    <file name="scenario.js">
       it('should check ng-show / ng-hide', function() {
         expect(element('.doc-example-live .check-element:first:hidden').count()).toEqual(1);
         expect(element('.doc-example-live .check-element:last:visible').count()).toEqual(1);

         input('checked').check();

         expect(element('.doc-example-live .check-element:first:visible').count()).toEqual(1);
         expect(element('.doc-example-live .check-element:last:hidden').count()).toEqual(1);
       });
    </file>
  </example>
 */
//TODO(misko): refactor to remove element from the DOM
var ngHideDirective = ['$animator', function($animator) {
  return function(scope, element, attr) {
    var animate = $animator(scope, attr);
    scope.$watch(attr.ngHide, function ngHideWatchAction(value){
      animate[toBoolean(value) ? 'hide' : 'show'](element);
    });
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:ngStyle
 *
 * @description
 * The `ngStyle` directive allows you to set CSS style on an HTML element conditionally.
 *
 * @element ANY
 * @param {expression} ngStyle {@link guide/expression Expression} which evals to an
 *      object whose keys are CSS style names and values are corresponding values for those CSS
 *      keys.
 *
 * @example
   <example>
     <file name="index.html">
        <input type="button" value="set" ng-click="myStyle={color:'red'}">
        <input type="button" value="clear" ng-click="myStyle={}">
        <br/>
        <span ng-style="myStyle">Sample Text</span>
        <pre>myStyle={{myStyle}}</pre>
     </file>
     <file name="style.css">
       span {
         color: black;
       }
     </file>
     <file name="scenario.js">
       it('should check ng-style', function() {
         expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
         element('.doc-example-live :button[value=set]').click();
         expect(element('.doc-example-live span').css('color')).toBe('rgb(255, 0, 0)');
         element('.doc-example-live :button[value=clear]').click();
         expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
       });
     </file>
   </example>
 */
var ngStyleDirective = ngDirective(function(scope, element, attr) {
  scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
    if (oldStyles && (newStyles !== oldStyles)) {
      forEach(oldStyles, function(val, style) { element.css(style, '');});
    }
    if (newStyles) element.css(newStyles);
  }, true);
});

/**
 * @ngdoc directive
 * @name ng.directive:ngSwitch
 * @restrict EA
 *
 * @description
 * The ngSwitch directive is used to conditionally swap DOM structure on your template based on a scope expression.
 * Elements within ngSwitch but without ngSwitchWhen or ngSwitchDefault directives will be preserved at the location
 * as specified in the template.
 *
 * The directive itself works similar to ngInclude, however, instead of downloading template code (or loading it
 * from the template cache), ngSwitch simply choses one of the nested elements and makes it visible based on which element
 * matches the value obtained from the evaluated expression. In other words, you define a container element
 * (where you place the directive), place an expression on the **on="..." attribute**
 * (or the **ng-switch="..." attribute**), define any inner elements inside of the directive and place
 * a when attribute per element. The when attribute is used to inform ngSwitch which element to display when the on
 * expression is evaluated. If a matching expression is not found via a when attribute then an element with the default
 * attribute is displayed.
 *
 * Additionally, you can also provide animations via the ngAnimate attribute to animate the **enter**
 * and **leave** effects.
 *
 * @animations
 * enter - happens after the ngSwtich contents change and the matched child element is placed inside the container
 * leave - happens just after the ngSwitch contents change and just before the former contents are removed from the DOM
 *
 * @usage
 * <ANY ng-switch="expression">
 *   <ANY ng-switch-when="matchValue1">...</ANY>
 *   <ANY ng-switch-when="matchValue2">...</ANY>
 *   <ANY ng-switch-default>...</ANY>
 * </ANY>
 *
 * @scope
 * @param {*} ngSwitch|on expression to match against <tt>ng-switch-when</tt>.
 * @paramDescription
 * On child elements add:
 *
 * * `ngSwitchWhen`: the case statement to match against. If match then this
 *   case will be displayed. If the same match appears multiple times, all the
 *   elements will be displayed.
 * * `ngSwitchDefault`: the default case when no other case match. If there
 *   are multiple default cases, all of them will be displayed when no other
 *   case match.
 *
 *
 * @example
  <example animations="true">
    <file name="index.html">
      <div ng-controller="Ctrl">
        <select ng-model="selection" ng-options="item for item in items">
        </select>
        <tt>selection={{selection}}</tt>
        <hr/>
        <div
          class="example-animate-container"
          ng-switch on="selection"
          ng-animate="{enter: 'example-enter', leave: 'example-leave'}">
            <div ng-switch-when="settings">Settings Div</div>
            <div ng-switch-when="home">Home Span</div>
            <div ng-switch-default>default</div>
        </div>
      </div>
    </file>
    <file name="script.js">
      function Ctrl($scope) {
        $scope.items = ['settings', 'home', 'other'];
        $scope.selection = $scope.items[0];
      }
    </file>
    <file name="animations.css">
      .example-leave, .example-enter {
        -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -moz-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -ms-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        -o-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;

        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
      }

      .example-animate-container > * {
        display:block;
        padding:10px;
      }

      .example-enter {
        top:-50px;
      }
      .example-enter.example-enter-active {
        top:0;
      }

      .example-leave {
        top:0;
      }
      .example-leave.example-leave-active {
        top:50px;
      }
    </file>
    <file name="scenario.js">
      it('should start in settings', function() {
        expect(element('.doc-example-live [ng-switch]').text()).toMatch(/Settings Div/);
      });
      it('should change to home', function() {
        select('selection').option('home');
        expect(element('.doc-example-live [ng-switch]').text()).toMatch(/Home Span/);
      });
      it('should select default', function() {
        select('selection').option('other');
        expect(element('.doc-example-live [ng-switch]').text()).toMatch(/default/);
      });
    </file>
  </example>
 */
var ngSwitchDirective = ['$animator', function($animator) {
  return {
    restrict: 'EA',
    require: 'ngSwitch',

    // asks for $scope to fool the BC controller module
    controller: ['$scope', function ngSwitchController() {
     this.cases = {};
    }],
    link: function(scope, element, attr, ngSwitchController) {
      var animate = $animator(scope, attr);
      var watchExpr = attr.ngSwitch || attr.on,
          selectedTranscludes,
          selectedElements,
          selectedScopes = [];

      scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
        for (var i= 0, ii=selectedScopes.length; i<ii; i++) {
          selectedScopes[i].$destroy();
          animate.leave(selectedElements[i]);
        }

        selectedElements = [];
        selectedScopes = [];

        if ((selectedTranscludes = ngSwitchController.cases['!' + value] || ngSwitchController.cases['?'])) {
          scope.$eval(attr.change);
          forEach(selectedTranscludes, function(selectedTransclude) {
            var selectedScope = scope.$new();
            selectedScopes.push(selectedScope);
            selectedTransclude.transclude(selectedScope, function(caseElement) {
              var anchor = selectedTransclude.element;

              selectedElements.push(caseElement);
              animate.enter(caseElement, anchor.parent(), anchor);
            });
          });
        }
      });
    }
  }
}];

var ngSwitchWhenDirective = ngDirective({
  transclude: 'element',
  priority: 500,
  require: '^ngSwitch',
  compile: function(element, attrs, transclude) {
    return function(scope, element, attr, ctrl) {
      ctrl.cases['!' + attrs.ngSwitchWhen] = (ctrl.cases['!' + attrs.ngSwitchWhen] || []);
      ctrl.cases['!' + attrs.ngSwitchWhen].push({ transclude: transclude, element: element });
    };
  }
});

var ngSwitchDefaultDirective = ngDirective({
  transclude: 'element',
  priority: 500,
  require: '^ngSwitch',
  compile: function(element, attrs, transclude) {
    return function(scope, element, attr, ctrl) {
      ctrl.cases['?'] = (ctrl.cases['?'] || []);
      ctrl.cases['?'].push({ transclude: transclude, element: element });
    };
  }
});

/**
 * @ngdoc directive
 * @name ng.directive:ngTransclude
 *
 * @description
 * Insert the transcluded DOM here.
 *
 * @element ANY
 *
 * @example
   <doc:example module="transclude">
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.title = 'Lorem Ipsum';
           $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
         }

         angular.module('transclude', [])
          .directive('pane', function(){
             return {
               restrict: 'E',
               transclude: true,
               scope: 'isolate',
               locals: { title:'bind' },
               template: '<div style="border: 1px solid black;">' +
                           '<div style="background-color: gray">{{title}}</div>' +
                           '<div ng-transclude></div>' +
                         '</div>'
             };
         });
       </script>
       <div ng-controller="Ctrl">
         <input ng-model="title"><br>
         <textarea ng-model="text"></textarea> <br/>
         <pane title="{{title}}">{{text}}</pane>
       </div>
     </doc:source>
     <doc:scenario>
        it('should have transcluded', function() {
          input('title').enter('TITLE');
          input('text').enter('TEXT');
          expect(binding('title')).toEqual('TITLE');
          expect(binding('text')).toEqual('TEXT');
        });
     </doc:scenario>
   </doc:example>
 *
 */
var ngTranscludeDirective = ngDirective({
  controller: ['$transclude', '$element', function($transclude, $element) {
    $transclude(function(clone) {
      $element.append(clone);
    });
  }]
});

/**
 * @ngdoc directive
 * @name ng.directive:ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ng.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Additionally, you can also provide animations via the ngAnimate attribute to animate the **enter**
 * and **leave** effects.
 *
 * @animations
 * enter - happens just after the ngView contents are changed (when the new view DOM element is inserted into the DOM)
 * leave - happens just after the current ngView contents change and just before the former contents are removed from the DOM
 *
 * @scope
 * @example
    <example module="ngView" animations="true">
      <file name="index.html">
        <div ng-controller="MainCntl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div
            ng-view
            class="example-animate-container"
            ng-animate="{enter: 'example-enter', leave: 'example-leave'}"></div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .example-leave, .example-enter {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          -moz-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          -ms-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          -o-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
        }

        .example-animate-container {
          position:relative;
          height:100px;
        }

        .example-animate-container > * {
          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .example-enter {
          left:100%;
        }
        .example-enter.example-enter-active {
          left:0;
        }

        .example-leave { }
        .example-leave.example-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngView', [], function($routeProvider, $locationProvider) {
          $routeProvider.when('/Book/:bookId', {
            templateUrl: 'book.html',
            controller: BookCntl,
            controllerAs: 'book'
          });
          $routeProvider.when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: ChapterCntl,
            controllerAs: 'chapter'
          });

          // configure html5 to get links working on jsfiddle
          $locationProvider.html5Mode(true);
        });

        function MainCntl($route, $routeParams, $location) {
          this.$route = $route;
          this.$location = $location;
          this.$routeParams = $routeParams;
        }

        function BookCntl($routeParams) {
          this.name = "BookCntl";
          this.params = $routeParams;
        }

        function ChapterCntl($routeParams) {
          this.name = "ChapterCntl";
          this.params = $routeParams;
        }
      </file>

      <file name="scenario.js">
        it('should load and compile correct template', function() {
          element('a:contains("Moby: Ch1")').click();
          var content = element('.doc-example-live [ng-view]').text();
          expect(content).toMatch(/controller\: ChapterCntl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element('a:contains("Scarlet")').click();
          content = element('.doc-example-live [ng-view]').text();
          expect(content).toMatch(/controller\: BookCntl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ng.directive:ngView#$viewContentLoaded
 * @eventOf ng.directive:ngView
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
var ngViewDirective = ['$http', '$templateCache', '$route', '$anchorScroll', '$compile',
                       '$controller', '$animator',
               function($http,   $templateCache,   $route,   $anchorScroll,   $compile,
                        $controller,  $animator) {
  return {
    restrict: 'ECA',
    terminal: true,
    link: function(scope, element, attr) {
      var lastScope,
          onloadExp = attr.onload || '',
          animate = $animator(scope, attr);

      scope.$on('$routeChangeSuccess', update);
      update();


      function destroyLastScope() {
        if (lastScope) {
          lastScope.$destroy();
          lastScope = null;
        }
      }

      function clearContent() {
        animate.leave(element.contents(), element);
        destroyLastScope();
      }

      function update() {
        var locals = $route.current && $route.current.locals,
            template = locals && locals.$template;

        if (template) {
          clearContent();
          var enterElements = jqLite('<div></div>').html(template).contents();
          animate.enter(enterElements, element);

          var link = $compile(enterElements),
              current = $route.current,
              controller;

          lastScope = current.scope = scope.$new();
          if (current.controller) {
            locals.$scope = lastScope;
            controller = $controller(current.controller, locals);
            if (current.controllerAs) {
              lastScope[current.controllerAs] = controller;
            }
            element.children().data('$ngControllerController', controller);
          }

          link(lastScope);
          lastScope.$emit('$viewContentLoaded');
          lastScope.$eval(onloadExp);

          // $anchorScroll might listen on event...
          $anchorScroll();
        } else {
          clearContent();
        }
      }
    }
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:script
 *
 * @description
 * Load content of a script tag, with type `text/ng-template`, into `$templateCache`, so that the
 * template can be used by `ngInclude`, `ngView` or directive templates.
 *
 * @restrict E
 * @param {'text/ng-template'} type must be set to `'text/ng-template'`
 *
 * @example
  <doc:example>
    <doc:source>
      <script type="text/ng-template" id="/tpl.html">
        Content of the template.
      </script>

      <a ng-click="currentTpl='/tpl.html'" id="tpl-link">Load inlined template</a>
      <div id="tpl-content" ng-include src="currentTpl"></div>
    </doc:source>
    <doc:scenario>
      it('should load template defined inside script tag', function() {
        element('#tpl-link').click();
        expect(element('#tpl-content').text()).toMatch(/Content of the template/);
      });
    </doc:scenario>
  </doc:example>
 */
var scriptDirective = ['$templateCache', function($templateCache) {
  return {
    restrict: 'E',
    terminal: true,
    compile: function(element, attr) {
      if (attr.type == 'text/ng-template') {
        var templateUrl = attr.id,
            // IE is not consistent, in scripts we have to read .text but in other nodes we have to read .textContent
            text = element[0].text;

        $templateCache.put(templateUrl, text);
      }
    }
  };
}];

/**
 * @ngdoc directive
 * @name ng.directive:select
 * @restrict E
 *
 * @description
 * HTML `SELECT` element with angular data-binding.
 *
 * # `ngOptions`
 *
 * Optionally `ngOptions` attribute can be used to dynamically generate a list of `<option>`
 * elements for a `<select>` element using an array or an object obtained by evaluating the
 * `ngOptions` expression.
 *˝˝
 * When an item in the select menu is select, the value of array element or object property
 * represented by the selected option will be bound to the model identified by the `ngModel`
 * directive of the parent select element.
 *
 * Optionally, a single hard-coded `<option>` element, with the value set to an empty string, can
 * be nested into the `<select>` element. This element will then represent `null` or "not selected"
 * option. See example below for demonstration.
 *
 * Note: `ngOptions` provides iterator facility for `<option>` element which should be used instead
 * of {@link ng.directive:ngRepeat ngRepeat} when you want the
 * `select` model to be bound to a non-string value. This is because an option element can currently
 * be bound to string values only.
 *
 * @param {string} ngModel Assignable angular expression to data-bind to.
 * @param {string=} name Property name of the form under which the control is published.
 * @param {string=} required The control is considered valid only if value is entered.
 * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
 *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
 *    `required` when you want to data-bind to the `required` attribute.
 * @param {comprehension_expression=} ngOptions in one of the following forms:
 *
 *   * for array data sources:
 *     * `label` **`for`** `value` **`in`** `array`
 *     * `select` **`as`** `label` **`for`** `value` **`in`** `array`
 *     * `label`  **`group by`** `group` **`for`** `value` **`in`** `array`
 *     * `select` **`as`** `label` **`group by`** `group` **`for`** `value` **`in`** `array` **`track by`** `trackexpr`
 *   * for object data sources:
 *     * `label` **`for (`**`key` **`,`** `value`**`) in`** `object`
 *     * `select` **`as`** `label` **`for (`**`key` **`,`** `value`**`) in`** `object`
 *     * `label` **`group by`** `group` **`for (`**`key`**`,`** `value`**`) in`** `object`
 *     * `select` **`as`** `label` **`group by`** `group`
 *         **`for` `(`**`key`**`,`** `value`**`) in`** `object`
 *
 * Where:
 *
 *   * `array` / `object`: an expression which evaluates to an array / object to iterate over.
 *   * `value`: local variable which will refer to each item in the `array` or each property value
 *      of `object` during iteration.
 *   * `key`: local variable which will refer to a property name in `object` during iteration.
 *   * `label`: The result of this expression will be the label for `<option>` element. The
 *     `expression` will most likely refer to the `value` variable (e.g. `value.propertyName`).
 *   * `select`: The result of this expression will be bound to the model of the parent `<select>`
 *      element. If not specified, `select` expression will default to `value`.
 *   * `group`: The result of this expression will be used to group options using the `<optgroup>`
 *      DOM element.
 *   * `trackexpr`: Used when working with an array of objects. The result of this expression will be
 *      used to identify the objects in the array. The `trackexpr` will most likely refer to the
 *     `value` variable (e.g. `value.propertyName`).
 *
 * @example
    <doc:example>
      <doc:source>
        <script>
        function MyCntrl($scope) {
          $scope.colors = [
            {name:'black', shade:'dark'},
            {name:'white', shade:'light'},
            {name:'red', shade:'dark'},
            {name:'blue', shade:'dark'},
            {name:'yellow', shade:'light'}
          ];
          $scope.color = $scope.colors[2]; // red
        }
        </script>
        <div ng-controller="MyCntrl">
          <ul>
            <li ng-repeat="color in colors">
              Name: <input ng-model="color.name">
              [<a href ng-click="colors.splice($index, 1)">X</a>]
            </li>
            <li>
              [<a href ng-click="colors.push({})">add</a>]
            </li>
          </ul>
          <hr/>
          Color (null not allowed):
          <select ng-model="color" ng-options="c.name for c in colors"></select><br>

          Color (null allowed):
          <span  class="nullable">
            <select ng-model="color" ng-options="c.name for c in colors">
              <option value="">-- chose color --</option>
            </select>
          </span><br/>

          Color grouped by shade:
          <select ng-model="color" ng-options="c.name group by c.shade for c in colors">
          </select><br/>


          Select <a href ng-click="color={name:'not in list'}">bogus</a>.<br>
          <hr/>
          Currently selected: {{ {selected_color:color}  }}
          <div style="border:solid 1px black; height:20px"
               ng-style="{'background-color':color.name}">
          </div>
        </div>
      </doc:source>
      <doc:scenario>
         it('should check ng-options', function() {
           expect(binding('{selected_color:color}')).toMatch('red');
           select('color').option('0');
           expect(binding('{selected_color:color}')).toMatch('black');
           using('.nullable').select('color').option('');
           expect(binding('{selected_color:color}')).toMatch('null');
         });
      </doc:scenario>
    </doc:example>
 */

var ngOptionsDirective = valueFn({ terminal: true });
var selectDirective = ['$compile', '$parse', function($compile,   $parse) {
                         //0000111110000000000022220000000000000000000000333300000000000000444444444444444440000000005555555555555555500000006666666666666666600000000000000007777000000000000000000088888
  var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
      nullModelCtrl = {$setViewValue: noop};

  return {
    restrict: 'E',
    require: ['select', '?ngModel'],
    controller: ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {
      var self = this,
          optionsMap = {},
          ngModelCtrl = nullModelCtrl,
          nullOption,
          unknownOption;


      self.databound = $attrs.ngModel;


      self.init = function(ngModelCtrl_, nullOption_, unknownOption_) {
        ngModelCtrl = ngModelCtrl_;
        nullOption = nullOption_;
        unknownOption = unknownOption_;
      }


      self.addOption = function(value) {
        optionsMap[value] = true;

        if (ngModelCtrl.$viewValue == value) {
          $element.val(value);
          if (unknownOption.parent()) unknownOption.remove();
        }
      };


      self.removeOption = function(value) {
        if (this.hasOption(value)) {
          delete optionsMap[value];
          if (ngModelCtrl.$viewValue == value) {
            this.renderUnknownOption(value);
          }
        }
      };


      self.renderUnknownOption = function(val) {
        var unknownVal = '? ' + hashKey(val) + ' ?';
        unknownOption.val(unknownVal);
        $element.prepend(unknownOption);
        $element.val(unknownVal);
        unknownOption.prop('selected', true); // needed for IE
      }


      self.hasOption = function(value) {
        return optionsMap.hasOwnProperty(value);
      }

      $scope.$on('$destroy', function() {
        // disable unknown option so that we don't do work when the whole select is being destroyed
        self.renderUnknownOption = noop;
      });
    }],

    link: function(scope, element, attr, ctrls) {
      // if ngModel is not defined, we don't need to do anything
      if (!ctrls[1]) return;

      var selectCtrl = ctrls[0],
          ngModelCtrl = ctrls[1],
          multiple = attr.multiple,
          optionsExp = attr.ngOptions,
          nullOption = false, // if false, user will not be able to select it (used by ngOptions)
          emptyOption,
          // we can't just jqLite('<option>') since jqLite is not smart enough
          // to create it in <select> and IE barfs otherwise.
          optionTemplate = jqLite(document.createElement('option')),
          optGroupTemplate =jqLite(document.createElement('optgroup')),
          unknownOption = optionTemplate.clone();

      // find "null" option
      for(var i = 0, children = element.children(), ii = children.length; i < ii; i++) {
        if (children[i].value == '') {
          emptyOption = nullOption = children.eq(i);
          break;
        }
      }

      selectCtrl.init(ngModelCtrl, nullOption, unknownOption);

      // required validator
      if (multiple && (attr.required || attr.ngRequired)) {
        var requiredValidator = function(value) {
          ngModelCtrl.$setValidity('required', !attr.required || (value && value.length));
          return value;
        };

        ngModelCtrl.$parsers.push(requiredValidator);
        ngModelCtrl.$formatters.unshift(requiredValidator);

        attr.$observe('required', function() {
          requiredValidator(ngModelCtrl.$viewValue);
        });
      }

      if (optionsExp) Options(scope, element, ngModelCtrl);
      else if (multiple) Multiple(scope, element, ngModelCtrl);
      else Single(scope, element, ngModelCtrl, selectCtrl);


      ////////////////////////////



      function Single(scope, selectElement, ngModelCtrl, selectCtrl) {
        ngModelCtrl.$render = function() {
          var viewValue = ngModelCtrl.$viewValue;

          if (selectCtrl.hasOption(viewValue)) {
            if (unknownOption.parent()) unknownOption.remove();
            selectElement.val(viewValue);
            if (viewValue === '') emptyOption.prop('selected', true); // to make IE9 happy
          } else {
            if (isUndefined(viewValue) && emptyOption) {
              selectElement.val('');
            } else {
              selectCtrl.renderUnknownOption(viewValue);
            }
          }
        };

        selectElement.bind('change', function() {
          scope.$apply(function() {
            if (unknownOption.parent()) unknownOption.remove();
            ngModelCtrl.$setViewValue(selectElement.val());
          });
        });
      }

      function Multiple(scope, selectElement, ctrl) {
        var lastView;
        ctrl.$render = function() {
          var items = new HashMap(ctrl.$viewValue);
          forEach(selectElement.find('option'), function(option) {
            option.selected = isDefined(items.get(option.value));
          });
        };

        // we have to do it on each watch since ngModel watches reference, but
        // we need to work of an array, so we need to see if anything was inserted/removed
        scope.$watch(function selectMultipleWatch() {
          if (!equals(lastView, ctrl.$viewValue)) {
            lastView = copy(ctrl.$viewValue);
            ctrl.$render();
          }
        });

        selectElement.bind('change', function() {
          scope.$apply(function() {
            var array = [];
            forEach(selectElement.find('option'), function(option) {
              if (option.selected) {
                array.push(option.value);
              }
            });
            ctrl.$setViewValue(array);
          });
        });
      }

      function Options(scope, selectElement, ctrl) {
        var match;

        if (! (match = optionsExp.match(NG_OPTIONS_REGEXP))) {
          throw Error(
            "Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_ (track by _expr_)?'" +
            " but got '" + optionsExp + "'.");
        }

        var displayFn = $parse(match[2] || match[1]),
            valueName = match[4] || match[6],
            keyName = match[5],
            groupByFn = $parse(match[3] || ''),
            valueFn = $parse(match[2] ? match[1] : valueName),
            valuesFn = $parse(match[7]),
            track = match[8],
            trackFn = track ? $parse(match[8]) : null,
            // This is an array of array of existing option groups in DOM. We try to reuse these if possible
            // optionGroupsCache[0] is the options with no option group
            // optionGroupsCache[?][0] is the parent: either the SELECT or OPTGROUP element
            optionGroupsCache = [[{element: selectElement, label:''}]];

        if (nullOption) {
          // compile the element since there might be bindings in it
          $compile(nullOption)(scope);

          // remove the class, which is added automatically because we recompile the element and it
          // becomes the compilation root
          nullOption.removeClass('ng-scope');

          // we need to remove it before calling selectElement.html('') because otherwise IE will
          // remove the label from the element. wtf?
          nullOption.remove();
        }

        // clear contents, we'll add what's needed based on the model
        selectElement.html('');

        selectElement.bind('change', function() {
          scope.$apply(function() {
            var optionGroup,
                collection = valuesFn(scope) || [],
                locals = {},
                key, value, optionElement, index, groupIndex, length, groupLength;

            if (multiple) {
              value = [];
              for (groupIndex = 0, groupLength = optionGroupsCache.length;
                   groupIndex < groupLength;
                   groupIndex++) {
                // list of options for that group. (first item has the parent)
                optionGroup = optionGroupsCache[groupIndex];

                for(index = 1, length = optionGroup.length; index < length; index++) {
                  if ((optionElement = optionGroup[index].element)[0].selected) {
                    key = optionElement.val();
                    if (keyName) locals[keyName] = key;
                    if (trackFn) {
                      for (var trackIndex = 0; trackIndex < collection.length; trackIndex++) {
                        locals[valueName] = collection[trackIndex];
                        if (trackFn(scope, locals) == key) break;
                      } 
                    } else {
                      locals[valueName] = collection[key];
                    }
                    value.push(valueFn(scope, locals));
                  }
                }
              }
            } else {
              key = selectElement.val();
              if (key == '?') {
                value = undefined;
              } else if (key == ''){
                value = null;
              } else {
                if (trackFn) {
                  for (var trackIndex = 0; trackIndex < collection.length; trackIndex++) {
                    locals[valueName] = collection[trackIndex];
                    if (trackFn(scope, locals) == key) {
                      value = valueFn(scope, locals);
                      break;
                    }
                  }
                } else {
                  locals[valueName] = collection[key];
                  if (keyName) locals[keyName] = key;
                  value = valueFn(scope, locals);
                }
              }
            }
            ctrl.$setViewValue(value);
          });
        });

        ctrl.$render = render;

        // TODO(vojta): can't we optimize this ?
        scope.$watch(render);

        function render() {
          var optionGroups = {'':[]}, // Temporary location for the option groups before we render them
              optionGroupNames = [''],
              optionGroupName,
              optionGroup,
              option,
              existingParent, existingOptions, existingOption,
              modelValue = ctrl.$modelValue,
              values = valuesFn(scope) || [],
              keys = keyName ? sortedKeys(values) : values,
              groupLength, length,
              groupIndex, index,
              locals = {},
              selected,
              selectedSet = false, // nothing is selected yet
              lastElement,
              element,
              label;

          if (multiple) {
            if (trackFn && isArray(modelValue)) {
              selectedSet = new HashMap([]);
              for (var trackIndex = 0; trackIndex < modelValue.length; trackIndex++) {
                locals[valueName] = modelValue[trackIndex];
                selectedSet.put(trackFn(scope, locals), modelValue[trackIndex]);
              }
            } else {
              selectedSet = new HashMap(modelValue);
            }
          }

          // We now build up the list of options we need (we merge later)
          for (index = 0; length = keys.length, index < length; index++) {
               locals[valueName] = values[keyName ? locals[keyName]=keys[index]:index];
               optionGroupName = groupByFn(scope, locals) || '';
            if (!(optionGroup = optionGroups[optionGroupName])) {
              optionGroup = optionGroups[optionGroupName] = [];
              optionGroupNames.push(optionGroupName);
            }
            if (multiple) {
              selected = selectedSet.remove(trackFn ? trackFn(scope, locals) : valueFn(scope, locals)) != undefined;
            } else {
              if (trackFn) {
                var modelCast = {};
                modelCast[valueName] = modelValue;
                selected = trackFn(scope, modelCast) === trackFn(scope, locals);
              } else {
                selected = modelValue === valueFn(scope, locals);
              }
              selectedSet = selectedSet || selected; // see if at least one item is selected
            }
            label = displayFn(scope, locals); // what will be seen by the user
            label = label === undefined ? '' : label; // doing displayFn(scope, locals) || '' overwrites zero values
            optionGroup.push({
              id: trackFn ? trackFn(scope, locals) : (keyName ? keys[index] : index),   // either the index into array or key from object
              label: label,
              selected: selected                   // determine if we should be selected
            });
          }
          if (!multiple) {
            if (nullOption || modelValue === null) {
              // insert null option if we have a placeholder, or the model is null
              optionGroups[''].unshift({id:'', label:'', selected:!selectedSet});
            } else if (!selectedSet) {
              // option could not be found, we have to insert the undefined item
              optionGroups[''].unshift({id:'?', label:'', selected:true});
            }
          }

          // Now we need to update the list of DOM nodes to match the optionGroups we computed above
          for (groupIndex = 0, groupLength = optionGroupNames.length;
               groupIndex < groupLength;
               groupIndex++) {
            // current option group name or '' if no group
            optionGroupName = optionGroupNames[groupIndex];

            // list of options for that group. (first item has the parent)
            optionGroup = optionGroups[optionGroupName];

            if (optionGroupsCache.length <= groupIndex) {
              // we need to grow the optionGroups
              existingParent = {
                element: optGroupTemplate.clone().attr('label', optionGroupName),
                label: optionGroup.label
              };
              existingOptions = [existingParent];
              optionGroupsCache.push(existingOptions);
              selectElement.append(existingParent.element);
            } else {
              existingOptions = optionGroupsCache[groupIndex];
              existingParent = existingOptions[0];  // either SELECT (no group) or OPTGROUP element

              // update the OPTGROUP label if not the same.
              if (existingParent.label != optionGroupName) {
                existingParent.element.attr('label', existingParent.label = optionGroupName);
              }
            }

            lastElement = null;  // start at the beginning
            for(index = 0, length = optionGroup.length; index < length; index++) {
              option = optionGroup[index];
              if ((existingOption = existingOptions[index+1])) {
                // reuse elements
                lastElement = existingOption.element;
                if (existingOption.label !== option.label) {
                  lastElement.text(existingOption.label = option.label);
                }
                if (existingOption.id !== option.id) {
                  lastElement.val(existingOption.id = option.id);
                }
                // lastElement.prop('selected') provided by jQuery has side-effects
                if (lastElement[0].selected !== option.selected) {
                  lastElement.prop('selected', (existingOption.selected = option.selected));
                }
              } else {
                // grow elements

                // if it's a null option
                if (option.id === '' && nullOption) {
                  // put back the pre-compiled element
                  element = nullOption;
                } else {
                  // jQuery(v1.4.2) Bug: We should be able to chain the method calls, but
                  // in this version of jQuery on some browser the .text() returns a string
                  // rather then the element.
                  (element = optionTemplate.clone())
                      .val(option.id)
                      .attr('selected', option.selected)
                      .text(option.label);
                }

                existingOptions.push(existingOption = {
                    element: element,
                    label: option.label,
                    id: option.id,
                    selected: option.selected
                });
                if (lastElement) {
                  lastElement.after(element);
                } else {
                  existingParent.element.append(element);
                }
                lastElement = element;
              }
            }
            // remove any excessive OPTIONs in a group
            index++; // increment since the existingOptions[0] is parent element not OPTION
            while(existingOptions.length > index) {
              existingOptions.pop().element.remove();
            }
          }
          // remove any excessive OPTGROUPs from select
          while(optionGroupsCache.length > groupIndex) {
            optionGroupsCache.pop()[0].element.remove();
          }
        }
      }
    }
  }
}];

var optionDirective = ['$interpolate', function($interpolate) {
  var nullSelectCtrl = {
    addOption: noop,
    removeOption: noop
  };

  return {
    restrict: 'E',
    priority: 100,
    compile: function(element, attr) {
      if (isUndefined(attr.value)) {
        var interpolateFn = $interpolate(element.text(), true);
        if (!interpolateFn) {
          attr.$set('value', element.text());
        }
      }

      return function (scope, element, attr) {
        var selectCtrlName = '$selectController',
            parent = element.parent(),
            selectCtrl = parent.data(selectCtrlName) ||
              parent.parent().data(selectCtrlName); // in case we are in optgroup

        if (selectCtrl && selectCtrl.databound) {
          // For some reason Opera defaults to true and if not overridden this messes up the repeater.
          // We don't want the view to drive the initialization of the model anyway.
          element.prop('selected', false);
        } else {
          selectCtrl = nullSelectCtrl;
        }

        if (interpolateFn) {
          scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
            attr.$set('value', newVal);
            if (newVal !== oldVal) selectCtrl.removeOption(oldVal);
            selectCtrl.addOption(newVal);
          });
        } else {
          selectCtrl.addOption(attr.value);
        }

        element.bind('$destroy', function() {
          selectCtrl.removeOption(attr.value);
        });
      };
    }
  }
}];

var styleDirective = valueFn({
  restrict: 'E',
  terminal: true
});

  //try to bind to jquery now so that one can write angular.element().read()
  //but we will rebind on bootstrap again.
  bindJQuery();

  publishExternalAPI(angular);

  jqLite(document).ready(function() {
    angularInit(document, bootstrap);
  });

})(window, document);
angular.element(document).find('head').append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');/**
 * @license AngularJS v1.1.5
 * (c) 2010-2012 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
'use strict';

/**
 * @ngdoc overview
 * @name ngResource
 * @description
 */

/**
 * @ngdoc object
 * @name ngResource.$resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * # Installation
 * To use $resource make sure you have included the `angular-resource.js` that comes in Angular
 * package. You can also find this file on Google CDN, bower as well as at
 * {@link http://code.angularjs.org/ code.angularjs.org}.
 *
 * Finally load the module in your application:
 *
 *        angular.module('app', ['ngResource']);
 *
 * and you are ready to get started!
 *
 * @param {string} url A parametrized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g.
 *   `http://example.com:8080/api`), you'll need to escape the colon character before the port
 *   number, like this: `$resource('http://example.com\\:8080/api')`.
 *
 *   If you are using a url with a suffix, just add the suffix, like this: 
 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')
 *   or even `$resource('http://example.com/resource/:resource_id.:format')` 
 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
 *   can escape it with `/\.`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods. If any of the parameter value is a function, it will be executed every time
 *   when a param value needs to be obtained for a request (unless the param was overridden).
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url search query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from
 *   the data object (useful for non-GET operations).
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom action that should extend the
 *   default set of resource actions. The declaration should be created in the format of {@link
 *   ng.$http#Parameters $http.config}:
 *
 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
 *        ...}
 *
 *   Where:
 *
 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on your
 *     resource object.
 *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`, `DELETE`,
 *     and `JSONP`.
 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of the
 *     parameter value is a function, it will be executed every time when a param value needs to be
 *     obtained for a request (unless the param was overridden).
 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just like
 *     for the resource-level urls.
 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array, see
 *     `returns` section.
 *   - **`transformRequest`** – `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     request body and headers and returns its transformed (typically serialized) version.
 *   - **`transformResponse`** – `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     response body and headers and returns its transformed (typically deserialized) version.
 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
 *     GET request, otherwise if a cache instance built with
 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
 *     caching.
 *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that
 *     should abort the request when resolved.
 *   - **`withCredentials`** - `{boolean}` - whether to to set the `withCredentials` flag on the
 *     XHR object. See {@link https://developer.mozilla.org/en/http_access_control#section_5
 *     requests with credentials} for more information.
 *   - **`responseType`** - `{string}` - see {@link
 *     https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType requestType}.
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *
 *       { 'get':    {method:'GET'},
 *         'save':   {method:'POST'},
 *         'query':  {method:'GET', isArray:true},
 *         'remove': {method:'DELETE'},
 *         'delete': {method:'DELETE'} };
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   <pre>
        var User = $resource('/user/:userId', {userId:'@id'});
        var user = User.get({userId:123}, function() {
          user.abc = true;
          user.$save();
        });
     </pre>
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most case one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *
 *   The Resource instances and collection have these additional properties:
 *
 *   - `$then`: the `then` method of a {@link ng.$q promise} derived from the underlying
 *     {@link ng.$http $http} call.
 *
 *     The success callback for the `$then` method will be resolved if the underlying `$http` requests
 *     succeeds.
 *
 *     The success callback is called with a single object which is the {@link ng.$http http response}
 *     object extended with a new property `resource`. This `resource` property is a reference to the
 *     result of the resource action — resource object or array of resources.
 *
 *     The error callback is called with the {@link ng.$http http response} object when an http
 *     error occurs.
 *
 *   - `$resolved`: true if the promise has been resolved (either with success or rejection);
 *     Knowing if the Resource has been resolved is useful in data-binding.
 *
 * @example
 *
 * # Credit card resource
 *
 * <pre>
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'01234', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * </pre>
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and `headers`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     var user = User.get({userId:123}, function() {
       user.abc = true;
       user.$save();
     });
   </pre>
 *
 * It's worth noting that the success callback for `get`, `query` and other method gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   </pre>

 * # Buzz client

   Let's look at what a buzz client created with the `$resource` service looks like:
    <doc:example>
      <doc:source jsfiddle="false">
       <script>
         function BuzzController($resource) {
           this.userId = 'googlebuzz';
           this.Activity = $resource(
             'https://www.googleapis.com/buzz/v1/activities/:userId/:visibility/:activityId/:comments',
             {alt:'json', callback:'JSON_CALLBACK'},
             {get:{method:'JSONP', params:{visibility:'@self'}}, replies: {method:'JSONP', params:{visibility:'@self', comments:'@comments'}}}
           );
         }

         BuzzController.prototype = {
           fetch: function() {
             this.activities = this.Activity.get({userId:this.userId});
           },
           expandReplies: function(activity) {
             activity.replies = this.Activity.replies({userId:this.userId, activityId:activity.id});
           }
         };
         BuzzController.$inject = ['$resource'];
       </script>

       <div ng-controller="BuzzController">
         <input ng-model="userId"/>
         <button ng-click="fetch()">fetch</button>
         <hr/>
         <div ng-repeat="item in activities.data.items">
           <h1 style="font-size: 15px;">
             <img src="{{item.actor.thumbnailUrl}}" style="max-height:30px;max-width:30px;"/>
             <a href="{{item.actor.profileUrl}}">{{item.actor.name}}</a>
             <a href ng-click="expandReplies(item)" style="float: right;">Expand replies: {{item.links.replies[0].count}}</a>
           </h1>
           {{item.object.content | html}}
           <div ng-repeat="reply in item.replies.data.items" style="margin-left: 20px;">
             <img src="{{reply.actor.thumbnailUrl}}" style="max-height:30px;max-width:30px;"/>
             <a href="{{reply.actor.profileUrl}}">{{reply.actor.name}}</a>: {{reply.content | html}}
           </div>
         </div>
       </div>
      </doc:source>
      <doc:scenario>
      </doc:scenario>
    </doc:example>
 */
angular.module('ngResource', ['ng']).
  factory('$resource', ['$http', '$parse', function($http, $parse) {
    var DEFAULT_ACTIONS = {
      'get':    {method:'GET'},
      'save':   {method:'POST'},
      'query':  {method:'GET', isArray:true},
      'update': {method:'PUT'},
      'remove': {method:'DELETE'},
      'delete': {method:'DELETE'}
    };
    var noop = angular.noop,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        isFunction = angular.isFunction,
        getter = function(obj, path) {
          return $parse(path)(obj);
        };

    /**
     * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
     * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
     * segments:
     *    segment       = *pchar
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    function encodeUriSegment(val) {
      return encodeUriQuery(val, true).
        replace(/%26/gi, '&').
        replace(/%3D/gi, '=').
        replace(/%2B/gi, '+');
    }


    /**
     * This method is intended for encoding *key* or *value* parts of query component. We need a custom
     * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
     * encoded per http://tools.ietf.org/html/rfc3986:
     *    query       = *( pchar / "/" / "?" )
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    function encodeUriQuery(val, pctEncodeSpaces) {
      return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
    }

    function Route(template, defaults) {
      this.template = template;
      this.defaults = defaults || {};
      this.urlParams = {};
    }

    Route.prototype = {
      setUrlParams: function(config, params, actionUrl) {
        var self = this,
            url = actionUrl || self.template,
            val,
            encodedVal;

        var urlParams = self.urlParams = {};
        forEach(url.split(/\W/), function(param){
          if (param && (new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url))) {
              urlParams[param] = true;
          }
        });
        url = url.replace(/\\:/g, ':');

        params = params || {};
        forEach(self.urlParams, function(_, urlParam){
          val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
          if (angular.isDefined(val) && val !== null) {
            encodedVal = encodeUriSegment(val);
            url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), encodedVal + "$1");
          } else {
            url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function(match,
                leadingSlashes, tail) {
              if (tail.charAt(0) == '/') {
                return tail;
              } else {
                return leadingSlashes + tail;
              }
            });
          }
        });

        // strip trailing slashes and set the url
        url = url.replace(/\/+$/, '');
        // then replace collapse `/.` if found in the last URL path segment before the query
        // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
        url = url.replace(/\/\.(?=\w+($|\?))/, '.');
        // replace escaped `/\.` with `/.`
        config.url = url.replace(/\/\\\./, '/.');
          

        // set params - delegate param encoding to $http
        forEach(params, function(value, key){
          if (!self.urlParams[key]) {
            config.params = config.params || {};
            config.params[key] = value;
          }
        });
      }
    };


    function ResourceFactory(url, paramDefaults, actions) {
      var route = new Route(url);

      actions = extend({}, DEFAULT_ACTIONS, actions);

      function extractParams(data, actionParams){
        var ids = {};
        actionParams = extend({}, paramDefaults, actionParams);
        forEach(actionParams, function(value, key){
          if (isFunction(value)) { value = value(); }
          ids[key] = value && value.charAt && value.charAt(0) == '@' ? getter(data, value.substr(1)) : value;
        });
        return ids;
      }

      function Resource(value){
        copy(value || {}, this);
      }

      forEach(actions, function(action, name) {
        action.method = angular.uppercase(action.method);
        var hasBody = action.method == 'POST' || action.method == 'PUT' || action.method == 'PATCH';
        Resource[name] = function(a1, a2, a3, a4) {
          var params = {};
          var data;
          var success = noop;
          var error = null;
          var promise;

          switch(arguments.length) {
          case 4:
            error = a4;
            success = a3;
            //fallthrough
          case 3:
          case 2:
            if (isFunction(a2)) {
              if (isFunction(a1)) {
                success = a1;
                error = a2;
                break;
              }

              success = a2;
              error = a3;
              //fallthrough
            } else {
              params = a1;
              data = a2;
              success = a3;
              break;
            }
          case 1:
            if (isFunction(a1)) success = a1;
            else if (hasBody) data = a1;
            else params = a1;
            break;
          case 0: break;
          default:
            throw "Expected between 0-4 arguments [params, data, success, error], got " +
              arguments.length + " arguments.";
          }

          var value = this instanceof Resource ? this : (action.isArray ? [] : new Resource(data));
          var httpConfig = {},
              promise;

          forEach(action, function(value, key) {
            if (key != 'params' && key != 'isArray' ) {
              httpConfig[key] = copy(value);
            }
          });
          httpConfig.data = data;
          route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);

          function markResolved() { value.$resolved = true; }

          promise = $http(httpConfig);
          value.$resolved = false;

          promise.then(markResolved, markResolved);
          value.$then = promise.then(function(response) {
            var data = response.data;
            var then = value.$then, resolved = value.$resolved;

            if (data) {
              if (action.isArray) {
                value.length = 0;
                forEach(data, function(item) {
                  value.push(new Resource(item));
                });
              } else {
                copy(data, value);
                value.$then = then;
                value.$resolved = resolved;
              }
            }

            (success||noop)(value, response.headers);

            response.resource = value;
            return response;
          }, error).then;

          return value;
        };


        Resource.prototype['$' + name] = function(a1, a2, a3) {
          var params = extractParams(this),
              success = noop,
              error;

          switch(arguments.length) {
          case 3: params = a1; success = a2; error = a3; break;
          case 2:
          case 1:
            if (isFunction(a1)) {
              success = a1;
              error = a2;
            } else {
              params = a1;
              success = a2 || noop;
            }
          case 0: break;
          default:
            throw "Expected between 1-3 arguments [params, success, error], got " +
              arguments.length + " arguments.";
          }
          var data = hasBody ? this : undefined;
          Resource[name].call(this, params, data, success, error);
        };
      });

      Resource.bind = function(additionalParamDefaults){
        return ResourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
      };

      return Resource;
    }

    return ResourceFactory;
  }]);


})(window, window.angular);
/*global $:false, angular:false */
/**
 *
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2012 Witold Szczerba
 * License: MIT
 *
 */
(function () {

    "use strict";

    angular.module('ngHttpAuthInterceptor', [])

        .provider('authService', function () {
            /**
             * Holds all the requests which failed due to 401 response,
             * so they can be re-requested in future, once login is completed.
             */
            var buffer = [];

            /**
             * Required by HTTP interceptor.
             * Function is attached to provider to be invisible for regular users of this service.
             */
            this.pushToBuffer = function (config, deferred) {
                buffer.push({
                    config:config,
                    deferred:deferred
                });
            };

            this.$get = ['$rootScope', '$injector', function ($rootScope, $injector) {
                var $http; //initialized later because of circular dependency problem
                function retry(config, deferred) {
                    $http = $http || $injector.get('$http');
                    $http(config).then(function (response) {
                        deferred.resolve(response);
                    });
                }

                function retryAll() {
                    for (var i = 0; i < buffer.length; ++i) {
                        retry(buffer[i].config, buffer[i].deferred);
                    }
                    buffer = [];
                }

                return {
                    loginConfirmed:function () {
                        $rootScope.$broadcast('event:auth-loginConfirmed');
                        retryAll();
                    }
                };
            }];
        })

        /**
         * $http interceptor.
         * On 401 response - it stores the request and broadcasts 'event:angular-auth-loginRequired'.
         */
        .config(['$httpProvider', 'authServiceProvider', function ($httpProvider, authServiceProvider) {

            var interceptor = ['$rootScope', '$q', function ($rootScope, $q) {
                function success(response) {
                    return response;
                }

                function error(response) {
                   if (response.status === 401) {
                        var deferred = $q.defer();
                        authServiceProvider.pushToBuffer(response.config, deferred);
                        $rootScope.$broadcast('event:auth-loginRequired');
                        return deferred.promise;
                    }
                    // otherwise
                    return $q.reject(response);
                }

                return function (promise) {
                    return promise.then(success, error);
                };

            }];
            $httpProvider.responseInterceptors.push(interceptor);
        }]);

}());
/**
 * AngularStrap - Twitter Bootstrap directives for AngularJS
 * @version v0.7.3 - 2013-04-25
 * @link http://mgcrea.github.com/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('$strap.config', []).constant('$strapConfig', {});
angular.module('$strap.filters', ['$strap.config']);
angular.module('$strap.directives', ['$strap.config']);
angular.module('$strap', [
  '$strap.filters',
  '$strap.directives',
  '$strap.config'
]);
angular.module('$strap.directives').directive('bsAlert', [
  '$parse',
  '$timeout',
  '$compile',
  function ($parse, $timeout, $compile) {
    'use strict';
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var getter = $parse(attrs.bsAlert), setter = getter.assign, value = getter(scope);
        if (!attrs.bsAlert) {
          if (angular.isUndefined(attrs.closeButton) || attrs.closeButton !== '0' && attrs.closeButton !== 'false') {
            element.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
          }
        } else {
          scope.$watch(attrs.bsAlert, function (newValue, oldValue) {
            value = newValue;
            element.html((newValue.title ? '<strong>' + newValue.title + '</strong>&nbsp;' : '') + newValue.content || '');
            if (!!newValue.closed) {
              element.hide();
            }
            $compile(element.contents())(scope);
            if (newValue.type || oldValue.type) {
              oldValue.type && element.removeClass('alert-' + oldValue.type);
              newValue.type && element.addClass('alert-' + newValue.type);
            }
            if (angular.isUndefined(attrs.closeButton) || attrs.closeButton !== '0' && attrs.closeButton !== 'false') {
              element.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>');
            }
          }, true);
        }
        element.addClass('alert').alert();
        if (element.hasClass('fade')) {
          element.removeClass('in');
          setTimeout(function () {
            element.addClass('in');
          });
        }
        var parentArray = attrs.ngRepeat && attrs.ngRepeat.split(' in ').pop();
        element.on('close', function (ev) {
          var removeElement;
          if (parentArray) {
            ev.preventDefault();
            element.removeClass('in');
            removeElement = function () {
              element.trigger('closed');
              if (scope.$parent) {
                scope.$parent.$apply(function () {
                  var path = parentArray.split('.');
                  var curr = scope.$parent;
                  for (var i = 0; i < path.length; ++i) {
                    if (curr) {
                      curr = curr[path[i]];
                    }
                  }
                  if (curr) {
                    curr.splice(scope.$index, 1);
                  }
                });
              }
            };
            $.support.transition && element.hasClass('fade') ? element.on($.support.transition.end, removeElement) : removeElement();
          } else if (value) {
            ev.preventDefault();
            element.removeClass('in');
            removeElement = function () {
              element.trigger('closed');
              scope.$apply(function () {
                value.closed = true;
              });
            };
            $.support.transition && element.hasClass('fade') ? element.on($.support.transition.end, removeElement) : removeElement();
          } else {
          }
        });
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsButton', [
  '$parse',
  '$timeout',
  function ($parse, $timeout) {
    'use strict';
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        if (controller) {
          if (!element.parent('[data-toggle="buttons-checkbox"], [data-toggle="buttons-radio"]').length) {
            element.attr('data-toggle', 'button');
          }
          var startValue = !!scope.$eval(attrs.ngModel);
          if (startValue) {
            element.addClass('active');
          }
          scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            var bNew = !!newValue, bOld = !!oldValue;
            if (bNew !== bOld) {
              $.fn.button.Constructor.prototype.toggle.call(button);
            } else if (bNew && !startValue) {
              element.addClass('active');
            }
          });
        }
        if (!element.hasClass('btn')) {
          element.on('click.button.data-api', function (ev) {
            element.button('toggle');
          });
        }
        element.button();
        var button = element.data('button');
        button.toggle = function () {
          if (!controller) {
            return $.fn.button.Constructor.prototype.toggle.call(this);
          }
          var $parent = element.parent('[data-toggle="buttons-radio"]');
          if ($parent.length) {
            element.siblings('[ng-model]').each(function (k, v) {
              $parse($(v).attr('ng-model')).assign(scope, false);
            });
            scope.$digest();
            if (!controller.$modelValue) {
              controller.$setViewValue(!controller.$modelValue);
              scope.$digest();
            }
          } else {
            scope.$apply(function () {
              controller.$setViewValue(!controller.$modelValue);
            });
          }
        };
      }
    };
  }
]).directive('bsButtonsCheckbox', [
  '$parse',
  function ($parse) {
    'use strict';
    return {
      restrict: 'A',
      require: '?ngModel',
      compile: function compile(tElement, tAttrs, transclude) {
        tElement.attr('data-toggle', 'buttons-checkbox').find('a, button').each(function (k, v) {
          $(v).attr('bs-button', '');
        });
      }
    };
  }
]).directive('bsButtonsRadio', [
  '$timeout',
  function ($timeout) {
    'use strict';
    return {
      restrict: 'A',
      require: '?ngModel',
      compile: function compile(tElement, tAttrs, transclude) {
        tElement.attr('data-toggle', 'buttons-radio');
        if (!tAttrs.ngModel) {
          tElement.find('a, button').each(function (k, v) {
            $(v).attr('bs-button', '');
          });
        }
        return function postLink(scope, iElement, iAttrs, controller) {
          if (controller) {
            $timeout(function () {
              iElement.find('[value]').button().filter('[value="' + controller.$viewValue + '"]').addClass('active');
            });
            iElement.on('click.button.data-api', function (ev) {
              scope.$apply(function () {
                controller.$setViewValue($(ev.target).closest('button').attr('value'));
              });
            });
            scope.$watch(iAttrs.ngModel, function (newValue, oldValue) {
              if (newValue !== oldValue) {
                var $btn = iElement.find('[value="' + scope.$eval(iAttrs.ngModel) + '"]');
                if ($btn.length) {
                  $btn.button('toggle');
                }
              }
            });
          }
        };
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsButtonSelect', [
  '$parse',
  '$timeout',
  function ($parse, $timeout) {
    'use strict';
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        var getter = $parse(attrs.bsButtonSelect), setter = getter.assign;
        if (ctrl) {
          element.text(scope.$eval(attrs.ngModel));
          scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            element.text(newValue);
          });
        }
        var values, value, index, newValue;
        element.bind('click', function (ev) {
          values = getter(scope);
          value = ctrl ? scope.$eval(attrs.ngModel) : element.text();
          index = values.indexOf(value);
          newValue = index > values.length - 2 ? values[0] : values[index + 1];
          scope.$apply(function () {
            element.text(newValue);
            if (ctrl) {
              ctrl.$setViewValue(newValue);
            }
          });
        });
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsDatepicker', [
  '$timeout',
  '$strapConfig',
  function ($timeout, $strapConfig) {
    'use strict';
    var isAppleTouch = /(iPad|iPho(ne|d))/g.test(navigator.userAgent);
    var regexpMap = function regexpMap(language) {
      language = language || 'en';
      return {
        '/': '[\\/]',
        '-': '[-]',
        '.': '[.]',
        ' ': '[\\s]',
        'dd': '(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))',
        'd': '(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))',
        'mm': '(?:[0]?[1-9]|[1][012])',
        'm': '(?:[0]?[1-9]|[1][012])',
        'DD': '(?:' + $.fn.datepicker.dates[language].days.join('|') + ')',
        'D': '(?:' + $.fn.datepicker.dates[language].daysShort.join('|') + ')',
        'MM': '(?:' + $.fn.datepicker.dates[language].months.join('|') + ')',
        'M': '(?:' + $.fn.datepicker.dates[language].monthsShort.join('|') + ')',
        'yyyy': '(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])',
        'yy': '(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])'
      };
    };
    var regexpForDateFormat = function regexpForDateFormat(format, language) {
      var re = format, map = regexpMap(language), i;
      i = 0;
      angular.forEach(map, function (v, k) {
        re = re.split(k).join('${' + i + '}');
        i++;
      });
      i = 0;
      angular.forEach(map, function (v, k) {
        re = re.split('${' + i + '}').join(v);
        i++;
      });
      return new RegExp('^' + re + '$', ['i']);
    };
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var options = angular.extend({ autoclose: true }, $strapConfig.datepicker || {}), type = attrs.dateType || options.type || 'date';
        angular.forEach([
          'format',
          'weekStart',
          'calendarWeeks',
          'startDate',
          'endDate',
          'daysOfWeekDisabled',
          'autoclose',
          'startView',
          'minViewMode',
          'todayBtn',
          'todayHighlight',
          'keyboardNavigation',
          'language',
          'forceParse'
        ], function (key) {
          if (angular.isDefined(attrs[key]))
            options[key] = attrs[key];
        });
        var language = options.language || 'en', format = isAppleTouch ? 'yyyy-mm-dd' : attrs.dateFormat || options.format || $.fn.datepicker.dates[language] && $.fn.datepicker.dates[language].format || 'yyyy-mm-dd', dateFormatRegexp = regexpForDateFormat(format, language);
        if (controller) {
          controller.$formatters.unshift(function (modelValue) {
            return type === 'date' && angular.isString(modelValue) ? new Date(modelValue) : modelValue;
          });
          controller.$parsers.unshift(function (viewValue) {
            if (!viewValue) {
              controller.$setValidity('date', true);
              return null;
            } else if (type === 'date' && angular.isDate(viewValue)) {
              controller.$setValidity('date', true);
              return viewValue;
            } else if (angular.isString(viewValue) && dateFormatRegexp.test(viewValue)) {
              controller.$setValidity('date', true);
              if (isAppleTouch)
                return new Date(viewValue);
              return type === 'string' ? viewValue : $.fn.datepicker.DPGlobal.parseDate(viewValue, $.fn.datepicker.DPGlobal.parseFormat(format), language);
            } else {
              controller.$setValidity('date', false);
              return undefined;
            }
          });
          controller.$render = function ngModelRender() {
            if (isAppleTouch) {
              var date = $.fn.datepicker.DPGlobal.formatDate(controller.$viewValue, $.fn.datepicker.DPGlobal.parseFormat(format), language);
              element.val(date);
              return date;
            }
            return controller.$viewValue && element.datepicker('update', controller.$viewValue);
          };
        }
        if (isAppleTouch) {
          element.prop('type', 'date').css('-webkit-appearance', 'textfield');
        } else {
          if (controller) {
            element.on('changeDate', function (ev) {
              scope.$apply(function () {
                controller.$setViewValue(type === 'string' ? element.val() : ev.date);
              });
            });
          }
          element.attr('data-toggle', 'datepicker');
          element.datepicker(angular.extend(options, {
            format: format,
            language: language
          }));
          scope.$on('$destroy', function () {
            var datepicker = element.data('datepicker');
            if (datepicker) {
              datepicker.picker.remove();
              element.data('datepicker', null);
            }
          });
        }
        var component = element.siblings('[data-toggle="datepicker"]');
        if (component.length) {
          component.on('click', function () {
            element.trigger('focus');
          });
        }
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsDropdown', [
  '$parse',
  '$compile',
  '$timeout',
  function ($parse, $compile, $timeout) {
    'use strict';
    var buildTemplate = function (items, ul) {
      if (!ul)
        ul = [
          '<ul class="dropdown-menu" role="menu" aria-labelledby="drop1">',
          '</ul>'
        ];
      angular.forEach(items, function (item, index) {
        if (item.divider)
          return ul.splice(index + 1, 0, '<li class="divider"></li>');
        var li = '<li' + (item.submenu && item.submenu.length ? ' class="dropdown-submenu"' : '') + '>' + '<a tabindex="-1" ng-href="' + (item.href || '') + '"' + (item.click ? '" ng-click="' + item.click + '"' : '') + (item.target ? '" target="' + item.target + '"' : '') + '>' + (item.text || '') + '</a>';
        if (item.submenu && item.submenu.length)
          li += buildTemplate(item.submenu).join('\n');
        li += '</li>';
        ul.splice(index + 1, 0, li);
      });
      return ul;
    };
    return {
      restrict: 'EA',
      scope: true,
      link: function postLink(scope, iElement, iAttrs) {
        var getter = $parse(iAttrs.bsDropdown), items = getter(scope);
        $timeout(function () {
          if (!angular.isArray(items)) {
          }
          var dropdown = angular.element(buildTemplate(items).join(''));
          dropdown.insertAfter(iElement);
          $compile(iElement.next('ul.dropdown-menu'))(scope);
        });
        iElement.addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
      }
    };
  }
]);
angular.module('$strap.directives').factory('$modal', [
  '$rootScope',
  '$compile',
  '$http',
  '$timeout',
  '$q',
  '$templateCache',
  function ($rootScope, $compile, $http, $timeout, $q, $templateCache) {
    'use strict';
    var ModalFactory = function ModalFactory(options) {
      function Modal(options) {
        if (!options)
          options = {};
        var scope = options.scope ? options.scope.$new() : $rootScope.$new(), templateUrl = options.template;
        return $q.when($templateCache.get(templateUrl) || $http.get(templateUrl, { cache: true }).then(function (res) {
          return res.data;
        })).then(function onSuccess(template) {
          var id = templateUrl.replace('.html', '').replace(/[\/|\.|:]/g, '-') + '-' + scope.$id;
          var $modal = $('<div class="modal hide" tabindex="-1"></div>').attr('id', id).addClass('fade').html(template);
          if (options.modalClass)
            $modal.addClass(options.modalClass);
          $('body').append($modal);
          $timeout(function () {
            $compile($modal)(scope);
          });
          scope.$modal = function (name) {
            $modal.modal(name);
          };
          angular.forEach([
            'show',
            'hide'
          ], function (name) {
            scope[name] = function () {
              $modal.modal(name);
            };
          });
          scope.dismiss = scope.hide;
          angular.forEach([
            'show',
            'shown',
            'hide',
            'hidden'
          ], function (name) {
            $modal.on(name, function (ev) {
              scope.$emit('modal-' + name, ev);
            });
          });
          $modal.on('shown', function (ev) {
            $('input[autofocus]', $modal).first().trigger('focus');
          });
          $modal.on('hidden', function (ev) {
            if (!options.persist)
              scope.$destroy();
          });
          scope.$on('$destroy', function () {
            $modal.remove();
          });
          if (options.show) {
            $modal.modal('show');
          }
          return $modal;
        });
      }
      return new Modal(options);
    };
    return ModalFactory;
  }
]).directive('bsModal', [
  '$q',
  '$modal',
  function ($q, $modal) {
    'use strict';
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, iElement, iAttrs, controller) {
        var options = {
            template: scope.$eval(iAttrs.bsModal),
            persist: true,
            scope: scope,
            modalClass: iAttrs.modalClass || '',
            backdrop: iAttrs.backdrop * 1 || true,
            keyboard: iAttrs.keyboard * 1 || true
          };
        $q.when($modal(options)).then(function onSuccess(modal) {
          iElement.attr('data-target', '#' + modal.attr('id')).attr('data-toggle', 'modal');
        });
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsNavbar', [
  '$location',
  function ($location) {
    'use strict';
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs, controller) {
        scope.$watch(function () {
          return $location.path();
        }, function (newValue, oldValue) {
          $('li[data-match-route]', element).each(function (k, li) {
            var $li = angular.element(li), pattern = $li.attr('data-match-route'), regexp = new RegExp('^' + pattern + '$', ['i']);
            if (regexp.test(newValue)) {
              $li.addClass('active');
            } else {
              $li.removeClass('active');
            }
          });
        });
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsPopover', [
  '$parse',
  '$compile',
  '$http',
  '$timeout',
  '$q',
  '$templateCache',
  function ($parse, $compile, $http, $timeout, $q, $templateCache) {
    'use strict';
    $('body').on('keyup', function (ev) {
      if (ev.keyCode === 27) {
        $('.popover.in').each(function () {
          $(this).popover('hide');
        });
      }
    });
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attr, ctrl) {
        var getter = $parse(attr.bsPopover), setter = getter.assign, value = getter(scope), options = {};
        if (angular.isObject(value)) {
          options = value;
        }
        $q.when(options.content || $templateCache.get(value) || $http.get(value, { cache: true })).then(function onSuccess(template) {
          if (angular.isObject(template)) {
            template = template.data;
          }
          if (!!attr.unique) {
            element.on('show', function (ev) {
              $('.popover.in').each(function () {
                var $this = $(this), popover = $this.data('popover');
                if (popover && !popover.$element.is(element)) {
                  $this.popover('hide');
                }
              });
            });
          }
          if (!!attr.hide) {
            scope.$watch(attr.hide, function (newValue, oldValue) {
              if (!!newValue) {
                popover.hide();
              } else if (newValue !== oldValue) {
                popover.show();
              }
            });
          }
          element.popover(angular.extend({}, options, {
            content: template,
            html: true
          }));
          var popover = element.data('popover');
          popover.hasContent = function () {
            return this.getTitle() || template;
          };
          popover.getPosition = function () {
            var r = $.fn.popover.Constructor.prototype.getPosition.apply(this, arguments);
            $compile(this.$tip)(scope);
            scope.$digest();
            this.$tip.data('popover', this);
            return r;
          };
          scope.$popover = function (name) {
            popover(name);
          };
          angular.forEach([
            'show',
            'hide'
          ], function (name) {
            scope[name] = function () {
              popover[name]();
            };
          });
          scope.dismiss = scope.hide;
          angular.forEach([
            'show',
            'shown',
            'hide',
            'hidden'
          ], function (name) {
            element.on(name, function (ev) {
              scope.$emit('popover-' + name, ev);
            });
          });
        });
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsSelect', [
  '$timeout',
  function ($timeout) {
    'use strict';
    var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/;
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var options = scope.$eval(attrs.bsSelect) || {};
        $timeout(function () {
          element.selectpicker(options);
          element.next().removeClass('ng-scope');
        });
        if (controller) {
          scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            if (newValue !== oldValue) {
              element.selectpicker('refresh');
            }
          });
        }
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsTabs', [
  '$parse',
  '$compile',
  '$timeout',
  function ($parse, $compile, $timeout) {
    'use strict';
    var template = '<div class="tabs">' + '<ul class="nav nav-tabs">' + '<li ng-repeat="pane in panes" ng-class="{active:pane.active}">' + '<a data-target="#{{pane.id}}" data-index="{{$index}}" data-toggle="tab">{{pane.title}}</a>' + '</li>' + '</ul>' + '<div class="tab-content" ng-transclude>' + '</div>';
    return {
      restrict: 'A',
      require: '?ngModel',
      priority: 0,
      scope: true,
      template: template,
      replace: true,
      transclude: true,
      compile: function compile(tElement, tAttrs, transclude) {
        return function postLink(scope, iElement, iAttrs, controller) {
          var getter = $parse(iAttrs.bsTabs), setter = getter.assign, value = getter(scope);
          scope.panes = [];
          var $tabs = iElement.find('ul.nav-tabs');
          var $panes = iElement.find('div.tab-content');
          var activeTab = 0, id, title, active;
          $timeout(function () {
            $panes.find('[data-title], [data-tab]').each(function (index) {
              var $this = angular.element(this);
              id = 'tab-' + scope.$id + '-' + index;
              title = $this.data('title') || $this.data('tab');
              active = !active && $this.hasClass('active');
              $this.attr('id', id).addClass('tab-pane');
              if (iAttrs.fade)
                $this.addClass('fade');
              scope.panes.push({
                id: id,
                title: title,
                content: this.innerHTML,
                active: active
              });
            });
            if (scope.panes.length && !active) {
              $panes.find('.tab-pane:first-child').addClass('active' + (iAttrs.fade ? ' in' : ''));
              scope.panes[0].active = true;
            }
          });
          if (controller) {
            iElement.on('show', function (ev) {
              var $target = $(ev.target);
              scope.$apply(function () {
                controller.$setViewValue($target.data('index'));
              });
            });
            scope.$watch(iAttrs.ngModel, function (newValue, oldValue) {
              if (angular.isUndefined(newValue))
                return;
              activeTab = newValue;
              setTimeout(function () {
                var $next = $($tabs[0].querySelectorAll('li')[newValue * 1]);
                if (!$next.hasClass('active')) {
                  $next.children('a').tab('show');
                }
              });
            });
          }
        };
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsTimepicker', [
  '$timeout',
  function ($timeout) {
    'use strict';
    var TIME_REGEXP = '((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)';
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        if (controller) {
          element.on('changeTime.timepicker', function (ev) {
            $timeout(function () {
              var val = element.val();
              controller.$setViewValue(element.val());
            });
          });
        }
        var timeRegExp = new RegExp('^' + TIME_REGEXP + '$', ['i']);
        controller.$parsers.unshift(function (viewValue) {
          if (!viewValue || timeRegExp.test(viewValue)) {
            controller.$setValidity('time', true);
            return viewValue;
          } else {
            controller.$setValidity('time', false);
            return;
          }
        });
        element.attr('data-toggle', 'timepicker');
        element.parent().addClass('bootstrap-timepicker');
        element.timepicker();
        var timepicker = element.data('timepicker');
        var component = element.siblings('[data-toggle="timepicker"]');
        if (component.length) {
          component.on('click', $.proxy(timepicker.showWidget, timepicker));
        }
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsTooltip', [
  '$parse',
  '$compile',
  function ($parse, $compile) {
    'use strict';
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs, ctrl) {
        var getter = $parse(attrs.bsTooltip), setter = getter.assign, value = getter(scope);
        scope.$watch(attrs.bsTooltip, function (newValue, oldValue) {
          if (newValue !== oldValue) {
            value = newValue;
          }
        });
        if (!!attrs.unique) {
          element.on('show', function (ev) {
            $('.tooltip.in').each(function () {
              var $this = $(this), tooltip = $this.data('tooltip');
              if (tooltip && !tooltip.$element.is(element)) {
                $this.tooltip('hide');
              }
            });
          });
        }
        element.tooltip({
          title: function () {
            return angular.isFunction(value) ? value.apply(null, arguments) : value;
          },
          html: true
        });
        var tooltip = element.data('tooltip');
        tooltip.show = function () {
          var r = $.fn.tooltip.Constructor.prototype.show.apply(this, arguments);
          this.tip().data('tooltip', this);
          return r;
        };
        scope._tooltip = function (event) {
          element.tooltip(event);
        };
        scope.hide = function () {
          element.tooltip('hide');
        };
        scope.show = function () {
          element.tooltip('show');
        };
        scope.dismiss = scope.hide;
      }
    };
  }
]);
angular.module('$strap.directives').directive('bsTypeahead', [
  '$parse',
  function ($parse) {
    'use strict';
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element, attrs, controller) {
        var getter = $parse(attrs.bsTypeahead), setter = getter.assign, value = getter(scope);
        scope.$watch(attrs.bsTypeahead, function (newValue, oldValue) {
          if (newValue !== oldValue) {
            value = newValue;
          }
        });
        element.attr('data-provide', 'typeahead');
        element.typeahead({
          source: function (query) {
            return angular.isFunction(value) ? value.apply(null, arguments) : value;
          },
          minLength: attrs.minLength || 1,
          items: attrs.items,
          updater: function (value) {
            if (controller) {
              scope.$apply(function () {
                controller.$setViewValue(value);
              });
            }
            scope.$emit('typeahead-updated', value);
            return value;
          }
        });
        var typeahead = element.data('typeahead');
        typeahead.lookup = function (ev) {
          var items;
          this.query = this.$element.val() || '';
          if (this.query.length < this.options.minLength) {
            return this.shown ? this.hide() : this;
          }
          items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source;
          return items ? this.process(items) : this;
        };
        if (attrs.minLength === '0') {
          setTimeout(function () {
            element.on('focus', function () {
              element.val().length === 0 && setTimeout(element.typeahead.bind(element, 'lookup'), 200);
            });
          });
        }
      }
    };
  }
]);
