if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.e7965f39.css",revision:"eaa18bad8f43182a1e1ccde6ca8555f5"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.d60875d5.js",revision:"e14e2e70050e0f38a2d1cdd6c1cbf136"},{url:"assets/js/126.0830f432.js",revision:"965b6106822abbfe0e640675b5dfff1f"},{url:"assets/js/127.986ef6a0.js",revision:"de84009e4814125e5ef883f185e73f0d"},{url:"assets/js/128.22be6053.js",revision:"fbc952263f7b0bb6235770a54ccff03b"},{url:"assets/js/app.26a3ec8c.js",revision:"556a71a04ecbc3deaca1d608d0637159"},{url:"assets/js/layout-Blog.514013da.js",revision:"3ec93926fdc33d4154067693ab99637e"},{url:"assets/js/layout-Blog~layout-Layout.232786f3.js",revision:"9e3c32735f3f0e76a2d6cb055ed35b87"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.eb95e295.js",revision:"fa85d36c0a79d440a20dcfbe6a585b48"},{url:"assets/js/layout-Layout.67f6cb21.js",revision:"47d0ae21ae507f466a7e8ec1e5dbe115"},{url:"assets/js/layout-NotFound.4ef5667d.js",revision:"5320d87a1ba148e516e5ea1f88579562"},{url:"assets/js/page-AboutVuePress--4a71114e.41dc2be3.js",revision:"3e848838978388a2950714576f1b0e82"},{url:"assets/js/page-Basic--770cb96b.3f82372f.js",revision:"59c5caf41ce53e8998fd96ab40c22585"},{url:"assets/js/page-Bloghomepage--64265752.2e531b32.js",revision:"d6102fc397acae8bf1ddccd6a2266be0"},{url:"assets/js/page-Blogrelated--17c260a2.1186c1a3.js",revision:"b0e3f2bef578e0e4e5f5887d6ed5a2ac"},{url:"assets/js/page-CommentFunction--5bb6671c.c0066339.js",revision:"29b9db841c9abef948583898e9452552"},{url:"assets/js/page-Commonproblems--2b571e9b.83151ab3.js",revision:"6846a5821eae35750913c2af92bfc16d"},{url:"assets/js/page-Config--35a0a7d9.694d2498.js",revision:"85622aca8bde3de645e53a4593ee1e06"},{url:"assets/js/page-Customalignment--4f21aa5c.fd49af22.js",revision:"27da3f70387dd1e45c984a5e9d5d7fe2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.1e74e807.js",revision:"63e4045cbcbd9260252f7b9eaef264ae"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.17d92148.js",revision:"bd285a847b988644f6fa87b2c918f8d3"},{url:"assets/js/page-Demos--f328658e.a51a912a.js",revision:"d2a7a4e0b676619c1366e531aee1a817"},{url:"assets/js/page-EmojiList--41bb29b9.14ff1f14.js",revision:"c5686bf0947e860a235f2477f706a20e"},{url:"assets/js/page-Emoji列表--404e6737.8747e2f7.js",revision:"f7838dc5febfa1d9fa4c5ad0e3b33592"},{url:"assets/js/page-Encryptionfunction--181bdc9c.fd291e96.js",revision:"b32f50e0b8e52bb5cccd83e45665fbb5"},{url:"assets/js/page-FileStructure--665a4f1c.c0c20476.js",revision:"e76ace2200ef5acd9ab09cc0a73fb9b2"},{url:"assets/js/page-Flowchart--7ce6d974.89dc699e.js",revision:"ca78b481424737656eddb11bd5128e62"},{url:"assets/js/page-Footnote--0c733e52.fdb1a9f5.js",revision:"4655a24c2a28e632932472d32972f631"},{url:"assets/js/page-HomePage--5834599c.bccf5ee1.js",revision:"f917f50be959291a19b1306acd45435d"},{url:"assets/js/page-InstallUsage--0ab466d2.55f4722d.js",revision:"d42d9c8415dd95add5af8100ff54894e"},{url:"assets/js/page-Introduction--d4910962.665c7059.js",revision:"ca38f422920265807b2f1ecca1915820"},{url:"assets/js/page-Layout--12bd4f0e.63b2018d.js",revision:"d61293e73d6999881f852c1aeda811cf"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.7b4313ee.js",revision:"3aaf789c025f7ad3c3e3c77e2993e06b"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.567bba4a.js",revision:"393ac745d61b60a440015b09e3d09126"},{url:"assets/js/page-MarkdownIntroduction--270989ce.bd36fe90.js",revision:"d6e0a2319203c3df07a49d2f040e9caf"},{url:"assets/js/page-Markdown介绍--0e6891b6.0cdd77d0.js",revision:"3fb7190646c948402eb01d7d7b0836a6"},{url:"assets/js/page-Markdown增强--6162938f.8082d9b3.js",revision:"e7aa261c9ad2e05b72173f5c9a9c4eaa"},{url:"assets/js/page-Markdown示例--5479fe88.812f4449.js",revision:"fd6c86d1547978e941f0dd96999c237c"},{url:"assets/js/page-Markup--6b1f341c.9e56e8bd.js",revision:"a5e96032fe19b9d54b2f6ce73235de19"},{url:"assets/js/page-Nature--749fb09c.176b7782.js",revision:"afca9bb367a269eb556fb9f127b32183"},{url:"assets/js/page-NavBar--c7bf87dc.2bafa2b3.js",revision:"b53e632eaf81d8cf97160551e088e910"},{url:"assets/js/page-NewComponent--1d138c72.6f15d139.js",revision:"8ed69c3c65e5f7a976d3437c5f2d964b"},{url:"assets/js/page-Newfeature--5136c541.327da6d0.js",revision:"9ef106b05e7e404aa4403c68508b3313"},{url:"assets/js/page-Object--16031ab2.f1bfc741.js",revision:"b1cf39a996af4c90506786fc61d1c2f9"},{url:"assets/js/page-Page--af17b59c.ccced597.js",revision:"f6d638fc3761c949e7d45d96e5e701be"},{url:"assets/js/page-PageConfiguration--0aacc152.a391985f.js",revision:"6c456c8fd4f52fcd8989cc6e567071cd"},{url:"assets/js/page-PageEnhance--03665ac8.6662c727.js",revision:"408f7ed172cceb1880593cde7d0594c0"},{url:"assets/js/page-Pageinformation--71efd5d2.e6cd5f4c.js",revision:"4315f710590cb0b693445d1ea009b8a0"},{url:"assets/js/page-People--2182769c.430bc767.js",revision:"e8a9db33f117e674057c53514c738e65"},{url:"assets/js/page-Place--951cdc00.585b4fe0.js",revision:"ae972d99469e74e5768226b53a8e3294"},{url:"assets/js/page-PluginDescription--137c6c07.461becd4.js",revision:"01c1e4322f3e7ee5caf80293fac0018a"},{url:"assets/js/page-Plugins--adbf415c.953246ec.js",revision:"b2c1e1d5db12821df273c4b7e48557d9"},{url:"assets/js/page-Presentationsupport--8f8e54dc.c5a8cc4c.js",revision:"c54a2b64554c3f376d5d22ea9cbb62db"},{url:"assets/js/page-PWA--01089712.a62ccad9.js",revision:"095997a387ffe0cad4caeb41c7d8f2d9"},{url:"assets/js/page-PWA--243ef2b8.b02faba7.js",revision:"1e9712a7dbde0d4c0428d4bf0738f9a3"},{url:"assets/js/page-SEOandSitemap--ccd3659c.64a769b3.js",revision:"c65a26e6c86b025b32c14a4063757f6a"},{url:"assets/js/page-SEO和Sitemap--2853f164.faffa256.js",revision:"de40bcf368d5f216907500c8b93fd422"},{url:"assets/js/page-Sidebar--2fa1ea2c.afe31a39.js",revision:"77380b5c848065e80c1256419bb34782"},{url:"assets/js/page-stylusconfiguration--6796cdf2.035f9844.js",revision:"5c4271e655b488700bb93c836688562d"},{url:"assets/js/page-stylus配置--0ce19a82.ce6c4dbd.js",revision:"9a84ee80cf5b20d93dc0c858bf07071d"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.86af8a4c.js",revision:"5df2063cec0d75940f4add945a064529"},{url:"assets/js/page-Symbol--a9259c5c.4d133937.js",revision:"84e0de41b8431aa4692b59aade0b06be"},{url:"assets/js/page-TexSupport--64cb5e50.f25be4df.js",revision:"84bc0e62490b33fac4cf0293d33b0acd"},{url:"assets/js/page-Tex语法支持--1e02b152.ca384a2b.js",revision:"111e7729e10cddfc93d734746f85dc77"},{url:"assets/js/page-ThemeConfig--1120a0ce.eb0f5efd.js",revision:"91782cf0a3957e957e214a8a8074578d"},{url:"assets/js/page-ThemeConfig--1726e14e.3a993745.js",revision:"a3ac3fe8be0c1d7f1a1cd9e769c525b4"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.ee2c3946.js",revision:"534f5f09ac39261a58aec5a80e773759"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.aa503767.js",revision:"42ebaf8838886986221e38490af39cdf"},{url:"assets/js/page-ThemePluginConfig--958196dc.89967cad.js",revision:"34c6a153bc0809df845e05097cca17ca"},{url:"assets/js/page-TSsupport--09728ac8.9e1a7716.js",revision:"682f1d1b2d9515e035f18aaf33615605"},{url:"assets/js/page-TS支持--4625f812.7d849d4a.js",revision:"8924ec77f524879b2746c762e857faf0"},{url:"assets/js/page-VuePress--b7060eee.29dbec75.js",revision:"c81c972317d0bf01c7bd74af485ccc2b"},{url:"assets/js/page-vuepress-plugin-container--31498112.2650e58a.js",revision:"539092dc5d4d77db31728ea556feac94"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.0b67c3ee.js",revision:"19144b9a3551b6196e8ce77c4c060174"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.2246e88b.js",revision:"073d39a0a031497de1bf8bf9f77838f9"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.fa958b37.js",revision:"6fa4cc31e99b7716bbc09ad1b89ea0a9"},{url:"assets/js/page-vuepress-theme-hope--354da24e.5cc49a96.js",revision:"84f0693cc3ac60cabbaa2eb84e101738"},{url:"assets/js/page-vuepress-theme-hope--776d8369.96b56753.js",revision:"316fd0b3a012b11dca5e493ba94bb28a"},{url:"assets/js/page-VuePressCases--082972f2.ffeb19f6.js",revision:"1780cd701d9bb91606fb0bde0842af75"},{url:"assets/js/page-VuePresscommands--9f3f316c.d9f8d433.js",revision:"0c5b04c08295f521d2279ba1f3b1dd2b"},{url:"assets/js/page-VuePress案例--531d5f3e.23aef7a3.js",revision:"880cefcbd7e31443d025a1bcda646d20"},{url:"assets/js/page-上下角标--8efed9dc.d7455f75.js",revision:"b83dde9ad76ea1c5016da180752a3c08"},{url:"assets/js/page-主题功能配置--5bb71452.3e6715ce.js",revision:"3a71e2414d721c9ec645e0f7e1c347ac"},{url:"assets/js/page-主题布局配置--7db7eff2.a10116f0.js",revision:"f79a28ae7828a4d697081dbe67b991af"},{url:"assets/js/page-主题插件配置--1b0c3e98.92058f28.js",revision:"cf0e30e86d15ae069198d5977640038a"},{url:"assets/js/page-主题配置--21dc088d.098fb0d7.js",revision:"b2825d98b434d72a5fa9a2e7cb5d91ef"},{url:"assets/js/page-主题配置--2c572572.ab30293a.js",revision:"32d7bfdb491e6151ab118e1ea012bc1a"},{url:"assets/js/page-人物--b4fc27dc.00ed98c2.js",revision:"e3bc2ef414a692ba29a0b228cc705e64"},{url:"assets/js/page-介绍--2e99d139.7a23f900.js",revision:"97cd3f9d2f3a5f9f4651dda8fb22d684"},{url:"assets/js/page-侧边栏--43054cb2.cbf6e5ab.js",revision:"7f5cad65072929ffce7ffb7d95cce8cd"},{url:"assets/js/page-加密功能--2361b7e4.4616e9ab.js",revision:"19ce3d3a7bb8830bb34a05be9d81dfdd"},{url:"assets/js/page-博客相关--6a3fd4f2.998099bc.js",revision:"19172df05184185d1ca41281325efa6c"},{url:"assets/js/page-博客首页--1eb2b298.009c15be.js",revision:"aae3a98aedc42a155a299b551c142892"},{url:"assets/js/page-地点--6710785c.5aab6de1.js",revision:"5eaec2689a9387f351887dfe1c438932"},{url:"assets/js/page-基础知识--4d466a79.4ab037e4.js",revision:"557248ac7d3b65e4b11539de41906c0d"},{url:"assets/js/page-安装使用--76e0e5b0.5f526f02.js",revision:"19cf96b035a34841effbae9e4a42c200"},{url:"assets/js/page-对象--e150da9c.09d052fe.js",revision:"154b44d9cddb21ba50145b406e18cce3"},{url:"assets/js/page-导航栏--183844fc.bf6f5c67.js",revision:"e04c48981cf1227d0c707dcd2c124a1e"},{url:"assets/js/page-布局--fa93e36a.1d343c8f.js",revision:"c3d6ca816771890ceadd99d94a2c7b37"},{url:"assets/js/page-常见问题--10ab790e.e187ea81.js",revision:"1f04338049de426f89cb53d72d2c6b9e"},{url:"assets/js/page-幻灯片支持--5808e664.b26f4162.js",revision:"0959373348b224922a6f18e41e0c1e5f"},{url:"assets/js/page-插件--32355f10.5e328fd4.js",revision:"abd3ccf2efb54e4f8ef5605910694600"},{url:"assets/js/page-插件说明--cbca1c8e.0b52bb16.js",revision:"7928ed5d96fe9ac226c8e8ab1163eeea"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.51e2dc79.js",revision:"be0900a3f5cf297c64cfce7cb7a78198"},{url:"assets/js/page-新增特性--30c6c799.c1731a25.js",revision:"650c2c076342cf56991a826d754845bc"},{url:"assets/js/page-新增组件--0979095e.670bd5db.js",revision:"36d95597876d9270a77d9587b7706a9f"},{url:"assets/js/page-标记--0ac52704.80f90c38.js",revision:"4e48f2c6d09c3197b47e93c769f89df6"},{url:"assets/js/page-流程图支持--582eff1c.fa3d9927.js",revision:"6c4f474061b88628845eaae678bf980e"},{url:"assets/js/page-深色模式与主题色--01662674.a9c132eb.js",revision:"01d45d633c72c73507ce5ba7f7215f1f"},{url:"assets/js/page-符号--2db8fb80.1b8fb36d.js",revision:"beefef4c67311bdf09dc63b98da5aa38"},{url:"assets/js/page-脚注--17d88350.fa044b2a.js",revision:"dcdec7057220d76ee88704a3188303ce"},{url:"assets/js/page-自定义对齐--048d31dc.e3686623.js",revision:"0d2b160b3a71eea1f95f9817bf069e19"},{url:"assets/js/page-自然--7ec33be2.0a822ed5.js",revision:"8191576d1c9020f8d295024ee848d70e"},{url:"assets/js/page-评论功能--350aff9a.e9d10549.js",revision:"d7bbadbd05d1fc5db635ea3bc514b365"},{url:"assets/js/page-配置--d315f8fe.96c201cc.js",revision:"fc17abe26ec1e2f8338d204e2e3a6aa6"},{url:"assets/js/page-页面--78423bfe.731362b6.js",revision:"0992f92336f0a5d7d682c03d3b7ba409"},{url:"assets/js/page-页面信息--455b9800.67a226c2.js",revision:"2bc9c608cde81bc976a5748c906d7e8c"},{url:"assets/js/page-页面增强--2e4cf75c.854b389c.js",revision:"468667021dc6acac670985c31543be15"},{url:"assets/js/page-页面配置--02399408.1c549297.js",revision:"23f0f909c839f2948899db577b581c6e"},{url:"assets/js/page-项目指令--2f3d7c1c.8e2be43d.js",revision:"a59728ec2a3e4ffa23d648967790b5da"},{url:"assets/js/page-项目案例--1f3d6482.84563603.js",revision:"8fe8bc36bb738126e32c00093a8ef72a"},{url:"assets/js/page-首页--79a22944.d0e73bf6.js",revision:"9be90f693f70bb37d1feb1026d4264fe"},{url:"assets/js/page-默认主题配置--0d5b7f32.d1bad783.js",revision:"033fa288bee4973c1500bb45941de4a6"},{url:"assets/js/vendors~docsearch.11fb2361.js",revision:"1c9410bf99e502fa191521d255e59ec0"},{url:"assets/js/vendors~flowchart.2cc4eb72.js",revision:"220f8297260f614c4781510bae653856"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5ed4bed6.js",revision:"ac998736d669ba6778461bc0dd0b253b"},{url:"assets/js/vendors~photo-swipe.d998f19d.js",revision:"bde310b1ca1fb2744277b09a6abde41f"},{url:"assets/js/vendors~reveal.a1b3e84b.js",revision:"08c1b924cefda9e4c8ba4743b5205a1c"},{url:"assets/js/vendors~valine.179d580e.js",revision:"ab78a8e4a93853d1b1a456b09f8a19a9"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"a9d10a55680cb31c2d1629557afca4e0"},{url:"article/index.html",revision:"e12893726bb371cc07ef7bd902c1871f"},{url:"basic/index.html",revision:"8224f0194733546babff225040199795"},{url:"basic/markdown/demo/index.html",revision:"da0c9c49791210c03551bb6361890844"},{url:"basic/markdown/emoji/index.html",revision:"838c69d56f59db770a108d5705a6a438"},{url:"basic/markdown/emoji/nature/index.html",revision:"95ed5f39ea17873bf02a0992c7730a0b"},{url:"basic/markdown/emoji/object/index.html",revision:"0138ea2f24f13dd4871b0e1dacb6d520"},{url:"basic/markdown/emoji/people/index.html",revision:"e84414174e1f70d87810c92743f4c87b"},{url:"basic/markdown/emoji/place/index.html",revision:"b351472646ab83e6e07cb9123243565c"},{url:"basic/markdown/emoji/symbol/index.html",revision:"19b3c0a86675f6ebc4f00ce0a5833b1c"},{url:"basic/markdown/index.html",revision:"65fd169e9dc6e307220fe4f02dce7a4e"},{url:"basic/vuepress/case/index.html",revision:"fd0d292c588b6b1dc8e446ff01642d63"},{url:"basic/vuepress/command/index.html",revision:"a76a9dac5326fddf5a5eb6a178b9dcae"},{url:"basic/vuepress/file/index.html",revision:"2b13291b3a1dddc6a6a27aa8ab2abd16"},{url:"basic/vuepress/index.html",revision:"9a24d1b864f22160344c8d184e910af6"},{url:"basic/vuepress/plugin/index.html",revision:"51cb2a62ad017123d5d8369409bb22ec"},{url:"basic/vuepress/theme/index.html",revision:"e5f4a0909c936647185201074344b47a"},{url:"category/basic/index.html",revision:"a191cd93f1063fc786b2dba6d6284413"},{url:"category/basic/page/2/index.html",revision:"16dc9c35b2b7d0152a38b3adf71dd911"},{url:"category/basic/page/3/index.html",revision:"cc8bf86e67ad671bed84c5be57f5b81b"},{url:"category/config/index.html",revision:"1cf564efdbe9d737a7da20fc6e81830a"},{url:"category/config/page/2/index.html",revision:"40a45abf2ab611e02b8246c27f1d1f30"},{url:"category/config/page/3/index.html",revision:"cdf49647a45143303ca8f1410a898fc6"},{url:"category/demo/index.html",revision:"2197fdcf5aa5617f0ab5c86256471ed6"},{url:"category/FAQ/index.html",revision:"bbf0ce35dd1fab12611addf78cf7ae5b"},{url:"category/feature/index.html",revision:"78104018786b688720fd5ee542aeec92"},{url:"category/feature/page/2/index.html",revision:"85c2be957052398a4795ac4d67d1ce42"},{url:"category/feature/page/3/index.html",revision:"c71c127b4e254972f2d498ca8bfa3219"},{url:"category/index.html",revision:"358d327f0dfbb447b2c8718fc7059920"},{url:"category/instruction/index.html",revision:"28013a279a8a5942f8a37f3803f70303"},{url:"category/layout/index.html",revision:"d8720784e9ff81c98e2f604a44787093"},{url:"category/layout/page/2/index.html",revision:"1f8711d5cf40e135019938e19c30f2c6"},{url:"category/markdown/index.html",revision:"e0fb13a661693185df2e310574c58d9f"},{url:"config/index.html",revision:"7139f8ccad376c9c19131ac9b56181d4"},{url:"config/page/index.html",revision:"be6de0943862dc753bd83f47a4321780"},{url:"config/plugin/container/index.html",revision:"71209c8075cf3495f1eec6c148f03932"},{url:"config/plugin/copyright/index.html",revision:"1858919849c5ff6adf3ca77c7548bcf6"},{url:"config/plugin/index.html",revision:"ee4aa6788756788b86a222d7ab2c2579"},{url:"config/stylus/index.html",revision:"332dbc63ffa2ada58906013b0817032f"},{url:"config/theme/apperance/index.html",revision:"49f0a3683ef79365fe35eb6cfc27feb6"},{url:"config/theme/default/index.html",revision:"c23493d7b1b907947a18ac353b2b5181"},{url:"config/theme/feature/index.html",revision:"59d241e8930e650e2ecb074c582de721"},{url:"config/theme/index.html",revision:"18ffa9e1b37ed7b48d53a4026819948e"},{url:"config/theme/plugin/index.html",revision:"a1d26d89e0140c8d7b6fe47a066337e8"},{url:"demo/index.html",revision:"c5846663bf9d944c61bf1c0d2b598878"},{url:"FAQ/index.html",revision:"c110fdcbfde80074a95e2c2e000016e3"},{url:"guide/feature/blog/index.html",revision:"82dac15dbfd861f5fd0482488b3c460b"},{url:"guide/feature/comment/index.html",revision:"4a6f02ab63f7aa2a1bcabf8e6467dbf9"},{url:"guide/feature/component/index.html",revision:"cb5622eb8e81537ff4256a602882d383"},{url:"guide/feature/encrypt/index.html",revision:"4b391b49d9500c00836bfd70d0581c10"},{url:"guide/feature/index.html",revision:"5f01353bbd3af397b29e8b28ff65b28c"},{url:"guide/feature/markdown/align/index.html",revision:"c278210b69301fc6ac33908003e7f75c"},{url:"guide/feature/markdown/flowchart/index.html",revision:"1b1ed84eb6744841e8d3035291092087"},{url:"guide/feature/markdown/footnote/index.html",revision:"a356804721d4281f733a1ea3fb74b0af"},{url:"guide/feature/markdown/index.html",revision:"7d065a2b251379830917459cd1b214e2"},{url:"guide/feature/markdown/mark/index.html",revision:"a656de693ea82e5ddf899f6c40b36ce1"},{url:"guide/feature/markdown/presentation/index.html",revision:"83e95a7613c0cf12bdafbb4d27b6cc64"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"786b561420e933a1741661a46aa92d8c"},{url:"guide/feature/markdown/tex/index.html",revision:"9298e457f4747c4d764e45c7dbb05d98"},{url:"guide/feature/page-info/index.html",revision:"049ebfd53580b845c133a8cde347c3ed"},{url:"guide/feature/page/index.html",revision:"ef0d2b68e758a46b27a850aaf1311cb7"},{url:"guide/feature/pwa/index.html",revision:"33a71277ad9407e4fd4a66a54d50ce38"},{url:"guide/feature/seo-sitemap/index.html",revision:"ca5c0cf41c92f8a0efa26825ea771cbd"},{url:"guide/feature/theme/index.html",revision:"ae189d165839d5cab836f68619e7dd58"},{url:"guide/feature/typescript/index.html",revision:"0180d0eabe45b31b3051ac787a5e732c"},{url:"guide/index.html",revision:"581f80f5be99e2fb2a68a1b3f898193a"},{url:"guide/install/index.html",revision:"4e8bbc3f7f34db0590f208e764e4ad88"},{url:"guide/layout/blog/index.html",revision:"46ff6828122c6292bc9fe97b8bb6c6a1"},{url:"guide/layout/home/index.html",revision:"054811f3b26170aa6f2e666a5e048767"},{url:"guide/layout/index.html",revision:"c7d927742b95cff076f4ac08bbf65327"},{url:"guide/layout/navbar/index.html",revision:"c0703a1033dd57ee5adaf83c382fef50"},{url:"guide/layout/page/index.html",revision:"600736f51b7ae56098a8282873768c5c"},{url:"guide/layout/sidebar/index.html",revision:"1bd07351674d2482e0b5de29faa26313"},{url:"index.html",revision:"7bc1b13e200c41b694b8fd22f9fbc601"},{url:"tag/blog/index.html",revision:"f67e8856c1e1e6cae14b67f653d785bb"},{url:"tag/comment/index.html",revision:"0e8ce90ad7082f411c8c7238f159508a"},{url:"tag/components/index.html",revision:"2331b1c755b623c2dda6fd4742a1779c"},{url:"tag/config/index.html",revision:"83736d803afb6b3f13bebe63493a6168"},{url:"tag/config/page/2/index.html",revision:"e5783da46a12986ea9eb69a47818921e"},{url:"tag/config/page/3/index.html",revision:"f3599a95a0cc2b36e926568f177f776a"},{url:"tag/emoji/index.html",revision:"3cd3d74c9bebbe394815e2156815bdd2"},{url:"tag/emoji/page/2/index.html",revision:"7fcdf8e7685b85737cd8a9c540c5c96e"},{url:"tag/encrypt/index.html",revision:"a04dcec513f8af1b493479458d2e09e0"},{url:"tag/feature/index.html",revision:"17e1ac2e0bd4f79a318f160d92d3335e"},{url:"tag/feature/page/2/index.html",revision:"30baa35a6b96882e7e3e7b260e6b0a50"},{url:"tag/feature/page/3/index.html",revision:"67fd253ac0162d89b61f21acfd5fe610"},{url:"tag/feature/page/4/index.html",revision:"87786cf44e9e074befc8e4079e3a9ccb"},{url:"tag/frontmatter/index.html",revision:"b1c6a8360e15f7e0b1657db4e79c99e0"},{url:"tag/home/index.html",revision:"b9eae88a74d62ac1fac199d6ccebfa28"},{url:"tag/index.html",revision:"3011996cdaed1c085036565655b9ac45"},{url:"tag/intro/index.html",revision:"dc389abdb67587dab4ba6da52b94d23c"},{url:"tag/layout/index.html",revision:"f1ccc7cb14362528424d9947c36198a0"},{url:"tag/layout/page/2/index.html",revision:"2fd9147c67c5a27f023eb62010c56119"},{url:"tag/markdown/index.html",revision:"732cce43234f2c691f093b11f2d76272"},{url:"tag/markdown/page/2/index.html",revision:"e8a86a900372d661a93ae0c4615dc8ca"},{url:"tag/markdown/page/3/index.html",revision:"fffd41c87f6f6207b48d2036eda30272"},{url:"tag/navbar/index.html",revision:"5447dd5978153249dd7e6f9e31cc9ceb"},{url:"tag/page-info/index.html",revision:"6102195e13e8e217f9093d1ca6922a69"},{url:"tag/page/index.html",revision:"87fd3bc22cba0b35336ec0c77e27e930"},{url:"tag/plugin/index.html",revision:"360ec499a56b6c523e602a2f3312e086"},{url:"tag/pwa/index.html",revision:"80879c293b7e993d8897ec182cb4aad7"},{url:"tag/seo/index.html",revision:"23088c6849a5030ea7f2f14f9ea426ac"},{url:"tag/sidebar/index.html",revision:"7c0da6dd6c592375d80491234032aa46"},{url:"tag/sitemap/index.html",revision:"0dbd1f3da4f98b3291de08e82111ede3"},{url:"tag/style/index.html",revision:"007776ce62d300759827b3899fc696c1"},{url:"tag/themeConfig/index.html",revision:"3b001f7b6c155c08abcae66ef29f6a98"},{url:"tag/typescript/index.html",revision:"76235e440f988dabc6230c521804eb34"},{url:"tag/vuepress/index.html",revision:"be17ede4faebacf2c4bf0c480520f639"},{url:"tag/vuepress/page/2/index.html",revision:"9f1e16975699a05aed1eb6089f0f12fb"},{url:"timeline/index.html",revision:"4434792660f25dcbb631676811705922"},{url:"zh/basic/index.html",revision:"dd1f3f440d55e3a27a193a77fa96ce7b"},{url:"zh/basic/markdown/demo/index.html",revision:"6a417e34363a882f24ffe11141052381"},{url:"zh/basic/markdown/emoji/index.html",revision:"38d7f074d71e1b9a052e983d4f71999b"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"d984f214c8f83b456b8086f5438a9188"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"19f5f8aa580b3577d2e3c71ba7e95ca9"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"76168f3bc63dd3a99bf46fa1fbc54e46"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"e4b6ff1660f26ef81f27c8c14354fb4f"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"405b26bfc4f28b396d267b86680a5343"},{url:"zh/basic/markdown/index.html",revision:"b21c5e489c22ee0ca8340c219f0e7429"},{url:"zh/basic/vuepress/case/index.html",revision:"051d073a1f9115746dd8b03b861c37b7"},{url:"zh/basic/vuepress/command/index.html",revision:"3c554b85627482e8a7f68cca1738ce90"},{url:"zh/basic/vuepress/file/index.html",revision:"0a58be7c9b5102b06685508b51261c99"},{url:"zh/basic/vuepress/index.html",revision:"85350bd0c5ad271131529b9f49071edd"},{url:"zh/basic/vuepress/plugin/index.html",revision:"b1ee5bdc45a11be33c9e61cb3d664a80"},{url:"zh/basic/vuepress/theme/index.html",revision:"f27bbf11e2ac1488f65ddbeaa714b458"},{url:"zh/config/index.html",revision:"ea5650ee5decac2fbba794b9bbfe12ab"},{url:"zh/config/page/index.html",revision:"02f3dbe680827edf4723aaad19bc9c64"},{url:"zh/config/plugin/container/index.html",revision:"995f6fe8e9e6d5eb4955b1b123840e7e"},{url:"zh/config/plugin/copyright/index.html",revision:"877bdfd944d448ba841b97ba5625d3a6"},{url:"zh/config/plugin/index.html",revision:"a0eef4496354d7c4895b88f10cb1032b"},{url:"zh/config/stylus/index.html",revision:"ce66588132b9c4317f87088dd7090025"},{url:"zh/config/theme/apperance/index.html",revision:"aa8adabe294a67154ca11cb2b59b230e"},{url:"zh/config/theme/default/index.html",revision:"61c839d339790ff1e494fbefe7ac72e1"},{url:"zh/config/theme/feature/index.html",revision:"1d1e14a479f795b942729a565c400e93"},{url:"zh/config/theme/index.html",revision:"c3e04c97ae8510d87ed77d3bebe12e53"},{url:"zh/config/theme/plugin/index.html",revision:"443aad007c0b37b6b625a2d43aac7922"},{url:"zh/demo/index.html",revision:"85c2cae4f79ab5edf222e55a856c4dfe"},{url:"zh/FAQ/index.html",revision:"6d1e9fcbf7021a7aa12c099ebd718315"},{url:"zh/guide/feature/blog/index.html",revision:"6f4ef4835860a78a1da61b7a9a751c2b"},{url:"zh/guide/feature/comment/index.html",revision:"4894be45907c74409afea55c2d4142b2"},{url:"zh/guide/feature/component/index.html",revision:"60e7611fbae726dcbaa84cd4ca26d1d4"},{url:"zh/guide/feature/encrypt/index.html",revision:"793951a3466c5c4de1030f939779ce94"},{url:"zh/guide/feature/index.html",revision:"c3c393c6b4e3a2500778e1c2fd5f981e"},{url:"zh/guide/feature/markdown/align/index.html",revision:"197b947267ed79f0cf4de8f42820ddb7"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"cbcc8516dc1a501d867f8fde0c234730"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"f7f76ab60596fefffe70e5936ce526ad"},{url:"zh/guide/feature/markdown/index.html",revision:"204ec64d54baefc5298798e9fdfab9f8"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"a05c29d156a756714b8594cc413cf02e"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"f8903de44013f3bb2e6491e4b3155eed"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"f0c2a9f76e65f1a70912c76ffd0d9a2c"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"922ec6505e7e6574f089ccf5d39caad4"},{url:"zh/guide/feature/page-info/index.html",revision:"35242d2dc07fb538dccf7b2d968d5651"},{url:"zh/guide/feature/page/index.html",revision:"5685c22e2e4f5532cc2efd56967d60b6"},{url:"zh/guide/feature/pwa/index.html",revision:"97bef4f16afc698bf4073fbfdbec2573"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"e39e5a6da3fbb6a69c63a3fe65836738"},{url:"zh/guide/feature/theme/index.html",revision:"d671ca59b9d1bc7cb8a970e80e4ca701"},{url:"zh/guide/feature/typescript/index.html",revision:"4374d9bfc3486b06f8dde358b73df4c7"},{url:"zh/guide/index.html",revision:"5f140286036b9b08e58c3adc06ff9ad9"},{url:"zh/guide/install/index.html",revision:"3082f29fd613ef1863b1905297363040"},{url:"zh/guide/layout/blog/index.html",revision:"af96d4f3c05847d0400f7b9182b1fc83"},{url:"zh/guide/layout/home/index.html",revision:"9f30f58be52b52f007ec4ddaa2c7b57a"},{url:"zh/guide/layout/index.html",revision:"6b03de9a71890257b2cd2ee5e60ff41e"},{url:"zh/guide/layout/navbar/index.html",revision:"0d81b18822644651c91db6fca5764519"},{url:"zh/guide/layout/page/index.html",revision:"422729e028298677b813c8e6f0607678"},{url:"zh/guide/layout/sidebar/index.html",revision:"c2bf14f3dbf3c1910d78e2010f568a12"},{url:"zh/index.html",revision:"c78deac136cfb32a65431fa79c2dd3e1"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
