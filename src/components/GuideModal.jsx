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
      case 'claude': return 'Claude Code 配置';
      case 'openai': return 'OpenAI SDK 接入';
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
    "ANTHROPIC_BASE_URL": "https://your-api-domain.com"
  }
}`}</code>
                </pre>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  将 <code>your-api-key</code> 替换为你的 API 密钥，<code>your-api-domain.com</code> 替换为实际的 API 地址。
                </p>
              </div>
            </div>
          </div>
        );

      case 'openai':
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-blue-800 dark:text-blue-300 text-lg mb-2">OpenAI SDK 接入</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">使用 OpenAI 官方 SDK，兼容所有 Claude 模型</p>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-blue-100 dark:border-blue-700/50 mb-3">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Python 示例</h5>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto">
                  <code>{`from openai import OpenAI

client = OpenAI(
    api_key="your-api-key",
    base_url="https://your-api-domain.com/v1"
)

response = client.chat.completions.create(
    model="claude-sonnet-4-5",
    messages=[
        {"role": "user", "content": "你好！"}
    ]
)

print(response.choices[0].message.content)`}</code>
                </pre>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border border-blue-100 dark:border-blue-700/50">
                <h5 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Node.js 示例</h5>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-xs overflow-x-auto">
                  <code>{`import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'your-api-key',
  baseURL: 'https://your-api-domain.com/v1'
});

const response = await client.chat.completions.create({
  model: 'claude-sonnet-4-5',
  messages: [{ role: 'user', content: '你好！' }]
});

console.log(response.choices[0].message.content);`}</code>
                </pre>
              </div>
            </div>
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
                  <code>{`curl https://your-api-domain.com/v1/chat/completions \\
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
