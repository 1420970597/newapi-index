import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

const GuideModal = () => {
  const { guideModal, closeGuideModal } = useApp();
  const [selectedPlatform, setSelectedPlatform] = useState('windows');

  useEffect(() => {
    if (guideModal.show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [guideModal.show]);

  if (!guideModal.show) return null;

  const getTitle = () => {
    switch (guideModal.type) {
      case 'claude': return 'Claude Code 配置';
      case 'openai': return 'Claude Code 安装教程';
      case 'api': return 'API 调用示例';
      default: return '接入指南';
    }
  };

  const getContent = () => {
    switch (guideModal.type) {
      case 'claude':
        return (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800 mb-4">
              <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
                <i className="fas fa-magic mr-2"></i> Claude Code 配置
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                配置 Claude Code CLI 工具，享受 AI 编程助手的强大功能。
              </p>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-purple-100 dark:border-purple-700/50">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                  <i className="fas fa-sliders-h mr-2 text-purple-500"></i> 配置步骤
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">编辑 <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">~/.claude/settings.json</code>：</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto">
                  <code>{`{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://code.giot.edu.kg"
  }
}`}</code>
                </pre>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  将 <code>your-api-key</code> 替换为你的 API 密钥。
                </p>
              </div>
            </div>
          </div>
        );

      case 'openai':
        return (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 mb-4 text-center border border-blue-100 dark:border-blue-800">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">🚀 Claude Code 快速开始</h4>
              <p className="text-blue-700 dark:text-blue-400 text-sm">Anthropic 官方 CLI 工具，Claude Sonnet 4.5 驱动</p>
              <div className="mt-4 flex justify-center items-center space-x-4 text-blue-600 dark:text-blue-400 text-xs">
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-2 text-xs">1</span>
                  <span>安装 CLI</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-2 text-xs">2</span>
                  <span>配置密钥</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-2 text-xs">3</span>
                  <span>开始编程</span>
                </div>
              </div>
            </div>

            {/* 平台选择 */}
            <div className="flex justify-center mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md border border-gray-200 dark:border-gray-700 inline-flex space-x-2">
                <button
                  onClick={() => setSelectedPlatform('windows')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedPlatform === 'windows'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  🪟 Windows
                </button>
                <button
                  onClick={() => setSelectedPlatform('mac')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedPlatform === 'mac'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  🍎 macOS
                </button>
                <button
                  onClick={() => setSelectedPlatform('linux')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                    selectedPlatform === 'linux'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  🐧 Linux
                </button>
              </div>
            </div>

            {/* Windows 教程 */}
            {selectedPlatform === 'windows' && (
              <div className="space-y-4">
                {/* 步骤 1: 安装 Node.js */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                    安装 Node.js
                  </h5>
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400"><strong>方法一：官方安装包（推荐）</strong></p>
                    <ol className="list-decimal list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                      <li>访问 <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nodejs.org</a></li>
                      <li>下载 LTS 版本的 Windows Installer (.msi)</li>
                      <li>运行安装程序，按默认设置完成安装</li>
                    </ol>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3"><strong>方法二：使用 Winget</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>winget install OpenJS.NodeJS.LTS</code>
                    </pre>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2"><strong>验证安装：</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>node --version{'\n'}npm --version</code>
                    </pre>
                  </div>
                </div>

                {/* 步骤 2: 安装 Claude Code */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                    安装 Claude Code CLI
                  </h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">打开 PowerShell 或命令提示符（管理员），执行：</p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto mb-2">
                    <code>npm install -g @anthropic-ai/claude-code</code>
                  </pre>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2"><strong>验证安装：</strong></p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                    <code>claude --version</code>
                  </pre>
                </div>

                {/* 步骤 3: 配置 API */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                    配置慧智AI API
                  </h5>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 rounded-r-lg mb-3">
                    <p className="text-xs text-yellow-800 dark:text-yellow-300">
                      访问 <a href="https://code.giot.edu.kg" target="_blank" rel="noopener noreferrer" className="font-medium underline">慧智AI 控制台</a> 获取 API 密钥
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    编辑配置文件 <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">%USERPROFILE%\.claude\settings.json</code>
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto mb-3">
                    <code>{`{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://code.giot.edu.kg"
  }
}`}</code>
                  </pre>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3 rounded-r-lg">
                    <p className="text-xs text-green-800 dark:text-green-300 mb-2 font-medium">启动使用：</p>
                    <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs">
                      <code>cd your-project-folder{'\n'}claude</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* macOS 教程 */}
            {selectedPlatform === 'mac' && (
              <div className="space-y-4">
                {/* 步骤 1: 安装 Node.js */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                    安装 Node.js
                  </h5>
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400"><strong>方法一：使用 Homebrew（推荐）</strong></p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">如果尚未安装 Homebrew：</p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
                    </pre>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">使用 Homebrew 安装 Node.js：</p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>brew install node</code>
                    </pre>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3"><strong>方法二：官方安装包</strong></p>
                    <ol className="list-decimal list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1 ml-2">
                      <li>访问 <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nodejs.org</a></li>
                      <li>下载 LTS 版本的 macOS Installer (.pkg)</li>
                      <li>运行安装程序，按默认设置完成安装</li>
                    </ol>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2"><strong>验证安装：</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>node --version{'\n'}npm --version</code>
                    </pre>
                  </div>
                </div>

                {/* 步骤 2: 安装 Claude Code */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                    安装 Claude Code CLI
                  </h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">打开终端，执行：</p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto mb-2">
                    <code>npm install -g @anthropic-ai/claude-code</code>
                  </pre>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2"><strong>验证安装：</strong></p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                    <code>claude --version</code>
                  </pre>
                </div>

                {/* 步骤 3: 配置 API */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                    配置慧智AI API
                  </h5>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 rounded-r-lg mb-3">
                    <p className="text-xs text-yellow-800 dark:text-yellow-300">
                      访问 <a href="https://code.giot.edu.kg" target="_blank" rel="noopener noreferrer" className="font-medium underline">慧智AI 控制台</a> 获取 API 密钥
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    编辑配置文件 <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">~/.claude/settings.json</code>
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto mb-3">
                    <code>{`{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://code.giot.edu.kg"
  }
}`}</code>
                  </pre>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3 rounded-r-lg">
                    <p className="text-xs text-green-800 dark:text-green-300 mb-2 font-medium">启动使用：</p>
                    <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs">
                      <code>cd your-project-folder{'\n'}claude</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Linux 教程 */}
            {selectedPlatform === 'linux' && (
              <div className="space-y-4">
                {/* 步骤 1: 安装 Node.js */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                    安装 Node.js
                  </h5>
                  <div className="space-y-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400"><strong>Ubuntu/Debian：</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -{'\n'}sudo apt-get install -y nodejs</code>
                    </pre>

                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3"><strong>CentOS/RHEL/Fedora：</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>sudo dnf install nodejs npm</code>
                    </pre>

                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3"><strong>Arch Linux：</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>sudo pacman -S nodejs npm</code>
                    </pre>

                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2"><strong>验证安装：</strong></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                      <code>node --version{'\n'}npm --version</code>
                    </pre>
                  </div>
                </div>

                {/* 步骤 2: 安装 Claude Code */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                    安装 Claude Code CLI
                  </h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">打开终端，执行：</p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto mb-2">
                    <code>npm install -g @anthropic-ai/claude-code</code>
                  </pre>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2"><strong>验证安装：</strong></p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                    <code>claude --version</code>
                  </pre>
                </div>

                {/* 步骤 3: 配置 API */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                    配置慧智AI API
                  </h5>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3 rounded-r-lg mb-3">
                    <p className="text-xs text-yellow-800 dark:text-yellow-300">
                      访问 <a href="https://code.giot.edu.kg" target="_blank" rel="noopener noreferrer" className="font-medium underline">慧智AI 控制台</a> 获取 API 密钥
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    编辑配置文件 <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">~/.claude/settings.json</code>
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto mb-3">
                    <code>{`{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-api-key",
    "ANTHROPIC_BASE_URL": "https://code.giot.edu.kg"
  }
}`}</code>
                  </pre>
                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3 rounded-r-lg">
                    <p className="text-xs text-green-800 dark:text-green-300 mb-2 font-medium">启动使用：</p>
                    <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs">
                      <code>cd your-project-folder{'\n'}claude</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'api':
        return (
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800">
              <h4 className="font-bold text-green-800 dark:text-green-300 text-lg mb-2">API 调用示例</h4>
              <p className="text-sm text-green-600 dark:text-green-400 mb-4">直接使用 HTTP 请求调用 API</p>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-green-100 dark:border-green-700/50 mb-3">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3">cURL 示例</h5>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto">
                  <code>{`curl https://code.giot.edu.kg/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [
      {"role": "user", "content": "你好！"}
    ]
  }'`}</code>
                </pre>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-green-100 dark:border-green-700/50">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                  <i className="fas fa-lightbulb mr-2 text-green-500"></i> 支持的特性
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>✅ 1M tokens 超长上下文</li>
                  <li>✅ Extended Thinking 思考模式</li>
                  <li>✅ 流式输出 (stream: true)</li>
                  <li>✅ 完全兼容 OpenAI API 格式</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={closeGuideModal}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md z-10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{getTitle()}</h3>
          <button
            onClick={closeGuideModal}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-6">
          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default GuideModal;
