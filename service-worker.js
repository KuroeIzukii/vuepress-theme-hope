if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.7e8cb7ea.css",revision:"432dc32645c604531a8092234852ecdd"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/130.82222ec7.js",revision:"7f97f5ea9ee1646b4702faf74b260efb"},{url:"assets/js/131.b5ceab34.js",revision:"d8a55dd0674a323e579fb0adee83c3bc"},{url:"assets/js/132.55c67ae9.js",revision:"b712c1f8062d19ba92718649b46a2877"},{url:"assets/js/133.12f27cf2.js",revision:"fe187711ce20afeb1e4e107fb15420d9"},{url:"assets/js/134.2a43b72b.js",revision:"fd01f7b56ffadeba28dd237c8a79972c"},{url:"assets/js/app.12721bff.js",revision:"9e07fcde234e0e66dbd91b17891a6c8d"},{url:"assets/js/layout-Blog.a18a7db5.js",revision:"3c6609006f9635936ba9c3258290c47a"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ef3ad956.js",revision:"9952e0f2c5ea7b33393940c0dcab5dfe"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.fb27e12c.js",revision:"4926cab7739f1e9905e1fc15ebd6e43f"},{url:"assets/js/layout-Layout.74f19b2d.js",revision:"4ef6a54753233803b9361b6bbf0fc779"},{url:"assets/js/layout-NotFound.c4b5033e.js",revision:"b6fc36fd880649592c7a3de9d7168733"},{url:"assets/js/layout-Slide.53add52e.js",revision:"e33b96f972a595d4041a9b64c591da16"},{url:"assets/js/page-AboutVuePress--4a71114e.68ba8592.js",revision:"9ed5e57ec8656adff13acd847e56efea"},{url:"assets/js/page-Basic--770cb96b.85ac5ee7.js",revision:"dda01c5c9bc4369b4e377693038bf4eb"},{url:"assets/js/page-Bloghomepage--64265752.82012225.js",revision:"7f49e07201fe8e6524e11cd9e1bb602c"},{url:"assets/js/page-Blogrelated--17c260a2.70c2a797.js",revision:"3c777ca20046cb6a7fa1351f143d8ac5"},{url:"assets/js/page-CodeDemo--a44bde9c.7bc73516.js",revision:"6bf116363987c53e2c577e720e3740e1"},{url:"assets/js/page-CommentFunction--5bb6671c.1cbf6c77.js",revision:"0702465ac5b22c7185cb8cac167182b6"},{url:"assets/js/page-Commonproblems--2b571e9b.20e1bf45.js",revision:"afbd2a0732984b730af1d12259b0b285"},{url:"assets/js/page-Config--35a0a7d9.5021844e.js",revision:"5e7e715eadee8aef8d5c5ba75b673200"},{url:"assets/js/page-Customalignment--4f21aa5c.d0e9264d.js",revision:"f1c3942e8d1f9b15cc12ff75460f4d83"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.85393a3f.js",revision:"2c9c8f39821ffcd02cc250ce45374f1d"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.ba12fd7c.js",revision:"4cad864911ff3ef21e862c7b0470bb63"},{url:"assets/js/page-Demos--f328658e.698d3d4b.js",revision:"f2c8139f0d266d0f77c833913c825fc1"},{url:"assets/js/page-EmojiList--41bb29b9.74cdbad6.js",revision:"57e85aa35064086b77f02b036e0f6fc2"},{url:"assets/js/page-Emoji列表--404e6737.d93e8d6e.js",revision:"ed3a3cc9cd9c2f9c883e3920240d3cf1"},{url:"assets/js/page-Encryptionfunction--181bdc9c.d318c2ec.js",revision:"24dbb1c70e4f02b8dbd5fc89bfa502a4"},{url:"assets/js/page-FileStructure--665a4f1c.9af9be91.js",revision:"dd141eaa3623b404cb027505cc78700e"},{url:"assets/js/page-Flowchart--7ce6d974.a5e9cb86.js",revision:"6e9cbf41dae2ea6cc458d23fcd9b0737"},{url:"assets/js/page-Footnote--0c733e52.f1ffe684.js",revision:"fce5a93d41665377b816bd37c733ee84"},{url:"assets/js/page-HomePage--5834599c.ce258e87.js",revision:"e735cd1956befd63eb27983c09fb0d9f"},{url:"assets/js/page-InstallUsage--0ab466d2.85a85d3f.js",revision:"71d701fff29de1f80aa8ef5876017e76"},{url:"assets/js/page-Introduction--d4910962.73ef111b.js",revision:"55b748a6671a88fe72ddd7fc75e327b6"},{url:"assets/js/page-Layout--12bd4f0e.8238d537.js",revision:"5a534df85c8e88156b6fdf60489a2751"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.7142c909.js",revision:"647db487a6613c6483b54910eb2edee2"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.ba0ac881.js",revision:"6c37b6d3c53e9509ebda2d777ea05ba4"},{url:"assets/js/page-MarkdownIntroduction--270989ce.c88a7ac1.js",revision:"6937095953e39ad823b8c79c34117380"},{url:"assets/js/page-Markdown介绍--0e6891b6.0f9ff3f9.js",revision:"3c981e989b54f4728f2677191f145c18"},{url:"assets/js/page-Markdown增强--6162938f.8400a140.js",revision:"6e925d186991345578d7d01b2c18ed18"},{url:"assets/js/page-Markdown示例--5479fe88.0c543372.js",revision:"71da51ddecc5d35c48f402731f05934b"},{url:"assets/js/page-Markup--6b1f341c.06208f68.js",revision:"66d0aed43787e753fb7b7c9c512ac28d"},{url:"assets/js/page-Nature--749fb09c.5470980d.js",revision:"04c24a0b42abdb755502d4d22010b22d"},{url:"assets/js/page-NavBar--c7bf87dc.7a63d2e4.js",revision:"0233e316401b3d06ee829844112755d6"},{url:"assets/js/page-NewComponent--1d138c72.66748144.js",revision:"496d15c31d9e6df8d64d4cc79faed8e0"},{url:"assets/js/page-Newfeature--5136c541.70bdfe7a.js",revision:"7aaf08d4a8c9d3e8ace42397d34f0906"},{url:"assets/js/page-Object--16031ab2.3dd01a13.js",revision:"80bde45c1a8b246669eb40d5fba03c92"},{url:"assets/js/page-Page--af17b59c.809257e1.js",revision:"8799c4ebbb67775e57dddf30767fc275"},{url:"assets/js/page-PageConfiguration--0aacc152.4715c07e.js",revision:"19f9eacd6338f572a10647f2e686b0ac"},{url:"assets/js/page-PageEnhance--03665ac8.5797a775.js",revision:"d2a462457ed3c6139520c980cd846715"},{url:"assets/js/page-Pageinformation--71efd5d2.5de0a5bc.js",revision:"d8dd230debf4b2853ac4abb41c85a9e0"},{url:"assets/js/page-People--2182769c.f3e1e435.js",revision:"094fa0fb6d7b420d4eff370d10f2cbd6"},{url:"assets/js/page-Place--951cdc00.f19614cd.js",revision:"27413829b8347d0022167d535cc9ed6a"},{url:"assets/js/page-PluginDescription--137c6c07.623846f6.js",revision:"3a77073271a903beae796a87c2910743"},{url:"assets/js/page-Plugins--adbf415c.27c4dfc3.js",revision:"83d44605fa0d7957ed4d33ddcbbedc4c"},{url:"assets/js/page-Presentationsupport--8f8e54dc.23964f71.js",revision:"57e55ab06e9b1b3c74610f917100feb3"},{url:"assets/js/page-PWA--01089712.317b29cf.js",revision:"5b37bb49d9b6716f3809903924f5492c"},{url:"assets/js/page-PWA--243ef2b8.24824d43.js",revision:"c34f897c746ffd00b90561fa287e5548"},{url:"assets/js/page-SEOandSitemap--ccd3659c.a1373d47.js",revision:"420d0eecca6299302f8341ba3f99ded9"},{url:"assets/js/page-SEO和Sitemap--2853f164.8743c984.js",revision:"eb31c5194e1a481741b00f38a28a730e"},{url:"assets/js/page-Sidebar--2fa1ea2c.64b0705a.js",revision:"7dc2ed02248a1a57c33d37334756d706"},{url:"assets/js/page-Slide--269ae052.3c779069.js",revision:"f70dd48b3bbfeed6544778639e9f9b8a"},{url:"assets/js/page-stylusconfiguration--6796cdf2.a5bed8c9.js",revision:"549d940f41b640528b3dbc825e20814a"},{url:"assets/js/page-stylus配置--0ce19a82.cfeb29b6.js",revision:"d1cbae136a93fb904d450fe9c8ca5a74"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.2b532f06.js",revision:"19915584c983b48e0a87d6c5b85f88cf"},{url:"assets/js/page-Symbol--a9259c5c.09df0d88.js",revision:"f5a233530ea90550b5d22bf5ea5059ba"},{url:"assets/js/page-TexSupport--64cb5e50.b1843e81.js",revision:"56ef389c0d0ca812ca8c5a31080c1810"},{url:"assets/js/page-Tex语法支持--1e02b152.9a75e395.js",revision:"aa06309ef2b840afcea8a3566d2ce8fa"},{url:"assets/js/page-ThemeConfig--1120a0ce.ce555199.js",revision:"bc3b10cc49d478de7dba867180179a1e"},{url:"assets/js/page-ThemeConfig--1726e14e.90f33f12.js",revision:"53a22a37173736a6a38b671db7cb8ab6"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.9e8e9705.js",revision:"73ef676a1350b463918c4e5ddabf9d3f"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.89d92404.js",revision:"084275ca1b3b9eb94f1ff6033c1b0a6e"},{url:"assets/js/page-ThemePluginConfig--958196dc.2bc91fc0.js",revision:"9c2a9ec292279b9c4cd2f50ff3da173e"},{url:"assets/js/page-TSsupport--09728ac8.c065b8d9.js",revision:"510a3b35f45115447169701d210b491c"},{url:"assets/js/page-TS支持--4625f812.3abb821a.js",revision:"f2d939d15e781f6b08df7923f8d814aa"},{url:"assets/js/page-VuePress--b7060eee.4681d94f.js",revision:"e0b2ff205596a3d6658774f3410d2403"},{url:"assets/js/page-vuepress-plugin-container--31498112.12aff8dd.js",revision:"122a21d4402ec813c976d48314a3200e"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.fca84509.js",revision:"b2bf019ecccc8efcf62ad2c1a069da2a"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.dc00092d.js",revision:"070444b33a66a9e678c88551600b6b7d"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.93b53c68.js",revision:"a71d9af2412c7ce1c12ef6804ff8dd6e"},{url:"assets/js/page-vuepress-theme-hope--354da24e.4156437e.js",revision:"79bc05a66f6c08513d3093c9db3c32a4"},{url:"assets/js/page-vuepress-theme-hope--776d8369.9d80276b.js",revision:"5b1f7c027b8a5961e30c7c067c44d587"},{url:"assets/js/page-VuePressCases--082972f2.f95f6ffe.js",revision:"5b4fd0b7dca907a44c0b99a8270576d8"},{url:"assets/js/page-VuePresscommands--9f3f316c.21bb78eb.js",revision:"3449fc7f815deb261b20d329e5132470"},{url:"assets/js/page-VuePress案例--531d5f3e.b515f1c4.js",revision:"36bd8ab9bce263fc48a7b2bebc4d4400"},{url:"assets/js/page-上下角标--8efed9dc.02f7887a.js",revision:"079c7d3f69fb40f00144a65d336780c7"},{url:"assets/js/page-主题功能配置--5bb71452.8a98443c.js",revision:"291cffcbd83708449b9ac59272866640"},{url:"assets/js/page-主题布局配置--7db7eff2.ba4ae97a.js",revision:"04426bdd3b34ae622a80e3cc3d66f0f4"},{url:"assets/js/page-主题插件配置--1b0c3e98.374445b4.js",revision:"01be80d85244b3b0298c5018dafec905"},{url:"assets/js/page-主题配置--21dc088d.3f63fe1c.js",revision:"c194bc4855396363dbca7757a52269f9"},{url:"assets/js/page-主题配置--2c572572.76886f6e.js",revision:"502d2ec31d21d6e4491298af86b82941"},{url:"assets/js/page-人物--b4fc27dc.78060231.js",revision:"3a19be599e59fdc5767882ac6ec8c9ff"},{url:"assets/js/page-介绍--2e99d139.46b8891f.js",revision:"17392bc1beacf3a622d95c2c358eef58"},{url:"assets/js/page-代码演示--0dad4f52.bd1d5dd7.js",revision:"8f8d8375a34dff7c54e106159e73296a"},{url:"assets/js/page-侧边栏--43054cb2.3f83f902.js",revision:"844527c30db2e5a7cc085a35fba560d7"},{url:"assets/js/page-加密功能--2361b7e4.6c28d411.js",revision:"ed53d87327224ab1d149d45ff3b69d8c"},{url:"assets/js/page-博客相关--6a3fd4f2.c7cdb858.js",revision:"de8a4221058aaab575bb736c31b54d4c"},{url:"assets/js/page-博客首页--1eb2b298.d2a99806.js",revision:"95b21c4b6e9410656eece94ade35d579"},{url:"assets/js/page-地点--6710785c.bc202305.js",revision:"2bed79269e3f15edbcbfcfae43d6fca7"},{url:"assets/js/page-基础知识--4d466a79.f4241bf5.js",revision:"11151f3c8e5e3571ee0b4172c5b0d20a"},{url:"assets/js/page-安装使用--76e0e5b0.2fddf41b.js",revision:"222fbabb2dbd035a75a0151490ca7218"},{url:"assets/js/page-对象--e150da9c.f6994a44.js",revision:"72ac72d80719be2d7e5d47ea82360c41"},{url:"assets/js/page-导航栏--183844fc.0014a1ef.js",revision:"945c7b742c57a6b55ca4e808303e62a9"},{url:"assets/js/page-布局--fa93e36a.78620743.js",revision:"597a7ad9b7d476221d833e4c597783b0"},{url:"assets/js/page-常见问题--10ab790e.06180d82.js",revision:"6161e057830563de22f38d32b83be210"},{url:"assets/js/page-幻灯片--818cb750.a71dddee.js",revision:"27bfc94e8730b2ffc18a703a41f34cd2"},{url:"assets/js/page-幻灯片支持--5808e664.ecc6aca1.js",revision:"a7961e2a481454319c572e96ef77f52b"},{url:"assets/js/page-插件--32355f10.56918a5c.js",revision:"c4798e2abdc1291f5a12689f5374ac28"},{url:"assets/js/page-插件说明--cbca1c8e.7c9ca437.js",revision:"d763ba26143043cdb83a603cb780018a"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.1f5acec0.js",revision:"d0231d8a22004b9b65267e20ce330604"},{url:"assets/js/page-新增特性--30c6c799.501c9e6e.js",revision:"2194416987080a3b4254ffeb9f270d89"},{url:"assets/js/page-新增组件--0979095e.6a83d25e.js",revision:"b764959431e31ec7da88e8079a58a9ff"},{url:"assets/js/page-标记--0ac52704.79ea168a.js",revision:"1d1259f3986bd4b8ac4a55f5c32b51d0"},{url:"assets/js/page-流程图支持--582eff1c.e475a9c7.js",revision:"af8c7d6603a6ff2f7fcbe7b7117dfb88"},{url:"assets/js/page-深色模式与主题色--01662674.168d13c7.js",revision:"1a2a366060c61f856a78894d703172ec"},{url:"assets/js/page-符号--2db8fb80.d3c5fa4e.js",revision:"99012ade56b663597a5e4e7fbe825919"},{url:"assets/js/page-脚注--17d88350.97b8c814.js",revision:"716fb88341dc90fb90f34e460ae1ba3e"},{url:"assets/js/page-自定义对齐--048d31dc.5cc0f7d7.js",revision:"5c5789a7666002565a060365b59f1401"},{url:"assets/js/page-自然--7ec33be2.329cf1c5.js",revision:"fa7c512787ef4ca3bd21212b368ad468"},{url:"assets/js/page-评论功能--350aff9a.45edd7ee.js",revision:"8b424cee66cb9596b7a960c1efc631ce"},{url:"assets/js/page-配置--d315f8fe.1a7605f9.js",revision:"cc26eb0643f28a7f74da2fb411918585"},{url:"assets/js/page-页面--78423bfe.8a943f57.js",revision:"f14d68fc190eef7c5d87af8c1412fa67"},{url:"assets/js/page-页面信息--455b9800.d5ac1261.js",revision:"dd9a06dd7416829b67a8c51e9a88e857"},{url:"assets/js/page-页面增强--2e4cf75c.9f7c87f5.js",revision:"7e87436fa88387d1416de7d83127427e"},{url:"assets/js/page-页面配置--02399408.1610a6b7.js",revision:"fb26cd31ed7e4abe55a7eccdb6c5c803"},{url:"assets/js/page-项目指令--2f3d7c1c.0cc14aba.js",revision:"420f2bed1ccd11167674d3fb899993e8"},{url:"assets/js/page-项目案例--1f3d6482.cfeede69.js",revision:"e03c6b2aa7b286b083d5ba1cfc3b5719"},{url:"assets/js/page-首页--79a22944.91e3a848.js",revision:"0723bde180bda8808c0667f88aaa68df"},{url:"assets/js/page-默认主题配置--0d5b7f32.d4152aab.js",revision:"da210fa80836e4ab11c234195cd98eb9"},{url:"assets/js/vendors~docsearch.a4fb202e.js",revision:"47180209f0c434e666306212aa863f03"},{url:"assets/js/vendors~flowchart.c8698202.js",revision:"27f497d74f10f457bc2b25cd1d6919dd"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.8fbfdd7b.js",revision:"09b8f577d5c66f61ec389d0a6732f23e"},{url:"assets/js/vendors~photo-swipe.1a724fbe.js",revision:"7c3bdfa9ed9716bba10380eed2bd7861"},{url:"assets/js/vendors~reveal.8dc0adfb.js",revision:"e3913c79c2a416da34dd87ef38f9e70e"},{url:"assets/js/vendors~valine.8d7a4e20.js",revision:"17e54be81da37a5245071ef4c9650789"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"8160536ec6fe7f57363c5a957ba59a20"},{url:"article/index.html",revision:"05f8eab1f59876b35e4da0fbf6cae7c1"},{url:"basic/index.html",revision:"566da18b60cf450ad1b48cad49004256"},{url:"basic/markdown/demo/index.html",revision:"ebc619ee9d3a8d38fea1ab7017b46d1d"},{url:"basic/markdown/emoji/index.html",revision:"b3ab2fdd1ba434d0ea1e90c3a91c2843"},{url:"basic/markdown/emoji/nature/index.html",revision:"ab572d55bd93902098308ac0179f1a01"},{url:"basic/markdown/emoji/object/index.html",revision:"44b21facd1df3e229e86dec004595c78"},{url:"basic/markdown/emoji/people/index.html",revision:"1a714155489f0fc954ee58b3b92333dd"},{url:"basic/markdown/emoji/place/index.html",revision:"4db7a3482b9fc06603153bbbec949c2d"},{url:"basic/markdown/emoji/symbol/index.html",revision:"2054edcb92dd1c7f327bbbec9c5691e3"},{url:"basic/markdown/index.html",revision:"d00f66dd8b26dbc348ed8320ee3c7cc5"},{url:"basic/vuepress/case/index.html",revision:"e4d4f13b1ee7753e7505b315f5d38e3c"},{url:"basic/vuepress/command/index.html",revision:"56e89ee3a15979e3c52ca7c64ed6b868"},{url:"basic/vuepress/file/index.html",revision:"6e21bb09da6e2f1274b858037015e2b8"},{url:"basic/vuepress/index.html",revision:"e9cbb66d82c10c9b191a602fb635209f"},{url:"basic/vuepress/plugin/index.html",revision:"682bd15e2bf26932980db1af1e3246e1"},{url:"basic/vuepress/theme/index.html",revision:"99ec44dc033c25a271dce9887c97c06f"},{url:"category/basic/index.html",revision:"a7e2bfc340c7f7a6c03c4a8dec3874d3"},{url:"category/basic/page/2/index.html",revision:"ad72098a5b108a0612bb7a709dd5e132"},{url:"category/basic/page/3/index.html",revision:"203c69990a13aec573da800ea75ea13d"},{url:"category/config/index.html",revision:"02dec32b47e51a8cf7ac56213f508f7a"},{url:"category/config/page/2/index.html",revision:"716c532a5afa10379cdee2dc597a8ac2"},{url:"category/config/page/3/index.html",revision:"4a8b29d84b7ec71ca54c4e9f255f610a"},{url:"category/demo/index.html",revision:"db63fb63ef21b17b7bffc07a25be7315"},{url:"category/FAQ/index.html",revision:"e9ff5040d7686715857ef3d541d4adc1"},{url:"category/feature/index.html",revision:"30d851c6b3308b9aa8888dd9e44ce3de"},{url:"category/feature/page/2/index.html",revision:"3f443c42096558ba94c5153092a6f462"},{url:"category/feature/page/3/index.html",revision:"75e073145e0af4db3487fd937d4682ef"},{url:"category/index.html",revision:"faee0d687ad86bcb9f203a8534eb8724"},{url:"category/instruction/index.html",revision:"ccdb27ab1a3ebe54cd656fc42b76cf2a"},{url:"category/layout/index.html",revision:"51a29a0e5e3629408fa632fadc6c9f31"},{url:"category/layout/page/2/index.html",revision:"6371cf3b63f2c3b61085a40addcf6b9d"},{url:"category/markdown/index.html",revision:"c1b24f9dda80d86627978b4ef4769480"},{url:"config/index.html",revision:"052c1addb67b63c4d03edea4a8664b91"},{url:"config/page/index.html",revision:"d53c4d62428c66adf83e7d8d359cdc92"},{url:"config/plugin/container/index.html",revision:"7bd5c8c2b9db5ec683ab8fdf28e9ef94"},{url:"config/plugin/copyright/index.html",revision:"f2f9e85943409fe6906a4af802618ab3"},{url:"config/plugin/index.html",revision:"d0f12dd984e0c0d2cf6f149787c44843"},{url:"config/stylus/index.html",revision:"d1cbfaaf9eec532ac56f294aae9ceadf"},{url:"config/theme/apperance/index.html",revision:"592c94be127c87d7c039c6150fd6a769"},{url:"config/theme/default/index.html",revision:"6ede5e77c68a90c350cfb2c0a907ca82"},{url:"config/theme/feature/index.html",revision:"f926523f724007abb159c253c4b9f0b4"},{url:"config/theme/index.html",revision:"cfe0148ec1225e5bb7a1d56406afc473"},{url:"config/theme/plugin/index.html",revision:"c1a9fad1a224a0f75931e2fa9f197eac"},{url:"demo/index.html",revision:"43d52f0daf603a0aa0f682332c94b6a6"},{url:"encrypt/index.html",revision:"bd394f23afa795703ddff2e8765d6577"},{url:"FAQ/index.html",revision:"e7efa9cf5a1a1da8d2c6eb23151a477f"},{url:"guide/feature/blog/index.html",revision:"1bf2055064479aa0c7476fa6bb92aec0"},{url:"guide/feature/comment/index.html",revision:"3b7f9d3d8641d4077ff6a92ac947c4c5"},{url:"guide/feature/component/index.html",revision:"4f69ef1c52746adc61135bd41b3bba3f"},{url:"guide/feature/encrypt/index.html",revision:"5fc241ad6c3f49bdc37170ccdbbd8eaf"},{url:"guide/feature/index.html",revision:"9268387b5f0851bc9a08785bbb566ae4"},{url:"guide/feature/markdown/align/index.html",revision:"836199364138dfd5d97f08f0dcd3c1fe"},{url:"guide/feature/markdown/demo/index.html",revision:"6f7dfe1ffb825be55e473bc7886cb484"},{url:"guide/feature/markdown/flowchart/index.html",revision:"9564c5093c9b0e175e5756c5bb0b54ad"},{url:"guide/feature/markdown/footnote/index.html",revision:"51e14ece89bc407d76c2b77235355bae"},{url:"guide/feature/markdown/index.html",revision:"f0a19a3b9ebf27e5e6a50ec6f70d55f0"},{url:"guide/feature/markdown/mark/index.html",revision:"8a0af8e3355a3fc441df29d21ce8f49b"},{url:"guide/feature/markdown/presentation/index.html",revision:"2dac007fd795de3a2ee5466ebb1dd4d0"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"ffb898ca85dbd862dfa106323241f7a2"},{url:"guide/feature/markdown/tex/index.html",revision:"90845c0bc1cf74eb86fac43be142013c"},{url:"guide/feature/page-info/index.html",revision:"6418c3ed6bea877e988eefb3f3c0d5f8"},{url:"guide/feature/page/index.html",revision:"bf5b1d63fb7edbba1206133cd4e8f661"},{url:"guide/feature/pwa/index.html",revision:"424c8e1e13bdedb50af2b6447df86564"},{url:"guide/feature/seo-sitemap/index.html",revision:"3d5a1c9b64d3735a864a1c6d7871bf2a"},{url:"guide/feature/theme/index.html",revision:"d0f51db2874c701edc4ed947dd174230"},{url:"guide/feature/typescript/index.html",revision:"e0ddd1a27eb7cd008f010d0c5330df36"},{url:"guide/index.html",revision:"e806799a7fc8221824da604067c4dcff"},{url:"guide/install/index.html",revision:"4cd0ab6e978ed33e3809bc9039e59a69"},{url:"guide/layout/blog/index.html",revision:"117ebbb44280b38c1b892507388e3cc2"},{url:"guide/layout/home/index.html",revision:"8381d3c16fe9ea3e87c6bbaedda94bad"},{url:"guide/layout/index.html",revision:"96069a35dde072f4f2409891252fcbd8"},{url:"guide/layout/navbar/index.html",revision:"c4e1256db55b46da287348c7c2df98b1"},{url:"guide/layout/page/index.html",revision:"f14a959ec9b624ac29d1a9f45e590a34"},{url:"guide/layout/sidebar/index.html",revision:"73d901d3095f28da3cdc977a0cc0b3c7"},{url:"guide/layout/slides/index.html",revision:"a69e4d887b3e64d1edd985b80c8c7bc3"},{url:"index.html",revision:"489edfdc9007edda5167d7952e81479c"},{url:"slide/index.html",revision:"51740615fa5db259da190c2a10ca74ef"},{url:"tag/blog/index.html",revision:"2476738cfe2752eb450265546f3507c9"},{url:"tag/comment/index.html",revision:"83dc5f0883e7598109245da89ad2c0cf"},{url:"tag/components/index.html",revision:"459173685391b4410b01ef45f4070811"},{url:"tag/config/index.html",revision:"98d02c94060b8e9392c315197a363bb4"},{url:"tag/config/page/2/index.html",revision:"099165b8730ec667cb51811c37aa95ae"},{url:"tag/config/page/3/index.html",revision:"802fe3642a79e78ba6a4c7cdf01afa5a"},{url:"tag/emoji/index.html",revision:"4a8d61617ec1a8ed3bd6978e92443353"},{url:"tag/emoji/page/2/index.html",revision:"25b7d0dc13eb8600a912955269f31695"},{url:"tag/encrypt/index.html",revision:"ad230b6ffc54b2d31155c2520af6c978"},{url:"tag/feature/index.html",revision:"c6bd9400ac2d73128f9b706624f0d245"},{url:"tag/feature/page/2/index.html",revision:"69e727efb7d412f387455185d8793d1f"},{url:"tag/feature/page/3/index.html",revision:"ee0288d8a8779ba72ed64523707957f0"},{url:"tag/feature/page/4/index.html",revision:"872408e1a5255732c6ccf82d1cb2f948"},{url:"tag/frontmatter/index.html",revision:"31473c733005f4161cddc7150e6564d6"},{url:"tag/home/index.html",revision:"7d56ad33aef7204173c08dfa5dd5ac6e"},{url:"tag/index.html",revision:"da15c0e689d7746c2ba6cb92a8ed25a4"},{url:"tag/intro/index.html",revision:"f7ae6293db5fe06767ef55303017abc0"},{url:"tag/layout/index.html",revision:"fafdf1015a4e05b3dc3ba76f14ee9456"},{url:"tag/layout/page/2/index.html",revision:"3b18d7e00c20d740fc54de4033ec9f3b"},{url:"tag/markdown/index.html",revision:"c0f9ca59872f5a932c341b1aaca85ce1"},{url:"tag/markdown/page/2/index.html",revision:"f91700ee98b32270f03115795f47ad08"},{url:"tag/markdown/page/3/index.html",revision:"517d07a57cef1795df1a40fb278e58c5"},{url:"tag/markdown/page/4/index.html",revision:"27d49545306f0d479d90a18a463a5000"},{url:"tag/navbar/index.html",revision:"35129004d8d84ae4100b249ef147a3a3"},{url:"tag/page-info/index.html",revision:"89e374af43c469d9f328c1f24dbdb668"},{url:"tag/page/index.html",revision:"180efafa88136dca638f112003c01bc7"},{url:"tag/plugin/index.html",revision:"9029def114d2a19242a157ad550fe803"},{url:"tag/pwa/index.html",revision:"7e3be4b57a182954b3618438aa5a3845"},{url:"tag/seo/index.html",revision:"556e3b19256991eb249f1864937619d0"},{url:"tag/sidebar/index.html",revision:"786c373bee00242c8d1f892164525049"},{url:"tag/sitemap/index.html",revision:"fb8823d1321819ccf94f969dd2f3232f"},{url:"tag/slides/index.html",revision:"ca0132adcbcfe475f1a7044bb432351f"},{url:"tag/style/index.html",revision:"95da8aa75b0c806342f754c612125818"},{url:"tag/themeConfig/index.html",revision:"f87ae6c895c2b7d18093551fc2e23a6e"},{url:"tag/typescript/index.html",revision:"40a8552634b8b0cd7d6cf1a816cc51e7"},{url:"tag/vuepress/index.html",revision:"c4fb7ca0389eff1c119e5a70dc539b98"},{url:"tag/vuepress/page/2/index.html",revision:"e6bb1b08394298c50e9683763121e544"},{url:"timeline/index.html",revision:"9620aeba1ff745e0cbf6567c240d7a8d"},{url:"zh/basic/index.html",revision:"d84005ddb7dfba9f2c3d50ba5cc37cce"},{url:"zh/basic/markdown/demo/index.html",revision:"7b4ca61b8a0fe426e785e47b7399d119"},{url:"zh/basic/markdown/emoji/index.html",revision:"5a009bae75ecd83be2b19e1d821007a3"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"16eafef6d0b5622b0b29adfbe4d4b0c4"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"c734a254e083fb9c4aabf2e358c147d6"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"b8f33a4f2d98479b30f54337ba46a1fd"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"4c044d60e574b573b53393df8309fde6"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"557c5107953ff7386a984f4fd75c3387"},{url:"zh/basic/markdown/index.html",revision:"2800f3b8dceb0289352954f9f4e46844"},{url:"zh/basic/vuepress/case/index.html",revision:"bda9c98ed872ff9fb6a677fd087f5bfe"},{url:"zh/basic/vuepress/command/index.html",revision:"bc373c8acf124da2e20a2ecf817b3168"},{url:"zh/basic/vuepress/file/index.html",revision:"9e2e5b25db1922f0f03d7bbc6d248706"},{url:"zh/basic/vuepress/index.html",revision:"cddeba0698bdddffb0fb9470c28d1f62"},{url:"zh/basic/vuepress/plugin/index.html",revision:"e9eeda6e07b2c7daa4bf50b68fd39d1c"},{url:"zh/basic/vuepress/theme/index.html",revision:"a7935d1868f72e76097f86005f46baa7"},{url:"zh/config/index.html",revision:"9f44bbff23b7599f9415bf7568af0a0e"},{url:"zh/config/page/index.html",revision:"6f708a5e21ccd69e510b2c6ae9545cab"},{url:"zh/config/plugin/container/index.html",revision:"bdbb07d694dbd98e3cf934bd5b23c4f6"},{url:"zh/config/plugin/copyright/index.html",revision:"9874f211fdd966e10bcd3308cee3541c"},{url:"zh/config/plugin/index.html",revision:"1d6d8564aba11c2d5cd2414e1dccc9ef"},{url:"zh/config/stylus/index.html",revision:"677a21b21a9f7cba7217991a6cda575a"},{url:"zh/config/theme/apperance/index.html",revision:"a398e194fd3e5888c4b0c21bb5e5f241"},{url:"zh/config/theme/default/index.html",revision:"271e16f3ae51fda08a7abf6ead39df67"},{url:"zh/config/theme/feature/index.html",revision:"5290ad935dd0eae735b7294682990b5d"},{url:"zh/config/theme/index.html",revision:"79cae2e340684b2ff4f255d645432c3f"},{url:"zh/config/theme/plugin/index.html",revision:"07897ab4e60dbec78048fa8bb530e894"},{url:"zh/demo/index.html",revision:"f550e117ecab191ec953d0c46f7b3e65"},{url:"zh/FAQ/index.html",revision:"b9d275d55dc3f3bf55de280444a13e5a"},{url:"zh/guide/feature/blog/index.html",revision:"575e7472d5bf3e7727502d685f8c2739"},{url:"zh/guide/feature/comment/index.html",revision:"9bfda49adf52994b07a2d0d6763e3e29"},{url:"zh/guide/feature/component/index.html",revision:"3e1f8044ef357daa14c0ad80c6738185"},{url:"zh/guide/feature/encrypt/index.html",revision:"c39967b9f857f2bb230df73a8e6be149"},{url:"zh/guide/feature/index.html",revision:"3f71f6cd03edae36ccbf1bdacdd12307"},{url:"zh/guide/feature/markdown/align/index.html",revision:"af99466b66dfc164cf16eae78a0e2a00"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"7f7a0d5c7b320783d216655240714f62"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"6814f131ff46af5a75cbe34671798595"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"426350033b18c6a38498e59829f3f1ed"},{url:"zh/guide/feature/markdown/index.html",revision:"1d5ebcd704276914b69b5452bc3eca16"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"5434c8e544aad62979e8026ecca5aa4e"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"655a4d80ab9a86e24fad17539cc8091c"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"a8d598bf630201aca9e9b2950ba32f00"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"b0cec0a75a7323893f20e84c43613a16"},{url:"zh/guide/feature/page-info/index.html",revision:"c93bd05c8d40dfb1e258fa3b204bff5a"},{url:"zh/guide/feature/page/index.html",revision:"7a40c8cca2546724a2266c353b7d532a"},{url:"zh/guide/feature/pwa/index.html",revision:"10054b8974525b876daaaa46389c07aa"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"5eda64efc507ba79fd8c2f07528a50a3"},{url:"zh/guide/feature/theme/index.html",revision:"bdd28b0ade22535f45f41606890683f5"},{url:"zh/guide/feature/typescript/index.html",revision:"c32e93cc37691b9f1b537f5acbb696fd"},{url:"zh/guide/index.html",revision:"329596ce361b0203a87e801f33f11a86"},{url:"zh/guide/install/index.html",revision:"f9b353dee265963993ff8aa2026a3947"},{url:"zh/guide/layout/blog/index.html",revision:"f4c42a48af5aee86e3dcdfd38a9a6687"},{url:"zh/guide/layout/home/index.html",revision:"8c6ed0f7eaceb62cf4a1f1880cd452db"},{url:"zh/guide/layout/index.html",revision:"761c7bafb16ba71aa755aaa58018d133"},{url:"zh/guide/layout/navbar/index.html",revision:"4a557f0e6bb9ea810002de4d9c7090c3"},{url:"zh/guide/layout/page/index.html",revision:"ba2ea4b4a8d1d7def641da3018c9785c"},{url:"zh/guide/layout/sidebar/index.html",revision:"400dfe98b2dee4c3c96e4f80570450f0"},{url:"zh/guide/layout/slides/index.html",revision:"ff020033d260b0cfbfcda66cd889bbe4"},{url:"zh/index.html",revision:"891025048d61d6bdcd8728574fce403f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/slides.859646fb.png",revision:"859646fbfd7beb9a132d8bd66ca9f807"},{url:"assets/img/slides.eb1e5fe7.png",revision:"eb1e5fe780594ad95ce1a96c2eaac0e8"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
