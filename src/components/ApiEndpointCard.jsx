import { useApp } from '../context/AppContext';

const ApiEndpointCard = () => {
  const { copyToClipboard } = useApp();

  return (
    <div id="quick-start" className="col-span-1 md:col-span-2 lg:col-span-3 bg-indigo-600 dark:bg-indigo-700 rounded-3xl p-6 shadow-bento text-white flex flex-col justify-between bento-card group">
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <i className="fas fa-link mr-2 opacity-70"></i> API 接入地址
        </h3>
        <p className="text-indigo-100 text-sm mb-6">兼容 OpenAI & Claude 格式，直接替换 Base URL 即可使用。</p>
      </div>

      <div
        className="bg-indigo-800/50 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm border border-indigo-500/30 group-hover:bg-indigo-800/70 transition-colors cursor-pointer"
        onClick={() => copyToClipboard('https://code.giot.edu.kg')}
      >
        <code className="font-mono text-sm truncate mr-2">https://code.giot.edu.kg</code>
        <i className="fas fa-copy opacity-70 hover:opacity-100 transition-opacity"></i>
      </div>
    </div>
  );
};

export default ApiEndpointCard;
