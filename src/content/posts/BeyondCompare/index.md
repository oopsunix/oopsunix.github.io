---
title: BeyondCompare 忽略行尾差异（DOSUNIX）
pubDate: 2025-06-15
description: uv 是一个由 Astral 公司用 Rust 开发的高性能 Python 包管理工具，旨在提供比传统 pip 更快的包安装和依赖管理体验。
author: 'OopsUnix'
tags: [Tools, Python]
---

# BeyondCompare 忽略行尾差异（DOSUNIX）


## 背景

在使用 BeyondCompare 4 比较包含数千个文件的两个目录时，经常会出现显示两个基本存在差异，但当打开文件时，又发现两个文件基本相同，唯一不同之处在于一个显示为 "PC"，另一个显示为 "UNIX"

打开文件并关闭后，Beyond Compare 又会将这些文件视为相等。

当目录下文件较多时，我们显然没有办法一一打开这些文件，那么该怎么让 Beyond Compare 忽略这种差异呢？



问题在于：

Beyond Compare 的文件夹比较，默认使用文件大小和时间戳进行比较。 一边是Windows的CRLF，另一边是Unix/Linux的LF，尽管其他文本内容相同，但由于换行符的不同导致大小差异。当双击文件时，会比较文本内容并发现它们相等。


解决办法：

1. 单击“规则”工具栏按钮。 
2. 转到“比较”选项卡。 
3. 勾选“比较内容”。 
4. 选择“基于规则的比较”。 
5. 选择左下角“还要更新会话默认”
6. 点击“确定”。 
7. 在文件夹比较中，确保打开“视图 > 忽略不重要的差异”。





参考链接：

https://dev59.com/superuser/bnI-5IYBdhLWcg3wu7BU
