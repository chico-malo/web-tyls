<!--
 * @Author: yangyao
 * @Date: 2019-09-16 09:09:20
 * @LastEditors  : yangyao
 * @LastEditTime : 2020-03-14 22:47:52
 * @Description: 文件描述
 -->
# pc-tyls-enterprise

#### 介绍

tyls 企业官网

#### 软件架构

软件架构说明

#### 安装教程

#### 使用说明

1. 启动

可以直接打开 HTML 进行开发，静态页面推荐使用 BrowserSync

```
npm install -g browser-sync
// --files 路径是相对于运行该命令的项目（目录）
browser-sync start --server --files "css/*.css"

// --files 路径是相对于运行该命令的项目（目录）
browser-sync start --server --files "css/*.css, *.html"
// 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。
browser-sync start --server --files "**/*.css, **/*.html"
```

#### 请求nginx地址
http://127.0.0.1/api/tyls-ghost

