---
title: '使用Scoop（Win­dows 命令行安装工具）实现安全工具安装及自动更新'
description: ''
pubDate: 2024-04-10
author: 'OopsUnix'
tags: ['Tools']
---

Linux和MacOS都有包管理工具，如apt、brew，只需敲几个命令，就可以轻松实现软件的安装、更新、删除。但是在Windows安装、更新软件，是件相当繁琐和耗费时间的事情，效率太低，尤其是遇到不带自动更新的工具，每次都需要我们手动去下载。借助Scoop，可以像在Linux或macOS上使用apt或brew一样，轻松地下载和更新各种软件。

日常效果：

**安全工具一键更新：**使用`scoop update *`命令一键更新已安装的工具到最新版

![image-20240920183252906](https://cfs.whoopscs.com/md/image-20240920183252906.png)

**BurpSuite 插件更新：**对应插件重新勾选一下就是最新版

![image-20240920223557706](https://cfs.whoopscs.com/md/image-20240920223557706.png)

## 项目简介

Scoop 是是一个开源的Windows命令行包管理器，由JavaScript编写，并通过PowerShell脚本运行，类似于 De­bian 的 apt、ma­cOS 的 homebrew。虽然 Scoop 的作者在项目的 GitHub Wiki 中谈到， Scoop 只是一个安装工具（installer），不应该被称为包管理器（package manager）。但是对于使用者而言，它与我们一般认为的软件包管理工具其实很是相似。

官网：[https://scoop.sh](https://scoop.sh/)

## 环境要求

- 确保已安装 [Windows PowerShell 5.1](https://aka.ms/wmf5download)或者更高版本[PowerShell](https://aka.ms/powershell)
- 确保以允许`Powershell` 执行本地脚本

## 安装 Scoop

### 更改 powershell 脚本执行权限

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

在windows中默认不允许任何脚本运行，所以我们可以使用 **`Set-ExecutionPolicy`**来改变PowerShell运行环境，共有4种运行权限，如下所示：

- **Restricted**——默认的设置，不允许任何script运行；
- **AllSigned**——只能运行经过数字证书签名的script；
- **RemoteSigned**——运行本地的script不需要数字签名，但是运行从网络上下载的script就必须要有数字签名（使用脚本安装scoop这一等级就行）；
- **Unrestricted**——允许所有的脚本运行；

### 典型安装

在非管理员的PowerShell中运行此命令，以默认配置安装scoop

```powershell
irm get.scoop.sh | iex
```

如果你在访问GitHub时遇到网络问题，你可以使用代理，例如：

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://gh.llkk.cc/https://raw.githubusercontent.com/scoopinstaller/install/master/install.ps1')
```

或者

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://gitcode.com/gh_mirrors/inst/Install/blob/master/install.ps1')
```


> **Scoop** 将默认把所有用户安装的 App 和 **Scoop** 本身置于`C:\Users\<你的用户名>\scoop`，如果需要自定义安装位置，请选择高级安装。

### 高级安装

如果你想高级安装。你可以下载安装程序，然后用参数手动执行它。

```powershell
irm get.scoop.sh -outfile 'install.ps1'
```

如果你在访问GitHub时遇到网络问题，你可以使用代理，例如：

```powershell
curl -o scoop_install.ps1 https://gh.llkk.cc/https://raw.githubusercontent.com/scoopinstaller/install/master/install.ps1
```

> 查看安装程序的所有可配置参数。
>
> ```
> ./scoop_install.ps1 -?
> ```

例如，将 scoop 安装到一个**自定义目录（D:\Scoop）**，并在安装时使用代理

```powershell
./scoop_install.ps1 -ScoopDir 'D:\Scoop' -Proxy 'http://127.0.0.1:7890'
```

### 设置全局代理安装

在国内访问github总是不成功，而且scoop的大部分包都在github，那么配置scoop的下载代理，将会极大的提高效率。

```
# 设置全局代理
scoop config proxy 127.0.0.1:7890

# 取消代理：
scoop config proxy None
```



```
# 先设置 PowerShell 允许执行未签名脚本
set-executionpolicy remotesigned -s currentuser

# 下载 Scoop 安装脚本进行安装
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

由于 Scoop 的安装脚本托管在 GitHub 的仓库里，所以对于无法正常访问 GitHub 的用户来说，安装的时候可能需要加一层全局代理后再进行安装。

## 基础使用

- 查看命令列表：

```
scoop help
```

- 搜索软件

```
scoop search <app>
```

- 安装软件

```
scoop install <app>
```

- 查看软件详细信息

```
scoop info <app>
```

- 卸载软件

```
scoop uninstall <app>
```

- 一次性卸载多个软件

```
scoop uninstall <app> <app>
```

- 更新 scoop 本体和软件列表

```
scoop update
```

- 更新指定软件

```
scoop update <app>
```

- 更新所有已安装的软件

```
scoop update *
```

- 查看已安装的程序

```
scoop list
```

- 查看哪些程序可以升级

```
scoop status
```

**更多详情请官网安装说明书： [ScoopInstaller](https://github.com/ScoopInstaller)**

## 进阶使用

### bucket

所有的包管理器都会有相应的软件仓库 ，Scoop 管理存放软件包描述文件的地方叫做桶（Bucket），桶里面就是一个个 json 格式的软件包描述文件，类似Homebrew 的 Tap，关于桶的详细概念可以查看一下 Scoop 的 Wiki 页。

Scoop 默认软件仓库（main bucket）软件数量是有限的，但是可以添加第三方 bucket。

### 安装`scoop-security`

> **scoop-security** 是用于 Scoop 的软件仓库，本项目旨在提供用于Windows平台渗透测试和网络安全相关工具的快捷安装、管理和自动更新。

确保你已经有 Scoop 环境后，执行以下命令订阅本软件仓库：

```
//scoop bucket add <仓库别名> <仓库地址>

scoop bucket add sec https://github.com/whoopscs/scoop-security
```

- 查找软件

```
scoop search sec/nuclei
//或者
scoop search nuclei
```

- 安装本仓库中的软件：

```
scoop install sec/nuclei
//或者
scoop install nuclei
```

大多数情况下，是可以省略仓库别名 `sec/`，只需要执行类似 `scoop install nuclei` 的命令，除非安装的多个仓库都有此软件，则需要指定安装来源仓库。

#### 软件自动更新

本仓库已经添加 github ci 自动化，每隔几个小时会自动更新所有软件到最新版本

### 软件环境变量

Scoop 默认不会污染用户的 PATH 环境变量（除非软件包有修改环境变量的定义），而是使用垫片（shims）来进行统一管理调用执行文件。

------

> 更多信息请查看 [官方文档](https://github.com/ScoopInstaller/Scoop/wiki)。

