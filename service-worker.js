if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.20eb485d.css",revision:"cdd78fad4b64e1fbc3d6e22d049a29ee"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/132.d31268b0.js",revision:"097e15561b9938d3c0934dae53e5bbf6"},{url:"assets/js/133.d9e1cece.js",revision:"2d7796887d1f373d882d2bb867b02001"},{url:"assets/js/134.04b8adb5.js",revision:"c6ff63fb292a04dd302be109b81d0b4b"},{url:"assets/js/135.0a34c2a4.js",revision:"e61a0ff129c2fdf8f966ea12f2096ab1"},{url:"assets/js/136.65e19fa5.js",revision:"f790c3244131cfdb063737a1c9397719"},{url:"assets/js/app.99ff2f33.js",revision:"4440eb6647ea78ae4aad7d80a22c2dff"},{url:"assets/js/layout-Blog.6fa0cb35.js",revision:"efd3d49d2f62f5e1aa2fd628a26356e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.aa02e6d7.js",revision:"7a1bcbc6395699068939054dd38439f4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.16566bbd.js",revision:"b55406f1f015770846aa7796be414bd0"},{url:"assets/js/layout-Layout.0758ccc7.js",revision:"21192de5da29248d928e6844a3fd3110"},{url:"assets/js/layout-NotFound.874e0572.js",revision:"6623a3020123ea1602180b09caae9344"},{url:"assets/js/layout-Slide.9b24cadb.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress--4a71114e.389740f5.js",revision:"4ce2ee8db8e1e690c017f779a3bcb477"},{url:"assets/js/page-Basic--770cb96b.01209d17.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage--64265752.0ee625b8.js",revision:"bc41ebf24df517aa43aec0bb9302cb55"},{url:"assets/js/page-Blogrelated--17c260a2.58a3f873.js",revision:"5ad015091889f9c882fbf48415659283"},{url:"assets/js/page-CodeDemo--a44bde9c.49b2fe44.js",revision:"4c5c4d06ca89ac831e7d6fbbd7784119"},{url:"assets/js/page-CommentFunction--5bb6671c.e0ead78f.js",revision:"d0b3faab63c6c7d02d2e3ab9e25ef867"},{url:"assets/js/page-Commonproblems--2b571e9b.1331d539.js",revision:"5abfcd13a95f0ecb1493e860d930f83a"},{url:"assets/js/page-Config--35a0a7d9.cdb26e6c.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment--4f21aa5c.f8ea975a.js",revision:"9600cf3c6bac7770f862fb15ddf6f54c"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.2d4f0783.js",revision:"86ab81dd639e917e5e1ac61d0d095dd7"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.18f989d5.js",revision:"527291078cb7d87b6f6b969694c563b6"},{url:"assets/js/page-Demos--f328658e.3e62466f.js",revision:"16372df9027beffd0dc81645a78687e9"},{url:"assets/js/page-EmojiList--41bb29b9.2502859b.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表--404e6737.b0a4e370.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction--181bdc9c.452b5cae.js",revision:"497b6ec1ab90c71ff5cc2322b75fadda"},{url:"assets/js/page-FileStructure--665a4f1c.f1c8df00.js",revision:"e147b321ab6bbb4a8e01cbd6ddbacf82"},{url:"assets/js/page-Flowchart--7ce6d974.89c8289c.js",revision:"842a441ed302680ab4db592a654f22ab"},{url:"assets/js/page-Footnote--0c733e52.424607e9.js",revision:"6c13e259b28268805a346601c09373f7"},{url:"assets/js/page-HomePage--5834599c.f2dd1bb7.js",revision:"14a7a6462c2d99c63fe9a6c233027497"},{url:"assets/js/page-Iconsupport--a6a93218.bf35ae16.js",revision:"e5d8d2f19990c120b1deb8c935dfaf88"},{url:"assets/js/page-InstallUsage--0ab466d2.e3f36517.js",revision:"6ac206476dd54dabdd1dd7bae4a9dc48"},{url:"assets/js/page-Introduction--d4910962.3dd6c587.js",revision:"7beec298f29aa31d261281f27b622c6d"},{url:"assets/js/page-Layout--12bd4f0e.9843b67c.js",revision:"19d9312bd02528c0345ca334d3e36af1"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.93596fb1.js",revision:"e68f19e171887e00d394430ce0f2b1f3"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.07630d4d.js",revision:"724eacdac53b3c7f27abbb036534a70d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.858c15af.js",revision:"b44dcb0264ae444f190c48bdc7b95dfb"},{url:"assets/js/page-Markdown介绍--0e6891b6.6dda2a88.js",revision:"9a689909c79d0fd6312dddb306768bd8"},{url:"assets/js/page-Markdown增强--6162938f.10c77a92.js",revision:"e3d736faf7439c92633bcfff9b815e5f"},{url:"assets/js/page-Markdown示例--5479fe88.9788c018.js",revision:"868e89c0b7f914b4b84161e4e3791337"},{url:"assets/js/page-Markup--6b1f341c.67eca47f.js",revision:"d29e3a21945324455e10a9e83ab1e513"},{url:"assets/js/page-Nature--749fb09c.c498fa21.js",revision:"8a85973cb586c86618a88a6380d1ab13"},{url:"assets/js/page-NavBar--c7bf87dc.16ad4dd7.js",revision:"149d06c61f7a1b1cb378c1af9a611554"},{url:"assets/js/page-NewComponent--1d138c72.a3c77919.js",revision:"0826f4146aec7eb30579f6b08fc55795"},{url:"assets/js/page-Newfeature--5136c541.be5ef064.js",revision:"96b64308d9cbe1a2d3a6a2c2563e863a"},{url:"assets/js/page-Object--16031ab2.27b1cb2c.js",revision:"0a0e71b243eb0270d089c4a9c8cde92a"},{url:"assets/js/page-Page--af17b59c.16f59807.js",revision:"d5d8d158a593f4e949d3a9cfffb65093"},{url:"assets/js/page-PageConfiguration--0aacc152.42f2f0ee.js",revision:"1ffd16e2454da3f03193132ce07c56d4"},{url:"assets/js/page-PageEnhance--03665ac8.4982f029.js",revision:"668539f7b7dc4f0a6b3110458597aef3"},{url:"assets/js/page-Pageinformation--71efd5d2.2abc188b.js",revision:"87aafb0c4e58e875352040879fe56f84"},{url:"assets/js/page-People--2182769c.9ec16677.js",revision:"739486be142132d3923130045088b79c"},{url:"assets/js/page-Place--951cdc00.188eb5fb.js",revision:"cff5e51e4a7724298fc0cf64ce4990fc"},{url:"assets/js/page-PluginDescription--137c6c07.3807610c.js",revision:"60f16d21a940a2daba0bd64f6441c121"},{url:"assets/js/page-Plugins--adbf415c.5e88ff0f.js",revision:"3f6fc85c17c9dd57758779e46c0b62ad"},{url:"assets/js/page-Presentationsupport--8f8e54dc.7511a9b7.js",revision:"32e1496171189004c8ae12102944c7e2"},{url:"assets/js/page-PWA--01089712.286587bc.js",revision:"a96262b65198140dad79bea8befd7aff"},{url:"assets/js/page-PWA--243ef2b8.b1fb7f96.js",revision:"15942d2209276604d86a3b432504d11d"},{url:"assets/js/page-SEOandSitemap--ccd3659c.9d775400.js",revision:"799b99693e06807e42a330163055551a"},{url:"assets/js/page-SEO和Sitemap--2853f164.becc2cfa.js",revision:"63ed782f253e5c4e5283a15d14aa0cf7"},{url:"assets/js/page-Sidebar--2fa1ea2c.c0565ac3.js",revision:"2ca460cff794162408ae116c382adc89"},{url:"assets/js/page-Slide--269ae052.c0859e0f.js",revision:"73201f3bcd9f849d9e9c4a383dc78f87"},{url:"assets/js/page-stylusconfiguration--6796cdf2.520b1667.js",revision:"6078accd3e7ee3cb1f21eba091db906f"},{url:"assets/js/page-stylus配置--0ce19a82.06f52e2e.js",revision:"1794c376d03dd8cc3f14a5af990d0aba"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.8e26b909.js",revision:"b5fcd7f8b1f7d26b319465c999f001b6"},{url:"assets/js/page-Symbol--a9259c5c.46d7dd4e.js",revision:"9055b2f99784214b1ac9d15d25443d7c"},{url:"assets/js/page-TexSupport--64cb5e50.46bf49a6.js",revision:"c1b194f2ca83ccf8a8017ef67c86e4b0"},{url:"assets/js/page-Tex语法支持--1e02b152.9f8492b4.js",revision:"1d2b469850e79113cdac847f01afe9e1"},{url:"assets/js/page-ThemeConfig--1120a0ce.40397c64.js",revision:"0bc07dd0c26b9cb9066e0e5681643df4"},{url:"assets/js/page-ThemeConfig--1726e14e.08647fe6.js",revision:"68bf28d756cad80ffcc5974cc60c29d9"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.8f547437.js",revision:"e66c85e8a60f2fcce75e08caf4229bb2"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.8f0e1a3d.js",revision:"a79cf6f3a2342756b93b5e6af0c1d088"},{url:"assets/js/page-ThemePluginConfig--958196dc.9c77a304.js",revision:"338518a66d3337f706bdddaaafb492e5"},{url:"assets/js/page-TSsupport--09728ac8.2931dae8.js",revision:"c2114038c40a4aca10c4ba33f4f99685"},{url:"assets/js/page-TS支持--4625f812.0e683d12.js",revision:"cef9f4a513d8c235ff69f6c5a97cf787"},{url:"assets/js/page-VuePress--b7060eee.2082ac08.js",revision:"29f37891f1408143cd877540ff2f94cf"},{url:"assets/js/page-vuepress-plugin-container--31498112.a45b926e.js",revision:"1d2a0a20871952267ba7238739564106"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.08d8c98b.js",revision:"91cbcbf95635cb71898bb3bb84c540f2"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.986bc5a2.js",revision:"b236f000a8582dc4e8f2d941e78dc6e0"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.cbbdd4c4.js",revision:"b80e1066be273bc166342ff6730e3f2d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.b5d938cb.js",revision:"a6d3406434b7bc026bbbe828a0a4f7a4"},{url:"assets/js/page-vuepress-theme-hope--776d8369.266845f0.js",revision:"781421ce173a5ec9a9850dc95cd9b677"},{url:"assets/js/page-VuePressCases--082972f2.c0e236a4.js",revision:"60e3abbb39296ff3173e0b586d83b28f"},{url:"assets/js/page-VuePresscommands--9f3f316c.6c3c5f90.js",revision:"c80c3c9f1e5d51b1adaf2aadedb37140"},{url:"assets/js/page-VuePress案例--531d5f3e.46a94d53.js",revision:"19f9756d1f3f2073a82ffabd028919fa"},{url:"assets/js/page-上下角标--8efed9dc.5d4a76df.js",revision:"0aee0d1e383359dcbb1523bc1f8a5f1e"},{url:"assets/js/page-主题功能配置--5bb71452.3815b285.js",revision:"5480a50ae44a492eb257b89a92511549"},{url:"assets/js/page-主题布局配置--7db7eff2.c5ce8865.js",revision:"fbae136821e03c07ad4eb5df879c3178"},{url:"assets/js/page-主题插件配置--1b0c3e98.e6c069c5.js",revision:"5836ea9b2cda6b089709b5a3a0299b35"},{url:"assets/js/page-主题配置--21dc088d.ca028ff4.js",revision:"9c7fe52d390edbad69a5dfffd37c9bb8"},{url:"assets/js/page-主题配置--2c572572.f385175d.js",revision:"9c013e36abc697c8698df13e86699df6"},{url:"assets/js/page-人物--b4fc27dc.eff1eb39.js",revision:"9968cedbb1c355421107bd1f21e54dd9"},{url:"assets/js/page-介绍--2e99d139.27299aa6.js",revision:"c38963e846a6997c7c825164066f572c"},{url:"assets/js/page-代码演示--0dad4f52.647204ac.js",revision:"552dcf16a97fa94edec9aae90b46fde6"},{url:"assets/js/page-侧边栏--43054cb2.6f2566cc.js",revision:"6991d139fba970e79ac8cdbf2d8b8b81"},{url:"assets/js/page-加密功能--2361b7e4.04f00d5e.js",revision:"91739fb47d49bb5ab4fd9e577c03cf7f"},{url:"assets/js/page-博客相关--6a3fd4f2.947bb060.js",revision:"781a89f27698d2b5dcfdbea934f07bed"},{url:"assets/js/page-博客首页--1eb2b298.8fbcfc22.js",revision:"a550dd8705b1187fb1a2b96a5db65ec6"},{url:"assets/js/page-图标支持--a2671ddc.7522d24c.js",revision:"ce523bbaa43e459433bb5671f3146dbc"},{url:"assets/js/page-地点--6710785c.079a4f47.js",revision:"0e92ba46dd28b4e7b5c0002f16084fea"},{url:"assets/js/page-基础知识--4d466a79.d414691f.js",revision:"a7fc4b2492932a63919212f05d4f4e46"},{url:"assets/js/page-安装使用--76e0e5b0.ed772768.js",revision:"94009c1dfa0ab326db2cb6d498ebeef2"},{url:"assets/js/page-对象--e150da9c.9747f92f.js",revision:"9aa0b178c8179031152049be6e38079f"},{url:"assets/js/page-导航栏--183844fc.3af6fb68.js",revision:"ab7ba1e79e9e146313c76912bc79e049"},{url:"assets/js/page-布局--fa93e36a.9b6120ea.js",revision:"287417d6200c4fe35fbc240063aed106"},{url:"assets/js/page-常见问题--10ab790e.8ada692c.js",revision:"3f5a467ee876b092c528b25a83bd9408"},{url:"assets/js/page-幻灯片--818cb750.117028ae.js",revision:"7d7a43bfa041424120252f1f0c05a66d"},{url:"assets/js/page-幻灯片支持--5808e664.d1671ed4.js",revision:"82504f4e9ae6eed3f7bff2fb4f4e58b0"},{url:"assets/js/page-插件--32355f10.b0a332fe.js",revision:"ac815ccb6dcfde3b35eebe4baf13266a"},{url:"assets/js/page-插件说明--cbca1c8e.b5b26f3c.js",revision:"28660d6a2a75a63b5ec1a75651d7f51d"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.516f67e2.js",revision:"c735ef9fa2ecb4c61ccd9c67e4cace16"},{url:"assets/js/page-新增特性--30c6c799.8a03a6a5.js",revision:"00c456a69c40985567d8a34286954146"},{url:"assets/js/page-新增组件--0979095e.80bd56fb.js",revision:"4eb87257ba02fec2b82076dd8eebacfa"},{url:"assets/js/page-标记--0ac52704.42d22eca.js",revision:"64135f2ae319987268749ba9ef88329b"},{url:"assets/js/page-流程图支持--582eff1c.3f170ec8.js",revision:"12c96f6577bb759b1c90c90e8d52b319"},{url:"assets/js/page-深色模式与主题色--01662674.449b9ca2.js",revision:"f6c106e6ca82ff1bd93be89906f39e53"},{url:"assets/js/page-符号--2db8fb80.9cbdfbed.js",revision:"85fc6b1686abc2daf46b43d21c81fd5c"},{url:"assets/js/page-脚注--17d88350.30f00640.js",revision:"f7b7a2dcdb22f5de9f7f1d4d6c6ee723"},{url:"assets/js/page-自定义对齐--048d31dc.a39ee0d4.js",revision:"c1dcb60101f9442d7c281afe59d6e383"},{url:"assets/js/page-自然--7ec33be2.c9bfecb0.js",revision:"79f85912ce121209bab3f65a4b102c02"},{url:"assets/js/page-评论功能--350aff9a.44140c25.js",revision:"011218e4370b519e23535a2dbac18af2"},{url:"assets/js/page-配置--d315f8fe.f075d434.js",revision:"30be11c2ef2bb09693d73b375659a0f3"},{url:"assets/js/page-页面--78423bfe.dd386f0d.js",revision:"f69453907859ed8fa32fcfa8381a0229"},{url:"assets/js/page-页面信息--455b9800.f2c09959.js",revision:"b11f522856d77462e68a6f726bb4590c"},{url:"assets/js/page-页面增强--2e4cf75c.6d0cadfc.js",revision:"20c634f02b102ac3decadaad56eab58c"},{url:"assets/js/page-页面配置--02399408.1123b5a9.js",revision:"86a9b25be15c1a1923989b74dc27229f"},{url:"assets/js/page-项目指令--2f3d7c1c.7f1c37b0.js",revision:"831e5d2325a43ede5bca709668d4fe74"},{url:"assets/js/page-项目案例--1f3d6482.3f23fe9d.js",revision:"839912996c0eb30d2479ab2c4082c458"},{url:"assets/js/page-首页--79a22944.626a14d2.js",revision:"fb686121e431ddc041b6b16a0edb5d3e"},{url:"assets/js/page-默认主题配置--0d5b7f32.f36ce656.js",revision:"7ec5dba6396c18a74557bc81845baaf2"},{url:"assets/js/vendors~docsearch.c05c5713.js",revision:"09172d843dddf9b5fff4d6023468626a"},{url:"assets/js/vendors~flowchart.fcc19cf4.js",revision:"913e709520c743c5e7e2a5666756cd6b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.86dec24f.js",revision:"d9a69e637240e3d7943251a90b3e238c"},{url:"assets/js/vendors~photo-swipe.80b35463.js",revision:"c2c5be201d082085d39de0a1d32c31ef"},{url:"assets/js/vendors~reveal.5b2c535b.js",revision:"ac1fe9b7a32264aac78e6238750a251e"},{url:"assets/js/vendors~valine.2638fe86.js",revision:"b2385adbbfe6adb9b8241621365bc97d"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"6cfa5d25bbe1e472018f6aab5c436607"},{url:"article/index.html",revision:"1d54c5f6431cfb24a3761ec889861b86"},{url:"basic/index.html",revision:"029c83938bc3dfe5888843292d79efae"},{url:"basic/markdown/demo/index.html",revision:"8436448bbf7d673aae1ad398d3801ce3"},{url:"basic/markdown/emoji/index.html",revision:"a655a2152d5dca920e9fbacfe4cdd54f"},{url:"basic/markdown/emoji/nature/index.html",revision:"ff2aee1c0da84eee7787ce457061e436"},{url:"basic/markdown/emoji/object/index.html",revision:"b639fa9112265c4ebbafed6687a12cad"},{url:"basic/markdown/emoji/people/index.html",revision:"bb5a38aba139c6b26f58d3a033ad5f89"},{url:"basic/markdown/emoji/place/index.html",revision:"7a5116ab680e92e34e03d17165f7b22b"},{url:"basic/markdown/emoji/symbol/index.html",revision:"69911cb56292e8f762f846f6d6d5b66b"},{url:"basic/markdown/index.html",revision:"f4076867f311948eea24281d57835290"},{url:"basic/vuepress/case/index.html",revision:"034c1180abc88af2a6865d0e9e182418"},{url:"basic/vuepress/command/index.html",revision:"5ac7e9dd4c72543dcb8dfda4dd1238bb"},{url:"basic/vuepress/file/index.html",revision:"c15ff567f6140e90b78958e10996530e"},{url:"basic/vuepress/index.html",revision:"4a5eaff8151d4901b6ca16d3ae624536"},{url:"basic/vuepress/plugin/index.html",revision:"3319d6dd44370db38683e48405951c96"},{url:"basic/vuepress/theme/index.html",revision:"014488a9da2f6d298dbad18879a0a16f"},{url:"category/basic/index.html",revision:"3bb3e2b092275f8f46305089f1600c6b"},{url:"category/basic/page/2/index.html",revision:"924f18cafe14eca9bc3b5dfb0d9b9ee8"},{url:"category/basic/page/3/index.html",revision:"b087d7a36e9f44a8552d3f4083079d97"},{url:"category/config/index.html",revision:"b98da23d67ad81adcc7eda8ad4f13f01"},{url:"category/config/page/2/index.html",revision:"b322e24a0a0bb66ea19c8c376f5a4771"},{url:"category/config/page/3/index.html",revision:"3b3f513e2f7e020c63a98dca26e4575e"},{url:"category/demo/index.html",revision:"ff9eba1115165cdfa961edf4b117ffe2"},{url:"category/FAQ/index.html",revision:"8f4656a2a3f5d16ce61d3de51f6e1ff2"},{url:"category/feature/index.html",revision:"d99650808a88f16a0ceadf34fbef66ac"},{url:"category/feature/page/2/index.html",revision:"e43e46b3d9eb8f1ae696f1f73c75a4cf"},{url:"category/feature/page/3/index.html",revision:"0c391fc8f008724e320906bc60519944"},{url:"category/index.html",revision:"7fa408edb776ed968d445c42556e2840"},{url:"category/instruction/index.html",revision:"a613ba1bc372e57ea167dde7b84a28ec"},{url:"category/layout/index.html",revision:"0c10a98c5de0e5b4fc5426282b1e6a1a"},{url:"category/layout/page/2/index.html",revision:"47c8ed1b345f41eeb657370825c78c15"},{url:"category/markdown/index.html",revision:"aa7ed2c84c02b759bf47a6255764d7d5"},{url:"config/index.html",revision:"c0b7db12a1a36754184678d74ab591a8"},{url:"config/page/index.html",revision:"31bf822ae9c0d409abc2e5af57a0fb0c"},{url:"config/plugin/container/index.html",revision:"cae181f778cd5c1756c4f0899103ce04"},{url:"config/plugin/copyright/index.html",revision:"62a23efb59fc0740cc71c6198fb17d2d"},{url:"config/plugin/index.html",revision:"ffd1a02861edfb60d493d2c0ff6cdaad"},{url:"config/stylus/index.html",revision:"126129e1c39e6da0d96ca438026cbca1"},{url:"config/theme/apperance/index.html",revision:"2c7e3197150dbf1020740fdc3340f07a"},{url:"config/theme/default/index.html",revision:"59bd5c5ac773731ebe4c6db6908aa720"},{url:"config/theme/feature/index.html",revision:"89cd90efb11fe3a48210c819820fce1c"},{url:"config/theme/index.html",revision:"1af0381b67d6dea55eeb886d9fc37b74"},{url:"config/theme/plugin/index.html",revision:"03d638e15e00f03c58f5e0426e6f902d"},{url:"demo/index.html",revision:"3f63553b1f87a10a4f94279031830fa5"},{url:"encrypt/index.html",revision:"617efc1345316f9b9f48b8d7118ce95b"},{url:"FAQ/index.html",revision:"5d0c61966631752419100c4369048131"},{url:"guide/feature/blog/index.html",revision:"13e3d594b46822ce9c64fa7a65550ef0"},{url:"guide/feature/comment/index.html",revision:"77eddebbb74dbc6c7913a846c36f1414"},{url:"guide/feature/component/index.html",revision:"3725c4b569d1b702193e6aeafa5cd9aa"},{url:"guide/feature/encrypt/index.html",revision:"e4be65e05497f6546cb4962c859acea1"},{url:"guide/feature/icon/index.html",revision:"57d5b6d9005e0f337c246f44064f5c6f"},{url:"guide/feature/index.html",revision:"2ef3b3d374d2cd0c8b60f082618a459b"},{url:"guide/feature/markdown/align/index.html",revision:"dd14842b0b0692b7e9545235a6dfd830"},{url:"guide/feature/markdown/demo/index.html",revision:"06330f869e7d5b2557c353b595b92676"},{url:"guide/feature/markdown/flowchart/index.html",revision:"b1d560b5c99c021581c9791c355d2c39"},{url:"guide/feature/markdown/footnote/index.html",revision:"dbba7da234f25b713218a8ba5f4fe451"},{url:"guide/feature/markdown/index.html",revision:"0996d46ced6bf23fd37ccee1b2b2e306"},{url:"guide/feature/markdown/mark/index.html",revision:"1b0ff6367dda9f8d936e5e7ce3308986"},{url:"guide/feature/markdown/presentation/index.html",revision:"cfc741e67db71a88160f7ee332e645f2"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"43063ce94fd7e1ce114654e4315e3306"},{url:"guide/feature/markdown/tex/index.html",revision:"d4c50a8a51b6d685df3df8988b7ff344"},{url:"guide/feature/page-info/index.html",revision:"fcf67af04dd1ff362793ffddcdfac025"},{url:"guide/feature/page/index.html",revision:"c8b29a4604d53a9118f6724105b72f31"},{url:"guide/feature/pwa/index.html",revision:"2346e9dfffbd3b9d0ada12716d969a37"},{url:"guide/feature/seo-sitemap/index.html",revision:"ddb08f2ce47d67ae77e3f824e274982b"},{url:"guide/feature/theme/index.html",revision:"75d531ae200ba5a84036565824d44d1d"},{url:"guide/feature/typescript/index.html",revision:"52f2641e27ab8b3322e0f00df83a0d19"},{url:"guide/index.html",revision:"79b06b1f1d6aad7044f1d914448b2ec3"},{url:"guide/install/index.html",revision:"0d660f954cb9facd6c7fe390f1426e12"},{url:"guide/layout/blog/index.html",revision:"3116b727eefcb25e600881b8f2ed55e4"},{url:"guide/layout/home/index.html",revision:"0c3570cd123e11a56c673a027f6c04be"},{url:"guide/layout/index.html",revision:"cfbe796c0a5b5f2164c3f3b9ba41f1f7"},{url:"guide/layout/navbar/index.html",revision:"781c9ca561f60a45c6d54cf1154e889d"},{url:"guide/layout/page/index.html",revision:"3db0d71fc11df0b4e9d78c77d28d1caf"},{url:"guide/layout/sidebar/index.html",revision:"56509e66f415d66ebfe0da52356f5979"},{url:"guide/layout/slides/index.html",revision:"0a30347cacfd38e29f5db091af74afe6"},{url:"index.html",revision:"64fd8b5fbe36bd79468a77fc6e0889e5"},{url:"slide/index.html",revision:"56990eda702c6a2e12790130ad9af0d9"},{url:"tag/blog/index.html",revision:"308eb8a2bda675776608e7b7a19eab31"},{url:"tag/comment/index.html",revision:"ec6cdf59bd37e2d7e5c9a7cac677f705"},{url:"tag/components/index.html",revision:"1d2c59a1069ffa13182c3ea996237f4c"},{url:"tag/config/index.html",revision:"7b46aeb3e665fe18b609b6f507fe3c26"},{url:"tag/config/page/2/index.html",revision:"9b87b349846f2b8f8106c119f110ee25"},{url:"tag/config/page/3/index.html",revision:"2ce985563b326c854c4141acdef64c4a"},{url:"tag/emoji/index.html",revision:"ec579b82566c53e9c513884a9df18185"},{url:"tag/emoji/page/2/index.html",revision:"b9e539e54bae81c606cd7a8af70e15fe"},{url:"tag/encrypt/index.html",revision:"ec58ac67c45135f6dd5495e1fb35410b"},{url:"tag/feature/index.html",revision:"c7c0152e1c269f05f0e4ff5e27014e0f"},{url:"tag/feature/page/2/index.html",revision:"4efb2da7fa73c4f56b84a5137093112d"},{url:"tag/feature/page/3/index.html",revision:"757f2882556997576804c48689598c59"},{url:"tag/feature/page/4/index.html",revision:"f72e9d1f645d41d704ee3968054675cb"},{url:"tag/feature/page/5/index.html",revision:"79a321af0d1ee1e12ca9f657aeef34d6"},{url:"tag/frontmatter/index.html",revision:"137bb4fcdfd6198d912baa25ad37d654"},{url:"tag/home/index.html",revision:"a8f443f7a4fd722759506e0075f85f18"},{url:"tag/icon/index.html",revision:"83e0c003c6c6c50797abf8ca8b0bae4b"},{url:"tag/index.html",revision:"9036c82297ab1ab5f03b169dd87c8bc2"},{url:"tag/intro/index.html",revision:"fa220262a18ac2896f370431cd88d298"},{url:"tag/layout/index.html",revision:"e8017297355401ec5bcc58e159615610"},{url:"tag/layout/page/2/index.html",revision:"ad9dbe4a94aa15226eb0365b53641622"},{url:"tag/markdown/index.html",revision:"2e3ae1b9d047ec04fa15556f3e10debf"},{url:"tag/markdown/page/2/index.html",revision:"581c8cebe066d8a313e8993d3707b056"},{url:"tag/markdown/page/3/index.html",revision:"0b0b01ebbbef08d8220ecb57bf0d7252"},{url:"tag/markdown/page/4/index.html",revision:"bab9d7ce7c0fa68de4deee70c6f4c2cd"},{url:"tag/navbar/index.html",revision:"336804332795675797649b993545ced6"},{url:"tag/page-info/index.html",revision:"116e0e4e6dfa195960782736d7d69d09"},{url:"tag/page/index.html",revision:"e66745cf6cdd1b6b08096b6381acdf36"},{url:"tag/plugin/index.html",revision:"bf9ed9f1e986827bb99fc02c91179cd6"},{url:"tag/pwa/index.html",revision:"80e143a114d9d5351512d062a90588d2"},{url:"tag/seo/index.html",revision:"9e2d9799522413a830df89f4a0e39b45"},{url:"tag/sidebar/index.html",revision:"95e5e137e7c99b2b9f16937fb13bb63c"},{url:"tag/sitemap/index.html",revision:"1825a2ca4017110c1649389fa1e2ba83"},{url:"tag/slides/index.html",revision:"50ca65ee22e2ec46fe1cd3a0669e3941"},{url:"tag/style/index.html",revision:"9d41865252f9f5d516c059162705a777"},{url:"tag/themeConfig/index.html",revision:"484010b9d24e9a555286b2007e05fc53"},{url:"tag/typescript/index.html",revision:"dc6094aaff3299db22c398d5661f529f"},{url:"tag/vuepress/index.html",revision:"10f604eaf72f58f74e9d13bd02a08d28"},{url:"tag/vuepress/page/2/index.html",revision:"f4bb590ecb25a8abb2ce538331dd3ca8"},{url:"timeline/index.html",revision:"9a7f69cbde03671d08d79af804b3c0d3"},{url:"zh/basic/index.html",revision:"52649e2e609401857490d4658c1badba"},{url:"zh/basic/markdown/demo/index.html",revision:"cd7f5c5e04ad2082cc913d066e2ba99e"},{url:"zh/basic/markdown/emoji/index.html",revision:"cc01b84e4277997392e8b8cb3e4a36e9"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"deaa17d9e390dca456b1e45fdf9b0886"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"5daa59139fdf6e5f811eaa6d02273d89"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"dc91a94219dd4bfc7fa9b499ccb27322"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"9407083b0bd068e14d2efd6549ae18b8"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"5c65d067170832bd41e5385fecced51e"},{url:"zh/basic/markdown/index.html",revision:"a1bebdbc4f82016012eec268be6ca4a8"},{url:"zh/basic/vuepress/case/index.html",revision:"3d9eaad43ef02fa281811dcd1b844a85"},{url:"zh/basic/vuepress/command/index.html",revision:"b1a01e1c0b5b72333256034b6a5856c0"},{url:"zh/basic/vuepress/file/index.html",revision:"b33cccb86c8ef86c8290fbc512fc1cf1"},{url:"zh/basic/vuepress/index.html",revision:"9676ba547882df84067b9cf3bd054531"},{url:"zh/basic/vuepress/plugin/index.html",revision:"51ce0c997722c304a784a0093b863fa2"},{url:"zh/basic/vuepress/theme/index.html",revision:"85feac03f37a5a52ca7b5f36b2034372"},{url:"zh/config/index.html",revision:"16a0f1699b65418a6b248bf3d6211f0e"},{url:"zh/config/page/index.html",revision:"c58b8bc4f336b4db2c0d64f0793f71a4"},{url:"zh/config/plugin/container/index.html",revision:"030d994f6c319da5d3fdbf0c6d5c542f"},{url:"zh/config/plugin/copyright/index.html",revision:"423223f4c66df7a0c5420d658a3543bb"},{url:"zh/config/plugin/index.html",revision:"4954380d79970b4734a9211e83798fbc"},{url:"zh/config/stylus/index.html",revision:"2a0c09cc14645d190713c281c53efdb0"},{url:"zh/config/theme/apperance/index.html",revision:"55c02268e8354d1155d84b8c2ee19c99"},{url:"zh/config/theme/default/index.html",revision:"ec2102efd9746d8d7ac5fb735ac23e97"},{url:"zh/config/theme/feature/index.html",revision:"e99f2827cb5cc55124746aa057d83dcb"},{url:"zh/config/theme/index.html",revision:"e0a33c4b68650909444d5f23cb1b4356"},{url:"zh/config/theme/plugin/index.html",revision:"c24b9b7396e46df8a7f98a57f8ead968"},{url:"zh/demo/index.html",revision:"5007533d9d5fec1ce111723885581d1f"},{url:"zh/FAQ/index.html",revision:"92a846e05b98893d4d92868853f3e3da"},{url:"zh/guide/feature/blog/index.html",revision:"6c642ab4a417eac643c525ae0e37f62b"},{url:"zh/guide/feature/comment/index.html",revision:"fdf64eebd4b26d3dd0253a64d3789dfa"},{url:"zh/guide/feature/component/index.html",revision:"5872be659480101eabacd4ae73b4bdb7"},{url:"zh/guide/feature/encrypt/index.html",revision:"71a66994874c1f3b2a4dd1ae5a3ea08e"},{url:"zh/guide/feature/icon/index.html",revision:"d641eab81fd84f7f29a6530f8fe9304c"},{url:"zh/guide/feature/index.html",revision:"88144a252e6097b5b516abfaeeea5df7"},{url:"zh/guide/feature/markdown/align/index.html",revision:"b8c8bb7e1d2b2f66e11cad1d63fd52ac"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"65ce428a473f3ca0e11350b9140c9dcb"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"fe6f9c1f21f005e615847c1851177c24"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"a666ea5897e5bbfa66f6ef89a75458ef"},{url:"zh/guide/feature/markdown/index.html",revision:"dc26b89d3b8cab9f298c58e66e14c313"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"fbe99ecc46688816d3792552d6e44840"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"b141642a9d330a16bec7712b0653752d"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"06b4e98905c4d90789a4332dc9bf80e0"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"dec96daf6addefb9af17a3589f3eb7d4"},{url:"zh/guide/feature/page-info/index.html",revision:"f3e96ae747b1684c816f88d8050076ef"},{url:"zh/guide/feature/page/index.html",revision:"205e5b16961bce43040d6e9281edca12"},{url:"zh/guide/feature/pwa/index.html",revision:"bf624dd76124dce7bc33f000ff22cebf"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"9675ced539cd1faee6952df806fe4ab6"},{url:"zh/guide/feature/theme/index.html",revision:"7eb23e842669026a4843d22aa966e368"},{url:"zh/guide/feature/typescript/index.html",revision:"54f2580e1755c5eb6d20631c2c605f76"},{url:"zh/guide/index.html",revision:"d6daa7e2e8327bfa3be4c411c86a17fa"},{url:"zh/guide/install/index.html",revision:"7d02ce9fda2d896207ac1ec38ffa9fb3"},{url:"zh/guide/layout/blog/index.html",revision:"3a0eb87ebf3452ab722730199feab48f"},{url:"zh/guide/layout/home/index.html",revision:"ff2c213e5d11f80e21e18a9e5d69fdfc"},{url:"zh/guide/layout/index.html",revision:"e764750b532f0e9e4b056b4f18123872"},{url:"zh/guide/layout/navbar/index.html",revision:"69fed216c68cd97dd485f592c75f4d18"},{url:"zh/guide/layout/page/index.html",revision:"7109761dc220db2ba1c4762e99898cb3"},{url:"zh/guide/layout/sidebar/index.html",revision:"667e29eaae11ab14488e4100d10b92b8"},{url:"zh/guide/layout/slides/index.html",revision:"0f31c4c6bb0761ecf3395d82bd2ad60c"},{url:"zh/index.html",revision:"813c0a66214ed5c8f51cad922f48c589"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
