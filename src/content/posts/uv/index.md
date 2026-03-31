---
title: uv -- Python 包与环境管理工具
pubDate: 2025-06-15
description: uv 是一个由 Astral 公司用 Rust 开发的高性能 Python 包管理工具，旨在提供比传统 pip 更快的包安装和依赖管理体验。
author: 'OopsUnix'
tags: [Tools]
---

# uv -- Python 包与环境管理工具

## uv 介绍

uv 是一个由 Astral 公司用 Rust 开发的高性能 Python 包管理工具，旨在提供比传统 pip 更快的包安装和依赖管理体验。

与传统的 Python 包管理工具相比，uv 具有以下显著优势：

- **🚀 一体化工具**：一个工具替代 pip、pip-tools、pipx、poetry、pyenv、twine、virtualenv 等多种工具
- **⚡️ 极致速度**：比 pip 快 10-100 倍
- **🗂️ 全面项目管理**：提供通用锁文件的综合项目管理功能
- **❇️ 脚本运行**：支持带有内联依赖元数据的脚本运行
- **🐍 Python版本管理**：安装和管理不同的 Python 版本
- **💾 高效磁盘空间利用**：通过全局缓存实现依赖去重
- **⏬ 简易安装**：无需 Rust 或 Python 环境，可通过 curl 或 pip 直接安装
- **🖥️ 多平台支持**：支持 macOS、Linux 和 Windows 系统

## uv 安装

### 使用官方安装脚本（推荐）

```sh
# Linux/macOS
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```powershell
# Windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 使用包管理器

#### **Homebrew**

```bash
# macOS (Homebrew)
brew install uv
```

#### **WinGet**

```cmd
winget install --id=astral-sh.uv  -e
```

#### **Scoop**

```cmd
scoop install main/uv
```

#### **PyPI**

```bahs
pip install uv
```

安装完成后，可以通过以下命令验证安装是否成功：

```bash
uv --version
```

## uv 安装 Python

如果系统中已安装 Python，uv 会**自动检测并使用**，无需额外配置。不过，uv 也能够安装和管理 Python 版本。同时 uv 会根据需要**自动安装**缺失的 Python 版本，因此你无需预先安装 Python 即可上手。

> [!NOTE]
>
> Python 官方并未发布可分发的二进制文件。因此，uv 使用的是 Astral 的[`python-build-standalone`](https://github.com/astral-sh/python-build-standalone) 项目提供的发行版。更多详细信息，请参阅[Python 发行版](https://uv.doczh.com/concepts/python-versions/#受管理的 Python 发行版)文档。

> [!IMPORTANT]
>
> uv 安装的 Python 不会全局可用（即无法通过 `python` 命令调用）。

安装最新版本的 Python：

```bash
uv python install
```

安装特定版本的 Python：

```bash
uv python install 3.12
```

安装多个 Python 版本：

```bash
uv python install 3.11 3.12
```

## uv 运行 Python 项目

uv 使用 `pyproject.toml` 文件进行项目管理，这是现代 Python 项目的标准配置文件。

### 初始化项目

项目根目录下运行以下命令：

```bash
uv init --project .
```

这会创建基本的项目结构和 `pyproject.toml` 文件，并根据项目结构自动填充一些基本信息。

### 初始化虚拟环境

```bash
uv venv        # 在当前目录创建虚拟环境
uv venv .venv  # 在指定目录创建虚拟环境
```

> [!NOTE]
>
> 直接运行项目启动文件，例如： `main.py` 也会自动创建虚拟环境

### 激活虚拟环境

```bash
# Linux/macOS
source .venv/bin/activate

# Windows
.venv\Scripts\activate
```

### 添加依赖

使用 `uv add` 命令可以向项目添加依赖。该命令会自动更新 pyproject.toml 文件、锁文件和项目环境：

```bash
# 添加单个包
uv add requests

# 指定版本约束
uv add 'requests==2.31.0'

# 添加 Git 依赖
uv add git+https://github.com/psf/requests

# 从 requirements.txt 文件添加所有依赖
uv add -r requirements.txt
```

### 卸载依赖

使用 `uv remove` 命令可以删除项目依赖：

```bash
uv remove requests
```

### 升级依赖

使用 `uv lock` 命令配合 `--upgrade-package` 参数可以升级指定包：

```bash
# 升级特定包
uv lock --upgrade-package requests
```

### 运行项目命令

`uv run` 命令可以在项目环境中运行脚本或命令。在每次运行前，UV 会验证锁文件是否与 `pyproject.toml` 同步，并确保环境与锁文件一致：

```bash
# 运行 Python 脚本
uv run main.py
```

### 迁移现有的 Python 项目到 uv

#### 初始化 `pyproject.toml`

使用 `uv init` 命令的 `--bare` 选项将仅创建 `pyproject.toml`，禁止创建额外文件，如 `README.md`、`src/` 目录树、`.python-version` 文件等。

```bash
uv init --bare
```

#### 添加项目依赖

1. 如果项目中存在 `requirements.txt` 文件，可以使用以下命令安装所有依赖，并同步添加到`pyproject.toml`文件中：

   ```bash
   uv add -r requirements.txt
   ```

   uv 会自动解析 `requirements.txt` 文件，并将其中的依赖添加到 `pyproject.toml` 的 `dependencies` 部分。

2. 如果项目中存在 `pyproject.toml` 文件，可以使用以下命令使用现有的 `pyproject.toml`：

   ```bash
   uv sync
   ```

## uv 设置国内镜像源

uv 支持在项目、全局使用配置文件。

uv 会读取以下位置的配置文件（按优先级从高到低）：

- `UV_CONFIG_FILE` 环境变量指定的文件
- `./uv.toml`
- `~/.uv/uv.toml`
- `~/.config/uv/uv.toml`

> [!CAUTION]
>
> 若同时使用 pip 和 uv，镜像源需分别配置（uv 不读取 pip 的配置）

#### 全局配置：

- **Linux & MacOS：**

  ```bash
  mkdir ~/.config/uv && vim ~/.config/uv/uv.toml
  ```

- **Windows：**

  ```cmd
  %APPDATA%\uv\uv.toml
  ```

- 在该文件中添加以下内容：

  ```toml
  [[index]]
  url = "https://pypi.tuna.tsinghua.edu.cn/simple"
  default = true
  ```

#### 项目配置：

- **文件路径：**项目目录下的 pyproject.toml

- 在该文件中添加以下内容：

```toml
[[tool.uv.index]]
url = "https://pypi.tuna.tsinghua.edu.cn/simple"
default = true
```

#### 常用国内镜像源

- 清华大学：`https://pypi.tuna.tsinghua.edu.cn/simple`
- 阿里云：`https://mirrors.aliyun.com/pypi/simple/`
- 腾讯云：`https://mirrors.cloud.tencent.com/pypi/simple`
- 华为云：`https://repo.huaweicloud.com/repository/pypi/simple`
