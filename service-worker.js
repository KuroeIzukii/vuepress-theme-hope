if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"268bf29e9c26264cc6a3835a79c4da6a"},{url:"article/index.html",revision:"e46f50b9e53c86e399e422a157e0df94"},{url:"assets/css/0.styles.b6acfb0d.css",revision:"2ccea82a8cff5bf34f8234eff7fc23cc"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/bulb.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/stop.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/js/110.bbc7e1f1.js",revision:"c52ba9a6bac4666f60c7d22fbcc27d25"},{url:"assets/js/app.a4afc775.js",revision:"a50e98e47b0e8821f99aad1d775b0ac6"},{url:"assets/js/layout-Blog.74aded26.js",revision:"e224ec92f22e2a4987d24f2af02cc9f5"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.b7b52f30.js",revision:"ba9b44595ba678b3f5f9a3d02aaff4a3"},{url:"assets/js/layout-Layout.007f63cf.js",revision:"29d5293c00472370fd2e3093307fa419"},{url:"assets/js/layout-NotFound.a36f4f75.js",revision:"6ec461e7e893afee10557bb9bce1cda7"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.0196a6ec.js",revision:"9dd11794862945dfe4b88e33386d69f5"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.1f4ada8d.js",revision:"f1dc68e6e1cab26de25f9f165794ad35"},{url:"assets/js/page-AboutVuepress--4a71114e.4a7e05c0.js",revision:"a17360f4785ec548895516e89ccfe8d2"},{url:"assets/js/page-Basic--770cb96b.010edae7.js",revision:"9106cdb811f5e0b943980612cd0b7c7f"},{url:"assets/js/page-Bloghomepage--64265752.a8670b33.js",revision:"1f4ad2b7c8ee6fce8874573e7f5ba8dc"},{url:"assets/js/page-Blogrelated--17c260a2.13e58000.js",revision:"9be6a9e74109256c317258d79269a230"},{url:"assets/js/page-CommentFunction--5bb6671c.1212ac3b.js",revision:"8cffbba3802cf26f007eb3186bad7bec"},{url:"assets/js/page-Commonproblems--2b571e9b.dc2c9dbb.js",revision:"c98ac64cfc853adc9708a78eb732da32"},{url:"assets/js/page-ConfigDocs--35a0a7d9.45c50ba6.js",revision:"7180e72371dd7099b5e7189c7c88ba60"},{url:"assets/js/page-Customalignment--4f21aa5c.9a3190a9.js",revision:"67bf82107e2a28b48a86a8702d180f29"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.311e9fe1.js",revision:"1ac99003921c5c3aea9d64d27f10a473"},{url:"assets/js/page-Demos--f328658e.ef33a74e.js",revision:"5a7e6a1d8253988d3718824b6fb3147d"},{url:"assets/js/page-EmojiList--41bb29b9.0d8b974c.js",revision:"17dd03fa19e4a574f7db9d1e8fc4cb9b"},{url:"assets/js/page-Emoji列表--404e6737.0da6633e.js",revision:"dc47881d802d398bb5944480cf060240"},{url:"assets/js/page-Encryptionfunction--181bdc9c.761e0f44.js",revision:"79ab17cb406c68b040899f984ea8d618"},{url:"assets/js/page-FileStructure--665a4f1c.5d011f86.js",revision:"7328a43f991b6927cdbba7483eabb068"},{url:"assets/js/page-Flowchart--7ce6d974.458f2748.js",revision:"0575f075f10dd055bd9b56a337e7b93f"},{url:"assets/js/page-Footnote--0c733e52.a2a80b36.js",revision:"5e176913b4554adff745406f800c5672"},{url:"assets/js/page-HomePage--5834599c.2f9fcd0f.js",revision:"73a80aae49a724a8be44b49bf03c11ef"},{url:"assets/js/page-InstallUsage--0ab466d2.c87b16ab.js",revision:"fdf94954d625bb274334c62fb814cbf2"},{url:"assets/js/page-Introduction--d4910962.8ebb2a34.js",revision:"28d3028c6104b4b61456fff3abd2c336"},{url:"assets/js/page-Layout--12bd4f0e.6edff760.js",revision:"337346ca47fe0382f6678782e871a725"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.2d99f1f9.js",revision:"621e351bf19832545d4743918fef7daf"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.c0813a10.js",revision:"e3b96de861c7e9880a945390013c9245"},{url:"assets/js/page-MarkdownIntroduction--270989ce.6bf05a38.js",revision:"58f7676c3d4231e11d9d06c4e1f42faa"},{url:"assets/js/page-Markdown介绍--0e6891b6.ba35ffbe.js",revision:"3898a1f5f648995b98515638f8547975"},{url:"assets/js/page-Markdown增强--6162938f.f726ed0c.js",revision:"c84328c7672ecadb9cab9c28188a0ceb"},{url:"assets/js/page-Markdown示例--5479fe88.7fda1398.js",revision:"8dcb6d6bc82b95f48f30c57bb861193d"},{url:"assets/js/page-Markup--6b1f341c.299b83b4.js",revision:"870da7986dfe465e65d648869a7fe447"},{url:"assets/js/page-Nature--749fb09c.566e767f.js",revision:"3de0289ee1d3e36f90a611a4676413b5"},{url:"assets/js/page-NavBar--c7bf87dc.32e745c0.js",revision:"9ddc17a8c1f306080aea7aa3f3dfb3f4"},{url:"assets/js/page-NewComponent--1d138c72.76d85772.js",revision:"f1f5b41ceb96fdfc0dd3dba7045ec03c"},{url:"assets/js/page-Newfeature--5136c541.eb3151af.js",revision:"123bd8cd0c55ae5bd43bda08e19d86af"},{url:"assets/js/page-Object--16031ab2.b389c0de.js",revision:"981947650d1266d3bab88685629b670f"},{url:"assets/js/page-Page--af17b59c.4509d848.js",revision:"3a938855f21ba44f3434fdbe95ed01c6"},{url:"assets/js/page-PageConfiguration--0aacc152.833a8d99.js",revision:"24f842cbb4b2bbf45a1ef8b6965710a4"},{url:"assets/js/page-Pageinformation--71efd5d2.d635ea28.js",revision:"d5ac6df2b6389eba4f2d98bd339528d8"},{url:"assets/js/page-People--2182769c.61cd0f3e.js",revision:"0a47eca8ecdc2c727898cd6e73d854ef"},{url:"assets/js/page-Place--951cdc00.a27f565d.js",revision:"9ef845179dfedd271355af4636e3bbb6"},{url:"assets/js/page-PluginDescription--137c6c07.9fa4b083.js",revision:"47c342d3eb8c4b05a28f8e61790a23f1"},{url:"assets/js/page-Plugins--adbf415c.68e8904b.js",revision:"401e13db9c39313f662fdd440f36b410"},{url:"assets/js/page-SEOandSitemap--5934b3b2.2f47e7cc.js",revision:"0e0099252f296e489e4b7caa7d84faac"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.035a4d30.js",revision:"df09b73c0ee3d2c78bc8504d75b4e798"},{url:"assets/js/page-Sidebar--2fa1ea2c.27d7d2a4.js",revision:"d5adf63cd1767e87cc35e50e7847fd11"},{url:"assets/js/page-stylusconfiguration--6796cdf2.1626d8db.js",revision:"8edc3e7aaef272ceb50ccb71b22795ce"},{url:"assets/js/page-stylus配置--0ce19a82.ac850b49.js",revision:"efcd11bcd335b79fd5dd58aaf4f248cc"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.5ee7c6a7.js",revision:"d96ef190d39c59704bee45f4e845ed14"},{url:"assets/js/page-Symbol--a9259c5c.27209898.js",revision:"3f5717558cb95484c9bc7b58c4c5bf7c"},{url:"assets/js/page-TexSupport--64cb5e50.04230264.js",revision:"24229a90dab06b51085c485956a575bf"},{url:"assets/js/page-Tex语法支持--1e02b152.cdf03a3e.js",revision:"4456e223b8ada68b0fe023d657480b63"},{url:"assets/js/page-ThemeConfig--1120a0ce.e9610e49.js",revision:"a71bc307a5e0ded2e9e63a77325d1229"},{url:"assets/js/page-ThemeConfig--1a859dfc.75734c72.js",revision:"580397b706bc2dc4f58bb4cc90f0fe83"},{url:"assets/js/page-TSsupport--09728ac8.c94bd310.js",revision:"d92b8ae8e1e96bff3b2816a75e857696"},{url:"assets/js/page-TS支持--4625f812.852619de.js",revision:"098bba0666058a8eb5e97e46713c2021"},{url:"assets/js/page-Vuepress--b7060eee.1de1a2b3.js",revision:"a75da8068c3d5842eabd2caf10d38050"},{url:"assets/js/page-vuepress-plugin-container--31498112.e1007ca3.js",revision:"27b80b786dd588973296a536e0f9e51a"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.7ab52e26.js",revision:"1043106681bce3022eda366ca9e97c30"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.bdf9c687.js",revision:"0d6114e22517d0eaeef739b2612a7bf7"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.d6ede531.js",revision:"c9f0d3d4730dcd6e7e7851698b716628"},{url:"assets/js/page-vuepress-theme-hope--354da24e.67a508c8.js",revision:"2d8ecf9b4254878ba4acc96bf210bec2"},{url:"assets/js/page-vuepress-theme-hope--776d8369.838ae650.js",revision:"630eb212d125ae4e2837306f60d5680b"},{url:"assets/js/page-VuepressCases--082972f2.5e30afaa.js",revision:"becedfdd9ec341dc71cb4b6975757f22"},{url:"assets/js/page-Vuepresscommands--9f3f316c.83277c05.js",revision:"8d0206229ca227972873bd60c0058f17"},{url:"assets/js/page-Vuepress案例--531d5f3e.2a256d80.js",revision:"c70f82d7bdd4c3199c5d4472496d29cc"},{url:"assets/js/page-上下角标--8efed9dc.7f6d7c82.js",revision:"ffc8193d90470ce6b545763259e402ac"},{url:"assets/js/page-主题配置--2c572572.1b1572e0.js",revision:"1fc8388e923cc48ffa7ca596b8b72cb4"},{url:"assets/js/page-主题配置--6ad2aa1c.b1b2e7b0.js",revision:"19444a8ef0b3e0ffb82a3ded46402dd7"},{url:"assets/js/page-人物--b4fc27dc.11d5aecc.js",revision:"37be24b204e83ed4fc9aa3da7223a8fe"},{url:"assets/js/page-介绍--2e99d139.c916f3dd.js",revision:"91efddbe801dfc2e01b5b2a711fb78af"},{url:"assets/js/page-侧边栏--43054cb2.3cdc45bd.js",revision:"58ce273318f234a22299c7d11774ecf7"},{url:"assets/js/page-加密功能--2361b7e4.025fc02c.js",revision:"593f303b03b6e6a547b3eab7be13638b"},{url:"assets/js/page-博客相关--6a3fd4f2.f94fbf55.js",revision:"f623fe7257bccddae12aa7cabc3588e6"},{url:"assets/js/page-博客首页--1eb2b298.d9f8cbd5.js",revision:"87ae997b05e1f3f9a5a4254e7cc5e1ed"},{url:"assets/js/page-地点--6710785c.64060acf.js",revision:"2f20001b74cf7c3d298eb6d6c972fd63"},{url:"assets/js/page-基础知识--4d466a79.8bdae648.js",revision:"e9421e08648f6fc677434311b1568bae"},{url:"assets/js/page-安装使用--76e0e5b0.fd8418b1.js",revision:"fdc6ab7cb0d948abfd82c5eb98e98f63"},{url:"assets/js/page-对象--e150da9c.8b8d93ff.js",revision:"40416cb92f6074672bec246c42c6b9d5"},{url:"assets/js/page-导航栏--183844fc.e047059c.js",revision:"8c4baaa867e321f06743f2983c5ff9f0"},{url:"assets/js/page-布局--fa93e36a.708b225d.js",revision:"ee123a778c114125be4b7c88123837d4"},{url:"assets/js/page-常见问题--10ab790e.468fb1e8.js",revision:"1a72e1982a7fb2573567e94e1662545a"},{url:"assets/js/page-插件--32355f10.d6a436a3.js",revision:"11ff4e1cd499f61ac38b46dc37f72d63"},{url:"assets/js/page-插件说明--cbca1c8e.72d0d7a2.js",revision:"a656f9dd13c3191a7c43d9fe85e91870"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.9021f58e.js",revision:"e044a403e8ad645947640c3c6acb79c4"},{url:"assets/js/page-新增特性--30c6c799.f2b457e4.js",revision:"b6215079ed20031c268189ecd0d4b277"},{url:"assets/js/page-新增组件--0979095e.8dde022c.js",revision:"47f4940569afb9bcd1e0a444d8933449"},{url:"assets/js/page-标记--0ac52704.c879ca43.js",revision:"6d687b25417185b0758540b3797f5d48"},{url:"assets/js/page-流程图支持--582eff1c.0198c234.js",revision:"ce12224ca7c6206aeb536e02d8b3911d"},{url:"assets/js/page-深色模式与主题色--01662674.97de25a9.js",revision:"3dbd7491809b266e6362d1d9424b1154"},{url:"assets/js/page-符号--2db8fb80.00cf2517.js",revision:"ba865aa3e26e297c1f0d429fb09654c5"},{url:"assets/js/page-脚注--17d88350.ddda29a2.js",revision:"b8df003e33e1f7c857d7d1dbd80e9375"},{url:"assets/js/page-自定义对齐--048d31dc.71ada306.js",revision:"ed0363fb61c4fee6607a7d17893ab30c"},{url:"assets/js/page-自然--7ec33be2.df7681df.js",revision:"8e7ce534520670bfaa10b744767f9f6b"},{url:"assets/js/page-评论功能--350aff9a.3f53f281.js",revision:"454c2307dcb493fbe33099d4eb97d068"},{url:"assets/js/page-配置文档--d315f8fe.a5198bc7.js",revision:"e223edf540731a07ad88aa2137d2b8e6"},{url:"assets/js/page-页面--78423bfe.48c579c3.js",revision:"e6171cd9d90f3a73a8791ebbdbafbd56"},{url:"assets/js/page-页面信息--455b9800.64b25f0d.js",revision:"5a9c09310514c1fd8d7f204143eb7090"},{url:"assets/js/page-页面配置--02399408.e6e03256.js",revision:"1742e03e41d1ccf8589ff1ca2bc3d0b8"},{url:"assets/js/page-项目指令--2f3d7c1c.d703f1e9.js",revision:"bd984199f5ae08462d9d95ff36040e46"},{url:"assets/js/page-项目案例--1f3d6482.6916e326.js",revision:"4793c491689ebc8815886fc0f36606fe"},{url:"assets/js/page-首页--79a22944.e245fcaf.js",revision:"7c3bcea1845839906517d005dbcb4661"},{url:"assets/js/vendors~docsearch.25c0da0f.js",revision:"387d31bcf787c450c317edfb31986c54"},{url:"assets/js/vendors~flowchart.9955b15c.js",revision:"d5910fc2c3043e93496086d9e21a1a9f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fe61a2e3.js",revision:"3e58fabca4835023e31aac66329bf1b4"},{url:"assets/js/vendors~layout-Layout.e5193eb3.js",revision:"f16ee1d65aa9882f6631526c60e003dc"},{url:"basic/index.html",revision:"2a1bfceac0cccc6eb851c3f1086ccece"},{url:"basic/markdown/demo/index.html",revision:"da4af23010785d6b952f5fe859f4693f"},{url:"basic/markdown/emoji/index.html",revision:"e05dc4227fcd439f41e2dd7f0c4ab8e2"},{url:"basic/markdown/emoji/nature/index.html",revision:"fdb87de85de64477ac9f092349535b3f"},{url:"basic/markdown/emoji/object/index.html",revision:"753b356a1d8b023c875dd46e6f69714f"},{url:"basic/markdown/emoji/people/index.html",revision:"8e5f5dbf6a79ec61daaa8c3a98c181c7"},{url:"basic/markdown/emoji/place/index.html",revision:"14784f4aa73a42bf7835fabe884fafdb"},{url:"basic/markdown/emoji/symbol/index.html",revision:"1d1dfae43ee4894c1fdf13de50d55c3f"},{url:"basic/markdown/index.html",revision:"11b869c8c7638c32e7ea3872e7e84421"},{url:"basic/vuepress/case/index.html",revision:"331b0c0b879a18824a565335bd960d8f"},{url:"basic/vuepress/command/index.html",revision:"4c3cca8eca2f53bb85e858eaff816f33"},{url:"basic/vuepress/file/index.html",revision:"8c0c38d15fcc26708632e5911956f121"},{url:"basic/vuepress/index.html",revision:"3ca21529385dc7a3a0f31c890002ce20"},{url:"basic/vuepress/plugin/index.html",revision:"1d638f8b9dfd06826ef632ad63c81e62"},{url:"basic/vuepress/theme/index.html",revision:"845f548fc7bb499a29570ca3fc208aeb"},{url:"category/basic/index.html",revision:"54e5aa2a49570b38e71abcfbfec2c388"},{url:"category/basic/page/2/index.html",revision:"d21623cd48b5a9acd3d8c9f92dfb6a2b"},{url:"category/basic/page/3/index.html",revision:"3c670dc63ba17e7fad454a4cf2a742f0"},{url:"category/config/index.html",revision:"e6ef306fdb3a69dce4cd45086019d19e"},{url:"category/config/page/2/index.html",revision:"5f856067c4bceee8f15ab6a4ac82bdeb"},{url:"category/demo/index.html",revision:"602963fcb5592901afe06b456d11f151"},{url:"category/FAQ/index.html",revision:"32d51cddd4f2b9fd0e51a959a2b26756"},{url:"category/feature/index.html",revision:"6be3bd3fd6878030a72176e60cfa422d"},{url:"category/feature/page/2/index.html",revision:"a9888b896c99169eb9319e689fe3b6a8"},{url:"category/index.html",revision:"6c51f8227c81e58946c0a558cdbb9b3d"},{url:"category/instruction/index.html",revision:"55a89058774e6ee801c3ff1021d67a02"},{url:"category/layout/index.html",revision:"279920ec5bbacfedea44bc480624a057"},{url:"category/layout/page/2/index.html",revision:"cca101d80704e74524591a911ea55970"},{url:"category/markdown/index.html",revision:"19388532c683b4cc2a19494250fcdf79"},{url:"config/index.html",revision:"caac920e1718de7f7d22af3be55887c1"},{url:"config/page/index.html",revision:"5eddcb52f66114cfac0c9c6329f1c547"},{url:"config/plugin/container/index.html",revision:"0e80ac62ed22817020889135edac2204"},{url:"config/plugin/copyright/index.html",revision:"eead6e2a5ff3a7b9651ebc80c4bbf341"},{url:"config/plugin/index.html",revision:"6f346acfc776adf4f1d9e46f46c706ef"},{url:"config/plugin/pwa/index.html",revision:"f3b1d2fa45e2d2da66065028cc4f3ef5"},{url:"config/stylus/index.html",revision:"6c0a5673dc580e56d65482af3bcabaec"},{url:"config/themeConfig/index.html",revision:"1f55bddcd285ba0130fd056f85649412"},{url:"demo/index.html",revision:"fd6d75123b87f65cc688552f842aaf0d"},{url:"FAQ/index.html",revision:"f5ea33aceb7df775339077b4c8ff3d62"},{url:"guide/feature/blog/index.html",revision:"4a962dc878a13eb3c7339f27a952d4be"},{url:"guide/feature/comment/index.html",revision:"ecc115f9dd5863a35a4a2e3ce7e20ed0"},{url:"guide/feature/component/index.html",revision:"406d9da5d12acc31d7fb7b110c8226a2"},{url:"guide/feature/encrypt/index.html",revision:"e338d046fe37b760a1f5b86d5e2e5413"},{url:"guide/feature/index.html",revision:"10983e85b9c6f185b035fabe6451791c"},{url:"guide/feature/markdown/align/index.html",revision:"73033f79c3a2bee36311b92ef12ae442"},{url:"guide/feature/markdown/flowchart/index.html",revision:"805c743c9a7fb8bec3d3fa84fc32b92f"},{url:"guide/feature/markdown/footnote/index.html",revision:"9dbb11e6bafe43405bd34266722f3f4a"},{url:"guide/feature/markdown/index.html",revision:"4b5d9541ab77b23156588435b16ee22d"},{url:"guide/feature/markdown/mark/index.html",revision:"ecbdd6603895ba5d747c8e8132f26b32"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"0c85db2e6ff5e5fe83fb5ad69234a8e6"},{url:"guide/feature/markdown/tex/index.html",revision:"a25da81018e7e443918ed18360302a5b"},{url:"guide/feature/page-info/index.html",revision:"04751ed8004a7010ee733d895a58b3aa"},{url:"guide/feature/seoAndSitemap/index.html",revision:"bc29fbbc53eb3396a87caa63c3ee2d0f"},{url:"guide/feature/theme/index.html",revision:"62f0687a3f915a696abfd4235b1ee285"},{url:"guide/feature/typescript/index.html",revision:"a78a100b49fcaaa5fe54b231fe4266ab"},{url:"guide/index.html",revision:"b24d206dde1bdc65fddd50ef7e293ea1"},{url:"guide/install/index.html",revision:"7f6ff48695aed2a217f01fb7bb4622f5"},{url:"guide/layout/blog/index.html",revision:"c82b7a6ecb7dcd5dae0e9d739292d0f6"},{url:"guide/layout/home/index.html",revision:"d7061b243d01e5255bd5ed0d65bd0e82"},{url:"guide/layout/index.html",revision:"a1dbf929262e62f344b49fc5461bcf8b"},{url:"guide/layout/navbar/index.html",revision:"573713b45a14015d4bbabc39a7960621"},{url:"guide/layout/page/index.html",revision:"25d3ca763d7b4c6b064ce00ecdaa555e"},{url:"guide/layout/sidebar/index.html",revision:"77e0bd3f43cc4885988c8a1f81a8f58a"},{url:"index.html",revision:"c142e0a5c1d967e30fb80ff15dd05474"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"deccfc769c798548c91f2f666bc40386"},{url:"tag/comment/index.html",revision:"2b4daa50498d6c6127212fe678f35ba1"},{url:"tag/components/index.html",revision:"a9fd00a04cd00dc4f60acee9fcad0b09"},{url:"tag/config/index.html",revision:"14609534ca08dce58b5714b5093f72a3"},{url:"tag/config/page/2/index.html",revision:"3edb322054eb6b4c07e85da9097d9b64"},{url:"tag/emoji/index.html",revision:"36d9437675c6a1893ce59e06db516c38"},{url:"tag/emoji/page/2/index.html",revision:"470a39315122f7c5aba1a7c0e3630e51"},{url:"tag/encrypt/index.html",revision:"d125d1c9a8eb6e6884737ab91b150956"},{url:"tag/feature/index.html",revision:"aa0e6812c68fac1cb058355bf090dc60"},{url:"tag/feature/page/2/index.html",revision:"b69784500b421707b10f7e73389ccc3a"},{url:"tag/frontmatter/index.html",revision:"0740b9b19f37ed0212803ddfc5a8c27b"},{url:"tag/function/index.html",revision:"5b10c8ef5738a940ab80480754eecdfe"},{url:"tag/function/page/2/index.html",revision:"78a92a923a3994b64f22e469dfa34095"},{url:"tag/home/index.html",revision:"29f3f436ca388105e22fcfac8de35451"},{url:"tag/index.html",revision:"3ded0d437e676a26604a267716fb0473"},{url:"tag/intro/index.html",revision:"2af491ed1b311a40e6e05f1e760bf340"},{url:"tag/layout/index.html",revision:"0f5be9b204b2210031b6231896620827"},{url:"tag/layout/page/2/index.html",revision:"73d0f0841b0311eb29f9e555ffd4910c"},{url:"tag/markdown/index.html",revision:"d6d92507afb65be12b1fd46b383125bd"},{url:"tag/markdown/page/2/index.html",revision:"3cdbbd0f90e37d68beb2c204cc7edec8"},{url:"tag/markdown/page/3/index.html",revision:"030bc8f87534548b528d324b829c1fc7"},{url:"tag/navbar/index.html",revision:"5faafe583a3603c2507797a211e2091c"},{url:"tag/page-info/index.html",revision:"763bfed2d966f09750687cb2f4c93b4e"},{url:"tag/plugin/index.html",revision:"8ea84100142514d3990a314b16aad392"},{url:"tag/seo/index.html",revision:"12f94bd88947ec8a20ccac93a4436365"},{url:"tag/sidebar/index.html",revision:"aa48177d4366a43b42072c8613efc58f"},{url:"tag/sitemap/index.html",revision:"c9f02aa4c52f4c057f93956a4a395400"},{url:"tag/style/index.html",revision:"23f0aa9ef1bcb1d5939e81c68fe26857"},{url:"tag/themeConfig/index.html",revision:"cd699dc9491a77b2e1dd9e39ac6e9b00"},{url:"tag/typescript/index.html",revision:"fe76e6e308566229aa5630fc68900690"},{url:"tag/vuepress/index.html",revision:"53003a65a5ec4500da9716da0935ec85"},{url:"tag/vuepress/page/2/index.html",revision:"8f6bcd754c3c0ee8f45f2f8bdc2d33d2"},{url:"timeline/index.html",revision:"eea2ec09d296bee902c72b1f71a36512"},{url:"zh/basic/index.html",revision:"c7cfa9c9abe4f5237abc173a2cd44c6d"},{url:"zh/basic/markdown/demo/index.html",revision:"0cbc51ec7550b9cfbdf71f9123a119dd"},{url:"zh/basic/markdown/emoji/index.html",revision:"fdb9bb5b2fdab584aa0bdcc84ce1b808"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"5e222164a7b77581c2bf13a2980e2134"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"a7bf1c725d8689476f15465de00d3d4d"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"47e7edd08cd4ac8510ddeb7d14bcf474"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"0451bccd1b9af3369039563eb648e9ef"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"8e667b65369a1a58564b1fa2495bebd3"},{url:"zh/basic/markdown/index.html",revision:"6d1f439d3e74dbfbe1c587851cb4217a"},{url:"zh/basic/vuepress/case/index.html",revision:"c66a9165b6d5a44aa65dd91a8ef41120"},{url:"zh/basic/vuepress/command/index.html",revision:"6626add7b6fb87554d5e9f4d800520ca"},{url:"zh/basic/vuepress/file/index.html",revision:"1bec33d1fb559b0e9a87c6c591d87ee4"},{url:"zh/basic/vuepress/index.html",revision:"9d4cdd6d907aa1f45c57f9bf23245eb0"},{url:"zh/basic/vuepress/plugin/index.html",revision:"bf0edec6cc83c749255bee478f4fd5aa"},{url:"zh/basic/vuepress/theme/index.html",revision:"2802cf43d43ed2aefb8aa8f0ff172a3e"},{url:"zh/config/index.html",revision:"bc426b4ba4f024edfea26c8b0cf476c7"},{url:"zh/config/page/index.html",revision:"f6317b66eaa0fd91445f031c5c50fa77"},{url:"zh/config/plugin/container/index.html",revision:"94dc54035753951fe69b43a10e37c480"},{url:"zh/config/plugin/copyright/index.html",revision:"b2cce554fc1a1bef7e8a94ec621816d6"},{url:"zh/config/plugin/index.html",revision:"092776f4ef77503d6171e2b18502f622"},{url:"zh/config/plugin/pwa/index.html",revision:"6768d898a1e6aa182cbf1298f5cc7cb1"},{url:"zh/config/stylus/index.html",revision:"a5c8f4cbfbe48c23789bf577be004758"},{url:"zh/config/themeConfig/index.html",revision:"1cbd5043468306f53cf7ad0781d4eb0d"},{url:"zh/demo/index.html",revision:"3dd18f2ff2bbd318a6061046b7b3ef88"},{url:"zh/FAQ/index.html",revision:"e3e87ca34a93415adab3c9479f56ba6f"},{url:"zh/guide/feature/blog/index.html",revision:"39dbaba55ba2751fc92b5b42ba47b267"},{url:"zh/guide/feature/comment/index.html",revision:"ea4d43e1830463a689974651e26898e5"},{url:"zh/guide/feature/component/index.html",revision:"cd5b911767a6a3c597e7f9ff62a45fd3"},{url:"zh/guide/feature/encrypt/index.html",revision:"89f45bf676aeeb4b1154dbe6fd600c1e"},{url:"zh/guide/feature/index.html",revision:"ed3e871ad92f7ca439850ccabf2718ba"},{url:"zh/guide/feature/markdown/align/index.html",revision:"09f652d3e51cb9e2c190140b22124ab3"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"fca7b31484695c8b580be405c8a256ba"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"accd8a9265fe7eda2686984f9a115da3"},{url:"zh/guide/feature/markdown/index.html",revision:"1a84e4582bc8fb3501a04311582457d2"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"7f5fb89f158dceed5ffb86760a2227cc"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"0841663f07c74108f28f6abc229b6850"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"2a81a482796d3eb3bd96f5bfae5dd821"},{url:"zh/guide/feature/page-info/index.html",revision:"ff270d98f1d8f4f32cac830d930c29bd"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"51c10163789446b1d00ec357b16f836c"},{url:"zh/guide/feature/theme/index.html",revision:"168714b72b0315669147fa47b4d1ed98"},{url:"zh/guide/feature/typescript/index.html",revision:"93385e5979eb3d64ac34f6a33d8dab99"},{url:"zh/guide/index.html",revision:"e70dd6c25022d537a6f1f910e3a043d4"},{url:"zh/guide/install/index.html",revision:"8bf46a197c39334743fbd9b596dd4415"},{url:"zh/guide/layout/blog/index.html",revision:"91149c8f2450269393e95ff3eb9a6d65"},{url:"zh/guide/layout/home/index.html",revision:"745f9e94d0ab1bc7252d922d08955e88"},{url:"zh/guide/layout/index.html",revision:"2874621f71496cbc2d2ffca901e77279"},{url:"zh/guide/layout/navbar/index.html",revision:"750e508d122bfdccdf63f14f2dceb47c"},{url:"zh/guide/layout/page/index.html",revision:"495c13c2b1dd06028e7525f865e90843"},{url:"zh/guide/layout/sidebar/index.html",revision:"4c25dbdb3b874100e1f635629546fae2"},{url:"zh/index.html",revision:"ed115e671977f445d8b92529f06b1a90"}],{})}));
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
