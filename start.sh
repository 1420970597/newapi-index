#!/bin/bash

echo "======================================"
echo "  KFC API 公益站 - Docker 快速启动"
echo "======================================"
echo ""

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ 错误: Docker 未安装"
    echo "请先安装 Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

# 检查 Docker Compose 是否安装
if ! command -v docker-compose &> /dev/null; then
    echo "❌ 错误: Docker Compose 未安装"
    echo "请先安装 Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker 环境检查通过"
echo ""

# 停止并删除旧容器
echo "🔄 清理旧容器..."
docker-compose down 2>/dev/null

# 构建并启动
echo "🚀 构建并启动服务..."
docker-compose up -d --build

# 检查服务状态
echo ""
echo "⏳ 等待服务启动..."
sleep 5

if docker-compose ps | grep -q "Up"; then
    echo ""
    echo "======================================"
    echo "✅ 服务启动成功！"
    echo "======================================"
    echo ""
    echo "📍 访问地址: http://localhost:3000"
    echo ""
    echo "📝 常用命令:"
    echo "  查看日志: docker-compose logs -f"
    echo "  停止服务: docker-compose down"
    echo "  重启服务: docker-compose restart"
    echo ""
else
    echo ""
    echo "❌ 服务启动失败，请查看日志："
    echo "docker-compose logs"
fi
