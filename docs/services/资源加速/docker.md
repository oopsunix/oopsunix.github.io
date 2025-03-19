---
title: Docker 镜像加速
---


# Docker 镜像加速服务

Docker 镜像加速服务，解决 Docker 镜像拉取过程中，由于网络延迟或地理位置等因素，可能会遇到速度较慢或超时的问题。


> [!TIP]
> **镜像地址：**`docker.llkk.cc`

::: code-group

```sh [全局配置]{1}
echo '{"registry-mirrors": ["https://docker.llkk.cc"]}' | sudo tee /etc/docker/daemon.json > /dev/null
systemctl daemon-reload
systemctl restart docker
```

```sh [临时使用]{1}
docker pull docker.llkk.cc/nginx:latest
```

:::


***


## 安装 Docker

### 官方一键安装脚本

- 官方原版

```
curl -fsSL https://get.docker.com | bash -s docker
```

- 官方原版(使用阿里源镜像)

```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

- 官方原版(使用清华源镜像)

```
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
curl -fsSL https://raw.githubusercontent.com/docker/docker-install/master/install.sh | sh
```




### 国内安装

- linuxmirrors（推荐）

```
bash <(curl -f -s --connect-timeout 10 --retry 3 https://linuxmirrors.cn/docker.sh) --source mirrors.tencent.com/docker-ce --source-registry docker.llkk.cc --protocol https --install-latested true --close-firewall false --ignore-backup-tips
```

- daocloud

```
curl -sSL https://get.daocloud.io/docker | sh
```

***

## 安装 Docker-Compose

### 安装最新版本

```
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```


### 国内安装

```
sudo curl -L "https://gh.llkk.cc/https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose && docker compose version
```

## 服务说明

本着开放共享的互联网精神，本站提供开放和免费的公益服务，我们将尽力保证服务的稳定性，但不提供可用性保障，若因网络攻击等原因导致服务不可用，建议更换其他公益服务节点。

### 其他可用镜像源

本站也提供了 API 接口，定期搜集和检测互联网上公开的可用镜像源，并实时更新。您可以通过以下地址访问本站提供的可用镜像源列表：
```
http://api.akams.cn/docker
```

使用规则：
- 禁止用于任何违法或不当用途
- 禁止过度频繁地调用API接口
- 禁止将API用于商业用途（除非获得特别授权）
- 禁止转售或重新分发API服务
- 遵守所有适用的法律法规
- 保护自己的账户信息安全
- 合理使用API资源
- 尊重其他用户的权益