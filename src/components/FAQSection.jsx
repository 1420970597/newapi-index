const FAQSection = () => {
  const faqs = [
    {
      icon: 'fa-gift',
      iconColor: 'text-blue-500',
      hoverBorder: 'hover:border-blue-100 dark:hover:border-blue-900',
      question: '充值有优惠吗？',
      answer: (
        <>
          <span className="font-semibold text-green-600 dark:text-green-400">有，充值享 3 折优惠！</span>
          汇率为 1:1（1美金=1人民币），充值后可享受超值折扣，大幅降低使用成本。
        </>
      ),
    },
    {
      icon: 'fa-server',
      iconColor: 'text-purple-500',
      hoverBorder: 'hover:border-purple-100 dark:hover:border-purple-900',
      question: '账号来源是什么？',
      answer: '我们使用自建的 Claude MAX 官方账号作为转发源，确保服务稳定性和安全性，支持最新的 Claude 模型。',
    },
    {
      icon: 'fa-brain',
      iconColor: 'text-green-500',
      hoverBorder: 'hover:border-green-100 dark:hover:border-green-900',
      question: '支持思考模式吗？',
      answer: (
        <>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold">
            全面支持
          </span>
          {' '}所有模型均支持 Extended Thinking（思考模式），让 AI 进行更深入的推理和分析。
        </>
      ),
    },
    {
      icon: 'fa-book-open',
      iconColor: 'text-red-500',
      hoverBorder: 'hover:border-red-100 dark:hover:border-red-900',
      question: '上下文长度是多少？',
      answer: (
        <>
          支持 <span className="font-bold text-blue-600 dark:text-blue-400">1M tokens</span> 超长上下文，
          可以处理大型文档、长对话历史等复杂场景。
        </>
      ),
    },
    {
      icon: 'fa-rocket',
      iconColor: 'text-yellow-500',
      hoverBorder: 'hover:border-yellow-100 dark:hover:border-yellow-900',
      question: '支持最新的 Opus 4.5 吗？',
      answer: (
        <>
          <span className="font-bold text-green-500">是的！</span>
          我们支持最新的 Claude Opus 4.5 模型，性能强大，适合复杂任务。查看模型价格了解更多。
        </>
      ),
    },
    {
      icon: 'fa-shield-alt',
      iconColor: 'text-indigo-500',
      hoverBorder: 'hover:border-indigo-100 dark:hover:border-indigo-900',
      question: '服务稳定吗？',
      answer: '使用 Claude MAX 官方账号，服务可用性 99.9%+，配备专业运维团队，确保 API 稳定运行。',
    },
    {
      icon: 'fa-question-circle',
      iconColor: 'text-orange-500',
      hoverBorder: 'hover:border-orange-100 dark:hover:border-orange-900',
      question: '如何开始使用？',
      answer: (
        <>
          注册账号 → 充值（享 3 折优惠）→ 获取 API Key →
          参考接入指南配置客户端 → 开始使用 Claude API。简单快捷！
        </>
      ),
      colSpan: 'md:col-span-2',
    },
  ];

  return (
    <div id="faq-section" className="col-span-1 md:col-span-4 lg:col-span-6 bg-gray-100 dark:bg-gray-800/50 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">常见问题</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-transparent ${faq.hoverBorder} transition-colors ${faq.colSpan || ''}`}
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <i className={`fas ${faq.icon} ${faq.iconColor} mr-2`}></i> {faq.question}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
