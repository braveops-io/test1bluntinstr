!function(){"use strict";var e,t=()=>window.innerWidth<=960,n=function(e,t){for(var n=0;n<e.length;n++)t(e[n])},r=e=>{var t=e.split("#");return t.length>1?t[0]:e},o=(e,t,n)=>{for(var r=e instanceof NodeList?e:[e],o=0;o<r.length;o++)r[o]&&r[o].addEventListener(t,n)},i=(e,t)=>{l(e,t,"toggle")},a=(e,t)=>{l(e,t,"add")},d=(e,t)=>{l(e,t,"remove")},l=(e,t,n)=>{for(var r=t.split(" "),o=e instanceof NodeList?e:[e],i=0;i<o.length;i++)o[i]&&o[i].classList[n].apply(o[i].classList,r)},s=null,u=null,c=2,v=()=>!("enabled"!==NeveProperties.masonry||NeveProperties.masonryColumns<2)&&(null!==(u=document.querySelector(".nv-index-posts .posts-wrapper"))&&void imagesLoaded(u,()=>{s=new Masonry(u,{itemSelector:"article.layout-grid",columnWidth:"article.layout-grid",percentPosition:!0})})),p=()=>"enabled"===NeveProperties.infiniteScroll&&(null!==document.querySelector(".nv-index-posts .posts-wrapper")&&void function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=new IntersectionObserver(e=>{e[0].intersectionRatio<=n||t()});r.observe(e)}(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{m()}),!1;m()})),m=()=>{var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",c>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),document.querySelector(".nv-loader").style.display="none",!1;var t,r,o,i,a=document.querySelector(".nv-index-posts .posts-wrapper"),d=g(NeveProperties.infiniteScrollEndpoint+c);c++,t=d,r=e=>{if("enabled"!==NeveProperties.masonry)a.innerHTML+=JSON.parse(e);else{var t=document.createElement("div");t.innerHTML=JSON.parse(e),n(t.children,e=>{u.append(e),s.appended(e)})}},o=NeveProperties.infiniteScrollQuery,(i=new XMLHttpRequest).onload=()=>{4===i.readyState&&200===i.status&&r(i.response)},i.onerror=e=>{console.error(e)},i.open("POST",t,!0),i.setRequestHeader("Content-Type","application/json; charset=UTF-8"),i.send(o)},g=e=>void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),y=()=>{var t,o;e=window.location.href,f(),function(){var t=document.querySelectorAll(".nv-nav-wrap a");if(0===t.length)return!1;n(t,t=>{t.addEventListener("click",t=>{var n=t.target.getAttribute("href");if(null===n)return!1;r(n)===r(e)&&window.HFG.toggleMenuSidebar(!1)})})}(),t=document.querySelectorAll(".caret-wrap"),n(t,e=>{e.addEventListener("click",t=>{t.preventDefault();var n=e.parentNode.parentNode.querySelector(".sub-menu");i(e,"dropdown-open"),i(n,"dropdown-open")})}),h(),w(),!0===/(Trident|MSIE|Edge)/.test(window.navigator.userAgent)&&(o=document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'),n(o,e=>{var t=e.parentNode;t.addEventListener("mouseenter",()=>{a(e,"dropdown-open")}),t.addEventListener("mouseleave",()=>{d(e,"dropdown-open")})})),window.HFG.initSearch=function(){h()}},f=()=>{if(t())return!1;var e=document.querySelectorAll(".sub-menu .sub-menu");if(0===e.length)return!1;var r=window.innerWidth;n(e,e=>{var t=e.getBoundingClientRect(),n=t.left;/webkit.*mobile/i.test(navigator.userAgent)&&(t-=window.scrollX),n+t.width>=r&&(e.style.right="100%",e.style.left="auto")})};function h(){var e=document.querySelectorAll(".nv-nav-search"),r=document.querySelectorAll(".menu-item-nav-search"),o=document.querySelectorAll(".close-responsive-search");n(r,e=>{e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),i(e,"active"),e.querySelector(".search-field").focus(),t()||function(e,t){var n=document.querySelector(".nav-clickaway-overlay");if(null!==n)return!1;n=document.createElement("div"),a(n,"nav-clickaway-overlay");var r=document.querySelector("header.header");r.parentNode.insertBefore(n,r),n.addEventListener("click",()=>{d(e,t),n.parentNode.removeChild(n)})}(e,"active")})}),n(e,e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),n(o,e=>{e.addEventListener("click",e=>{e.preventDefault(),n(r,e=>{d(e,"active")});var t=document.querySelector(".nav-clickaway-overlay");null!==t&&t.parentNode.removeChild(t)})})}function w(){var e=document.querySelectorAll(".header--row .nv-nav-cart");0!==e.length&&n(e,e=>{e.getBoundingClientRect().left<0&&(e.style.left=0)})}window.addEventListener("resize",w);var S,b=function(){this.options={menuToggleDuration:300},this.init()};function q(){window.HFG=new b,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;v(),p()})(),y()}function L(){f()}b.prototype.init=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=".menu-mobile-toggle";!1===e&&(t+=", #header-menu-sidebar .close-panel, .close-sidebar-panel");var r=document.querySelectorAll(t),i=function(e){e.preventDefault(),this.toggleMenuSidebar()};n(r,function(e){e.removeEventListener("click",i.bind(this))}.bind(this)),o(r,"click",i.bind(this));var a=document.querySelector(".header-menu-sidebar-overlay");o(a,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},b.prototype.toggleMenuSidebar=function(e){var t=document.querySelectorAll(".menu-mobile-toggle");d(document.body,"hiding-header-menu-sidebar"),document.body.classList.contains("is-menu-sidebar")||!1===e?(a(document.body,"hiding-header-menu-sidebar"),d(document.body,"is-menu-sidebar"),d(t,"is-active"),setTimeout(function(){d(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)):(a(document.body,"is-menu-sidebar"),a(t,"is-active"))},window.addEventListener("load",()=>{q()}),window.addEventListener("resize",()=>{clearTimeout(S),S=setTimeout(L,500)})}();
;/*! This file is auto-generated */
window.addComment=function(p){var f,v,I,C=p.document,h={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=p.MutationObserver||p.WebKitMutationObserver||p.MozMutationObserver,i="querySelector"in C&&"addEventListener"in p,n=!!C.documentElement.dataset;function t(){r(),function(){if(!e)return;new e(o).observe(C.body,{childList:!0,subtree:!0})}()}function r(e){if(i&&(f=E(h.cancelReplyId),v=E(h.commentFormId),f)){f.addEventListener("touchstart",l),f.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return v.removeEventListener("keydown",t),e.preventDefault(),v.submit.click(),!1};v&&v.addEventListener("keydown",t);for(var n,r=function(e){var t,n=h.commentReplyClass;e&&e.childNodes||(e=C);t=C.getElementsByClassName?e.getElementsByClassName(n):e.querySelectorAll("."+n);return t}(e),o=0,d=r.length;o<d;o++)(n=r[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t=E(h.temporaryFormId);if(t&&I){E(h.parentIdFieldId).value="0";var n=t.textContent;t.parentNode.replaceChild(I,t),this.style.display="none";var r=E(h.commentReplyTitleId),o=r&&r.firstChild;o&&o.nodeType===Node.TEXT_NODE&&n&&(o.textContent=n),e.preventDefault()}}function a(e){var t=E(h.commentReplyTitleId),n=t&&t.firstChild.textContent,r=this,o=m(r,"belowelement"),d=m(r,"commentid"),i=m(r,"respondelement"),l=m(r,"postid"),a=m(r,"replyto")||n;o&&d&&i&&l&&!1===p.addComment.moveForm(o,d,i,l,a)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void r()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function E(e){return C.getElementById(e)}return i&&"loading"!==C.readyState?t():i&&p.addEventListener("DOMContentLoaded",t,!1),{init:r,moveForm:function(e,t,n,r,o){var d=E(e);I=E(n);var i,l,a,m=E(h.parentIdFieldId),c=E(h.postIdFieldId),s=E(h.commentReplyTitleId),u=s&&s.firstChild;if(d&&I&&m){void 0===o&&(o=u&&u.textContent),function(e){var t=h.temporaryFormId,n=E(t),r=E(h.commentReplyTitleId),o=void 0!==r?r.firstChild.textContent:"";if(n)return;(n=C.createElement("div")).id=t,n.style.display="none",n.textContent=o,e.parentNode.insertBefore(n,e)}(I),r&&c&&(c.value=r),m.value=t,f.style.display="",d.parentNode.insertBefore(I,d.nextSibling),u.nodeType===Node.TEXT_NODE&&(u.textContent=o),f.onclick=function(){return!1};try{for(var y=0;y<v.elements.length;y++)if(i=v.elements[y],l=!1,"getComputedStyle"in p?a=p.getComputedStyle(i):C.documentElement.currentStyle&&(a=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==i.type&&!i.disabled&&!l){i.focus();break}}catch(e){}return!1}}}}(window);
;/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);