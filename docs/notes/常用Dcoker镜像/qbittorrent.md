
# qBittorrent

## Docker Compose

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