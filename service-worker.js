if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"ef8b0029ed1232a4561a4afd9409e61b"},{url:"article/index.html",revision:"920e1db97e50647260b4985330820071"},{url:"assets/css/0.styles.6b371b62.css",revision:"932ee4d45ba6c800fd732017cfaa5222"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/118.79ad13da.js",revision:"ae14e1ff104a140dbfc4aa44902e3bd3"},{url:"assets/js/app.ac5c2fc2.js",revision:"e3faded888f79462246e79a63decce63"},{url:"assets/js/layout-Blog.853dc813.js",revision:"2146834d76b1192fed9f01265edf018b"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.8677946c.js",revision:"9e881a910eddf7fd9f6fcb027e9d7fb4"},{url:"assets/js/layout-Layout.c2970e8c.js",revision:"a422ed265a1f5a47a320f055ab196f26"},{url:"assets/js/layout-NotFound.1e5def34.js",revision:"8d1fa4fccaca0362e50415a71e94c6b5"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.3832c863.js",revision:"9310f3904a5b30b17946f4e3d57d4b2c"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.f39e21f9.js",revision:"42e4fb81d4e672d799656d21f671e536"},{url:"assets/js/page-AboutVuePress--4a71114e.81b731f4.js",revision:"33db1db547877828a4781de03971b3a0"},{url:"assets/js/page-Basic--770cb96b.302c1091.js",revision:"19be2e1f3c602e2e549b652cdf45a890"},{url:"assets/js/page-Bloghomepage--64265752.1f5757c4.js",revision:"4d5536cbc0c5930c4b9c73701d609b5c"},{url:"assets/js/page-Blogrelated--17c260a2.0f2f680e.js",revision:"ad9b34f5f4317763c87cd53de0c42a5e"},{url:"assets/js/page-CommentFunction--5bb6671c.d929ad6d.js",revision:"f3ee003f1a3a1afa82e4bd95a01d8da2"},{url:"assets/js/page-Commonproblems--2b571e9b.14028dce.js",revision:"669340ea1d772a05999bddda91ae7441"},{url:"assets/js/page-Config--35a0a7d9.1699f4d3.js",revision:"adcd51773dd8961d687b3e0e048363bf"},{url:"assets/js/page-Customalignment--4f21aa5c.74f1f848.js",revision:"b546192cb85af1d06ee1d180a0a1b3ee"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.d12bcc92.js",revision:"b3a37de8d581f96c728fbe46b6228cd5"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.965c7d75.js",revision:"7c79ceb966a6c48217c06436a475696b"},{url:"assets/js/page-Demos--f328658e.29261be9.js",revision:"f131039487c0192576d66659ee282a44"},{url:"assets/js/page-EmojiList--41bb29b9.40488b6d.js",revision:"ef9a8e67e02ea1cec18b14d961a5c26a"},{url:"assets/js/page-Emoji列表--404e6737.95b9241b.js",revision:"c5141b13ed2548305aad03e4d9dafae8"},{url:"assets/js/page-Encryptionfunction--181bdc9c.8e39e8fe.js",revision:"1c4a5590911d72159975ad2ec0451804"},{url:"assets/js/page-FileStructure--665a4f1c.44b597fa.js",revision:"956534c9e06d7303c40d4ecd00f00d15"},{url:"assets/js/page-Flowchart--7ce6d974.fefaf602.js",revision:"ac7a4ce6aefd202f78f1d4dffb3e0460"},{url:"assets/js/page-Footnote--0c733e52.de222a23.js",revision:"4845aaa61ea3f7b54e77a311bfa6ed51"},{url:"assets/js/page-HomePage--5834599c.03f9790d.js",revision:"014de684c85d2f21f8fd1baa4f9c4380"},{url:"assets/js/page-InstallUsage--0ab466d2.8f342feb.js",revision:"a587aa4ba80b6337750e5d82ec3bc341"},{url:"assets/js/page-Introduction--d4910962.a0448305.js",revision:"0bf195084c063e326c9b596696e277cf"},{url:"assets/js/page-Layout--12bd4f0e.8fc05385.js",revision:"cd57ff45adac52026c721926dad5f3ce"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.2ea5cf95.js",revision:"55adc60a593897c001b8e06d8fcb8634"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.7fcee5f2.js",revision:"6deac60f792f76672ef8dcba4b40da7f"},{url:"assets/js/page-MarkdownIntroduction--270989ce.46f610a6.js",revision:"697db9f58f1dc3083c11d6e3df19938c"},{url:"assets/js/page-Markdown介绍--0e6891b6.be36dffc.js",revision:"c0fb72c0f34ea24f23b6f321b915cb73"},{url:"assets/js/page-Markdown增强--6162938f.e3f759fc.js",revision:"4fb87b204fd64a61c9b6cbc37c772738"},{url:"assets/js/page-Markdown示例--5479fe88.3a3abce8.js",revision:"d426621953d16ad283c7634806182644"},{url:"assets/js/page-Markup--6b1f341c.1d8f0048.js",revision:"3e5ad540551bc859ee9ed7cafac98d03"},{url:"assets/js/page-Nature--749fb09c.04fe43fd.js",revision:"5458bf9fa797d3564d88698b8c192c65"},{url:"assets/js/page-NavBar--c7bf87dc.1f2dcff9.js",revision:"4496ee6801d5482a20dcfdcae25e9215"},{url:"assets/js/page-NewComponent--1d138c72.08de0480.js",revision:"b7d0f28a0c6179744cc01f27f33add19"},{url:"assets/js/page-Newfeature--5136c541.30f42161.js",revision:"7f912e15e745f4082573679fe5b9e795"},{url:"assets/js/page-Object--16031ab2.3f282c41.js",revision:"ea0a875c2ced0c12179feaccb8e81ab3"},{url:"assets/js/page-Page--af17b59c.28f1c231.js",revision:"2dc259cc517ebbb5f8d0c5f4cb06f39e"},{url:"assets/js/page-PageConfiguration--0aacc152.8e8c6d62.js",revision:"5373eccd4a98eacef8afab7568bc215a"},{url:"assets/js/page-Pageinformation--71efd5d2.daa44ab7.js",revision:"155ac6ead6dbeaf5886a13d22d5e21c8"},{url:"assets/js/page-People--2182769c.f504f0ef.js",revision:"b33efa2a8cd95f1dac271631aaabeaca"},{url:"assets/js/page-Place--951cdc00.beaa7b9a.js",revision:"af9fc08b939aabb801922091b3f94c2b"},{url:"assets/js/page-PluginDescription--137c6c07.d8afcb83.js",revision:"487c809b8f4ae39961276700b62850fd"},{url:"assets/js/page-Plugins--adbf415c.2510e7e0.js",revision:"7f24685d3fce8ee6bb46ca98ad120384"},{url:"assets/js/page-SEOandSitemap--5934b3b2.2bc86602.js",revision:"f57a575e3d8321122de386aac7dc4c5d"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.a8f7081c.js",revision:"847a388c760bc6ce3e8e06179ce543d9"},{url:"assets/js/page-Sidebar--2fa1ea2c.3751603b.js",revision:"9dfdf90358bd117ecdc7de1191bad372"},{url:"assets/js/page-stylusconfiguration--6796cdf2.60b13ecf.js",revision:"a5756c7cb5fbe957e3652d148ab5cfff"},{url:"assets/js/page-stylus配置--0ce19a82.2e168fcf.js",revision:"b6c91975def005dd48bc90e0d34ad5bb"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.518115b4.js",revision:"36d52833c9bcc77b75dfd20e6107f907"},{url:"assets/js/page-Symbol--a9259c5c.73018ddd.js",revision:"8d2fb0e933cd9c68624134aad6dedd8c"},{url:"assets/js/page-TexSupport--64cb5e50.cbd16faf.js",revision:"f23d7b310c4ae27367df3cc4fa1105f9"},{url:"assets/js/page-Tex语法支持--1e02b152.c53b3ac5.js",revision:"ebcfe6f9d56cc05d484f0c2b3d7dff42"},{url:"assets/js/page-ThemeConfig--1120a0ce.bed49b89.js",revision:"34a6a18440705834c95b367c10b024eb"},{url:"assets/js/page-ThemeConfig--1726e14e.a3fe58b1.js",revision:"e4c3112aed1eab5307b5ca5d1ff9fd62"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.c49c96f5.js",revision:"a4970f0c0cb5534fb7417580dca317d9"},{url:"assets/js/page-ThemeLayoutConfig--a3ab449c.0af0f15e.js",revision:"9da8c1e7f037fa5397da45244640a9d0"},{url:"assets/js/page-ThemePluginConfig--958196dc.446bf8bb.js",revision:"4011b1f84bb5d44395849bf4f4c06b0f"},{url:"assets/js/page-TSsupport--09728ac8.cafdad8d.js",revision:"f9aaaa7d8dfa2504d1c528331637285f"},{url:"assets/js/page-TS支持--4625f812.f2b5ed12.js",revision:"ed34ac120491aa49debb3e25990d5670"},{url:"assets/js/page-VuePress--b7060eee.99f87726.js",revision:"cd92a8550209975834615b4288acbd38"},{url:"assets/js/page-vuepress-plugin-container--31498112.8dff4873.js",revision:"91430e3907be8ad2aada8c3fc2a3c03a"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.7c43e436.js",revision:"70b6a954a174e63d56f0b5823d366334"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.49a79316.js",revision:"0f8cb81dc8b2cdb280e11f0cdd2a29a4"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.d0d70bc5.js",revision:"dc145cd4b3d6bca7a2e5c7ed1fedb489"},{url:"assets/js/page-vuepress-theme-hope--354da24e.f814069a.js",revision:"7f65fd341b074fd9be32cf6d547a083b"},{url:"assets/js/page-vuepress-theme-hope--776d8369.d65bb213.js",revision:"aaef586dc13cdf2a8a8078989ace1c11"},{url:"assets/js/page-VuePressCases--082972f2.a8123b42.js",revision:"414a3227be9591ae38045ef01e61a650"},{url:"assets/js/page-VuePresscommands--9f3f316c.93bfb647.js",revision:"5feeb46dfdc410e3d49a2f783defd889"},{url:"assets/js/page-VuePress案例--531d5f3e.04bc2e9b.js",revision:"302c0f383b54866aa66230411a6fa7d4"},{url:"assets/js/page-上下角标--8efed9dc.d7fe59ab.js",revision:"222adc6b8cfd637792b860b53bdca4ca"},{url:"assets/js/page-主题功能配置--5bb71452.eede5261.js",revision:"ab6a5e0ffd16fd750a20449d4c0ffbb3"},{url:"assets/js/page-主题布局配置--0ac082da.ecdfbe90.js",revision:"158f20ca5eac12f4d6c20afe4d96f307"},{url:"assets/js/page-主题插件配置--1b0c3e98.b1fb8fa7.js",revision:"0c6b0fa4de6324628da3d28b1985d6f6"},{url:"assets/js/page-主题配置--21dc088d.2353bfc6.js",revision:"f2b4d45ac94681fdc261bf1386af6c4c"},{url:"assets/js/page-主题配置--2c572572.3668d74c.js",revision:"13343440384b9ec56392df043eafdc5f"},{url:"assets/js/page-人物--b4fc27dc.6ff779ae.js",revision:"362bb3b518701cef65baf202a68d7a72"},{url:"assets/js/page-介绍--2e99d139.29f3fb49.js",revision:"7f5f7d465031b16c60f9e59a0a4aea10"},{url:"assets/js/page-侧边栏--43054cb2.a9e14fb6.js",revision:"3ebbe6bd888bc2d3dde2488ffbd86b77"},{url:"assets/js/page-加密功能--2361b7e4.a5380aba.js",revision:"a5e28c79240b095a21f0f95ac2d90d07"},{url:"assets/js/page-博客相关--6a3fd4f2.380849ca.js",revision:"af11e764d36e9c205313a256b90646ea"},{url:"assets/js/page-博客首页--1eb2b298.76c44add.js",revision:"e5a6a6d392dcecdcbca959b3d47dd706"},{url:"assets/js/page-地点--6710785c.65ab60be.js",revision:"0dbe5516182e2e29e8cbe374f27c013c"},{url:"assets/js/page-基础知识--4d466a79.a090ad30.js",revision:"635d51da3bfb0021a1ff6dc3419b9b5d"},{url:"assets/js/page-安装使用--76e0e5b0.d4eb43cc.js",revision:"e76c96908fbbe6185555e86fd40cb86a"},{url:"assets/js/page-对象--e150da9c.fc94cfc5.js",revision:"86f8df6e3c1e1a597ca0cba152f2dbca"},{url:"assets/js/page-导航栏--183844fc.705ac853.js",revision:"cfcf8cbe71a4c789934aa0638d27d8e4"},{url:"assets/js/page-布局--fa93e36a.a901370f.js",revision:"6d9d4473fed3945094c9c0b86d022fe1"},{url:"assets/js/page-常见问题--10ab790e.44a0b8fe.js",revision:"4b55623bf2006f48a749036b3717a48e"},{url:"assets/js/page-插件--32355f10.05ef42b8.js",revision:"a3f7e85c40e8883023e99757a0dae996"},{url:"assets/js/page-插件说明--cbca1c8e.fb72301c.js",revision:"8799f4a81a6d0877a2c2da8e01364243"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.39a1934b.js",revision:"b8277343668fece2431287fc3fbe1428"},{url:"assets/js/page-新增特性--30c6c799.c27aa6d4.js",revision:"5ca6cf640192d9de370dc4b74456e4f2"},{url:"assets/js/page-新增组件--0979095e.81fec444.js",revision:"dd7062c922d3e3a85e104a08c6d33951"},{url:"assets/js/page-标记--0ac52704.e2cf4eaa.js",revision:"1e7d1bbc5a343b0c1a92cdc125b57c65"},{url:"assets/js/page-流程图支持--582eff1c.d43be76d.js",revision:"522dd5db341c32d031df3fad844a9d97"},{url:"assets/js/page-深色模式与主题色--01662674.60814165.js",revision:"6137d60753fe1599f30c4f3c26ad3478"},{url:"assets/js/page-符号--2db8fb80.5a1589dd.js",revision:"319105b00510efe1ba2e9bda5f64829b"},{url:"assets/js/page-脚注--17d88350.734485c9.js",revision:"94934b7554172bfa52899904e2dd4fe6"},{url:"assets/js/page-自定义对齐--048d31dc.360c5d32.js",revision:"6908ad58c6aae2972e8e7c457c26baf2"},{url:"assets/js/page-自然--7ec33be2.b31cef42.js",revision:"8fb3fbf9fce848bacf898d2e179f51e9"},{url:"assets/js/page-评论功能--350aff9a.8988c263.js",revision:"033b7761b2cec86ae67fd09304f579a4"},{url:"assets/js/page-配置--d315f8fe.365f611e.js",revision:"ab9f5827566c3ae77174f5262c1c02f4"},{url:"assets/js/page-页面--78423bfe.8a6b25c9.js",revision:"5ca8d0b83c80dc1e3978402e098e4771"},{url:"assets/js/page-页面信息--455b9800.064c5561.js",revision:"d7ed4b921bc478871ab0a18bfd78c63e"},{url:"assets/js/page-页面配置--02399408.2584ca12.js",revision:"96718fa6078c24f1e86901f8f642c80e"},{url:"assets/js/page-项目指令--2f3d7c1c.479afd4b.js",revision:"9d3a34077617dd3d26e18fb83b3ac7b0"},{url:"assets/js/page-项目案例--1f3d6482.5e52c273.js",revision:"85b9d7b71a8592e2d7f550f2723cbea3"},{url:"assets/js/page-首页--79a22944.8bbf87d4.js",revision:"f879243d9161b747564392f38c5ec1be"},{url:"assets/js/page-默认主题配置--0d5b7f32.f116c04d.js",revision:"3ddf6f382f525940c0a478869b98d933"},{url:"assets/js/vendors~docsearch.5f4b507f.js",revision:"e91075b59f4303853dbf1734ed2251a7"},{url:"assets/js/vendors~flowchart.ab685766.js",revision:"253aa1c6f7756d9216e9a0f6643ada1e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6df29fb1.js",revision:"9f3205d20ba7b34cb226ab3787de1b6e"},{url:"assets/js/vendors~layout-Layout.a3a2e7d9.js",revision:"a24d4efecaa0c571004543b20438d5c3"},{url:"basic/index.html",revision:"d742c8b5ecf64b53c56ff5295282cf5e"},{url:"basic/markdown/demo/index.html",revision:"1b81ca862b7778c80be1c3a8af67f158"},{url:"basic/markdown/emoji/index.html",revision:"e28c71441239fba5529f288dcab33ba7"},{url:"basic/markdown/emoji/nature/index.html",revision:"f52086ac16104861cbe58a726dda2983"},{url:"basic/markdown/emoji/object/index.html",revision:"2d452c763ff3f2a91a3655d65f99e806"},{url:"basic/markdown/emoji/people/index.html",revision:"9eaf139422cb9c0dc6c73178450ea97e"},{url:"basic/markdown/emoji/place/index.html",revision:"53b2053e4c0ab7cb64ffa752c2f6a778"},{url:"basic/markdown/emoji/symbol/index.html",revision:"03c91c5210cb8ca0d43fa4d2dcf23775"},{url:"basic/markdown/index.html",revision:"9dc730c036b10296b47619020109cbcb"},{url:"basic/vuepress/case/index.html",revision:"8a306df5d78d098d571a7f3f71f03b8d"},{url:"basic/vuepress/command/index.html",revision:"d07328f730616cf5fe362b3addb493a0"},{url:"basic/vuepress/file/index.html",revision:"5f468f671dea1bf8304981d5b670bee9"},{url:"basic/vuepress/index.html",revision:"3bac8c2caa6700af02a89e5d0a744d4a"},{url:"basic/vuepress/plugin/index.html",revision:"39fac292b185fda563175020a3a5839c"},{url:"basic/vuepress/theme/index.html",revision:"b4edc7759781232120c8b5f190a091f1"},{url:"category/basic/index.html",revision:"c663d6be45b15e1791100d850fdc116e"},{url:"category/basic/page/2/index.html",revision:"4530985052a2c2f65ef47cc8dbc5cd70"},{url:"category/basic/page/3/index.html",revision:"aefc905a1d2e9b6dd7c477cf0f0a7869"},{url:"category/config/index.html",revision:"19cd467ea8d65d5f4da903748a72b54a"},{url:"category/config/page/2/index.html",revision:"9320db4225877fe111d90a1f58104c25"},{url:"category/config/page/3/index.html",revision:"543da1848f57acab25856e8968a8a6ee"},{url:"category/demo/index.html",revision:"cd081d65e927df0ad041778bcec6bcbc"},{url:"category/FAQ/index.html",revision:"d158192c88f9bd99760d16292458058f"},{url:"category/feature/index.html",revision:"bad66ccd28fbdc006a6fc40b2ecd1f14"},{url:"category/feature/page/2/index.html",revision:"7aecef4799c982178431e94865a5b013"},{url:"category/index.html",revision:"dc745a788911ef7532b8588055fd830e"},{url:"category/instruction/index.html",revision:"376e90212f01c93ca96824ab333c8b00"},{url:"category/layout/index.html",revision:"7c3836646424abd11c3032b321089b22"},{url:"category/layout/page/2/index.html",revision:"0ada60d05b3972f9cb0da7f589fdfb4b"},{url:"category/markdown/index.html",revision:"e8e537f6e5f6043015369aa70756d84a"},{url:"config/index.html",revision:"73584d606c80a563c3cc33f377b3aca3"},{url:"config/page/index.html",revision:"6a99d35e236a14acbb2fe07e599e1db7"},{url:"config/plugin/container/index.html",revision:"4e850b5b69aaab66af10f622fe79e1f3"},{url:"config/plugin/copyright/index.html",revision:"c11f99a2193f477a8a4e0effd6b85fdb"},{url:"config/plugin/index.html",revision:"f3a246e2e29eec028b21a75cfa4c33ee"},{url:"config/plugin/pwa/index.html",revision:"521d9d1d048ef9a7b836dba75500d1f0"},{url:"config/stylus/index.html",revision:"94c7791a3e72aefafe2e7f8b2ef71411"},{url:"config/theme/appearence/index.html",revision:"35c2c0248081a3e3c714becad226e03e"},{url:"config/theme/default/index.html",revision:"1f8b381534f3f4c7bf8e8b86d27ba709"},{url:"config/theme/feature/index.html",revision:"42d5cd6d4018de162271f549b16bba14"},{url:"config/theme/index.html",revision:"9e156b6342d6468ee0d0bcb186c70988"},{url:"config/theme/plugin/index.html",revision:"9847360ad4a91458d78363165a66e84d"},{url:"demo/index.html",revision:"71202a1520520fb6ef41ddc92e6f7b0c"},{url:"FAQ/index.html",revision:"4a5cdea0d27d2be47cd32c13ace8d8c9"},{url:"guide/feature/blog/index.html",revision:"bd3ba8dbc7a9a0829975bd74731e7226"},{url:"guide/feature/comment/index.html",revision:"de618805ca3bd0469e8e7746d3b92a87"},{url:"guide/feature/component/index.html",revision:"c5c4ea4bb2339d613d89a62c5ae2cd24"},{url:"guide/feature/encrypt/index.html",revision:"266e88222c6ad7bd271df9e8791cbb0d"},{url:"guide/feature/index.html",revision:"9d01fe68ae115ce9588209d186eef477"},{url:"guide/feature/markdown/align/index.html",revision:"74fbf48c2ac42761e49aa125c032e9fa"},{url:"guide/feature/markdown/flowchart/index.html",revision:"c5a975de1da0c8616efa3cacedf0125f"},{url:"guide/feature/markdown/footnote/index.html",revision:"a8320bde1a9222645d06809d4bdf253d"},{url:"guide/feature/markdown/index.html",revision:"19f6dbab129591f4bb0d17f1e5337ac5"},{url:"guide/feature/markdown/mark/index.html",revision:"62c01112b2f1741e3759a5ea23145d74"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"f65e21d63bf39c1ffb6899f86e2c76aa"},{url:"guide/feature/markdown/tex/index.html",revision:"c0e6e3ca76ec99de853e1d5e8153211d"},{url:"guide/feature/page-info/index.html",revision:"0c28f6b6d8592f1f94e36b3107b23907"},{url:"guide/feature/seoAndSitemap/index.html",revision:"762f908e1798ab3d7b5b7d5a5353ba85"},{url:"guide/feature/theme/index.html",revision:"fee85ffb30063ed637a27fab0768c57e"},{url:"guide/feature/typescript/index.html",revision:"b50c085b359098ef141a104c1f0c966a"},{url:"guide/index.html",revision:"a9205037495e6147d0207eebf91dd2d1"},{url:"guide/install/index.html",revision:"fb7fec30bd44a18a24b316269dab5035"},{url:"guide/layout/blog/index.html",revision:"391e4e9777b8f9e05c32fa210202584b"},{url:"guide/layout/home/index.html",revision:"99eb5016498cc198553113d195f4a941"},{url:"guide/layout/index.html",revision:"3b3a450df61c99db474a1369288ae818"},{url:"guide/layout/navbar/index.html",revision:"8f00640229df59311f43d23a103647ed"},{url:"guide/layout/page/index.html",revision:"c5d9d83caaf6eeb6eb6c2ee641032356"},{url:"guide/layout/sidebar/index.html",revision:"067b8862caaaa9465b5e342c87c7e3cd"},{url:"index.html",revision:"57b8fd9f96a06773bb360e3468ade044"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"2f6202c32d549018d5f95c1467055eef"},{url:"tag/comment/index.html",revision:"dbc3a7f256775e09d73f3745c503cc94"},{url:"tag/components/index.html",revision:"2b94ddc17c61dc42be4e4413653f63f2"},{url:"tag/config/index.html",revision:"f01482ef8057dc9e0c89c70acea2128d"},{url:"tag/config/page/2/index.html",revision:"b2e7d8e258550de3bd70bccdb9aa83c5"},{url:"tag/config/page/3/index.html",revision:"aee8704ac368546e6b7f827cad8c598f"},{url:"tag/emoji/index.html",revision:"75fa272a4b0c84e3be1af03cd6f744e0"},{url:"tag/emoji/page/2/index.html",revision:"26c6c3507e5588c4eae719a0f83d1905"},{url:"tag/encrypt/index.html",revision:"1724fcaf67529ce5844799b597998ec2"},{url:"tag/feature/index.html",revision:"8dd7814dbf6f401e55703482a1a36032"},{url:"tag/feature/page/2/index.html",revision:"6ceb05a4e8dabc5be435d5da5543469e"},{url:"tag/frontmatter/index.html",revision:"c68e0aeb0fb3f1baad5012df330311af"},{url:"tag/function/index.html",revision:"69f63553349225a6d055aa09af7ef9ff"},{url:"tag/function/page/2/index.html",revision:"f586788059f8940b4d176f280e7bf85d"},{url:"tag/home/index.html",revision:"17ab3b9b2ffd766e7c9eda72c92aa06b"},{url:"tag/index.html",revision:"ee05b896dbe643662323516e03369af1"},{url:"tag/intro/index.html",revision:"cd7791dff7a3f8e14ab26f87150df707"},{url:"tag/layout/index.html",revision:"60136ba3f0b2b9b66aeb11f08b41bbd0"},{url:"tag/layout/page/2/index.html",revision:"fcdad1fd87eb339efd2c6ac4c6c8e70f"},{url:"tag/markdown/index.html",revision:"3c07f16c6a03f753a582ff1dd1725235"},{url:"tag/markdown/page/2/index.html",revision:"3048df8d17f638b12e20068ce8c13b53"},{url:"tag/markdown/page/3/index.html",revision:"466fd0655b4ab882abba1a80471281ca"},{url:"tag/navbar/index.html",revision:"1be8661c95c5679d663e0036b588eb2c"},{url:"tag/page-info/index.html",revision:"1756c060eb26038bf57e26d3dc999f09"},{url:"tag/plugin/index.html",revision:"8d198ccdc49ee0e2be15668951ecc656"},{url:"tag/seo/index.html",revision:"a9590d76cf4dea63adbd60e961debd14"},{url:"tag/sidebar/index.html",revision:"c3bb3f7be3e950744feb79b17e05aea8"},{url:"tag/sitemap/index.html",revision:"35a9660bb854857e01f0f3af2fadf1e3"},{url:"tag/style/index.html",revision:"ea07d97858e83ca126f0e58ce1c70b15"},{url:"tag/themeConfig/index.html",revision:"d4e341a4475a9eda8cb1e4a1f0d614a3"},{url:"tag/typescript/index.html",revision:"4838cb9056d4ca1045902db4c1a4e43f"},{url:"tag/vuepress/index.html",revision:"a9edf34b67276becf01c382351e832f8"},{url:"tag/vuepress/page/2/index.html",revision:"46da94766e707379de30457579f67b45"},{url:"timeline/index.html",revision:"0433495cfaf6ee5432e16794fae7779e"},{url:"zh/basic/index.html",revision:"02b71570a3fb1d43bfbb904a31395c1a"},{url:"zh/basic/markdown/demo/index.html",revision:"68e073cd36162168f43b9d391800c04c"},{url:"zh/basic/markdown/emoji/index.html",revision:"bc1af5811921ff14516a321171857a43"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"c2c3c10daa5c2b87c0db9dcd5a2737dc"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"c51b43ac89305995e6b58290014e55e0"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"636b4b0b5042963c5c3217604e29e3d6"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"3f6555d62aea515feaea93d1a540b3a8"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"99468212b1d413ae6f427e718f41f027"},{url:"zh/basic/markdown/index.html",revision:"7316256bae5ee612f36bb856b7d5e278"},{url:"zh/basic/vuepress/case/index.html",revision:"c492717f06529be8ff06c31340f5ff6c"},{url:"zh/basic/vuepress/command/index.html",revision:"f54365c706c64ca1341b98b9de78feef"},{url:"zh/basic/vuepress/file/index.html",revision:"1759eebd839d47f6f6392f3623aa31e2"},{url:"zh/basic/vuepress/index.html",revision:"cdfa34ee3553d51f56eb3c0ce31093e5"},{url:"zh/basic/vuepress/plugin/index.html",revision:"7c2ecff4204ace1095091c097c5168d7"},{url:"zh/basic/vuepress/theme/index.html",revision:"1f8a1ceb677267bcff609bd5352f7bd8"},{url:"zh/config/index.html",revision:"9f9d6c2847806f9bea1e4e3fec2a2855"},{url:"zh/config/page/index.html",revision:"418bb9909aa37b791c5122ae7acfa346"},{url:"zh/config/plugin/container/index.html",revision:"e20014888d11ce66c2a7d044a5769373"},{url:"zh/config/plugin/copyright/index.html",revision:"19b6ea260915189edec2586c8234d379"},{url:"zh/config/plugin/index.html",revision:"e07088e8f14632824018c41d8ec4a57f"},{url:"zh/config/plugin/pwa/index.html",revision:"7affabd38614732f1174da8665fed351"},{url:"zh/config/stylus/index.html",revision:"748d2568b69b6c138ca464ee37328392"},{url:"zh/config/theme/appearence/index.html",revision:"e6a7a1ac0f902cceeccfe282af43db71"},{url:"zh/config/theme/default/index.html",revision:"2757ca4f6e01b0a3f9f58f6d95855ac5"},{url:"zh/config/theme/feature/index.html",revision:"fa64e300f1ca82d03a82216e4084145c"},{url:"zh/config/theme/index.html",revision:"95f5ec74db7a473d90e8d9f74ef05f00"},{url:"zh/config/theme/plugin/index.html",revision:"7818bb1341e6b264d0f5877b154d6b0b"},{url:"zh/demo/index.html",revision:"bd8e33bdfd35dac659df8537688bee00"},{url:"zh/FAQ/index.html",revision:"8e9cd500ec7f22b2271cca55e402719d"},{url:"zh/guide/feature/blog/index.html",revision:"84534cad589c65b65137fbfd0ae3bffa"},{url:"zh/guide/feature/comment/index.html",revision:"3903e3c5b34023c8684f4250e77ee732"},{url:"zh/guide/feature/component/index.html",revision:"a19d6cc9bfb521563fc820c29228e804"},{url:"zh/guide/feature/encrypt/index.html",revision:"f7098ceab90907c994eb3caf954553fa"},{url:"zh/guide/feature/index.html",revision:"ced4eed64717a1e3ce6a62af167dd3e0"},{url:"zh/guide/feature/markdown/align/index.html",revision:"6c1207bf70cecebeb9a9e0e20f265a95"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"cca3ec6a617e63a75743fda4c56c93be"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"7e42bd584ea76fbcdb7f3cf6f7aa2c14"},{url:"zh/guide/feature/markdown/index.html",revision:"f44ad6c94b6de410c27c5af4c779aadf"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"9482269b245d3bca3a4a1eb25b317964"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"bf2ce4b6de71a30f00fcdf41d357f351"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"cea012379d5a40760e3bf6b53a24c5ad"},{url:"zh/guide/feature/page-info/index.html",revision:"548f1168251e0b9a262d2a321785127f"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"d200c7c9d9f8b458c379b0992be52258"},{url:"zh/guide/feature/theme/index.html",revision:"deabd0498292efb14f3ffab2922170b7"},{url:"zh/guide/feature/typescript/index.html",revision:"61d4154cae121fd24db7e6e3f1883665"},{url:"zh/guide/index.html",revision:"3bd86f5356a9449779003fe5315e7286"},{url:"zh/guide/install/index.html",revision:"16e7e997e704e18a703d821882717a9b"},{url:"zh/guide/layout/blog/index.html",revision:"5faa85f289f28dfb48c30f3a244559dc"},{url:"zh/guide/layout/home/index.html",revision:"171b9dd90bfdb2e1921df9a3b722693d"},{url:"zh/guide/layout/index.html",revision:"ba1cc2f683e2f473a59a72896765eec0"},{url:"zh/guide/layout/navbar/index.html",revision:"fdd878e69b9cb64eff82843d354c077f"},{url:"zh/guide/layout/page/index.html",revision:"c77c163abe1c67aceaa6b313f865eb94"},{url:"zh/guide/layout/sidebar/index.html",revision:"2827b5e29ec4936ef66e465edda785ef"},{url:"zh/index.html",revision:"e37362a9da409bcf7cc1149bc1e7b1ca"}],{})}));
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
