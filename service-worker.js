if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.72de54d8.css",revision:"bbf870e58ab5657f2e6c97704ada27a9"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.703ea6d1.js",revision:"d7c49f53b44d98ef0832675aacf16010"},{url:"assets/js/129.25403176.js",revision:"ca552ce60b555fb0b13610e51ffa2d43"},{url:"assets/js/130.82222ec7.js",revision:"7f97f5ea9ee1646b4702faf74b260efb"},{url:"assets/js/131.d62c941e.js",revision:"18f9e88c02ac5a7441fd49d015c82941"},{url:"assets/js/app.fd57493a.js",revision:"402b175154d514ba4455cd93ddb16b52"},{url:"assets/js/layout-Blog.cdac8bab.js",revision:"efb45200d55e16c341311d4d68aac90d"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.49356828.js",revision:"4a2b58790b677676deedd35c47b2c788"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.d2561396.js",revision:"0768ec37c532bf24782cfa8baa39c310"},{url:"assets/js/layout-Layout.dcc4ff64.js",revision:"bd50c054baf5c632de6f81e48a1cdd04"},{url:"assets/js/layout-NotFound.e7342594.js",revision:"5ee4990f764df8276278bfdc759aaa59"},{url:"assets/js/layout-Slide.5d9d8612.js",revision:"bc7fd1ec47c31bf2d6a4b877e4f296fe"},{url:"assets/js/page-AboutVuePress--4a71114e.7890c6c1.js",revision:"becbfad7c34f79c1be65af913d5f221a"},{url:"assets/js/page-Basic--770cb96b.71418a70.js",revision:"d7892f12f9e5bde14c1f3e821b4d9d32"},{url:"assets/js/page-Bloghomepage--64265752.2a7c4be3.js",revision:"43913925144b4a1eaf63a17d4c9b41b2"},{url:"assets/js/page-Blogrelated--17c260a2.b05ecb35.js",revision:"1c55e07fd37c77eebee402d39e54d1a5"},{url:"assets/js/page-CommentFunction--5bb6671c.a392b017.js",revision:"6972c2ea62ca1f9d274efa490f800deb"},{url:"assets/js/page-Commonproblems--2b571e9b.975cdd58.js",revision:"cdf5b1247c6fb524d1cee3c46ac67fe3"},{url:"assets/js/page-Config--35a0a7d9.9280a370.js",revision:"05cb4ce114477f08fa49037a8f6a024c"},{url:"assets/js/page-Customalignment--4f21aa5c.e3ec86ab.js",revision:"4988f0652296b98d856fe3ac389c686e"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.ef1ab9c1.js",revision:"4bfc4570378c8d9fed02058e2b767989"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.bcacbda6.js",revision:"dac7c3dec75701778c8d412e87b00662"},{url:"assets/js/page-Demos--f328658e.999b5c18.js",revision:"de13e905c80d11c8940805248a6a201d"},{url:"assets/js/page-EmojiList--41bb29b9.6cffadbf.js",revision:"56af71ae986a9b87276249de8bd4ed81"},{url:"assets/js/page-Emoji列表--404e6737.6adc6a12.js",revision:"8f6b71d998e40d697540c0aad8b041c7"},{url:"assets/js/page-Encryptionfunction--181bdc9c.a89c2690.js",revision:"c65c9c8ec73ad93fef8223004c0e19bc"},{url:"assets/js/page-FileStructure--665a4f1c.a35f83d6.js",revision:"8d4f0bd03d5c4256cb093a68cad13726"},{url:"assets/js/page-Flowchart--7ce6d974.863f2b40.js",revision:"946994686e8dabccfec3c39943317e06"},{url:"assets/js/page-Footnote--0c733e52.6d182da1.js",revision:"267bb1e041201abdc42c8ef12cbe9922"},{url:"assets/js/page-HomePage--5834599c.e252aeea.js",revision:"6e8de71d6e1d28c12398ca24c4311173"},{url:"assets/js/page-InstallUsage--0ab466d2.69330c2e.js",revision:"7a8bcc6189e66c1d57a83b3ca219d6ba"},{url:"assets/js/page-Introduction--d4910962.1db0f14b.js",revision:"6f3ad9111f0f8d8ff5aa6503fc8862b3"},{url:"assets/js/page-Layout--12bd4f0e.9bee0413.js",revision:"8163c002823dbdc54f82f9e6f2812aab"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.c305906f.js",revision:"22e35300c851a406dd2ffd649e84187f"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.b2945a8c.js",revision:"608c4ef81aef0d4a2bf13c9f532f29e4"},{url:"assets/js/page-MarkdownIntroduction--270989ce.7c596b2a.js",revision:"7d9688bfb48c65f9cad9d8b975d19dc6"},{url:"assets/js/page-Markdown介绍--0e6891b6.09f84dad.js",revision:"dc359db31b2ae81ccfb0844e9212161b"},{url:"assets/js/page-Markdown增强--6162938f.e9f34cfc.js",revision:"8268614e03b7a464b0fda8e5df81345b"},{url:"assets/js/page-Markdown示例--5479fe88.44a57ef8.js",revision:"e3b5dcd4c84287da1e4e21fe0b9030fe"},{url:"assets/js/page-Markup--6b1f341c.f3303087.js",revision:"2ac6f2e629cf136e34757777b99dca75"},{url:"assets/js/page-Nature--749fb09c.fdb50b64.js",revision:"c9d957bf3dd6d151d08dd01a6475f919"},{url:"assets/js/page-NavBar--c7bf87dc.7cc50684.js",revision:"1be76ab2468da6cd66e6cd7e1ca631f0"},{url:"assets/js/page-NewComponent--1d138c72.bf2a730d.js",revision:"2d05444be110064dee0d6d06865afecb"},{url:"assets/js/page-Newfeature--5136c541.c5b28b1a.js",revision:"94a3f5d793c11208989367aef203867c"},{url:"assets/js/page-Object--16031ab2.71eae883.js",revision:"0e37dabf95296e165fc47933e27142ce"},{url:"assets/js/page-Page--af17b59c.be7925a6.js",revision:"d934fab10f2abb6aa6b8ef4b047827d0"},{url:"assets/js/page-PageConfiguration--0aacc152.cfc6924a.js",revision:"3f63c9b1f07fa3d2c3c275a542e10bb9"},{url:"assets/js/page-PageEnhance--03665ac8.2f84b381.js",revision:"723070b547b711eaf19d65cae9aeee25"},{url:"assets/js/page-Pageinformation--71efd5d2.ca57fe16.js",revision:"dc7c24723df889081cc01c8e3aa405ec"},{url:"assets/js/page-People--2182769c.fc845ef5.js",revision:"05a8e56f0bbe24619b95dc2cf9e83ef3"},{url:"assets/js/page-Place--951cdc00.696ea832.js",revision:"9deeff48c74f756d0ae981370bba9529"},{url:"assets/js/page-PluginDescription--137c6c07.33cd1b42.js",revision:"8d188151ddad7ff4a03994d12382bbeb"},{url:"assets/js/page-Plugins--adbf415c.676b0aa7.js",revision:"1a3db10970bbf94fe46199e8eba15697"},{url:"assets/js/page-Presentationsupport--8f8e54dc.13e444ed.js",revision:"68b0dd89b72a83fc4d0d9fed398d4441"},{url:"assets/js/page-PWA--01089712.ee3045c1.js",revision:"c16c853e9e11f471d2fcddaec6aa3ba2"},{url:"assets/js/page-PWA--243ef2b8.3da552fa.js",revision:"8ae5b4ba549930d5ffd0ed28da82e67e"},{url:"assets/js/page-SEOandSitemap--ccd3659c.5d755e6f.js",revision:"f758d9c88347fd018d2b227134820941"},{url:"assets/js/page-SEO和Sitemap--2853f164.e5cdab25.js",revision:"215be9e47792011fa59528e5d2409bd9"},{url:"assets/js/page-Sidebar--2fa1ea2c.18ff2dff.js",revision:"0cf83b38f28ea62f3cda4ef8b4683b23"},{url:"assets/js/page-Slide--269ae052.bb57ec37.js",revision:"fd2ef00284ed62cd8d59fbad5befa033"},{url:"assets/js/page-stylusconfiguration--6796cdf2.ac58863d.js",revision:"36ce90f03c510998ab9ab35cae0dd274"},{url:"assets/js/page-stylus配置--0ce19a82.97536d41.js",revision:"3cbf945dba997af24b5726fa7925563e"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.1eaf3940.js",revision:"e0676d1432c8ba8e7adccd00082d3bd2"},{url:"assets/js/page-Symbol--a9259c5c.b9aecdbe.js",revision:"f0ff37cafbe4c6c8e902bebcfc2f54c8"},{url:"assets/js/page-TexSupport--64cb5e50.87f937d9.js",revision:"db93573254678ca44a7b21cbf059104b"},{url:"assets/js/page-Tex语法支持--1e02b152.809799a3.js",revision:"b6bfa87a8244b97a78b3ff224eb12316"},{url:"assets/js/page-ThemeConfig--1120a0ce.e829fe39.js",revision:"a948167021cd7925eac7ad1b07e22575"},{url:"assets/js/page-ThemeConfig--1726e14e.857d051b.js",revision:"81d0474a17c9b22acb090a647276ca12"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.eb28b71c.js",revision:"ca0a64bdfb9c726ca838b19de82a3afa"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.9cd7f5e8.js",revision:"217f3069d845cf33fc06f8573733b9da"},{url:"assets/js/page-ThemePluginConfig--958196dc.b96f94b9.js",revision:"b6534b0c87aecef0d2986adea85dbf3f"},{url:"assets/js/page-TSsupport--09728ac8.1a054f2f.js",revision:"e57fd3fdfdced531833f0ccb3fee5da6"},{url:"assets/js/page-TS支持--4625f812.5340a580.js",revision:"9f3b0738097beb8ae307f7e78be5d7c4"},{url:"assets/js/page-VuePress--b7060eee.563cfa73.js",revision:"caa944719622fd032d8e4eee7cdcda08"},{url:"assets/js/page-vuepress-plugin-container--31498112.796959ec.js",revision:"7676f3f8f9a3a24baf5b0051e029a43a"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.dfe0782f.js",revision:"753d31f83cfc394706271a913b292941"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.cb53e3a2.js",revision:"30f234fb1c040ec0a892ff85402fa07e"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.e3360d33.js",revision:"88858a7dfbb0fe6cf3f2fdac4cc45e72"},{url:"assets/js/page-vuepress-theme-hope--354da24e.fcf33273.js",revision:"d96d3115a80f159152a5567427932c78"},{url:"assets/js/page-vuepress-theme-hope--776d8369.fbd605a6.js",revision:"c5055072c469533d145642ed40bf28d3"},{url:"assets/js/page-VuePressCases--082972f2.947e85b0.js",revision:"e0eb696809869e2cd52e9d027d2c2716"},{url:"assets/js/page-VuePresscommands--9f3f316c.f648b3f0.js",revision:"4a2baaadb8366bea234cfdd0154f9bdd"},{url:"assets/js/page-VuePress案例--531d5f3e.615c1ccf.js",revision:"07adcbc80ac3fdb8790eb18f1b0b5bbe"},{url:"assets/js/page-上下角标--8efed9dc.574099cc.js",revision:"1cf3f97d25713c6a296acd166dc6f7ba"},{url:"assets/js/page-主题功能配置--5bb71452.4ec1ec73.js",revision:"2709e4ee563cd6761e42b456deb38be2"},{url:"assets/js/page-主题布局配置--7db7eff2.f87ec7e0.js",revision:"299aec8c1fd33f9326081e8337375213"},{url:"assets/js/page-主题插件配置--1b0c3e98.4aba42f7.js",revision:"42bb2aa813c511ab3a5be05733bb7742"},{url:"assets/js/page-主题配置--21dc088d.7af201cf.js",revision:"fd469f3f196ee0f5d993a5135f5ff9fa"},{url:"assets/js/page-主题配置--2c572572.82ba8e08.js",revision:"b0e0beaf618cbf49dccdb8a2bebe5c0d"},{url:"assets/js/page-人物--b4fc27dc.5aee8d5b.js",revision:"9d08fb60b202b2608c44599592c0a086"},{url:"assets/js/page-介绍--2e99d139.c0031d9c.js",revision:"5085214ab0a91e278bcb65dae5d4a61e"},{url:"assets/js/page-侧边栏--43054cb2.ab7f78d9.js",revision:"f3e213f743b4b82e57f7b84bd617a5f8"},{url:"assets/js/page-加密功能--2361b7e4.d33fd8ff.js",revision:"941b92974c2af0f222c997f56cc21b64"},{url:"assets/js/page-博客相关--6a3fd4f2.963b84d6.js",revision:"09e1b4f02a47ea60e8faa9bdc3e49d40"},{url:"assets/js/page-博客首页--1eb2b298.ac630d6b.js",revision:"dc696ea0497d7382b344f99172c615dc"},{url:"assets/js/page-地点--6710785c.28ece905.js",revision:"a0ac9ee7065c203e079a494a803624cc"},{url:"assets/js/page-基础知识--4d466a79.0281665a.js",revision:"8ed4995db0b12e56409194b61575ef6e"},{url:"assets/js/page-安装使用--76e0e5b0.38fdb894.js",revision:"14ab2f2be48f527bb1373c641a3d1433"},{url:"assets/js/page-对象--e150da9c.4fde40d9.js",revision:"3158e46851d1aa2b5c532dfa8b406d7f"},{url:"assets/js/page-导航栏--183844fc.ec3108b0.js",revision:"055cd7726c7b4a2e4a7a490e673e015b"},{url:"assets/js/page-布局--fa93e36a.44fe8b1f.js",revision:"33de3f07fefddaf45695c44597f45091"},{url:"assets/js/page-常见问题--10ab790e.2e9d9c55.js",revision:"1da309f3550d58626d567c19ed9c05c7"},{url:"assets/js/page-幻灯片--818cb750.682a6c03.js",revision:"434fa7263acae82d460750134c127cb2"},{url:"assets/js/page-幻灯片支持--5808e664.17bc6d9c.js",revision:"cccac07da3f2705533ed547eb8d3ca53"},{url:"assets/js/page-插件--32355f10.54b6f01f.js",revision:"2dd8a97996390889d4cac0280c5b3e3d"},{url:"assets/js/page-插件说明--cbca1c8e.cf8475f0.js",revision:"e5a95e3018ffa8832fb02d8a48720971"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.f7cc7e84.js",revision:"089a183a687b288cedaa62dc4996fa99"},{url:"assets/js/page-新增特性--30c6c799.241b3c51.js",revision:"c9c68fa7c6023cdaf20e9d551405102a"},{url:"assets/js/page-新增组件--0979095e.755557c5.js",revision:"6c05b4e2c319772f732ac024ceb58fe3"},{url:"assets/js/page-标记--0ac52704.ba31f555.js",revision:"3b1ba776a2d941b7fe08eb02156a997f"},{url:"assets/js/page-流程图支持--582eff1c.4cae3106.js",revision:"5e054f2ce3cf401957fdf763260e03f2"},{url:"assets/js/page-深色模式与主题色--01662674.3f45c5c7.js",revision:"d953c84f87bde14f62ef67fa838f64b6"},{url:"assets/js/page-符号--2db8fb80.e6629794.js",revision:"4612f7d9d3aee7dfc75b6349087db80c"},{url:"assets/js/page-脚注--17d88350.73840121.js",revision:"3959f061495cedfbab2ac387e54d5d8f"},{url:"assets/js/page-自定义对齐--048d31dc.fcd211df.js",revision:"8311cf6574e2d51caef6756af5bce825"},{url:"assets/js/page-自然--7ec33be2.255374d7.js",revision:"9374095b1537c08dd9a2373532cbec89"},{url:"assets/js/page-评论功能--350aff9a.70459b61.js",revision:"73e850fcd01eed3519ba277a805b476f"},{url:"assets/js/page-配置--d315f8fe.e5071388.js",revision:"05b25677952ffa427ba722849c298df8"},{url:"assets/js/page-页面--78423bfe.63b59bb5.js",revision:"34e24977f687909e3032027fbadf7ab3"},{url:"assets/js/page-页面信息--455b9800.70d41015.js",revision:"e18d37f1c611f415cb28686713ff4503"},{url:"assets/js/page-页面增强--2e4cf75c.2e0ef81b.js",revision:"acc84037cfc051e7169b0984d207af47"},{url:"assets/js/page-页面配置--02399408.1f41c6a9.js",revision:"f98fbd82f223f822a60486840c7c4b93"},{url:"assets/js/page-项目指令--2f3d7c1c.97fdb2bf.js",revision:"c0dc10b20c2f9a222d490013097262ee"},{url:"assets/js/page-项目案例--1f3d6482.6cb07e32.js",revision:"2f7be9bf9c9974b154e000cb9632482f"},{url:"assets/js/page-首页--79a22944.b97ae34c.js",revision:"84a6c0079312fcbcb0d1aa8e79b9c13f"},{url:"assets/js/page-默认主题配置--0d5b7f32.ff24a886.js",revision:"cf5fbd20769fa7516a15ba3738a0aa49"},{url:"assets/js/vendors~docsearch.c7264b7c.js",revision:"06c25cce1a4da7e7857c753880f2df72"},{url:"assets/js/vendors~flowchart.8196726f.js",revision:"7057d8eca4589aba30c72f1234746eca"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fd67115f.js",revision:"d3aca22227990bdf3b38c124953fb174"},{url:"assets/js/vendors~photo-swipe.e2e18d14.js",revision:"4fe02599bf0bf8c39a3ecf58664e4125"},{url:"assets/js/vendors~valine.8fef9269.js",revision:"516abd099f1c45ca3bde6acd73920c74"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"b62a75492fb7568df64844731908d6c1"},{url:"article/index.html",revision:"9b576ec23575a839d1c04c5f6c2251c8"},{url:"basic/index.html",revision:"6e01807a9b1d1c042f08751602f5278e"},{url:"basic/markdown/demo/index.html",revision:"3ddfce564f970ca814c0216f8f1624fc"},{url:"basic/markdown/emoji/index.html",revision:"72d7326690e799d873dbfb7c9f298481"},{url:"basic/markdown/emoji/nature/index.html",revision:"9d77e1f5b3735337f736d096d8fff035"},{url:"basic/markdown/emoji/object/index.html",revision:"c36b52a53a3a20df5f61e069a6e6436f"},{url:"basic/markdown/emoji/people/index.html",revision:"a264807f6b6941921edefb3cd91433b2"},{url:"basic/markdown/emoji/place/index.html",revision:"103761685095efb01911f5fcf22175a8"},{url:"basic/markdown/emoji/symbol/index.html",revision:"5e20c4fdefef68b3e56f9f5906b6f492"},{url:"basic/markdown/index.html",revision:"f133d676c909159af7d0f0d3da92dd0d"},{url:"basic/vuepress/case/index.html",revision:"651e63de3ff6f8f727f057d2c9024587"},{url:"basic/vuepress/command/index.html",revision:"2ade85dcb551ffb782235b40974f72c5"},{url:"basic/vuepress/file/index.html",revision:"df8d60dd5859306264113f604d8f8da8"},{url:"basic/vuepress/index.html",revision:"20328759d483f12f4c870eb0954c4bc5"},{url:"basic/vuepress/plugin/index.html",revision:"823aeb4a83cad252fc8d60bf5192c9df"},{url:"basic/vuepress/theme/index.html",revision:"165653dd05d22a27917036ca220f95ef"},{url:"category/basic/index.html",revision:"3e668c85a0aa7917b2fa2bb684bc388a"},{url:"category/basic/page/2/index.html",revision:"4e6d454d6afec75b9a5326b1772e643b"},{url:"category/basic/page/3/index.html",revision:"ce90312c1265f8b4f67897de2f525113"},{url:"category/config/index.html",revision:"89ce7ca4769c26c7be824e8c9e21f733"},{url:"category/config/page/2/index.html",revision:"b0bf232d238779253799d90bd68f8b11"},{url:"category/config/page/3/index.html",revision:"62e83272ad9b72f8e872aa6d7f81ae3d"},{url:"category/demo/index.html",revision:"d1c406f7500caec416a133fa33ebd44a"},{url:"category/FAQ/index.html",revision:"d13b5fa681cbb8cfbb0df8a89e615b00"},{url:"category/feature/index.html",revision:"18ea8367dd90b531d8c78c8373deb036"},{url:"category/feature/page/2/index.html",revision:"96a97ca71b742543ed4cbc317044b8cb"},{url:"category/feature/page/3/index.html",revision:"f5e86782fee54b4358c549dd1f551a27"},{url:"category/index.html",revision:"6203491c23d1b2e172772f5b1f5fa71e"},{url:"category/instruction/index.html",revision:"83692592671012119b4f5fc5290a854f"},{url:"category/layout/index.html",revision:"a5931c76c76c043179a442fce3d58bcb"},{url:"category/layout/page/2/index.html",revision:"85c563b73d11760f0639cf0c6ee76a73"},{url:"category/markdown/index.html",revision:"c0b5d696a79e8adfcdf3a08bdfadc6ad"},{url:"config/index.html",revision:"fc5eea76fd880c23b9ace8813865590c"},{url:"config/page/index.html",revision:"b7e3119dcfd0cd98c42fc32806c96b82"},{url:"config/plugin/container/index.html",revision:"d1d45cfd8962aa2a37e572e494c2fe90"},{url:"config/plugin/copyright/index.html",revision:"414f6deeb3e73a33abca14872f658d30"},{url:"config/plugin/index.html",revision:"31f6b40ed4a9241cc3e221ca8282b648"},{url:"config/stylus/index.html",revision:"329222e60aa0c487ee36ed59f30d48fc"},{url:"config/theme/apperance/index.html",revision:"d746ac4e83255dfaaa546d69950e6339"},{url:"config/theme/default/index.html",revision:"a58cece2768c00beaee45430bc523782"},{url:"config/theme/feature/index.html",revision:"c726b7955a7c645aee3b5de7ed8cbbaf"},{url:"config/theme/index.html",revision:"b587b6d9f55815eed406609311535cf9"},{url:"config/theme/plugin/index.html",revision:"f450ae666b266275eaddd63dbcd4d202"},{url:"demo/index.html",revision:"411fb52ebac65fa3a6d4e82386f6975f"},{url:"encrypt/index.html",revision:"80512031b8d21f3efb5c4aa1f5759aae"},{url:"FAQ/index.html",revision:"ac4e0de92f068d2728fb9910fa37ca53"},{url:"guide/feature/blog/index.html",revision:"b47b20e9c0aa61c77732198d3c2254d7"},{url:"guide/feature/comment/index.html",revision:"0c8cb9c4b86bcc7c72062e9a43d94ac7"},{url:"guide/feature/component/index.html",revision:"65c9bfd26bdb03fe85033341745d1067"},{url:"guide/feature/encrypt/index.html",revision:"81d35aa9906d771763a2e07d1f508d4a"},{url:"guide/feature/index.html",revision:"50b4c234b1d47e92436e1f43654a737b"},{url:"guide/feature/markdown/align/index.html",revision:"c10d33fa9b3979d023d57a15df66f098"},{url:"guide/feature/markdown/flowchart/index.html",revision:"d280a541dd2f7fc771f7d74919eb302a"},{url:"guide/feature/markdown/footnote/index.html",revision:"543010e94c66162a567c37c6b7957a33"},{url:"guide/feature/markdown/index.html",revision:"d94de198709b70e22f054eb33fcec0b9"},{url:"guide/feature/markdown/mark/index.html",revision:"103f0e45ec17220b4af99f7439575cb1"},{url:"guide/feature/markdown/presentation/index.html",revision:"bb744cad2ec25c5f6f0e4c90e4298e31"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"e51ac21193be3a4ecf4238a6d1b80c74"},{url:"guide/feature/markdown/tex/index.html",revision:"ab4b54b58f21fb03f25f5d5c315cbaa0"},{url:"guide/feature/page-info/index.html",revision:"554e881f519f806d382145ba6912f9df"},{url:"guide/feature/page/index.html",revision:"e47941874588e84ca8cf3583a2729031"},{url:"guide/feature/pwa/index.html",revision:"f3bf336861fba65af43c19e778d2305b"},{url:"guide/feature/seo-sitemap/index.html",revision:"9785c2fafa73751cbbf195c736d43016"},{url:"guide/feature/theme/index.html",revision:"86188e8c855c0dbe7f2ba8d08081bd94"},{url:"guide/feature/typescript/index.html",revision:"50d6f41d9dd780e9a4d7a184c40b5410"},{url:"guide/index.html",revision:"4b634e61bc8e1f8693a7ee3b459370a1"},{url:"guide/install/index.html",revision:"409646b7a81bfc01b6dae5d7c291eabb"},{url:"guide/layout/blog/index.html",revision:"babd0ccef41bec56fc2ccf1e1c447306"},{url:"guide/layout/home/index.html",revision:"c4261dcbf06931402ec0fd9576376a76"},{url:"guide/layout/index.html",revision:"c4cb0182b8ab2b31be32dbd5ca3cc44c"},{url:"guide/layout/navbar/index.html",revision:"090138fe6094bb4289d2bee40b214e66"},{url:"guide/layout/page/index.html",revision:"25cc3edf21ba3bd32af819148eaa923c"},{url:"guide/layout/sidebar/index.html",revision:"46a3c757cadf5cc62d0440286b94ec0b"},{url:"guide/layout/slides/index.html",revision:"c154ca7f3c29027ede5a1fcd5bf2e879"},{url:"index.html",revision:"0afccfafeb7d18486228f5fa7b109889"},{url:"slide/index.html",revision:"034d90b23770fa62e9cd227529a49670"},{url:"tag/blog/index.html",revision:"8e08cca12802d3a087c716f7684cb202"},{url:"tag/comment/index.html",revision:"7682f5f145ce1898ecd068b44ebfbb63"},{url:"tag/components/index.html",revision:"24c70ca83168dd50c530e402c0b30680"},{url:"tag/config/index.html",revision:"7b353a817fb1599cf7236e21207faaa5"},{url:"tag/config/page/2/index.html",revision:"f19720b521b5e4512236c16a9cac33bc"},{url:"tag/config/page/3/index.html",revision:"494e5b54ad62f5a5d7d9b84750d3a444"},{url:"tag/emoji/index.html",revision:"8ba497265982c2af25ef208c674f13fb"},{url:"tag/emoji/page/2/index.html",revision:"ec0f3e19e36b1dac097841ffce66a96e"},{url:"tag/encrypt/index.html",revision:"90071754d6e2bb7499cabe7313d5d8ea"},{url:"tag/feature/index.html",revision:"fe3f59aaedc652e7fb4afdba0a16ca03"},{url:"tag/feature/page/2/index.html",revision:"33ca40a264c3ae40b0c232c6daf106a1"},{url:"tag/feature/page/3/index.html",revision:"138b7c77b491a528eb13e6cba5162a22"},{url:"tag/feature/page/4/index.html",revision:"9e6944d5719a5b1ce200bce517e50615"},{url:"tag/frontmatter/index.html",revision:"7963a46789e5322201e05e5b943a2979"},{url:"tag/home/index.html",revision:"f453be233415c86d2729065a69b9ddab"},{url:"tag/index.html",revision:"c7c889636b6fc5fb5fa67868e7839282"},{url:"tag/intro/index.html",revision:"5ef6fe6d818bc7fc187dba47b7e96566"},{url:"tag/layout/index.html",revision:"3594f7c2b0808b81514f400293918c8b"},{url:"tag/layout/page/2/index.html",revision:"74c03e8a3e66bf465ba9c428f4531eb7"},{url:"tag/markdown/index.html",revision:"49bb1b02d2207bd52595dfc278971aae"},{url:"tag/markdown/page/2/index.html",revision:"02c93088471733f23a3278899c66b9b9"},{url:"tag/markdown/page/3/index.html",revision:"79d5baf4f7a071e9a194593486800ed7"},{url:"tag/navbar/index.html",revision:"a3824274ed12f6cc5bedc1caa08bcc8c"},{url:"tag/page-info/index.html",revision:"76abcf019ed8ac88d01f28316d8c3ccb"},{url:"tag/page/index.html",revision:"d2335851fab49779196fb36194aa4d4c"},{url:"tag/plugin/index.html",revision:"f15dc1aabb63ae09c34ebb13b3865bb2"},{url:"tag/pwa/index.html",revision:"4e7829318834f06d4efee9c87f0d11d5"},{url:"tag/seo/index.html",revision:"e27010b3c51ddf37b3358c2829da4a52"},{url:"tag/sidebar/index.html",revision:"508dae29b6b8d10cea6dea496d4ae176"},{url:"tag/sitemap/index.html",revision:"cffd2e8cc7d04a2699bf5beb50234e24"},{url:"tag/slides/index.html",revision:"bd1dadd8239b334b58e4a12ee70774f9"},{url:"tag/style/index.html",revision:"f230fe71ec32d075901a5a1e473bce49"},{url:"tag/themeConfig/index.html",revision:"2d6313bc3e7ab6c25caa7f7a967e0b77"},{url:"tag/typescript/index.html",revision:"bd5cf201d1eb78b965bd920df93f1aca"},{url:"tag/vuepress/index.html",revision:"a879bf76b1d7402edb16d29b2875e713"},{url:"tag/vuepress/page/2/index.html",revision:"216fe8a919f1f467d6be8e958eddc7a2"},{url:"timeline/index.html",revision:"2dfeedbf59f83dc4a21bee4c357f0754"},{url:"zh/basic/index.html",revision:"c63d9ddfd523042339cce3659c69e3e6"},{url:"zh/basic/markdown/demo/index.html",revision:"b35eec3992c988ccb1c804e86b7611f0"},{url:"zh/basic/markdown/emoji/index.html",revision:"b8a0aec5fa4cdb5c50d1f8e3f04477a1"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"105e30e5bc552d56731b4c82f1b23b50"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"49a29a246cd386ae3a6277a19e098f9c"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"3041ada1b6d9ab45a422eabc5e3dcc85"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"71be723be75be15fd06207a182e6d3b1"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"a48d7529d3dd4558a02b4287be5a73d0"},{url:"zh/basic/markdown/index.html",revision:"a066275d516e5ec3f0f4bd1a48fabef0"},{url:"zh/basic/vuepress/case/index.html",revision:"0d2c6d80cc6751c273228fd67d8d03f5"},{url:"zh/basic/vuepress/command/index.html",revision:"1bd8c2a9aba510109f2cafa8d5cab7da"},{url:"zh/basic/vuepress/file/index.html",revision:"cc4457822603be4afa351931dab22e81"},{url:"zh/basic/vuepress/index.html",revision:"d4bc45d4c62951f390e7cee198a629ca"},{url:"zh/basic/vuepress/plugin/index.html",revision:"df939c1feed879a6d6ce463504edd846"},{url:"zh/basic/vuepress/theme/index.html",revision:"412c3643a7c73f1ab616acc6deb9e211"},{url:"zh/config/index.html",revision:"6965c820eb91153cdb25ed37ce8fab64"},{url:"zh/config/page/index.html",revision:"730ac444dfc7d58c632bc2281c91ac7d"},{url:"zh/config/plugin/container/index.html",revision:"db262e431b9c020c926adae6f94cc84c"},{url:"zh/config/plugin/copyright/index.html",revision:"ca9102f34367109cfd0c0bba1c37f540"},{url:"zh/config/plugin/index.html",revision:"40428a7c909180a5250ae5183b9cc933"},{url:"zh/config/stylus/index.html",revision:"507833954f6ea34a5459a87c8c3a4353"},{url:"zh/config/theme/apperance/index.html",revision:"43155c0d76e22820589105e5a96c07a3"},{url:"zh/config/theme/default/index.html",revision:"296697ec0134867737d2144f000cec08"},{url:"zh/config/theme/feature/index.html",revision:"d5df5acfbec5bc1459f68e3d71a5cf82"},{url:"zh/config/theme/index.html",revision:"a8203b8993a318ac10c984e27a6b5b14"},{url:"zh/config/theme/plugin/index.html",revision:"4e583ef8c76ba771e328663a2b9da8b9"},{url:"zh/demo/index.html",revision:"b22fbd08beb22c5f903bc759ccc75e43"},{url:"zh/FAQ/index.html",revision:"14d06e802d2b51c3b8d99a85d8d490f2"},{url:"zh/guide/feature/blog/index.html",revision:"516bcc006173acfe89208c0622dce916"},{url:"zh/guide/feature/comment/index.html",revision:"00ea161f700f743266ba9f5cebb5e91b"},{url:"zh/guide/feature/component/index.html",revision:"652c5036d93283d354334dd55d745baa"},{url:"zh/guide/feature/encrypt/index.html",revision:"66f9f2eb483fd7bf2f5948c40b0d337a"},{url:"zh/guide/feature/index.html",revision:"7912cc2ca70f623a1c995a600e2e08a9"},{url:"zh/guide/feature/markdown/align/index.html",revision:"a3241c370b7bd379037fd88074678610"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"83fae8b03783d2115bef14061f75aa64"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"95040558ad64c7fc9e54b90b0432a039"},{url:"zh/guide/feature/markdown/index.html",revision:"d205a2ce94d641d31ef30314207405fc"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"19941b99bf3e1d999f6af94965f54ac0"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"04ebfcf4b6209e31dfa93a7f714bfb09"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"0cdc8e7562b54df5b6ba4496d7c17f74"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"209cb68e04d5b44450af4ec9b3f04902"},{url:"zh/guide/feature/page-info/index.html",revision:"bc347c52636a078998274f400693a0b7"},{url:"zh/guide/feature/page/index.html",revision:"c88420e3d81d293935a1bed95b57553c"},{url:"zh/guide/feature/pwa/index.html",revision:"4f38cbe4cf2c323cf83c275205309a9f"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"9f9f14177d38ed9f3b9aae51f073512f"},{url:"zh/guide/feature/theme/index.html",revision:"3605327cbbdc976d28a37c3609c5acc1"},{url:"zh/guide/feature/typescript/index.html",revision:"3400042b06f3d7b84c73ca6f43ee309d"},{url:"zh/guide/index.html",revision:"2ce0c22289a1187f364e1be8411cad10"},{url:"zh/guide/install/index.html",revision:"9a694c1a16fdcb1965fb7f4458e6a3bf"},{url:"zh/guide/layout/blog/index.html",revision:"0a8b07ae5d88e388e5c00b63725df18e"},{url:"zh/guide/layout/home/index.html",revision:"886bf2add3419e9ab06736e179abac37"},{url:"zh/guide/layout/index.html",revision:"c472aa273ef2b1fdc389378fd3b9cc08"},{url:"zh/guide/layout/navbar/index.html",revision:"a34d1046cbbab2ef4a9fde0b8305a582"},{url:"zh/guide/layout/page/index.html",revision:"95dbff2172d836226f60e953b1b4c81a"},{url:"zh/guide/layout/sidebar/index.html",revision:"a032ec3edb046f17d765a2eccc199e98"},{url:"zh/guide/layout/slides/index.html",revision:"3c075520d744dee8b81fbfbfc0b6db66"},{url:"zh/index.html",revision:"36cc2c95c2a8b46870f5ef0fb4f3c39a"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/slides.859646fb.png",revision:"859646fbfd7beb9a132d8bd66ca9f807"},{url:"assets/img/slides.eb1e5fe7.png",revision:"eb1e5fe780594ad95ce1a96c2eaac0e8"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
