---
title: 常用 Docker 镜像 Docker Compose 配置
---

# 常用 Docker 镜像 Docker Compose 配置

## Alist

官网：[https://alist.nn.ci/](https://alist.nn.ci/)

项目地址：[https://github.com/alist-org/alist](https://github.com/alist-org/alist)

**Docker Compose**
```yaml
services:
  alist:
    # image: xhofe/alist:latest
    image: xhofe/alist-aria2:v3.35.0 # 预装aria2镜像
    container_name: alist
    restart: unless-stopped
    volumes:
      - ./data:/opt/alist/data
    ports:
      - 5244:5244
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
```


## Bitwarden

项目地址：[https://github.com/dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden)

**Docker Compose**
```yaml
services:
  vaultwarden:
    image: vaultwarden/server:alpine
    container_name: vaultwarden
    restart: always
    ports:
      - 24001:80
    volumes:
      - ./data:/data
    environment:
      - TZ=Asia/Shanghai
      - ADMIN_TOKEN=$$argon2id$$v=19$$m=65540,t=3,p=4$$AtK7h3d5gPHqTSVXH8f6S6WvHvWEPBYg8dKje1kA6/g$$vAyzN0ZC/ApZlyEMsJVsYQTOLHFfnUmgtNjMWwBCZ3E
      - DOMAIN=https://akams.cn/vault # 实例工作的基础 URL
      - SIGNUPS_ALLOWED=false # 允许新用户注册
      - SIGNUPS_VERIFY=true # 注册需要电子邮件验证
      - INVITATIONS_ALLOWED=false # 允许邀请用户注册
      - SMTP_HOST=smtp.mail.me.com
      - SMTP_PORT=587
      - SMTP_SECURITY=starttls # TLS 加密方式
      - SMTP_FROM=
      - SMTP_FROM_NAME="Password Manager" # 邮件标题
      - SMTP_USERNAME=
      - SMTP_PASSWORD=
```


## Beszel

官网文档：https://www.beszel.dev/zh/zh/

项目地址：https://github.com/henrygd/beszel


**Docker Compose**
```yaml
services:
  beszel:
    image: henrygd/beszel
    container_name: beszel
    restart: unless-stopped
    ports:
      - 8090:8090
    volumes:
      - ./data:/beszel_data
```


## certd

一款开源、免费、全自动申请和部署更新SSL证书管理工具

项目地址：https://github.com/certd/certd

**Docker Compose**
```yaml
services:
  certd:
    image: registry.gitlab.com/certd/certd:latest
    container_name: certd
    restart: unless-stopped
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./data:/certd/data
    environment:
      - DOMAINS=www.example.com,example.com # 需要申请的域名
```


## dozzle

Docker容器的实时日志查看器

官方文档：https://dozzle.dev/

项目地址：https://github.com/amir20/dozzle

**Docker Compose**
```yaml
services:
  dozzle:
    image: amir20/dozzle:latest
    container_name: dozzle
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - 45002:8080
```


## Dockge

项目地址：https://github.com/louislam/dockge

**Docker Compose**
```yaml
services:
  dockge:
    image: louislam/dockge:1
    container_name: dockge
    restart: unless-stopped
    ports:
      - 45001:5001
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data:/app/data
      - /root/docker/compose:/opt/stacks
    environment:
      # Tell Dockge where is your stacks directory
      - DOCKGE_STACKS_DIR=/opt/stacks
```


## dpanel

轻量化 docker 可视化管理面板

官方文档：https://dpanel.cc/#/

项目地址：https://github.com/donknap/dpanel

**Docker Compose**
```yaml
services:
  dpanel:
    image: dpanel/dpanel:lite
    container_name: dpanel
    restart: always
    ports:
      - 8807:8080
    environment:
      APP_NAME: dpanel # 请保持此名称与 container_name 一致
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data:/dpanel
```


## qBittorrent

项目地址：https://github.com/qbittorrent/qBittorrent/

**Docker Compose**
```yaml
services:
  qbittorrent:
    image: linuxserver/qbittorrent
    container_name: qbittorrent
    restart: unless-stopped
    ports:
      - "6881:6881"
      - "6881:6881/udp"
      - "9905:9905"
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
      - WEBUI_PORT=9905
      # - TORRENTING_PORT=6881
    volumes:
      - ./data/config:/config
      - ./downloads:/downloads

```


## RustDesk

官方文档：https://rustdesk.com/docs/en/

项目地址：https://github.com/rustdesk/rustdesk

**Docker Compose**
```yaml
services:
  rustdesk-server:
    image: rustdesk/rustdesk-server-s6:latest
    container_name: rustdesk-server
    restart: unless-stopped
    ports:
      - 21115:21115 # NAT类型测试端口
      - 21116:21116 # hbbs端口（配合IP/域名使用）
      - 21116:21116/udp # hbbs端口用于ID 注册与心跳服务
      - 21117:21117 # hbbr端口（客户端中继服务器端口）
      - 21118:21118 # 网页客户端支持端口 WebSocket 协议
      - 21119:21119 # 网页客户端支持端口
    volumes:
      - ./db:/db
      - ./data:/data
    environment:
      - RELAY=rustdesk.example.com:21117 # rustdesk.example.com:21117 # IP地址或域名（必改项）
      - ENCRYPTED_ONLY=0 # 如果设置为 "1"，将不接受未加密的连接
      - DB_URL=/db/db_v2.sqlite3
      - KEY_PRIV=nVWPGZ7btYiBzEPKTI5O4R/mimEQzvpmwSZDBedzTjIzaU2p58XXh2wkzWq/xZ29w2rJGR6I+M58Ux1xEzez4A==
      - KEY_PUB=M2lNqefF14dsJM1qv8WdvcNqyRkeiPjOfFMdcRM3s+A=
```

防火墙需要开放TCP协议的21115、21116、21117、21118、21119端口，UDP协议的21116端口。


## Gitea

官方文档：https://docs.gitea.com/zh-cn/

**Docker Compose**
```yaml
services:
  server:
    image: gitea/gitea:latest
    container_name: gitea
    restart: unless-stopped
    volumes:
      - ./data:/data
    ports:
      - 45003:3000
      - 24422:22
    environment:
      - USER_UID=1000
      - USER_GID=1000
```


## wallos

项目地址：https://github.com/ellite/Wallos

**Docker Compose**
```yaml
services:
  wallos:
    image: bellamy/wallos:latest
    container_name: wallos
    restart: unless-stopped
    ports:
      - 8282:80
    volumes:
      -./data:/app/data
    environment:
      - TZ=Asia/Shanghai
```


## umami

官方文档：https://umami.is/docs

项目地址：https://github.com/umami-software/umami

**Docker Compose**
```yaml
services:
  umami:
    image: ghcr.nju.edu.cn/umami-software/umami:mysql-latest
    container_name: umami
    restart: unless-stopped
    environment:
      TZ: Asia/Shanghai
      DATABASE_TYPE: mysql
      DATABASE_URL: mysql://username:mypassword@localhost:3306/mydb
      APP_SECRET: umami_ct7Qmx
    network_mode: host
```


## uptime-kuma

项目地址：https://github.com/louislam/uptime-kuma

**Docker Compose**
```yaml
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime
    restart: unless-stopped
    volumes:
      - ./data:/app/data
    ports:
      - 3001:3001
```

## memos

项目地址：https://github.com/usememos/memos

**Docker Compose**
```yaml
services:
  memos:
    image: neosmemo/memos:stable
    container_name: memos
    restart: unless-stopped
    ports:
      - 5230:5230
    volumes:
      - ./data:/var/opt/memos
```

## excalidraw

项目地址：https://github.com/excalidraw/excalidraw

**Docker Compose**
```yaml
services:
  excalidraw:
    image: excalidraw/excalidraw:latest
    container_name: excalidraw
    restart: unless-stopped
    ports:
      - 3698:80
```

## verysync

官网：https://www.verysync.com/

**Docker Compose**
```yaml
services:
  verysync:
    image: jonnyan404/verysync
    container_name: verysync
    restart: unless-stopped
    volumes:
      - /path/you/dir:/data
    ports:
      - 8886:8886
```

## stirling-pdf

**Docker Compose**
```yaml
services:
  verysync:
    image: jonnyan404/verysync
    container_name: verysync
    restart: unless-stopped
    volumes:
      - /path/you/dir:/data
    ports:
      - 8886:8886
```

## DDNS-Go

项目地址：https://github.com/jeessy2/ddns-go

**Docker Compose**
```yaml
services:
  ddns-go:
    image: jeessy/ddns-go:latest
    container_name: ddns-go
    restart: always
    network_mode: "host"
    volumes:
      - ./data:/root
```

## lucky

项目地址：https://github.com/gdy666/lucky

**Docker Compose**
```yaml
services:
  lucky:
    image: gdy666/lucky:latest
    container_name: lucky
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./data:/goodluck
```


## Portainer

**Docker Compose**
```yaml
services:
  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: unless-stopped
    ports:
      - "9000:9000" # Portainer 网页界面
      # - 9004:8000 # 用于 Edge agent 通信
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./data:/data  # 持久化 Portainer 数据
      - /var/run/docker.sock:/var/run/docker.sock # 允许 Portainer 管理本地 Docker 环境
```

## 青龙面板

官方文档：https://qinglong.online/

项目地址：https://github.com/whyour/qinglong

**Docker Compose**
```yaml
services:
  web:
    image: whyour/qinglong:latest # 基于 Debian 的版本：whyour/qinglong:debian
    container_name: qinglong
    restart: unless-stopped
    volumes:
      - ./data:/ql/data
    ports:
      - "5700:5700"
    environment:
      QlBaseUrl: '/' # 部署路径非必须，以斜杠开头和结尾，比如 /test/
```

## Tailscale

官网：https://tailscale.com/

**Docker Compose**
```yaml
services:
    tailscale:
        image: tailscale/tailscale:latest
        container_name: tailscale
        restart: unless-stopped
        volumes:
            - ./var/lib:/var/lib
            - ./dev/net/tun:/dev/net/tun
            - ./state:/var/lib/tailscale # 映射 tailscale 状态目录到我们创建的
        environment:
            - TS_AUTHKEY=tskey-auth-123456    # 填写平台生成的 Auth key
            - TS_EXTRA_ARGS=--advertise-exit-node
            - TS_HOSTNAME=UGREEN    # 填写主机名 例如 FnOS
            - TS_ROUTES=192.168.1.0/24   # 修改为主机所在的网段
            - TS_STATE_DIR= /var/lib/tailscale    # 存储 tailscale 状态的目录, 后面映射到宿主机, 确保在容器重新启动时配置保持不变
        network_mode: host
```


## Mysql

**Docker Compose**
```yaml
services:
  mysql:
    image: mysql:8.0.40
    container_name: mysql8
    restart: always
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: mysql_123456
    volumes:
      - ./data:/var/lib/mysql
      - ./init:/docker-entrypoint-initdb.d
      - ./conf.d:/etc/mysql/conf.d
```


## MongoDB

**Docker Compose**
```yaml
services:
  mongo:
    image: mongo:4.4
    container_name: mongo
    restart: always
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=mongo_123456
    volumes:
      - ./data:/data/db
    command:
      - "--auth"    # 增加启动参数，--auth，表示连接 mongodb 需要用户名和密码
```


## Send

**Send** 是一款开源的私密文件分享工具，是 Mozilla 已经关闭的 Firefox Send 项目分支，由社区保持更新和维护。

项目地址：https://github.com/timvisee/send

**Docker Compose**
```yaml
services:
  send:
    image: registry.gitlab.com/timvisee/send:latest
    container_name: send
    restart: unless-stopped
    ports:
      - '1443:1443'
    volumes:
      - ./data:/uploads
    environment:
      - DETECT_BASE_URL=true # 如果未设置BASE_URL则使用浏览器自动检测基 URL（默认为 false）
      - REDIS_HOST=redis     # Redis服务器的主机名
      - FILE_DIR=/uploads    # 文件存储目录，默认为 /uploads
```


## Shadowsocks

**Docker Compose**
```yaml
services:
  shadowsocks-libev:
    image: shadowsocks/shadowsocks-libev
    container_name: tailscale
    restart: unless-stopped
    environment:
      - PASSWORD=<password>
    ports:
      - <server-port>:8388
      - <server-port>:8388/udp
```
1. 创建一个名为 shadowsocks-libev 的容器，使用 shadowsocks/shadowsocks-libev 镜像。


## MoviePilot

官方文档：https://wiki.movie-pilot.org/

**Docker Compose**
```yaml
services:
  moviepilot:
    image: jxxghp/moviepilot-v2:latest
    container_name: moviepilot-v2
    restart: always
    stdin_open: true         # 是否打开标准输入流（交互模式），为 true 时容器可以保持运行并与用户交互
    tty: true                # 是否分配伪终端，使容器的终端行为更像一个真实的终端
    hostname: moviepilot-v2  # 容器主机名
    # 端口映射
    ports:
      - '9903:3000' # 前端 UI 显示
      - '53001:3001' # API 接口

    # 目录映射：宿主机目录:容器内目录
    volumes:
      - '/media:/media'  # 媒体库或下载库路径
      - '/data/config:/config'  # moviepilot 的配置文件存放路径
      - '/data/core:/moviepilot/.cache/ms-playwright'  # 浏览器内核存放路径
      - '/var/run/docker.sock:/var/run/docker.sock:ro'  # 用于获取宿主机的docker管理权，一般用于UI页面重启或自动更新

    # 环境变量：- '变量名=值‘
    environment:
      - 'NGINX_PORT=3000'   # UI页面的内部监听端口
      - 'PORT=3001'         # API接口的内部监听端口
      - 'PUID=0'            # 设置应用运行时的用户 ID 为 0（root 用户）
      - 'PGID=0'            # 设置应用运行时的组 ID 为 0（root 组）
      - 'UMASK=000'         # 文件创建时的默认权限掩码，000 表示不限制权限
      - 'TZ=Asia/Shanghai'  # 设置时区为上海（Asia/Shanghai）
      # - 'AUTH_SITE=iyuu'  # 设置认证站点，v2.0.7+版本以后可不设置，直接通过 UI 配置
      # - 'IYUU_SIGN=xxxx'  # 单个站点密钥，配合 AUTH_SITE 使用
      - 'SUPERUSER=admin'   # 设置超级用户为 admin
      # - 'API_TOKEN=无需手动配置，系统会自动生成。如果需要自定义配置，必须为16位以上的复杂字符串'
      - 'PROXY_HOST=http://127.0.0.1:7890'  # 设置全局代理服务器，用于TheMovieDb、GitHub（程序升级、插件下载），格式为：http(s)://ip:port、socks5://user:pass@host:port、socks5h://user:pass@host:port
      - 'GITHUB_PROXY=https://gh.llkk.cc'  # 设置 GitHub 代理，用于加速下载依赖

    # network_mode: host  # 内置的网关
    networks:  # 自定义网关
     - moviepilot

# 当使用内置网关时，可不启用
networks:
  moviepilot:  # 定义一个名为 moviepilot 的自定义网络
    name: moviepilot  # 网络的名称

```

## CookieCloud

项目地址：https://github.com/easychen/CookieCloud

**Docker Compose**
```yaml
services:
  cookiecloud:
    image: easychen/cookiecloud:latest
    container_name: cookiecloud
    restart: unless-stopped
    ports:
      - 8080:8080
    volumes:
      - ./data:/data/api/data
    environment:
      - TZ=Asia/Shanghai
```
