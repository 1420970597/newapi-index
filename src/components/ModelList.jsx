import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { API_CONFIG, FALLBACK_MODELS, categorizeModel } from '../utils/constants';

const ModelList = ({ onModelCountChange }) => {
  const { copyToClipboard, showToast } = useApp();
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'gpt', label: 'GPT' },
    { id: 'claude', label: 'Claude' },
    { id: 'gemini', label: 'Gemini' },
    { id: 'deepseek', label: 'DeepSeek' },
    { id: 'glm', label: 'GLM' },
    { id: 'qwen', label: 'Qwen' },
    { id: 'grok', label: 'Grok' },
    { id: 'kimi', label: 'Kimi' },
    { id: 'other', label: '其他' },
  ];

  useEffect(() => {
    loadModels();
  }, []);

  useEffect(() => {
    filterModels(activeCategory);
  }, [models, activeCategory]);

  const loadModels = async () => {
    try {
      const fetchPromises = API_CONFIG.keys.map(key =>
        fetch(API_CONFIG.url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          credentials: 'omit'
        })
          .then(res => {
            if (!res.ok) throw new Error(`Network error: ${res.status}`);
            return res.json();
          })
          .then(data => {
            return (data.data || data).map(m => m.id || m);
          })
          .catch(e => {
            console.warn('Single API fetch failed:', e);
            return [];
          })
      );

      const results = await Promise.all(fetchPromises);
      const combinedModels = results.flat();
      const allModels = [...new Set(combinedModels)];

      if (allModels.length === 0) {
        throw new Error('All API requests failed');
      }

      setModels(allModels);
      onModelCountChange(allModels.length);
      setLoading(false);
    } catch (e) {
      console.warn('API fetch failed, using fallback data:', e);
      setModels(FALLBACK_MODELS);
      onModelCountChange(FALLBACK_MODELS.length);
      showToast('无法连接服务器，显示预设模型', 'fa-exclamation-circle');
      setLoading(false);
    }
  };

  const filterModels = (category) => {
    if (category === 'all') {
      setFilteredModels(models);
    } else {
      const filtered = models.filter(m => categorizeModel(m) === category);
      setFilteredModels(filtered);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleModelClick = (model) => {
    copyToClipboard(model);
  };

  if (loading) {
    return (
      <div className="col-span-1 md:col-span-4 lg:col-span-6 bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-bento bento-card min-h-[400px]">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 dark:text-gray-400">正在加载模型数据...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-1 md:col-span-4 lg:col-span-6 bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-bento bento-card min-h-[400px]">
        <div className="flex flex-col items-center justify-center py-20">
          <i className="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
          <p className="text-gray-500 dark:text-gray-400 mb-4">加载失败</p>
          <button
            onClick={loadModels}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-1 md:col-span-4 lg:col-span-6 bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-bento bento-card min-h-[400px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <i className="fas fa-cubes text-blue-500 mr-3"></i> 模型列表
        </h2>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === category.id
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filteredModels.map(model => (
          <div
            key={model}
            className="bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-2 rounded-lg text-center cursor-pointer transition-colors truncate"
            title={model}
            onClick={() => handleModelClick(model)}
          >
            {model}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelList;
