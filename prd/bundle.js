/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _home = __webpack_require__(4);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _search = __webpack_require__(8);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _detail = __webpack_require__(11);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _circle = __webpack_require__(13);
	
	var _circle2 = _interopRequireDefault(_circle);
	
	var _Cart = __webpack_require__(16);
	
	var _Cart2 = _interopRequireDefault(_Cart);
	
	var _my = __webpack_require__(18);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _list = __webpack_require__(20);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var layout = __webpack_require__(22);
	var common = __webpack_require__(6);
	common.render(layout);
	
	__webpack_require__(23);
	
	//var common=require('./scripts/utils/common.js');
	//var html=require('./scripts/tpls/index.html');
	//common.render(html);
	//require('./scripts/views/index.js');
	
	
	//components 单文件组件实现路由
	
	///import header from "./scripts/components/header.vue";//=========
	
	//vue-router2
	// 2. 定义路由
	// 每个路由应该映射一个组件。 其中"component" 可以是 通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
	var routes = [{
	    path: '/',
	    component: _index2.default,
	    children: [{
	        path: '/',
	        component: _home2.default
	    }, {
	        path: '/search',
	        component: _search2.default
	    }, {
	        path: '/circle',
	        component: _circle2.default
	    }, {
	        path: '/Cart',
	        component: _Cart2.default
	    }, {
	        path: '/my',
	        component: _my2.default
	    }]
	}, {
	    path: '/detail/:id',
	    component: _detail2.default
	}, {
	    path: '/list/:id',
	    component: _list2.default
	}];
	// 3. 创建 router 实例，然后传 `routes` 配置
	// 你还可以传别的配置参数, 不过先这么简单着吧。
	var router = new VueRouter({
	    routes: routes // （缩写）相当于 routes: routes
	});
	// 4. 创建和挂载根实例。
	// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
	var app = new Vue({
	    router: router
	}).$mount('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	module.exports = {
		data: function () {
			return {
				navIndex: 0,
	
				footerNav: [{
					router: '/',
					ico: '&#xe62e;',
					title: '柚子街'
				}, {
					router: '/search',
					ico: '&#x343d;',
					title: '品牌团'
				}, {
					router: '/circle',
					ico: '&#xe674;',
					title: '她她圈'
				}, {
					router: '/Cart',
					ico: '&#xe63f;',
					title: '购物车'
				}, {
					router: '/my',
					ico: '&#xe62f;',
					title: '我'
				}]
			};
		},
		methods: {
			changeNav: function (index) {
				this.navIndex = index;
				console.log(this.navIndex);
				// 获取当前页面的footer的名称，添加到标题上	
				var navName = document.getElementsByClassName("navName")[0];
				navName.innerHTML = this.footerNav[this.navIndex].title;
				//		    	var header=document.getElementsByTagName("header")[0];
				//		    	var that=this;
				//		    	if(that.navIndex==2){
				//		   			str='<ul><li class="yo-ico">&#xe75e;</li><li><nav><ol><li @click="changeTab(index)" :class="{active:index==navIndex}"><p>我的圈</p></li><li @click="changeTab(index)" :class="{active:index==navIndex}"><p>更多圈</p></li></ol></nav></li><li class="yo-ico">&#xe602;</li></ul>';
				//		   			console.log(this.nav.item);
				//		   			header.innerHTML=str;
				//		    	}else{
				//		    		header.innerHTML='<ul><li><i class="navName">'+that.footerNav[this.navIndex].title+'</i></li><li><span>签到</span><span class="yo-ico">&#xe615;</span></li></ul>'
				//		    	}
			}
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-index",
	    attrs: {
	      "id": "m-index"
	    }
	  }, [_vm._m(0), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('footer', [_c('ul', _vm._l((_vm.footerNav), function(fn, i) {
	    return _c('li', {
	      class: {
	        active: i == _vm.navIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.changeNav(i)
	        }
	      }
	    }, [_c('router-link', {
	      attrs: {
	        "to": fn.router
	      }
	    }, [_c('i', {
	      staticClass: "yo-ico",
	      domProps: {
	        "innerHTML": _vm._s(fn.ico)
	      }
	    }), _vm._v(" "), _c('b', [_vm._v(_vm._s(fn.title))])])], 1)
	  }))])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', [_c('ul', [_c('li', [_c('i', {
	    staticClass: "navName"
	  }, [_vm._v("柚子街")])]), _vm._v(" "), _c('li', [_c('span', [_vm._v("签到")]), _vm._v(" "), _c('span', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")])])])])
	}]}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var common = __webpack_require__(6);
	
	module.exports = {
		data: function () {
			return {
				banner: [{ "bannerImg": "/images/banner01.gif" }, { "bannerImg": "/images/banner02.gif" }, { "bannerImg": "/images/banner03.gif" }],
				list: []
			};
		},
		mounted: function () {
			fetch('/api/list').then(response => response.json()).then(res => {
				var that = this;
	
				this.list = res;
	
				common.isAllLoaded('#index-scroll .many', function () {
					common.scroll(that);
				});
			}).catch(e => console.log("Oops,error", e));
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	// var name = 'xxx';
	// module.exports = name;
	//let name='yyyy';
	//export default name;
	var common = {
	    render: function render(str) {
	        var body = document.body;
	        body.innerHTML = str + body.innerHTML;
	    },
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback();
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	
	    scroll: function scroll(that) {
	        var mySwiper = new Swiper('.swiper-container', {
	            effect: 'coverflow',
	            autoplay: 3000, //可选选项，自动滑动
	            loop: true
	        });
	        //++++++++++++++++++++
	        var myScroll = new IScroll('#index-scroll', {
	            probeType: 3,
	            mouseWheel: true
	        });
	
	        var scrollHeight = 35;
	
	        myScroll.scrollBy(0, -scrollHeight);
	
	        var head = $('.head img'),
	            topImgHasClass = head.hasClass('up');
	        var foot = $('.foot img'),
	            bottomImgHasClass = head.hasClass('down');
	        myScroll.on('scroll', function () {
	            var y = this.y,
	                maxY = this.maxScrollY - y;
	            if (y >= 0) {
	                !topImgHasClass && head.addClass('up');
	                return '';
	            }
	            if (maxY >= 0) {
	                !bottomImgHasClass && foot.addClass('down');
	                return '';
	            }
	        });
	
	        myScroll.on('scrollEnd', function () {
	            if (this.y >= -scrollHeight && this.y < 0) {
	                myScroll.scrollTo(0, -scrollHeight);
	                head.removeClass('up');
	            } else if (this.y >= 0) {
	                head.attr('src', '/images/ajax-loader.gif');
	                // TODO ajax下拉刷新数据
	
	                fetch('/api/more').then(function (response) {
	                    return response.json();
	                }).then(function (res) {
	                    that.list = that.list.concat(res);
	
	                    myScroll.scrollTo(0, -scrollHeight);
	                    head.removeClass('up');
	                    head.attr('src', '/images/arrow.png');
	                });
	            }
	
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -scrollHeight && maxY < 0) {
	                var self = this;
	                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
	                foot.removeClass('down');
	            } else if (maxY >= 0) {
	                foot.attr('src', '/images/ajax-loader.gif');
	                // TODO ajax上拉加载数据
	                var self = this;
	
	                fetch('/api/more').then(function (response) {
	                    return response.json();
	                }).then(function (res) {
	                    //为什么res返回之后请求不到？？？？？？？------原因concat在数组后面追加之前数组里面多加了数组，导致追加后只是再追加新数组而不是合并，导致遍历不到
	                    that.list = that.list.concat(res);
	
	                    myScroll.refresh();
	                    myScroll.scrollTo(0, self.y + scrollHeight);
	                    //myScroll.scrollTo(0, self.maxScollY);
	                    foot.removeClass('down');
	                    foot.attr('src', '/images/arrow.png');
	                });
	            }
	        });
	    }
	};
	
	module.exports = common;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    attrs: {
	      "id": "index-scroll"
	    }
	  }, [_c('div', {
	    staticClass: "many"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "swiper-container"
	  }, [_c('div', {
	    staticClass: "swiper-wrapper"
	  }, _vm._l((_vm.banner), function(item) {
	    return _c('div', {
	      staticClass: "swiper-slide"
	    }, [_c('img', {
	      staticStyle: {
	        "width": "100%",
	        "height": "1.28rem"
	      },
	      attrs: {
	        "src": item.bannerImg
	      }
	    })])
	  }))]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('section', [_vm._m(2), _vm._v(" "), _c('ul', {
	    staticClass: "seList"
	  }, _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('router-link', {
	      attrs: {
	        "to": 'detail/' + item.id
	      }
	    }, [_c('i', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    })]), _vm._v(" "), _c('b', [_vm._v("\n\t\t\t              \t\t" + _vm._s(item.title) + "\n\t\t\t              ")])])], 1)
	  }))]), _vm._v(" "), _vm._m(3)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('nav', [_c('ul', [_c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("品牌团")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("男士")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("母婴")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("进口")])]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" "), _c('b', [_vm._v("新品")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "se-top"
	  }, [_c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" 10点上新")]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" 正品省钱")]), _vm._v(" "), _c('li', [_c('i', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _vm._v(" 全场包邮")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(9)
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	
	var common = __webpack_require__(6);
	
	module.exports = {
		data: function () {
			return {
	
				list: []
			};
		},
		mounted: function () {
			fetch('/api/list').then(response => response.json()).then(res => {
				var that = this;
	
				this.list = res;
	
				common.isAllLoaded('#index-scroll .many', function () {
					common.scroll(that);
				});
			}).catch(e => console.log("Oops,error", e));
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-search"
	  }, [_c('div', {
	    attrs: {
	      "id": "index-scroll"
	    }
	  }, [_c('div', {
	    staticClass: "many"
	  }, [_vm._m(0), _vm._v(" "), _c('section', [_c('ul', {
	    staticClass: "seList"
	  }, _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('i', [_c('img', {
	      attrs: {
	        "src": item.imgSrc
	      }
	    })]), _vm._v(" "), _c('b', [_c('router-link', {
	      attrs: {
	        "to": 'detail/' + item.id
	      }
	    }, [_vm._v("\n\t              \t\t" + _vm._s(item.title) + "\n\t              \t")])], 1)])
	  }))]), _vm._v(" "), _vm._m(1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-detail"
	  }, [_c('header', [_c('ul', [_c('li', [_c('router-link', {
	    attrs: {
	      "to": '/'
	    }
	  }, [_c('span', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _c('span', [_vm._v("关闭")])])], 1), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$route.params.id))]), _vm._v(" "), _vm._m(0)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('i', [_vm._v("分享")])])
	}]}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	
	var common = __webpack_require__(6);
	
	module.exports = {
		data: function () {
			return {
	
				list: []
			};
		},
		mounted: function () {
			fetch('/api/Ccl').then(response => response.json()).then(res => {
				var that = this;
	
				this.list = res;
	
				common.isAllLoaded('#index-scroll .many', function () {
					var mySwiper = new Swiper('.swiper-container', {
						effect: 'coverflow',
						autoplay: 3000, //可选选项，自动滑动
						loop: true
					});
					//++++++++++++++++++++
					var myScroll = new IScroll('#index-scroll', {
						probeType: 3,
						mouseWheel: true
					});
	
					var scrollHeight = 35;
	
					myScroll.scrollBy(0, -scrollHeight);
	
					var head = $('.head img'),
					    topImgHasClass = head.hasClass('up');
					var foot = $('.foot img'),
					    bottomImgHasClass = head.hasClass('down');
					myScroll.on('scroll', function () {
						var y = this.y,
						    maxY = this.maxScrollY - y;
						if (y >= 0) {
							!topImgHasClass && head.addClass('up');
							return '';
						}
						if (maxY >= 0) {
							!bottomImgHasClass && foot.addClass('down');
							return '';
						}
					});
	
					myScroll.on('scrollEnd', function () {
						if (this.y >= -scrollHeight && this.y < 0) {
							myScroll.scrollTo(0, -scrollHeight);
							head.removeClass('up');
						} else if (this.y >= 0) {
							head.attr('src', '/images/ajax-loader.gif');
							// TODO ajax下拉刷新数据
	
							fetch('/api/Ccl').then(response => response.json()).then(res => {
								that.list = that.list.concat(res);
	
								myScroll.scrollTo(0, -scrollHeight);
								head.removeClass('up');
								head.attr('src', '/images/arrow.png');
							});
						}
	
						var maxY = this.maxScrollY - this.y;
						if (maxY > -scrollHeight && maxY < 0) {
							var self = this;
							myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
							foot.removeClass('down');
						} else if (maxY >= 0) {
							foot.attr('src', '/images/ajax-loader.gif');
							// TODO ajax上拉加载数据
							var self = this;
	
							fetch('/api/Ccl').then(response => response.json()).then(res => {
								//为什么res返回之后请求不到？？？？？？？------原因concat在数组后面追加之前数组里面多加了数组，导致追加后只是再追加新数组而不是合并，导致遍历不到
								that.list = that.list.concat(res);
	
								myScroll.refresh();
								myScroll.scrollTo(0, self.y + scrollHeight);
								//myScroll.scrollTo(0, self.maxScollY);
								foot.removeClass('down');
								foot.attr('src', '/images/arrow.png');
							});
						}
					});
				});
			}).catch(e => console.log("Oops,error", e));
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-circle"
	  }, [_c('div', {
	    attrs: {
	      "id": "index-scroll"
	    }
	  }, [_c('div', {
	    staticClass: "many"
	  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('section', [_c('p', [_vm._v("她她圈精选")]), _vm._v(" "), _c('ul', {
	    staticClass: "seList"
	  }, _vm._l((_vm.list), function(item) {
	    return _c('li', [_c('router-link', {
	      attrs: {
	        "to": 'list/' + item.id
	      }
	    }, [_c('span', [_vm._v(_vm._s(item.id))]), _vm._v(" "), _c('span', _vm._l((item.imgSrc), function(itemone) {
	      return _c('i', [_c('img', {
	        attrs: {
	          "src": itemone
	        }
	      })])
	    })), _vm._v(" "), _c('span', [_c('i', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('i', [_vm._v("浏览：" + _vm._s(item.browse))])])])], 1)
	  }))]), _vm._v(" "), _vm._m(2)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "head"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("下拉刷新...")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "more"
	  }, [_c('p', [_vm._v("我的她她圈")]), _vm._v(" "), _c('div', {
	    staticClass: "manyMore"
	  }, [_vm._v("\n\t\t    \t\t加入更多圈子\n\t\t    \t")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "foot"
	  }, [_c('img', {
	    attrs: {
	      "src": "/images/arrow.png",
	      "width": "40",
	      "height": "40"
	    }
	  }), _vm._v(" "), _c('span', [_vm._v("上拉加载更多...")])])
	}]}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-Cart"
	  }, [_vm._v("\n\tqqqqqqqqq\n")])
	},staticRenderFns: []}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-my"
	  }, [_vm._v("\n\tmy\n")])
	},staticRenderFns: []}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "m-list"
	  }, [_c('header', [_c('ul', [_c('li', [_c('router-link', {
	    attrs: {
	      "to": '/'
	    }
	  }, [_c('span', {
	    staticClass: "yo-ico"
	  }, [_vm._v("")]), _c('span', [_vm._v("关闭")])])], 1), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$route.params.id))]), _vm._v(" "), _vm._m(0)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('i', [_vm._v("分享")])])
	}]}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div id=\"app\">	<router-view></router-view></div>"

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map