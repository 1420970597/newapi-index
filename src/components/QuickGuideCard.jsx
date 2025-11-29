import { useApp } from '../context/AppContext';

const QuickGuideCard = () => {
  const { openGuideModal } = useApp();

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-bento bento-card">
      <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <i className="fas fa-book-open text-blue-500 mr-2"></i> 快速接入指南
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => openGuideModal('claude')}
          className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-100 dark:border-gray-600 hover:border-purple-200 dark:hover:border-purple-700 transition-all text-left group"
        >
          <div className="flex items-center mb-1">
            <i className="fas fa-brain text-gray-400 group-hover:text-purple-500 mr-2 transition-colors"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Claude Code</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">CLI 工具配置</p>
        </button>
        <button
          onClick={() => openGuideModal('openai')}
          className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-700 transition-all text-left group"
        >
          <div className="flex items-center mb-1">
            <i className="fas fa-code text-gray-400 group-hover:text-blue-500 mr-2 transition-colors"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">OpenAI SDK</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">通用接入方式</p>
        </button>
        <button
          onClick={() => openGuideModal('api')}
          className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-green-900/20 border border-gray-100 dark:border-gray-600 hover:border-green-200 dark:hover:border-green-700 transition-all text-left group"
        >
          <div className="flex items-center mb-1">
            <i className="fas fa-plug text-gray-400 group-hover:text-green-500 mr-2 transition-colors"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">API 文档</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">接口调用示例</p>
        </button>
        <button
          onClick={() => window.open('https://code.giot.edu.kg', '_blank')}
          className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border border-gray-100 dark:border-gray-600 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all text-left group"
        >
          <div className="flex items-center mb-1">
            <i className="fas fa-external-link-alt text-gray-400 group-hover:text-indigo-500 mr-2 transition-colors"></i>
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">管理控制台</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">充值和管理</p>
        </button>
      </div>
    </div>
  );
};

export default QuickGuideCard;
