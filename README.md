## H5下拉刷新皮肤系列
基于`IScroll`的全套下拉刷新皮肤。各式各样的皮肤。以及下拉刷新实现基类供自定义UI实现。

### Effect(效果)

* 效果1
![](https://dailc.github.io/pullToRefresh-h5-iscroll/staticresource/img/effect1.gif)

* 效果2
![](https://dailc.github.io/pullToRefresh-h5-iscroll/staticresource/img/effect2.gif)

* 效果3
![](https://dailc.github.io/pullToRefresh-h5-iscroll/staticresource/img/effect3.gif)

* 效果4
![](https://dailc.github.io/pullToRefresh-h5-iscroll/staticresource/img/effect4.gif)

* 效果5
![](https://dailc.github.io/pullToRefresh-h5-iscroll/staticresource/img/effect5.gif)

* 效果6
![](https://dailc.github.io/pullToRefresh-h5-iscroll/staticresource/img/effect6.gif)

* 示例页面
[下拉刷新皮肤示例](https://dailc.github.io/pullToRefresh-h5-iscroll/examples/html/)

### How To Use(使用)

* Require(引入脚本)

	```
	<script type="text/javascript" src="../../../dist/pulltorefresh.iscroll.probe.js" ></script>
	<script type="text/javascript" src="../../../dist/pulltorefresh.skin.default.js"></script>
	```
	可以将`Skin.Default`替换为对应的皮肤
	
* HTML Structure(页面结构)

	```
	<div class="×××-scroll-wrapper">
	    <div class="×××-scroll">
	        ...
	    </div>
	</div>
	```
	譬如，如果基于mui的，就可以是`mui-scroller-wrapper`，其它的自己定义对应scroll样式即可

* JS Initialization(JS初始化)
	
	```
	var pullToRefreshObj = PullToRefreshTools.skin.default.initPullToRefresh({
	    //这里用默认设置
	    element: '#pullrefresh',
	    //down为null表示不要下拉刷新    
	    down: {
	        callback: pullDownRefreshCallback,
	        //是否显示成功动画
	        isSuccessTips: true,
	    },
	    //up为null为不要上拉
	    //上拉有关
	    up: {
	        //是否自动上拉加载-初始化是是否自动
	        auto: true,
	
	        callback: pullUpRefreshCallback
	    },
	    scroll: {
	        bounceTime: 500,
	        //回弹动画时间
	        //下拉刷新和上拉加载成功动画的时间
	        successAnimationTime: 500
	    },
	});
	```
	具体可以将`PullToRefreshTools.skin.default`换为其它皮肤，其它更多操作参考示例

* API(暴露出来的方法)

	```
	* finished //这是一个属性，用来控制当前上拉加载是否可用
	* refresh() //重置状态。譬如上拉加载关闭后需要手动refresh重置finished状态
	* pulldownLoading() //主动触发一个下拉刷新的动画(同时会触发下拉回调)
	* pullupLoading() //主动触发一个上拉加载的动画(同时会触发上拉回调)
	* endPullDownToRefresh() //关闭下拉刷新动画，重置状态
	* endPullUpToRefresh(finished) //关闭上拉加载动画，重置状态，如果finished，则不允许在上拉，除非再次refresh()
	```
	关于更多的使用说明(如自定义UI类的实现，请参考最后的更多说明)
	
* (Notice)注意
	* 如果使用了非mui外的皮肤，需要引入样式文件`pulltorefresh.skin.css`
	* 另外，也支持`require`方式引入，不过webpack打包出来的dist中，就算`require`引入了，也请通过全局变量方式来使用，如`PullToRefreshSkinDefault`

* (Global Variable)相应的全局变量与JS文件

	```
	IScroll //pulltorefresh.iscroll.probe.js
	PullToRefreshTools.core //pulltorefresh.core.js
	PullToRefreshTools.skin.defaults //pulltorefresh.skin.default.js 需要和关键字区分
	PullToRefreshTools.skin.type1 //pulltorefresh.skin.type1.js
	PullToRefreshTools.skin.type2 //pulltorefresh.skin.type2.js
	PullToRefreshTools.skin.type3 //pulltorefresh.skin.type3.js
	PullToRefreshTools.skin.type4 //pulltorefresh.skin.type4.js
	PullToRefreshTools.skin.muidefault //pulltorefresh.skin.muidefault.js
	PullToRefreshTools.skin.muitype1 //pulltorefresh.skin.muitype1.js
	PullToRefreshTools.skin.muitype2 //pulltorefresh.skin.muitype2.js
	PullToRefreshTools.skin.muitype3 //pulltorefresh.skin.muitype3.js
	PullToRefreshTools.skin.natives	//pulltorefresh.skin.native.js 需要和保留字区分
	PullToRefreshTools.bizlogic	//pulltorefresh.bizlogic.impl.js
	```
	

### 关于
除了基于mui的默认皮肤外，其它皮肤都是基于`IScroll5`的，所以打包出来后文件都要大很多(不过可以脱离mui使用)。

另外需要注意的是，其中基于`mui.js`的几个皮肤，里面的`mui.js`是改造过的(因为原版的mui不支持严格模式，babel编译报错的)，实际使用中可以换为自己的mui.js

另外，后续会定期更新皮肤

### 更多说明

* [examples目录结构说明](https://github.com/dailc/pullToRefresh-h5-iscroll/tree/master/examples/html)
* [源码使用说明](https://github.com/dailc/pullToRefresh-h5-iscroll/tree/master/src/)

#### 相关博文

* [H5下拉刷新,多种皮肤，便于拓展！](http://www.jianshu.com/p/ef3183adb896)

## 更新日志

* 20170410
	* 版本`1.0.0`
	* 增加cmd引入支持
	* 修复IScroll内部`maxScrollY`引起的冲突
* 20170518
	* 修复关闭上拉加载后，重复下拉刷新报错的bug
* 20170526
	* 版本`2.0.0`
	* 从源码层面重新修改命名空间
	* 后续命名层面不会再有大的改动
* 20170601
	* 内部源码优化
	* 不影响以前的使用

## License (MIT)