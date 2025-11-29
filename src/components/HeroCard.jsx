import { useApp } from '../context/AppContext';
import { scrollToElement } from '../utils/constants';

const HeroCard = () => {
  const { toggleTheme, theme } = useApp();

  return (
    <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-bento flex flex-col justify-between relative overflow-hidden group bento-card">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase">
            专业 · 稳定 · 高速
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          慧智AI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Claude API</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
          专业的 Claude API 服务商，自建 Claude MAX 账号转发<br />
          <span className="font-semibold text-blue-600 dark:text-blue-400">✨ 支持思考模式</span> ·
          <span className="font-semibold text-blue-600 dark:text-blue-400"> 📚 1M 超长上下文</span> ·
          <span className="font-semibold text-blue-600 dark:text-blue-400"> 🚀 最新 Opus 4.5</span><br />
          <span className="text-sm italic opacity-80">汇率 1:1 (1美金=1人民币) · 充值享 3 折优惠</span>
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollToElement('quick-start')}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center"
          >
            <i className="fas fa-rocket mr-2"></i> 开始使用
          </button>
          <button
            onClick={() => scrollToElement('model-pricing')}
            className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            <i className="fas fa-list mr-2"></i> 模型价格
          </button>
          <button
            onClick={() => scrollToElement('faq-section')}
            className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            <i className="fas fa-question-circle mr-2"></i> 常见问题
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
