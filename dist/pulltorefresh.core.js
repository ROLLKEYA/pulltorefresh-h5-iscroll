/**
 * pulltorefresh-h5-iscroll - 一款基于IScroll5的H5下拉刷新实现，包括多种皮肤的实现
 * @version v3.0.0
 * @author 
 */
!function(o){!function(){o.uuid=function(o,t){var n,i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),e=[];if(t=t||i.length,o)for(n=0;n<o;n++)e[n]=i[0|Math.random()*t];else{var s;for(e[8]=e[13]=e[18]=e[23]="-",e[14]="4",n=0;n<36;n++)e[n]||(s=0|16*Math.random(),e[n]=i[19==n?3&s|8:s])}return e.join("")},o.noop=function(){},o.extend=function(){var t,n,i,e,s,l,r=arguments[0]||{},a=1,h=arguments.length,u=!1;for("boolean"==typeof r&&(u=r,r=arguments[a]||{},a++),"object"==typeof r||o.isFunction(r)||(r={}),a===h&&(r=this,a--);a<h;a++)if(null!=(t=arguments[a]))for(n in t)i=r[n],e=t[n],r!==e&&(u&&e&&(o.isPlainObject(e)||(s=o.isArray(e)))?(s?(s=!1,l=i&&o.isArray(i)?i:[]):l=i&&o.isPlainObject(i)?i:{},r[n]=o.extend(u,l,e)):void 0!==e&&(r[n]=e));return r},o.isFunction=function(t){return"function"===o.type(t)},o.isPlainObject=function(t){return o.isObject(t)&&!o.isWindow(t)&&Object.getPrototypeOf(t)===Object.prototype},o.isArray=Array.isArray||function(o){return o instanceof Array},o.isWindow=function(o){return null!=o&&o===o.window},o.isObject=function(t){return"object"===o.type(t)},o.type=function(o){return null==o?String(o):t[{}.toString.call(o)]||"object"},o.each=function(o,t,n){if(!o)return this;if("number"==typeof o.length)[].every.call(o,function(o,n){return t.call(o,n,o)!==!1});else for(var i in o)if(n){if(o.hasOwnProperty(i)&&t.call(o[i],i,o[i])===!1)return o}else if(t.call(o[i],i,o[i])===!1)return o;return this};var t={};o.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],function(o,n){t["[object "+n+"]"]=n.toLowerCase()}),function(){function t(t){this.os={},this.os.name="browser";var n=[function(){var o=t.match(/(Android);?[\s\/]+([\d.]+)?/);return o&&(this.os.android=!0,this.os.version=o[2],this.os.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion),this.os.name+="_Android",this.os.name+="_mobile"),this.os.android===!0},function(){var o=t.match(/(iPhone\sOS)\s([\d_]+)/);if(o)this.os.ios=this.os.iphone=!0,this.os.version=o[2].replace(/_/g,"."),this.os.name+="_iphone",this.os.name+="_mobile";else{var n=t.match(/(iPad).*OS\s([\d_]+)/);n&&(this.os.ios=this.os.ipad=!0,this.os.version=n[2].replace(/_/g,"."),this.os.name+="_iOS",this.os.name+="_mobile")}return this.os.ios===!0}];[].every.call(n,function(t){return!t.call(o)})}t.call(o,navigator.userAgent)}(),function(){function t(o){this.os=this.os||{};var t=o.match(/EpointEJS/i);t&&(this.os.ejs=!0,this.os.name+="_ejs");var n=o.match(/DingTalk/i);n&&(this.os.dd=!0,this.os.name+="_dd")}t.call(o,navigator.userAgent)}()}(),function(){var t=!1,n=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,i=function(){};i.extend=function(o){function i(){!t&&this.init&&this.init.apply(this,arguments)}var e=this.prototype;t=!0;var s=new this;t=!1;for(var l in o)s[l]="function"==typeof o[l]&&"function"==typeof e[l]&&n.test(o[l])?function(o,t){return function(){var n=this._super;this._super=e[o];var i=t.apply(this,arguments);return this._super=n,i}}(l,o[l]):o[l];return i.prototype=s,i.prototype.constructor=i,i.extend=this.extend,i},o.Clazz=i}(),function(){var t={generateGlobalObj:function(o,n,i){var e=[].slice.call(arguments);if("string"==typeof e[0]&&(n=e[0],o=window.PullToRefreshTools,i=e[1]),n){var s=n.split("."),l=s.length,o=t.getNameSpaceObj(o,s,l-1);o[s[l-1]]=i}},getNameSpaceObj:function(o,t,n){for(var i=o,e=0;e<n;e++){var s=t[e];i[s]=i[s]||{},i=i[s]}return i}};o.namespace=t.generateGlobalObj}(),"undefined"!=typeof module&&module.exports?module.exports=o:"function"==typeof define&&(define.amd||define.cmd)&&define(function(){return o}),window.PullToRefreshTools=o}({}),function(o,t){var n={down:{height:75,callback:t.noop},up:{offset:100,isFastLoading:!1,callback:t.noop},scroll:{bounceTime:500,successAnimationTime:500,eventPassthrough:!1},element:"#pullrefresh"},i=t.Clazz.extend({init:function(o,i){"object"!=typeof o||o instanceof HTMLElement?this.element=o:(i=o,this.element=i.element),this.element=this.element||n.element,"string"==typeof this.element&&(this.element=document.querySelector(this.element)),this.options=t.extend(!0,{},n,i),this.wrapper=this.element,this.scrollWrap=this.element.children[0],this.scroller=new IScroll(this.element,{probeType:2,tap:!1,mouseWheel:!0,eventPassthrough:this.options.scroll.eventPassthrough}),this._initParams(),this._initPullToRefreshTipsHook&&this._initPullToRefreshTipsHook(this.enablePullDown,this.enablePullUp),this._initEvent(),i.down&&i.down.auto?this.pulldownLoading():i.up&&i.up.auto&&this.pullupLoading()},_initParams:function(){this.enablePullDown=!!this.options.down,this.enablePullUp=!!this.options.up,this.finished=!1,this.offsetY=this.offsetY||0,this.topHeiht=this.options.down&&this.options.down.height?this.options.down.height:0},_initEvent:function(){var o=this;this.scroller.on("scrollStart",function(){o._handleScrollStart(this)}),this.scroller.on("scroll",function(){o._handleScroll(this)}),this.scroller.on("touchEnd",function(){o._handleTouchEnd(this)});var o=this;this.scroller.on("scrollEnd",function(){o._handleScrollEnd(this)}),this.scroller.on("refresh",function(){o.scroller.hasVerticalScroll=!0,0==o.scroller.maxScrollY&&(o.scroller.maxScrollY=-o.offsetY)}),this.refresh()},_handleScrollStart:function(o){this.allowPullDownLoading=!1,this.startY=o.y,this.startX=o.x,this.lastY=o.y;var t=(new Date).getTime();this.startTime=t,this.pulldown=!1},_handleScroll:function(o){if(!this._isFastScroll()){var t=Math.abs(o.x-this.startX),n=Math.abs(o.y-this.startY),i=o.y+this.offsetY;if(this.lastY=o.y,!(Math.abs(o.distX)>Math.abs(o.distY))&&n>5&&n>t&&!this.loading&&!this.allowPullDownSuccessLoading){var e=this.options.down&&this.options.down.height?this.options.down.height:0;this.enablePullDown&&(!this.pulldown&&!this.loading&&o.directionY==-1&&o.y+this.offsetY>=0&&(this.pulldown=!0),o.y+this.offsetY>=e&&o.directionY==-1?this.loading||(this.allowPullDownLoading=!0):o.y+this.offsetY<e&&o.y+this.offsetY>=0&&1===o.directionY&&(this.allowPullDownLoading=!1),this.pulldown&&this._pullingHook&&this._pullingHook(i,e)),this.enablePullUp&&this.options.up&&o.y-this.offsetY-this.options.up.offset<=this.scroller.maxScrollY-e&&1==o.directionY&&this._scrollbottom()}}},_setOffsetY:function(o,t){var n=this;n.offsetY=o||0,n.scroller.minScrollY=-o,n.scroller.scrollTo(0,-n.offsetY),t&&t()},_handleTouchEnd:function(o){var t=this;t.allowPullDownLoading?t.pulldownLoading(void 0,t.options.scroll.bounceTime):t.enablePullDown&&t._pulldownLoaingAnimationEndHook&&t._pulldownLoaingAnimationEndHook()},_handleScrollEnd:function(o){var t=this,n=t.options.down&&t.options.down.height?t.options.down.height:0;t._scrollEndHook&&t._scrollEndHook(),t.enablePullUp&&t.options.up&&!t.loading&&t.options.up.isFastLoading&&o.y-t.offsetY-t.options.up.offset<=t.scroller.maxScrollY-n&&t._scrollbottom()},_isFastScroll:function(){var o=!1,t=(new Date).getTime(),n=t-this.startTime;return o=!(n>100)},_scrollbottom:function(){this.enablePullUp&&!this.finished&&(this.loading||(this.pulldown=!1,this.pullupLoading()))},_endPulldownToRefresh:function(o){var t=this;if(this.options.down&&t.loading){t.allowPullDownLoading=!1,t.loading=!1,t.allowPullDownSuccessLoading=!0;var n;t._pulldownLoaingAnimationSuccessHook&&t._pulldownLoaingAnimationSuccessHook(function(){n&&clearTimeout(n),t.allowPullDownSuccessLoading=!1,t._checkPullDownLoadingEnd()},o),n=setTimeout(function(){n&&clearTimeout(n),t.allowPullDownSuccessLoading=!1,t._checkPullDownLoadingEnd()},t.options.scroll.successAnimationTime)}},_checkPullDownLoadingEnd:function(){var o=this;o.allowPullDownSuccessLoading||(o._pulldownLoaingAnimationEndHook&&o._pulldownLoaingAnimationEndHook(),o.scroller.scrollTo(0,-o.offsetY,o.options.scroll.bounceTime),setTimeout(function(){o.scroller.minScrollY=-o.offsetY,o.scroller.refresh()},o.options.scroll.bounceTime))},_endPullupToRefresh:function(o){var t=this;t.pulldown||(t.loading=!1,t.scroller.refresh(),o&&(t.finished=!0),t._pullupLoaingAnimationSuccessHook&&t._pullupLoaingAnimationSuccessHook(o))},pulldownLoading:function(o,t){var n=this;this.options.down&&(n.loading||("undefined"==typeof o&&(o=this.options.down.height-this.offsetY),n.scroller.minScrollY=n.topHeiht-n.offsetY,setTimeout(function(){n.scroller.scrollTo(0,o,t||0),n._pulldownLoaingAnimationHook&&n._pulldownLoaingAnimationHook(),n.loading=!0;var i=n.options.down.callback;i&&i.call(n)},0)))},pullupLoading:function(o,t,n){if(this.enablePullUp&&this.options.up){if(this.finished&&this.refresh(!0),t=t||0,this.loading)return;this.scroller.scrollTo(t,this.scroller.maxScrollY,n),this.pulldown=!1,this._pullupLoaingAnimationHook&&this._pullupLoaingAnimationHook(!1),this.loading=!0,o=o||this.options.up.callback,o&&o.call(this)}},disablePullupToRefresh:function(){this.enablePullUp=!1,this._disablePullUpHook&&this._disablePullUpHook()},enablePullupToRefresh:function(){this.enablePullUp=!0,this._enablePullUpHook&&this._enablePullUpHook()},refresh:function(o){o&&this.finished&&(this.enablePullupToRefresh(),this.finished=!1),this.scroller.refresh()},resetLoadingState:function(o,t,n){o&&this._endPulldownToRefresh(n),t?this._endPullupToRefresh(!0):this._endPullupToRefresh(!1)},endPullDownToRefresh:function(o){null==o&&(o=!0),this.resetLoadingState(!0,!1,o)},endPullUpToRefresh:function(o,t){null==t&&(t=!0),this.resetLoadingState(!1,o,t)},setSuccessTips:function(o){this.successTips=o}});o.PullToRefresh=i,t.namespace("core",o.PullToRefresh)}({},PullToRefreshTools);