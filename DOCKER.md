# Docker 部署指南

本文档详细说明如何使用 Docker 部署 KFC API 公益站前端应用。

## 📋 前置要求

- Docker 20.10+
- Docker Compose 1.29+

## 🚀 快速启动

### 方法一：使用启动脚本（推荐）

```bash
./start.sh
```

这个脚本会自动：
- 检查 Docker 环境
- 清理旧容器
- 构建新镜像
- 启动服务
- 显示访问地址

### 方法二：手动启动

```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 📁 Docker 相关文件说明

### Dockerfile

采用多阶段构建：

1. **构建阶段** (node:20-alpine)
   - 安装依赖
   - 构建生产版本

2. **运行阶段** (nginx:alpine)
   - 复制构建产物
   - 使用 Nginx 提供静态文件服务

### docker-compose.yml

服务配置：
- **容器名称**: `kfc-api-index`
- **端口映射**: `3000:80`
- **重启策略**: `unless-stopped`
- **健康检查**: 每 30 秒检查 `/health` 端点

### nginx.conf

Nginx 配置特性：
- ✅ SPA 路由支持（所有路由返回 index.html）
- ✅ Gzip 压缩
- ✅ 静态资源缓存（1 年）
- ✅ 安全头设置
- ✅ 健康检查端点

### .dockerignore

排除不必要的文件，优化构建速度：
- node_modules
- dist
- .git
- 文档文件等

## 🔧 自定义配置

### 修改端口

编辑 `docker-compose.yml`：

```yaml
ports:
  - "8080:80"  # 改为你想要的端口
```

### 环境变量

如需添加环境变量，在 `docker-compose.yml` 中添加：

```yaml
environment:
  - NODE_ENV=production
  - CUSTOM_VAR=value
```

### 资源限制

添加 CPU 和内存限制：

```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
```

## 📊 监控和维护

### 查看容器状态

```bash
docker-compose ps
```

### 查看资源使用

```bash
docker stats kfc-api-index
```

### 查看实时日志

```bash
docker-compose logs -f
```

### 进入容器

```bash
docker exec -it kfc-api-index sh
```

### 健康检查

```bash
curl http://localhost:3000/health
```

## 🔄 更新部署

### 更新代码后重新部署

```bash
# 停止并删除旧容器
docker-compose down

# 重新构建并启动
docker-compose up -d --build
```

### 不停机更新（推荐）

```bash
# 构建新镜像
docker-compose build

# 滚动更新
docker-compose up -d --no-deps --build kfc-api-index
```

## 🐛 故障排查

### 容器无法启动

1. 查看日志：
```bash
docker-compose logs kfc-api-index
```

2. 检查端口是否被占用：
```bash
lsof -i :3000
```

3. 验证 Dockerfile 语法：
```bash
docker build --no-cache -t kfc-api-index:latest .
```

### 页面无法访问

1. 检查容器是否运行：
```bash
docker-compose ps
```

2. 检查健康状态：
```bash
docker inspect kfc-api-index | grep -A 10 Health
```

3. 进入容器检查文件：
```bash
docker exec -it kfc-api-index ls -la /usr/share/nginx/html
```

### 构建失败

1. 清理 Docker 缓存：
```bash
docker system prune -a
```

2. 使用无缓存构建：
```bash
docker-compose build --no-cache
```

## 📦 生产环境建议

### 1. 使用反向代理

推荐使用 Nginx/Traefik 作为反向代理：

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 2. 启用 HTTPS

使用 Let's Encrypt 证书：

```yaml
services:
  kfc-api-index:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.kfc-api.rule=Host(`api.example.com`)"
      - "traefik.http.routers.kfc-api.tls.certresolver=letsencrypt"
```

### 3. 日志管理

配置日志驱动：

```yaml
services:
  kfc-api-index:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### 4. 备份和恢复

定期备份镜像：

```bash
# 保存镜像
docker save kfc-api-index:latest | gzip > kfc-api-index-backup.tar.gz

# 恢复镜像
docker load < kfc-api-index-backup.tar.gz
```

## 🌐 多环境部署

### 开发环境

```yaml
# docker-compose.dev.yml
services:
  kfc-api-index:
    build:
      target: development
    volumes:
      - ./src:/app/src
```

使用：`docker-compose -f docker-compose.dev.yml up`

### 生产环境

```yaml
# docker-compose.prod.yml
services:
  kfc-api-index:
    restart: always
    deploy:
      replicas: 2
```

使用：`docker-compose -f docker-compose.prod.yml up -d`

## 📞 支持

如遇到问题，请检查：
1. Docker 版本是否满足要求
2. 端口是否被占用
3. 防火墙设置
4. 查看完整日志输出

---

更多信息请参考 [主 README](./README.md)
