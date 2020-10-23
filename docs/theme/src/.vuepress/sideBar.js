module.exports = {
  zh: {
    "/zh/guide/": [
      {
        title: "快速上手",
        icon: "creativefill",
        collapsable: false,
        children: ["", "install"],
      },
      {
        title: "新增功能",
        icon: "discoverfill",
        prefix: "feature/",
        collapsable: false,
        children: [
          "",
          "theme",
          "page-info",
          "comment",
          "page",
          "blog",
          "encrypt",
          {
            title: "Markdown 增强",
            icon: "markdown",
            prefix: "markdown/",
            collapsable: false,
            children: [
              "",
              "align",
              "sup-sub",
              "footnote",
              "mark",
              "tex",
              "flowchart",
              "presentation",
            ],
          },
          "pwa",
          "component",
          "seo-sitemap",
          "typescript",
        ],
      },
      {
        title: "布局",
        icon: "layout",
        prefix: "layout/",
        collapsable: false,
        children: ["", "navbar", "sidebar", "page", "home", "blog"],
      },
    ],

    "/zh/config/": [
      {
        title: "主题配置",
        icon: "configuration",
        prefix: "theme/",
        collapsable: false,
        children: ["", "default", "feature", "plugin", "apperance"],
      },
      "page",
      "stylus",
      {
        title: "插件配置",
        icon: "extension",
        prefix: "plugin/",
        collapsable: false,
        children: ["", "container", "copyright"],
      },
    ],

    "/zh/basic/": [
      {
        title: "Markdown",
        prefix: "markdown/",
        icon: "markdown",
        collapsable: false,
        children: [
          "",
          "demo",
          {
            title: "Emoji",
            icon: "emoji",
            path: "emoji/",
            prefix: "emoji/",
            collapsable: false,
            children: ["people", "nature", "object", "place", "symbol"],
          },
        ],
      },
      {
        title: "VuePress",
        prefix: "vuepress/",
        icon: "vue",
        collapsable: false,
        children: ["", "file", "plugin", "theme", "command", "case"],
      },
    ],

    "/zh/": ["", "guide/", "config/", "basic/", "FAQ/", "demo/"],
  },
  en: {
    "/guide/": [
      {
        title: "Get Started",
        icon: "creativefill",
        collapsable: false,
        children: ["", "install"],
      },
      {
        title: "New Features",
        icon: "discoverfill",
        prefix: "feature/",
        collapsable: false,
        children: [
          "",
          "theme",
          "page-info",
          "comment",
          "page",
          "blog",
          "encrypt",
          {
            title: "Markdown enhance",
            icon: "markdown",
            prefix: "markdown/",
            collapsable: false,
            children: [
              "",
              "align",
              "sup-sub",
              "footnote",
              "mark",
              "tex",
              "flowchart",
              "presentation",
            ],
          },
          "pwa",
          "component",
          "seo-sitemap",
          "typescript",
        ],
      },
      {
        title: "Outlook",
        icon: "layout",
        prefix: "layout/",
        collapsable: false,
        children: ["", "navbar", "sidebar", "page", "home", "blog"],
      },
    ],

    "/config/": [
      {
        title: "ThemeConfig",
        icon: "configuration",
        prefix: "theme/",
        collapsable: false,
        children: ["", "default", "feature", "plugin", "apperance"],
      },
      "page",
      "stylus",
      {
        title: "Plugins",
        icon: "extension",
        prefix: "plugin/",
        collapsable: false,
        children: ["", "container", "copyright"],
      },
    ],

    "/basic/": [
      {
        title: "Markdown",
        icon: "markdown",
        prefix: "markdown/",
        collapsable: false,
        children: [
          "",
          "demo",
          {
            title: "Emoji",
            icon: "emoji",
            path: "emoji/",
            prefix: "emoji/",
            collapsable: false,
            children: ["people", "nature", "object", "place", "symbol"],
          },
        ],
      },
      {
        title: "VuePress",
        icon: "vue",
        prefix: "vuepress/",
        collapsable: false,
        children: ["", "file", "plugin", "theme", "command", "case"],
      },
    ],

    "/": ["", "guide/", "config/", "basic/", "FAQ/", "demo/"],
  },
};
