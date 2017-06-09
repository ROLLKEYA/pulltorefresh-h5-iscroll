/*! pulltorefresh 2.0.0 @copyright dailc https://github.com/dailc/pullToRefresh-h5-iscroll */
!function(t){function o(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n={};o.m=t,o.c=n,o.i=function(t){return t},o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="https://github.com/dailc/pullToRefresh-h5-iscroll/dist/",o(o.s=14)}({0:function(t,o,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){!function(){t.uuid=function(t,o){var n,i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[];if(o=o||i.length,t)for(n=0;n<t;n++)e[n]=i[0|Math.random()*o];else{var s;for(e[8]=e[13]=e[18]=e[23]="-",e[14]="4",n=0;n<36;n++)e[n]||(s=0|16*Math.random(),e[n]=i[19==n?3&s|8:s])}return e.join("")},t.noop=function(){},t.extend=function(){var o,n,e,s,l,r,a=arguments[0]||{},c=1,h=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[c]||{},c++),"object"===(void 0===a?"undefined":i(a))||t.isFunction(a)||(a={}),c===h&&(a=this,c--);c<h;c++)if(null!=(o=arguments[c]))for(n in o)e=a[n],s=o[n],a!==s&&(u&&s&&(t.isPlainObject(s)||(l=t.isArray(s)))?(l?(l=!1,r=e&&t.isArray(e)?e:[]):r=e&&t.isPlainObject(e)?e:{},a[n]=t.extend(u,r,s)):void 0!==s&&(a[n]=s));return a},t.isFunction=function(o){return"function"===t.type(o)},t.isPlainObject=function(o){return t.isObject(o)&&!t.isWindow(o)&&Object.getPrototypeOf(o)===Object.prototype},t.isArray=Array.isArray||function(t){return t instanceof Array},t.isWindow=function(t){return null!=t&&t===t.window},t.isObject=function(o){return"object"===t.type(o)},t.type=function(t){return null==t?String(t):o[{}.toString.call(t)]||"object"},t.each=function(t,o,n){if(!t)return this;if("number"==typeof t.length)[].every.call(t,function(t,n){return o.call(t,n,t)!==!1});else for(var i in t)if(n){if(t.hasOwnProperty(i)&&o.call(t[i],i,t[i])===!1)return t}else if(o.call(t[i],i,t[i])===!1)return t;return this};var o={};t.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],function(t,n){o["[object "+n+"]"]=n.toLowerCase()}),function(){function o(o){this.os={},this.os.name="browser";var n=[function(){var t=o.match(/(Android);?[\s\/]+([\d.]+)?/);return t&&(this.os.android=!0,this.os.version=t[2],this.os.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion),this.os.name+="_Android",this.os.name+="_mobile"),this.os.android===!0},function(){var t=o.match(/(iPhone\sOS)\s([\d_]+)/);if(t)this.os.ios=this.os.iphone=!0,this.os.version=t[2].replace(/_/g,"."),this.os.name+="_iphone",this.os.name+="_mobile";else{var n=o.match(/(iPad).*OS\s([\d_]+)/);n&&(this.os.ios=this.os.ipad=!0,this.os.version=n[2].replace(/_/g,"."),this.os.name+="_iOS",this.os.name+="_mobile")}return this.os.ios===!0}];[].every.call(n,function(o){return!o.call(t)})}o.call(t,navigator.userAgent)}(),function(){function o(t){this.os=this.os||{},t.match(/EpointEJS/i)&&(this.os.ejs=!0,this.os.name+="_ejs"),t.match(/DingTalk/i)&&(this.os.dd=!0,this.os.name+="_dd")}o.call(t,navigator.userAgent)}()}(),function(){var o=!1,n=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,i=function(){};i.extend=function(t){function i(){!o&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;o=!0;var s=new this;o=!1;for(var l in t)s[l]="function"==typeof t[l]&&"function"==typeof e[l]&&n.test(t[l])?function(t,o){return function(){var n=this._super;this._super=e[t];var i=o.apply(this,arguments);return this._super=n,i}}(l,t[l]):t[l];return i.prototype=s,i.prototype.constructor=i,i.extend=this.extend,i},t.Clazz=i}()}(t.exports={})},1:function(t,o,n){"use strict";t.exports={namespace:"PullToRefreshTools.",generateGlobalObj:function(t,o,n){if(n){var i=n.split("."),e=i.length;this.getNameSpaceObj(t,i,e-1)[i[e-1]]=o}},getNameSpaceObj:function(t,o,n){for(var i=t,e=0;e<n;e++){var s=o[e];i[s]=i[s]||{},i=i[s]}return i}}},14:function(t,o,n){"use strict";var i;!function(o){var e=n(0),s=n(1),l=n(2),r="hidden",a={down:{height:75,contentdown:"下拉可以刷新",contentover:"释放立即刷新",contentrefresh:"正在刷新",contentrefreshsuccess:"刷新成功",contentrefresherror:"刷新失败",isSuccessTips:!0,callback:e.noop,tips:{colors:["d00324","e47012","9aea1c"],size:200,lineWidth:15,duration:1e3,tail_duration:2500}},up:{auto:!1,offset:100,contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",callback:e.noop},scroll:{bounceTime:500,successAnimationTime:500},element:"#pullrefresh"},c=l.PullToRefresh.extend({_initPullToRefreshTipsHook:function(t,o){this._initPocket(),this._checkHidden(t,o)},_checkHidden:function(t,o){o||this.bottomPocket&&this.bottomPocket.classList.add(r),t||this.topPocket&&this.topPocket.classList.add(r)},_pullingHook:function(t,o){t>=o?this._setCaption(!0,this.options.down.contentover):t<o&&this._setCaption(!0,this.options.down.contentdown);var n=Math.min(t/(3*o),1),i=Math.min(1,2*n);this._drawCanvasTips(i)},_pulldownLoaingAnimationHook:function(){this._drawCanvasTips(1,300),this.canvasUtilObj.startSpin(),this._setCaption(!0,this.options.down.contentrefresh)},_pulldownLoaingAnimationSuccessHook:function(t,o){this.options.down.isSuccessTips?this._setCaption(!0,o?this.options.down.contentrefreshsuccess:this.options.down.contentrefresherror):t()},_pulldownLoaingAnimationEndHook:function(){this.canvasUtilObj.stopSpin();var t=this;this._setCaption(!0,this.options.down.contentdown,!0),setTimeout(function(){t.topPocket.style.visibility="hidden"},300)},_pullupLoaingAnimationHook:function(t){this._setCaption(!1,this.options.up.contentrefresh)},_pullupLoaingAnimationSuccessHook:function(t){t?this._setCaption(!1,this.options.up.contentnomore):this._setCaption(!1,this.options.up.contentdown)},_disablePullUpHook:function(){this.bottomPocket.className="pull-bottom-pocket "+r},_enablePullUpHook:function(){this.bottomPocket.classList.remove(r),this._setCaption(!1,this.options.up.contentdown)},_drawCanvasTips:function(t,o){o=o||0,this.pullDownCanvas.style.opacity=t,this.pullDownCanvas.style.webkitTransform="rotate("+300*t+"deg) scale("+t+","+t+")";var n=this.pullDownCanvas,i=this.pullDownCanvasCtx,e=this.options.down.tips.size;i.lineWidth=this.options.down.tips.lineWidth,i.fillStyle="#"+this.options.down.tips.colors[0],i.strokeStyle="#"+this.options.down.tips.colors[0],i.stroke(),i.clearRect(0,0,e,e),n.style.display="none",n.offsetHeight,n.style.display="inherit",this.canvasUtilObj.drawArcedArrow(i,e/2+.5,e/2,e/4,0*Math.PI,5/3*Math.PI*t,!1,1,2,.7853981633974483,25,this.options.down.tips.lineWidth,this.options.down.tips.lineWidth)},_createTopPocket:function(){var t=this,o=document.createElement("div");return o.style.visibility="hidden",o.className="pull-top-pocket",o.innerHTML='<div class="pull-loading-icon"><div class="pull-top-canvas"><canvas id="'+e.uuid()+'" class="pull-down-loading-canvas" width="'+t.options.down.tips.size+'" height="'+t.options.down.tips.size+'"></canvas></div></div><div class="pull-caption">'+this.options.down.contentdown+"</div>",o},_createBottomPocket:function(){var t=document.createElement("div");return t.style.visibility="hidden",t.className="pull-bottom-pocket",t.innerHTML='<div class="pull-block"><div class="pull-loading-icon"></div><div class="pull-caption">'+this.options.up.contentdown+"</div></div>",t},_initPocket:function(){var t=this;this.wrapper.classList.add("pulltorefresh-type3");var o=this.options;if(o.down&&o.down.hasOwnProperty("callback")){this.topPocket||(this.topPocket=this._createTopPocket(),this.scrollWrap.insertBefore(this.topPocket,this.scrollWrap.firstChild)),t.pullDownCanvasContainer=t.topPocket.querySelector(".pull-loading-icon"),t.pullDownCanvas=t.topPocket.querySelector(".pull-down-loading-canvas"),t.pullDownCanvasCtx=t.pullDownCanvas.getContext("2d");var n=t.options.down.tips.colors[0];t.options.down.tips.colors=t.options.down.tips.colors.map(function(t){return t==n?t:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}),t.canvasUtilObj=t.canvasUtils(),t.canvasUtilObj.init(t.pullDownCanvas,t.options.down.tips),t._drawCanvasTips(1)}o.up&&o.up.hasOwnProperty("callback")&&(this.bottomPocket||(this.bottomPocket=this._createBottomPocket(),this.scrollWrap.appendChild(this.bottomPocket)));var t=this;setTimeout(function(){t.topPocket&&t._setOffsetY(74,function(){t.topPocket.style.visibility="hidden",t.bottomPocket&&(t.bottomPocket.style.visibility="visible")})},0)},_setCaption:function(t,o,n){if(!this.loading){var i;i=t?this.topPocket:this.bottomPocket;var e=i.querySelector(".pull-caption"),s=this.options,l=this;i&&(n?setTimeout(function(){i.className="pull-top-pocket ",e.innerHTML=s.down.contentdown,i.style.visibility="hidden"},100):o!==this.lastTitle&&(i.style.visibility="visible",e.innerHTML=o,t?o===s.down.contentrefresh?i.className="pull-top-pocket loading":o===s.down.contentover?i.className="pull-top-pocket flip":o===s.down.contentdown?i.className="pull-top-pocket ":o===s.down.contentrefreshsuccess?(e.innerHTML=l.successTips||o,i.className="pull-top-pocket success"):o===s.down.contentrefresherror&&(i.className="pull-top-pocket error"):o===s.up.contentrefresh?(i.classList.remove("nomore"),i.classList.add("loading")):(i.classList.remove("loading"),o===s.up.contentnomore?i.classList.add("nomore"):i.classList.remove("nomore")),this.lastTitle=o))}},canvasUtils:function(){function t(t,o,n,i){return n*t/i+o}function o(t,o,n,i){return(t/=i/2)<1?n/2*t*t+o:-n/2*(--t*(t-2)-1)+o}function n(t,o,n){var i=Math.min(o,n),e=Math.max(o,n);return t<i?i:t>e?i:t}var i=null,s=null,l=200,r=15,a=0,c=0,h=0,u=0,p=0,d=180,f=Math.PI/180,m=1e3,v=2500,w=["35ad0e","d8ad44","d00324"],b=null,g=function(t,o,n,i,e,s,l,r){"string"==typeof o&&(o=parseInt(o)),"string"==typeof n&&(n=parseInt(n)),"string"==typeof i&&(i=parseInt(i)),"string"==typeof e&&(e=parseInt(e)),"string"==typeof s&&(s=parseInt(s)),"string"==typeof l&&(l=parseInt(l));Math.PI;switch(t.save(),t.beginPath(),t.moveTo(o,n),t.lineTo(i,e),t.lineTo(s,l),r){case 0:var a=Math.sqrt((s-o)*(s-o)+(l-n)*(l-n));t.arcTo(i,e,o,n,.55*a),t.fill();break;case 1:t.beginPath(),t.moveTo(o,n),t.lineTo(i,e),t.lineTo(s,l),t.lineTo(o,n),t.fill();break;case 2:t.stroke();break;case 3:var c=(o+i+s)/3,h=(n+e+l)/3;t.quadraticCurveTo(c,h,o,n),t.fill();break;case 4:var u,p,d,f,a,m=5;if(s==o)a=l-n,u=(i+o)/2,d=(i+o)/2,p=e+a/m,f=e-a/m;else{a=Math.sqrt((s-o)*(s-o)+(l-n)*(l-n));var v=(o+s)/2,w=(n+l)/2,b=(v+i)/2,g=(w+e)/2,y=(l-n)/(s-o),P=a/(2*Math.sqrt(y*y+1))/m,_=y*P;u=b-P,p=g-_,d=b+P,f=g+_}t.bezierCurveTo(u,p,d,f,o,n),t.fill()}t.restore()},y=function(t,o,n,i,e,s,l,r,a,c,h,u,p){r=void 0!==r?r:3,a=void 0!==a?a:1,c=void 0!==c?c:Math.PI/8,u=u||1,p=p||10,h=void 0!==h?h:10,t.save(),t.lineWidth=u,t.beginPath(),t.arc(o,n,i,e,s,l),t.stroke();var d,f,m,v,w;1&a&&(d=Math.cos(e)*i+o,f=Math.sin(e)*i+n,m=Math.atan2(o-d,f-n),l?(v=d+10*Math.cos(m),w=f+10*Math.sin(m)):(v=d-10*Math.cos(m),w=f-10*Math.sin(m)),P(t,d,f,v,w,r,2,c,h)),2&a&&(d=Math.cos(s)*i+o,f=Math.sin(s)*i+n,m=Math.atan2(o-d,f-n),l?(v=d-10*Math.cos(m),w=f-10*Math.sin(m)):(v=d+10*Math.cos(m),w=f+10*Math.sin(m)),P(t,d-p*Math.sin(s),f+p*Math.cos(s),v-p*Math.sin(s),w+p*Math.cos(s),r,2,c,h)),t.restore()},P=function(t,o,n,i,e,s,l,r,a){"string"==typeof o&&(o=parseInt(o)),"string"==typeof n&&(n=parseInt(n)),"string"==typeof i&&(i=parseInt(i)),"string"==typeof e&&(e=parseInt(e)),s=void 0!==s?s:3,l=void 0!==l?l:1,r=void 0!==r?r:Math.PI/8,a=void 0!==a?a:10;var c,h,u,p,d="function"!=typeof s?g:s,f=Math.sqrt((i-o)*(i-o)+(e-n)*(e-n)),m=(f-a/3)/f;1&l?(c=Math.round(o+(i-o)*m),h=Math.round(n+(e-n)*m)):(c=i,h=e),2&l?(u=o+(i-o)*(1-m),p=n+(e-n)*(1-m)):(u=o,p=n),t.beginPath(),t.moveTo(u,p),t.lineTo(c,h),t.stroke();var v=Math.atan2(e-n,i-o),w=Math.abs(a/Math.cos(r));if(1&l){var b=v+Math.PI+r,y=i+Math.cos(b)*w,P=e+Math.sin(b)*w,_=v+Math.PI-r,k=i+Math.cos(_)*w,T=e+Math.sin(_)*w;d(t,y,P,i,e,k,T,s)}if(2&l){var b=v+r,y=o+Math.cos(b)*w,P=n+Math.sin(b)*w,_=v-r,k=o+Math.cos(_)*w,T=n+Math.sin(_)*w;d(t,y,P,o,n,k,T,s)}},_=function(o,i){var e=o%i;e<h&&w.push(w.shift());var s=w[1],l=w[2],r=n(t(e,s.r,l.r-s.r,i),s.r,l.r),a=n(t(e,s.g,l.g-s.g,i),s.g,l.g),c=n(t(e,s.b,l.b-s.b,i),s.b,l.b);return h=e,"rgb("+parseInt(r)+","+parseInt(a)+","+parseInt(c)+")"},k=function n(e){var h=e||(new Date).getTime();c||(c=h),a=h-c,u=o((a+v/2)%v,0,m,v),p=t((a+u)%m,0,360,m),d=20+Math.abs(t((a+v/2)%v,-300,600,v)),s.lineWidth=r,s.lineCap="round",s.strokeStyle=_(a,m),s.clearRect(0,0,l,l),i.style.display="none",i.offsetHeight,i.style.display="inherit",s.beginPath(),s.arc(l/2,l/2,l/4,parseInt(p-d)%360*f,parseInt(p)%360*f,!1),s.stroke(),b=requestAnimationFrame(n)},T=function(){c=0,h=0,!b&&(b=requestAnimationFrame(k))},S=function(){b&&cancelAnimationFrame(b),b=null};return{init:function(t,o){i=t,s=i.getContext("2d");var o=e.extend(!0,{},o);w=o.colors||w,m=o.duration,v=o.tail_duration,l=o.size,r=o.lineWidth},drawArcedArrow:y,startSpin:T,stopSpin:S}}});o.initPullToRefresh=function(t,o){return"string"==typeof t||t instanceof HTMLElement||(o=t,t=o.element),o=e.extend(!0,{},a,o),l.initPullToRefresh(c,t,o)},void 0!==t&&t.exports?t.exports=o:void 0!==(i=function(){return o}.call(o,n,o,t))&&(t.exports=i),s.generateGlobalObj(window,o,s.namespace+"skin.type3")}({})},2:function(t,o,n){"use strict";var i,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(o){var s=n(0),l=n(1),r={down:{height:75,callback:s.noop},up:{offset:100,isFastLoading:!1,callback:s.noop},scroll:{bounceTime:500,successAnimationTime:500,eventPassthrough:!1},element:"#pullrefresh"},a=s.Clazz.extend({init:function(t,o){"object"!==(void 0===t?"undefined":e(t))||t instanceof HTMLElement?this.element=t:(o=t,this.element=o.element),this.element=this.element||r.element,"string"==typeof this.element&&(this.element=document.querySelector(this.element)),this.options=s.extend(!0,{},r,o),this.wrapper=this.element,this.scrollWrap=this.element.children[0],this.scroller=new IScroll(this.element,{probeType:2,tap:!0,mouseWheel:!0,eventPassthrough:this.options.scroll.eventPassthrough}),this._initParams(),this._initPullToRefreshTipsHook&&this._initPullToRefreshTipsHook(this.enablePullDown,this.enablePullUp),this._initEvent()},_initParams:function(){this.enablePullDown=!!this.options.down,this.enablePullUp=!!this.options.up,this.finished=!1,this.offsetY=this.offsetY||0,this.topHeiht=this.options.down&&this.options.down.height?this.options.down.height:0},_initEvent:function(){var t=this;this.scroller.on("scrollStart",function(){t._handleScrollStart(this)}),this.scroller.on("scroll",function(){t._handleScroll(this)}),this.scroller.on("touchEnd",function(){t._handleTouchEnd(this)});var t=this;this.scroller.on("scrollEnd",function(){t._handleScrollEnd(this)}),this.scroller.on("refresh",function(){t.scroller.hasVerticalScroll=!0,0==t.scroller.maxScrollY&&(t.scroller.maxScrollY=-t.offsetY)}),this.refresh()},_handleScrollStart:function(t){this.allowPullDownLoading=!1,this.startY=t.y,this.startX=t.x,this.lastY=t.y;var o=(new Date).getTime();this.startTime=o,this.pulldown=!1},_handleScroll:function(t){if(!this._isFastScroll()){var o=Math.abs(t.x-this.startX),n=Math.abs(t.y-this.startY),i=t.y+this.offsetY;if(this.lastY=t.y,!(Math.abs(t.distX)>Math.abs(t.distY))&&n>5&&n>o&&!this.loading&&!this.allowPullDownSuccessLoading){var e=this.options.down&&this.options.down.height?this.options.down.height:0;this.enablePullDown&&(!this.pulldown&&!this.loading&&t.directionY==-1&&t.y+this.offsetY>=0&&(this.pulldown=!0),t.y+this.offsetY>=e&&t.directionY==-1?this.loading||(this.allowPullDownLoading=!0):t.y+this.offsetY<e&&t.y+this.offsetY>=0&&1===t.directionY&&(this.allowPullDownLoading=!1),this.pulldown&&this._pullingHook&&this._pullingHook(i,e)),this.enablePullUp&&this.options.up&&t.y-this.offsetY-this.options.up.offset<=this.scroller.maxScrollY-e&&1==t.directionY&&this._scrollbottom()}}},_setOffsetY:function(t,o){var n=this;n.offsetY=t||0,n.scroller.minScrollY=-t,n.scroller.scrollTo(0,-n.offsetY),o&&o()},_handleTouchEnd:function(t){var o=this;o.allowPullDownLoading?o.pulldownLoading(void 0,o.options.scroll.bounceTime):o.enablePullDown&&o._pulldownLoaingAnimationEndHook&&o._pulldownLoaingAnimationEndHook()},_handleScrollEnd:function(t){var o=this,n=o.options.down&&o.options.down.height?o.options.down.height:0;o._scrollEndHook&&o._scrollEndHook(),o.enablePullUp&&o.options.up&&!o.loading&&o.options.up.isFastLoading&&t.y-o.offsetY-o.options.up.offset<=o.scroller.maxScrollY-n&&o._scrollbottom()},_isFastScroll:function(){return!((new Date).getTime()-this.startTime>100)},_scrollbottom:function(){this.enablePullUp&&!this.finished&&(this.loading||(this.pulldown=!1,this.pullupLoading()))},_endPulldownToRefresh:function(t){var o=this;if(this.options.down&&o.loading){o.allowPullDownLoading=!1,o.loading=!1,o.allowPullDownSuccessLoading=!0;var n;o._pulldownLoaingAnimationSuccessHook&&o._pulldownLoaingAnimationSuccessHook(function(){n&&clearTimeout(n),o.allowPullDownSuccessLoading=!1,o._checkPullDownLoadingEnd()},t),n=setTimeout(function(){n&&clearTimeout(n),o.allowPullDownSuccessLoading=!1,o._checkPullDownLoadingEnd()},o.options.scroll.successAnimationTime)}},_checkPullDownLoadingEnd:function(){var t=this;t.allowPullDownSuccessLoading||(t._pulldownLoaingAnimationEndHook&&t._pulldownLoaingAnimationEndHook(),t.scroller.scrollTo(0,-t.offsetY,t.options.scroll.bounceTime),setTimeout(function(){t.scroller.minScrollY=-t.offsetY,t.scroller.refresh()},t.options.scroll.bounceTime))},_endPullupToRefresh:function(t){var o=this;o.pulldown||(o.loading=!1,o.scroller.refresh(),t&&(o.finished=!0),o._pullupLoaingAnimationSuccessHook&&o._pullupLoaingAnimationSuccessHook(t))},pulldownLoading:function(t,o){var n=this;this.options.down&&(n.loading||(void 0===t&&(t=this.options.down.height-this.offsetY),n.scroller.minScrollY=n.topHeiht-n.offsetY,setTimeout(function(){n.scroller.scrollTo(0,t,o||0),n._pulldownLoaingAnimationHook&&n._pulldownLoaingAnimationHook(),n.loading=!0;var i=n.options.down.callback;i&&i.call(n)},0)))},pullupLoading:function(t,o,n){if(this.enablePullUp&&this.options.up){if(this.finished&&this.refresh(!0),o=o||0,this.loading)return;this.scroller.scrollTo(o,this.scroller.maxScrollY,n),this.pulldown=!1,this._pullupLoaingAnimationHook&&this._pullupLoaingAnimationHook(!1),this.loading=!0,t=t||this.options.up.callback,t&&t.call(this)}},disablePullupToRefresh:function(){this.enablePullUp=!1,this._disablePullUpHook&&this._disablePullUpHook()},enablePullupToRefresh:function(){this.enablePullUp=!0,this._enablePullUpHook&&this._enablePullUpHook()},refresh:function(t){t&&this.finished&&(this.enablePullupToRefresh(),this.finished=!1),this.scroller.refresh()},resetLoadingState:function(t,o,n){t&&this._endPulldownToRefresh(n),o?this._endPullupToRefresh(!0):this._endPullupToRefresh(!1)},endPullDownToRefresh:function(t){null==t&&(t=!0),this.resetLoadingState(!0,!1,t)},endPullUpToRefresh:function(t,o){null==o&&(o=!0),this.resetLoadingState(!1,t,o)},setSuccessTips:function(t){this.successTips=t}});o.PullToRefresh=a,o.initPullToRefresh=function(t,o,n){var i=null;n=s.extend(!0,{},r,n),"string"==typeof o||o instanceof HTMLElement||(n=o,o=n.element);var e=o;return e=e||r.element,"string"==typeof e&&(e=document.querySelector(e)),e?(i=new t(e,n),n.down&&n.down.auto?i.pulldownLoading():n.up&&n.up.auto&&i.pullupLoading(),i):(console.error("错误,下拉刷新容器为空!"),i)},void 0!==t&&t.exports?t.exports=o:void 0!==(i=function(){return o}.call(o,n,o,t))&&(t.exports=i),l.generateGlobalObj(window,o,l.namespace+"core")}({})}});