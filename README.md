# KFC API 公益站 - React 版本

这是使用 React + Vite + Tailwind CSS 复现的 KFC API 公益站前端页面。

## 项目结构

```
kfc-api-react/
├── src/
│   ├── components/          # React 组件
│   │   ├── HeroCard.jsx            # Hero 主卡片
│   │   ├── StatsCard.jsx           # 统计卡片
│   │   ├── StatusCard.jsx          # 状态卡片
│   │   ├── ApiEndpointCard.jsx     # API 端点卡片
│   │   ├── QuickGuideCard.jsx      # 快速接入指南卡片
│   │   ├── ModelList.jsx           # 模型列表
│   │   ├── FAQSection.jsx          # 常见问题
│   │   ├── Toast.jsx               # 提示组件
│   │   ├── GuideModal.jsx          # 接入指南弹窗
│   │   └── DisclaimerModal.jsx     # 免责声明弹窗
│   ├── context/             # 全局状态管理
│   │   └── AppContext.jsx          # 应用上下文
│   ├── utils/               # 工具函数
│   │   └── constants.js            # 常量配置
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 入口文件
│   └── index.css            # 全局样式
├── index.html               # HTML 模板
├── package.json             # 依赖配置
├── vite.config.js           # Vite 配置
├── tailwind.config.js       # Tailwind 配置
└── postcss.config.js        # PostCSS 配置
```

## 功能特性

✅ **Bento 风格布局** - 苹果风格的卡片式设计
✅ **深色模式** - 自动检测系统主题并支持手动切换
✅ **响应式设计** - 完美适配移动端和桌面端
✅ **模型列表** - 实时加载并支持分类筛选
✅ **交互动画** - 流畅的悬停和点击效果
✅ **复制功能** - 一键复制 API 端点和模型名称
✅ **接入指南** - Kilocode、Claude、Cherry 配置教程
✅ **免责声明** - 带倒计时的用户协议

## 安装依赖

```bash
npm install
```

## 开发模式

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:5173`

## 生产构建

```bash
npm run build
```

构建产物将输出到 `dist` 目录

## 预览生产构建

```bash
npm run preview
```

## 🐳 Docker 部署

### 快速启动（推荐）

使用提供的启动脚本：

```bash
./start.sh
```

或使用 Makefile 命令：

```bash
# 查看所有可用命令
make help

# 启动服务
make up

# 查看日志
make logs

# 停止服务
make down

# 重启服务
make restart
```

### 使用 Docker Compose

1. **启动服务**：
```bash
docker-compose up -d
```

2. **查看日志**：
```bash
docker-compose logs -f
```

3. **停止服务**：
```bash
docker-compose down
```

4. **重新构建并启动**：
```bash
docker-compose up -d --build
```

访问地址：`http://localhost:3000`

> 📘 详细的 Docker 部署指南请查看 [DOCKER.md](./DOCKER.md)

### 使用 Docker 命令

1. **构建镜像**：
```bash
docker build -t kfc-api-index:latest .
```

2. **运行容器**：
```bash
docker run -d -p 3000:80 --name kfc-api-index kfc-api-index:latest
```

3. **查看日志**：
```bash
docker logs -f kfc-api-index
```

4. **停止容器**：
```bash
docker stop kfc-api-index
docker rm kfc-api-index
```

### Docker 配置说明

- **端口映射**：容器内部使用 80 端口，映射到宿主机的 3000 端口
- **健康检查**：每 30 秒检查一次服务状态
- **重启策略**：`unless-stopped` - 除非手动停止，否则自动重启
- **Nginx 配置**：支持 SPA 路由、Gzip 压缩、静态资源缓存

## 技术栈

- **React 18** - 用户界面库
- **Vite** - 快速的前端构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Font Awesome** - 图标库
- **Plus Jakarta Sans** - 字体

## 主要组件说明

### AppContext
全局状态管理，包括：
- 主题切换
- Toast 提示
- Modal 管理
- 剪贴板复制

### ModelList
- 从 API 获取模型列表
- 支持按类别筛选
- 降级到预设数据
- 点击复制模型名称

### Modal 组件
- **GuideModal** - 接入指南（Kilocode/Claude/Cherry）
- **DisclaimerModal** - 免责声明（5秒倒计时）

## 自定义配置

### 修改 API 配置
编辑 `src/utils/constants.js`：

```javascript
export const API_CONFIG = {
  url: 'your-api-url',
  keys: ['your-key-1', 'your-key-2']
};
```

### 修改主题色
编辑 `tailwind.config.js` 中的 `colors` 配置

## 浏览器兼容性

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)

## 许可证

MIT License
