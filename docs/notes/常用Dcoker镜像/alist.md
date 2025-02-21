
# Alist


## Docker Compose

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
