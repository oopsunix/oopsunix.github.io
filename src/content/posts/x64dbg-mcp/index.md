---
title: 'x64dbg MCP 配置'
description: ''
pubDate: 2025-12-18
author: 'OopsUnix'
tags: ['x64dbg', 'mcp']
---



# x64dbg MCP 配置



## Wasdubya/x64dbgmcp





## dariushoule/x64dbg-automate

环境准备

- Python 3.11+ （该库用到了`StrEnum` 是 **Python 3.11+** 才新增的枚举类型）



1. 下载插件

   从 https://github.com/dariushoule/x64dbg-automate/releases 下载最新插件版本，分别将其放入x64dbg安装目录下的 `x32` 和 `x64` 文件夹中：

   | Install directory 安装目录 | Bitness 位数 |
   | -------------------------- | ------------ |
   | x64dbg\release\x64\plugins | 64-bit 64 位 |
   | x64dbg\release\x32\plugins | 32-bit 32 位 |

   

2. 安装模块

   ```
   pip install x64dbg_automate --upgrade        # x64dbg Automate 提供 Python API
   pip install x64dbg_automate[mcp] --upgrade   # x64dbg-automate-mcp把这些 API 包装成 MCP tools
   ```

   

3. 创建MCP连接配置

   ```json
   {
     "mcpServers": {
       "github.com/dariushoule/x64dbg-automate": {
         "type": "stdio",
         "command": "x64dbg-automate-mcp",
         "env": {
           "X64DBG_PATH": "D:\\Reverse\\x64dbg\\release\\x96dbg.exe"
         }
       }
     }
   }
   ```

   