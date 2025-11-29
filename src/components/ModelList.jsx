import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FALLBACK_MODELS, categorizeModel } from '../utils/constants';

const ModelList = ({ onModelCountChange }) => {
  const { copyToClipboard } = useApp();
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'haiku', label: 'Haiku' },
    { id: 'sonnet', label: 'Sonnet' },
    { id: 'opus', label: 'Opus' },
  ];

  useEffect(() => {
    // 直接使用预设的模型数据
    setModels(FALLBACK_MODELS);
    onModelCountChange(FALLBACK_MODELS.length);
  }, []);

  useEffect(() => {
    filterModels(activeCategory);
  }, [models, activeCategory]);

  const filterModels = (category) => {
    if (category === 'all') {
      setFilteredModels(models);
    } else {
      const filtered = models.filter(m => categorizeModel(m.id) === category);
      setFilteredModels(filtered);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleModelClick = (modelId) => {
    copyToClipboard(modelId);
  };

  return (
    <div id="model-pricing" className="col-span-1 md:col-span-4 lg:col-span-6 bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-bento bento-card min-h-[400px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <i className="fas fa-tags text-blue-500 mr-3"></i> 模型价格
        </h2>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredModels.map(model => (
          <div
            key={model.id}
            className="bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-700 rounded-xl p-4 cursor-pointer transition-all group"
            onClick={() => handleModelClick(model.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {model.name}
                </h3>
                <code className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                  {model.id}
                </code>
              </div>
              <i className="fas fa-copy text-gray-400 group-hover:text-blue-500 transition-colors"></i>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">输入:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{model.input}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">输出:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{model.output}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">上下文:</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{model.context}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {model.features.map((feature, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <i className="fas fa-info-circle text-blue-600 dark:text-blue-400 mt-1"></i>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p className="font-semibold mb-1">💰 优惠说明</p>
            <p>• 汇率：1 美金 = 1 人民币</p>
            <p>• 充值享受 <span className="font-bold text-blue-600 dark:text-blue-400">3 折优惠</span></p>
            <p>• 点击模型卡片可复制模型 ID</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
