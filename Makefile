.PHONY: help build up down logs restart clean dev prod

# 默认目标
help:
	@echo "KFC API 公益站 - Docker 管理命令"
	@echo ""
	@echo "可用命令:"
	@echo "  make build    - 构建 Docker 镜像"
	@echo "  make up       - 启动服务"
	@echo "  make down     - 停止服务"
	@echo "  make restart  - 重启服务"
	@echo "  make logs     - 查看日志"
	@echo "  make clean    - 清理容器和镜像"
	@echo "  make dev      - 启动开发环境"
	@echo "  make prod     - 启动生产环境"
	@echo ""

# 构建镜像
build:
	@echo "🔨 构建 Docker 镜像..."
	docker-compose build

# 启动服务（后台）
up:
	@echo "🚀 启动服务..."
	docker-compose up -d
	@echo "✅ 服务已启动: http://localhost:3000"

# 停止服务
down:
	@echo "🛑 停止服务..."
	docker-compose down

# 重启服务
restart:
	@echo "🔄 重启服务..."
	docker-compose restart

# 查看日志
logs:
	docker-compose logs -f

# 清理容器和镜像
clean:
	@echo "🧹 清理 Docker 资源..."
	docker-compose down -v
	docker rmi kfc-api-index:latest 2>/dev/null || true
	@echo "✅ 清理完成"

# 开发环境
dev:
	@echo "💻 启动开发环境..."
	npm install
	npm run dev

# 生产环境（构建并启动）
prod:
	@echo "🏭 构建并启动生产环境..."
	docker-compose up -d --build
	@echo "✅ 生产环境已启动: http://localhost:3000"

# 查看容器状态
status:
	@echo "📊 容器状态:"
	docker-compose ps

# 进入容器
shell:
	docker exec -it kfc-api-index sh
