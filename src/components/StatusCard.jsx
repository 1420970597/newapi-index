const StatusCard = () => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-bento flex flex-col justify-between bento-card">
      <div>
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mr-3">
            <i className="fas fa-bolt"></i>
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white">系统状态</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">API 速率</span>
            <span className="font-mono font-semibold text-gray-900 dark:text-white">12 RPM</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">服务可用性</span>
            <span className="font-mono font-semibold text-green-500">99.9%</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <p className="text-xs text-gray-400 dark:text-gray-500">请勿滥用资源，禁止二次分发</p>
      </div>
    </div>
  );
};

export default StatusCard;
