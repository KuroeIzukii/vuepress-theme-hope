if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.60c60177.css",revision:"6efd6d10b7777ddb5894b7da5eedc7e6"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/125.d60875d5.js",revision:"e14e2e70050e0f38a2d1cdd6c1cbf136"},{url:"assets/js/126.0830f432.js",revision:"965b6106822abbfe0e640675b5dfff1f"},{url:"assets/js/127.986ef6a0.js",revision:"de84009e4814125e5ef883f185e73f0d"},{url:"assets/js/128.22be6053.js",revision:"fbc952263f7b0bb6235770a54ccff03b"},{url:"assets/js/app.c133dab9.js",revision:"d2a353ea4a843efcc2e590d5db609894"},{url:"assets/js/layout-Blog.514013da.js",revision:"3ec93926fdc33d4154067693ab99637e"},{url:"assets/js/layout-Blog~layout-Layout.bb524f53.js",revision:"cebc0dc2d2b008cd1ebe4218d3bfc8b2"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.05540262.js",revision:"18371adc4983380a80554b8a1e65ff2b"},{url:"assets/js/layout-Layout.67f6cb21.js",revision:"47d0ae21ae507f466a7e8ec1e5dbe115"},{url:"assets/js/layout-NotFound.4ef5667d.js",revision:"5320d87a1ba148e516e5ea1f88579562"},{url:"assets/js/page-AboutVuePress--4a71114e.41dc2be3.js",revision:"3e848838978388a2950714576f1b0e82"},{url:"assets/js/page-Basic--770cb96b.3f82372f.js",revision:"59c5caf41ce53e8998fd96ab40c22585"},{url:"assets/js/page-Bloghomepage--64265752.2e531b32.js",revision:"d6102fc397acae8bf1ddccd6a2266be0"},{url:"assets/js/page-Blogrelated--17c260a2.1186c1a3.js",revision:"b0e3f2bef578e0e4e5f5887d6ed5a2ac"},{url:"assets/js/page-CommentFunction--5bb6671c.c0066339.js",revision:"29b9db841c9abef948583898e9452552"},{url:"assets/js/page-Commonproblems--2b571e9b.83151ab3.js",revision:"6846a5821eae35750913c2af92bfc16d"},{url:"assets/js/page-Config--35a0a7d9.694d2498.js",revision:"85622aca8bde3de645e53a4593ee1e06"},{url:"assets/js/page-Customalignment--4f21aa5c.fd49af22.js",revision:"27da3f70387dd1e45c984a5e9d5d7fe2"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.1e74e807.js",revision:"63e4045cbcbd9260252f7b9eaef264ae"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.17d92148.js",revision:"bd285a847b988644f6fa87b2c918f8d3"},{url:"assets/js/page-Demos--f328658e.a51a912a.js",revision:"d2a7a4e0b676619c1366e531aee1a817"},{url:"assets/js/page-EmojiList--41bb29b9.14ff1f14.js",revision:"c5686bf0947e860a235f2477f706a20e"},{url:"assets/js/page-Emoji列表--404e6737.8747e2f7.js",revision:"f7838dc5febfa1d9fa4c5ad0e3b33592"},{url:"assets/js/page-Encryptionfunction--181bdc9c.fd291e96.js",revision:"b32f50e0b8e52bb5cccd83e45665fbb5"},{url:"assets/js/page-FileStructure--665a4f1c.c0c20476.js",revision:"e76ace2200ef5acd9ab09cc0a73fb9b2"},{url:"assets/js/page-Flowchart--7ce6d974.89dc699e.js",revision:"ca78b481424737656eddb11bd5128e62"},{url:"assets/js/page-Footnote--0c733e52.fdb1a9f5.js",revision:"4655a24c2a28e632932472d32972f631"},{url:"assets/js/page-HomePage--5834599c.bccf5ee1.js",revision:"f917f50be959291a19b1306acd45435d"},{url:"assets/js/page-InstallUsage--0ab466d2.55f4722d.js",revision:"d42d9c8415dd95add5af8100ff54894e"},{url:"assets/js/page-Introduction--d4910962.665c7059.js",revision:"ca38f422920265807b2f1ecca1915820"},{url:"assets/js/page-Layout--12bd4f0e.63b2018d.js",revision:"d61293e73d6999881f852c1aeda811cf"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.7b4313ee.js",revision:"3aaf789c025f7ad3c3e3c77e2993e06b"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.567bba4a.js",revision:"393ac745d61b60a440015b09e3d09126"},{url:"assets/js/page-MarkdownIntroduction--270989ce.bd36fe90.js",revision:"d6e0a2319203c3df07a49d2f040e9caf"},{url:"assets/js/page-Markdown介绍--0e6891b6.0cdd77d0.js",revision:"3fb7190646c948402eb01d7d7b0836a6"},{url:"assets/js/page-Markdown增强--6162938f.8082d9b3.js",revision:"e7aa261c9ad2e05b72173f5c9a9c4eaa"},{url:"assets/js/page-Markdown示例--5479fe88.812f4449.js",revision:"fd6c86d1547978e941f0dd96999c237c"},{url:"assets/js/page-Markup--6b1f341c.9e56e8bd.js",revision:"a5e96032fe19b9d54b2f6ce73235de19"},{url:"assets/js/page-Nature--749fb09c.176b7782.js",revision:"afca9bb367a269eb556fb9f127b32183"},{url:"assets/js/page-NavBar--c7bf87dc.2bafa2b3.js",revision:"b53e632eaf81d8cf97160551e088e910"},{url:"assets/js/page-NewComponent--1d138c72.6f15d139.js",revision:"8ed69c3c65e5f7a976d3437c5f2d964b"},{url:"assets/js/page-Newfeature--5136c541.327da6d0.js",revision:"9ef106b05e7e404aa4403c68508b3313"},{url:"assets/js/page-Object--16031ab2.f1bfc741.js",revision:"b1cf39a996af4c90506786fc61d1c2f9"},{url:"assets/js/page-Page--af17b59c.ccced597.js",revision:"f6d638fc3761c949e7d45d96e5e701be"},{url:"assets/js/page-PageConfiguration--0aacc152.a391985f.js",revision:"6c456c8fd4f52fcd8989cc6e567071cd"},{url:"assets/js/page-PageEnhance--03665ac8.6662c727.js",revision:"408f7ed172cceb1880593cde7d0594c0"},{url:"assets/js/page-Pageinformation--71efd5d2.e6cd5f4c.js",revision:"4315f710590cb0b693445d1ea009b8a0"},{url:"assets/js/page-People--2182769c.430bc767.js",revision:"e8a9db33f117e674057c53514c738e65"},{url:"assets/js/page-Place--951cdc00.585b4fe0.js",revision:"ae972d99469e74e5768226b53a8e3294"},{url:"assets/js/page-PluginDescription--137c6c07.461becd4.js",revision:"01c1e4322f3e7ee5caf80293fac0018a"},{url:"assets/js/page-Plugins--adbf415c.953246ec.js",revision:"b2c1e1d5db12821df273c4b7e48557d9"},{url:"assets/js/page-Presentationsupport--8f8e54dc.c5a8cc4c.js",revision:"c54a2b64554c3f376d5d22ea9cbb62db"},{url:"assets/js/page-PWA--01089712.a62ccad9.js",revision:"095997a387ffe0cad4caeb41c7d8f2d9"},{url:"assets/js/page-PWA--243ef2b8.b02faba7.js",revision:"1e9712a7dbde0d4c0428d4bf0738f9a3"},{url:"assets/js/page-SEOandSitemap--ccd3659c.64a769b3.js",revision:"c65a26e6c86b025b32c14a4063757f6a"},{url:"assets/js/page-SEO和Sitemap--2853f164.faffa256.js",revision:"de40bcf368d5f216907500c8b93fd422"},{url:"assets/js/page-Sidebar--2fa1ea2c.afe31a39.js",revision:"77380b5c848065e80c1256419bb34782"},{url:"assets/js/page-stylusconfiguration--6796cdf2.035f9844.js",revision:"5c4271e655b488700bb93c836688562d"},{url:"assets/js/page-stylus配置--0ce19a82.ce6c4dbd.js",revision:"9a84ee80cf5b20d93dc0c858bf07071d"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.86af8a4c.js",revision:"5df2063cec0d75940f4add945a064529"},{url:"assets/js/page-Symbol--a9259c5c.4d133937.js",revision:"84e0de41b8431aa4692b59aade0b06be"},{url:"assets/js/page-TexSupport--64cb5e50.f25be4df.js",revision:"84bc0e62490b33fac4cf0293d33b0acd"},{url:"assets/js/page-Tex语法支持--1e02b152.ca384a2b.js",revision:"111e7729e10cddfc93d734746f85dc77"},{url:"assets/js/page-ThemeConfig--1120a0ce.eb0f5efd.js",revision:"91782cf0a3957e957e214a8a8074578d"},{url:"assets/js/page-ThemeConfig--1726e14e.3a993745.js",revision:"a3ac3fe8be0c1d7f1a1cd9e769c525b4"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.ee2c3946.js",revision:"534f5f09ac39261a58aec5a80e773759"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.aa503767.js",revision:"42ebaf8838886986221e38490af39cdf"},{url:"assets/js/page-ThemePluginConfig--958196dc.89967cad.js",revision:"34c6a153bc0809df845e05097cca17ca"},{url:"assets/js/page-TSsupport--09728ac8.9e1a7716.js",revision:"682f1d1b2d9515e035f18aaf33615605"},{url:"assets/js/page-TS支持--4625f812.7d849d4a.js",revision:"8924ec77f524879b2746c762e857faf0"},{url:"assets/js/page-VuePress--b7060eee.29dbec75.js",revision:"c81c972317d0bf01c7bd74af485ccc2b"},{url:"assets/js/page-vuepress-plugin-container--31498112.2650e58a.js",revision:"539092dc5d4d77db31728ea556feac94"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.0b67c3ee.js",revision:"19144b9a3551b6196e8ce77c4c060174"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.2246e88b.js",revision:"073d39a0a031497de1bf8bf9f77838f9"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.fa958b37.js",revision:"6fa4cc31e99b7716bbc09ad1b89ea0a9"},{url:"assets/js/page-vuepress-theme-hope--354da24e.5cc49a96.js",revision:"84f0693cc3ac60cabbaa2eb84e101738"},{url:"assets/js/page-vuepress-theme-hope--776d8369.96b56753.js",revision:"316fd0b3a012b11dca5e493ba94bb28a"},{url:"assets/js/page-VuePressCases--082972f2.ffeb19f6.js",revision:"1780cd701d9bb91606fb0bde0842af75"},{url:"assets/js/page-VuePresscommands--9f3f316c.d9f8d433.js",revision:"0c5b04c08295f521d2279ba1f3b1dd2b"},{url:"assets/js/page-VuePress案例--531d5f3e.23aef7a3.js",revision:"880cefcbd7e31443d025a1bcda646d20"},{url:"assets/js/page-上下角标--8efed9dc.d7455f75.js",revision:"b83dde9ad76ea1c5016da180752a3c08"},{url:"assets/js/page-主题功能配置--5bb71452.3e6715ce.js",revision:"3a71e2414d721c9ec645e0f7e1c347ac"},{url:"assets/js/page-主题布局配置--7db7eff2.a10116f0.js",revision:"f79a28ae7828a4d697081dbe67b991af"},{url:"assets/js/page-主题插件配置--1b0c3e98.92058f28.js",revision:"cf0e30e86d15ae069198d5977640038a"},{url:"assets/js/page-主题配置--21dc088d.4f327bde.js",revision:"4a3d4733c5eeca95c62e162321e48f13"},{url:"assets/js/page-主题配置--2c572572.ab30293a.js",revision:"32d7bfdb491e6151ab118e1ea012bc1a"},{url:"assets/js/page-人物--b4fc27dc.00ed98c2.js",revision:"e3bc2ef414a692ba29a0b228cc705e64"},{url:"assets/js/page-介绍--2e99d139.7a23f900.js",revision:"97cd3f9d2f3a5f9f4651dda8fb22d684"},{url:"assets/js/page-侧边栏--43054cb2.cbf6e5ab.js",revision:"7f5cad65072929ffce7ffb7d95cce8cd"},{url:"assets/js/page-加密功能--2361b7e4.4616e9ab.js",revision:"19ce3d3a7bb8830bb34a05be9d81dfdd"},{url:"assets/js/page-博客相关--6a3fd4f2.998099bc.js",revision:"19172df05184185d1ca41281325efa6c"},{url:"assets/js/page-博客首页--1eb2b298.009c15be.js",revision:"aae3a98aedc42a155a299b551c142892"},{url:"assets/js/page-地点--6710785c.5aab6de1.js",revision:"5eaec2689a9387f351887dfe1c438932"},{url:"assets/js/page-基础知识--4d466a79.4ab037e4.js",revision:"557248ac7d3b65e4b11539de41906c0d"},{url:"assets/js/page-安装使用--76e0e5b0.5f526f02.js",revision:"19cf96b035a34841effbae9e4a42c200"},{url:"assets/js/page-对象--e150da9c.09d052fe.js",revision:"154b44d9cddb21ba50145b406e18cce3"},{url:"assets/js/page-导航栏--183844fc.bf6f5c67.js",revision:"e04c48981cf1227d0c707dcd2c124a1e"},{url:"assets/js/page-布局--fa93e36a.1d343c8f.js",revision:"c3d6ca816771890ceadd99d94a2c7b37"},{url:"assets/js/page-常见问题--10ab790e.e187ea81.js",revision:"1f04338049de426f89cb53d72d2c6b9e"},{url:"assets/js/page-幻灯片支持--5808e664.b26f4162.js",revision:"0959373348b224922a6f18e41e0c1e5f"},{url:"assets/js/page-插件--32355f10.5e328fd4.js",revision:"abd3ccf2efb54e4f8ef5605910694600"},{url:"assets/js/page-插件说明--cbca1c8e.0b52bb16.js",revision:"7928ed5d96fe9ac226c8e8ab1163eeea"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.51e2dc79.js",revision:"be0900a3f5cf297c64cfce7cb7a78198"},{url:"assets/js/page-新增特性--30c6c799.c1731a25.js",revision:"650c2c076342cf56991a826d754845bc"},{url:"assets/js/page-新增组件--0979095e.670bd5db.js",revision:"36d95597876d9270a77d9587b7706a9f"},{url:"assets/js/page-标记--0ac52704.80f90c38.js",revision:"4e48f2c6d09c3197b47e93c769f89df6"},{url:"assets/js/page-流程图支持--582eff1c.fa3d9927.js",revision:"6c4f474061b88628845eaae678bf980e"},{url:"assets/js/page-深色模式与主题色--01662674.a9c132eb.js",revision:"01d45d633c72c73507ce5ba7f7215f1f"},{url:"assets/js/page-符号--2db8fb80.1b8fb36d.js",revision:"beefef4c67311bdf09dc63b98da5aa38"},{url:"assets/js/page-脚注--17d88350.fa044b2a.js",revision:"dcdec7057220d76ee88704a3188303ce"},{url:"assets/js/page-自定义对齐--048d31dc.e3686623.js",revision:"0d2b160b3a71eea1f95f9817bf069e19"},{url:"assets/js/page-自然--7ec33be2.0a822ed5.js",revision:"8191576d1c9020f8d295024ee848d70e"},{url:"assets/js/page-评论功能--350aff9a.e9d10549.js",revision:"d7bbadbd05d1fc5db635ea3bc514b365"},{url:"assets/js/page-配置--d315f8fe.96c201cc.js",revision:"fc17abe26ec1e2f8338d204e2e3a6aa6"},{url:"assets/js/page-页面--78423bfe.731362b6.js",revision:"0992f92336f0a5d7d682c03d3b7ba409"},{url:"assets/js/page-页面信息--455b9800.67a226c2.js",revision:"2bc9c608cde81bc976a5748c906d7e8c"},{url:"assets/js/page-页面增强--2e4cf75c.854b389c.js",revision:"468667021dc6acac670985c31543be15"},{url:"assets/js/page-页面配置--02399408.1c549297.js",revision:"23f0f909c839f2948899db577b581c6e"},{url:"assets/js/page-项目指令--2f3d7c1c.8e2be43d.js",revision:"a59728ec2a3e4ffa23d648967790b5da"},{url:"assets/js/page-项目案例--1f3d6482.84563603.js",revision:"8fe8bc36bb738126e32c00093a8ef72a"},{url:"assets/js/page-首页--79a22944.d0e73bf6.js",revision:"9be90f693f70bb37d1feb1026d4264fe"},{url:"assets/js/page-默认主题配置--0d5b7f32.d1bad783.js",revision:"033fa288bee4973c1500bb45941de4a6"},{url:"assets/js/vendors~docsearch.11fb2361.js",revision:"1c9410bf99e502fa191521d255e59ec0"},{url:"assets/js/vendors~flowchart.2cc4eb72.js",revision:"220f8297260f614c4781510bae653856"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5ed4bed6.js",revision:"ac998736d669ba6778461bc0dd0b253b"},{url:"assets/js/vendors~photo-swipe.d998f19d.js",revision:"bde310b1ca1fb2744277b09a6abde41f"},{url:"assets/js/vendors~reveal.a1b3e84b.js",revision:"08c1b924cefda9e4c8ba4743b5205a1c"},{url:"assets/js/vendors~valine.179d580e.js",revision:"ab78a8e4a93853d1b1a456b09f8a19a9"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"db136c390b08da69275c7efeb3e9ca4f"},{url:"article/index.html",revision:"c2fd360cf372dd458ec928382b56d99e"},{url:"basic/index.html",revision:"98097b280c660464a944bc23ee446a00"},{url:"basic/markdown/demo/index.html",revision:"889f7e5fffbb657f5aa72aaa01def656"},{url:"basic/markdown/emoji/index.html",revision:"8692d4142da65ad2493f066dcd887b5e"},{url:"basic/markdown/emoji/nature/index.html",revision:"d9bf0bf886b1acb8a492055dd6f758c8"},{url:"basic/markdown/emoji/object/index.html",revision:"e1bee42f8cc2ad8c27f41f761698259a"},{url:"basic/markdown/emoji/people/index.html",revision:"1c05e2ee3fcade8b198ed30a1308a3e4"},{url:"basic/markdown/emoji/place/index.html",revision:"c37d3de5816dece9b8b8d64780d76f70"},{url:"basic/markdown/emoji/symbol/index.html",revision:"8787c35fa3a3356f87bd04e4d8150e85"},{url:"basic/markdown/index.html",revision:"581538ad53310c0e11b506ab5585a629"},{url:"basic/vuepress/case/index.html",revision:"a8792d3c4e95ccbec63abcaa3eceaaf0"},{url:"basic/vuepress/command/index.html",revision:"397f2c88e201f3e4978dc93cb76b02e0"},{url:"basic/vuepress/file/index.html",revision:"5826dbf7ff8a11e048a1913a324732d4"},{url:"basic/vuepress/index.html",revision:"db937562d8f4370465fd672f410c99f6"},{url:"basic/vuepress/plugin/index.html",revision:"cfda18ed1a6faca5d7cdcab9bf6604ae"},{url:"basic/vuepress/theme/index.html",revision:"d35f45e7050f046f408116e7e158c080"},{url:"category/basic/index.html",revision:"30fb800ac63f0a862082523f7862ceed"},{url:"category/basic/page/2/index.html",revision:"01e90b93068270a10cd4132072628d25"},{url:"category/basic/page/3/index.html",revision:"0fa949ecb66f53814e74c666aec3d226"},{url:"category/config/index.html",revision:"55d670c99964576ecd6ef57a6dbeb4d1"},{url:"category/config/page/2/index.html",revision:"ec7dc62dc878a735a26c6b4728a8e2f4"},{url:"category/config/page/3/index.html",revision:"b3f0a8d0d6c59203141211b092b106bb"},{url:"category/demo/index.html",revision:"90c8db042d3898f52d3eefdf7aaea1f0"},{url:"category/FAQ/index.html",revision:"c2313ae57a55a19f50a878459876027c"},{url:"category/feature/index.html",revision:"b7bbb90e2419edbabdf72e53bdb4d4e7"},{url:"category/feature/page/2/index.html",revision:"b1879c0bc4f38338a4a73ad9c6a33b39"},{url:"category/feature/page/3/index.html",revision:"497878cc9c4c2a0223862489c9007f21"},{url:"category/index.html",revision:"64d87766c20304c50de6f33235e4087e"},{url:"category/instruction/index.html",revision:"3c025037acc3da2c9f0d8df5537ae47c"},{url:"category/layout/index.html",revision:"6d7326253e5370eb0baf5906ac27a480"},{url:"category/layout/page/2/index.html",revision:"b4f3a6c045881d3cc7888b42cbff3b52"},{url:"category/markdown/index.html",revision:"5b90078f4574418013c552f7997ae82e"},{url:"config/index.html",revision:"4548db7d90083ae90976616624b973da"},{url:"config/page/index.html",revision:"0bde5620e290ec62f648b9bbbfbf527b"},{url:"config/plugin/container/index.html",revision:"72dbabdcecdbc5a50b3b5ef5f8378cbe"},{url:"config/plugin/copyright/index.html",revision:"95167c65b1cc0e95eb5733d2a09fa88a"},{url:"config/plugin/index.html",revision:"562b42e70c9d041b5447ab5f22d03788"},{url:"config/stylus/index.html",revision:"9e14725224cc43cd68b1c8d3a29b6b8e"},{url:"config/theme/apperance/index.html",revision:"1b03a706244678ebbb1effbfd9b25e61"},{url:"config/theme/default/index.html",revision:"05ae7987601e535f203641759530f4bc"},{url:"config/theme/feature/index.html",revision:"928d46ed63d3deca2a6cd50675bf0371"},{url:"config/theme/index.html",revision:"6f032e2cd339157be36e33c3bb145b0e"},{url:"config/theme/plugin/index.html",revision:"994da12af669a2afe690d9d2147c72b6"},{url:"demo/index.html",revision:"fe81276b994b84526d4695a2a280c754"},{url:"FAQ/index.html",revision:"7086ac78bafb507d4dc1cc6b5f0bd49b"},{url:"guide/feature/blog/index.html",revision:"2663fc87c9d60e972e367c30e09271e0"},{url:"guide/feature/comment/index.html",revision:"ecb3d3afae9d564a2f11cf2bdbb05120"},{url:"guide/feature/component/index.html",revision:"75a6eb1918b023a9d3e5bbc362e3096c"},{url:"guide/feature/encrypt/index.html",revision:"0f5870b58b53bf18771bfff910047856"},{url:"guide/feature/index.html",revision:"f8fb8f5b31464c6516285ba7956aa541"},{url:"guide/feature/markdown/align/index.html",revision:"b3ca99be5b5fbedf7256d392ecc4da6c"},{url:"guide/feature/markdown/flowchart/index.html",revision:"5a4f8adb42bc2dbc0716b3604aaf406e"},{url:"guide/feature/markdown/footnote/index.html",revision:"dff423f5d3d3a6445bd4a59ba7036e41"},{url:"guide/feature/markdown/index.html",revision:"bf670225d699712e23bdcee28902ffcf"},{url:"guide/feature/markdown/mark/index.html",revision:"227be166a7ebf461ef98d9fecda6d470"},{url:"guide/feature/markdown/presentation/index.html",revision:"fbd9ae3fc9df241631410c295621794f"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"646dbb9d185b33c53088fb1400caee17"},{url:"guide/feature/markdown/tex/index.html",revision:"0808325e069aaed2ae72c406c2c5da85"},{url:"guide/feature/page-info/index.html",revision:"972d3a8b09318bec279e59998b13a393"},{url:"guide/feature/page/index.html",revision:"a9068d1f5baed7df28bdb1c78cf3bbcd"},{url:"guide/feature/pwa/index.html",revision:"75db6d07e823b66bee4e2851ba8293c6"},{url:"guide/feature/seo-sitemap/index.html",revision:"c5fa463e4375b8ccf9b5218af3fb040b"},{url:"guide/feature/theme/index.html",revision:"3db187364d9fdf412e7acfb628c5e6cf"},{url:"guide/feature/typescript/index.html",revision:"312bc412296d47bf72dd33439b27fc0e"},{url:"guide/index.html",revision:"3f0c74f562af8eb7cc36b4a6b06ae358"},{url:"guide/install/index.html",revision:"d7c6060af703ddb04f0713e3810c3a80"},{url:"guide/layout/blog/index.html",revision:"528f05bd3f6d13d309d084c8d44ba976"},{url:"guide/layout/home/index.html",revision:"ca42f3ccb7f462b254712695b4de4994"},{url:"guide/layout/index.html",revision:"d932ab658c755f0cd15a595e674df0e3"},{url:"guide/layout/navbar/index.html",revision:"5015d30e1113625ad8972c93c1d525f3"},{url:"guide/layout/page/index.html",revision:"b5163f2a565afed5ebfaae0c37747900"},{url:"guide/layout/sidebar/index.html",revision:"64fc62c9aeaff18ffef31904c0032784"},{url:"index.html",revision:"5c70eba6c5f5e2da95ad87692e40e909"},{url:"tag/blog/index.html",revision:"1ad586198f9f99d1480cee41bee6e636"},{url:"tag/comment/index.html",revision:"bb372cd34f7c7b37f9ab169be8e0bad1"},{url:"tag/components/index.html",revision:"e567427a37942a626fc53825a67c6e6a"},{url:"tag/config/index.html",revision:"7c3193ade378ca7e951ba08540a1b3a8"},{url:"tag/config/page/2/index.html",revision:"bf656cd7e1be76dbfa007e3e84e5af71"},{url:"tag/config/page/3/index.html",revision:"0811ff9096b82018ec5b055a4e0d9e4e"},{url:"tag/emoji/index.html",revision:"494c62da285bdd5181f43acfa76cb591"},{url:"tag/emoji/page/2/index.html",revision:"9d6116846ec34dec6b9a23ab8cd295a0"},{url:"tag/encrypt/index.html",revision:"41d0ae4250f1e5dc27d124001ea77cb2"},{url:"tag/feature/index.html",revision:"bcacfcfa90806e0c84211ca6949fe0fc"},{url:"tag/feature/page/2/index.html",revision:"9569f16a124293ee30189195c21b6396"},{url:"tag/feature/page/3/index.html",revision:"5fe2e05033cb274b98678479eff367c4"},{url:"tag/feature/page/4/index.html",revision:"c3896fcd7b40c2104a5eb674c07431ac"},{url:"tag/frontmatter/index.html",revision:"ea9e1bbe811f6a8ae118222a438a3f71"},{url:"tag/home/index.html",revision:"1d814aadeb8bcac4535afca79b5db8f6"},{url:"tag/index.html",revision:"372170f94a9b81b5f885c70045d6172b"},{url:"tag/intro/index.html",revision:"3104122b58e1b2d5c85475040b0f815a"},{url:"tag/layout/index.html",revision:"46ab2e43a66291c34eb49493b01aa455"},{url:"tag/layout/page/2/index.html",revision:"4e29da6d625bf60792ca0c910f3b1c89"},{url:"tag/markdown/index.html",revision:"be001357f50960f37c412033791e6209"},{url:"tag/markdown/page/2/index.html",revision:"eccae26febf4af77b3243920037acadd"},{url:"tag/markdown/page/3/index.html",revision:"46986c10415d9052ec83596061763bc3"},{url:"tag/navbar/index.html",revision:"da188e118fdc2c32342218b2be175428"},{url:"tag/page-info/index.html",revision:"1bc773c31af5654ad5edb2d9b2385f80"},{url:"tag/page/index.html",revision:"d0c0751a32a1535fd04a66f0fb5b5a15"},{url:"tag/plugin/index.html",revision:"cb566b71fcef8e7d3ec8eba923ce6e51"},{url:"tag/pwa/index.html",revision:"f35151c1af456114e5634a324603f031"},{url:"tag/seo/index.html",revision:"4f082ab58cba0ca2d0f5e720c7f2f66d"},{url:"tag/sidebar/index.html",revision:"d99e28dc26ab469a02a4f36789fc3578"},{url:"tag/sitemap/index.html",revision:"bdab0f37acda986195635300c428e0f6"},{url:"tag/style/index.html",revision:"e6e4c88ae011390009e17158e8d96b94"},{url:"tag/themeConfig/index.html",revision:"4b71b2f8b1d1964461033a19838c03a7"},{url:"tag/typescript/index.html",revision:"11f506de98514183be83cde9156223fc"},{url:"tag/vuepress/index.html",revision:"e5f28ec7ff9b583b4a2a816916252404"},{url:"tag/vuepress/page/2/index.html",revision:"330155e83fb5ac04ae8cc498bae5dc90"},{url:"timeline/index.html",revision:"840c2b85eaedfcf446bcd313e7aa894e"},{url:"zh/basic/index.html",revision:"4f3769195e9b54e079914ef3daa1be96"},{url:"zh/basic/markdown/demo/index.html",revision:"a37f559ed779b4f0132ef84dcb639424"},{url:"zh/basic/markdown/emoji/index.html",revision:"06e2a2b54bfb1bc3696bc83a849323cb"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"9b497d70b5b0ba0179ac51eb757a6adb"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"8c8b541a0f87b874cc76b11206568c01"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"d977e988529c04496394fd05e6e78e0d"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"eb9ead14fa6dafcf7e776f48f616074c"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"53a715b9de39100cd463bb38ec73fdde"},{url:"zh/basic/markdown/index.html",revision:"4122f88d61756619576159e8bffaa6e6"},{url:"zh/basic/vuepress/case/index.html",revision:"2ecfd16509b2ef817cb7ce6a9421a891"},{url:"zh/basic/vuepress/command/index.html",revision:"8034d3d69c2acc42805770cbb4f0f0d3"},{url:"zh/basic/vuepress/file/index.html",revision:"109361729e01a9639fe6e62915d3c145"},{url:"zh/basic/vuepress/index.html",revision:"e510846d1de99ce780db543cea3eb716"},{url:"zh/basic/vuepress/plugin/index.html",revision:"ad0cbdbeb5c7e4e8590551c19703da45"},{url:"zh/basic/vuepress/theme/index.html",revision:"c57cbfb885978097271a56e991e0f60b"},{url:"zh/config/index.html",revision:"a004ac2485e83739972f452301f8caf1"},{url:"zh/config/page/index.html",revision:"45f8ed7fa0b2826041ca2627d73a34ca"},{url:"zh/config/plugin/container/index.html",revision:"27ce8b50ae1c7ee723ebcba85a689fb8"},{url:"zh/config/plugin/copyright/index.html",revision:"06ba5c4dfaf41f6c69c603a60a03d640"},{url:"zh/config/plugin/index.html",revision:"1aa03510f6f06d41951347b9c2cd388a"},{url:"zh/config/stylus/index.html",revision:"6c04af1fca7e8ba523d7f32d001b6fa6"},{url:"zh/config/theme/apperance/index.html",revision:"638b0deadaa189ab868b861c8f71eb58"},{url:"zh/config/theme/default/index.html",revision:"6e4bb24331f5d59c503c62f5dfec4c6a"},{url:"zh/config/theme/feature/index.html",revision:"e766863ee4fade86738390bca05c4941"},{url:"zh/config/theme/index.html",revision:"4bdea884895d14a2c49b06c508290dd1"},{url:"zh/config/theme/plugin/index.html",revision:"27538e7ee83b5285f7bc042dbf9050ef"},{url:"zh/demo/index.html",revision:"a28de0603830185993b0ba523566d191"},{url:"zh/FAQ/index.html",revision:"30c018b3a2ae5dc74a49c5f0fad0a562"},{url:"zh/guide/feature/blog/index.html",revision:"97cdff2ba92670fa8f57a9e12b451868"},{url:"zh/guide/feature/comment/index.html",revision:"d0c8ebe52846cf84392f94e6f592727a"},{url:"zh/guide/feature/component/index.html",revision:"336f76b3048a3f240b866d469c3a23f9"},{url:"zh/guide/feature/encrypt/index.html",revision:"6b7a84b00d3b5cb78d7f55c5d1799538"},{url:"zh/guide/feature/index.html",revision:"336d08b38e3807b5828dc0e68666bd80"},{url:"zh/guide/feature/markdown/align/index.html",revision:"c4b5bd13d9fac69e5d7fc8e19688f363"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"ee5b0aed46021c0d6f6e9482b3fca834"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"b9b28b3a60f9457f5a83ed56ec320eee"},{url:"zh/guide/feature/markdown/index.html",revision:"d149c56f84c91b6475348db76cb65768"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"df7ce064f4959d86d67ca45b816f81f9"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"4633ed44ed7599d6d613d467669592b8"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"c20a3eba0c398dd8cb149449ff19181b"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"02b5b999a00f6390f682c86d77754818"},{url:"zh/guide/feature/page-info/index.html",revision:"b6956f9d58b4e637f00151a911623543"},{url:"zh/guide/feature/page/index.html",revision:"08dc37ae44a985ce8a8546609e89322d"},{url:"zh/guide/feature/pwa/index.html",revision:"80ce6f392446b9f025e908903fdd23ec"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"2ed4aedd7fb296bf50043e9135c03ca5"},{url:"zh/guide/feature/theme/index.html",revision:"af13c515f0ddcaa5a34ac67dab9ae54f"},{url:"zh/guide/feature/typescript/index.html",revision:"7a3a94121eaefa3f24c6b9aa9db67d43"},{url:"zh/guide/index.html",revision:"df8236dc74c306ce60b8302d40d1a861"},{url:"zh/guide/install/index.html",revision:"2f0436181d6db85dd3a7624b35cb4ef4"},{url:"zh/guide/layout/blog/index.html",revision:"56ff6b38959456ef4ede421de0276872"},{url:"zh/guide/layout/home/index.html",revision:"bd5705caf0b8ec941f2aea21073edab2"},{url:"zh/guide/layout/index.html",revision:"a8a8026135fe28e2cb9326fa06ac511b"},{url:"zh/guide/layout/navbar/index.html",revision:"237d248ce1d9ec82d112e6479bac8180"},{url:"zh/guide/layout/page/index.html",revision:"f3e85b97bad4bab7b3eb783f7eaad1ee"},{url:"zh/guide/layout/sidebar/index.html",revision:"bdb2b6b1f55b1b2f836975572fb009ff"},{url:"zh/index.html",revision:"372ecf2e5904a7e913080013647c49a9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
