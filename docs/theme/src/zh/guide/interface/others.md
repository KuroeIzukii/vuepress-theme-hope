---
title: 其他界面功能
icon: others
category: interface
---

## 全屏按钮

默认启用，显示在导航栏的主题选项卡中。

如果你不需要这个功能，你可以在主题配置中将 `fullscreen` 设置为 `false`。

::: tip

如果当前浏览器不支持全屏，则全屏按钮会自动隐藏。

:::

```js {4}
// .vuepress/config.js
module.exports = {
  themeConfig: {
    fullscreen: false, // 默认启用，设置 false 将其关闭
  },
};
```

## 返回顶部按钮 <Badge text="支持页面配置" />

`vuepress-theme-hope` 添加了一个返回顶部控件，默认情况下将在下滑 300px 后显示。

你可以在 `themeConfig` 将 `backToTop` 设置为 `false` 来禁用它，或者是设置为一个数字以更改默认的 300px 触发时机。