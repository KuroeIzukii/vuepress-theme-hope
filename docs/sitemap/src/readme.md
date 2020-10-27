---
home: true
title: "@mr-hope/vuepress-plugin-sitemap"
icon: homefill
heroImage: /logo.svg
heroText: "@mr-hope/vuepress-plugin-sitemap"
tagline: Automatically generate a sitemap for your website when you build it.
footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

## How to use

### Install

```bash
npm i -D @mr-hope/vuepress-plugin-sitemap
```

Or

```bash
yarn add -D @mr-hope/vuepress-plugin-sitemap
```

### Usage

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "@mr-hope/sitemap",
      {
        // your options
      },
    ],
  ],
};
```

## Plugin options

### hostname

- Type: `string`
- Required: Yes

The domain name where the current site is deployed, please at least pass it into the plugin option, or fill in `themeConfig.hostname`, otherwise the plugin will not work.

### urls

- Type: `string[]`
- Required: No

URLs to be included

### exclude

- Type: `string[]`
- Required: No

Pages not included

### outFile

- Type: `string`
- Default value: `"sitemap.xml"`

The output filename

### changefreq

- Type: `"always" | "hourly" | "daily" | "weekly" |"monthly" | "yearly" | "never"`
- Default value: `"daily"`

Page default update frequency

### dateFormatter

- Type: `($page: PageComputed) => string`
- Required: No

Time formatter. The timestamp will be automatically generated by default. If you find time zone issues, please set this option.