import { useEffect } from 'react';
import { useApp } from '../context/AppContext';

const GuideModal = () => {
  const { guideModal, closeGuideModal } = useApp();

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
      case 'kilocode': return 'Kilocode 配置';
      case 'claude': return 'Claude Code 配置';
      case 'cherry': return 'Cherry Studio 配置';
      default: return '接入指南';
    }
  };

  const getContent = () => {
    switch (guideModal.type) {
      case 'kilocode':
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 text-lg">Kilocode 配置</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">强大的 AI 编程助手</p>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-blue-100 dark:border-blue-700/50">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                  <i className="fas fa-sliders-h mr-2 text-blue-500"></i> 配置步骤
                </h5>
                <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>打开 <strong>Kilocode 设置</strong></li>
                  <li>找到 <strong>API Configuration</strong> 选择 <strong>OpenAI Compatible</strong></li>
                  <li>Base URL 填入: <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 select-all text-blue-600 dark:text-blue-400">https://kfc-api.sxxe.net/v1</code></li>
                  <li>API Key 填入: <a href="https://kfc-api.sxxe.net/console/token" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">获取的令牌</a></li>
                  <li>勾选 "使用OpenAI传统格式"</li>
                </ol>
              </div>

              <div className="mt-3 text-right">
                <a href="https://kilo.ai/docs/zh-CN/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:text-blue-600 hover:underline inline-flex items-center transition-colors">
                  查阅官方文档 <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        );

      case 'claude':
        return (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800 mb-4">
              <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center">
                <i className="fas fa-magic mr-2"></i> 推荐方案：CC Switch
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                告别繁琐的配置文件修改！使用 <strong>CC Switch</strong> 一键管理 Claude Code 配置。
              </p>
              <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                <li>🚀 <strong>一键切换</strong>：在官方 API 和公益站之间秒级切换</li>
                <li>🛡️ <strong>安全管理</strong>：无需手动触碰敏感的配置文件</li>
                <li>⚡ <strong>测速功能</strong>：实时检测 API 连通性和延迟</li>
              </ul>
              <a href="https://github.com/farion1231/cc-switch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition-colors">
                <i className="fab fa-github mr-2"></i> 下载 CC Switch
              </a>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">或者手动配置 (不推荐)：</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">编辑 <code>~/.claude/settings.json</code>：</p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto">
                <code>{`{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "your-key",
    "ANTHROPIC_BASE_URL": "https://kfc-api.sxxe.net"
  }
}`}</code>
              </pre>
            </div>
          </div>
        );

      case 'cherry':
        return (
          <div className="space-y-4">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-xl border border-pink-100 dark:border-pink-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-pink-800 dark:text-pink-300 text-lg">Cherry Studio</h4>
                  <p className="text-xs text-pink-600 dark:text-pink-400 mt-1">专业的 AI 桌面客户端</p>
                </div>
                <a href="https://www.cherry-ai.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center shadow-sm">
                  <i className="fas fa-download mr-2"></i> 官网下载
                </a>
              </div>

              <div className="mb-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>Cherry Studio 是一款强大的桌面版 AI 客户端，支持多模型管理与对话。界面简洁美观，功能丰富，是管理和使用 AI 模型的理想工具。</p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-pink-100 dark:border-pink-700/50">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center">
                  <i className="fas fa-sliders-h mr-2 text-pink-500"></i> 配置指南
                </h5>
                <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>下载并安装 Cherry Studio</li>
                  <li>进入 <strong>设置</strong> → <strong>模型服务</strong></li>
                  <li>添加 <strong>OpenAI</strong> 类型服务</li>
                  <li>API 地址填入: <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 select-all text-pink-600 dark:text-pink-400">https://kfc-api.sxxe.net</code></li>
                  <li>API 密钥填入: <span className="text-gray-500">您的 API Key</span></li>
                </ol>
              </div>

              <div className="mt-3 text-right">
                <a href="https://docs.cherry-ai.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-pink-500 hover:text-pink-600 hover:underline inline-flex items-center transition-colors">
                  查阅官方文档 <i className="fas fa-arrow-right ml-1"></i>
                </a>
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
