webpackJsonp([3,7],{323:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),c=n(213),f=n(324),m=a(f),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("p",{className:m.default.warn},"您还没登录，",s.default.createElement(c.Link,{to:"/login"},"点击登录"),"！")}}]),t}(u.Component);t.default=d},324:function(e,t,n){var a=n(325);"string"==typeof a&&(a=[[e.id,a,""]]);n(271)(a,{});a.locals&&(e.exports=a.locals)},325:function(e,t,n){t=e.exports=n(270)(),t.push([e.id,".LoginWarn__warn-3cBJX{text-align:center;padding-top:.5rem;padding-bottom:.5rem}",""]),t.locals={warn:"LoginWarn__warn-3cBJX"}},326:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),c=n(327),f=a(c),m=n(284),d=a(m),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.left,a=e.right,r=e.leftClick,o=e.rightClick,l=n?"btnActive":null,i=a?"btnActive":null;return s.default.createElement(d.default,{transitionName:"down",transitionAppear:!0,transitionAppearTimeout:200,transitionEnterTimeout:200,transitionLeaveTimeout:200},s.default.createElement("header",{className:f.default.header,key:"header"},s.default.createElement("div",{className:f.default.left+" "+f.default[l],onClick:r},n),s.default.createElement("h2",{className:f.default.title},t),s.default.createElement("div",{className:f.default.right+" "+f.default[i],onClick:o},a)))}}]),t}(u.Component);t.default=p},327:function(e,t,n){var a=n(328);"string"==typeof a&&(a=[[e.id,a,""]]);n(271)(a,{});a.locals&&(e.exports=a.locals)},328:function(e,t,n){t=e.exports=n(270)(),t.push([e.id,".header__header-P1JXb{height:.4rem;line-height:.4rem;background-color:#383b45;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center}.header__header-P1JXb .iconfont{color:#383b45}.header__left-1LJ0R,.header__right-OV-TJ{width:.4rem;height:.4rem;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.header__btnActive-1M7qR{background-color:#66b32f}.header__title-2UExb{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}",""]),t.locals={header:"header__header-P1JXb",left:"header__left-1LJ0R",right:"header__right-OV-TJ",btnActive:"header__btnActive-1M7qR",title:"header__title-2UExb"}},341:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),c=n(213),f=n(323),m=a(f),d=n(326),p=a(d),_=n(267),h=a(_),b=n(342),y=a(b),v=n(346),g=a(v),C=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"clickHandler",value:function(){var e=confirm("确定退出登录？");e===!0&&(localStorage.clear(),c.hashHistory.push("/my"))}},{key:"render",value:function(){var e=localStorage.getItem("accesstoken"),t=localStorage.getItem("loginname"),n=e?s.default.createElement("i",{className:"iconfont icon-tuichu"}):null;return s.default.createElement("div",null,s.default.createElement("div",{className:g.default.headerContainer},s.default.createElement(p.default,{title:"个人中心",right:n,rightClick:this.clickHandler})),s.default.createElement("div",{className:g.default.content},e?s.default.createElement(y.default,{loginname:t}):s.default.createElement(m.default,null)),s.default.createElement(h.default,{index:"3"}))}}]),t}(u.Component);t.default=C},342:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),c=r(s),f=n(166),m=n(213),d=n(343),p=a(d),_=n(344),h=r(_),b=n(279),y=a(b),v=n(281),g=r(v),C=n(284),w=r(C),E=n(293),x=r(E),k="https://cnodejs.org/api/v1/",O=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={topicClass:"active",replayClass:null,listData:[],show:!0,msg:"正在加载中！"},n.handleClickTopic=n.handleClickTopic.bind(n),n.handleClickReplay=n.handleClickReplay.bind(n),n}return i(t,e),u(t,[{key:"getUserData",value:function(e,t){var n=this;x.default.get(k+"user/"+t).then(function(t){e(t.data.data),n.setState({show:!1})}).catch(function(e){console.log(e),n.setState({msg:"加载失败！"})})}},{key:"handleClickTopic",value:function(){var e=this.props.userData.recent_topics;this.setState({topicClass:"active",replayClass:null,listData:e})}},{key:"handleClickReplay",value:function(){var e=this.props.userData.recent_replies;this.setState({topicClass:null,replayClass:"active",listData:e})}},{key:"componentWillMount",value:function(){var e=this.props,t=e.loginname,n=e.renderUser;n({}),this.getUserData(n,t)}},{key:"componentWillReceiveProps",value:function(e){var t=e.userData.recent_topics;this.setState({listData:t})}},{key:"render",value:function(){var e=this.props.userData,t=e.loginname,n=e.avatar_url,a=e.create_at,r=e.score;return c.default.createElement("div",null,this.state.show?c.default.createElement(g.default,null):c.default.createElement(w.default,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},c.default.createElement("div",{key:"userCommon"},c.default.createElement("div",{className:h.default.userMsg},c.default.createElement("img",{src:n,alt:"avatar",className:h.default.avatar}),c.default.createElement("h2",{className:h.default.loginname},t),c.default.createElement("div",{className:h.default.userData},c.default.createElement("span",{className:h.default.score},"积分：",r),c.default.createElement("span",null,"注册于",a?a.slice(0,10):null))),c.default.createElement("ul",{className:h.default.menu},c.default.createElement("li",{className:h.default[this.state.topicClass],onClick:this.handleClickTopic},"主题"),c.default.createElement("li",{className:h.default[this.state.replayClass],onClick:this.handleClickReplay},"回复")),c.default.createElement("ul",{className:h.default.list},c.default.createElement(w.default,{transitionName:"fade-slide",transitionEnterTimeout:300,transitionLeaveTimeout:300},this.state.listData?this.state.listData.map(function(e,t){var n=e.title,a=e.last_reply_at,r=e.id;return c.default.createElement("li",{key:t,className:h.default.item},c.default.createElement(m.Link,{to:"/topic/"+r},c.default.createElement("p",{className:h.default.title},n),c.default.createElement("p",{className:h.default.time},y.formatTime(a))))}):c.default.createElement(Msg,{msg:"暂无内容！"}))))))}}]),t}(s.Component),j=function(e){return{userData:e.myState.userData}},P=function(e){return{renderUser:function(t){e(p.getUser(t))}}};t.default=(0,f.connect)(j,P)(O)},343:function(e,t){"use strict";function n(e){return{type:"GET_USER",userData:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getUser=n},344:function(e,t,n){var a=n(345);"string"==typeof a&&(a=[[e.id,a,""]]);n(271)(a,{});a.locals&&(e.exports=a.locals)},345:function(e,t,n){t=e.exports=n(270)(),t.push([e.id,".userCommon__menu-3OqYG{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center;line-height:.4rem;font-size:.14rem;background-color:#999}.userCommon__menu-3OqYG li{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;color:#fff}.userCommon__menu-3OqYG li.userCommon__active-35i6q{background-color:#66b32f;color:#383b45}.userCommon__userMsg-2mIdD{background-color:#ddd;text-align:center;padding-top:.2rem;padding-bottom:.2rem}.userCommon__avatar-2p8bx{width:.85rem;height:.85rem;border-radius:50%}.userCommon__loginname-2Pwk4{margin-top:.1rem}.userCommon__score-3fvWJ{margin-right:.2rem}.userCommon__userData-1vZmC{margin-top:.1rem}.userCommon__item-PEnId{padding-left:.15rem;padding-right:.15rem;border-bottom:1px solid #ccc}.userCommon__item-PEnId a{display:-webkit-box;display:-ms-flexbox;display:flex;color:#383b45}.userCommon__title-205Yv{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:.2rem}.userCommon__time-3b5m1{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}",""]),t.locals={menu:"userCommon__menu-3OqYG",active:"userCommon__active-35i6q",userMsg:"userCommon__userMsg-2mIdD",avatar:"userCommon__avatar-2p8bx",loginname:"userCommon__loginname-2Pwk4",score:"userCommon__score-3fvWJ",userData:"userCommon__userData-1vZmC",item:"userCommon__item-PEnId",title:"userCommon__title-205Yv",time:"userCommon__time-3b5m1"}},346:function(e,t,n){var a=n(347);"string"==typeof a&&(a=[[e.id,a,""]]);n(271)(a,{});a.locals&&(e.exports=a.locals)},347:function(e,t,n){t=e.exports=n(270)(),t.push([e.id,".my__content-1ApTZ{margin-top:.4rem;margin-bottom:.5rem}.my__headerContainer-18EM8{width:100%;position:fixed;top:0;left:0}",""]),t.locals={content:"my__content-1ApTZ",headerContainer:"my__headerContainer-18EM8"}}});