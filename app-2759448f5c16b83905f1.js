webpackJsonp([0xd2a57dc1d8840000],{"./.cache/api-runner-browser.js":function(e,t){"use strict";var o=[];e.exports=function(e,t,n){var s=o.map(function(o){if(o.plugin[e]){var n=o.plugin[e](t,o.options);return n}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:n?[n]:[]}},"./.cache/async-requires.js":function(e,t,o){"use strict";t.components={"page-component---src-pages-404-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},t.json={"404.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},t.layouts={index:o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/babel-runtime/helpers/extends.js"),a=n(s),r=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),u=n(r),i=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=n(i),d=o("./node_modules/babel-runtime/helpers/createClass.js"),c=n(d),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=n(m),f=o("./node_modules/babel-runtime/helpers/inherits.js"),g=n(f),h=o("./node_modules/react/react.js"),b=n(h),j=o("./.cache/loader.js"),y=n(j),_=o("./.cache/emitter.js"),x=n(_),v=function(e){function t(e){(0,l.default)(this,t);var o=(0,p.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return o.state={location:e.location,pageResources:y.default.getResourcesForPathname(e.location.pathname)},o}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var o=y.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):y.default.getResourcesForPathname(e.location.pathname,function(o){t.setState({location:e.location,pageResources:o})})}}},{key:"componentDidMount",value:function(){var e=this;x.default.on("onPostLoadPageResources",function(t){t.page.path===y.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath))}},{key:"render",value:function(){return this.state.pageResources?(0,h.createElement)(this.state.pageResources.component,(0,a.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),t}(b.default.Component);t.default=v},"./.cache/emitter.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/mitt/dist/mitt.js"),a=n(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,t,o){"use strict";var n=o("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=o.slice(t.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,n.matchPath)(a,{path:e.path})||(0,n.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,n.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xa2868bfb69fc9000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xe70826b53c045000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x81b8806e42603000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./.cache/loader.js":function(e,t,o){(function(t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./node_modules/babel-runtime/core-js/get-iterator.js"),a=n(s),r=o("./.cache/find-page.js"),u=n(r),i=o("./.cache/emitter.js"),l=n(i),d=void 0,c={},m={},p={},f={},g={},h=[],b=[],j={},y=[],_={},x=function(e){return e&&e.default||e},v=void 0,P=!0;v=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){E(e,function(){y=y.filter(function(t){return t!==e}),v.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var R=function(e,t){return _[e]>_[t]?1:_[e]<_[t]?-1:0},w=function(e,t){return j[e]>j[t]?1:j[e]<j[t]?-1:0},E=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])t.nextTick(function(){o(null,f[e])});else{var n="page-c"===e.slice(0,6)?m.components[e]:m.json[e];n(function(t,n){f[e]=n,o(t,n)})}},k=function(e,o){g[e]?t.nextTick(function(){o(null,g[e])}):E(e,function(t,n){if(t)o(t);else{var s=x(n());g[e]=s,o(t,s)}})},N=1,C={empty:function(){b=[],j={},_={},y=[],h=[]},addPagesArray:function(e){h=e;var t="";t="/gatsby-starter-grommet",d=(0,u.default)(e,t)},addDevRequires:function(e){c=e},addProdRequires:function(e){m=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!h.some(function(t){return t.path===e}))return!1;var t=1/N;N+=1,j[e]?j[e]+=1:j[e]=1,C.has(e)||b.unshift(e),b.sort(w);var o=d(e);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+t:_[o.jsonName]=1+t,y.indexOf(o.jsonName)!==-1||f[o.jsonName]||y.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+t:_[o.componentChunkName]=1+t,y.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||y.unshift(o.componentChunkName)),y.sort(R),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:_}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return d(e)},has:function(e){return b.some(function(t){return t===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};P&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){var t=!0,o=!1,n=void 0;try{for(var s,r=(0,a.default)(e);!(t=(s=r.next()).done);t=!0){var u=s.value;u.unregister()}}catch(e){o=!0,n=e}finally{try{!t&&r.return&&r.return()}finally{if(o)throw n}}window.location.reload()})),P=!1;var n=d(e);if(!n)return void console.log("A page wasn't found for \""+e+'"');if(e=n.path,p[e])return t.nextTick(function(){o(p[e]),l.default.emit("onPostLoadPageResources",{page:n,pageResources:p[e]})}),p[e];l.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,u=function(){if(s&&r){p[e]={component:s,json:r,page:n};var t={component:s,json:r,page:n};o(t),l.default.emit("onPostLoadPageResources",{page:n,pageResources:t})}};return k(n.componentChunkName,function(e,t){e&&console.log("Loading the component for "+n.path+" failed"),s=t,u()}),void k(n.jsonName,function(e,t){e&&console.log("Loading the JSON for "+n.path+" failed"),r=t,u()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=C}).call(t,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,t){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,o=e.createResourceDownload,n=[],s=[],a=function(){var e=t();e&&(s.push(e),o(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":n.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":n=n.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===n.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:n,resourcesDownloading:s}},empty:function(){n=[],s=[]}}}},0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,t){(0,l.default)("onRouteUpdate",{location:e,action:t})}))}function a(e,t){var o=t.location.pathname,n=(0,l.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(n.length>0)return n[0];if(e){var s=e.location.pathname;if(s===o)return!1}return!0}var r=o("./node_modules/babel-runtime/helpers/extends.js"),u=n(r),i=o("./.cache/api-runner-browser.js"),l=n(i),d=o("./node_modules/react/react.js"),c=n(d),m=o("./node_modules/react-dom/index.js"),p=n(m),f=o("./node_modules/react-router-dom/index.js"),g=o("./node_modules/react-router-scroll/lib/index.js"),h=o("./node_modules/history/createBrowserHistory.js"),b=n(h),j=o("./.cache/emitter.js"),y=n(j),_=o("./.cache/pages.json"),x=n(_),v=o("./.cache/component-renderer.js"),P=n(v),R=o("./.cache/async-requires.js"),w=n(R),E=o("./.cache/loader.js"),k=n(E);window.___emitter=y.default,k.default.addPagesArray(x.default),k.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=k.default,window.matchPath=f.matchPath,(0,l.default)("onClientEntry"),(0,l.default)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var N=function(e){function t(n){n.page.path===k.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);k.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=N;var C=(0,b.default)();(0,l.default)("onRouteUpdate",{location:C.location,action:C.action});var O=(0,l.default)("replaceRouterComponent",{history:C})[0],U=function(e){var t=e.children;return c.default.createElement(f.BrowserRouter,{history:C},t)},S=function(e){w.default.layouts.index?w.default.layouts.index(function(t,o){var n=o();e(n)}):e(function(e){return c.default.createElement("div",null,e.children())})};S(function(e){k.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,d.createElement)(O?O:U,null,(0,d.createElement)(g.ScrollContext,{shouldUpdateScroll:a},(0,d.createElement)((0,f.withRouter)(e),{children:function(e){return(0,d.createElement)(f.Route,{render:function(t){s(t.history);var o=e?e:t;return k.default.getPage(o.location.pathname)?(0,d.createElement)(P.default,(0,u.default)({},o)):(0,d.createElement)(P.default,{location:{pathname:"/404.html"}})}})}})))},o=(0,l.default)("wrapRootComponent",{Root:t},t)[0];p.default.render(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./.cache/emitter.js"),a=n(s),r="/";r="/gatsby-starter-grommet/","serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,t,o){"use strict";function n(){function e(e){var t=n.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,n=document.querySelector("head"),s=o.e,a=o.s;o.e=function(n,r){var u=!1,i=!0,l=function(e){r&&(r(o,e),r=null)};return!a&&t&&t[n]?void l(!0):(s(n,function(){u||(u=!0,i?setTimeout(function(){l()}):l())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[n]=void 0:(t||(t={}),t[n]=!0),l(!0))}))))}}n()},"./node_modules/hoist-non-react-statics/index.js":function(e,t){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},s="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,a){if("string"!=typeof t){var r=Object.getOwnPropertyNames(t);s&&(r=r.concat(Object.getOwnPropertySymbols(t)));for(var u=0;u<r.length;++u)if(!(o[r[u]]||n[r[u]]||a&&a[r[u]]))try{e[r[u]]=t[r[u]]}catch(e){}}return e}},"./node_modules/mitt/dist/mitt.js":function(e,t){function o(e){return e=e||Object.create(null),{on:function(t,o){(e[t]||(e[t]=[])).push(o)},off:function(t,o){e[t]&&e[t].splice(e[t].indexOf(o)>>>0,1)},emit:function(t,o){(e[t]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(t,o)})}}}e.exports=o},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xef47e37750d80000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alampros/Projects/gatsby-starter-grommet/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-env/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-stage-0/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x7107efd8fd846000,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alampros/Projects/gatsby-starter-grommet/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-env/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-stage-0/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,t,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x37beb808d31a9600,function(t,n){n?(console.log("bundle loading error",n),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alampros/Projects/gatsby-starter-grommet/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-env/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-stage-0/lib/index.js","/Users/alampros/Projects/gatsby-starter-grommet/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-2759448f5c16b83905f1.js.map