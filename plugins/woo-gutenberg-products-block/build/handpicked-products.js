this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(t){function e(e){for(var r,i,u=e[0],s=e[1],a=e[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);b.length;)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={24:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return c.push([601,0]),n()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},109:function(t,e){},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){},121:function(t,e){},128:function(t,e,n){"use strict";var r=n(0),o=n(1),c=n(4);n(2);e.a=function(t){var e=t.value,n=t.setAttributes;return Object(r.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return n({orderby:t})}})}},13:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},183:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),o=n(6),c=Object(r.createElement)("img",{src:o.T+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},19:function(t,e){!function(){t.exports=this.wp.apiFetch}()},20:function(t,e){!function(){t.exports=this.wp.url}()},21:function(t,e){!function(){t.exports=this.wp.data}()},23:function(t,e){!function(){t.exports=this.wp.blockEditor}()},24:function(t,e){!function(){t.exports=this.wp.blocks}()},27:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},28:function(t,e){!function(){t.exports=this.moment}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},317:function(t,e,n){"use strict";var r=n(11),o=n.n(r),c=n(13),i=n.n(c),u=n(30),s=n.n(u),a=n(14),l=n.n(a),d=n(15),b=n.n(d),p=n(12),f=n.n(p),g=n(16),h=n.n(g),O=n(17),j=n.n(O),m=n(10),w=n.n(m),y=n(0),v=n(8),k=n(147),_=(n(2),n(6)),S=n(38),E=n(40);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w()(t);if(e){var o=w()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j()(this,n)}}var x=Object(k.a)((function(t){var e=function(e){h()(c,e);var n,r=P(c);function c(){var t;return l()(this,c),(t=r.apply(this,arguments)).state={list:[],loading:!0},t.setError=t.setError.bind(f()(t)),t.debouncedOnSearch=Object(v.debounce)(t.onSearch.bind(f()(t)),400),t}return b()(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(S.h)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(t){var e=this,n=this.props.selected;Object(S.h)({selected:n,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"setError",value:(n=s()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.a)(e);case 2:n=t.sent,this.setState({list:[],loading:!1,error:n});case 4:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this,n=this.state,r=n.error,c=n.list,i=n.loading;return Object(y.createElement)(t,o()({},this.props,{error:r,products:c,isLoading:i,onSearch:_.v?function(t){e.setState({loading:!0}),e.debouncedOnSearch(t)}:null}))}}]),c}(y.Component);return e.defaultProps={selected:[]},e}),"withSearchedProducts");e.a=x},33:function(t,e){!function(){t.exports=this.wp.primitives}()},35:function(t,e){!function(){t.exports=this.wp.dataControls}()},38:function(t,e,n){"use strict";n.d(e,"h",(function(){return b})),n.d(e,"e",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"i",(function(){return g})),n.d(e,"f",(function(){return h})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return j})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return w}));var r=n(5),o=n.n(r),c=n(20),i=n(19),u=n.n(i),s=n(8),a=n(6);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,l=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,u=void 0===i?[]:i,s={per_page:a.v?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",d(d({},s),u))];return a.v&&n.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:n})),l}({selected:n,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return d(d({},t),{},{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return u()({path:"/wc/store/products/".concat(t)})},f=function(){return u()({path:"wc/store/products/attributes"})},g=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},h=function(t){var e=t.selected,n=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:a.x?100:0,orderby:a.x?"count":"name",order:a.x?"desc":"asc",search:r})];return a.x&&n.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:n})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(n.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},O=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",d({per_page:0},t))})},j=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},m=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},w=function(t,e){if(!t.title.raw)return t.slug;var n=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(n?"":" - ".concat(t.slug))}},4:function(t,e){!function(){t.exports=this.wp.components}()},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var r=n(13),o=n.n(r),c=n(30),i=n.n(c),u=n(1),s=function(){var t=i()(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return n=t.sent,t.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),a=function(t){if(t.data&&"rest_invalid_param"===t.code){var e=Object.values(t.data.params);if(e[0])return e[0]}return(null==t?void 0:t.message)||Object(u.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},42:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},44:function(t,e,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(42));e.a=function(t){var e,n,i,u=t.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(e=u).message,i=e.type,n?"general"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):"api"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):n:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},48:function(t,e){!function(){t.exports=this.wp.keycodes}()},55:function(t,e,n){"use strict";var r=n(5),o=n.n(r),c=n(26),i=n.n(c),u=n(7);n(2);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=function(t){var e=t.srcElement,n=t.size,r=void 0===n?24:n,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({width:r,height:r},c))}},6:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"J",(function(){return c})),n.d(e,"P",(function(){return i})),n.d(e,"z",(function(){return u})),n.d(e,"B",(function(){return s})),n.d(e,"m",(function(){return a})),n.d(e,"A",(function(){return l})),n.d(e,"D",(function(){return d})),n.d(e,"o",(function(){return b})),n.d(e,"C",(function(){return p})),n.d(e,"n",(function(){return f})),n.d(e,"F",(function(){return g})),n.d(e,"v",(function(){return h})),n.d(e,"x",(function(){return O})),n.d(e,"s",(function(){return j})),n.d(e,"t",(function(){return m})),n.d(e,"u",(function(){return w})),n.d(e,"k",(function(){return y})),n.d(e,"L",(function(){return v})),n.d(e,"Q",(function(){return k})),n.d(e,"q",(function(){return _})),n.d(e,"r",(function(){return S})),n.d(e,"p",(function(){return E})),n.d(e,"I",(function(){return P})),n.d(e,"c",(function(){return x})),n.d(e,"w",(function(){return C})),n.d(e,"T",(function(){return D})),n.d(e,"U",(function(){return B})),n.d(e,"K",(function(){return M})),n.d(e,"a",(function(){return T})),n.d(e,"N",(function(){return R})),n.d(e,"b",(function(){return H})),n.d(e,"M",(function(){return I})),n.d(e,"E",(function(){return L})),n.d(e,"i",(function(){return V})),n.d(e,"O",(function(){return U})),n.d(e,"h",(function(){return G})),n.d(e,"j",(function(){return Q})),n.d(e,"H",(function(){return q})),n.d(e,"G",(function(){return W})),n.d(e,"S",(function(){return F})),n.d(e,"R",(function(){return J})),n.d(e,"d",(function(){return Y})),n.d(e,"e",(function(){return K})),n.d(e,"f",(function(){return X})),n.d(e,"g",(function(){return $})),n.d(e,"y",(function(){return Z})),n.d(e,"X",(function(){return et})),n.d(e,"Y",(function(){return nt})),n.d(e,"V",(function(){return rt})),n.d(e,"W",(function(){return ot}));var r=n(3),o=Object(r.getSetting)("currentUserIsAdmin",!1),c=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),u=Object(r.getSetting)("max_columns",6),s=Object(r.getSetting)("min_columns",1),a=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),d=Object(r.getSetting)("min_rows",1),b=Object(r.getSetting)("default_rows",3),p=Object(r.getSetting)("min_height",500),f=Object(r.getSetting)("default_height",500),g=Object(r.getSetting)("placeholderImgSrc",""),h=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),O=Object(r.getSetting)("limitTags"),j=Object(r.getSetting)("hasProducts",!0),m=Object(r.getSetting)("hasTags",!0),w=Object(r.getSetting)("homeUrl",""),y=Object(r.getSetting)("couponsEnabled",!0),v=Object(r.getSetting)("shippingEnabled",!0),k=Object(r.getSetting)("taxesEnabled",!0),_=Object(r.getSetting)("displayItemizedTaxes",!1),S=Object(r.getSetting)("hasDarkEditorStyleSupport",!1),E=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),P=Object(r.getSetting)("productCount",0),x=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),A=(Object(r.getSetting)("isShippingCostHidden",!1),Object(r.getSetting)("woocommerceBlocksPhase",1)),D=Object(r.getSetting)("wcBlocksAssetUrl",""),B=Object(r.getSetting)("wcBlocksBuildUrl",""),M=Object(r.getSetting)("shippingCountries",{}),T=Object(r.getSetting)("allowedCountries",{}),R=Object(r.getSetting)("shippingStates",{}),H=Object(r.getSetting)("allowedStates",{}),I=Object(r.getSetting)("shippingMethodsExist",!1),L=Object(r.getSetting)("paymentGatewaySortOrder",[]),V=Object(r.getSetting)("checkoutShowLoginReminder",!0),z={id:0,title:"",permalink:""},N=Object(r.getSetting)("storePages",{shop:z,cart:z,checkout:z,privacy:z,terms:z}),U=N.shop.permalink,G=N.checkout.id,Q=N.checkout.permalink,q=N.privacy.permalink,W=N.privacy.title,F=N.terms.permalink,J=N.terms.title,Y=N.cart.id,K=N.cart.permalink,X=Object(r.getSetting)("checkoutAllowsGuest",!1),$=Object(r.getSetting)("checkoutAllowsSignup",!1),Z=Object(r.getSetting)("loginUrl","/wp-login.php"),tt=n(24),et=function(t,e){if(A>2)return Object(tt.registerBlockType)(t,e)},nt=function(t,e){if(A>1)return Object(tt.registerBlockType)(t,e)},rt=function(){return A>2},ot=function(){return A>1}},601:function(t,e,n){t.exports=n(941)},602:function(t,e){},65:function(t,e){!function(){t.exports=this.wp.hooks}()},66:function(t,e){!function(){t.exports=this.wp.serverSideRender}()},7:function(t,e){!function(){t.exports=this.React}()},70:function(t,e){!function(){t.exports=this.wp.dom}()},73:function(t,e){!function(){t.exports=this.wp.deprecated}()},76:function(t,e){!function(){t.exports=this.ReactDOM}()},77:function(t,e,n){"use strict";var r=n(5),o=n.n(r),c=n(0),i=n(1),u=(n(2),n(4));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.onChange,n=t.settings,r=n.button,o=n.price,s=n.rating,l=n.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(a(a({},n),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(a(a({},n),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(a(a({},n),{},{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:r?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return e(a(a({},n),{},{button:!r}))}}))}},79:function(t,e){!function(){t.exports=this.wp.viewport}()},8:function(t,e){!function(){t.exports=this.lodash}()},80:function(t,e){!function(){t.exports=this.wp.date}()},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(0),o=n(9),c=n.n(o),i=n(18),u=n.n(i),s=n(6);function a(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw c}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=function(t){return function(e){var n=e.attributes,o=n.align,i=n.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(r.createElement)(r.RawHTML,{className:l},function(t,e){var n=t.attributes,r=n.attributes,o=n.attrOperator,c=n.categories,i=n.catOperator,l=n.orderby,d=n.products,b=n.columns||s.m,p=n.rows||s.o,f=new Map;switch(f.set("limit",p*b),f.set("columns",b),c&&c.length&&(f.set("category",c.join(",")),i&&"all"===i&&f.set("cat_operator","AND")),r&&r.length&&(f.set("terms",r.map((function(t){return t.id})).join(",")),f.set("attribute",r[0].attr_slug),o&&"all"===o&&f.set("terms_operator","AND")),l&&("price_desc"===l?(f.set("orderby","price"),f.set("order","DESC")):"price_asc"===l?(f.set("orderby","price"),f.set("order","ASC")):"date"===l?(f.set("orderby","date"),f.set("order","DESC")):f.set("orderby",l)),e){case"woocommerce/product-best-sellers":f.set("best_selling","1");break;case"woocommerce/product-top-rated":f.set("orderby","rating");break;case"woocommerce/product-on-sale":f.set("on_sale","1");break;case"woocommerce/product-new":f.set("orderby","date"),f.set("order","DESC");break;case"woocommerce/handpicked-products":if(!d.length)return"";f.set("ids",d.join(",")),f.set("limit",d.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!r||!r.length)return""}var g,h="[products",O=a(f);try{for(O.s();!(g=O.n()).done;){var j=u()(g.value,2);h+=" "+j[0]+'="'+j[1]+'"'}}catch(t){O.e(t)}finally{O.f()}return h+="]"}(e,t))}}},941:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),c=n(24),i=n(6),u=n(55),s=n(33),a=Object(r.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M16.66 4.52l2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"})),l=(n(602),n(14)),d=n.n(l),b=n(15),p=n.n(b),f=n(16),g=n.n(f),h=n(17),O=n.n(h),j=n(10),m=n.n(j),w=n(23),y=n(66),v=n.n(y),k=n(4),_=(n(2),n(77)),S=n(45),E=n(317),P=n(44),x=function(t){var e=t.error,n=t.onChange,c=t.onSearch,i=t.selected,u=t.products,s=t.isLoading,a={clear:Object(o.__)("Clear all products","woo-gutenberg-products-block"),list:Object(o.__)("Products","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(o.__)("Search for products to display","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d product selected","%d products selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Product search results updated.","woo-gutenberg-products-block")};return e?Object(r.createElement)(P.a,{error:e}):Object(r.createElement)(S.a,{className:"woocommerce-products",list:u,isLoading:s,selected:u.filter((function(t){var e=t.id;return i.includes(e)})),onSearch:c,onChange:n,messages:a})};x.defaultProps={selected:[],products:[],isLoading:!0};var C=Object(E.a)(x),A=n(128),D=n(183);function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O()(this,n)}}var M=function(t){g()(n,t);var e=B(n);function n(){return d()(this,n),e.apply(this,arguments)}return p()(n,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,n=t.setAttributes,c=e.columns,u=e.contentVisibility,s=e.orderby,a=e.alignButtons;return Object(r.createElement)(w.InspectorControls,{key:"inspector"},Object(r.createElement)(k.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(k.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:c,onChange:function(t){return n({columns:t})},min:i.B,max:i.z}),Object(r.createElement)(k.ToggleControl,{label:Object(o.__)("Align Buttons","woo-gutenberg-products-block"),help:a?Object(o.__)("Buttons are aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("Buttons follow content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return n({alignButtons:!a})}})),Object(r.createElement)(k.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(r.createElement)(_.a,{settings:u,onChange:function(t){return n({contentVisibility:t})}})),Object(r.createElement)(k.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(A.a,{setAttributes:n,value:s})),Object(r.createElement)(k.PanelBody,{title:Object(o.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(r.createElement)(C,{selected:e.products,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));n({products:e})}})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.attributes,n=t.debouncedSpeak,c=t.setAttributes;return Object(r.createElement)(k.Placeholder,{icon:Object(r.createElement)(u.a,{srcElement:a}),label:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),Object(r.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(r.createElement)(C,{selected:e.products,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));c({products:e})}}),Object(r.createElement)(k.Button,{isPrimary:!0,onClick:function(){c({editMode:!1}),n(Object(o.__)("Showing Hand-picked Products block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,n=t.name,c=t.setAttributes,i=e.editMode;return e.isPreview?D.a:Object(r.createElement)(r.Fragment,null,Object(r.createElement)(w.BlockControls,null,Object(r.createElement)(k.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(r.createElement)(k.Disabled,null,Object(r.createElement)(v.a,{block:n,attributes:e})))}}]),n}(r.Component),T=Object(k.withSpokenMessages)(M),R=n(88);Object(c.registerBlockType)("woocommerce/handpicked-products",{title:Object(o.__)("Hand-picked Products","woo-gutenberg-products-block"),icon:{src:Object(r.createElement)(u.a,{srcElement:a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("Handpicked Products","woo-gutenberg-products-block"),Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{align:{type:"string"},columns:{type:"number",default:i.m},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{align:{type:"string"},columns:{type:"number",default:i.m},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]}},save:Object(R.a)("woocommerce/handpicked-products")}],edit:function(t){return Object(r.createElement)(T,t)},save:function(){return null}})}});