(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{299:function(t,n,o){},441:function(t,n,o){"use strict";o(299)},510:function(t,n,o){"use strict";o.r(n);var e=o(3),s=o(0),a=o(237),i=o(186);let c=class extends s.e{get i18n(){return this.$themeLocaleConfig.error404||i.i18n.getDefaultLocale().error404}get msg(){return this.i18n.hint[Math.floor(Math.random()*this.i18n.hint.length)]}back(){window.history.go(-1)}};c=Object(e.a)([Object(s.a)({components:{Common:a.a}})],c);var r=c,l=(o(441),o(2)),u=Object(l.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("Common",{attrs:{sidebar:!1}},[o("main",{staticClass:"page not-found"},[o("h1",[t._v("404")]),t._v(" "),o("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),o("div",{staticClass:"action-button",on:{click:t.back}},[t._v(t._s(t.i18n.back))]),t._v(" "),o("RouterLink",{staticClass:"action-button",attrs:{to:"/"}},[t._v(t._s(t.i18n.home))])],1)])}),[],!1,null,null,null);n.default=u.exports}}]);