const StatsCard = ({ modelCount }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-bento flex flex-col justify-center items-center text-center bento-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/10 dark:to-transparent opacity-50"></div>
      <div className="relative z-10">
        <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
          {modelCount || '10'}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
          Claude 模型
        </div>
        <div className="mt-4 inline-flex items-center text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-lg">
          <i className="fas fa-check-circle mr-1"></i> 包含最新 Opus 4.5
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
